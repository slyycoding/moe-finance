"use client";

import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Clock } from "lucide-react";
import { useId, useState } from "react";

const loanTypes = [
  "Home Loan",
  "Refinancing",
  "First Home Buyer",
  "Vehicle Finance",
  "Business Finance",
  "Equipment Finance",
  "Personal Loan",
  "Credit Impaired Lending",
  "Not Sure Yet",
];

const contactDetails = [
  { icon: Phone,  label: "Call or Text",  value: "+61 481 293 396", href: "tel:+61481293396" },
  { icon: Mail,   label: "Email",         value: "contact@moefinancial.com.au", href: "mailto:contact@moefinancial.com.au" },
  { icon: MapPin, label: "Location",      value: "Melbourne, VIC — Australia-wide", href: null },
  { icon: Clock,  label: "Response Time", value: "Typically within 24 hours", href: null },
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 0.875rem",
  borderRadius: "6px",
  border: "1px solid #E5E7EB",
  fontSize: "16px",
  color: "#111827",
  backgroundColor: "#fff",
  outline: "none",
  transition: "border-color 0.15s ease",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const ids = {
    name: useId(),
    phone: useId(),
    email: useId(),
    loanType: useId(),
    message: useId(),
  };
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: Record<string, string>) {
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Name is required";
    if (!data.phone?.trim()) errs.phone = "Phone is required";
    if (!data.email?.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!data.message?.trim()) errs.message = "Please include a message";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/mojbepdp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="py-16 sm:py-20" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C4922A" }}>
              Get In Touch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
            >
              Let&apos;s Build Your Plan
            </h2>
            <p className="text-gray-500 text-base">
              No pressure. No jargon. A clear conversation about your options and the best path forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12">

            {/* Left — contact details */}
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#FDF6E7", border: "1px solid #E8D5A3" }}
                    aria-hidden
                  >
                    <Icon className="w-4 h-4" style={{ color: "#C4922A" }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Finance broking services only — not a lender. Always read terms before signing. Moe Financial, Melbourne VIC.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <CheckCircle className="w-10 h-10" style={{ color: "#C4922A" }} strokeWidth={1.5} />
                  <div>
                    <p className="text-gray-900 font-bold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      Message Sent
                    </p>
                    <p className="text-gray-500 text-sm">Moe will be in touch within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm underline underline-offset-2 transition-colors duration-200"
                    style={{ color: "#C4922A" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  noValidate
                  aria-label="Finance enquiry form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Honeypot — hidden from real users, bots fill it */}
                  <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <input type="hidden" name="_subject" value="New Finance Enquiry — Moe Financial" />

                  <div>
                    <label htmlFor={ids.name} className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                      Full Name <span className="text-red-400" aria-hidden>*</span>
                    </label>
                    <input
                      id={ids.name}
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      style={fieldStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.name ? "#EF4444" : "#E5E7EB")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${ids.name}-err` : undefined}
                    />
                    {errors.name && (
                      <p id={`${ids.name}-err`} className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={ids.phone} className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                        Phone <span className="text-red-400" aria-hidden>*</span>
                      </label>
                      <input
                        id={ids.phone}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="04XX XXX XXX"
                        style={fieldStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                        onBlur={e => (e.currentTarget.style.borderColor = errors.phone ? "#EF4444" : "#E5E7EB")}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? `${ids.phone}-err` : undefined}
                      />
                      {errors.phone && (
                        <p id={`${ids.phone}-err`} className="mt-1 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={ids.email} className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                        Email <span className="text-red-400" aria-hidden>*</span>
                      </label>
                      <input
                        id={ids.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        style={fieldStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                        onBlur={e => (e.currentTarget.style.borderColor = errors.email ? "#EF4444" : "#E5E7EB")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? `${ids.email}-err` : undefined}
                      />
                      {errors.email && (
                        <p id={`${ids.email}-err`} className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor={ids.loanType} className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                      Finance Type
                    </label>
                    <select
                      id={ids.loanType}
                      name="loanType"
                      style={{ ...fieldStyle, appearance: "none", color: "#6B7280", cursor: "pointer" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#E5E7EB")}
                    >
                      <option value="">Select finance type…</option>
                      {loanTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor={ids.message} className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                      Message <span className="text-red-400" aria-hidden>*</span>
                    </label>
                    <textarea
                      id={ids.message}
                      name="message"
                      rows={3}
                      placeholder="Tell Moe about your situation — timeframe, loan amount, any questions…"
                      style={{ ...fieldStyle, resize: "none" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.message ? "#EF4444" : "#E5E7EB")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? `${ids.message}-err` : undefined}
                    />
                    {errors.message && (
                      <p id={`${ids.message}-err`} className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-md font-bold text-white text-base transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
                    style={{ backgroundColor: "#C4922A", minHeight: "52px" }}
                    onMouseEnter={e => { if (status !== "submitting") e.currentTarget.style.backgroundColor = "#A67720"; }}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4922A")}
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                    {status !== "submitting" && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-xs text-center">
                      Something went wrong. Please try again or call +61 481 293 396.
                    </p>
                  )}

                  <p className="text-center text-xs" style={{ color: "#9CA3AF" }}>
                    Typically responds within 24 hours. No obligation required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
