"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Precision Garage Solutions - Home">
              <span className="text-2xl font-bold text-[--brand-navy] tracking-tight">
                PRECISION<span className="text-[--brand-orange]">GARAGE</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#services" 
              className="text-[--brand-slate] hover:text-[--brand-navy] font-medium transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="text-[--brand-slate] hover:text-[--brand-navy] font-medium transition-colors duration-300"
            >
              Why Choose Us
            </Link>
            <Link 
              href="#testimonials" 
              className="text-[--brand-slate] hover:text-[--brand-navy] font-medium transition-colors duration-300"
            >
              Testimonials
            </Link>
            <a 
              href="tel:5551234567" 
              className="bg-[--brand-navy] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-slate-700 transition duration-300 flex items-center gap-2"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call (555) 123-4567</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[--brand-slate] p-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link 
              href="#services" 
              className="block py-2 text-[--brand-slate] hover:text-[--brand-navy] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="block py-2 text-[--brand-slate] hover:text-[--brand-navy] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link 
              href="#testimonials" 
              className="block py-2 text-[--brand-slate] hover:text-[--brand-navy] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <a 
              href="tel:5551234567" 
              className="block bg-[--brand-navy] text-white px-5 py-3 rounded-md font-semibold text-center hover:bg-slate-700 transition duration-300"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
