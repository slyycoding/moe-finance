"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Process",  href: "#process" },
  { label: "Reviews",  href: "#testimonials" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity   = useTransform(scrollY, [0, 80], [0, 0.96]);
  const borderAlpha = useTransform(scrollY, [0, 80], [0, 0.08]);
  const navBg       = useMotionTemplate`rgba(8,13,24,${bgOpacity})`;
  const navBorder   = useMotionTemplate`1px solid rgba(255,255,255,${borderAlpha})`;
  const menuBtnRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMobileOpen(false); menuBtnRef.current?.focus(); } };
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
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50"
        style={{ willChange: "transform" }}
      >
        <motion.div
          className="absolute inset-0 backdrop-blur-md"
          style={{ backgroundColor: navBg, borderBottom: navBorder }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="Moe Financial — home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #e05d38, #c94822)", boxShadow: "0 0 14px rgba(224,93,56,0.3)" }}
              aria-hidden="true"
            >
              <span className="text-white font-black text-base" style={{ fontFamily: "var(--font-heading)" }}>M</span>
            </div>
            <div className="hidden xs:block sm:block">
              <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Moe</p>
              <p className="text-orange-400/60 text-[10px] tracking-[0.25em] uppercase leading-tight">Finance Broker</p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-white/45 hover:text-white/90 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-orange-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              aria-label="Get pre-approved for finance"
              className="btn-shine relative overflow-hidden inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white font-semibold text-sm transition-opacity duration-300 group"
              style={{ background: "linear-gradient(135deg, #e05d38, #c94822)", boxShadow: "0 0 20px rgba(224,93,56,0.25)" }}
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
            {mobileOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — solid background, no heavy backdrop-filter */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 flex flex-col pt-[65px]"
          style={{ background: "rgba(8,13,24,0.99)" }}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col flex-1 px-4 py-6 overflow-y-auto">
            <ul className="list-none space-y-1 mb-6" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 px-2 border-b border-white/5 text-white/65 hover:text-white text-base font-medium transition-colors"
                  >
                    {label}
                    <ArrowRight className="w-4 h-4 opacity-30" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              aria-label="Get pre-approved for finance"
              className="block text-center py-4 rounded-xl font-bold text-white text-base"
              style={{ background: "linear-gradient(135deg, #e05d38, #c94822)", minHeight: "52px", lineHeight: "24px" }}
            >
              Get Pre-Approved
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
