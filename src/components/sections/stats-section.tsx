"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, CalendarDays, Building2, LayoutList } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px 0px" });
  const r = useReducedMotion();

  useEffect(() => {
    if (!inView) { setCount(0); return; }
    if (r) { setCount(to); return; }
    let start = 0;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, r]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { Icon: Users,        value: 500, suffix: "+", label: "Clients Helped",   sub: "across Australia" },
  { Icon: CalendarDays, value: 4,   suffix: "+", label: "Years Experience", sub: "in finance" },
  { Icon: Building2,    value: 65,  suffix: "+", label: "Lender Partners",  sub: "nationwide" },
  { Icon: LayoutList,   value: 10,  suffix: "+", label: "Loan Categories",  sub: "covered" },
];

export function StatsSection() {
  return (
    <section aria-label="Key statistics" className="relative bg-[#080d18] py-12 sm:py-16 md:py-20">
      <div aria-hidden className="glow-line w-full absolute top-0" />
      {/* Glow hidden on mobile */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none hidden sm:flex">
        <div className="w-[50%] h-40 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(224,93,56,0.05) 0%, transparent 70%)", filter: "blur(20px)" }} />
      </div>
      <div className="container mx-auto px-4">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {stats.map(({ Icon, value, suffix, label, sub }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex flex-col items-center text-center px-4 sm:px-8 py-8 sm:py-12 bg-[#080d18] relative overflow-hidden">
              {/* Icon — no transition-all, just static styles */}
              <div aria-hidden className="mb-4 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" strokeWidth={1.5} />
              </div>
              <dt className="sr-only">{label}</dt>
              <dd className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                <Counter to={value} suffix={suffix} />
              </dd>
              <p className="text-white/70 font-semibold text-xs sm:text-sm mb-0.5">{label}</p>
              <p className="text-white/25 text-xs hidden sm:block">{sub}</p>
            </motion.div>
          ))}
        </dl>
      </div>
      <div aria-hidden className="glow-line w-full absolute bottom-0" />
    </section>
  );
}
