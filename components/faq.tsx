"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"
import { TextReveal } from "@/components/text-reveal"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Qué servicios ofrecen para emprendedores?",
      answer:
        "Ofrecemos una amplia gama de servicios diseñados específicamente para emprendedores, incluyendo asesoramiento inicial, inscripciones impositivas, planificación fiscal, contabilidad básica y acompañamiento en el crecimiento de tu negocio. Nuestro enfoque es brindarte soluciones claras y accesibles que te permitan enfocarte en lo que mejor sabes hacer.",
    },
    {
      question: "¿Cómo funciona el proceso de trabajo con Aura?",
      answer:
        "Nuestro proceso comienza con una reunión inicial gratuita donde conocemos tu negocio y tus necesidades específicas. Luego, diseñamos un plan de trabajo personalizado, establecemos canales de comunicación claros y comenzamos a implementar las soluciones acordadas. Mantenemos reuniones periódicas de seguimiento para asegurarnos de que todo funcione correctamente y ajustamos nuestra estrategia según sea necesario.",
    },
    {
      question: "¿Cuáles son los costos de sus servicios?",
      answer:
        "Nuestros honorarios varían según el tipo de servicio, la complejidad y el volumen de trabajo requerido. Trabajamos con planes mensuales personalizados que se adaptan a las necesidades y posibilidades de cada cliente. En la reunión inicial, luego de entender tus necesidades, te presentaremos una propuesta clara y transparente sin costos ocultos.",
    },
    {
      question: "¿Trabajan con empresas de todos los tamaños?",
      answer:
        "Sí, trabajamos con negocios de todos los tamaños, desde emprendedores individuales hasta empresas medianas. Nuestros servicios están diseñados para adaptarse y escalar según las necesidades de cada cliente, brindando soluciones personalizadas que evolucionan a medida que tu negocio crece.",
    },
    {
      question: "¿Cómo puedo comenzar a trabajar con ustedes?",
      answer:
        "Comenzar es muy sencillo. Puedes agendar una consulta gratuita a través de nuestro sitio web, llamarnos directamente o enviarnos un correo electrónico. En este primer contacto, conoceremos tus necesidades y te explicaremos cómo podemos ayudarte. No hay compromiso inicial y estaremos encantadas de responder todas tus preguntas.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50/50 to-transparent" />
      <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-yellow-200/20 to-pink-200/20 blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/20 to-purple-200/20 blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <RevealAnimation>
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600 mb-4">
              Preguntas Frecuentes
            </div>
            <TextReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 tracking-tight">
                Resolvemos tus dudas
              </h2>
            </TextReveal>
            <p className="text-purple-700 max-w-2xl mx-auto text-lg">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>
        </RevealAnimation>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <RevealAnimation key={index} delay={index * 0.1}>
              <div className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className={cn(
                    "w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300",
                    openIndex === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/10"
                      : "bg-white border border-purple-100 text-purple-900 hover:border-purple-200",
                  )}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-colors",
                        openIndex === index ? "text-white" : "text-purple-500",
                      )}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-purple-50 rounded-b-2xl border-x border-b border-purple-100">
                        <p className="text-purple-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
