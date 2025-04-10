"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassMorphism } from "@/components/glass-morphism"

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "¡Hola! Soy Aura, tu asistente virtual. ¿En qué puedo ayudarte hoy?", isUser: false },
  ])
  const [inputValue, setInputValue] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { text: inputValue, isUser: true }])
    setInputValue("")

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Gracias por tu mensaje. Una de nuestras contadoras se pondrá en contacto contigo a la brevedad.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-purple-900/20 flex items-center justify-center hover:shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 h-96"
          >
            <GlassMorphism className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-purple-100">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center mr-2">
                    <span className="font-bold text-white text-xs">A</span>
                  </div>
                  <h3 className="font-medium text-purple-900">Aura Asistente</h3>
                </div>
                <button onClick={toggleChat} className="text-purple-500 hover:text-purple-700">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isUser
                          ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                          : "bg-purple-100 text-purple-900"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-100 flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 border-purple-200 focus:border-pink-300 rounded-full"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </GlassMorphism>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
