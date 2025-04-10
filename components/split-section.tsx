"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"
import { TextReveal } from "@/components/text-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function SplitSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  const benefits = [
    "Ahorra tiempo y enfócate en tu negocio",
    "Toma decisiones informadas con datos claros",
    "Cumple con todas tus obligaciones fiscales",
    "Optimiza tu carga tributaria legalmente",
    "Recibe asesoramiento personalizado",
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50/50 to-transparent" />
      <div className="absolute -top-40 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200/20 to-blue-200/20 blur-3xl" />
      <div className="absolute -bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-yellow-200/20 to-purple-200/20 blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealAnimation>
            <div>
              <div className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600 mb-4">
                ¿Por qué elegirnos?
              </div>
              <TextReveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 tracking-tight">
                  Transforma tu experiencia contable
                </h2>
              </TextReveal>
              <p className="text-purple-700 text-lg mb-8">
                En Aura Asesoría Contable combinamos profesionalismo con un enfoque humano y cercano. Entendemos que
                detrás de cada número hay personas, sueños y proyectos que merecen ser tratados con dedicación y
                empatía.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <p className="text-purple-800">{benefit}</p>
                  </div>
                ))}
              </div>

              <MagneticButton>
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full px-8 group">
                  Descubre cómo podemos ayudarte
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </MagneticButton>
            </div>
          </RevealAnimation>

          <div className="relative h-[500px] lg:h-auto">
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-3/4 h-3/5 rounded-3xl overflow-hidden shadow-xl shadow-purple-900/10"
            >
              <img
                src="/placeholder.svg?height=300&width=400&text=Imagen+1"
                alt="Equipo de Aura"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-3/4 h-3/5 rounded-3xl overflow-hidden shadow-xl shadow-purple-900/10"
            >
              <img
                src="/placeholder.svg?height=300&width=400&text=Imagen+2"
                alt="Oficina de Aura"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
