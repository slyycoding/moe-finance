"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Globe2, Users2, TrendingUp } from "lucide-react";

const timeline = [
  { year: "Pre-2021", label: "Hospitality Career",  desc: "Managed cafés, operated venues, worked in hotel management. Built exceptional people and communication skills." },
  { year: "2021",     label: "Entered Finance",      desc: "Joined one of Australia's major automotive dealership groups as a finance trainee." },
  { year: "6 months", label: "Fully Qualified",      desc: "Became a qualified Business Manager — rapidly building a reputation for deal-making and problem-solving." },
  { year: "Dec 2022", label: "Went Independent",     desc: "Launched his own finance brokerage — built on trust, relationships and results." },
  { year: "Today",    label: "500+ Clients Served",  desc: "65+ lender relationships. Bilingual EN/AR. Referral-driven. Melbourne's most connected broker." },
];

const differentiators = [
  { icon: Globe2,     title: "Bilingual EN/AR",         desc: "Serves Melbourne's Arabic-speaking community in their native language, making finance accessible for all." },
  { icon: Users2,     title: "Referral-Built Business", desc: "Every client who returns brings family and friends — the real testament to Moe's service." },
  { icon: TrendingUp, title: "Outside-Policy Expert",   desc: "Specialises in structuring deals other brokers walk away from — bad credit, self-employed, complex income." },
];

const vp = { once: true, amount: 0.15 } as const;

export function AboutSection() {
  const r = useReducedMotion();
  return (
    <div className="relative bg-[#080d18] py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none hidden sm:block"
        style={{ background: "radial-gradient(circle, rgba(224,93,56,0.06) 0%, transparent 70%)", filter: "blur(30px)" }} />
      <div className="container mx-auto">

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <p className="text-orange-400/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">The Story</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
            FROM HOSPITALITY{" "}
            <span style={{ background: "linear-gradient(135deg, #ff8c5a 0%, #e05d38 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              TO FINANCE.
            </span>
          </h2>
        </motion.div>

        <ol className="max-w-2xl mx-auto mb-14 sm:mb-20 list-none" aria-label="Moe's career timeline">
          {timeline.map((item, i) => (
            <motion.li key={item.year}
              initial={{ opacity: 0, x: r ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="flex gap-4 sm:gap-6 mb-6 last:mb-0 group">
              <div className="flex flex-col items-center flex-shrink-0" aria-hidden>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-orange-500/30 bg-orange-500/10 flex items-center justify-center text-orange-400 text-xs font-bold">
                  {i + 1}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(to bottom, rgba(224,93,56,0.3), rgba(224,93,56,0.05))" }} />
                )}
              </div>
              <div className="pb-6">
                <time className="text-orange-400/70 text-xs font-semibold tracking-widest uppercase mb-1 block">{item.year}</time>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>{item.label}</h3>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 sm:mb-12 list-none" role="list">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.li key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={r ? {} : { y: -4 }}
                className="flex items-start gap-4 p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-200"
                style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.2)" }}>
                <div aria-hidden className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-orange-500/15 bg-orange-500/5"
          style={{ boxShadow: "0 0 60px rgba(224,93,56,0.05)" }}>
          <p className="text-orange-400/70 text-xs uppercase tracking-[0.3em] mb-5">Qualifications</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
            {["Bachelor's — Hospitality & Hotel Management", "Certificate IV in Finance & Mortgage Broking", "Diploma of Finance & Mortgage Broking", "Ongoing industry training & CPD"].map(q => (
              <li key={q} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" aria-hidden />
                <span className="text-white/65 text-sm">{q}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
