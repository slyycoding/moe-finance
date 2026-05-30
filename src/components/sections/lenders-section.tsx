"use client";

const lenders = [
  {
    name: "ANZ",
    svg: (
      <svg viewBox="0 0 90 40" aria-label="ANZ" role="img">
        <rect width="90" height="40" rx="6" fill="#007DBA"/>
        <line x1="13" y1="31" x2="22" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity={0.6}/>
        <line x1="20" y1="31" x2="29" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity={0.6}/>
        <text x="59" y="26" fontFamily="Arial,sans-serif" fontSize={16} fontWeight={800} fill="white" textAnchor="middle" letterSpacing="2">ANZ</text>
      </svg>
    ),
  },
  {
    name: "NAB",
    svg: (
      <svg viewBox="0 0 90 40" aria-label="NAB" role="img">
        <rect width="90" height="40" rx="6" fill="white" stroke="#E0E0E0"/>
        <g transform="translate(20,20)">
          <line x1="-9" y1="0" x2="9" y2="0" stroke="#CC0000" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="-6.4" y1="-6.4" x2="6.4" y2="6.4" stroke="#CC0000" strokeWidth="2.8" strokeLinecap="round"/>
          <line x1="-6.4" y1="6.4" x2="6.4" y2="-6.4" stroke="#CC0000" strokeWidth="2.8" strokeLinecap="round"/>
        </g>
        <text x="57" y="26" fontFamily="Arial,sans-serif" fontSize={16} fontWeight={800} fill="#111" textAnchor="middle">nab</text>
      </svg>
    ),
  },
  {
    name: "Westpac",
    svg: (
      <svg viewBox="0 0 118 40" aria-label="Westpac" role="img">
        <rect width="118" height="40" rx="6" fill="#D5001F"/>
        <polyline points="10,11 17,29 24,15 31,29 38,11" fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round"/>
        <text x="79" y="26" fontFamily="Arial,sans-serif" fontSize={14} fontWeight={700} fill="white" textAnchor="middle">Westpac</text>
      </svg>
    ),
  },
  {
    name: "CommBank",
    svg: (
      <svg viewBox="0 0 138 40" aria-label="CommBank" role="img">
        <rect width="138" height="40" rx="6" fill="#111"/>
        <path d="M20 20 L28 10 L36 20 L28 30 Z" fill="#FFD200"/>
        <text x="88" y="26" fontFamily="Arial,sans-serif" fontSize={14} fontWeight={700} fill="white" textAnchor="middle">CommBank</text>
      </svg>
    ),
  },
  {
    name: "Macquarie",
    svg: (
      <svg viewBox="0 0 138 40" aria-label="Macquarie" role="img">
        <rect width="138" height="40" rx="6" fill="#062B5B"/>
        <path d="M21 30 L27 18 L33 30" fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round"/>
        <text x="87" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Macquarie</text>
      </svg>
    ),
  },
  {
    name: "Pepper Money",
    svg: (
      <svg viewBox="0 0 128 40" aria-label="Pepper Money" role="img">
        <rect width="128" height="40" rx="6" fill="white" stroke="#E0E0E0"/>
        <text x="17" y="29" fontFamily="Arial Black,sans-serif" fontSize={24} fontWeight={900} fill="#00A14B">P</text>
        <text x="73" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="#00A14B" textAnchor="middle">Pepper Money</text>
      </svg>
    ),
  },
  {
    name: "Liberty Financial",
    svg: (
      <svg viewBox="0 0 130 40" aria-label="Liberty Financial" role="img">
        <rect width="130" height="40" rx="6" fill="#00539B"/>
        <path d="M18 11 L24 11 L24 24 Q18 29 18 29 Q12 24 12 24 L12 11 Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <text x="79" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Liberty Financial</text>
      </svg>
    ),
  },
  {
    name: "Latitude",
    svg: (
      <svg viewBox="0 0 108 40" aria-label="Latitude" role="img">
        <rect width="108" height="40" rx="6" fill="#6B2D8B"/>
        <text x="14" y="29" fontFamily="Arial Black,sans-serif" fontSize={22} fontWeight={900} fill="white" opacity={0.4}>L</text>
        <text x="66" y="26" fontFamily="Arial,sans-serif" fontSize={14} fontWeight={700} fill="white" textAnchor="middle">Latitude</text>
      </svg>
    ),
  },
  {
    name: "Rapid Finance",
    svg: (
      <svg viewBox="0 0 145 40" aria-label="Rapid Finance" role="img">
        <rect width="145" height="40" rx="6" fill="#003087"/>
        <polyline points="19,13 27,20 19,27" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="90" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Rapid Finance</text>
      </svg>
    ),
  },
  {
    name: "Plenti",
    svg: (
      <svg viewBox="0 0 100 40" aria-label="Plenti" role="img">
        <rect width="100" height="40" rx="6" fill="#002A61"/>
        <path d="M12 10 L12 30 M12 10 L20 10 Q26 10 26 17 Q26 24 20 24 L12 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="63" y="26" fontFamily="Arial,sans-serif" fontSize={15} fontWeight={700} fill="white" textAnchor="middle">Plenti</text>
      </svg>
    ),
  },
  {
    name: "Now Finance",
    svg: (
      <svg viewBox="0 0 128 40" aria-label="Now Finance" role="img">
        <rect width="128" height="40" rx="6" fill="#FF5800"/>
        <circle cx="19" cy="20" r="7" fill="none" stroke="white" strokeWidth="2" opacity={0.8}/>
        <circle cx="19" cy="20" r="2.5" fill="white"/>
        <text x="76" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Now Finance</text>
      </svg>
    ),
  },
  {
    name: "Selfco Leasing",
    svg: (
      <svg viewBox="0 0 148 40" aria-label="Selfco Leasing" role="img">
        <rect width="148" height="40" rx="6" fill="#0F2B6E"/>
        <rect x="10" y="18" width="22" height="3" rx="1.5" fill="white" opacity={0.7}/>
        <rect x="13" y="12" width="3" height="16" rx="1.5" fill="white" opacity={0.5}/>
        <rect x="26" y="12" width="3" height="16" rx="1.5" fill="white" opacity={0.5}/>
        <text x="92" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Selfco Leasing</text>
      </svg>
    ),
  },
];

