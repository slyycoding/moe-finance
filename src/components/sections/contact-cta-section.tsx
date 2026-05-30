"use client";

import { Mail, Phone } from "lucide-react";

export function ContactCtaSection() {
  return (
    <div className="py-20 sm:py-28" style={{ backgroundColor: "#F4C542" }}>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="label-chip-dark mb-6 inline-block">Get In Touch</span>

          <h2
            className="text-3xl sm:text-5xl font-bold mb-5 leading-[1.1]"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.025em", color: "#141A5D" }}
          >
            Need Help Before Applying?
          </h2>

          <p
            className="text-base sm:text-lg mb-10 leading-relaxed max-w-lg mx-auto"
            style={{ color: "rgba(20,26,93,0.65)" }}
          >
            Contact Moe directly. Whether you have questions about your options or just want to understand the process — he&apos;s here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contact@moefinancial.com.au"
              aria-label="Email Moe"
              className="btn-dark w-full sm:w-auto inline-flex items-center gap-2"
              style={{ fontSize: "0.9375rem", minHeight: "52px" }}
            >
              <Mail className="w-4 h-4" aria-hidden />
              Email Moe
            </a>
            <a
              href="tel:+61481293396"
              aria-label="Call Moe on +61 481 293 396"
              className="btn-dark-outline w-full sm:w-auto inline-flex items-center gap-2"
              style={{ fontSize: "0.9375rem", minHeight: "52px" }}
            >
              <Phone className="w-4 h-4" aria-hidden />
              +61 481 293 396
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
