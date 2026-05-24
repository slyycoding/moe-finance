"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function AmbientOrb({ className, color, size }: { className?: string; color: string; size: number }) {
  return (
    <div aria-hidden className={cn("absolute rounded-full pointer-events-none", className)}
      style={{ width: size, height: size, background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, filter: "blur(40px)" }} />
  );
}

function FloatingShape({ className, delay = 0, width = 300, height = 80, rotate = 0, gradient = "from-orange-500/[0.06]" }: {
  className?: string; delay?: number; width?: number; height?: number; rotate?: number; gradient?: string;
}) {
  const r = useReducedMotion();
  return (
    <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: r ? 0 : 1 }}
      transition={{ duration: 2.5, delay }} className={cn("absolute pointer-events-none hidden sm:block", className)}>
      <motion.div
        animate={r ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height, rotate, willChange: "transform" }}>
        <div className={cn("absolute inset-0 rounded-full bg-gradient-to-r to-transparent", gradient, "border border-white/[0.04]")} />
      </motion.div>
    </motion.div>
  );
}

const lineFade: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 22, delay: 0.08 + i * 0.1 } }),
};
const upFade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 26, delay: 0.32 + i * 0.07 } }),
};

export function HeroGeometric({ title1 = "Finance Made", title2 = "Personal" }: {
  title1?: string; title2?: string;
}) {
  const r = useReducedMotion();
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#080d18] px-4">
      {/* All orbs hidden on mobile — GPU cost too high */}
      <AmbientOrb className="hidden sm:block -top-20 left-1/2 -translate-x-1/2" color="rgba(224,93,56,0.07)" size={600} />
      <AmbientOrb className="hidden sm:block top-1/3 -left-40" color="rgba(59,130,246,0.04)" size={400} />
      <AmbientOrb className="hidden sm:block bottom-10 right-10" color="rgba(224,93,56,0.04)" size={280} />

      {/* Floating shapes — desktop only, reduced to 2 */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape delay={0.4} width={460} height={90} rotate={9}  gradient="from-orange-500/[0.05]" className="left-[-7%] top-[22%]" />
        <FloatingShape delay={0.6} width={300} height={70} rotate={-13} gradient="from-blue-500/[0.04]"  className="right-[-4%] top-[60%]" />
      </div>

      {/* Subtle grid — desktop only */}
      <div aria-hidden className="absolute inset-0 opacity-[0.012] pointer-events-none hidden md:block"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "90px 90px" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* No willChange on one-shot animations — Framer Motion handles it internally */}
        <h1 className="font-extrabold leading-none tracking-tight uppercase mb-6 overflow-hidden"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}>
          <motion.span custom={0} variants={lineFade} initial={r ? "visible" : "hidden"} animate="visible"
            className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {title1}
          </motion.span>
          <motion.span custom={1} variants={lineFade} initial={r ? "visible" : "hidden"} animate="visible"
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ background: "linear-gradient(135deg, #ff9a6c 0%, #e05d38 45%, #d94a20 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {title2}
          </motion.span>
        </h1>

        <motion.p custom={0} variants={upFade} initial={r ? "visible" : "hidden"} animate="visible"
          className="text-sm md:text-base lg:text-lg text-white/55 mb-8 md:mb-10 leading-relaxed font-light max-w-md mx-auto"
          style={{ fontFamily: "var(--font-body)" }}>
          Melbourne&apos;s most trusted finance broker. 500+ clients helped, 65+ lenders accessed — automotive, business, personal and beyond.
        </motion.p>

        <motion.div custom={1} variants={upFade} initial={r ? "visible" : "hidden"} animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 md:mb-16 w-full sm:w-auto">
          <a href="#contact" aria-label="Book a strategy call with Moe"
            className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-full font-bold text-white text-sm tracking-wide group"
            style={{ background: "linear-gradient(135deg, #e05d38, #c94822)", boxShadow: "0 0 28px rgba(224,93,56,0.22), 0 1px 0 rgba(255,255,255,0.1) inset", minHeight: "52px" }}>
            Book a Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
          </a>
          <a href="#services" aria-label="See available finance solutions"
            className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 rounded-full border border-white/12 text-white/55 hover:text-white/80 hover:border-white/20 font-medium text-sm tracking-wide transition-colors duration-200"
            style={{ minHeight: "52px" }}>
            See What&apos;s Possible
          </a>
        </motion.div>

        <motion.div custom={2} variants={upFade} initial={r ? "visible" : "hidden"} animate="visible"
          className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-white/15 text-xs" aria-hidden>
            <div className="w-8 h-px bg-white/10" /><span className="uppercase tracking-widest">trusted by</span><div className="w-8 h-px bg-white/10" />
          </div>
          <ul aria-label="Sample lender partners" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 list-none p-0">
            {["Westpac", "Macquarie", "Pepper Money", "Liberty", "Latitude"].map(n => (
              <li key={n} className="text-white/20 text-xs font-medium tracking-wider uppercase">{n}</li>
            ))}
            <li className="text-orange-400/45 text-xs font-medium tracking-wider uppercase">+ 60 more</li>
          </ul>
        </motion.div>
      </div>

      <div aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={r ? {} : { y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4 text-white/15" />
        </motion.div>
      </div>
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(8,13,24,0.55) 100%)" }} />
    </div>
  );
}
