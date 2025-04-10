"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, FileText, Building2, Users2, ClipboardList, Lightbulb, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ServiceCategory = "contable" | "impositiva" | "societaria" | "laboral" | "tramites" | "asesoria"

interface Service {
  title: string
  description: string
}

const serviceData: Record<ServiceCategory, Service[]> = {
  contable: [
    {
      title: "Contabilidad General",
      description: "Registros contables, libros obligatorios y estados financieros para todo tipo de empresas.",
    },
    {
      title: "Análisis Financiero",
      description: "Evaluación de la situación económica y financiera de tu empresa con indicadores claros.",
    },
    {
      title: "Presupuestos y Proyecciones",
      description: "Planificación financiera para tomar decisiones informadas sobre el futuro de tu negocio.",
    },
  ],
  impositiva: [
    {
      title: "Liquidación de Impuestos",
      description: "Cálculo y presentación de impuestos nacionales, provinciales y municipales.",
    },
    {
      title: "Planificación Fiscal",
      description: "Estrategias para optimizar la carga tributaria de manera legal y eficiente.",
    },
    {
      title: "Regímenes Especiales",
      description: "Asesoramiento en monotributo, convenios multilaterales y regímenes de promoción.",
    },
  ],
  societaria: [
    {
      title: "Constitución de Sociedades",
      description: "Asesoramiento y gestión en la creación de diferentes tipos de sociedades.",
    },
    {
      title: "Modificaciones Estatutarias",
      description: "Cambios en el objeto social, capital, administración y otros aspectos societarios.",
    },
    {
      title: "Reorganizaciones Empresariales",
      description: "Fusiones, escisiones y transformaciones societarias con enfoque legal y fiscal.",
    },
  ],
  laboral: [
    {
      title: "Liquidación de Sueldos",
      description: "Cálculo de remuneraciones, cargas sociales y presentación de declaraciones juradas.",
    },
    {
      title: "Gestión de Personal",
      description: "Altas, bajas, modificaciones y asesoramiento en normativa laboral.",
    },
    {
      title: "Auditoría Laboral",
      description: "Revisión del cumplimiento de obligaciones laborales y previsionales.",
    },
  ],
  tramites: [
    {
      title: "Inscripciones y Habilitaciones",
      description: "Gestión de trámites ante organismos públicos y privados.",
    },
    {
      title: "Certificaciones",
      description: "Elaboración de certificaciones contables para diferentes fines.",
    },
    {
      title: "Representación",
      description: "Representación ante organismos fiscales y de control.",
    },
  ],
  asesoria: [
    {
      title: "Consultoría Integral",
      description: "Asesoramiento personalizado para la toma de decisiones estratégicas.",
    },
    {
      title: "Diagnóstico Empresarial",
      description: "Análisis completo de la situación actual de tu empresa y recomendaciones.",
    },
    {
      title: "Acompañamiento Continuo",
      description: "Soporte permanente para resolver dudas y consultas del día a día.",
    },
  ],
}

const categoryIcons = {
  contable: <Calculator className="h-6 w-6" />,
  impositiva: <FileText className="h-6 w-6" />,
  societaria: <Building2 className="h-6 w-6" />,
  laboral: <Users2 className="h-6 w-6" />,
  tramites: <ClipboardList className="h-6 w-6" />,
  asesoria: <Lightbulb className="h-6 w-6" />,
}

const categoryColors = {
  contable: {
    light: "bg-pink-50",
    medium: "bg-pink-100",
    text: "text-pink-600",
    border: "border-pink-200",
    hover: "hover:bg-pink-100",
    active: "bg-gradient-to-r from-pink-500 to-pink-600",
  },
  impositiva: {
    light: "bg-purple-50",
    medium: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:bg-purple-100",
    active: "bg-gradient-to-r from-purple-500 to-purple-600",
  },
  societaria: {
    light: "bg-blue-50",
    medium: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:bg-blue-100",
    active: "bg-gradient-to-r from-blue-500 to-blue-600",
  },
  laboral: {
    light: "bg-yellow-50",
    medium: "bg-yellow-100",
    text: "text-yellow-600",
    border: "border-yellow-200",
    hover: "hover:bg-yellow-100",
    active: "bg-gradient-to-r from-yellow-500 to-yellow-600",
  },
  tramites: {
    light: "bg-green-50",
    medium: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:bg-green-100",
    active: "bg-gradient-to-r from-green-500 to-green-600",
  },
  asesoria: {
    light: "bg-indigo-50",
    medium: "bg-indigo-100",
    text: "text-indigo-600",
    border: "border-indigo-200",
    hover: "hover:bg-indigo-100",
    active: "bg-gradient-to-r from-indigo-500 to-indigo-600",
  },
}

const categoryNames = {
  contable: "Área Contable",
  impositiva: "Área Impositiva",
  societaria: "Área Societaria",
  laboral: "Área Laboral",
  tramites: "Trámites",
  asesoria: "Asesoría",
}

export function ServiceExplorer() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("contable")
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-100 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="lg:col-span-4 bg-purple-50/50">
          <div className="p-6">
            <h3 className="text-lg font-medium text-purple-900 mb-4">Nuestras áreas de servicio</h3>
            <div className="space-y-2">
              {(Object.keys(serviceData) as ServiceCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "w-full flex items-center p-3 rounded-xl transition-all duration-300 group",
                    activeCategory === category
                      ? `${categoryColors[category].active} text-white`
                      : `${categoryColors[category].light} ${categoryColors[category].text} ${categoryColors[category].hover}`,
                  )}
                >
                  <div
                    className={cn(
                      "h-10 w-10 rounded-lg flex items-center justify-center mr-3 transition-all duration-300",
                      activeCategory === category ? "bg-white/20" : `${categoryColors[category].medium}`,
                    )}
                  >
                    {categoryIcons[category]}
                  </div>
                  <span className="font-medium">{categoryNames[category]}</span>
                  <ChevronRight
                    className={cn(
                      "ml-auto h-5 w-5 transition-transform duration-300",
                      activeCategory === category
                        ? "translate-x-0"
                        : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={cn(
                    "h-12 w-12 rounded-2xl flex items-center justify-center mr-4",
                    categoryColors[activeCategory].light,
                  )}
                >
                  <div className={cn("h-6 w-6", categoryColors[activeCategory].text)}>
                    {categoryIcons[activeCategory]}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-purple-900">{categoryNames[activeCategory]}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceData[activeCategory].map((service) => (
                  <motion.div
                    key={service.title}
                    className={cn(
                      "p-6 rounded-xl border transition-all duration-300 cursor-pointer",
                      hoveredService === service.title
                        ? `${categoryColors[activeCategory].border} shadow-lg shadow-${activeCategory}-500/10 -translate-y-1`
                        : "border-gray-100 hover:border-gray-200",
                    )}
                    onMouseEnter={() => setHoveredService(service.title)}
                    onMouseLeave={() => setHoveredService(null)}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4
                      className={cn(
                        "text-lg font-medium mb-2 transition-colors duration-300",
                        hoveredService === service.title ? categoryColors[activeCategory].text : "text-purple-900",
                      )}
                    >
                      {service.title}
                    </h4>
                    <p className="text-purple-700">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
