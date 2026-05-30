"use client";

import { Home, RefreshCcw, Key, Car, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Loans",
    desc: "Residential and investment property loans. We compare 65+ lenders to find your best rate and structure the deal to suit your situation.",
  },
  {
    icon: RefreshCcw,
    title: "Refinancing",
    desc: "Already have a loan? We review your current rate and find something better. Most refinances save thousands over the life of the loan.",
  },
  {
    icon: Key,
    title: "First Home Buyers",
    desc: "Buying your first home is a big step. We guide you through grants, guarantees and lender options to get you into your first property sooner.",
  },
  {
    icon: Car,
    title: "Vehicle Finance",
    desc: "New, used or commercial vehicles across all lenders and all states. Fast approvals with competitive rates for all credit profiles.",
  },
  {
    icon: Briefcase,
    title: "Business Finance",
    desc: "Business loans, equipment finance and commercial lending. We structure the right deal for your business at any stage of growth.",
  },
];

export function ServicesSection() {
  return (
    <div id="services" className="py-16 sm:py-24" style={{ backgroundColor: "#0C1A38" }}>
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="label-chip mb-4 inline-block">What We Offer</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#F0EDE8" }}
          >
            Finance for Every Goal
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,232,0.52)" }}>
            From your first home to growing your business — we find the right loan, with the right lender, at the right rate.
          </p>
        </div>

        {/* Desktop grid / Mobile swipe */}
        <ul
          className="swipe-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0 mb-10"
          role="list"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="swipe-card flex flex-col p-6 rounded-xl transition-all duration-200 group"
              style={{
                backgroundColor: "#0F2044",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(240,165,0,0.3)";
                e.currentTarget.style.backgroundColor = "#132249";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.backgroundColor = "#131313";
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 flex-shrink-0"
                style={{ backgroundColor: "rgba(240,165,0,0.12)", border: "1px solid rgba(240,165,0,0.25)" }}
                aria-hidden
              >
                <Icon className="w-5 h-5" style={{ color: "#F0A500" }} strokeWidth={1.75} />
              </div>
              <h3
                className="font-semibold text-base mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "#F0EDE8" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "rgba(240,237,232,0.52)" }}>
                {desc}
              </p>
              <a
                href="/contact"
                aria-label={`Enquire about ${title}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                style={{ color: "#F0A500" }}
              >
                Enquire Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm" style={{ color: "rgba(240,237,232,0.35)" }}>
          Not sure which product is right for you?{" "}
          <a
            href="/contact"
            className="font-medium underline underline-offset-2 transition-colors duration-200"
            style={{ color: "#F0A500" }}
            aria-label="Ask Moe about finance options"
          >
            Ask Moe
          </a>{" "}
          — he will find the right fit.
        </p>
      </div>
    </div>
  );
}
