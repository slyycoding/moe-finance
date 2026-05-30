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
  { icon: Phone,  label: "Call or Text",  value: "+61 481 293 396",              href: "tel:+61481293396" },
  { icon: Mail,   label: "Email",          value: "contact@moefinancial.com.au",  href: "mailto:contact@moefinancial.com.au" },
  { icon: MapPin, label: "Location",       value: "Melbourne, VIC — Australia-wide", href: null },
  { icon: Clock,  label: "Response Time",  value: "Typically within 24 hours",   href: null },
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.8125rem 1rem",
  borderRadius: "8px",
  border: "1px solid #E2E8F0",
  fontSize: "16px",
  color: "#1E293B",
  backgroundColor: "#FFFFFF",
  outline: "none",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  fontFamily: "var(--font-body, sans-serif)",
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
    <div className="py-16 sm:py-24" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container mx-auto" style={{ maxWidth: "1100px" }}>

        {/* Section header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="label-chip-navy mb-4 inline-block">Get In Touch</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#1E293B" }}
          >
            Let&apos;s Build Your Plan
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
            No pressure. No jargon. A clear conversation about your options and the best path forward.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10 items-start">

          {/* Left — contact information */}
          <div className="flex flex-col gap-4">

            <p className="text-sm leading-relaxed mb-1" style={{ color: "#475569" }}>
              Reach Moe directly — no phone trees, no waiting rooms. He responds personally to every enquiry.
            </p>

            {/* Contact detail cards */}
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EEF2FF", border: "1px solid #C7D2FE" }}
                  aria-hidden
                >
                  <Icon className="w-5 h-5" style={{ color: "#141A5D" }} strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                    style={{ color: "#94A3B8" }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-semibold text-base block truncate transition-colors duration-200"
                      style={{ color: "#1E293B" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#141A5D")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#1E293B")}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-base" style={{ color: "#1E293B" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Disclaimer */}
            <div className="pt-3 mt-1" style={{ borderTop: "1px solid #E2E8F0" }}>
              <p className="text-xs leading-relaxed" style={{ color: "#94A3B8" }}>
                Finance broking services only — not a lender. Always read terms before signing. Moe Financial, Melbourne VIC.
              </p>
            </div>
          </div>

          {/* Right — enquiry form */}
          <div
            className="rounded-xl p-7 sm:p-8"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 24px rgba(20,26,93,0.06)" }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle className="w-10 h-10" style={{ color: "#141A5D" }} strokeWidth={1.5} />
                <div>
                  <p
                    className="font-bold text-lg mb-1"
                    style={{ fontFamily: "var(--font-heading)", color: "#1E293B" }}
                  >
                    Message Sent
                  </p>
                  <p className="text-sm" style={{ color: "#64748B" }}>
                    Moe will be in touch within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm underline underline-offset-2 transition-colors duration-200"
                  style={{ color: "#141A5D" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                noValidate
                aria-label="Finance enquiry form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Honeypot */}
                <input type="text" name="_honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <input type="hidden" name="_subject" value="New Finance Enquiry — Moe Financial" />

                {/* Full Name */}
                <div>
                  <label
                    htmlFor={ids.name}
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#64748B" }}
                  >
                    Full Name <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                  </label>
                  <input
                    id={ids.name}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    style={fieldStyle}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = "#141A5D";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(20,26,93,0.08)";
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? `${ids.name}-err` : undefined}
                  />
                  {errors.name && (
                    <p id={`${ids.name}-err`} className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.name}</p>
                  )}
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={ids.phone}
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#64748B" }}
                    >
                      Phone <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                    </label>
                    <input
                      id={ids.phone}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="04XX XXX XXX"
                      style={fieldStyle}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = "#141A5D";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(20,26,93,0.08)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = errors.phone ? "#ef4444" : "#E2E8F0";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? `${ids.phone}-err` : undefined}
                    />
                    {errors.phone && (
                      <p id={`${ids.phone}-err`} className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor={ids.email}
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#64748B" }}
                    >
                      Email <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                    </label>
                    <input
                      id={ids.email}
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      style={fieldStyle}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = "#141A5D";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(20,26,93,0.08)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "#E2E8F0";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${ids.email}-err` : undefined}
                    />
                    {errors.email && (
                      <p id={`${ids.email}-err`} className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Finance Type */}
                <div>
                  <label
                    htmlFor={ids.loanType}
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#64748B" }}
                  >
                    Finance Type
                  </label>
                  <select
                    id={ids.loanType}
                    name="loanType"
                    style={{ ...fieldStyle, appearance: "none", cursor: "pointer", color: "#64748B" }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = "#141A5D";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(20,26,93,0.08)";
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Select finance type…</option>
                    {loanTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor={ids.message}
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#64748B" }}
                  >
                    Message <span style={{ color: "#ef4444" }} aria-hidden>*</span>
                  </label>
                  <textarea
                    id={ids.message}
                    name="message"
                    rows={4}
                    placeholder="Tell Moe about your situation — timeframe, loan amount, any questions…"
                    style={{ ...fieldStyle, resize: "none" }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = "#141A5D";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(20,26,93,0.08)";
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = errors.message ? "#ef4444" : "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? `${ids.message}-err` : undefined}
                  />
                  {errors.message && (
                    <p id={`${ids.message}-err`} className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
                  style={{ backgroundColor: "#141A5D", color: "#FFFFFF", minHeight: "52px" }}
                  onMouseEnter={e => {
                    if (status !== "submitting") {
                      e.currentTarget.style.backgroundColor = "#0D1245";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(20,26,93,0.28)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#141A5D";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
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

                <p className="text-center text-xs" style={{ color: "#94A3B8" }}>
                  Typically responds within 24 hours. No obligation required.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
