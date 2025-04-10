"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Configuración básica de Three.js
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(500, 500)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Crear el globo
    const geometry = new THREE.SphereGeometry(1, 64, 64)

    // Cargar textura
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load("/placeholder.svg?height=1024&width=2048&text=Earth+Texture")

    // Material con efecto brillante
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 5,
      transparent: true,
      opacity: 0.9,
    })

    const globe = new THREE.Mesh(geometry, material)
    scene.add(globe)

    // Añadir luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x8a2be2, 1) // Luz púrpura
    pointLight1.position.set(2, 1, 2)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xff69b4, 1) // Luz rosa
    pointLight2.position.set(-2, -1, 2)
    scene.add(pointLight2)

    // Crear atmósfera brillante
    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 64)
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Crear estrellas
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
    })

    const starsVertices = []
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      starsVertices.push(x, y, z)
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Animación
    const animate = () => {
      requestAnimationFrame(animate)

      globe.rotation.y += 0.002
      atmosphere.rotation.y += 0.001

      renderer.render(scene, camera)
    }

    animate()

    // Limpieza
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Liberar memoria
      geometry.dispose()
      material.dispose()
      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="h-[500px] w-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  )
}
