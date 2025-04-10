"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { RevealAnimation } from "@/components/reveal-animation"
import { TextReveal } from "@/components/text-reveal"

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  const steps = [
    {
      title: "Consulta Inicial",
      description: "Conocemos tu negocio, tus necesidades y objetivos para entender cómo podemos ayudarte.",
      icon: "🤝",
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "Diagnóstico",
      description: "Analizamos tu situación actual y desarrollamos un plan personalizado para optimizar tu gestión.",
      icon: "🔍",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Implementación",
      description: "Ponemos en marcha las soluciones diseñadas específicamente para tu negocio.",
      icon: "⚙️",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Seguimiento",
      description: "Monitoreamos constantemente los resultados y ajustamos nuestra estrategia según sea necesario.",
      icon: "📈",
      color: "from-yellow-400 to-yellow-600",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-900 to-transparent opacity-5" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-yellow-200/30 to-pink-200/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <RevealAnimation>
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-600 mb-4">
              Nuestro Proceso
            </div>
            <TextReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 tracking-tight">
                Cómo trabajamos contigo
              </h2>
            </TextReveal>
            <p className="text-purple-700 max-w-2xl mx-auto text-lg">
              Un enfoque estructurado para transformar tu gestión contable
            </p>
          </div>
        </RevealAnimation>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-100 -translate-x-1/2 rounded-full" />

          {/* Progress line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-600 -translate-x-1/2 rounded-full origin-top"
            style={{ scaleY: progress }}
          />

          {/* Timeline steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center mb-24 last:mb-0 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <RevealAnimation
                  delay={index * 0.1}
                  className={`w-1/2 px-8 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">{step.title}</h3>
                  <p className="text-purple-700">{step.description}</p>
                </RevealAnimation>

                <div className="relative">
                  <motion.div
                    className={`h-16 w-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl shadow-lg z-10`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                <div className="w-1/2 px-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
