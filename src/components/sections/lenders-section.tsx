"use client";

import { motion } from "framer-motion";
import { LogoCloud } from "@/components/ui/logo-cloud";

// Every badge is an inline SVG — same pattern as ryanmortgage.com.au:
// <rect> brand bg + simple icon mark + text, all self-contained.
const badges = [

  // ANZ — blue
  <svg key="anz" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 40" aria-label="ANZ">
    <rect width="90" height="40" rx="6" fill="#007DBA"/>
    <line x1="13" y1="31" x2="22" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity={0.45}/>
    <line x1="20" y1="31" x2="29" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity={0.45}/>
    <text x="59" y="26" fontFamily="Arial,sans-serif" fontSize={16} fontWeight={800} fill="white" textAnchor="middle" letterSpacing="2">ANZ</text>
  </svg>,

  // NAB — white card, red mark
  <svg key="nab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 40" aria-label="NAB">
    <rect width="90" height="40" rx="6" fill="white" stroke="#E0E0E0"/>
    <g transform="translate(20,20)">
      <line x1="-9" y1="0" x2="9" y2="0" stroke="#CC0000" strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="-6.4" y1="-6.4" x2="6.4" y2="6.4" stroke="#CC0000" strokeWidth="2.8" strokeLinecap="round"/>
      <line x1="-6.4" y1="6.4" x2="6.4" y2="-6.4" stroke="#CC0000" strokeWidth="2.8" strokeLinecap="round"/>
    </g>
    <text x="57" y="26" fontFamily="Arial,sans-serif" fontSize={16} fontWeight={800} fill="#111" textAnchor="middle">nab</text>
  </svg>,

  // Westpac — red, W mark
  <svg key="westpac" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 40" aria-label="Westpac">
    <rect width="118" height="40" rx="6" fill="#D5001F"/>
    <polyline points="10,11 17,29 24,15 31,29 38,11" fill="none" stroke="white" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round"/>
    <text x="79" y="26" fontFamily="Arial,sans-serif" fontSize={14} fontWeight={700} fill="white" textAnchor="middle">Westpac</text>
  </svg>,

  // Commonwealth Bank — black, yellow diamond
  <svg key="commbank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 40" aria-label="CommBank">
    <rect width="138" height="40" rx="6" fill="#111"/>
    <path d="M20 20 L28 10 L36 20 L28 30 Z" fill="#FFD200"/>
    <text x="88" y="26" fontFamily="Arial,sans-serif" fontSize={14} fontWeight={700} fill="white" textAnchor="middle">CommBank</text>
  </svg>,

  // Macquarie — dark navy, triangle mark
  <svg key="macquarie" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 40" aria-label="Macquarie">
    <rect width="138" height="40" rx="6" fill="#062B5B"/>
    <path d="M14 30 L24 10 L34 30 Z" fill="none" stroke="white" strokeWidth="1.8" strokeLinejoin="round" opacity={0.5}/>
    <path d="M21 30 L27 18 L33 30" fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round"/>
    <text x="87" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Macquarie</text>
  </svg>,

  // Pepper Money — white card, green
  <svg key="pepper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 40" aria-label="Pepper Money">
    <rect width="128" height="40" rx="6" fill="white" stroke="#E0E0E0"/>
    <text x="17" y="29" fontFamily="Arial Black,sans-serif" fontSize={24} fontWeight={900} fill="#00A14B">P</text>
    <text x="73" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="#00A14B" textAnchor="middle">Pepper Money</text>
  </svg>,

  // Rapid Finance — dark blue, arrow mark
  <svg key="rapid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 40" aria-label="Rapid Finance">
    <rect width="145" height="40" rx="6" fill="#003087"/>
    <line x1="11" y1="20" x2="25" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity={0.6}/>
    <polyline points="19,13 27,20 19,27" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="90" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Rapid Finance</text>
  </svg>,

  // Plenti — dark navy, P path
  <svg key="plenti" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" aria-label="Plenti">
    <rect width="100" height="40" rx="6" fill="#002A61"/>
    <path d="M12 10 L12 30 M12 10 L20 10 Q26 10 26 17 Q26 24 20 24 L12 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="63" y="26" fontFamily="Arial,sans-serif" fontSize={15} fontWeight={700} fill="white" textAnchor="middle">Plenti</text>
  </svg>,

  // Liberty Financial — blue, shield mark
  <svg key="liberty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 40" aria-label="Liberty Financial">
    <rect width="130" height="40" rx="6" fill="#00539B"/>
    <path d="M18 11 L24 11 L24 24 Q18 29 18 29 Q12 24 12 24 L12 11 Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <text x="79" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Liberty Financial</text>
  </svg>,

  // Latitude — purple, L mark
  <svg key="latitude" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 40" aria-label="Latitude">
    <rect width="108" height="40" rx="6" fill="#6B2D8B"/>
    <text x="14" y="29" fontFamily="Arial Black,sans-serif" fontSize={22} fontWeight={900} fill="white" opacity={0.35}>L</text>
    <text x="66" y="26" fontFamily="Arial,sans-serif" fontSize={14} fontWeight={700} fill="white" textAnchor="middle">Latitude</text>
  </svg>,

  // Now Finance — orange, circle mark
  <svg key="nowfinance" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 40" aria-label="Now Finance">
    <rect width="128" height="40" rx="6" fill="#FF5800"/>
    <circle cx="19" cy="20" r="7" fill="none" stroke="white" strokeWidth="2" opacity={0.7}/>
    <circle cx="19" cy="20" r="2.5" fill="white"/>
    <text x="76" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Now Finance</text>
  </svg>,

  // Selfco Leasing — dark blue, bar mark
  <svg key="selfco" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 40" aria-label="Selfco Leasing">
    <rect width="148" height="40" rx="6" fill="#0F2B6E"/>
    <rect x="10" y="18" width="22" height="3" rx="1.5" fill="white" opacity={0.7}/>
    <rect x="13" y="12" width="3" height="16" rx="1.5" fill="white" opacity={0.5}/>
    <rect x="26" y="12" width="3" height="16" rx="1.5" fill="white" opacity={0.5}/>
    <text x="92" y="26" fontFamily="Arial,sans-serif" fontSize={13} fontWeight={700} fill="white" textAnchor="middle">Selfco Leasing</text>
  </svg>,

  // Aust. Lending Ctr — dark blue, A mark
  <svg key="alc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 40" aria-label="Aust. Lending Ctr">
    <rect width="162" height="40" rx="6" fill="#1B3A6B"/>
    <text x="14" y="27" fontFamily="Arial Black,sans-serif" fontSize={18} fontWeight={900} fill="white" opacity={0.3}>A</text>
    <text x="96" y="26" fontFamily="Arial,sans-serif" fontSize={12} fontWeight={700} fill="white" textAnchor="middle">Aust. Lending Ctr</text>
  </svg>,

];

const vp = { once: false, amount: 0.3 } as const;

export function LendersSection() {
  return (
    <div className="relative bg-[#080d18] py-14 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span
            className="inline-block px-3 py-1.5 mb-5 text-[11px] font-semibold tracking-[0.3em] uppercase rounded-full"
            style={{
              background: "rgba(224,93,56,0.12)",
              border: "1px solid rgba(224,93,56,0.3)",
              color: "#e05d38",
            }}
          >
            Our Panel
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-none"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            We are proud to work with
          </h2>
          <p className="text-white/40 max-w-sm mx-auto text-sm sm:text-base font-light">
            Major banks to specialist non-conforming lenders — all loan types and credit profiles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <LogoCloud badges={badges} />
        </motion.div>

        <p className="text-center text-white/35 text-xs mt-5">
          *Panel examples only. Availability and lender options may change over time.
        </p>
      </div>
    </div>
  );
}
