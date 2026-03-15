import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import Script from "next/script"

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Precision Garage Solutions",
  description:
    "Expert garage door installation, 24/7 emergency repairs, and maintenance for residential and commercial doors.",
  url: "https://precisiongaragesolutions.com",
  telephone: "(555) 123-4567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Garage Way, Suite 100",
    addressLocality: "City",
    addressRegion: "ST",
    postalCode: "12345",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7128",
    longitude: "-74.0060",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  image: "https://precisiongaragesolutions.com/og-image.jpg",
  sameAs: ["https://facebook.com/precisiongaragesolutions", "https://instagram.com/precisiongaragesolutions"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Garage Door Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Garage Door Repair & Maintenance",
          description: "Fast, reliable repairs for broken springs, cables, and openers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Door Installation",
          description: "Wide selection of modern, traditional, and carriage-style doors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency 24/7 Service",
          description: "Around the clock garage door assistance when you need it most.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactFormSection />
        <Footer />
      </main>
    </>
  )
}
