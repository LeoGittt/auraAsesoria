"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const posts = [
    {
      title: "Cambios en el régimen de monotributo 2023: Todo lo que necesitas saber",
      excerpt: "Analizamos las nuevas categorías, límites y beneficios del monotributo para este año fiscal.",
      category: "Impuestos",
      date: "15 Jun 2023",
      author: "CPN Cintia Martínez",
      authorRole: "Especialista en Impuestos",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=340&width=600&text=Monotributo+2023",
      slug: "cambios-monotributo-2023",
    },
    {
      title: "5 estrategias para optimizar la gestión financiera de tu PyME",
      excerpt: "Descubre cómo mejorar el flujo de caja y la rentabilidad de tu negocio con estos consejos prácticos.",
      category: "Finanzas",
      date: "28 May 2023",
      author: "Lic. Laura Más",
      authorRole: "Gestión y Planificación",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=340&width=600&text=Gestión+Financiera",
      slug: "estrategias-optimizar-gestion-financiera-pyme",
    },
    {
      title: "Guía completa: Primeros pasos contables para emprendedores",
      excerpt: "Todo lo que necesitas saber para iniciar tu proyecto con bases contables sólidas desde el día uno.",
      category: "Emprendedores",
      date: "10 Apr 2023",
      author: "CPN Laila Barud",
      authorRole: "Especialista en Sociedades",
      authorImage: "/placeholder.svg?height=32&width=32",
      image: "/placeholder.svg?height=340&width=600&text=Guía+Emprendedores",
      slug: "guia-primeros-pasos-contables-emprendedores",
    },
  ]

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
            Nuestro Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Artículos y recursos útiles</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mantente actualizado con las últimas novedades del mundo contable y financiero
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                author={post.author}
                authorRole={post.authorRole}
                authorImage={post.authorImage}
                image={post.image}
                slug={post.slug}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outline" className="border-neutral-300 text-neutral-800 hover:bg-neutral-100 rounded-md">
            Ver todos los artículos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
