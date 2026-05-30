"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

function MoeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 44" fill="none" aria-label="Moe Financial" className={className}>
      <text
        x="1" y="36"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={40}
        fontWeight={400}
        fill="transparent"
        stroke="#C4922A"
        strokeWidth={1.8}
        strokeLinejoin="round"
        letterSpacing={-1}
      >
        Moe
      </text>
      <line x1="90" y1="6" x2="90" y2="38" stroke="#C4922A" strokeWidth={0.75} opacity={0.5} />
      <text
        x={97} y="26"
        fontFamily="var(--font-body, 'Inter', sans-serif)"
        fontSize={11}
        fontWeight={500}
        fill="#6B7280"
        letterSpacing={2.5}
      >
        FINANCIAL
      </text>
    </svg>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process" },
  { label: "Reviews",  href: "#testimonials" },
  { label: "About",    href: "#about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200"
        style={{ boxShadow: scrolled ? "0 1px 0 #E5E7EB" : "none" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <a href="/" aria-label="Moe Financial — home" className="flex-shrink-0 group">
              <MoeLogo className="h-8 sm:h-9 w-auto" />
            </a>

            <ul className="hidden md:flex items-center gap-8 list-none" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+61481293396"
                className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                aria-label="Call Moe"
              >
                +61 481 293 396
              </a>
              <a
                href="#contact"
                aria-label="Book a call with Moe"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md text-white font-semibold text-sm group transition-colors duration-200"
                style={{ backgroundColor: "#C4922A", minHeight: "40px" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#A67720")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C4922A")}
              >
                Book A Call
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            <button
              ref={menuBtnRef}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? <X className="w-4 h-4" aria-hidden /> : <Menu className="w-4 h-4" aria-hidden />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 flex flex-col pt-16 bg-white"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col flex-1 px-4 py-6 overflow-y-auto">
            <ul className="list-none space-y-0 mb-6" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 px-2 border-b border-gray-100 text-gray-700 hover:text-gray-900 text-base font-medium transition-colors duration-150"
                  >
                    {label}
                    <ArrowRight className="w-4 h-4 text-gray-400" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              aria-label="Book a call with Moe"
              className="block text-center py-4 rounded-md font-bold text-white text-base transition-colors duration-200"
              style={{ backgroundColor: "#C4922A", minHeight: "52px", lineHeight: "24px" }}
            >
              Book A Call
            </a>

            <a
              href="tel:+61481293396"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 py-3 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              +61 481 293 396
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
