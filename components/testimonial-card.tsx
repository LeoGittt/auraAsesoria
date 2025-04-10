"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <motion.div
      className="p-6 rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 transition-colors"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Quote className="h-5 w-5 text-neutral-400 mb-4" />
      <p className="text-neutral-800 mb-6">{quote}</p>
      <div>
        <p className="font-medium text-black">{author}</p>
        <p className="text-sm text-neutral-600">{company}</p>
      </div>
    </motion.div>
  )
}
