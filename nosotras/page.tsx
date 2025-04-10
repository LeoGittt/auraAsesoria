"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Mail,
  Instagram,
  MessageCircle,
  Quote,
  ChevronLeft,
  Check,
  Star,
  Award,
  BookOpen,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"

// Tipos para el equipo
interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  longBio: string
  specialties: string[]
  experience: string
  education: string[]
  certifications: string[]
  achievements: string[]
  imageSrc: string
  instagram?: string
  email?: string
  whatsapp?: string
  testimonials: {
    quote: string
    author: string
    company: string
  }[]
}

export default function NosotrasPage() {
  const [activeTeamMember, setActiveTeamMember] = useState<string | null>(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  // Refs para animaciones
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })

  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" })

  // Datos del equipo
  const teamMembers: TeamMember[] = [
    {
      id: "cintia",
      name: "CPN Cintia Martínez",
      role: "Especialista en Impuestos",
      bio: "Con más de 10 años de experiencia en asesoría fiscal para PyMEs y emprendedores. Experta en optimización tributaria y planificación fiscal estratégica.",
      longBio:
        "Cintia es una apasionada de los números y la planificación fiscal. Comenzó su carrera en una importante firma internacional, donde adquirió una sólida formación en impuestos corporativos. Hace 8 años decidió enfocarse en ayudar a emprendedores y PyMEs a optimizar su carga tributaria y cumplir con sus obligaciones fiscales de manera eficiente. Su enfoque práctico y su capacidad para explicar temas complejos de forma sencilla la han convertido en una asesora muy valorada por sus clientes. Cuando no está analizando normativas fiscales, disfruta del senderismo y la fotografía.",
      specialties: ["Monotributo", "IVA", "Ganancias", "Bienes Personales", "Planificación Fiscal"],
      experience: "10+ años",
      education: [
        "Contador Público Nacional - Universidad Nacional de San Juan",
        "Posgrado en Impuestos - Universidad de Buenos Aires",
        "Especialización en Tributación Internacional - UADE",
      ],
      certifications: [
        "Especialista en Tributación - Consejo Profesional de Ciencias Económicas",
        "Asesora Fiscal Certificada - AFIP",
        "Diplomado en Planificación Fiscal - IAEF",
      ],
      achievements: [
        "Reconocimiento a la Excelencia Profesional 2021 - Consejo Profesional de Ciencias Económicas",
        "Disertante en el Congreso Nacional de Impuestos 2022",
        "Autora de artículos especializados en revistas del sector",
      ],
      imageSrc: "/placeholder.svg?height=500&width=400",
      instagram: "https://instagram.com/cintiamartinez",
      email: "cintia@auraasesoria.com",
      whatsapp: "5492645834384",
      testimonials: [
        {
          quote:
            "Cintia transformó completamente la gestión fiscal de mi empresa. Gracias a sus estrategias, redujimos significativamente nuestra carga impositiva de manera legal y segura.",
          author: "Martín Rodríguez",
          company: "Director de Tecnova SRL",
        },
        {
          quote:
            "Su capacidad para explicar temas fiscales complejos de forma clara y sencilla es extraordinaria. Me ha ayudado a entender y tomar mejores decisiones para mi negocio.",
          author: "Laura Méndez",
          company: "Emprendedora",
        },
      ],
    },
    {
      id: "laila",
      name: "CPN Laila Barud",
      role: "Especialista en Sociedades",
      bio: "Especializada en derecho societario y estructuración de negocios. Asesora a emprendedores en la elección de la mejor forma jurídica para sus proyectos.",
      longBio:
        "Laila combina su formación contable con una sólida especialización en derecho societario, lo que le permite ofrecer un enfoque integral en la estructuración de negocios. Tras trabajar en el departamento legal de una importante empresa multinacional, decidió dedicarse a asesorar a emprendedores y empresas en crecimiento. Su experiencia le permite guiar a sus clientes en la elección de la estructura societaria más adecuada para sus objetivos, así como en procesos de reorganización y expansión. Laila es conocida por su meticulosidad y su capacidad para anticipar posibles contingencias legales y fiscales. En su tiempo libre, es una ávida lectora y practica yoga.",
      specialties: ["Constitución de Sociedades", "SAS", "Reorganizaciones", "Due Diligence", "Protocolos Familiares"],
      experience: "8+ años",
      education: [
        "Contador Público Nacional - Universidad Católica de Cuyo",
        "Maestría en Derecho Empresarial - Universidad Austral",
        "Especialización en Gobierno Corporativo - IAE Business School",
      ],
      certifications: [
        "Especialista en Sociedades Comerciales - Universidad de Buenos Aires",
        "Diplomado en Gobierno Corporativo - UCEMA",
        "Certificación en Compliance Corporativo - IAEF",
      ],
      achievements: [
        "Premio a la Innovación Jurídica 2020 - Colegio de Abogados",
        "Coautora del libro 'Sociedades Simplificadas: Guía Práctica'",
        "Mentora en programa de aceleración de startups",
      ],
      imageSrc: "/placeholder.svg?height=500&width=400",
      instagram: "https://instagram.com/lailabarud",
      email: "laila@auraasesoria.com",
      whatsapp: "5492645834385",
      testimonials: [
        {
          quote:
            "Laila nos guió en todo el proceso de transformación societaria con profesionalismo y claridad. Su asesoramiento fue clave para el crecimiento de nuestra empresa.",
          author: "Carlos Fernández",
          company: "CEO de Innova Construcciones",
        },
        {
          quote:
            "Su conocimiento en estructuración de negocios es excepcional. Nos ayudó a diseñar una estructura societaria que optimizó nuestra operación y redujo riesgos.",
          author: "Sofía Peralta",
          company: "Fundadora de EcoSolutions",
        },
      ],
    },
    {
      id: "laura",
      name: "Lic. Laura Más",
      role: "Gestión y Planificación",
      bio: "Licenciada en Administración con especialización en gestión financiera. Ayuda a las empresas a optimizar sus procesos administrativos y financieros.",
      longBio:
        "Laura es especialista en transformar la gestión financiera de las empresas, implementando procesos eficientes y sistemas de control que permiten una mejor toma de decisiones. Su formación en administración, complementada con estudios en finanzas corporativas, le otorga una visión integral del funcionamiento empresarial. Antes de unirse a Aura, trabajó como consultora financiera para diversas industrias, lo que le ha dado un amplio conocimiento de diferentes modelos de negocio. Laura se destaca por su enfoque práctico y orientado a resultados, ayudando a sus clientes a establecer indicadores clave y sistemas de gestión que impulsan el crecimiento. Es una entusiasta de la tecnología aplicada a la gestión empresarial y disfruta de la cocina en su tiempo libre.",
      specialties: ["Finanzas", "Presupuestos", "Análisis de Costos", "Proyecciones", "Tableros de Control"],
      experience: "7+ años",
      education: [
        "Licenciatura en Administración - Universidad Nacional de San Juan",
        "Especialización en Finanzas Corporativas - UADE",
        "Programa de Dirección Financiera - IAE Business School",
      ],
      certifications: [
        "Financial Modeling & Valuation Analyst (FMVA) - Corporate Finance Institute",
        "Project Management Professional (PMP) - PMI",
        "Certified Business Intelligence Professional - CBIP",
      ],
      achievements: [
        "Reconocimiento a la Innovación en Gestión Financiera 2022",
        "Desarrollo de metodología de presupuestación para PyMEs",
        "Disertante en foros de emprendedores sobre gestión financiera",
      ],
      imageSrc: "/placeholder.svg?height=500&width=400",
      instagram: "https://instagram.com/lauramas",
      email: "laura@auraasesoria.com",
      whatsapp: "5492645834386",
      testimonials: [
        {
          quote:
            "Laura implementó un sistema de gestión financiera que nos permitió tener claridad sobre nuestros números y tomar mejores decisiones. Su trabajo ha sido fundamental para nuestro crecimiento.",
          author: "Javier Morales",
          company: "Gerente de Operaciones en TechSolutions",
        },
        {
          quote:
            "Su enfoque práctico y orientado a resultados transformó nuestra manera de gestionar las finanzas. Ahora tenemos indicadores claros y procesos eficientes.",
          author: "Ana García",
          company: "Directora de Administración en Grupo Comercial",
        },
      ],
    },
    {
      id: "valeria",
      name: "CPN Valeria Regalado",
      role: "Área Laboral y Previsional",
      bio: "Experta en legislación laboral y gestión de recursos humanos. Asesora a empresas en el cumplimiento de obligaciones laborales y optimización de costos.",
      longBio:
        "Valeria es una referente en materia laboral y previsional, con amplia experiencia en la gestión de recursos humanos desde la perspectiva legal y contable. Inició su carrera en el área de recursos humanos de una importante empresa nacional, donde adquirió conocimientos prácticos sobre la gestión de personal. Posteriormente, se especializó en aspectos legales y previsionales, convirtiéndose en asesora de numerosas empresas en temas de contratación, liquidación de sueldos y cumplimiento normativo. Su enfoque preventivo y su actualización constante en materia de legislación laboral le permiten anticiparse a cambios normativos y minimizar riesgos para sus clientes. Valeria es una apasionada del desarrollo profesional y participa activamente en programas de mentoría para jóvenes contadores.",
      specialties: [
        "Liquidación de Sueldos",
        "Contratos",
        "Cargas Sociales",
        "Conflictos Laborales",
        "Auditoría Laboral",
      ],
      experience: "9+ años",
      education: [
        "Contador Público Nacional - Universidad Nacional de San Juan",
        "Especialización en Derecho Laboral - UCA",
        "Posgrado en Gestión de Recursos Humanos - ITBA",
      ],
      certifications: [
        "Especialista en Legislación Laboral - Ministerio de Trabajo",
        "Diplomado en Gestión de Recursos Humanos - ITBA",
        "Certificación en Relaciones Laborales - ADRHA",
      ],
      achievements: [
        "Reconocimiento a la Excelencia Profesional 2023 - Asociación de Especialistas Laborales",
        "Desarrollo de programa de auditoría laboral preventiva",
        "Disertante en congresos sobre actualización en normativa laboral",
      ],
      imageSrc: "/placeholder.svg?height=500&width=400",
      instagram: "https://instagram.com/valeriaregalado",
      email: "valeria@auraasesoria.com",
      whatsapp: "5492645834387",
      testimonials: [
        {
          quote:
            "Valeria nos ha ayudado a navegar por los complejos cambios en la legislación laboral con claridad y seguridad. Su asesoramiento nos ha evitado numerosos problemas potenciales.",
          author: "Ricardo Sánchez",
          company: "Director de RRHH en Manufacturas del Sur",
        },
        {
          quote:
            "Su conocimiento en materia laboral es excepcional. Ha optimizado nuestros procesos de liquidación y nos mantiene siempre actualizados sobre cambios normativos.",
          author: "Marcela Torres",
          company: "Gerente Administrativa en Comercial Andina",
        },
      ],
    },
  ]

  // Valores de la empresa
  const companyValues = [
    {
      title: "Profesionalismo",
      description:
        "Aplicamos nuestro conocimiento técnico con rigor y excelencia, manteniéndonos actualizadas para ofrecer el mejor servicio.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Cercanía",
      description:
        "Construimos relaciones basadas en la confianza y la empatía, entendiendo las necesidades específicas de cada cliente.",
      icon: <MessageCircle className="h-6 w-6" />,
    },
    {
      title: "Claridad",
      description:
        "Comunicamos de manera simple y comprensible, transformando lo complejo en accesible para nuestros clientes.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Compromiso",
      description:
        "Nos involucramos con los objetivos de nuestros clientes, acompañándolos en cada etapa de su desarrollo empresarial.",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  // Historia de la empresa
  const companyHistory = [
    {
      year: "2015",
      title: "Fundación",
      description: "Cintia y Laila fundan Aura con la visión de transformar la asesoría contable tradicional.",
    },
    {
      year: "2017",
      title: "Crecimiento",
      description: "Se incorpora Laura al equipo, ampliando los servicios hacia la gestión financiera integral.",
    },
    {
      year: "2019",
      title: "Expansión",
      description: "Valeria se une al equipo, completando la oferta con servicios especializados en el área laboral.",
    },
    {
      year: "2021",
      title: "Consolidación",
      description: "Aura se posiciona como referente en asesoría contable para emprendedores y PyMEs en la región.",
    },
    {
      year: "2023",
      title: "Innovación",
      description: "Implementación de nuevas tecnologías y metodologías para mejorar la experiencia del cliente.",
    },
  ]

  // Obtener el miembro del equipo activo
  const activeMember = activeTeamMember ? teamMembers.find((member) => member.id === activeTeamMember) : null

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
              Nuestro Equipo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Conoce a las profesionales detrás de Aura
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Somos un equipo multidisciplinario de expertas comprometidas con el éxito de tu negocio. Combinamos
              profesionalismo con un enfoque humano y cercano.
            </p>
          </motion.div>

          {/* Equipo destacado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveTeamMember(member.id)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
                  <Image
                    src={member.imageSrc || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                    <div className="flex mt-3 space-x-2">
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram className="h-4 w-4 text-white" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail className="h-4 w-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-black">{member.name}</h3>
                <p className="text-neutral-600 mb-2">{member.role}</p>
                <div className="flex items-center text-sm text-neutral-500">
                  <span className="bg-neutral-100 px-2 py-0.5 rounded-full">{member.experience}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores de la empresa */}
      <section ref={valuesRef} className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
              Nuestros Valores
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Los principios que nos guían</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Estos valores definen nuestra forma de trabajar y la relación que construimos con cada cliente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia de la empresa */}
      <section ref={timelineRef} className="py-16 bg-neutral-50">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
              Nuestra Historia
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">El camino que hemos recorrido</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Desde nuestros inicios hasta hoy, construyendo una trayectoria de excelencia y compromiso
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Línea de tiempo */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -translate-x-1/2"></div>

            {/* Eventos */}
            {companyHistory.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                    <div className="text-sm font-medium text-neutral-500 mb-1">{event.year}</div>
                    <h3 className="text-lg font-bold text-black mb-2">{event.title}</h3>
                    <p className="text-neutral-600">{event.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-black flex items-center justify-center text-xs font-bold">
                  {event.year.substring(2)}
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-black text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white/80 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
              Testimonios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Experiencias reales de quienes confían en nuestro equipo para el éxito de sus negocios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((index) => {
              // Combinar testimonios de diferentes miembros del equipo
              const testimonial = teamMembers[index % teamMembers.length].testimonials[index % 2]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <Quote className="h-8 w-8 text-white/40 mb-4" />
                  <p className="text-white/90 italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-neutral-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4">¿Listo para trabajar con nosotras?</h2>
                <p className="text-white/70 mb-8">
                  Agenda una consulta gratuita y descubre cómo nuestro equipo puede ayudarte a transformar la gestión de
                  tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-black hover:bg-neutral-200">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar consulta
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Conocer más servicios
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-800 p-12 flex items-center"
              >
                <div>
                  <div className="flex items-center mb-6">
                    <div className="flex -space-x-4">
                      {teamMembers.map((member, index) => (
                        <div key={index} className="h-12 w-12 rounded-full border-2 border-neutral-800 overflow-hidden">
                          <Image
                            src={member.imageSrc || "/placeholder.svg"}
                            alt={member.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">Equipo Aura</p>
                      <p className="text-white/60 text-sm">A tu servicio</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">Profesionales con más de 8 años de experiencia</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">Enfoque personalizado para cada cliente</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">Actualización constante en normativas y tendencias</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-white/60 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">Comunicación clara y accesible</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de detalle del miembro del equipo */}
      <AnimatePresence>
        {activeTeamMember && activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveTeamMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={activeMember.imageSrc || "/placeholder.svg"}
                    alt={activeMember.name}
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setActiveTeamMember(null)}
                    className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-8 overflow-y-auto">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black mb-1">{activeMember.name}</h2>
                    <p className="text-neutral-600 mb-4">{activeMember.role}</p>
                    <div className="flex space-x-3 mb-6">
                      {activeMember.instagram && (
                        <a
                          href={activeMember.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                        >
                          <Instagram className="h-5 w-5 text-neutral-700" />
                        </a>
                      )}
                      {activeMember.email && (
                        <a
                          href={`mailto:${activeMember.email}`}
                          className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                        >
                          <Mail className="h-5 w-5 text-neutral-700" />
                        </a>
                      )}
                      {activeMember.whatsapp && (
                        <a
                          href={`https://wa.me/${activeMember.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5 text-neutral-700" />
                        </a>
                      )}
                    </div>

                    <p className="text-neutral-700 mb-6">{activeMember.longBio}</p>

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-black mb-3">Especialidades</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeMember.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-flex px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-black mb-3">Formación</h3>
                      <ul className="space-y-2">
                        {activeMember.education.map((edu, index) => (
                          <li key={index} className="flex items-start">
                            <GraduationCap className="h-5 w-5 text-neutral-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-black mb-3">Certificaciones</h3>
                      <ul className="space-y-2">
                        {activeMember.certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <Award className="h-5 w-5 text-neutral-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-black mb-3">Logros</h3>
                      <ul className="space-y-2">
                        {activeMember.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Star className="h-5 w-5 text-neutral-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-black mb-3">Testimonios</h3>
                      <div className="space-y-4">
                        {activeMember.testimonials.map((testimonial, index) => (
                          <div key={index} className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                            <p className="text-neutral-700 italic mb-3">{testimonial.quote}</p>
                            <p className="text-sm font-medium text-black">{testimonial.author}</p>
                            <p className="text-sm text-neutral-500">{testimonial.company}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
