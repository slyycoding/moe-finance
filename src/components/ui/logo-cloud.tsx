"use client";

import { useEffect } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export type LenderDef = {
  name: string;
  slug: string;
  brandBg: string;
  textColor?: string;
  lightBg?: boolean;
};

function LenderBadge({ name, slug, brandBg, textColor = "#fff" }: LenderDef) {
  return (
    <div
      className="flex-shrink-0 select-none flex items-center justify-center relative overflow-hidden"
      style={{
        background: brandBg,
        borderRadius: "12px",
        width: "160px",
        height: "60px",
        boxShadow: "0 2px 14px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 55%)",
          borderRadius: "12px",
          pointerEvents: "none",
        }}
      />
      <img
        src={`/logos/${slug}.svg`}
        alt={`${name} logo`}
        loading="lazy"
        decoding="async"
        style={{
          height: "28px",
          width: "auto",
          maxWidth: "124px",
          objectFit: "contain",
          display: "block",
          position: "relative",
          zIndex: 1,
        }}
        onError={(e) => {
          const img = e.currentTarget;
          const parent = img.parentElement;
          if (parent) {
            img.style.display = "none";
            const span = document.createElement("span");
            span.textContent = name;
            span.style.cssText = `font-size:12px;font-weight:700;font-family:Helvetica Neue,sans-serif;color:${textColor};white-space:nowrap;letter-spacing:0.03em;padding:0 10px;position:relative;z-index:1;`;
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}

interface LogoCloudProps {
  lenders: LenderDef[];
  speed?: number;
}

export function LogoCloud({ lenders, speed = 45 }: LogoCloudProps) {
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
    <div className="relative overflow-hidden" style={{ padding: "8px 0" }}>
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-28 sm:w-48 z-10"
        style={{ background: "linear-gradient(to right, #080d18 30%, transparent 100%)" }} />
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-28 sm:w-48 z-10"
        style={{ background: "linear-gradient(to left, #080d18 30%, transparent 100%)" }} />
      <motion.div
        ref={ref}
        style={{ x, willChange: "transform" }}
        className="flex items-center gap-3 w-max py-2"
        aria-label="Lending partner logos"
      >
        {[...lenders, ...lenders].map((l, i) => (
          <LenderBadge key={`${l.slug}-${i}`} name={l.name} slug={l.slug} brandBg={l.brandBg} textColor={l.textColor} />
        ))}
      </motion.div>
    </div>
  );
}