"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassMorphismProps {
  children: ReactNode
  className?: string
}

export function GlassMorphism({ children, className }: GlassMorphismProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-3xl overflow-hidden shadow-xl shadow-purple-900/5 border border-white/20 backdrop-blur-md",
        className,
      )}
      style={{
        background: "rgba(255, 255, 255, 0.7)",
      }}
      whileHover={{ boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/10 via-purple-100/10 to-blue-100/10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
