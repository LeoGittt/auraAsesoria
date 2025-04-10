"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  specialty: string
  imageSrc: string
}

export function TeamMember({ name, role, specialty, imageSrc }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-purple-900/5 border border-purple-100"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
        <motion.div
          className="space-y-3"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-white/80">{role}</p>
          <p className="text-white/60 text-sm">{specialty}</p>

          <div className="pt-4 flex justify-center space-x-3">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div className="p-6" animate={{ opacity: isHovered ? 0 : 1 }} transition={{ duration: 0.3 }}>
        <h3 className="text-lg font-semibold text-purple-900">{name}</h3>
        <p className="text-sm text-purple-700">{role}</p>
      </motion.div>
    </motion.div>
  )
}
