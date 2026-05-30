"use client";

import { ArrowRight, Phone } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Helped" },
  { value: "65+",  label: "Lender Partners" },
  { value: "4+",   label: "Years Experience" },
];

export function HeroSection() {
  return (
    <div
      className="relative pt-28 sm:pt-32 pb-20 sm:pb-24"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(196,146,42,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label chip */}
          <div className="inline-block mb-8">
            <span className="label-chip">Melbourne&apos;s Trusted Finance Broker</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-[3.75rem] font-bold leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.025em", color: "#F0EDE8" }}
          >
            Finance Solutions{" "}
            <span style={{ color: "#C4922A" }}>Tailored To Your Goals</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl mb-10 leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(240,237,232,0.55)" }}
          >
            Home loans, refinancing, vehicle finance and business lending.
            Melbourne based, servicing Australia-wide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <a
              href="/contact"
              aria-label="Book a call with Moe"
              className="btn-primary w-full sm:w-auto group"
            >
              Book A Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </a>
            <a
              href="#services"
              aria-label="See our finance services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-base transition-all duration-200"
              style={{
                minHeight: "52px",
                backgroundColor: "transparent",
                border: "1.5px solid rgba(255,255,255,0.12)",
                color: "rgba(240,237,232,0.7)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                e.currentTarget.style.color = "#F0EDE8";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(240,237,232,0.7)";
              }}
            >
              See Our Services
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)", color: "#C4922A" }}
                >
                  {value}
                </p>
                <p className="text-sm" style={{ color: "rgba(240,237,232,0.45)" }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Quick contact */}
          <div
            className="flex items-center justify-center gap-2 mt-8 text-sm"
            style={{ color: "rgba(240,237,232,0.35)" }}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            <span>Call or text:</span>
            <a
              href="tel:+61481293396"
              className="font-medium transition-colors duration-200"
              style={{ color: "rgba(240,237,232,0.55)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C4922A")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.55)")}
            >
              +61 481 293 396
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
