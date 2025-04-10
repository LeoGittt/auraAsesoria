"use client"

import { motion } from "framer-motion"

interface ScrollingTextProps {
  texts: string[]
}

export function ScrollingText({ texts }: ScrollingTextProps) {
  return (
    <div className="relative py-4 bg-gradient-to-r from-purple-900 to-pink-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      <div className="flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...texts, ...texts, ...texts].map((text, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-lg font-medium">{text}</span>
              <span className="mx-4 h-2 w-2 bg-pink-400 rounded-full"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
