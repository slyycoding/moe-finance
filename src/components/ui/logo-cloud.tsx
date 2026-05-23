"use client";

import { useState, useEffect } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";

function LenderItem({ name, slug }: { name: string; slug: string; lightBg?: boolean }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex-shrink-0 select-none flex items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.97)",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "10px",
        width: "148px",
        height: "54px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.03)",
      }}
    >
      {!failed ? (
        <img
          src={`/logos/${slug}.svg`}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          loading="lazy"
          decoding="async"
          style={{ height: "26px", width: "auto", maxWidth: "108px", objectFit: "contain", display: "block" }}
        />
      ) : (
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            color: "rgba(0,0,0,0.45)",
            whiteSpace: "nowrap",
            letterSpacing: "0.04em",
            textAlign: "center",
            padding: "0 8px",
          }}
        >
          {name}
        </span>
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
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-40 z-10"
        style={{ background: "linear-gradient(to right, #080d18 35%, transparent 100%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-40 z-10"
        style={{ background: "linear-gradient(to left, #080d18 35%, transparent 100%)" }}
      />

      <motion.div
        ref={ref}
        style={{ x, willChange: "transform" }}
        className="flex items-center gap-3 w-max py-2"
        aria-label="Lending partner logos"
      >
        {[...lenders, ...lenders].map((l, i) => (
          <LenderItem key={`${l.slug}-${i}`} name={l.name} slug={l.slug} lightBg={l.lightBg} />
        ))}
      </motion.div>
    </div>
  );
}
