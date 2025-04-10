"use client"

import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-md bg-black flex items-center justify-center">
                <span className="font-bold text-white text-lg">A</span>
              </div>
              <div className="ml-3">
                <span className="block text-lg font-semibold text-black">Aura</span>
                <span className="block text-xs text-neutral-600">Asesoría Contable</span>
              </div>
            </div>
            <p className="text-neutral-600 text-sm">
              Transformamos tu contabilidad con calidez y claridad. Un equipo de profesionales comprometidas con tu
              éxito.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/aura.asesoriacontable"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-md bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <Instagram className="h-4 w-4 text-neutral-700" />
              </a>
              <a
                href="https://facebook.com/AuraAsesoriaContable"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-md bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <Facebook className="h-4 w-4 text-neutral-700" />
              </a>
              <a
                href="mailto:aura.asesoriacontable@gmail.com"
                className="h-8 w-8 rounded-md bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <Mail className="h-4 w-4 text-neutral-700" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Nosotras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Área Contable
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Área Impositiva
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Área Societaria
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                  Área Laboral
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-neutral-600">Rivadavia 10190 oeste Capital, San Juan, Argentina</li>
              <li className="text-neutral-600">+54 264 583-4384</li>
              <li className="text-neutral-600">aura.asesoriacontable@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-600 text-sm">
          <p>&copy; {currentYear} Aura Asesoría Contable. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
