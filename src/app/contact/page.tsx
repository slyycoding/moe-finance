import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Contact — Get In Touch With Moe",
  description:
    "Ready to get started? Contact Moe Financial today. Home loans, refinancing, vehicle finance and business lending. Melbourne based, Australia-wide. Free consultation, no obligation.",
  alternates: { canonical: "https://moefinancial.com.au/contact" },
};

export default function ContactPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main id="main-content" style={{ backgroundColor: "#F8FAFC" }}>
        {/* Page header */}
        <div
          className="pt-28 sm:pt-32 pb-12 sm:pb-16 text-center"
          style={{ backgroundColor: "#141A5D" }}
        >
          <div className="container mx-auto">
            <span className="label-chip mb-5 inline-block">Free Consultation</span>
            <h1
              className="text-3xl sm:text-5xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.025em",
                color: "#FFFFFF",
              }}
            >
              Let&apos;s Talk Finance
            </h1>
            <p
              className="text-base sm:text-lg max-w-md mx-auto"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              No pressure. No jargon. Just an honest conversation about your options.
            </p>
          </div>
        </div>

        <section aria-label="Contact form">
          <ContactSection />
        </section>
      </main>

      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
