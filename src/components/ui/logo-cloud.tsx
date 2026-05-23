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

function LenderCard({ name, slug, brandBg }: LenderDef) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: "160px",
        height: "60px",
        borderRadius: "14px",
        background: brandBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <img
        src={`/logos/${slug}.svg`}
        alt={name}
        loading="lazy"
        decoding="async"
        style={{
          height: "28px",
          width: "auto",
          maxWidth: "128px",
          objectFit: "contain",
          display: "block",
          filter: "brightness(0) invert(1)",
          opacity: 0.92,
        }}
        onError={(e) => {
          const img = e.currentTarget;
          const parent = img.parentElement;
          if (parent && !parent.querySelector(".lc-fb")) {
            img.style.display = "none";
            const span = document.createElement("span");
            span.className = "lc-fb";
            span.textContent = name;
            span.style.cssText =
              "font-size:12px;font-weight:700;color:rgba(255,255,255,0.9);" +
              "white-space:nowrap;letter-spacing:0.02em;font-family:inherit;";
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
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
        className="relative overflow-hidden"
        style={{ padding: "6px 0" }}
      >
        {/* Edge fade masks */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-40 z-10"
          style={{ background: "linear-gradient(to right, #080d18 20%, transparent 100%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-40 z-10"
          style={{ background: "linear-gradient(to left, #080d18 20%, transparent 100%)" }}
        />

        <div
          className="mf-lenders-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "max-content",
          }}
          aria-label="Lending partners"
        >
          {[...lenders, ...lenders].map((l, i) => (
            <LenderCard key={`${l.slug}-${i}`} {...l} />
          ))}
        </div>
      </div>
    </>
  );
}
