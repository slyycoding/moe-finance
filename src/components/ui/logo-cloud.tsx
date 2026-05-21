"use client";

import { useState, useEffect } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";

function LenderItem({ name, slug, invertOnDark = false }: { name: string; slug: string; invertOnDark?: boolean }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border flex-shrink-0 select-none bg-white/[0.05] border-white/[0.08]"
      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.2)" }}
    >
      {!failed ? (
        <img
          src={`/logos/${slug}.svg`}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          loading="lazy"
          decoding="async"
          className="h-5 sm:h-6 w-auto max-w-[80px] object-contain flex-shrink-0"
          style={invertOnDark ? { filter: "brightness(0) invert(1)" } : undefined}
        />
      ) : (
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap text-white/60">{name}</span>
      )}
      {!failed && (
        <span className="text-[11px] font-medium tracking-wide whitespace-nowrap leading-none text-white/40">{name}</span>
      )}
    </div>
  );
}

export type LenderDef = { name: string; slug: string; lightBg?: boolean };

interface LogoCloudProps { lenders: LenderDef[]; speed?: number }

export function LogoCloud({ lenders, speed = 52 }: LogoCloudProps) {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);

  useEffect(() => {
    if (!width) return;
    const half = width / 2;
    const controls = animate(x, [0, -half], {
      ease: "linear",
      duration: speed,
      repeat: Infinity,
      repeatType: "loop",
      onRepeat: () => x.set(0),
    });
    return controls.stop;
  }, [width, speed, x]);

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-36 z-10"
        style={{ background: "linear-gradient(to right, #080d18 20%, transparent 100%)" }} />
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-36 z-10"
        style={{ background: "linear-gradient(to left, #080d18 20%, transparent 100%)" }} />

      <motion.div
        ref={ref}
        style={{ x, willChange: "transform" }}
        className="flex items-center gap-3 w-max py-1.5"
        aria-label="Lending partner logos"
      >
        {[...lenders, ...lenders].map((l, i) => (
          <LenderItem key={`${l.slug}-${i}`} name={l.name} slug={l.slug} invertOnDark={l.lightBg} />
        ))}
      </motion.div>
    </div>
  );
}
