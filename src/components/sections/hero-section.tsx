"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Helped" },
  { value: "65+",  label: "Lender Partners" },
  { value: "4+",   label: "Years Experience" },
];

export function HeroSection() {
  const r = useReducedMotion();

  return (
    <div
      className="relative bg-white pt-24 sm:pt-28 pb-16 sm:pb-20"
      style={{
        opacity: r ? 1 : undefined,
        animation: r ? "none" : "heroFadeIn 0.6s ease forwards",
      }}
    >
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes heroFadeIn { from { opacity: 1; } to { opacity: 1; } }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-medium"
            style={{ borderColor: "#E8D5A3", backgroundColor: "#FDF6E7", color: "#A67720" }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4922A" }} aria-hidden />
            Melbourne&apos;s Trusted Finance Broker
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Finance Solutions{" "}
            <span style={{ color: "#C4922A" }}>Tailored To Your Goals</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto font-light">
            Home loans, refinancing, vehicle finance and business lending.
            Melbourne based, servicing Australia-wide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <a
              href="#contact"
              aria-label="Book a call with Moe"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-7 py-4 rounded-md text-white font-semibold text-base group transition-colors duration-200"
              style={{ backgroundColor: "#C4922A", minHeight: "52px" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#A67720")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4922A")}
            >
              Book A Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </a>
            <a
              href="#services"
              aria-label="See our finance services"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-7 py-4 rounded-md font-semibold text-base transition-colors duration-200 border border-gray-200 text-gray-700 hover:border-gray-300 hover:text-gray-900"
              style={{ minHeight: "52px" }}
            >
              See Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-8 border-t border-gray-100">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)", color: "#C4922A" }}>{value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Quick contact */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-400">
            <Phone className="w-3.5 h-3.5" aria-hidden />
            <span>Call or text: </span>
            <a href="tel:+61481293396" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
              +61 481 293 396
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
