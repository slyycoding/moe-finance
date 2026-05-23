"use client";

import { motion } from "framer-motion";
import { Share2, AtSign, PlayCircle, ArrowRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const links = [
  { label: "Services", items: [{ title: "Automotive Finance", href: "#services" }, { title: "Business Loans", href: "#services" }, { title: "Personal Loans", href: "#services" }, { title: "Equipment Finance", href: "#services" }]},
  { label: "Company",  items: [{ title: "About Moe", href: "#about" }, { title: "Testimonials", href: "#testimonials" }, { title: "Contact", href: "#contact" }]},
  { label: "Social",   items: [{ title: "Facebook", href: "#", icon: Share2 }, { title: "Instagram", href: "#", icon: AtSign }, { title: "YouTube", href: "#", icon: PlayCircle }, { title: "LinkedIn", href: "https://www.linkedin.com/in/moe-elsayyed/", icon: LinkedinIcon }]},
];

const vp = { once: true, amount: 0.2 } as const;

export function FooterSection() {
  return (
    <footer className="bg-[#060b16] border-t border-white/[0.05] px-4 py-12 sm:py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.45 }} className="col-span-2 sm:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #e05d38, #c94822)" }} aria-hidden>
                <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-heading)" }}>M</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Moe</p>
                <p className="text-orange-400/60 text-[10px] tracking-[0.25em] uppercase">Finance Broker</p>
              </div>
            </div>
            <p className="text-white/38 text-xs leading-relaxed">Melbourne&apos;s trusted finance broker — car finance, business loans, equipment finance and more across Australia since 2021.</p>
            <p className="text-white/18 text-[10px]">© {new Date().getFullYear()} Moe Financial. All rights reserved.</p>
          </motion.div>

          {links.map((section, i) => (
            <motion.div key={section.label}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
              transition={{ delay: 0.06 * (i + 1), duration: 0.45 }}>
              <p className="text-white/28 text-[10px] uppercase tracking-[0.25em] mb-4">{section.label}</p>
              <nav aria-label={`${section.label} links`}>
                <ul className="space-y-2.5 list-none" role="list">
                  {section.items.map(item => {
                    const Icon = "icon" in item ? item.icon : null;
                    return (
                      <li key={item.title}>
                        <a href={item.href}
                          className="text-white/50 hover:text-orange-400 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1.5"
                          aria-label={Icon ? `${item.title} — social media` : item.title}>
                          {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />}
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          ))}
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
