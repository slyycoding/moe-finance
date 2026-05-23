"use client";

import { useState, useEffect } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import useMeasure from "react-use-measure";

function LogoCard({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center select-none"
      style={{
        width: "220px",
        height: "88px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.97)",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 18px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        flexShrink: 0,
      }}
    >
      {!failed ? (
        <img
          src={`/logos/${slug}.svg`}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          loading="lazy"
          decoding="async"
          style={{
            maxWidth: "68%",
            maxHeight: "46px",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
            pointerEvents: "none",
          }}
        />
      ) : (
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            color: "rgba(0,0,0,0.38)",
            letterSpacing: "0.05em",
            textAlign: "center",
            padding: "0 16px",
            lineHeight: 1.35,
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
}

export type LenderDef = { name: string; slug: string; lightBg?: boolean };

export function LogoCloud({ lenders, speed = 36 }: { lenders: LenderDef[]; speed?: number }) {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);

  useEffect(() => {
    if (!width) return;
    const half = width / 2;
    const controls = animate(x, [0, -half], {
      ease: "linear",
      duration: half / speed,
      repeat: Infinity,
      repeatType: "loop",
      onRepeat: () => x.set(0),
    });
    return controls.stop;
  }, [width, speed, x]);

  return (
    /* overflow-hidden on parent prevents any horizontal scroll */
    <div
      className="relative w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <motion.div
        ref={ref}
        style={{ x, willChange: "transform" }}
        className="flex items-center w-max"
        aria-label="Lending partner logos"
      >
        {[...lenders, ...lenders].map((l, i) => (
          <div key={`${l.slug}-${i}`} style={{ paddingRight: "16px" }}>
            <LogoCard name={l.name} slug={l.slug} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
