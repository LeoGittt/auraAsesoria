"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Calculator,
  ShieldCheck,
  PieChart,
  BarChart2,
} from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Título */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light text-center mb-12 text-neutral-700 tracking-wide"
        >
          Nuestra <span className="font-medium">metodología</span> en números
        </motion.h3>

        {/* Icono decorativo solo visible en pantallas grandes */}
        <div className="hidden md:grid grid-cols-5 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <PieChart className="text-neutral-300 w-16 h-16" />
          </motion.div>

          {/* Tarjetas */}
          {[
            {
              icon: (
                <FileText className="text-purple-600 w-8 h-8 relative z-10" />
              ),
              label: "Precisión documental",
              bg: "bg-purple-100",
            },
            {
              icon: (
                <Calculator className="text-blue-600 w-8 h-8 relative z-10" />
              ),
              label: "Análisis financiero",
              bg: "bg-blue-100",
            },
            {
              icon: (
                <ShieldCheck className="text-emerald-600 w-8 h-8 relative z-10" />
              ),
              label: "Seguridad de datos",
              bg: "bg-emerald-100",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center p-6 border border-neutral-100 rounded-lg hover:border-neutral-200 transition-colors relative group"
            >
              <div className="relative mb-4">
                {item.icon}
                <div
                  className={`absolute -inset-2 ${item.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>
              <p className="text-sm text-neutral-600 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <BarChart2 className="text-neutral-300 w-16 h-16" />
          </motion.div>
        </div>

        {/* Versión responsive para mobile */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <FileText className="text-purple-600 w-8 h-8 relative z-10" />
              ),
              label: "Precisión documental",
              bg: "bg-purple-100",
            },
            {
              icon: (
                <Calculator className="text-blue-600 w-8 h-8 relative z-10" />
              ),
              label: "Análisis financiero",
              bg: "bg-blue-100",
            },
            {
              icon: (
                <ShieldCheck className="text-emerald-600 w-8 h-8 relative z-10" />
              ),
              label: "Seguridad de datos",
              bg: "bg-emerald-100",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center p-6 border border-neutral-100 rounded-lg hover:border-neutral-200 transition-colors relative group"
            >
              <div className="relative mb-4">
                {item.icon}
                <div
                  className={`absolute -inset-2 ${item.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>
              <p className="text-sm text-neutral-600 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
        />
      </div>
    </section>
  );
}
