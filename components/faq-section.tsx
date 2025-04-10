"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button onClick={onClick} className="flex justify-between items-center w-full py-6 text-left">
        <h3 className={cn("text-lg font-medium transition-colors", isOpen ? "text-black" : "text-neutral-700")}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="h-5 w-5 text-neutral-500" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 24 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="text-neutral-600 pb-2">{answer}</div>
      </motion.div>
    </div>
  )
}

export function FAQSection() {
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
    <section className="py-24 bg-white">
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
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Resolvemos tus dudas</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white border border-neutral-200 rounded-lg p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
