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
    <div className="py-16 sm:py-20" style={{ backgroundColor: "#F8F7F4" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C4922A" }}>
            Client Reviews
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            What Clients Say About Moe
          </h2>
          <p className="text-gray-500 text-base">Built on referrals. Trusted by hundreds of Australians.</p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map(({ id, name, profession, rating, quote }) => (
            <li
              key={id}
              className="flex flex-col p-6 sm:p-7 rounded-xl bg-white border border-gray-100"
            >
              <div
                className="flex items-center gap-0.5 mb-4"
                aria-label={`${rating} out of 5 stars`}
              >
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 flex-1">
                <p>&ldquo;{quote}&rdquo;</p>
              </blockquote>
              <footer>
                <p className="text-gray-900 font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                  {name}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{profession}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
