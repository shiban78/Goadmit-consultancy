import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { DestinationsSection } from "@/components/destinations-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
