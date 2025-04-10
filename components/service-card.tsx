"use client"

import type React from "react"

import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      className="p-6 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 transition-colors"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-10 w-10 rounded-md bg-neutral-100 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  )
}
