"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function MissionVisionTabs() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission")

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-purple-50 p-1 rounded-full">
          <button
            onClick={() => setActiveTab("mission")}
            className={cn(
              "relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === "mission" ? "text-white" : "text-purple-700 hover:text-purple-900",
            )}
          >
            {activeTab === "mission" && (
              <motion.div
                layoutId="tab-pill"
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">Nuestra Misión</span>
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={cn(
              "relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === "vision" ? "text-white" : "text-purple-700 hover:text-purple-900",
            )}
          >
            {activeTab === "vision" && (
              <motion.div
                layoutId="tab-pill"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">Nuestra Visión</span>
          </button>
        </div>
      </div>

      <div className="relative min-h-[300px] bg-white rounded-3xl p-8 shadow-xl shadow-purple-900/5 border border-purple-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-100 to-purple-50 rounded-bl-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-100 to-purple-50 rounded-tr-[100px] -z-10"></div>

        <AnimatePresence mode="wait">
          {activeTab === "mission" ? (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-2xl bg-pink-100 flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.55L21 7L12 16Z" fill="#EC4899" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-900">Nuestra Misión</h3>
              </div>
              <p className="text-purple-800 leading-relaxed text-lg">
                En Aura Asesoría Contable somos un grupo de amigas que unimos nuestras pasiones y conocimientos para
                ofrecer un servicio contable profesional, claro y cercano. Nuestra misión es transformar la manera en
                que los emprendedores y pymes viven la gestión de sus negocios: con confianza, simplicidad y soluciones
                innovadoras. Queremos que te sientas acompañado, entendido y libre para crecer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="bg-pink-50 rounded-2xl p-4 text-center">
                  <h4 className="font-medium text-pink-600 mb-1">Confianza</h4>
                  <p className="text-purple-700 text-sm">Construimos relaciones sólidas basadas en la transparencia</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-4 text-center">
                  <h4 className="font-medium text-purple-600 mb-1">Simplicidad</h4>
                  <p className="text-purple-700 text-sm">Hacemos que lo complejo sea comprensible y accesible</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <h4 className="font-medium text-blue-600 mb-1">Innovación</h4>
                  <p className="text-purple-700 text-sm">Buscamos constantemente mejores formas de servirte</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="#3B82F6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-900">Nuestra Visión</h3>
              </div>
              <p className="text-purple-800 leading-relaxed text-lg">
                Revolucionar la forma de hacer asesoría contable en Argentina, siendo un equipo de referencia por
                nuestra calidez humana, creatividad y compromiso real con cada cliente. Soñamos con ser elegidas por
                quienes buscan algo distinto: un espacio profesional, dinámico y transparente, donde los números hablan
                claro y las personas importan.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                  <h4 className="font-medium text-blue-600 mb-1">Referentes</h4>
                  <p className="text-purple-700 text-sm">Ser reconocidas por nuestra excelencia y calidez</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-4 text-center">
                  <h4 className="font-medium text-purple-600 mb-1">Distinción</h4>
                  <p className="text-purple-700 text-sm">Ofrecer un servicio único y personalizado</p>
                </div>
                <div className="bg-pink-50 rounded-2xl p-4 text-center">
                  <h4 className="font-medium text-pink-600 mb-1">Humanidad</h4>
                  <p className="text-purple-700 text-sm">Poner a las personas en el centro de todo lo que hacemos</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
