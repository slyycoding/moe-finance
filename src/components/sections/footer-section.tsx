"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";

function MoeLogoLight({ className }: { className?: string }) {
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
      <line x1="90" y1="6" x2="90" y2="38" stroke="#C4922A" strokeWidth={0.75} opacity={0.4} />
      <text
        x={97} y="26"
        fontFamily="var(--font-body, 'Inter', sans-serif)"
        fontSize={11}
        fontWeight={500}
        fill="rgba(255,255,255,0.4)"
        letterSpacing={2.5}
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

const serviceLinks = [
  { title: "Home Loans",      href: "#services" },
  { title: "Refinancing",     href: "#services" },
  { title: "First Home Buyers", href: "#services" },
  { title: "Vehicle Finance", href: "#services" },
  { title: "Business Finance", href: "#services" },
];

const companyLinks = [
  { title: "How It Works",  href: "#process" },
  { title: "Why Choose Us", href: "#why" },
  { title: "Reviews",       href: "#testimonials" },
  { title: "About Moe",     href: "#about" },
  { title: "Contact",       href: "#contact" },
];

export function FooterSection() {
  return (
    <footer style={{ backgroundColor: "#111827" }} className="px-4 py-12 sm:py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <MoeLogoLight className="h-9 w-auto" />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Melbourne&apos;s trusted finance broker — home loans, refinancing, vehicle finance and business lending across Australia since 2021.
            </p>
            <div className="space-y-2">
              <a href="tel:+61481293396" className="flex items-center gap-2 text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C4922A")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
                +61 481 293 396
              </a>
              <a href="mailto:contact@moefinancial.com.au" className="flex items-center gap-2 text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C4922A")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
                contact@moefinancial.com.au
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>Services</p>
            <nav aria-label="Services links">
              <ul className="space-y-3 list-none p-0 m-0" role="list">
                {serviceLinks.map(item => (
                  <li key={item.title}>
                    <a href={item.href} className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C4922A")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>Company</p>
            <nav aria-label="Company links">
              <ul className="space-y-3 list-none p-0 m-0" role="list">
                {companyLinks.map(item => (
                  <li key={item.title}>
                    <a href={item.href} className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C4922A")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>Connect</p>
            <a
              href="https://www.linkedin.com/in/moe-elsayyed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Moe on LinkedIn"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md text-white text-sm font-medium transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "#0a66c2" }}
            >
              <LinkedinIcon className="w-4 h-4 flex-shrink-0" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.2)" }}>
            Finance broking services only — not a lender. Always read terms before signing. © {new Date().getFullYear()} Moe Financial. All rights reserved.
          </p>
          <a
            href="#contact"
            aria-label="Book a call with Moe"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-md border text-xs font-medium transition-all duration-200 group"
            style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)", minHeight: "36px" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#C4922A"; e.currentTarget.style.color = "#C4922A"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
          >
            Book A Call
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
