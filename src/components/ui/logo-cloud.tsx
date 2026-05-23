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

// margin-right instead of gap so -50% is pixel-perfect (no seam jump)
const CARD_W   = 160;
const CARD_MR  = 12;
const CARD_STEP = CARD_W + CARD_MR; // 172px per card slot

function LenderCard({ name, slug, brandBg }: LenderDef) {
  return (
    <div
      style={{
        flexShrink:     0,
        width:          `${CARD_W}px`,
        height:         "52px",
        marginRight:    `${CARD_MR}px`,
        borderRadius:   "8px",
        background:     brandBg,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "0 18px",
        overflow:       "hidden",
      }}
    >
      <img
        src={`/logos/${slug}.svg`}
        alt={name}
        loading="lazy"
        decoding="async"
        style={{
          height:     "26px",
          width:      "auto",
          maxWidth:   "124px",
          objectFit:  "contain",
          display:    "block",
        }}
        onError={(e) => {
          const img    = e.currentTarget;
          const parent = img.parentElement;
          if (parent && !parent.querySelector(".lc-fb")) {
            img.style.display = "none";
            const span = document.createElement("span");
            span.className = "lc-fb";
            span.textContent = name;
            span.style.cssText =
              "font-size:11px;font-weight:700;color:#fff;" +
              "white-space:nowrap;letter-spacing:0.05em;" +
              "text-transform:uppercase;font-family:inherit;";
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}

export function LogoCloud({ lenders, speed = 36 }: LogoCloudProps) {
  // Animate exactly one full set width so the loop seam is invisible
  const target = -(lenders.length * CARD_STEP);

  return (
    <>
      <style>{`
        @keyframes mf-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(${target}px); }
        }
        .mf-ticker-track {
          animation: mf-ticker ${speed}s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .mf-ticker-track { animation: none; }
        }
      `}</style>

      {/* Outer dark container */}
      <div
        style={{
          height:       "95px",
          border:       "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          background:   "rgba(0,0,0,0.35)",
          overflow:     "hidden",
          display:      "flex",
          alignItems:   "center",
          position:     "relative",
        }}
      >
        {/* Left fade mask */}
        <div aria-hidden style={{
          position:      "absolute",
          left:          0, top: 0, bottom: 0,
          width:         "96px",
          background:    "linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 100%)",
          zIndex:        10,
          pointerEvents: "none",
        }} />

        {/* Right fade mask */}
        <div aria-hidden style={{
          position:      "absolute",
          right:         0, top: 0, bottom: 0,
          width:         "96px",
          background:    "linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)",
          zIndex:        10,
          pointerEvents: "none",
        }} />

        {/* Scrolling track — margin-right on each card for pixel-perfect -50% */}
        <div
          className="mf-ticker-track"
          style={{
            display:     "flex",
            alignItems:  "center",
            width:       "max-content",
            paddingLeft: "12px",
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
