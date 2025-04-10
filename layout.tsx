import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Preloader } from "@/components/preloader"
import { FloatingElements } from "@/components/floating-elements"

import { ParticlesBackground } from "@/components/particles-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Aura Asesoría Contable | Servicios contables profesionales",
  description:
    "Transformamos tu contabilidad con claridad y precisión. Contadoras que hablan tu idioma y entienden tus desafíos para que puedas enfocarte en hacer crecer tu negocio.",
  keywords: [
    "asesoría contable",
    "contabilidad",
    "impuestos",
    "monotributo",
    "sociedades",
    "laboral",
    "San Juan",
    "Argentina",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Preloader />
          <FloatingElements />
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'