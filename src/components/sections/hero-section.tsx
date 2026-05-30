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
      style={{ backgroundColor: "#141A5D" }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(37,55,165,0.6) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Gold label chip */}
          <div className="inline-block mb-8">
            <span className="label-chip">Melbourne&apos;s Trusted Finance Broker</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-[3.75rem] font-bold leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.025em", color: "#FFFFFF" }}
          >
            Finance Solutions{" "}
            <span style={{ color: "#F4C542" }}>Tailored To Your Goals</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl mb-10 leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Home loans, refinancing, vehicle finance and business lending.
            Melbourne based, servicing Australia-wide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <a
              href="/contact"
              aria-label="Book a call with Moe"
              className="btn-secondary w-full sm:w-auto group inline-flex items-center justify-center gap-2"
              style={{ fontSize: "1rem", padding: "1rem 2rem", minHeight: "52px" }}
            >
              Book A Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </a>
            <a
              href="#services"
              aria-label="See our finance services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
              style={{
                minHeight: "52px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#FFFFFF",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              See Our Services
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)", color: "#F4C542" }}
                >
                  {value}
                </p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Quick contact */}
          <div
            className="flex items-center justify-center gap-2 mt-8 text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            <span>Call or text:</span>
            <a
              href="tel:+61481293396"
              className="font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F4C542")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >
              +61 481 293 396
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
