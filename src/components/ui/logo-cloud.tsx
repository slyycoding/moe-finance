"use client";

export type LenderDef = {
  name: string;
  slug: string;
  brandBg: string;
  textColor?: string;
  lightBg?: boolean;
};

interface LogoCloudProps {
  lenders: LenderDef[];
  speed?: number;
}

export function LogoCloud({ lenders, speed = 38 }: LogoCloudProps) {
  return (
    <>
      <style>{`
        @keyframes mf-lender-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .mf-lenders-track {
          animation: mf-lender-scroll ${speed}s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .mf-lenders-track { animation: none; }
        }
      `}</style>

      <div
        style={{
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.018)",
          padding: "1.5rem 0",
        }}
      >
        <div
          className="mf-lenders-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            width: "max-content",
          }}
          aria-label="Lending partners"
        >
          {[...lenders, ...lenders].map((l, i) => (
            <span
              key={`${l.slug}-${i}`}
              style={{
                fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "rgba(255,255,255,0.55)",
                whiteSpace: "nowrap",
                padding: "0.3rem 1rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
