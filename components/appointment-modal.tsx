"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const closeModal = () => {
    document.getElementById("appointment-modal")?.classList.add("hidden")
    setStep(1)
    setSelectedDate(null)
    setSelectedTime(null)
    setFormState("idle")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  // Generate available dates (next 7 days)
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return date.toISOString().split("T")[0]
  })

  // Generate available time slots
  const availableTimes = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00"]

  return (
    <div
      id="appointment-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
      >
        <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Agenda una consulta gratuita</h2>
          <button onClick={closeModal} className="text-white hover:text-white/80">
            <X className="h-5 w-5" />
          </button>
        </div>

        {formState === "success" ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">¡Cita agendada con éxito!</h3>
            <p className="text-purple-700 mb-6">
              Te hemos enviado un correo con los detalles de tu cita para el día {selectedDate} a las {selectedTime}.
            </p>
            <Button onClick={closeModal} className="bg-purple-600 hover:bg-purple-700">
              Cerrar
            </Button>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex mb-6">
              <div className={`flex-1 text-center ${step >= 1 ? "text-purple-600" : "text-gray-400"}`}>
                <div
                  className={`h-8 w-8 rounded-full ${step >= 1 ? "bg-purple-100" : "bg-gray-100"} flex items-center justify-center mx-auto mb-1`}
                >
                  <Calendar className="h-4 w-4" />
                </div>
                <span className="text-xs">Fecha</span>
              </div>
              <div className={`flex-1 text-center ${step >= 2 ? "text-purple-600" : "text-gray-400"}`}>
                <div
                  className={`h-8 w-8 rounded-full ${step >= 2 ? "bg-purple-100" : "bg-gray-100"} flex items-center justify-center mx-auto mb-1`}
                >
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-xs">Hora</span>
              </div>
              <div className={`flex-1 text-center ${step >= 3 ? "text-purple-600" : "text-gray-400"}`}>
                <div
                  className={`h-8 w-8 rounded-full ${step >= 3 ? "bg-purple-100" : "bg-gray-100"} flex items-center justify-center mx-auto mb-1`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-xs">Datos</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h3 className="font-medium text-purple-900 mb-4">Selecciona una fecha</h3>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {availableDates.map((date) => {
                      const d = new Date(date)
                      const formattedDate = d.toLocaleDateString("es-ES", { day: "numeric", month: "short" })
                      return (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            selectedDate === date
                              ? "border-purple-500 bg-purple-50 text-purple-700"
                              : "border-gray-200 hover:border-purple-200"
                          }`}
                        >
                          <div className="text-sm font-medium">{formattedDate}</div>
                        </button>
                      )
                    })}
                  </div>
                  <Button
                    onClick={() => selectedDate && setStep(2)}
                    disabled={!selectedDate}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Continuar
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h3 className="font-medium text-purple-900 mb-4">Selecciona un horario</h3>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedTime === time
                            ? "border-purple-500 bg-purple-50 text-purple-700"
                            : "border-gray-200 hover:border-purple-200"
                        }`}
                      >
                        <div className="text-sm font-medium">{time}</div>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                      Atrás
                    </Button>
                    <Button
                      onClick={() => selectedTime && setStep(3)}
                      disabled={!selectedTime}
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                    >
                      Continuar
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h3 className="font-medium text-purple-900 mb-4">Completa tus datos</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input placeholder="Nombre completo" required className="border-purple-200" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Correo electrónico" required className="border-purple-200" />
                    </div>
                    <div>
                      <Input placeholder="Teléfono" required className="border-purple-200" />
                    </div>
                    <div>
                      <Textarea placeholder="¿En qué podemos ayudarte?" className="border-purple-200 min-h-[100px]" />
                    </div>
                    <div className="flex gap-2">
                      <Button type="button" onClick={() => setStep(2)} variant="outline" className="flex-1">
                        Atrás
                      </Button>
                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="flex-1 bg-purple-600 hover:bg-purple-700"
                      >
                        {formState === "submitting" ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </div>
                        ) : (
                          "Confirmar cita"
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </div>
  )
}
