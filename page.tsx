"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
// import { TaxCalculator } from "@/components/tax-calculator"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { ResourcesSection } from "@/components/resources-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
// import { Globe3D } from "@/components/3d-globe"
// import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        {/* <TestimonialsSection /> */}

        {/* 3D Globe Section */}
       <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-black text-white py-32">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none z-0" />

  <div className="container max-w-6xl mx-auto px-4 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-20 items-center">
      {/* Texto */}
      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Asesoría contable sin fronteras
        </h2>
        <p className="text-white/70 text-lg leading-relaxed">
          Trabajamos con clientes de todo el país y la región, brindando soluciones adaptadas a cada
          jurisdicción y normativa local.
        </p>

        <div className="space-y-6">
          {[
            {
              id: "01",
              title: "Asesoría remota",
              desc: "Brindamos servicios a distancia con la misma calidad y eficiencia.",
            },
            {
              id: "02",
              title: "Conocimiento multijurisdiccional",
              desc: "Experiencia en normativas de diferentes provincias y países.",
            },
            {
              id: "03",
              title: "Tecnología de vanguardia",
              desc: "Utilizamos herramientas digitales para una colaboración eficiente.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start group transition duration-300 hover:scale-[1.01]"
            >
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-5 text-lg font-semibold text-white shadow-md border border-white/10">
                {item.id}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  </div>
</section>

        {/* <TaxCalculator /> */}
        <BlogSection />
        <ResourcesSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  )
}
