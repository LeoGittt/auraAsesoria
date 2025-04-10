"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  email: string;
  whatsapp: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, email, whatsapp }) => {
  return (
    <motion.div
      className="w-full bg-white border border-neutral-100 rounded-lg overflow-hidden hover:border-neutral-200 transition-colors"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="aspect-square bg-neutral-50"></div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-medium text-neutral-900">{name}</h3>
          <p className="text-purple-600 text-xs">{role}</p>
        </div>

        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{bio}</p>

        <div className="flex space-x-2">
          <a
            href={`mailto:${email}`}
            className="text-neutral-400 hover:text-purple-600 transition-colors p-1"
            aria-label={`Email ${name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-purple-600 transition-colors p-1"
            aria-label={`WhatsApp ${name}`}
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export function TeamSection() {
  const team = [
    {
      name: "Cintia Martínez",
      role: "Especialista Fiscal",
      bio: "10+ años optimizando cargas tributarias para PyMEs.",
      email: "cintia@auraasesoria.com",
      whatsapp: "5492645834384",
    },
    {
      name: "Laila Barud",
      role: "Experta Societaria",
      bio: "Estructuración legal de negocios y startups.",
      email: "laila@auraasesoria.com",
      whatsapp: "5492645834385",
    },
    {
      name: "Laura Más",
      role: "Planificación Financiera",
      bio: "Estrategias para maximizar rentabilidad.",
      email: "laura@auraasesoria.com",
      whatsapp: "5492645834386",
    },
    {
      name: "Valeria Regalado",
      role: "Asesora Laboral",
      bio: "Cumplimiento normativo y gestión de RRHH.",
      email: "valeria@auraasesoria.com",
      whatsapp: "5492645834387",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="text-center mb-8">
          <h2 className="text-xl font-normal text-neutral-800 mb-1">
            Equipo profesional
          </h2>
          <p className="text-neutral-500 text-sm">
            Expertas en transformar desafíos contables en soluciones
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
