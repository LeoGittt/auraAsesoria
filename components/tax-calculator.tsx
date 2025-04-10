"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowRight } from "lucide-react"

export function TaxCalculator() {
  const [income, setIncome] = useState("")
  const [category, setCategory] = useState("")
  const [hasEmployees, setHasEmployees] = useState("")
  const [result, setResult] = useState<null | {
    category: string
    monthlyTax: number
    socialSecurity: number
    total: number
  }>(null)

  const handleCalculate = () => {
    // This is a simplified calculation for demonstration purposes
    const incomeValue = Number.parseFloat(income) || 0
    let categoryResult = ""
    let monthlyTax = 0
    let socialSecurity = 0

    // Simplified monotributo calculation (example values)
    if (incomeValue <= 1000000) {
      categoryResult = "A"
      monthlyTax = 5000
      socialSecurity = 3000
    } else if (incomeValue <= 1500000) {
      categoryResult = "B"
      monthlyTax = 6000
      socialSecurity = 3300
    } else if (incomeValue <= 2000000) {
      categoryResult = "C"
      monthlyTax = 7000
      socialSecurity = 3600
    } else if (incomeValue <= 2500000) {
      categoryResult = "D"
      monthlyTax = 8500
      socialSecurity = 3900
    } else {
      categoryResult = "E o superior"
      monthlyTax = 10000
      socialSecurity = 4200
    }

    // Add employee cost if applicable
    if (hasEmployees === "yes") {
      socialSecurity += 2000
    }

    setResult({
      category: categoryResult,
      monthlyTax,
      socialSecurity,
      total: monthlyTax + socialSecurity,
    })
  }

  const resetCalculator = () => {
    setIncome("")
    setCategory("")
    setHasEmployees("")
    setResult(null)
  }

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-600 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-black mr-2"></span>
            Herramientas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Calculadora de Monotributo</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Estima tu categoría y cuánto deberías pagar mensualmente
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-neutral-200 rounded-lg p-8"
            >
              <div className="space-y-6">
                <div>
                  <Label htmlFor="income" className="text-sm font-medium text-neutral-700 mb-1.5 block">
                    Facturación anual estimada
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                    <Input
                      id="income"
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      placeholder="0.00"
                      className="pl-8 border-neutral-300 focus:border-black h-10 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category" className="text-sm font-medium text-neutral-700 mb-1.5 block">
                    Tipo de actividad
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="border-neutral-300 focus:border-black h-10 rounded-md">
                      <SelectValue placeholder="Selecciona una actividad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="services">Servicios</SelectItem>
                      <SelectItem value="commerce">Comercio</SelectItem>
                      <SelectItem value="production">Producción de bienes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="employees" className="text-sm font-medium text-neutral-700 mb-1.5 block">
                    ¿Tienes empleados?
                  </Label>
                  <Select value={hasEmployees} onValueChange={setHasEmployees}>
                    <SelectTrigger id="employees" className="border-neutral-300 focus:border-black h-10 rounded-md">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Sí</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleCalculate}
                  disabled={!income || !category || !hasEmployees}
                  className="w-full bg-black hover:bg-neutral-800 text-white rounded-md h-10"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calcular
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border border-neutral-200 rounded-lg p-8"
            >
              {result ? (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-neutral-100 mb-4">
                      <Calculator className="h-8 w-8 text-neutral-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">Resultado del cálculo</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                      <span className="text-neutral-600">Categoría estimada:</span>
                      <span className="font-medium text-black">{result.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                      <span className="text-neutral-600">Impuesto mensual:</span>
                      <span className="font-medium text-black">${result.monthlyTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                      <span className="text-neutral-600">Seguridad social:</span>
                      <span className="font-medium text-black">${result.socialSecurity.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 font-medium">
                      <span className="text-black">Total mensual:</span>
                      <span className="text-black text-xl">${result.total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="outline"
                      onClick={resetCalculator}
                      className="w-full border-neutral-300 text-neutral-800 hover:bg-neutral-100 rounded-md h-10"
                    >
                      Calcular de nuevo
                    </Button>
                    <p className="text-xs text-neutral-500 mt-4 text-center">
                      Esta es una estimación simplificada. Para un cálculo preciso, consulta con nuestras profesionales.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-neutral-100 mb-4">
                    <Calculator className="h-8 w-8 text-neutral-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Resultado del cálculo</h3>
                  <p className="text-neutral-600 mb-6">
                    Completa el formulario y haz clic en calcular para ver el resultado.
                  </p>
                  <ArrowRight className="h-6 w-6 text-neutral-400 transform -rotate-90 md:rotate-180" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
