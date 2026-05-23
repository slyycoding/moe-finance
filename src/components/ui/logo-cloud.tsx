"use client";

import { useEffect } from "react";
import { useMotionValue, animate, motion } from "framer-motion";

export type LenderDef = {
  name: string;
  slug: string;
  brandBg: string;
  textColor?: string;
  lightBg?: boolean;
};

function LenderBadge({ name, slug }: LenderDef) {
  return (
    <div
      className="flex-shrink-0 select-none flex items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "14px",
        width: "180px",
        height: "76px",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <img
        src={`/logos/${slug}.svg`}
        alt={`${name} logo`}
        loading="lazy"
        decoding="async"
        style={{
          height: "30px",
          width: "auto",
          maxWidth: "144px",
          objectFit: "contain",
          display: "block",
          filter: "brightness(0) invert(1)",
          opacity: 0.85,
        }}
        onError={(e) => {
          const img = e.currentTarget;
          const parent = img.parentElement;
          if (parent && !parent.querySelector(".lc-fallback")) {
            img.style.display = "none";
            const span = document.createElement("span");
            span.className = "lc-fallback";
            span.textContent = name;
            span.style.cssText =
              "font-size:11px;font-weight:600;font-family:'Inter',Helvetica Neue,sans-serif;" +
              "color:rgba(255,255,255,0.65);white-space:nowrap;letter-spacing:0.07em;" +
              "text-transform:uppercase;text-align:center;padding:0 14px;";
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

// Badge width + gap must match the rendered values for a seamless loop
const BADGE_W = 180;
const BADGE_GAP = 12; // gap-3 = 12px

export function LogoCloud({ lenders, speed = 45 }: LogoCloudProps) {
  const x = useMotionValue(0);

  useEffect(() => {
    // Move exactly one full set-width (including the trailing gap) so the
    // loop seam is pixel-perfect — no jump at the reset point.
    const target = -(lenders.length * (BADGE_W + BADGE_GAP));
    const controls = animate(x, [0, target], {
      ease: "linear",
      duration: speed,
      repeat: Infinity,
      repeatType: "loop",
    });
    return controls.stop;
  }, [lenders.length, speed, x]);

  return (
    <div className="relative overflow-hidden" style={{ padding: "8px 0" }}>
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-28 sm:w-48 z-10"
        style={{ background: "linear-gradient(to right, #080d18 30%, transparent 100%)" }} />
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-28 sm:w-48 z-10"
        style={{ background: "linear-gradient(to left, #080d18 30%, transparent 100%)" }} />
      <motion.div
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