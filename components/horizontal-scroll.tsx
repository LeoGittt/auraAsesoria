"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FileText, Calculator, Building2, Users2, ClipboardList, Lightbulb } from "lucide-react"

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  const services = [
    {
      icon: <Calculator className="h-8 w-8 text-pink-500" />,
      title: "Contabilidad General",
      description: "Registros contables, libros obligatorios y estados financieros para todo tipo de empresas.",
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "Impuestos",
      description: "Liquidación de impuestos nacionales, provinciales y municipales con planificación fiscal.",
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-500" />,
      title: "Área Societaria",
      description: "Constitución, modificaciones y reorganizaciones empresariales con enfoque legal y fiscal.",
    },
    {
      icon: <Users2 className="h-8 w-8 text-yellow-500" />,
      title: "Gestión Laboral",
      description: "Liquidación de sueldos, gestión de personal y cumplimiento de obligaciones laborales.",
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-green-500" />,
      title: "Trámites",
      description: "Gestión de inscripciones, habilitaciones y representación ante organismos fiscales.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-500" />,
      title: "Consultoría",
      description: "Asesoramiento personalizado para la toma de decisiones estratégicas en tu negocio.",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-purple-50/30 to-white">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />

      <div className="container px-4 mx-auto mb-12">
        <div className="text-center">
          <div className="inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-600 mb-4">
            Nuestras Especialidades
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 tracking-tight">
            Servicios que transforman tu negocio
          </h2>
        </div>
      </div>

      <div className="relative">
        <motion.div style={{ x }} className="flex gap-8 pl-[10%]">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 rounded-3xl bg-white p-8 shadow-xl shadow-purple-900/5 border border-purple-100 hover:shadow-purple-900/10 transition-shadow duration-300"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-3">{service.title}</h3>
              <p className="text-purple-700">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
