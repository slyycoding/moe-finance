"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Car, User, Briefcase, Package, Building2, Rocket,
  Home, TrendingUp, CreditCard, FileCheck,
} from "lucide-react";

const featured = {
  icon: Car,
  title: "Automotive Finance",
  desc: "New, used, prestige or commercial. Every dealer and state. Fast approvals.",
  badge: "Most Popular",
};

const services = [
  { icon: Briefcase,  title: "Business Loans",     desc: "Working capital, cash flow and growth — all structures.",  accent: "blue" },
  { icon: Package,    title: "Equipment & Asset",  desc: "Machinery, tech and yellow goods. Funded fast.",           accent: "purple" },
  { icon: Building2,  title: "Commercial Lending", desc: "Property and business loans via 65+ lenders.",            accent: "amber" },
  { icon: User,       title: "Personal Loans",     desc: "Prime and non-conforming personal lending.",              accent: "blue" },
  { icon: Rocket,     title: "Business Start-Up",  desc: "Right funding structure from day one.",                   accent: "pink" },
  { icon: Home,       title: "Home Loan Referrals",desc: "Linked to Melbourne's top mortgage brokers.",             accent: "teal" },
  { icon: TrendingUp, title: "Line of Credit",     desc: "Flexible revolving credit — business or personal.",       accent: "indigo" },
  { icon: CreditCard, title: "Credit-Impaired",    desc: "Bad credit is not a dead end. Pathways exist.",           accent: "red" },
  { icon: FileCheck,  title: "Self-Employed",      desc: "Low-doc and alternative income — handled with care.",     accent: "green" },
];

const ac: Record<string, { icon: string; border: string; glow: string; bg: string }> = {
  blue:   { icon: "text-blue-400",   border: "border-blue-500/20",   glow: "rgba(59,130,246,0.09)",  bg: "bg-blue-500/[0.08]" },
  purple: { icon: "text-purple-400", border: "border-purple-500/20", glow: "rgba(168,85,247,0.09)",  bg: "bg-purple-500/[0.08]" },
  amber:  { icon: "text-amber-400",  border: "border-amber-500/20",  glow: "rgba(245,158,11,0.09)",  bg: "bg-amber-500/[0.08]" },
  pink:   { icon: "text-pink-400",   border: "border-pink-500/20",   glow: "rgba(236,72,153,0.09)",  bg: "bg-pink-500/[0.08]" },
  teal:   { icon: "text-teal-400",   border: "border-teal-500/20",   glow: "rgba(20,184,166,0.09)",  bg: "bg-teal-500/[0.08]" },
  indigo: { icon: "text-indigo-400", border: "border-indigo-500/20", glow: "rgba(99,102,241,0.09)",  bg: "bg-indigo-500/[0.08]" },
  red:    { icon: "text-red-400",    border: "border-red-500/20",    glow: "rgba(239,68,68,0.09)",   bg: "bg-red-500/[0.08]" },
  green:  { icon: "text-green-400",  border: "border-green-500/20",  glow: "rgba(34,197,94,0.09)",   bg: "bg-green-500/[0.08]" },
};

const vp = { once: true, amount: 0.15 } as const;

export function ServicesSection() {
  const r = useReducedMotion();
  const FeaturedIcon = featured.icon;

  return (
    <div className="relative bg-[#080d18] py-12 sm:py-14 md:py-16 px-4">
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50%] h-48 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)", filter: "blur(30px)" }} />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.55 }} className="text-center mb-8 sm:mb-10">
          <p className="text-orange-400/65 text-[10px] font-semibold tracking-[0.35em] uppercase mb-2.5">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none mb-3"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.025em" }}>
            Finance Solutions{" "}
            <span style={{ background: "linear-gradient(135deg, #ff8c5a 0%, #e05d38 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              For Every Goal
            </span>
          </h2>
          <p className="text-white/35 text-sm font-light max-w-sm mx-auto">
            Automotive, business, personal, equipment and more — Moe finds the right fit.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.5 }}
          aria-label="Automotive Finance — Most Popular"
          className="relative mb-2.5 rounded-xl overflow-hidden group"
          style={{ background: "linear-gradient(135deg, rgba(224,93,56,0.10) 0%, rgba(224,93,56,0.04) 50%, rgba(8,13,24,0) 100%)", border: "1px solid rgba(224,93,56,0.22)", boxShadow: "0 0 40px rgba(224,93,56,0.07), 0 1px 0 rgba(255,255,255,0.04) inset" }}>
          <div aria-hidden className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(224,93,56,0.12) 0%, transparent 70%)", filter: "blur(16px)" }} />
          <div className="relative flex items-center gap-4 px-5 py-4">
            <div aria-hidden className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-500/12 border border-orange-500/25 flex items-center justify-center">
              <FeaturedIcon className="w-4 h-4 text-orange-400" strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <h3 className="text-white font-bold text-base sm:text-lg" style={{ fontFamily: "var(--font-heading)" }}>{featured.title}</h3>
              <span className="hidden sm:inline-flex px-2 py-px rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-[9px] font-semibold uppercase tracking-widest">{featured.badge}</span>
            </div>
            <div aria-hidden className="hidden sm:block flex-shrink-0 w-px h-5 bg-white/10" />
            <p className="hidden sm:block text-white/48 text-sm leading-none flex-1 min-w-0">{featured.desc}</p>
            <span className="ml-auto flex-shrink-0 text-orange-400/40 text-xs font-medium hidden md:block">All vehicles · All states</span>
          </div>
        </motion.article>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 list-none" role="list">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const a = ac[svc.accent];
            return (
              <motion.li key={svc.title}
                initial={{ opacity: 0, y: r ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                whileHover={r ? {} : { y: -2, transition: { duration: 0.15 } }}
                className="relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl border border-white/[0.07] bg-[#0b1220] overflow-hidden group cursor-default"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
                <div aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{ background: `radial-gradient(circle at 15% 50%, ${a.glow} 0%, transparent 60%)` }} />
                <div aria-hidden className={`flex-shrink-0 w-8 h-8 rounded-lg ${a.bg} ${a.border} border flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className={`w-[15px] h-[15px] ${a.icon}`} strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white/90 font-semibold text-sm leading-tight mb-0.5" style={{ fontFamily: "var(--font-heading)" }}>{svc.title}</h3>
                  <p className="text-white/38 text-[11px] sm:text-xs leading-snug truncate group-hover:text-white/52 transition-colors duration-200">{svc.desc}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          transition={{ delay: 0.15 }} className="text-center mt-6 text-white/22 text-xs">
          Not sure which product fits?{" "}
          <a href="#contact" aria-label="Ask Moe about finance options"
            className="text-orange-400/55 hover:text-orange-400 transition-colors duration-200 underline underline-offset-2">Ask Moe</a>
          {" "}— he&apos;ll find the right fit.
        </motion.p>
      </div>
    </div>
  );
}
