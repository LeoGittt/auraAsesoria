"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolling down, show when scrolling up
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const phoneNumber = "5492645834384" // Replace with your actual WhatsApp number

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50"
          >
            <button
              onClick={togglePopup}
              className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="h-7 w-7 fill-current" />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute bottom-16 right-0 w-72 bg-white rounded-lg shadow-xl border border-neutral-200 overflow-hidden"
                >
                  <div className="bg-[#25D366] text-white p-4 flex justify-between items-center">
                    <h3 className="font-medium">WhatsApp</h3>
                    <button onClick={togglePopup} className="text-white">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-neutral-700 mb-4">
                      Chatea directamente con nuestro equipo para resolver tus dudas al instante.
                    </p>
                    <a
                      href={`https://wa.me/${phoneNumber}?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20servicios.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#25D366] hover:bg-[#20BD5C] text-white font-medium py-2 px-4 rounded text-center transition-colors"
                    >
                      Iniciar conversación
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
