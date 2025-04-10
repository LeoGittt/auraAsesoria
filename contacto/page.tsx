"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
  Calendar,
  MessageCircle,
  Instagram,
  ArrowRight,
  Loader2,
} from "lucide-react"

// Tipos para el formulario
interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactoPage() {
  // Estado del formulario
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [activeTab, setActiveTab] = useState<"form" | "appointment">("form")

  // Refs para animaciones
  const mapRef = useRef(null)
  const mapInView = useInView(mapRef, { once: true, margin: "-100px" })

  // Datos de contacto
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Dirección",
      content: "Rivadavia 10190 oeste Capital, San Juan, Argentina",
      link: "https://maps.google.com/?q=Rivadavia+10190+oeste+Capital+San+Juan+Argentina",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Teléfono",
      content: "+54 264 583-4384",
      link: "tel:+5492645834384",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "aura.asesoriacontable@gmail.com",
      link: "mailto:aura.asesoriacontable@gmail.com",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horario de atención",
      content: "Lunes a Viernes: 9:00 - 18:00",
      link: null,
    },
  ]

  // Datos de redes sociales
  const socialMedia = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      handle: "@aura.asesoriacontable",
      link: "https://instagram.com/aura.asesoriacontable",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      name: "WhatsApp",
      handle: "+54 264 583-4384",
      link: "https://wa.me/5492645834384",
    },
  ]

  // Datos de preguntas frecuentes
  const faqs = [
    {
      question: "¿Cómo puedo agendar una consulta?",
      answer:
        "Puedes agendar una consulta gratuita a través de nuestro formulario de contacto, llamándonos directamente o enviándonos un mensaje por WhatsApp. Te responderemos a la brevedad para coordinar día y horario.",
    },
    {
      question: "¿Trabajan de forma remota?",
      answer:
        "Sí, ofrecemos servicios tanto presenciales como remotos. Utilizamos herramientas digitales seguras para mantener una comunicación fluida y efectiva con nuestros clientes, independientemente de su ubicación.",
    },
    {
      question: "¿Cuánto tiempo toma recibir una respuesta?",
      answer:
        "Nos comprometemos a responder todas las consultas en un plazo máximo de 24 horas hábiles. Para consultas urgentes, recomendamos contactarnos por teléfono o WhatsApp.",
    },
  ]

  // Manejadores de formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulación de envío de formulario
    setTimeout(() => {
      setFormStatus("success")

      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

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
              Contacto
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Estamos aquí para ayudarte</h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Ponte en contacto con nuestro equipo para resolver tus dudas o agendar una consulta personalizada. Estamos
              comprometidas con tu éxito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección principal de contacto */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Información de contacto */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
              >
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm mb-8">
                  <div className="h-3 w-full bg-black"></div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-black mb-6">Información de contacto</h2>

                    <div className="space-y-6 mb-8">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center mr-4 flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-black mb-1">{item.title}</h3>
                            {item.link ? (
                              <a
                                href={item.link}
                                target={item.link.startsWith("http") ? "_blank" : undefined}
                                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-neutral-600 hover:text-black transition-colors"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-neutral-600">{item.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-neutral-200">
                      <h3 className="font-medium text-black mb-4">Síguenos en redes sociales</h3>
                      <div className="flex space-x-4">
                        {socialMedia.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
                          >
                            {item.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">¿Prefieres que te llamemos?</h3>
                  <p className="text-white/70 mb-4">
                    Déjanos tu número y te contactaremos a la brevedad para resolver tus dudas.
                  </p>
                  <Button className="w-full bg-white text-black hover:bg-neutral-200">
                    <Phone className="mr-2 h-4 w-4" />
                    Solicitar llamada
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Formulario de contacto */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm mb-8">
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setActiveTab("form")}
                    className={`flex-1 py-4 text-center font-medium ${
                      activeTab === "form"
                        ? "text-black border-b-2 border-black"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    Enviar mensaje
                  </button>
                  <button
                    onClick={() => setActiveTab("appointment")}
                    className={`flex-1 py-4 text-center font-medium ${
                      activeTab === "appointment"
                        ? "text-black border-b-2 border-black"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    Agendar consulta
                  </button>
                </div>

                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {activeTab === "form" && (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {formStatus === "success" ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                          >
                            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                              <Check className="h-10 w-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-2">¡Mensaje enviado!</h3>
                            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                              Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
                            </p>
                          </motion.div>
                        ) : (
                          <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div>
                                <Label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                                  Nombre completo
                                </Label>
                                <Input
                                  id="name"
                                  name="name"
                                  value={formState.name}
                                  onChange={handleInputChange}
                                  placeholder="Tu nombre"
                                  className="border-neutral-300 focus:border-black h-10 rounded-md"
                                  required
                                />
                              </div>

                              <div>
                                <Label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                                  Correo electrónico
                                </Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={formState.email}
                                  onChange={handleInputChange}
                                  placeholder="tu@email.com"
                                  className="border-neutral-300 focus:border-black h-10 rounded-md"
                                  required
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div>
                                <Label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                                  Teléfono (opcional)
                                </Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  value={formState.phone}
                                  onChange={handleInputChange}
                                  placeholder="+54 9 XXX XXXXXXX"
                                  className="border-neutral-300 focus:border-black h-10 rounded-md"
                                />
                              </div>

                              <div>
                                <Label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                                  Asunto
                                </Label>
                                <Input
                                  id="subject"
                                  name="subject"
                                  value={formState.subject}
                                  onChange={handleInputChange}
                                  placeholder="Asunto de tu mensaje"
                                  className="border-neutral-300 focus:border-black h-10 rounded-md"
                                  required
                                />
                              </div>
                            </div>

                            <div className="mb-6">
                              <Label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                                Mensaje
                              </Label>
                              <Textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleInputChange}
                                placeholder="¿En qué podemos ayudarte?"
                                className="border-neutral-300 focus:border-black min-h-[150px] rounded-md"
                                required
                              />
                            </div>

                            <Button
                              type="submit"
                              disabled={formStatus === "submitting"}
                              className="w-full bg-black hover:bg-neutral-800 text-white"
                            >
                              {formStatus === "submitting" ? (
                                <div className="flex items-center">
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Enviando...
                                </div>
                              ) : (
                                <div className="flex items-center">
                                  Enviar mensaje
                                  <Send className="ml-2 h-4 w-4" />
                                </div>
                              )}
                            </Button>
                          </form>
                        )}
                      </motion.div>
                    )}

                    {activeTab === "appointment" && (
                      <motion.div
                        key="appointment"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center mb-8">
                          <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                            <Calendar className="h-8 w-8 text-neutral-700" />
                          </div>
                          <h3 className="text-xl font-bold text-black mb-2">Agenda una consulta gratuita</h3>
                          <p className="text-neutral-600 max-w-md mx-auto">
                            Selecciona el día y horario que prefieras para que nuestro equipo te contacte.
                          </p>
                        </div>

                        <div className="mb-8">
                          <h4 className="font-medium text-black mb-4">Selecciona una fecha</h4>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                            {Array.from({ length: 5 }).map((_, index) => {
                              const date = new Date()
                              date.setDate(date.getDate() + index + 1)
                              const day = date.getDate()
                              const month = date.toLocaleString("es-ES", { month: "short" })

                              return (
                                <button
                                  key={index}
                                  className="p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 text-center transition-colors"
                                >
                                  <div className="text-sm font-medium text-neutral-800">
                                    {day} {month}
                                  </div>
                                  <div className="text-xs text-neutral-500">
                                    {date.toLocaleString("es-ES", { weekday: "short" })}
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="font-medium text-black mb-4">Selecciona un horario</h4>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"].map(
                              (time, index) => (
                                <button
                                  key={index}
                                  className="p-3 rounded-lg border border-neutral-200 hover:border-neutral-300 text-center transition-colors"
                                >
                                  <div className="text-sm font-medium text-neutral-800">{time}</div>
                                </button>
                              ),
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <Label
                              htmlFor="appointment-name"
                              className="block text-sm font-medium text-neutral-700 mb-1"
                            >
                              Nombre completo
                            </Label>
                            <Input
                              id="appointment-name"
                              placeholder="Tu nombre"
                              className="border-neutral-300 focus:border-black h-10 rounded-md"
                              required
                            />
                          </div>

                          <div>
                            <Label
                              htmlFor="appointment-email"
                              className="block text-sm font-medium text-neutral-700 mb-1"
                            >
                              Correo electrónico
                            </Label>
                            <Input
                              id="appointment-email"
                              type="email"
                              placeholder="tu@email.com"
                              className="border-neutral-300 focus:border-black h-10 rounded-md"
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <Label
                            htmlFor="appointment-phone"
                            className="block text-sm font-medium text-neutral-700 mb-1"
                          >
                            Teléfono
                          </Label>
                          <Input
                            id="appointment-phone"
                            placeholder="+54 9 XXX XXXXXXX"
                            className="border-neutral-300 focus:border-black h-10 rounded-md"
                            required
                          />
                        </div>

                        <div className="mb-6">
                          <Label
                            htmlFor="appointment-notes"
                            className="block text-sm font-medium text-neutral-700 mb-1"
                          >
                            Notas adicionales (opcional)
                          </Label>
                          <Textarea
                            id="appointment-notes"
                            placeholder="Cuéntanos brevemente sobre tu consulta"
                            className="border-neutral-300 focus:border-black min-h-[100px] rounded-md"
                          />
                        </div>

                        <Button className="w-full bg-black hover:bg-neutral-800 text-white">
                          <Calendar className="mr-2 h-4 w-4" />
                          Confirmar consulta
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-6">Preguntas frecuentes</h3>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-neutral-200 pb-6 last:border-0 last:pb-0">
                      <h4 className="font-medium text-black mb-2">{faq.question}</h4>
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section ref={mapRef} className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-4">Encuéntranos</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Visítanos en nuestra oficina para una atención personalizada
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.8881659189366!2d-68.5894!3d-31.5363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMyJzEwLjciUyA2OMKwMzUnMjEuOSJX!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Aura Asesoría Contable"
            ></iframe>

            <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <h3 className="font-bold text-black mb-1">Aura Asesoría Contable</h3>
              <p className="text-sm text-neutral-600 mb-2">Rivadavia 10190 oeste Capital, San Juan, Argentina</p>
              <a
                href="https://maps.google.com/?q=Rivadavia+10190+oeste+Capital+San+Juan+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black hover:underline flex items-center"
              >
                Ver indicaciones
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">¿Prefieres una respuesta inmediata?</h2>
              <p className="text-white/70 mb-6">
                Contáctanos por WhatsApp y recibe atención personalizada al instante. Estamos listas para resolver tus
                dudas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5492645834384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#25D366] text-white hover:bg-[#20BD5C] h-10 px-4 py-2"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chatear por WhatsApp
                </a>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar ahora
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-6">Horario de atención</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/80">Lunes a Viernes</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/80">Sábados</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Domingos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">
                      Fuera de horario, déjanos un mensaje y te responderemos a la brevedad.
                    </p>
                  </div>
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
