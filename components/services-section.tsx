"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/service-card";
import {
  Calculator,
  FileText,
  Building2,
  Users2,
  ClipboardList,
  Lightbulb,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Calculator className="h-5 w-5 text-purple-700" />,
      title: "Contabilidad General",
      description:
        "Registros contables, libros obligatorios y estados financieros para todo tipo de empresas.",
    },
    {
      icon: <FileText className="h-5 w-5 text-purple-700" />,
      title: "Impuestos",
      description:
        "Liquidación de impuestos nacionales, provinciales y municipales con planificación fiscal.",
    },
    {
      icon: <Building2 className="h-5 w-5 text-purple-700" />,
      title: "Área Societaria",
      description:
        "Constitución, modificaciones y reorganizaciones empresariales con enfoque legal y fiscal.",
    },
    {
      icon: <Users2 className="h-5 w-5 text-purple-700" />,
      title: "Gestión Laboral",
      description:
        "Liquidación de sueldos, gestión de personal y cumplimiento de obligaciones laborales.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-purple-700" />,
      title: "Trámites",
      description:
        "Gestión de inscripciones, habilitaciones y representación ante organismos fiscales.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-purple-700" />,
      title: "Consultoría",
      description:
        "Asesoramiento personalizado para la toma de decisiones estratégicas en tu negocio.",
    },
  ];

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
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-purple-700 mr-2"></span>
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Soluciones integrales para tu negocio
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Descubre cómo podemos ayudarte a transformar la gestión de tu
            empresa
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
