"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

function MoeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 44" fill="none" aria-label="Moe Financial" className={className}>
      <text
        x="1" y="36"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={40}
        fontWeight={400}
        fill="transparent"
        stroke="#F0A500"
        strokeWidth={1.8}
        strokeLinejoin="round"
        letterSpacing={-1}
      >
        Moe
      </text>
      <line x1="90" y1="6" x2="90" y2="38" stroke="#F0A500" strokeWidth={0.75} opacity={0.4} />
      <text
        x={97} y="26"
        fontFamily="var(--font-body, 'Inter', sans-serif)"
        fontSize={11}
        fontWeight={500}
        fill="rgba(244,241,236,0.45)"
        letterSpacing={2.5}
      >
        FINANCIAL
      </text>
    </svg>
  );
}

const navLinks = [
  { label: "Services",  href: "#services" },
  { label: "Process",   href: "#process" },
  { label: "Reviews",   href: "#testimonials" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
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
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter {
          animation: slideInRight 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .mobile-nav-item {
          opacity: 0;
          animation: fadeSlideUp 220ms ease-out forwards;
        }
        .mobile-nav-item-0 { animation-delay: 80ms; }
        .mobile-nav-item-1 { animation-delay: 130ms; }
        .mobile-nav-item-2 { animation-delay: 180ms; }
        .mobile-nav-item-3 { animation-delay: 230ms; }
        .mobile-nav-item-4 { animation-delay: 280ms; }
        .mobile-actions-enter {
          opacity: 0;
          animation: fadeSlideUp 220ms ease-out 320ms forwards;
        }
        .mobile-cta-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .mobile-cta-btn:active {
          transform: scale(0.97);
        }
        .mobile-cta-primary:hover, .mobile-cta-primary:focus-visible {
          box-shadow: 0 0 0 3px rgba(196,146,42,0.25), 0 4px 16px rgba(196,146,42,0.2);
        }
        .mobile-nav-link {
          transition: background-color 0.15s ease, color 0.15s ease;
        }
        .mobile-nav-link:hover .nav-arrow,
        .mobile-nav-link:active .nav-arrow {
          transform: translateX(4px);
        }
        .mobile-nav-link:active {
          background-color: rgba(255,255,255,0.04) !important;
        }
        .nav-arrow {
          transition: transform 0.15s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .mobile-menu-enter,
          .mobile-nav-item,
          .mobile-actions-enter {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          backgroundColor: scrolled ? "rgba(12,26,56,0.97)" : "rgba(12,26,56,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between" style={{ height: "68px" }}>
            <a href="/" aria-label="Moe Financial — home" className="flex-shrink-0">
              <MoeLogo className="h-8 sm:h-9 w-auto" />
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8 list-none" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: "rgba(240,237,232,0.6)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#F0EDE8")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.6)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+61481293396"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(240,237,232,0.5)" }}
                aria-label="Call Moe"
                onMouseEnter={e => (e.currentTarget.style.color = "#F0EDE8")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.5)")}
              >
                +61 481 293 396
              </a>
              <a
                href="/contact"
                aria-label="Book a call with Moe"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-sm group transition-all duration-200"
                style={{ backgroundColor: "#F0A500", color: "#0A0A0A", minHeight: "40px" }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#D48F00";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(196,146,42,0.2)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "#F0A500";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book A Call
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={menuBtnRef}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(240,237,232,0.7)" }}
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? <X className="w-4 h-4" aria-hidden /> : <Menu className="w-4 h-4" aria-hidden />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — slide in from right */}
      {mobileOpen && mounted && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="mobile-menu-enter fixed inset-0 z-40 flex flex-col pt-[68px]"
          style={{ backgroundColor: "#0C1A38" }}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col flex-1 px-4 py-6 overflow-y-auto">
            <ul className="list-none space-y-0 mb-8" role="list">
              {navLinks.map(({ label, href }, i) => (
                <li key={label} className={`mobile-nav-item mobile-nav-item-${i}`}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="mobile-nav-link flex items-center justify-between py-4 px-3 rounded-lg text-base font-medium"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(240,237,232,0.7)",
                    }}
                  >
                    {label}
                    <ArrowRight
                      className="nav-arrow w-4 h-4"
                      style={{ color: "rgba(240,237,232,0.25)" }}
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Action buttons */}
            <div className="mobile-actions-enter flex flex-col gap-3 mt-auto">
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                aria-label="Book a call with Moe"
                className="mobile-cta-btn mobile-cta-primary flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base"
                style={{ backgroundColor: "#F0A500", color: "#0A0A0A", minHeight: "54px" }}
              >
                Book A Call
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>

              <a
                href="tel:+61481293396"
                onClick={() => setMobileOpen(false)}
                aria-label="Call Moe on +61 481 293 396"
                className="mobile-cta-btn flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  color: "rgba(240,237,232,0.65)",
                  minHeight: "50px",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(196,146,42,0.4)";
                  e.currentTarget.style.color = "#F0A500";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "rgba(240,237,232,0.65)";
                }}
              >
                <Phone className="w-4 h-4" aria-hidden />
                +61 481 293 396
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
