"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const serviceLinks = [
  { title: "Automotive Finance", href: "#services" },
  { title: "Business Loans",     href: "#services" },
  { title: "Personal Loans",     href: "#services" },
  { title: "Equipment Finance",  href: "#services" },
];

const companyLinks = [
  { title: "About Moe",    href: "#about" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Contact",      href: "#contact" },
];

const vp = { once: true, amount: 0.2 } as const;

export function FooterSection() {
  return (
    <footer className="bg-[#060b16] border-t border-white/[0.05] px-4 py-12 sm:py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.45 }} className="col-span-2 sm:col-span-1 space-y-3">
            <p className="text-white/38 text-xs leading-relaxed">Melbourne&apos;s trusted finance broker — car finance, business loans, equipment finance and more across Australia since 2021.</p>
            <p className="text-white/18 text-[10px]">© {new Date().getFullYear()} Moe Financial. All rights reserved.</p>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ delay: 0.06, duration: 0.45 }}>
            <p className="text-white/28 text-[10px] uppercase tracking-[0.25em] mb-4">Services</p>
            <nav aria-label="Services links">
              <ul className="space-y-2.5 list-none" role="list">
                {serviceLinks.map(item => (
                  <li key={item.title}>
                    <a href={item.href} className="text-white/50 hover:text-orange-400 text-xs sm:text-sm transition-colors duration-200">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Company */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ delay: 0.12, duration: 0.45 }}>
            <p className="text-white/28 text-[10px] uppercase tracking-[0.25em] mb-4">Company</p>
            <nav aria-label="Company links">
              <ul className="space-y-2.5 list-none" role="list">
                {companyLinks.map(item => (
                  <li key={item.title}>
                    <a href={item.href} className="text-white/50 hover:text-orange-400 text-xs sm:text-sm transition-colors duration-200">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ delay: 0.18, duration: 0.45 }}>
            <p className="text-white/28 text-[10px] uppercase tracking-[0.25em] mb-4">Connect</p>
            <a
              href="https://www.linkedin.com/in/moe-elsayyed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Moe on LinkedIn"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-white text-xs font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "#0a66c2",
                boxShadow: "0 0 16px rgba(10,102,194,0.35)",
              }}
            >
              <LinkedinIcon className="w-4 h-4 flex-shrink-0" />
              LinkedIn
            </a>
            <p className="mt-3 text-white/28 text-[11px] leading-snug">Connect for finance tips,<br />updates &amp; industry insights.</p>
          </motion.div>

        </div>

        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/18 text-[10px] max-w-sm leading-relaxed">Finance broking services only — not a lender. Always read terms before signing. Moe Financial, Melbourne VIC.</p>
          <a href="#contact" aria-label="Get pre-approved for finance"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/8 text-white/35 hover:text-white/70 hover:border-white/16 text-xs font-medium tracking-wide transition-all duration-200 group" style={{ minHeight: "40px" }}>
            Get Pre-Approved
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
