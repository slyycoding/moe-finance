"use client";

import { MessageCircle, SearchCheck, BadgeCheck, Rocket, ArrowRight } from "lucide-react";

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
    <div id="process" className="py-16 sm:py-24" style={{ backgroundColor: "#131313" }}>
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="label-chip mb-4 inline-block">How It Works</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#F0EDE8" }}
          >
            From Application to Approved
          </h2>
          <p className="text-base" style={{ color: "rgba(240,237,232,0.52)" }}>
            Four steps. One broker. Results that last.
          </p>
        </div>

        {/* Desktop grid / Mobile swipe */}
        <ol
          className="swipe-list max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0"
          aria-label="Finance process steps"
        >
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <li
              key={n}
              className="swipe-card flex gap-4 p-6 rounded-xl"
              style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(196,146,42,0.12)", border: "1px solid rgba(196,146,42,0.25)" }}
                  aria-hidden
                >
                  <Icon className="w-5 h-5" style={{ color: "#C4922A" }} strokeWidth={1.75} />
                </div>
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "#C4922A" }}
                  aria-hidden
                >
                  {n}
                </p>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "#F0EDE8" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.52)" }}>
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="text-center mt-10">
          <a
            href="/contact"
            aria-label="Start your finance journey"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
          </a>
          <p className="text-sm mt-3" style={{ color: "rgba(240,237,232,0.3)" }}>
            No commitment. Just a conversation.
          </p>
        </div>
      </div>
    </div>
  );
}
