import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { LendersSection } from "@/components/sections/lenders-section";
import { JourneySection } from "@/components/sections/journey-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Navbar } from "@/components/sections/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main id="main-content" className="grain bg-[#080d18] min-h-screen">
        {/* Hero — contains the only H1 on the page */}
        <section aria-label="Hero — Finance Made Personal">
          <HeroGeometric
            title1="Finance Made"
            title2="Personal"
          />
        </section>

        <section aria-label="Key statistics">
          <StatsSection />
        </section>

        <section id="services" aria-label="Finance services">
          <ServicesSection />
        </section>

        <section id="about" aria-label="About Moe">
          <AboutSection />
        </section>

        <section aria-label="Our lending network">
          <LendersSection />
        </section>

        <section id="process" aria-label="How it works">
          <JourneySection />
        </section>

        <section id="testimonials" aria-label="Client testimonials">
          <TestimonialsSection />
        </section>

        <section aria-label="Our philosophy">
          <PhilosophySection />
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
