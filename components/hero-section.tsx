"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-[#FAFAFA] border-b border-neutral-200 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 md:mb-6"
          >
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 shadow-sm hover:shadow transition-shadow duration-300">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
              Asesoría Contable Profesional
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-black tracking-tight mb-4 sm:mb-6 leading-snug"
          >
            Transformamos tu contabilidad con{" "}
            <span className="text-purple-600">claridad</span> y precisión
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            Contadoras que hablan tu idioma y entienden tus desafíos para que
            puedas enfocarte en lo que realmente importa: hacer crecer tu
            negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center items-center"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white rounded-xl h-14 px-8 text-base font-medium transition-all duration-300 hover:shadow-lg"
            >
              Contáctanos ahora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-neutral-300 text-neutral-800 hover:bg-neutral-50 hover:text-black rounded-xl h-14 px-8 text-base font-medium transition-all duration-300 hover:shadow-lg group"
            >
              Conoce nuestros servicios
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity, y }}>
        <div className="absolute top-1/4 right-4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-purple-100 blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-4 w-52 h-52 sm:w-80 sm:h-80 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
      </motion.div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-64 bg-gradient-to-t from-white via-white/90 to-transparent z-1"></div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="animate-bounce flex flex-col items-center text-center">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neutral-400 rounded-full flex justify-center items-start">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-neutral-400 rounded-full mt-1"
            />
          </div>
          <span className="text-xs text-neutral-500 mt-1 leading-tight">
            Desplázate
          </span>
        </div>
      </motion.div>
    </section>
  );
}
