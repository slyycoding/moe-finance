"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, SearchCheck, BadgeCheck, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { n: "01", icon: MessageCircle, title: "Tell Moe Your Goal",    desc: "One call, no jargon. You explain what you need — car, business loan, equipment or credit help. Moe listens.", accent: "#e05d38" },
  { n: "02", icon: SearchCheck,   title: "Moe Finds Your Lender", desc: "From 65+ lenders, Moe identifies the best match for your income, credit history and loan type. Prime or non-conforming — there's always an option.", accent: "#f97316" },
  { n: "03", icon: BadgeCheck,    title: "You Get Approved",      desc: "Moe structures the application to maximise your chances. Most clients hear back within 24–48 hours.", accent: "#fb923c" },
  { n: "04", icon: Rocket,        title: "You Move Forward",      desc: "Drive away. Grow your business. Build your future. And when you need Moe again — he's still there.", accent: "#e05d38" },
];

export function JourneySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const r = useReducedMotion();

  return (
    <section ref={ref} aria-label="Application to approval process"
      className="relative bg-[#060b16] py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-72 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(224,93,56,0.06) 0%, transparent 65%)", filter: "blur(40px)" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16">
          <p className="text-orange-400/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">The Process</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
            FROM APPLICATION{" "}
            <span style={{ background: "linear-gradient(135deg, #ff8c5a 0%, #e05d38 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              TO APPROVED.
            </span>
          </h2>
          <p className="text-white/40 max-w-sm mx-auto text-base sm:text-lg font-light mt-4">Four steps. One broker. Results that stick.</p>
        </motion.div>

        <ol className="relative max-w-2xl mx-auto list-none" aria-label="Finance process steps">
          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li key={step.n}
                  initial={{ opacity: 0, x: r ? 0 : -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: r ? 0 : -24 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 sm:gap-6 group">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center"
                      style={{ background: `${step.accent}15`, borderColor: `${step.accent}35` }}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: step.accent }} strokeWidth={1.5} aria-hidden />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 p-5 sm:p-6 rounded-2xl border border-white/8 bg-[#0a1120]"
                    style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.2)" }}>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span aria-hidden className="text-orange-400/30 text-xs font-bold tracking-widest">{step.n}</span>
                      <h3 className="text-white font-bold text-base sm:text-lg" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                    </div>
                    <p className="text-white/55 leading-relaxed text-sm sm:text-base">{step.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </div>
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: r ? 0 : 0.45, duration: 0.5 }}
          className="text-center mt-12 sm:mt-14">
          <a href="#contact" aria-label="Start your finance journey with Moe"
            className="btn-shine relative inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-white text-base overflow-hidden"
            style={{ background: "linear-gradient(135deg, #e05d38, #c94822)", boxShadow: "0 0 40px rgba(224,93,56,0.22), 0 12px 30px rgba(0,0,0,0.25)", minHeight: "52px" }}>
            Start Your Journey
            <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
          <p className="text-white/20 text-sm mt-4">No obligation. Just a conversation.</p>
        </motion.div>
      </div>
    </section>
  );
}