function LenderItem({ name, svg }: { name: string; svg: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center p-2.5 rounded-lg flex-shrink-0 transition-all duration-250 cursor-default"
      style={{
        width: "130px",
        height: "54px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        marginRight: "0.75rem",
        transform: "translateY(0)",
        boxShadow: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(20,26,93,0.1)";
        e.currentTarget.style.borderColor = "#C7D2FE";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#E2E8F0";
      }}
      title={name}
    >
      <div className="w-full h-full flex items-center justify-center">
        {svg}
      </div>
    </div>
  );
}

export function LendersSection() {
  return (
    <div
      className="py-14 sm:py-16"
      style={{
        backgroundColor: "#F0F4FF",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <p
        className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
        style={{ color: "#64748B" }}
      >
        Trusted lender panel — 65+ partners nationwide
      </p>

      <div className="marquee-wrapper">
        <div className="marquee-track" aria-hidden="true">
          {lenders.map(({ name, svg }) => (
            <LenderItem key={`a-${name}`} name={name} svg={svg} />
          ))}
          {lenders.map(({ name, svg }) => (
            <LenderItem key={`b-${name}`} name={name} svg={svg} />
          ))}
        </div>
      </div>

      {/* Accessible list for screen readers */}
      <ul className="sr-only" aria-label="Lending partners">
        {lenders.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>

      <p className="text-center text-xs mt-6" style={{ color: "#94A3B8" }}>
        Panel examples only. Lender availability may vary.
      </p>
    </div>
  );
}
