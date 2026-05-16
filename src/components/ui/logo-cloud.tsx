"use client";

import { useState, useEffect } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";

/* ─── Per-item component ─── */
function LenderItem({
  name,
  slug,
  lightBg = false,
}: {
  name: string;
  slug: string;
  lightBg?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={[
        "flex items-center gap-2.5 px-4 py-2.5 rounded-xl border flex-shrink-0 select-none",
        lightBg
          ? "bg-white/[0.88] border-white/20"   // light pill for dark-mark logos
          : "bg-white/[0.05] border-white/[0.09]", // dark pill for light/coloured logos
      ].join(" ")}
      style={{
        boxShadow: lightBg
          ? "0 1px 8px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.6) inset"
          : "0 1px 8px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.04) inset",
      }}
    >
      {!failed ? (
        <img
          src={`/logos/${slug}.svg`}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          loading="lazy"
          decoding="async"
          className="h-5 sm:h-6 w-auto max-w-[80px] object-contain flex-shrink-0"
        />
      ) : (
        /* Styled text fallback — shown only if local SVG missing */
        <span
          className={[
            "text-xs font-semibold tracking-wide whitespace-nowrap",
            lightBg ? "text-slate-700" : "text-white/60",
          ].join(" ")}
        >
          {name}
        </span>
      )}

      {/* Name label beside logo */}
      {!failed && (
        <span
          className={[
            "text-[11px] font-medium tracking-wide whitespace-nowrap leading-none",
            lightBg ? "text-slate-600" : "text-white/40",
          ].join(" ")}
        >
          {name}
        </span>
      )}
    </div>
  );
}

/* ─── Seamless infinite ticker ─── */
export type LenderDef = {
  name: string;
  slug: string;
  lightBg?: boolean;
};

interface LogoCloudProps {
  lenders: LenderDef[];
  speed?: number;
}

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
      {/* Left mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-36 z-10"
        style={{ background: "linear-gradient(to right, #080d18 20%, transparent 100%)" }}
      />
      {/* Right mask */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-36 z-10"
        style={{ background: "linear-gradient(to left, #080d18 20%, transparent 100%)" }}
      />

      {/* Track — duplicated once for seamless loop */}
      <motion.div
        ref={ref}
        style={{ x }}
        className="flex items-center gap-3 w-max py-1.5"
        aria-label="Lending partner logos"
      >
        {[...lenders, ...lenders].map((l, i) => (
          <LenderItem
            key={`${l.slug}-${i}`}
            name={l.name}
            slug={l.slug}
            lightBg={l.lightBg}
          />
        ))}
      </motion.div>
    </div>
  );
}
