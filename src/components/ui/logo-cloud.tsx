"use client";

import type { ReactNode } from "react";

// Kept for any other consumers
export type LenderDef = {
  name: string;
  slug: string;
  brandBg: string;
  textColor?: string;
  lightBg?: boolean;
};

interface LogoCloudProps {
  badges: ReactNode[];
  speed?: number;
}

export function LogoCloud({ badges, speed = 38 }: LogoCloudProps) {
  const all = [...badges, ...badges];

  return (
    <>
      <style>{`
        @keyframes lender-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .lenders-track {
          animation: lender-scroll ${speed}s linear infinite;
          will-change: transform;
        }
        .lender-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .lender-logo svg {
          display: block;
          height: 40px;
          width: auto;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.35);
        }
        @media (prefers-reduced-motion: reduce) {
          .lenders-track { animation: none; }
        }
      `}</style>

      <div style={{
        overflow:     "hidden",
        border:       "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        background:   "rgba(255,255,255,0.018)",
        paddingBlock: "1.5rem",
        marginBottom: "1rem",
      }}>
        <div
          className="lenders-track"
          style={{ display: "flex", alignItems: "center", gap: "2.5rem", width: "max-content" }}
          aria-label="Lending partners"
        >
          {all.map((badge, i) => (
            <div key={i} className="lender-logo">{badge}</div>
          ))}
        </div>
      </div>
    </>
  );
}
