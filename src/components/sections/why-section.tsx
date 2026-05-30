"use client";

import { Users, Building2, Clock, Globe, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Personalised Advice",
    desc: "Your situation is unique. Moe takes the time to understand your goals, income and credit profile before recommending a single lender.",
  },
  {
    icon: Building2,
    title: "Access to 65+ Lenders",
    desc: "From major banks to specialist lenders — we have access to a wide panel so you get genuine choice, not just what one bank offers.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most clients receive a lending decision within 24–48 hours. We handle the paperwork so you can focus on what matters.",
  },
  {
    icon: Globe,
    title: "Melbourne Based, Australia-Wide",
    desc: "Located in Melbourne with clients across every state. We work remotely, online and by phone — wherever you are.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "Our relationship does not end at settlement. Moe is available after your loan is secured for reviews, refinancing and future needs.",
  },
];

export function WhySection() {
  return (
    <div id="why" className="py-16 sm:py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="label-chip-navy mb-4 inline-block">Why Choose Us</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#1E293B" }}
          >
            Why Choose Moe Financial
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
            We are not a bank. We work for you — finding the right lender, structuring the right deal, and staying with you long after settlement.
          </p>
        </div>

        {/* Desktop grid / Mobile swipe */}
        <ul
          className="swipe-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0"
          role="list"
        >
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className={`swipe-card p-6 rounded-xl transition-all duration-200${i === 4 ? " sm:col-span-2 lg:col-span-1" : ""}`}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#C7D2FE";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(20,26,93,0.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
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
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
