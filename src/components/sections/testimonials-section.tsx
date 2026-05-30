"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: "t-1",
    name: "Ahmad K.",
    profession: "Business Owner",
    rating: 5,
    quote: "Moe got me approved when three other brokers said no. He structured the deal perfectly and had me driving within 48 hours. Absolute legend.",
  },
  {
    id: "t-2",
    name: "Sarah M.",
    profession: "First Home Buyer",
    rating: 5,
    quote: "As someone new to Australia I was overwhelmed. Moe explained everything clearly, made me feel comfortable and found a great rate. Could not be happier.",
  },
  {
    id: "t-3",
    name: "David T.",
    profession: "Tradesman",
    rating: 5,
    quote: "Equipment finance approved same week. Moe knows exactly what lenders want and delivers every time. Already referred three mates — all approved.",
  },
  {
    id: "t-4",
    name: "Nadia R.",
    profession: "Small Business Owner",
    rating: 5,
    quote: "Moe helped me get a business loan when my credit was not perfect. He never gives up on finding a solution. He is my go-to contact for everything finance.",
  },
];

export function TestimonialsSection() {
  return (
    <div id="testimonials" className="py-16 sm:py-24" style={{ backgroundColor: "#131313" }}>
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="label-chip mb-4 inline-block">Client Reviews</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", color: "#F0EDE8" }}
          >
            What Clients Say About Moe
          </h2>
          <p className="text-base" style={{ color: "rgba(240,237,232,0.52)" }}>
            Built on referrals. Trusted by hundreds of Australians.
          </p>
        </div>

        {/* Desktop grid / Mobile swipe */}
        <ul
          className="swipe-list grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map(({ id, name, profession, rating, quote }) => (
            <li
              key={id}
              className="swipe-card flex flex-col p-6 sm:p-7 rounded-xl"
              style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="flex items-center gap-0.5 mb-4"
                aria-label={`${rating} out of 5 stars`}
              >
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: "#C4922A", color: "#C4922A" }} aria-hidden />
                ))}
              </div>
              <blockquote className="text-sm sm:text-base leading-relaxed mb-5 flex-1" style={{ color: "rgba(240,237,232,0.7)" }}>
                <p>&ldquo;{quote}&rdquo;</p>
              </blockquote>
              <footer>
                <p
                  className="font-semibold text-sm"
                  style={{ fontFamily: "var(--font-heading)", color: "#F0EDE8" }}
                >
                  {name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(240,237,232,0.35)" }}>
                  {profession}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
