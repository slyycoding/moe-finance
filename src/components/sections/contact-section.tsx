"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Users, Building2, MapPinned, Globe, CheckCircle } from "lucide-react";
import { useId, useState } from "react";

const loanTypes = ["Car Finance","Business Loan","Equipment Finance","Personal Loan","Home Loan Referral","Credit Impaired Lending","Not Sure Yet"];

const contactDetails = [
  { icon: Phone,  label: "Call or Text",   value: "+61 481 293 395",              sub: "Same-day response", href: "tel:+61481293395" },
  { icon: Mail,   label: "Email",          value: "moe.sayyed@gmail.com",          sub: null,               href: "mailto:moe.sayyed@gmail.com" },
  { icon: MapPin, label: "Location",       value: "Melbourne, Victoria",           sub: "Australia-wide",   href: null },
];

const inputBase: React.CSSProperties = { background: "rgba(255,255,255,0.065)", border: "1px solid rgba(255,255,255,0.10)", fontSize: "16px" };

function Input({ id, type = "text", name, autoComplete, placeholder }: { id: string; type?: string; name: string; autoComplete?: string; placeholder: string }) {
  return (
    <input id={id} type={type} name={name} autoComplete={autoComplete} placeholder={placeholder}
      className="w-full px-3.5 py-2.5 rounded-lg text-white/90 placeholder-white/25 transition-all duration-200"
      style={inputBase}
      onFocus={e => { e.currentTarget.style.border = "1px solid rgba(224,93,56,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.09)"; }}
      onBlur={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)"; e.currentTarget.style.background = "rgba(255,255,255,0.065)"; }} />
  );
}

