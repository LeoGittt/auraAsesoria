"use client"

import { motion } from "framer-motion"

export function ScrollingLogos() {
  // Placeholder for client logos
  const logos = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Cliente ${i + 1}`,
    logo: `/placeholder.svg?height=60&width=120&text=Logo+${i + 1}`,
  }))

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto mb-8 text-center">
        <div className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-600 mb-4">
          Confían en Nosotras
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-900">
          Empresas que ya transformaron su contabilidad
        </h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 h-16 w-32 bg-purple-50 rounded-lg flex items-center justify-center"
              >
                <img src={logo.logo || "/placeholder.svg"} alt={logo.name} className="max-h-10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
