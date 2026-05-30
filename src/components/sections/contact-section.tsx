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
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.1)",
  fontSize: "16px",
  color: "#F0EDE8",
  backgroundColor: "#0A0A0A",
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
    <div className="py-16 sm:py-24" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="label-chip mb-4 inline-block">Get In Touch</span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#F0EDE8" }}
            >
              Let&apos;s Build Your Plan
            </h2>
            <p className="text-base" style={{ color: "rgba(240,237,232,0.52)" }}>
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
                    style={{ backgroundColor: "rgba(196,146,42,0.12)", border: "1px solid rgba(196,146,42,0.25)" }}
                    aria-hidden
                  >
                    <Icon className="w-4 h-4" style={{ color: "#C4922A" }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "rgba(240,237,232,0.3)" }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-sm transition-colors duration-200"
                        style={{ color: "rgba(240,237,232,0.7)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#C4922A")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.7)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm" style={{ color: "rgba(240,237,232,0.7)" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(240,237,232,0.3)" }}>
                  Finance broking services only — not a lender. Always read terms before signing. Moe Financial, Melbourne VIC.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div
              className="rounded-xl p-6 sm:p-8"
              style={{ backgroundColor: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <CheckCircle className="w-10 h-10" style={{ color: "#C4922A" }} strokeWidth={1.5} />
                  <div>
                    <p
                      className="font-bold text-lg mb-1"
                      style={{ fontFamily: "var(--font-heading)", color: "#F0EDE8" }}
                    >
                      Message Sent
                    </p>
                    <p className="text-sm" style={{ color: "rgba(240,237,232,0.52)" }}>
                      Moe will be in touch within 24 hours.
                    </p>
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
                  {/* Honeypot */}
                  <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <input type="hidden" name="_subject" value="New Finance Enquiry — Moe Financial" />

                  <div>
                    <label htmlFor={ids.name} className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(240,237,232,0.4)" }}>
                      Full Name <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                    </label>
                    <input
                      id={ids.name}
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      style={fieldStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "rgba(255,255,255,0.1)")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${ids.name}-err` : undefined}
                    />
                    {errors.name && (
                      <p id={`${ids.name}-err`} className="mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={ids.phone} className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(240,237,232,0.4)" }}>
                        Phone <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                      </label>
                      <input
                        id={ids.phone}
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="04XX XXX XXX"
                        style={fieldStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                        onBlur={e => (e.currentTarget.style.borderColor = errors.phone ? "#ef4444" : "rgba(255,255,255,0.1)")}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? `${ids.phone}-err` : undefined}
                      />
                      {errors.phone && (
                        <p id={`${ids.phone}-err`} className="mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={ids.email} className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(240,237,232,0.4)" }}>
                        Email <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                      </label>
                      <input
                        id={ids.email}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        style={fieldStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                        onBlur={e => (e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "rgba(255,255,255,0.1)")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? `${ids.email}-err` : undefined}
                      />
                      {errors.email && (
                        <p id={`${ids.email}-err`} className="mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor={ids.loanType} className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(240,237,232,0.4)" }}>
                      Finance Type
                    </label>
                    <select
                      id={ids.loanType}
                      name="loanType"
                      style={{ ...fieldStyle, appearance: "none", cursor: "pointer", color: "rgba(240,237,232,0.5)" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ backgroundColor: "#131313" }}>Select finance type…</option>
                      {loanTypes.map(t => (
                        <option key={t} value={t} style={{ backgroundColor: "#131313", color: "#F0EDE8" }}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor={ids.message} className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(240,237,232,0.4)" }}>
                      Message <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                    </label>
                    <textarea
                      id={ids.message}
                      name="message"
                      rows={3}
                      placeholder="Tell Moe about your situation — timeframe, loan amount, any questions…"
                      style={{ ...fieldStyle, resize: "none" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C4922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.message ? "#ef4444" : "rgba(255,255,255,0.1)")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? `${ids.message}-err` : undefined}
                    />
                    {errors.message && (
                      <p id={`${ids.message}-err`} className="mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
                    style={{ backgroundColor: "#C4922A", color: "#0A0A0A", minHeight: "52px" }}
                    onMouseEnter={e => { if (status !== "submitting") e.currentTarget.style.backgroundColor = "#A67720"; }}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4922A")}
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                    {status !== "submitting" && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-xs text-center" style={{ color: "#ef4444" }}>
                      Something went wrong. Please try again or call +61 481 293 396.
                    </p>
                  )}

                  <p className="text-center text-xs" style={{ color: "rgba(240,237,232,0.3)" }}>
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
