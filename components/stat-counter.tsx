"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
}

export function StatCounter({ end, suffix = "", label }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      let animationFrameId: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / 2000, 1)

        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        }
      }

      animationFrameId = requestAnimationFrame(step)
      return () => cancelAnimationFrame(animationFrameId)
    }
  }, [isInView, end, hasAnimated])

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-purple-200 text-lg">{label}</div>
    </div>
  )
}
