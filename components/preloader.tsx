"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Reduced from 2500

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 15 // Faster progress
        return newProgress > 100 ? 100 : newProgress
      })
    }, 100) // Faster updates

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-pink-800">
          <div className="mb-8">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-900/20">
              <span className="font-bold text-white text-4xl">A</span>
            </div>
          </div>

          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white/80 text-sm">{progress < 100 ? "Cargando..." : "¡Bienvenido!"}</p>
        </div>
      )}
    </>
  )
}
