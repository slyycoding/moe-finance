"use client";

import { MessageCircle, SearchCheck, BadgeCheck, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Book a Call",
    desc: "One call, no jargon. Tell Moe what you need — home loan, vehicle finance, business funding or refinancing. He listens and asks the right questions.",
  },
  {
    n: "02",
    icon: SearchCheck,
    title: "Compare Lenders",
    desc: "From 65+ lenders, Moe identifies the best match for your income, credit history and loan type — prime or specialist. There is always an option.",
  },
  {
    n: "03",
    icon: BadgeCheck,
    title: "Get Approved",
    desc: "Moe structures the application to give you the best chance. Most clients receive a decision within 24–48 hours.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Settle Your Loan",
    desc: "Drive away. Buy your home. Grow your business. Moe stays available after settlement — for every question and every next step.",
  },
];

export function JourneySection() {
  return (
    <div className="py-16 sm:py-20" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C4922A" }}>
            How It Works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            From Application to Approved
          </h2>
          <p className="text-gray-500 text-base">Four steps. One broker. Results that last.</p>
        </div>

        <ol
          className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0"
          aria-label="Finance process steps"
        >
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <li
              key={n}
              className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#FDF6E7", border: "1px solid #E8D5A3" }}
                  aria-hidden
                >
                  <Icon className="w-5 h-5" style={{ color: "#C4922A" }} strokeWidth={1.75} />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#C4922A" }} aria-hidden>
                  {n}
                </p>
                <h3
                  className="text-gray-900 font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="text-center mt-10">
          <a
            href="#contact"
            aria-label="Start your finance journey"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-white font-semibold text-base transition-colors duration-200"
            style={{ backgroundColor: "#C4922A", minHeight: "52px" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#A67720")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4922A")}
          >
            Get Started Today
          </a>
          <p className="text-sm mt-3" style={{ color: "#9CA3AF" }}>No commitment. Just a conversation.</p>
        </div>
      </div>
    </div>
  );
}
