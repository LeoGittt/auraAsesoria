"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TextRevealProps {
  children: ReactNode
  delay?: number
}

export function TextReveal({ children, delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const childrenArray = Array.isArray(children) ? children : [children]

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      {childrenArray.map((child, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : { y: "100%" }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {child}
        </motion.span>
      ))}
    </span>
  )
}
