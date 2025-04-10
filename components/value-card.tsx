"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
  color: "pink" | "purple" | "blue" | "yellow"
}

export function ValueCard({ icon, title, description, color }: ValueCardProps) {
  const colorClasses = {
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-100",
      iconBg: "bg-pink-100",
      text: "text-pink-600",
      shadow: "shadow-pink-500/10",
      hoverShadow: "hover:shadow-pink-500/20",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-100",
      iconBg: "bg-purple-100",
      text: "text-purple-600",
      shadow: "shadow-purple-500/10",
      hoverShadow: "hover:shadow-purple-500/20",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-100",
      iconBg: "bg-blue-100",
      text: "text-blue-600",
      shadow: "shadow-blue-500/10",
      hoverShadow: "hover:shadow-blue-500/20",
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-100",
      iconBg: "bg-yellow-100",
      text: "text-yellow-600",
      shadow: "shadow-yellow-500/10",
      hoverShadow: "hover:shadow-yellow-500/20",
    },
  }

  return (
    <motion.div
      className={`p-8 rounded-3xl bg-white border ${colorClasses[color].border} shadow-lg ${colorClasses[color].shadow} hover:shadow-xl ${colorClasses[color].hoverShadow} transition-all duration-300`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`h-16 w-16 rounded-2xl ${colorClasses[color].bg} flex items-center justify-center mb-6`}>
        <div className={colorClasses[color].text}>{icon}</div>
      </div>
      <h3 className={`text-xl font-bold ${colorClasses[color].text} mb-3`}>{title}</h3>
      <p className="text-purple-700">{description}</p>
    </motion.div>
  )
}
