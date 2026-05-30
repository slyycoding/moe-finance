import { HeroSection } from "@/components/sections/hero-section";
import { LendersSection } from "@/components/sections/lenders-section";
import { ServicesSection } from "@/components/sections/services-section";
import { JourneySection } from "@/components/sections/journey-section";
import { WhySection } from "@/components/sections/why-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutSection } from "@/components/sections/about-section";
import { BookingCtaSection } from "@/components/sections/booking-cta-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Navbar } from "@/components/sections/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main id="main-content" style={{ backgroundColor: "#F8FAFC" }}>
        <section aria-label="Hero">
          <HeroSection />
        </section>

        <section aria-label="Trusted lenders">
          <LendersSection />
        </section>

        <section aria-label="Finance services">
          <ServicesSection />
        </section>

        <section aria-label="How it works">
          <JourneySection />
        </section>

        <section aria-label="Why choose Moe Financial">
          <WhySection />
        </section>

        <section aria-label="Client testimonials">
          <TestimonialsSection />
        </section>

        <section aria-label="About Moe">
          <AboutSection />
        </section>

        <section aria-label="Book a free call">
          <BookingCtaSection />
        </section>

        <section aria-label="Contact Moe directly">
          <ContactCtaSection />
        </section>
      </main>

      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
