"use client";

import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

function MoeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 308 76" fill="none" aria-label="Moe Financial" className={className}>
      {/* "Moe" — premium serif, readable stroke weight with subtle depth fill */}
      <text
        x="1" y="60"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={66}
        fontWeight={400}
        fill="rgba(224,93,56,0.07)"
        stroke="#e05d38"
        strokeWidth={2.6}
        strokeLinejoin="round"
        letterSpacing={-1}
      >
        Moe
      </text>
      {/* Divider — clean, proportional */}
      <line x1={148} y1={10} x2={148} y2={63} stroke="rgba(224,93,56,0.28)" strokeWidth={0.75} />
      {/* "FINANCIAL" — vertically centred, tighter spacing */}
      <text
        x={161} y={44}
        fontFamily="var(--font-body, 'Inter', 'Helvetica Neue', sans-serif)"
        fontSize={19}
        fontWeight={400}
        fill="rgba(255,255,255,0.45)"
        letterSpacing={3.0}
      >
        FINANCIAL
      </text>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Process",  href: "#process" },
  { label: "Reviews",  href: "#testimonials" },
];

const mobileMenuVariants = {
  closed: { opacity: 0, y: -10 },
  open:   { opacity: 1, y: 0, transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: -14 },
  open:   { opacity: 1, x: 0,  transition: { type: "spring" as const, stiffness: 260, damping: 24 } },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY }  = useScroll();
  const bgOpacity    = useTransform(scrollY, [0, 80], [0, 0.96]);
  const borderAlpha  = useTransform(scrollY, [0, 80], [0, 0.08]);
  const navBg        = useMotionTemplate`rgba(8,13,24,${bgOpacity})`;
  const navBorder    = useMotionTemplate`1px solid rgba(255,255,255,${borderAlpha})`;
  const menuBtnRef   = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMobileOpen(false); menuBtnRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50"
        style={{ willChange: "transform" }}
      >
        <motion.div
          className="absolute inset-0 backdrop-blur-md"
          style={{ backgroundColor: navBg, borderBottom: navBorder }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 py-3 grid grid-cols-3 items-center">

          {/* Logo — orange MoeLogo SVG at top-left */}
          <a href="/" aria-label="Moe Financial — home" className="flex-shrink-0 group">
            <MoeLogo className="h-7 sm:h-8 w-auto transition-opacity duration-200 group-hover:opacity-75" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center justify-center gap-7 list-none" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative group/link text-white/45 hover:text-white/90 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-orange-500 pb-px"
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-orange-400/55 transition-all duration-300 group-hover/link:w-full"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: desktop social+CTA and mobile toggle share this column */}
          <div className="flex items-center justify-end">
            {/* Desktop social + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/moe-elsayyed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Moe on LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white/80 hover:bg-white/[0.06] transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Get pre-approved for finance"
                className="btn-shine btn-pulse relative overflow-hidden inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white font-semibold text-sm group active:scale-[0.97] transition-transform duration-100"
                style={{ background: "linear-gradient(135deg, #e05d38, #c94822)" }}
              >
                Get Pre-Approved
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              ref={menuBtnRef}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(o => !o)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1 }}
                  exit={{    rotate:  90, opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex items-center justify-center"
                >
                  {mobileOpen
                    ? <X    className="w-4 h-4" aria-hidden="true" />
                    : <Menu className="w-4 h-4" aria-hidden="true" />
                  }
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 flex flex-col pt-[62px]"
            style={{ background: "rgba(8,13,24,0.99)" }}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col flex-1 px-4 py-6 overflow-y-auto">
              <ul className="list-none space-y-0 mb-6" role="list">
                {navLinks.map(({ label, href }) => (
                  <motion.li key={label} variants={mobileLinkVariants}>
                    <a
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-4 px-2 border-b border-white/[0.06] text-white/65 hover:text-white text-base font-medium transition-colors duration-150"
                    >
                      {label}
                      <ArrowRight className="w-4 h-4 opacity-25" aria-hidden="true" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                aria-label="Get pre-approved for finance"
                className="btn-shine block text-center py-4 rounded-xl font-bold text-white text-base active:scale-[0.98] transition-transform"
                style={{ background: "linear-gradient(135deg, #e05d38, #c94822)", minHeight: "52px", lineHeight: "24px" }}
                variants={mobileLinkVariants}
              >
                Get Pre-Approved
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/moe-elsayyed/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                aria-label="Moe on LinkedIn"
                className="flex items-center gap-3 mt-3 py-4 px-2 border-b border-white/[0.06] text-white/50 hover:text-white/80 text-sm font-medium transition-colors"
                variants={mobileLinkVariants}
              >
                <LinkedinIcon className="w-4 h-4 flex-shrink-0" />
                LinkedIn
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
