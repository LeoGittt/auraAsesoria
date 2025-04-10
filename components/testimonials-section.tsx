"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "@/components/testimonial-card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Desde que trabajo con Aura, mi contabilidad dejó de ser un dolor de cabeza. Son claras, eficientes y siempre están cuando las necesito.",
      author: "María L.",
      company: "Emprendedora",
    },
    {
      quote:
        "Lo que más valoro es su capacidad para explicar temas complejos de forma sencilla. Han transformado la manera en que veo los números de mi empresa.",
      author: "Carlos G.",
      company: "Pyme Tecnológica",
    },
    {
      quote:
        "Un equipo profesional con un toque humano que marca la diferencia. Recomiendo Aura a todos los emprendedores que conozco.",
      author: "Laura S.",
      company: "Comercio Minorista",
    },
  ]

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Experiencias de quienes ya confían en nosotras</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard quote={testimonial.quote} author={testimonial.author} company={testimonial.company} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
