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
    <div className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C4922A" }}>
            What We Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Finance for Every Goal
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From your first home to growing your business — we find the right loan, with the right lender, at the right rate.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0 mb-10"
          role="list"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="flex flex-col p-6 rounded-xl border border-gray-100 bg-white group transition-all duration-200 hover:border-amber-200 hover:shadow-md"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 flex-shrink-0"
                style={{ backgroundColor: "#FDF6E7", border: "1px solid #E8D5A3" }}
                aria-hidden
              >
                <Icon className="w-5 h-5" style={{ color: "#C4922A" }} strokeWidth={1.75} />
              </div>
              <h3
                className="text-gray-900 font-semibold text-base mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
              <a
                href="#contact"
                aria-label={`Enquire about ${title}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold group/link transition-colors duration-200"
                style={{ color: "#C4922A" }}
              >
                Enquire Now
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" aria-hidden />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm" style={{ color: "#9CA3AF" }}>
          Not sure which product is right for you?{" "}
          <a
            href="#contact"
            className="font-medium underline underline-offset-2 transition-colors duration-200"
            style={{ color: "#C4922A" }}
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
