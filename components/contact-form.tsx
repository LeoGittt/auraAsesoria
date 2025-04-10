"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Check } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setFormState("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-900/5 border border-purple-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-100 to-purple-50 rounded-bl-[100px] -z-10"></div>

      {formState === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-full flex flex-col items-center justify-center text-center py-10"
        >
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-purple-900 mb-3">¡Mensaje enviado!</h3>
          <p className="text-purple-700 max-w-md">
            Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-xl font-bold text-purple-900 mb-6">Envíanos un mensaje</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-700 mb-1">
                Nombre completo
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="border-purple-200 focus:border-pink-300 h-12 rounded-xl"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-1">
                Correo electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="border-purple-200 focus:border-pink-300 h-12 rounded-xl"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-purple-700 mb-1">
                Teléfono (opcional)
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 9 XXX XXXXXXX"
                className="border-purple-200 focus:border-pink-300 h-12 rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-purple-700 mb-1">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                className="border-purple-200 focus:border-pink-300 min-h-[150px] rounded-xl"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-12 rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-900/30 transition-all duration-300"
          >
            {formState === "submitting" ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </div>
            ) : (
              <div className="flex items-center">
                Enviar mensaje
                <Send className="ml-2 h-5 w-5" />
              </div>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
