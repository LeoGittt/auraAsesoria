"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealAnimation } from "@/components/reveal-animation"
import { TextReveal } from "@/components/text-reveal"

export function FeaturedBlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Cambios en el régimen de monotributo 2023",
      excerpt: "Todo lo que necesitas saber sobre las nuevas categorías y límites del monotributo.",
      image: "/placeholder.svg?height=200&width=400",
      date: "15 Jun 2023",
      category: "Impuestos",
    },
    {
      id: 2,
      title: "Cómo optimizar la gestión financiera de tu PyME",
      excerpt: "Estrategias prácticas para mejorar el flujo de caja y la rentabilidad de tu negocio.",
      image: "/placeholder.svg?height=200&width=400",
      date: "28 May 2023",
      category: "Finanzas",
    },
    {
      id: 3,
      title: "Guía para emprendedores: Primeros pasos contables",
      excerpt: "Lo que todo emprendedor debe saber antes de iniciar su proyecto desde el punto de vista contable.",
      image: "/placeholder.svg?height=200&width=400",
      date: "10 Apr 2023",
      category: "Emprendedores",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-50/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200/30 to-purple-200/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <RevealAnimation>
          <div className="text-center mb-16">
            <div className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-600 mb-4">
              Nuestro Blog
            </div>
            <TextReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 mb-4 tracking-tight">
                Artículos y recursos útiles
              </h2>
            </TextReveal>
            <p className="text-purple-700 max-w-2xl mx-auto text-lg">
              Mantente actualizado con las últimas novedades del mundo contable y financiero
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <RevealAnimation key={post.id} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-purple-900/5 border border-purple-100 hover:shadow-purple-900/10 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-purple-600 font-medium">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">{post.title}</h3>
                  <p className="text-purple-700 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors"
                  >
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full px-8 h-12"
          >
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  )
}
