"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

const credentials = [
  "Certificate IV in Finance & Mortgage Broking",
  "Diploma of Finance & Mortgage Broking",
  "4+ years in Australian finance and lending",
  "500+ clients helped across Australia",
  "Bilingual — English and Arabic",
];

const highlights = [
  { value: "500+", label: "Clients Helped" },
  { value: "65+",  label: "Lender Partners" },
  { value: "4+",   label: "Years Experience" },
];

export function AboutSection() {
  return (
    <div id="about" className="py-16 sm:py-24" style={{ backgroundColor: "#0C1A38" }}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left — copy */}
            <div>
              <span className="label-chip mb-4 inline-block">About Moe</span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#F0EDE8" }}
              >
                A Broker Who Actually Works For You
              </h2>

              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "rgba(240,237,232,0.55)" }}>
                <p>
                  Mohammed Elsayyed — known as Moe — is a Melbourne-based finance broker with over four years of experience helping Australians access the right lending solutions.
                </p>
                <p>
                  Moe started his career in hospitality before moving into finance at one of Australia&apos;s largest automotive dealership groups. Within six months he became a fully qualified Business Manager — and by the end of 2022 he had launched his own brokerage.
                </p>
                <p>
                  Today, Moe&apos;s business runs almost entirely on referrals. Every client who returns brings family and friends — and that says more about his service than any award ever could.
                </p>
                <p>
                  Moe specialises in deals that other brokers walk away from: complex income structures, credit-impaired applicants, self-employed borrowers and non-standard scenarios. His philosophy is simple — there is always an option worth exploring.
                </p>
              </div>

              <ul className="space-y-2.5 list-none p-0 m-0">
                {credentials.map(q => (
                  <li key={q} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#F0A500" }}
                      aria-hidden
                    />
                    <span className="text-sm" style={{ color: "rgba(240,237,232,0.6)" }}>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — stats + CTA */}
            <div className="flex flex-col gap-6">
              <div
                className="grid grid-cols-3 gap-4 p-6 rounded-xl"
                style={{ backgroundColor: "#0F2044", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {highlights.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p
                      className="text-2xl sm:text-3xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-heading)", color: "#F0A500" }}
                    >
                      {value}
                    </p>
                    <p className="text-xs leading-tight" style={{ color: "rgba(240,237,232,0.4)" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="p-6 rounded-xl"
                style={{ backgroundColor: "rgba(240,165,0,0.08)", border: "1px solid rgba(240,165,0,0.2)" }}
              >
                <p
                  className="text-sm leading-relaxed italic mb-4"
                  style={{ color: "rgba(240,237,232,0.65)" }}
                >
                  &ldquo;With Moe, it&apos;s never simply a &lsquo;no&rsquo; — there is always an option, strategy or pathway worth exploring.&rdquo;
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#F0A500" }}>
                  — The Moe Financial Philosophy
                </p>
              </div>

              <a
                href="/contact"
                aria-label="Get in touch with Moe"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Work With Moe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
