"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Car, Building2, BarChart3 } from "lucide-react";

const cards = [
  { icon: Car,       title: "Ready for your next vehicle?",  desc: "New, used or prestige — Moe finds the best rate across 65+ lenders.", accent: "#e05d38" },
  { icon: Building2, title: "Ready to grow your business?",  desc: "Equipment, working capital or commercial property — structured right from day one.", accent: "#3b82f6" },
  { icon: BarChart3, title: "Need another chance?",          desc: "Credit challenges aren't dead ends. Moe specialises in outside-policy deals others walk away from.", accent: "#a855f7" },
];

const vp = { once: true, amount: 0.2 } as const;

export function PhilosophySection() {
  const r = useReducedMotion();
  return (
    <div className="relative bg-[#080d18] py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-start justify-center pt-16">
          <div className="w-full max-w-2xl h-96 rounded-full"
            style={{ background: "radial-gradient(ellipse at center, rgba(224,93,56,0.10) 0%, rgba(224,93,56,0.03) 40%, transparent 70%)", filter: "blur(30px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.018] hidden sm:block"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: r ? 0 : 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.8 }} className="max-w-[860px] mx-auto text-center mb-6">
          <div aria-hidden className="mb-8 flex justify-center">
            <span className="text-[80px] sm:text-[100px] leading-none font-serif select-none"
              style={{ background: "linear-gradient(180deg, rgba(224,93,56,0.55) 0%, rgba(224,93,56,0.1) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: "0.7" }}>
              &ldquo;
            </span>
          </div>
          <figure>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10"
              style={{ fontFamily: "var(--font-heading)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              With Moe, it&apos;s never simply a{" "}
              <span style={{ background: "linear-gradient(135deg, #ff8c5a 0%, #e05d38 50%, #ff6b35 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 8px rgba(224,93,56,0.2))" }}>&lsquo;no&rsquo;</span>{" "}
              — there is always an{" "}
              <span style={{ background: "linear-gradient(135deg, #ff8c5a 0%, #e05d38 50%, #ff6b35 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 8px rgba(224,93,56,0.2))" }}>option, strategy or pathway</span>{" "}
              worth exploring.
            </blockquote>
            <figcaption className="text-white/35 text-xs tracking-[0.3em] uppercase">— The Moe Financial Philosophy</figcaption>
          </figure>
        </motion.div>

        <div aria-hidden className="max-w-xs mx-auto my-12 sm:my-16"><div className="glow-line" /></div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto list-none" role="list">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.li key={card.title}
                initial={{ opacity: 0, y: r ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                whileHover={r ? {} : { y: -7, transition: { duration: 0.22 } }}
                className="relative group rounded-2xl overflow-hidden"
                style={{ background: "rgba(12, 20, 38, 0.85)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset", padding: "40px 36px" }}>
                <div aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 20%, ${card.accent}18 0%, transparent 65%)`, boxShadow: `inset 0 0 0 1px ${card.accent}30` }} />
                <div aria-hidden className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${card.accent}18`, border: `1px solid ${card.accent}35` }}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} style={{ color: card.accent }} />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>{card.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base group-hover:text-white/80 transition-colors duration-300">{card.desc}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
