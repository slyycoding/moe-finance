import { HeroSection } from "@/components/sections/hero-section";
import { LendersSection } from "@/components/sections/lenders-section";
import { ServicesSection } from "@/components/sections/services-section";
import { JourneySection } from "@/components/sections/journey-section";
import { WhySection } from "@/components/sections/why-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Navbar } from "@/components/sections/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main id="main-content" className="bg-white">
        <section aria-label="Hero">
          <HeroSection />
        </section>

        <section aria-label="Trusted lenders">
          <LendersSection />
        </section>

        <section id="services" aria-label="Finance services">
          <ServicesSection />
        </section>

        <section id="process" aria-label="How it works">
          <JourneySection />
        </section>

        <section aria-label="Why choose Moe Financial">
          <WhySection />
        </section>

        <section id="testimonials" aria-label="Client testimonials">
          <TestimonialsSection />
        </section>

        <section id="about" aria-label="About Moe">
          <AboutSection />
        </section>

        <section id="contact" aria-label="Contact Moe">
          <ContactSection />
        </section>
      </main>

      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