const vp = { once: false, amount: 0.1 } as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const r = useReducedMotion();
  const ids = { first: useId(), last: useId(), email: useId(), loanType: useId(), message: useId() };
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("https://formspree.io/f/mojbepdp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative bg-[#080d18] py-12 sm:py-14 md:py-16 px-4">
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50%] h-[60%] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(224,93,56,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
          className="text-center text-orange-400/70 text-[10px] font-semibold tracking-[0.35em] uppercase mb-8 sm:mb-10">
          Get In Touch
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: r ? 0 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.7 }} className="flex flex-col gap-5">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none mb-3"
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.025em" }}>
                LET&apos;S BUILD<br />
                <span style={{ background: "linear-gradient(135deg, #ff8c5a 0%, #e05d38 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>YOUR PLAN.</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed max-w-[280px]">
                No pressure. No jargon. A clear conversation about your options and the best path forward.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 flex items-center gap-3 p-3.5 rounded-xl border border-orange-500/20 bg-orange-500/[0.07]"
                style={{ boxShadow: "0 0 30px rgba(224,93,56,0.06)" }}>
                <div aria-hidden className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-orange-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none" style={{ fontFamily: "var(--font-heading)" }}>500+ Clients</p>
                  <p className="text-orange-400/60 text-xs mt-0.5">helped across Australia</p>
                </div>
              </div>
              {[{ icon: Building2, value: "65+", label: "Lending Partners" }, { icon: MapPinned, value: "Melbourne", label: "Based" }, { icon: Globe, value: "Australia", label: "Wide Support" }].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5 p-3 rounded-xl border border-white/[0.07] bg-white/[0.025]">
                  <div aria-hidden className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-white/40" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/80 font-semibold text-xs leading-none" style={{ fontFamily: "var(--font-heading)" }}>{value}</p>
                    <p className="text-white/30 text-[10px] mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            <dl className="space-y-2.5">
              {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <div aria-hidden className="w-7 h-7 rounded-lg bg-orange-500/8 border border-orange-500/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-orange-400/70" strokeWidth={1.5} />
                  </div>
                  <div>
                    <dt className="text-white/25 text-[9px] uppercase tracking-[0.2em] leading-none mb-0.5">{label}</dt>
                    <dd className="text-white/70 text-xs font-medium leading-snug">
                      {href ? (
                        <a href={href} className="hover:text-orange-400 transition-colors duration-200">{value}</a>
                      ) : value}
                      {sub && <span className="text-white/30 text-[10px] ml-1.5">· {sub}</span>}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: r ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.7 }} className="relative">
            <div aria-hidden className="absolute -inset-2 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(224,93,56,0.06) 0%, transparent 65%)", filter: "blur(12px)" }} />
            <div className="relative p-5 sm:p-6 rounded-2xl"
              style={{ background: "linear-gradient(145deg, rgba(16,26,46,0.98), rgba(9,15,28,1))", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset, 0 30px 80px rgba(0,0,0,0.5), 0 0 50px rgba(224,93,56,0.04)" }}>
              <h3 className="text-white font-bold text-base mb-4" style={{ fontFamily: "var(--font-heading)" }}>Send a Message</h3>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                  <CheckCircle className="w-10 h-10 text-orange-400" strokeWidth={1.5} />
                  <p className="text-white font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>Message Sent!</p>
                  <p className="text-white/45 text-sm">Moe will be in touch shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-2 text-orange-400/70 text-xs underline underline-offset-2">Send another</button>
                </div>
              ) : (
              <form noValidate aria-label="Finance enquiry form" className="space-y-3" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Finance Enquiry — Moe Financial" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label htmlFor={ids.first} className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5 block">First Name</label><Input id={ids.first} name="firstName" autoComplete="given-name" placeholder="First name" /></div>
                  <div><label htmlFor={ids.last} className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5 block">Last Name</label><Input id={ids.last} name="lastName" autoComplete="family-name" placeholder="Last name" /></div>
                </div>
                <div><label htmlFor={ids.email} className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5 block">Email</label><Input id={ids.email} type="email" name="email" autoComplete="email" placeholder="your@email.com" /></div>
                <div>
                  <label htmlFor={ids.loanType} className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5 block">Finance Type</label>
                  <select id={ids.loanType} name="loanType" className="w-full px-3.5 py-2.5 rounded-lg text-white/65 appearance-none cursor-pointer transition-all duration-200"
                    style={{ ...inputBase, background: "rgba(255,255,255,0.05)" }}
                    onFocus={e => { e.currentTarget.style.border = "1px solid rgba(224,93,56,0.5)"; }}
                    onBlur={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)"; }}>
                    <option value="" className="bg-[#0c1525]">Select finance type…</option>
                    {loanTypes.map(t => <option key={t} value={t} className="bg-[#0c1525]">{t}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor={ids.message} className="text-white/35 text-[10px] uppercase tracking-widest mb-1.5 block">Message</label>
                  <textarea id={ids.message} name="message" rows={2}
                    placeholder="What are you looking for? Timeframe, situation, questions…"
                    className="w-full px-3.5 py-2.5 rounded-lg text-white/90 placeholder-white/25 transition-all duration-200 resize-none"
                    style={inputBase}
                    onFocus={e => { e.currentTarget.style.border = "1px solid rgba(224,93,56,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.09)"; }}
                    onBlur={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.10)"; e.currentTarget.style.background = "rgba(255,255,255,0.065)"; }} />
                </div>
                <button type="submit" disabled={status === "submitting"}
                  className="btn-shine relative overflow-hidden w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg, #e05d38 0%, #c94822 100%)", boxShadow: "0 0 30px rgba(224,93,56,0.22), 0 1px 0 rgba(255,255,255,0.10) inset, 0 6px 20px rgba(0,0,0,0.25)", fontSize: "16px", minHeight: "48px" }}>
                  {status === "submitting" ? "Sending…" : "Start The Conversation"}
                  {status !== "submitting" && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden />}
                </button>
                {status === "error" && <p className="text-red-400 text-xs text-center">Something went wrong, please try again.</p>}
                <p className="text-white/25 text-xs text-center">No commitment required{" — "}just a conversation.</p>
              </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
