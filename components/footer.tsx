import Link from "next/link"
import { Phone, MapPin, Facebook, Instagram } from "lucide-react"

const quickLinks = [
  { href: "#services", label: "Our Services" },
  { href: "#about", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#quote", label: "Free Quote" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[--brand-navy] text-gray-300 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-6 block">
              PRECISION<span className="text-[--brand-orange]">GARAGE</span>
            </Link>
            <p className="max-w-md mb-6">
              Expert garage door services you can rely on. Serving residential and 
              commercial clients with quality parts and skilled craftsmanship for over 15 years.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="h-10 w-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-[--brand-orange] transition duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-[--brand-orange] transition duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-4" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="hover:text-[--brand-orange] transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-4" role="list">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-[--brand-orange] mr-3 flex-shrink-0" aria-hidden="true" />
                  <span>
                    123 Garage Way,<br />
                    Suite 100, City, ST 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 text-[--brand-orange] mr-3 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:5551234567" className="hover:text-[--brand-orange] transition">
                    (555) 123-4567
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-700 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Precision Garage Solutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
