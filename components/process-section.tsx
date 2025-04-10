"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

function ProcessStep({
  number,
  title,
  description,
  isLast = false,
  index,
}: ProcessStepProps) {
  return (
    <motion.div
      className="flex group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center mr-6">
        <motion.div
          className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white font-medium text-lg relative shadow-lg group-hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
        >
          {number}
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ scale: 0.8 }}
          />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-0.5 h-full bg-purple-100 my-2"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true }}
          />
        )}
      </div>
      <div className={`pb-12 ${isLast ? "" : ""}`}>
        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
        {!isLast && (
          <ChevronRight className="mt-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Consulta Inicial",
      description:
        "Analizamos tus necesidades contables y financieras en una reunión sin compromiso.",
    },
    {
      number: "2",
      title: "Diagnóstico Personalizado",
      description:
        "Realizamos un análisis detallado de tu situación actual para identificar oportunidades.",
    },
    {
      number: "3",
      title: "Plan de Acción",
      description:
        "Desarrollamos estrategias contables a medida para optimizar tu gestión financiera.",
    },
    {
      number: "4",
      title: "Implementación",
      description:
        "Nuestro equipo ejecuta las soluciones con seguimiento continuo y reportes periódicos.",
    },
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-100 blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-neutral-600 mb-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all"
          >
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
            Metodología de Trabajo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
          >
            Nuestro proceso <span className="text-purple-600">claro</span> y
            efectivo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Cada paso diseñado para ofrecerte transparencia y resultados
            medibles
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-12 max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-medium text-lg group"
          >
            Comienza tu proceso ahora
            <ArrowRight className="inline ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
