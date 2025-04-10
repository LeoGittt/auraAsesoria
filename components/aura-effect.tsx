"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface AuraEffectProps {
  mousePosition?: { x: number; y: number }
}

export function AuraEffect({ mousePosition = { x: 0, y: 0 } }: AuraEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse position
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let targetMouseX = mousePosition?.x || mouseX
    let targetMouseY = mousePosition?.y || mouseY

    // Create aura effect
    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      distance: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 15 + 10
        this.size = this.baseSize
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        this.alpha = Math.random() * 0.3 + 0.1
        this.distance = 0

        // Pastel colors
        const colors = [
          "255, 182, 193", // Pink
          "230, 190, 255", // Lavender
          "173, 216, 230", // Light blue
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Smooth mouse following
        mouseX += (targetMouseX - mouseX) * 0.05
        mouseY += (targetMouseY - mouseY) * 0.05

        // Calculate distance from mouse
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        this.distance = Math.sqrt(dx * dx + dy * dy)

        // Particle movement
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check with smooth bounce
        if (this.x < 0 || this.x > window.innerWidth) {
          this.speedX *= -1
        }
        if (this.y < 0 || this.y > window.innerHeight) {
          this.speedY *= -1
        }

        // Size based on mouse proximity
        const maxDistance = 300
        if (this.distance < maxDistance) {
          const scale = 1 - this.distance / maxDistance
          this.size = this.baseSize + this.baseSize * scale
        } else {
          this.size = this.baseSize
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        gradient.addColorStop(0, `rgba(${this.color}, ${this.alpha})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    const particleCount = 15 // Reduced from 30

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create a gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "rgba(253, 242, 248, 0.9)") // Light pink
      bgGradient.addColorStop(1, "rgba(245, 243, 255, 0.9)") // Light purple
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update mouse position from props
      if (mousePosition) {
        targetMouseX = mousePosition.x
        targetMouseY = mousePosition.y
      }

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mousePosition])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}
