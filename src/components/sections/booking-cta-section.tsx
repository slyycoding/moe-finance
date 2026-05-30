"use client";

import { ArrowRight } from "lucide-react";

export function BookingCtaSection() {
  return (
    <div className="py-20 sm:py-28" style={{ backgroundColor: "#141A5D" }}>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="label-chip mb-6 inline-block">Get Started</span>

          <h2
            className="text-3xl sm:text-5xl font-bold mb-5 leading-[1.1]"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.025em", color: "#FFFFFF" }}
          >
            Book Your Free Call
          </h2>

          <p
            className="text-base sm:text-lg mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Tell Moe what you&apos;re looking for — he&apos;ll be in touch within 24 hours with your options, no pressure and no jargon.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href="/contact"
              aria-label="Start your finance application"
              className="btn-secondary group inline-flex items-center gap-2"
              style={{ fontSize: "1rem", padding: "1rem 2.25rem", minHeight: "56px" }}
            >
              Start My Application
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </a>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              4 quick questions &middot; No commitment &middot; Moe calls you back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
