"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Instagram, Mail, ExternalLink, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  specialties: string[]
  experience: string
  education: string[]
  certifications: string[]
  imageSrc: string
  instagram?: string
  email?: string
  whatsapp?: string
}

export function TeamCard({
  name,
  role,
  bio,
  specialties,
  experience,
  education,
  certifications,
  imageSrc,
  instagram,
  email,
  whatsapp,
}: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="group bg-white border border-neutral-200 rounded-lg overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={400}
          height={500}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-white/80">{role}</p>
            </div>
            <div className="flex space-x-2">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="h-8 w-8 rounded-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Mail className="h-4 w-4 text-white" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-semibold text-black">{name}</h3>
              <p className="text-neutral-600">{role}</p>
            </div>
            <Badge variant="outline" className="bg-neutral-100 text-neutral-800 hover:bg-neutral-200">
              {experience}
            </Badge>
          </div>
          <p className="text-neutral-600 line-clamp-3">{bio}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-black mb-2">Especialidades:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span key={index} className="inline-flex text-xs px-2 py-1 rounded-md bg-neutral-100 text-neutral-700">
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-neutral-300 text-neutral-800 hover:bg-neutral-100"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ver menos" : "Ver más información"}
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-neutral-300 text-neutral-800 hover:bg-neutral-100"
            >
              <Calendar className="mr-2 h-3 w-3" />
              Agendar
            </Button>
            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#25D366] text-white hover:bg-[#20BD5C] h-8 px-3"
              >
                <MessageCircle className="mr-2 h-3 w-3" />
                WhatsApp
              </a>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-neutral-200"
            >
              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="education">Formación</TabsTrigger>
                  <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
                  <TabsTrigger value="contact">Contacto</TabsTrigger>
                </TabsList>
                <TabsContent value="education" className="space-y-2">
                  <h4 className="text-sm font-medium text-black mb-2">Educación:</h4>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    {education.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="certifications" className="space-y-2">
                  <h4 className="text-sm font-medium text-black mb-2">Certificaciones:</h4>
                  <ul className="space-y-1 text-sm text-neutral-600">
                    {certifications.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="contact" className="space-y-3">
                  <h4 className="text-sm font-medium text-black mb-2">Información de contacto:</h4>
                  {email && (
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-neutral-500 mr-2" />
                      <a href={`mailto:${email}`} className="text-neutral-600 hover:text-black">
                        {email}
                      </a>
                    </div>
                  )}
                  {whatsapp && (
                    <div className="flex items-center text-sm">
                      <MessageCircle className="h-4 w-4 text-neutral-500 mr-2" />
                      <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-black"
                      >
                        +{whatsapp}
                      </a>
                    </div>
                  )}
                  {instagram && (
                    <div className="flex items-center text-sm">
                      <Instagram className="h-4 w-4 text-neutral-500 mr-2" />
                      <a
                        href={instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-black"
                      >
                        @{instagram.split("/").pop()}
                      </a>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
