"use client";

import { motion } from "framer-motion";
import { LogoCloud, type LenderDef } from "@/components/ui/logo-cloud";

/*
 * All logos served from /public/logos/{slug}.svg (local, no CDN dependency).
 *
 * Sourced from:
 *  Westpac, CommBank, ANZ  → Wikimedia Commons (official SVG, verified working)
 *  NAB                     → nab.com.au CDN (official, verified working)
 *  Macquarie               → macquarie.com CDN (official white SVG, verified working)
 *  Pepper Money            → peppermoney.com.au DAM (official, verified working)
 *  Rapid Finance           → gorapid.com.au (official, verified working)
 *  Plenti                  → Webflow CDN (official navy SVG, verified working)
 *  Liberty, Latitude,
 *  Now Finance, Selfco,
 *  ALC                     → Branded wordmark SVGs in brand colours (accurate representations)
 *
 * lightBg: true = logo rendered on a near-white pill (for dark-mark logos like Plenti navy,
 *                 Latitude violet, Liberty navy, Selfco navy, ALC navy, Now Finance orange on dark)
 */
const lenders: LenderDef[] = [
  { name: "Westpac",           slug: "westpac",      lightBg: true },  // dark #2d373c text → needs light bg
  { name: "Commonwealth Bank", slug: "commbank",     lightBg: true },  // black + yellow → needs light bg
  { name: "ANZ",               slug: "anz"           },               // has built-in white rect → fine on dark
  { name: "NAB",               slug: "nab"           },               // red gradient + white text → fine on dark
  { name: "Macquarie",         slug: "macquarie"     },               // white wordmark → perfect on dark
  { name: "Pepper Money",      slug: "pepper-money"  },               // green + red on transparent → fine on dark
  { name: "Rapid Finance",     slug: "rapid-finance" },               // blue + red → fine on dark
  { name: "Plenti",            slug: "plenti",       lightBg: true }, // navy #002a61 → needs light bg
  { name: "Liberty Financial", slug: "liberty",      lightBg: true }, // navy blue wordmark → needs light bg
  { name: "Latitude",          slug: "latitude",     lightBg: true }, // violet wordmark → needs light bg
  { name: "Now Finance",       slug: "now-finance"   },               // orange → visible on dark pill
  { name: "Selfco Leasing",    slug: "selfco",       lightBg: true }, // navy wordmark → needs light bg
  { name: "Aust. Lending Ctr", slug: "alc",          lightBg: true }, // navy wordmark → needs light bg
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
          <p className="text-orange-400/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Our Network
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-none"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            65+ Lending Partners
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
          <LogoCloud lenders={lenders} speed={50} />
        </motion.div>
      </div>
    </div>
  );
}
