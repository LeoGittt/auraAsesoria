"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Calculator,
  FileText,
  Building2,
  Users2,
  ClipboardList,
  Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItemProps {
  title: string;
  href: string;
  children?: {
    title: string;
    description?: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

const MobileNavItem = ({ title, href, children }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (children) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
      setIsOpen(!isOpen);
    }
  };

  if (!children) {
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center justify-between py-3 px-4 text-neutral-600 transition-colors duration-200 rounded-lg",
          isClicked ? "bg-neutral-100" : "hover:bg-neutral-50"
        )}
        onClick={() => setIsClicked(true)}
      >
        <span>{title}</span>
      </Link>
    );
  }

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center justify-between w-full py-3 px-4 text-neutral-800 font-medium rounded-lg transition-colors duration-200",
          isClicked ? "bg-neutral-100" : "hover:bg-neutral-50"
        )}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronRight
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-90" : ""
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-4"
          >
            <div className="py-2 space-y-1">
              {children.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center py-2 px-4 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                >
                  {item.icon && (
                    <div className="h-6 w-6 rounded-lg bg-neutral-100 flex items-center justify-center mr-3 flex-shrink-0">
                      {item.icon}
                    </div>
                  )}
                  <div>
                    <div className="text-sm text-neutral-700">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-neutral-500 mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNavItem = ({ title, href, children }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
    setIsOpen(!isOpen);
  };

  if (!children) {
    return (
      <Link
        href={href}
        className={cn(
          "px-4 py-2 text-neutral-600 transition-colors duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2",
          isClicked ? "bg-neutral-100" : "hover:text-black"
        )}
        onClick={() => setIsClicked(true)}
      >
        {title}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center px-4 py-2 text-neutral-600 transition-colors duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2",
          isClicked ? "bg-neutral-100" : "hover:text-black"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <ChevronDown
          className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-neutral-100 z-50 overflow-hidden"
            role="menu"
          >
            <div className="p-2 space-y-1">
              {children.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-start p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 hover:bg-neutral-50 active:bg-neutral-100"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {item.icon && (
                    <div className="h-8 w-8 rounded-lg bg-neutral-100 flex items-center justify-center mr-3 flex-shrink-0">
                      {item.icon}
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-black">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-neutral-500 mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NAV_ITEMS: NavItemProps[] = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Servicios",
    href: "/servicios",
    children: [
      {
        title: "Área Contable",
        description: "Registros contables y estados financieros",
        href: "/servicios/contable",
        icon: <Calculator className="h-4 w-4 text-neutral-700" />,
      },
      {
        title: "Área Impositiva",
        description: "Liquidación y planificación fiscal",
        href: "/servicios/impositiva",
        icon: <FileText className="h-4 w-4 text-neutral-700" />,
      },
      {
        title: "Área Societaria",
        description: "Constitución y gestión de sociedades",
        href: "/servicios/societaria",
        icon: <Building2 className="h-4 w-4 text-neutral-700" />,
      },
      {
        title: "Área Laboral",
        description: "Gestión de personal y obligaciones",
        href: "/servicios/laboral",
        icon: <Users2 className="h-4 w-4 text-neutral-700" />,
      },
      {
        title: "Trámites",
        description: "Gestiones ante organismos públicos",
        href: "/servicios/tramites",
        icon: <ClipboardList className="h-4 w-4 text-neutral-700" />,
      },
      {
        title: "Consultoría",
        description: "Asesoramiento estratégico personalizado",
        href: "/servicios/consultoria",
        icon: <Lightbulb className="h-4 w-4 text-neutral-700" />,
      },
    ],
  },
  {
    title: "Nosotras",
    href: "/nosotras",
  },
  {
    title: "Recursos",
    href: "/recursos",
    children: [
      {
        title: "Blog",
        description: "Artículos y novedades",
        href: "/blog",
        icon: <FileText className="h-4 w-4 text-neutral-700" />,
      },
      {
        title: "Calculadoras",
        description: "Herramientas útiles para tu negocio",
        href: "/calculadoras",
        icon: <Calculator className="h-4 w-4 text-neutral-700" />,
      },
      {
        title: "Descargas",
        description: "Plantillas y documentos gratuitos",
        href: "/descargas",
        icon: <ClipboardList className="h-4 w-4 text-neutral-700" />,
      },
    ],
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuClicked(true);
    setTimeout(() => setIsMenuClicked(false), 150);

    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    setIsMobileMenuOpen((prev) => !prev);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };

    window.addEventListener("routeChange", handleRouteChange);
    return () => {
      window.removeEventListener("routeChange", handleRouteChange);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-neutral-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link
          href="/"
          className="relative z-10 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 rounded-xl active:scale-95 transition-transform duration-100"
          aria-label="Ir a la página de inicio"
        >
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-xl bg-black flex items-center justify-center shadow-md">
              <span className="font-bold text-white text-lg">A</span>
            </div>
            <div className="ml-3">
              <span className="block text-lg font-semibold text-black">
                Aura
              </span>
              <span className="block text-xs text-neutral-600">
                Asesoría Contable
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-2"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item, index) => (
            <DesktopNavItem
              key={`desktop-${index}`}
              title={item.title}
              href={item.href}
              children={item.children}
            
              
            />
          ))}
          <Button
            className={cn(
              "ml-4 bg-black text-white rounded-xl focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 shadow-sm transition-all duration-200",
              isMenuClicked ? "bg-neutral-800" : "hover:bg-neutral-800"
            )}
            asChild
          >
            <Link href="/contacto">Agenda una llamada</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden relative z-10 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 transition-all duration-200",
            isMenuClicked ? "bg-neutral-100" : "hover:bg-neutral-50"
          )}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 mt-16 overflow-y-auto"
              aria-hidden={!isMobileMenuOpen}
            >
              <div className="container max-w-7xl mx-auto px-5 py-4">
                <nav className="flex flex-col" aria-label="Navegación móvil">
                  {NAV_ITEMS.map((item, index) => (
                    <MobileNavItem
                      key={`mobile-${index}`}
                      title={item.title}
                      href={item.href}
                      children={item.children}
                    />
                  ))}
                  <Button
                    className={cn(
                      "bg-black text-white rounded-xl focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 shadow-sm mt-4 transition-all duration-200",
                      isMenuClicked ? "bg-neutral-800" : "hover:bg-neutral-800"
                    )}
                    asChild
                  >
                    <Link href="/contacto" onClick={toggleMobileMenu}>
                      Agenda una llamada
                    </Link>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
