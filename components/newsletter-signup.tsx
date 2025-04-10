"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Check } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"
import { TextReveal } from "@/components/text-reveal"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1500)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-900/5 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200/30 to-purple-200/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <RevealAnimation>
              <div className="text-center mb-8">
                <div className="inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-600 mb-4">
                  Newsletter
                </div>
                <TextReveal>
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4 tracking-tight">
                    Mantente actualizado
                  </h2>
                </TextReveal>
                <p className="text-purple-700 max-w-lg mx-auto">
                  Suscríbete a nuestro newsletter y recibe las últimas novedades fiscales, contables y financieras
                  directamente en tu correo.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status !== "idle"}
                    className="h-12 border-purple-200 focus:border-pink-300 rounded-xl"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status !== "idle"}
                  className="h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300"
                >
                  {status === "idle" && (
                    <span className="flex items-center">
                      Suscribirme <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                  {status === "submitting" && (
                    <span className="flex items-center">
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
                    </span>
                  )}
                  {status === "success" && (
                    <span className="flex items-center">
                      <Check className="mr-2 h-4 w-4" /> ¡Suscrito!
                    </span>
                  )}
                </Button>
              </form>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-center text-purple-600/60 text-sm mt-4">
                No enviamos spam. Puedes darte de baja en cualquier momento.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
