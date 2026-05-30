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
    <div className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C4922A" }}>
            Why Choose Us
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Why Choose Moe Financial
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We are not a bank. We work for you — finding the right lender, structuring the right deal, and staying with you long after settlement.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0" role="list">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className={`p-6 rounded-xl border border-gray-100 bg-white hover:border-amber-200 hover:shadow-sm transition-all duration-200${i === 4 ? " sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
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
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
