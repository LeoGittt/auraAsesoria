"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-black mr-2" />
            Contáctanos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ¿Tienes una consulta o propuesta? Escribinos y te responderemos a la
            brevedad.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.address
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg border border-neutral-200 not-italic space-y-6"
          >
            <ContactInfo
              icon={MapPin}
              title="Dirección"
              text="Rivadavia 10190 oeste, Capital"
            />
            <ContactInfo
              icon={Phone}
              title="Teléfono"
              text="+54 264 583-4384"
            />
            <ContactInfo
              icon={Mail}
              title="Email"
              text="aura.asesoriacontable@gmail.com"
            />
          </motion.address>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg border border-neutral-200"
          >
            <form className="space-y-6">
              <FormField
                id="name"
                label="Nombre completo"
                placeholder="Tu nombre"
              />
              <FormField
                id="email"
                label="Correo electrónico"
                type="email"
                placeholder="tu@email.com"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Contanos brevemente en qué podemos ayudarte"
                  className="border-neutral-300 focus:border-black min-h-[120px] rounded-md"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white rounded-md h-10"
              >
                <span className="flex items-center">
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Subcomponentes para claridad y reutilización

function ContactInfo({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="h-10 w-10 rounded-md bg-neutral-100 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-neutral-700" />
      </div>
      <div>
        <h4 className="font-medium text-black text-lg mb-1">{title}</h4>
        <p className="text-neutral-600">{text}</p>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-700 mb-1"
      >
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="border-neutral-300 focus:border-black h-10 rounded-md"
        required
      />
    </div>
  );
}
