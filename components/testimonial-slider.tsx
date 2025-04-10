"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  author: string
  company: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Desde que trabajo con Aura, mi contabilidad dejó de ser un dolor de cabeza. Son claras, eficientes y siempre están cuando las necesito.",
    author: "María L.",
    company: "Emprendedora",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "Lo que más valoro es su capacidad para explicar temas complejos de forma sencilla. Han transformado la manera en que veo los números de mi empresa.",
    author: "Carlos G.",
    company: "Pyme Tecnológica",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "Un equipo profesional con un toque humano que marca la diferencia. Recomiendo Aura a todos los emprendedores que conozco.",
    author: "Laura S.",
    company: "Comercio Minorista",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    quote:
      "Encontrar un equipo contable que realmente entienda mi negocio parecía imposible hasta que conocí a Aura. Su enfoque personalizado es exactamente lo que necesitaba.",
    author: "Javier M.",
    company: "Estudio de Diseño",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    quote:
      "La tranquilidad que me da saber que mi contabilidad está en manos de profesionales que se preocupan por mi negocio no tiene precio. Gracias Aura por su dedicación.",
    author: "Sofía R.",
    company: "Consultora Independiente",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative bg-white rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-100 overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-100 to-purple-50 rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-100 to-purple-50 rounded-tr-[100px] -z-10"></div>

      <div className="relative h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 p-10 flex flex-col justify-center"
          >
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-16 w-16 text-pink-300 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-purple-800 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center justify-center">
                {testimonials[currentIndex].image && (
                  <div className="h-16 w-16 rounded-full overflow-hidden border-4 border-purple-100 mr-4">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="text-left">
                  <p className="font-bold text-purple-900 text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-purple-700">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-pink-500" : "w-2 bg-purple-200 hover:bg-purple-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-purple-900 shadow-lg hover:bg-white transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-purple-900 shadow-lg hover:bg-white transition-all duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
