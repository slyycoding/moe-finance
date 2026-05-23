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

// Card width + right margin = one card's slot in the track.
// Using margin-right (not gap) so translateX(-N * SLOT) is pixel-perfect.
const CARD_W    = 152;
const CARD_MR   = 14;
const CARD_SLOT = CARD_W + CARD_MR; // 166px

function LenderCard({ name, slug }: LenderDef) {
  return (
    <div
      style={{
        flexShrink:     0,
        width:          `${CARD_W}px`,
        height:         "74px",
        marginRight:    `${CARD_MR}px`,
        borderRadius:   "16px",
        background:     "#ffffff",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "0 18px",
        overflow:       "hidden",
        border:         "1px solid rgba(0,0,0,0.06)",
        boxShadow:      "0 4px 18px rgba(0,0,0,0.28)",
      }}
    >
      <img
        src={`/logos/${slug}.svg`}
        alt={name}
        loading="lazy"
        decoding="async"
        style={{
          height:    "34px",
          width:     "auto",
          maxWidth:  "116px",
          objectFit: "contain",
          display:   "block",
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
              "font-size:11px;font-weight:700;color:#111;" +
              "white-space:nowrap;letter-spacing:0.04em;" +
              "text-transform:uppercase;font-family:inherit;";
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}

export function LogoCloud({ lenders, speed = 36 }: LogoCloudProps) {
  const target = -(lenders.length * CARD_SLOT);

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

      <div
        style={{
          position:     "relative",
          height:       "104px",
          border:       "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          background:   "rgba(0,0,0,0.35)",
          overflow:     "hidden",
          display:      "flex",
          alignItems:   "center",
        }}
      >
        {/* Left fade */}
        <div aria-hidden style={{
          position:      "absolute",
          inset:         "0 auto 0 0",
          width:         "80px",
          background:    "linear-gradient(to right, rgba(0,0,0,0.55), transparent)",
          zIndex:        10,
          pointerEvents: "none",
        }} />

        {/* Right fade */}
        <div aria-hidden style={{
          position:      "absolute",
          inset:         "0 0 0 auto",
          width:         "80px",
          background:    "linear-gradient(to left, rgba(0,0,0,0.55), transparent)",
          zIndex:        10,
          pointerEvents: "none",
        }} />

        <div
          className="mf-ticker-track"
          style={{
            display:     "flex",
            alignItems:  "center",
            width:       "max-content",
            paddingLeft: `${CARD_MR}px`,
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
