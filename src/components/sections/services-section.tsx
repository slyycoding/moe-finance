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
    <div id="services" className="py-16 sm:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="label-chip-navy mb-4 inline-block">What We Offer</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#1E293B" }}
          >
            Finance for Every Goal
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
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
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#C7D2FE";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(20,26,93,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 flex-shrink-0"
                style={{ backgroundColor: "#EEF2FF", border: "1px solid #C7D2FE" }}
                aria-hidden
              >
                <Icon className="w-5 h-5" style={{ color: "#141A5D" }} strokeWidth={1.75} />
              </div>
              <h3
                className="font-semibold text-base mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "#1E293B" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#64748B" }}>
                {desc}
              </p>
              <a
                href="/contact"
                aria-label={`Enquire about ${title}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                style={{ color: "#141A5D" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F4C542")}
                onMouseLeave={e => (e.currentTarget.style.color = "#141A5D")}
              >
                Enquire Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm" style={{ color: "#94A3B8" }}>
          Not sure which product is right for you?{" "}
          <a
            href="/contact"
            className="font-medium underline underline-offset-2 transition-colors duration-200"
            style={{ color: "#141A5D" }}
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
