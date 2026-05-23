"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, useCallback, useId } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { id: "t-1", name: "Ahmad K.",  profession: "Business Owner",       rating: 5, quote: "Moe got me approved when three other brokers said no. He structured the deal perfectly and had me driving within 48 hours. Absolute legend.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" },
  { id: "t-2", name: "Sarah M.",  profession: "First-Time Buyer",     rating: 5, quote: "As someone new to Australia I was overwhelmed. Moe explained everything in Arabic, made me feel comfortable and found a great rate. Couldn't be happier.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8c1?w=120&auto=format&fit=crop&q=80" },
  { id: "t-3", name: "David T.",  profession: "Tradesman",            rating: 5, quote: "Equipment finance approved same week. Moe knows exactly what lenders want and delivers every time. Already referred three mates — all approved.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" },
  { id: "t-4", name: "Nadia R.",  profession: "Small Business Owner", rating: 5, quote: "Moe helped me get a business loan when my credit wasn't perfect. He never gives up on finding a solution. He's become my go-to contact for everything finance.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" },
];

const vp = { once: false, amount: 0.2 } as const;

export function TestimonialsSection() {
  const [[index, dir], setPage] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const r = useReducedMotion();
  const regionId = useId();

  const navigate = useCallback((d: number) => {
    setPage(([i]) => [(i + d + testimonials.length) % testimonials.length, d]);
  }, []);

  useEffect(() => {
    if (paused || r) return;
    const id = setInterval(() => navigate(1), 5500);
    return () => clearInterval(id);
  }, [paused, navigate, r]);

  const t = testimonials[index];
  const slideVariants = {
    enter:  (d: number) => ({ x: r ? 0 : d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: r ? 0 : d > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <div className="relative bg-[#080d18] py-16 sm:py-20 md:py-24 px-4">
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-xl h-80 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(224,93,56,0.06) 0%, transparent 70%)", filter: "blur(30px)" }} />
      </div>

      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-14">
          <p className="text-orange-400/70 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Client Reviews</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-none"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
            WHAT CLIENTS SAY{" "}
            <span style={{ background: "linear-gradient(135deg, #ff8c5a 0%, #e05d38 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              ABOUT MOE
            </span>
          </h2>
          <p className="text-white/35 text-base sm:text-lg max-w-sm mx-auto font-light mt-3">Built on referrals. Trusted by hundreds.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative max-w-3xl mx-auto"
          role="region" aria-label="Client testimonials" aria-roledescription="carousel" id={regionId}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

          <div className="relative overflow-hidden" style={{ minHeight: "320px" }} aria-live="polite" aria-atomic>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.article key={t.id} custom={dir} variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
                aria-label={`Testimonial from ${t.name}`}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16 py-10 sm:py-12 rounded-3xl border border-white/10 bg-[#0c1525]"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(224,93,56,0.07) 0%, transparent 70%)", filter: "blur(16px)" }} />
                <div aria-label={`${t.rating} out of 5 stars`} className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl text-white/85 leading-snug font-light mb-7 italic relative z-10">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <p className="text-white/80 font-semibold text-sm sm:text-base" style={{ fontFamily: "var(--font-heading)" }}>{t.name}</p>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-5 mt-7">
            <button onClick={() => navigate(-1)} aria-label="Previous testimonial" aria-controls={regionId}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200" style={{ minWidth: 44, minHeight: 44 }}>
              <ChevronLeft className="w-5 h-5" aria-hidden />
            </button>
            <div role="group" aria-label="Testimonial pagination" className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button key={item.id} onClick={() => setPage([i, i > index ? 1 : -1])}
                  aria-label={`Go to testimonial ${i + 1} — ${item.name}`} aria-current={i === index ? "true" : undefined}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === index ? 24 : 8, height: 8, minWidth: i === index ? 24 : 8, background: i === index ? "#e05d38" : "rgba(255,255,255,0.2)" }} />
              ))}
            </div>
            <button onClick={() => navigate(1)} aria-label="Next testimonial" aria-controls={regionId}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200" style={{ minWidth: 44, minHeight: 44 }}>
              <ChevronRight className="w-5 h-5" aria-hidden />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
