"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  FileText,
  Building2,
  Users2,
  ClipboardList,
  Lightbulb,
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
} from "lucide-react"
import Image from "next/image"

// Tipos para los servicios
interface ServiceFeature {
  title: string
  description: string
}

interface ServicePlan {
  name: string
  price: string
  description: string
  features: string[]
  recommended?: boolean
}

interface ServiceCategory {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  color: string
  image: string
  features: ServiceFeature[]
  plans: ServicePlan[]
}

export default function ServiciosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("contable")
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "plans">("overview")

  // Datos de servicios
  const serviceCategories: ServiceCategory[] = [
    {
      id: "contable",
      title: "Área Contable",
      subtitle: "Gestión financiera integral",
      description:
        "Ofrecemos servicios contables completos para que puedas tomar decisiones informadas sobre tu negocio. Desde registros básicos hasta estados financieros complejos, nos adaptamos a las necesidades específicas de tu empresa.",
      icon: <Calculator className="h-6 w-6" />,
      color: "from-pink-500 to-rose-600",
      image: "/placeholder.svg?height=600&width=800&text=Contabilidad",
      features: [
        {
          title: "Registros contables",
          description: "Mantenemos tus libros actualizados y en orden, cumpliendo con todas las normativas vigentes.",
        },
        {
          title: "Estados financieros",
          description:
            "Preparamos balances, estados de resultados y flujos de efectivo con información clara y precisa.",
        },
        {
          title: "Análisis financiero",
          description: "Interpretamos tus números para ayudarte a entender la salud financiera de tu negocio.",
        },
        {
          title: "Proyecciones y presupuestos",
          description: "Desarrollamos modelos financieros para planificar el futuro de tu empresa.",
        },
        {
          title: "Conciliaciones bancarias",
          description:
            "Verificamos que tus registros coincidan con los movimientos bancarios para evitar discrepancias.",
        },
      ],
      plans: [
        {
          name: "Básico",
          price: "$15.000/mes",
          description: "Ideal para autónomos y pequeños emprendedores",
          features: [
            "Registros contables mensuales",
            "Conciliaciones bancarias",
            "Informe financiero trimestral",
            "Soporte por email",
          ],
        },
        {
          name: "Profesional",
          price: "$30.000/mes",
          description: "Perfecto para PyMEs en crecimiento",
          recommended: true,
          features: [
            "Todo lo del plan Básico",
            "Estados financieros mensuales",
            "Análisis financiero trimestral",
            "Proyecciones anuales",
            "Soporte prioritario",
          ],
        },
        {
          name: "Empresarial",
          price: "$50.000/mes",
          description: "Para empresas establecidas con necesidades complejas",
          features: [
            "Todo lo del plan Profesional",
            "Contabilidad de costos",
            "Informes personalizados",
            "Reuniones mensuales de seguimiento",
            "Asesoría financiera continua",
            "Soporte 24/7",
          ],
        },
      ],
    },
    {
      id: "impositiva",
      title: "Área Impositiva",
      subtitle: "Optimización fiscal estratégica",
      description:
        "Gestionamos tus obligaciones fiscales de manera eficiente, minimizando la carga tributaria dentro del marco legal. Nuestro enfoque proactivo te ayuda a anticiparte a los cambios normativos y aprovechar beneficios fiscales.",
      icon: <FileText className="h-6 w-6" />,
      color: "from-purple-500 to-indigo-600",
      image: "/placeholder.svg?height=600&width=800&text=Impuestos",
      features: [
        {
          title: "Liquidación de impuestos",
          description:
            "Calculamos y presentamos tus impuestos nacionales, provinciales y municipales en tiempo y forma.",
        },
        {
          title: "Planificación fiscal",
          description: "Diseñamos estrategias para optimizar tu carga tributaria de manera legal y eficiente.",
        },
        {
          title: "Regímenes especiales",
          description:
            "Te asesoramos sobre monotributo, convenios multilaterales y regímenes de promoción aplicables a tu actividad.",
        },
        {
          title: "Certificaciones fiscales",
          description: "Preparamos certificaciones requeridas por organismos fiscales y entidades financieras.",
        },
        {
          title: "Atención de fiscalizaciones",
          description: "Te acompañamos durante inspecciones y requerimientos de los organismos fiscales.",
        },
      ],
      plans: [
        {
          name: "Monotributo",
          price: "$10.000/mes",
          description: "Para profesionales independientes y pequeños comercios",
          features: [
            "Recategorizaciones",
            "Presentación de declaraciones juradas",
            "Asesoramiento continuo",
            "Alertas de vencimientos",
          ],
        },
        {
          name: "Responsable Inscripto",
          price: "$25.000/mes",
          description: "Para empresas con obligaciones fiscales regulares",
          recommended: true,
          features: [
            "Liquidación de IVA mensual",
            "Liquidación de Ingresos Brutos",
            "Impuesto a las Ganancias anual",
            "Planificación fiscal básica",
            "Soporte prioritario",
          ],
        },
        {
          name: "Corporativo",
          price: "$45.000/mes",
          description: "Para empresas con estructuras complejas y múltiples obligaciones",
          features: [
            "Todo lo del plan Responsable Inscripto",
            "Planificación fiscal avanzada",
            "Precios de transferencia",
            "Impuestos internacionales",
            "Regímenes especiales",
            "Reuniones trimestrales de planificación",
          ],
        },
      ],
    },
    {
      id: "societaria",
      title: "Área Societaria",
      subtitle: "Estructuración legal óptima",
      description:
        "Asesoramos en la creación, modificación y gestión de sociedades comerciales, encontrando la estructura legal más adecuada para tu negocio y objetivos empresariales.",
      icon: <Building2 className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-600",
      image: "/placeholder.svg?height=600&width=800&text=Sociedades",
      features: [
        {
          title: "Constitución de sociedades",
          description: "Gestionamos la creación de SRL, SA, SAS y otras formas societarias según tus necesidades.",
        },
        {
          title: "Modificaciones estatutarias",
          description:
            "Tramitamos cambios en el objeto social, capital, administración y otros aspectos de tu sociedad.",
        },
        {
          title: "Reorganizaciones empresariales",
          description: "Asesoramos en fusiones, escisiones y transformaciones societarias con enfoque legal y fiscal.",
        },
        {
          title: "Actas y libros societarios",
          description: "Mantenemos al día la documentación legal requerida por la normativa vigente.",
        },
        {
          title: "Due diligence",
          description: "Realizamos auditorías legales y fiscales para procesos de compra, venta o inversión.",
        },
      ],
      plans: [
        {
          name: "Constitución",
          price: "Desde $80.000",
          description: "Servicio único para la creación de tu empresa",
          features: [
            "Asesoramiento sobre el tipo societario",
            "Redacción de estatutos",
            "Inscripción en registros públicos",
            "Obtención de CUIT",
            "Libros societarios iniciales",
          ],
        },
        {
          name: "Mantenimiento",
          price: "$15.000/mes",
          description: "Gestión continua de los aspectos societarios",
          recommended: true,
          features: [
            "Actas de asamblea y directorio",
            "Actualización de libros",
            "Modificaciones menores",
            "Presentaciones anuales",
            "Asesoramiento continuo",
          ],
        },
        {
          name: "Integral",
          price: "$35.000/mes",
          description: "Solución completa para estructuras corporativas complejas",
          features: [
            "Todo lo del plan Mantenimiento",
            "Reorganizaciones societarias",
            "Planificación patrimonial",
            "Protocolos familiares",
            "Estructuración internacional",
            "Reuniones trimestrales de planificación",
          ],
        },
      ],
    },
    {
      id: "laboral",
      title: "Área Laboral",
      subtitle: "Gestión eficiente de personal",
      description:
        "Administramos todos los aspectos relacionados con tus empleados, desde la liquidación de sueldos hasta el cumplimiento de obligaciones laborales, minimizando riesgos y optimizando costos.",
      icon: <Users2 className="h-6 w-6" />,
      color: "from-amber-500 to-orange-600",
      image: "/placeholder.svg?height=600&width=800&text=Laboral",
      features: [
        {
          title: "Liquidación de sueldos",
          description: "Calculamos remuneraciones, cargas sociales y presentamos declaraciones juradas mensuales.",
        },
        {
          title: "Gestión de personal",
          description: "Manejamos altas, bajas, modificaciones y asesoramos en normativa laboral vigente.",
        },
        {
          title: "Auditoría laboral",
          description:
            "Revisamos el cumplimiento de obligaciones laborales y previsionales para prevenir contingencias.",
        },
        {
          title: "Contratos de trabajo",
          description: "Redactamos y revisamos contratos adaptados a tus necesidades específicas.",
        },
        {
          title: "Asesoramiento en conflictos",
          description: "Te acompañamos en la resolución de conflictos laborales y negociaciones.",
        },
      ],
      plans: [
        {
          name: "Básico",
          price: "$5.000/empleado",
          description: "Para empresas con pocos empleados",
          features: ["Liquidación de sueldos", "Presentación de DDJJ", "Altas y bajas", "Asesoramiento básico"],
        },
        {
          name: "Estándar",
          price: "$4.000/empleado",
          description: "Para empresas con 5 a 20 empleados",
          recommended: true,
          features: [
            "Todo lo del plan Básico",
            "Gestión de licencias",
            "Control de ausentismo",
            "Informes mensuales",
            "Asesoramiento continuo",
          ],
        },
        {
          name: "Premium",
          price: "$3.500/empleado",
          description: "Para empresas con más de 20 empleados",
          features: [
            "Todo lo del plan Estándar",
            "Auditoría laboral anual",
            "Gestión de beneficios",
            "Indicadores de RRHH",
            "Asesoramiento en conflictos",
            "Reuniones trimestrales",
          ],
        },
      ],
    },
    {
      id: "tramites",
      title: "Trámites",
      subtitle: "Gestiones administrativas eficientes",
      description:
        "Nos encargamos de tus trámites ante organismos públicos y privados, ahorrándote tiempo y evitando complicaciones burocráticas para que puedas enfocarte en tu negocio.",
      icon: <ClipboardList className="h-6 w-6" />,
      color: "from-emerald-500 to-green-600",
      image: "/placeholder.svg?height=600&width=800&text=Trámites",
      features: [
        {
          title: "Inscripciones y habilitaciones",
          description: "Gestionamos trámites ante AFIP, rentas provinciales, municipios y otros organismos.",
        },
        {
          title: "Certificaciones",
          description: "Elaboramos certificaciones contables para diferentes fines comerciales y legales.",
        },
        {
          title: "Representación",
          description: "Te representamos ante organismos fiscales y de control para resolver requerimientos.",
        },
        {
          title: "Gestión de cuentas bancarias",
          description: "Facilitamos la apertura y mantenimiento de cuentas bancarias empresariales.",
        },
        {
          title: "Trámites digitales",
          description: "Gestionamos claves fiscales, firmas digitales y otros servicios electrónicos.",
        },
      ],
      plans: [
        {
          name: "Por trámite",
          price: "Desde $10.000",
          description: "Servicios puntuales según necesidad",
          features: [
            "Presupuesto personalizado",
            "Seguimiento del trámite",
            "Informe de finalización",
            "Asesoramiento específico",
          ],
        },
        {
          name: "Paquete mensual",
          price: "$20.000/mes",
          description: "Para empresas con trámites recurrentes",
          recommended: true,
          features: [
            "Hasta 5 trámites mensuales",
            "Prioridad de atención",
            "Seguimiento continuo",
            "Informes mensuales",
            "Asesoramiento permanente",
          ],
        },
        {
          name: "Outsourcing",
          price: "$40.000/mes",
          description: "Tercerización completa de gestiones administrativas",
          features: [
            "Trámites ilimitados",
            "Gestión documental",
            "Representación permanente",
            "Informes semanales",
            "Ejecutivo de cuenta dedicado",
            "Asesoramiento estratégico",
          ],
        },
      ],
    },
    {
      id: "asesoria",
      title: "Asesoría",
      subtitle: "Consultoría estratégica personalizada",
      description:
        "Brindamos asesoramiento integral para la toma de decisiones estratégicas, ayudándote a identificar oportunidades, resolver problemas complejos y planificar el crecimiento de tu negocio.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-violet-500 to-purple-600",
      image: "/placeholder.svg?height=600&width=800&text=Asesoría",
      features: [
        {
          title: "Consultoría integral",
          description: "Asesoramiento personalizado para la toma de decisiones estratégicas en tu negocio.",
        },
        {
          title: "Diagnóstico empresarial",
          description: "Análisis completo de la situación actual de tu empresa y recomendaciones de mejora.",
        },
        {
          title: "Planificación estratégica",
          description: "Desarrollo de planes de acción para alcanzar tus objetivos empresariales.",
        },
        {
          title: "Optimización de procesos",
          description: "Identificación y mejora de procesos para aumentar la eficiencia y rentabilidad.",
        },
        {
          title: "Acompañamiento continuo",
          description: "Soporte permanente para resolver dudas y consultas del día a día en tu negocio.",
        },
      ],
      plans: [
        {
          name: "Consulta puntual",
          price: "Desde $15.000",
          description: "Para resolver dudas o problemas específicos",
          features: [
            "Reunión de 2 horas",
            "Análisis de la situación",
            "Recomendaciones concretas",
            "Seguimiento posterior",
          ],
        },
        {
          name: "Asesoría mensual",
          price: "$35.000/mes",
          description: "Acompañamiento regular para tu negocio",
          recommended: true,
          features: [
            "Reunión mensual",
            "Consultas ilimitadas por email",
            "Análisis de indicadores",
            "Recomendaciones periódicas",
            "Planificación trimestral",
          ],
        },
        {
          name: "Consultoría estratégica",
          price: "$70.000/mes",
          description: "Para empresas que buscan crecimiento y transformación",
          features: [
            "Reuniones quincenales",
            "Disponibilidad telefónica",
            "Análisis de competencia",
            "Planificación estratégica",
            "Desarrollo de proyectos",
            "Acompañamiento ejecutivo",
          ],
        },
      ],
    },
  ]

  // Obtener la categoría activa
  const activeService = serviceCategories.find((cat) => cat.id === activeCategory) || serviceCategories[0]

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
              Nuestros Servicios
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Soluciones integrales para tu negocio</h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Ofrecemos servicios profesionales adaptados a las necesidades específicas de tu empresa, con un enfoque
              personalizado y cercano para ayudarte a alcanzar tus objetivos.
            </p>
          </motion.div>

          {/* Categorías de servicios */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {serviceCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setActiveCategory(category.id)
                  setActiveTab("overview")
                }}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-300"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center mb-3 ${
                    activeCategory === category.id ? "bg-white/20" : "bg-neutral-100"
                  }`}
                >
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-center">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Detalle del servicio */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
              >
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                  <div className={`h-3 w-full bg-gradient-to-r ${activeService.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-r ${activeService.color} flex items-center justify-center mr-4 text-white`}
                      >
                        {activeService.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-black">{activeService.title}</h2>
                        <p className="text-neutral-600">{activeService.subtitle}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <button
                        onClick={() => setActiveTab("overview")}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeTab === "overview"
                            ? `bg-gradient-to-r ${activeService.color} text-white`
                            : "text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        Descripción general
                      </button>
                      <button
                        onClick={() => setActiveTab("features")}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeTab === "features"
                            ? `bg-gradient-to-r ${activeService.color} text-white`
                            : "text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        Características
                      </button>
                      <button
                        onClick={() => setActiveTab("plans")}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeTab === "plans"
                            ? `bg-gradient-to-r ${activeService.color} text-white`
                            : "text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        Planes y precios
                      </button>
                    </div>

                    <div className="pt-6 border-t border-neutral-200">
                      <Button className="w-full bg-black hover:bg-neutral-800 text-white">
                        <Calendar className="mr-2 h-4 w-4" />
                        Agendar una consulta
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contenido principal */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="rounded-xl overflow-hidden mb-8">
                      <Image
                        src={activeService.image || "/placeholder.svg"}
                        alt={activeService.title}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-4">{activeService.title}</h3>

                    <p className="text-lg text-neutral-700 mb-8">{activeService.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {activeService.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div
                            className={`h-8 w-8 rounded-lg bg-gradient-to-r ${activeService.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}
                          >
                            <Check className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-black mb-1">{feature.title}</h4>
                            <p className="text-sm text-neutral-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => setActiveTab("features")}
                        className={`bg-gradient-to-r ${activeService.color} hover:opacity-90 text-white`}
                      >
                        Ver todas las características
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button onClick={() => setActiveTab("plans")} variant="outline" className="border-neutral-300">
                        Explorar planes y precios
                      </Button>
                    </div>
                  </motion.div>
                )}

                {activeTab === "features" && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    variants={containerVariants}
                  >
                    <h3 className="text-2xl font-bold text-black mb-6">Características de nuestro servicio</h3>

                    <div className="space-y-8 mb-8">
                      {activeService.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors"
                          variants={itemVariants}
                        >
                          <div className="flex items-start">
                            <div
                              className={`h-10 w-10 rounded-lg bg-gradient-to-r ${activeService.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}
                            >
                              <Check className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-black mb-2">{feature.title}</h4>
                              <p className="text-neutral-600">{feature.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <Button onClick={() => setActiveTab("overview")} variant="outline" className="border-neutral-300">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Volver
                      </Button>
                      <Button
                        onClick={() => setActiveTab("plans")}
                        className={`bg-gradient-to-r ${activeService.color} hover:opacity-90 text-white`}
                      >
                        Ver planes y precios
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {activeTab === "plans" && (
                  <motion.div
                    key="plans"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-black mb-6">Planes y precios</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {activeService.plans.map((plan, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`bg-white rounded-xl overflow-hidden ${
                            plan.recommended
                              ? "border-2 border-black shadow-xl relative"
                              : "border border-neutral-200 shadow-sm"
                          }`}
                        >
                          {plan.recommended && (
                            <div className="absolute top-0 right-0 bg-black text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                              Recomendado
                            </div>
                          )}
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-black mb-1">{plan.name}</h4>
                            <div className="flex items-baseline mb-4">
                              <span className="text-2xl font-bold text-black">{plan.price}</span>
                            </div>
                            <p className="text-neutral-600 text-sm mb-6">{plan.description}</p>

                            <ul className="space-y-3 mb-6">
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Check
                                    className={`h-5 w-5 mr-2 flex-shrink-0 ${
                                      plan.recommended ? "text-black" : "text-neutral-700"
                                    }`}
                                  />
                                  <span className="text-neutral-700 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            <Button
                              className={`w-full ${
                                plan.recommended
                                  ? "bg-black hover:bg-neutral-800 text-white"
                                  : "bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-50"
                              }`}
                            >
                              Seleccionar plan
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mb-8">
                      <h4 className="text-lg font-medium text-black mb-2">¿No encuentras lo que necesitas?</h4>
                      <p className="text-neutral-600 mb-4">
                        Ofrecemos planes personalizados adaptados a las necesidades específicas de tu negocio.
                        Contáctanos para una propuesta a medida.
                      </p>
                      <Button variant="outline" className="border-neutral-300">
                        Solicitar plan personalizado
                      </Button>
                    </div>

                    <Button onClick={() => setActiveTab("overview")} variant="outline" className="border-neutral-300">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Volver a la descripción
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
              <p className="text-neutral-300 mb-6">
                Agenda una consulta gratuita con nuestras especialistas y descubre cómo podemos ayudarte a alcanzar tus
                objetivos empresariales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-neutral-200">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar consulta
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Ver testimonios
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-neutral-700 flex items-center justify-center mr-4">
                  <Users2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">+150 clientes satisfechos</h3>
                  <p className="text-neutral-400">Confían en nuestros servicios</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-neutral-700/50 rounded-lg p-4">
                  <p className="text-neutral-300 italic mb-3">
                    "Desde que trabajo con Aura, mi contabilidad dejó de ser un dolor de cabeza. Son claras, eficientes
                    y siempre están cuando las necesito."
                  </p>
                  <p className="text-sm text-neutral-400">María L. — Emprendedora</p>
                </div>

                <div className="bg-neutral-700/50 rounded-lg p-4">
                  <p className="text-neutral-300 italic mb-3">
                    "Lo que más valoro es su capacidad para explicar temas complejos de forma sencilla. Han transformado
                    la manera en que veo los números de mi empresa."
                  </p>
                  <p className="text-sm text-neutral-400">Carlos G. — Pyme Tecnológica</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
