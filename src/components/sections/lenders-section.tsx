"use client";

import { motion } from "framer-motion";
import { LogoCloud, type LenderDef } from "@/components/ui/logo-cloud";

/*
 * brandBg: the lender's primary brand background colour so each badge
 * looks like the lender's own branded tile — matching the reference design.
 */
const lenders: LenderDef[] = [
  { name: "Westpac",           slug: "westpac",       brandBg: "#D5003A",  textColor: "#fff" },
  { name: "Commonwealth Bank", slug: "commbank",       brandBg: "#000000",  textColor: "#FFCD00" },
  { name: "ANZ",               slug: "anz",            brandBg: "#007DBA",  textColor: "#fff" },
  { name: "NAB",               slug: "nab",            brandBg: "#E4002B",  textColor: "#fff" },
  { name: "Macquarie",         slug: "macquarie",      brandBg: "#00174A",  textColor: "#fff" },
  { name: "Pepper Money",      slug: "pepper-money",   brandBg: "#ffffff",  textColor: "#111" },
  { name: "Rapid Finance",     slug: "rapid-finance",  brandBg: "#003087",  textColor: "#fff" },
  { name: "Plenti",            slug: "plenti",         brandBg: "#002A61",  textColor: "#fff" },
  { name: "Liberty Financial", slug: "liberty",        brandBg: "#002F5F",  textColor: "#fff" },
  { name: "Latitude",          slug: "latitude",       brandBg: "#6B2D8B",  textColor: "#fff" },
  { name: "Now Finance",       slug: "now-finance",    brandBg: "#FF5800",  textColor: "#fff" },
  { name: "Selfco Leasing",    slug: "selfco",         brandBg: "#0F2B6E",  textColor: "#fff" },
  { name: "Aust. Lending Ctr", slug: "alc",            brandBg: "#1B3A6B",  textColor: "#fff" },
];

const vp = { once: true, amount: 0.3 } as const;

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
          <LogoCloud lenders={lenders} speed={48} />
        </motion.div>

        <p className="text-center text-white/20 text-xs mt-6">
          *Panel examples only. Availability and lender options may change over time.
        </p>
      </div>
    </div>
  );
}