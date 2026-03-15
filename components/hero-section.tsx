import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-[--brand-navy] overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAonosTCmclx8XHmYYLrxjl9i_Jq7sMOoziY9je8SuQjHq7_8d7MZl1dwsXNvcTOMFIiRZWYyYWiSFaZzRSxGT8qb5LVBKC8vjBSxfDpndRBljCXV7OLJ0ZxH7VkZ9YTjkwdiOtDnw07fbAYDvBgh32cVaTruvRasj_KyNiNm3ben7HNRrZT53hvq95NzL4BQ1RefkQ7H6MiSXa3HYAv8q4ncA4ybp7kVP1n_DyveyT5BaEny5OFN-4Aak9yFu3x0crIF_e5etpjDM"
          alt="Modern black glass garage door showcasing premium installation quality"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl text-balance"
        >
          Premium Garage Door Services{" "}
          <br className="hidden md:block" />
          <span className="text-[--brand-orange]">You Can Trust</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl text-pretty">
          Precision Garage Solutions provides expert installation, 24/7 emergency repairs, 
          and maintenance for residential and commercial doors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#quote" 
            className="bg-[--brand-orange] hover:bg-[--brand-orange-hover] text-white px-8 py-4 rounded-lg font-bold text-lg transition duration-300 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]"
          >
            Get a Free Quote
          </Link>
          <Link 
            href="#services" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border border-white/30 transition duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
