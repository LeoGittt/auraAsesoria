"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  index: number;
}

function ResourceCard({
  title,
  description,
  fileType,
  fileSize,
  downloadUrl,
  index,
}: ResourceCardProps) {
  return (
    <motion.div
      className="bg-white border border-neutral-100 rounded-lg p-5 hover:border-neutral-200 transition-all"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="font-medium text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">
            {fileType} • {fileSize}
          </span>
          <a
            href={downloadUrl}
            className="text-xs font-medium text-purple-600 hover:text-purple-700 transition-colors flex items-center"
            aria-label={`Descargar ${title}`}
          >
            <Download className="mr-1 h-3 w-3" />
            Descargar
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ResourcesSection() {
  const resources = [
    {
      title: "Guía de Monotributo 2023",
      description: "Categorías y montos actualizados para este año fiscal.",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloadUrl: "#",
    },
    {
      title: "Plantilla de Presupuesto",
      description: "Excel con fórmulas para planificación financiera.",
      fileType: "XLSX",
      fileSize: "1.8 MB",
      downloadUrl: "#",
    },
    {
      title: "Checklist Emprendedores",
      description: "Trámites esenciales para iniciar tu negocio.",
      fileType: "PDF",
      fileSize: "1.2 MB",
      downloadUrl: "#",
    },
    {
      title: "Calendario Fiscal 2023",
      description: "Vencimientos impositivos organizados por mes.",
      fileType: "PDF",
      fileSize: "0.9 MB",
      downloadUrl: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-normal text-neutral-900 mb-2">
            Recursos útiles
          </h2>
          <p className="text-neutral-600 max-w-md mx-auto text-sm">
            Descargas gratuitas para optimizar tu gestión
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <ResourceCard key={index} index={index} {...resource} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="ghost"
            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
          >
            Ver todos los recursos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
