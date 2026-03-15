import { Settings, Building2, Clock } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Repair & Maintenance",
    description: "Fast, reliable repairs for broken springs, cables, and openers. We keep your door running smoothly and safely.",
    iconBgColor: "bg-blue-50",
    iconColor: "text-[--brand-navy]",
  },
  {
    icon: Building2,
    title: "New Door Installation",
    description: "Upgrade your home's curb appeal with our wide selection of modern, traditional, and carriage-style doors.",
    iconBgColor: "bg-orange-50",
    iconColor: "text-[--brand-orange]",
  },
  {
    icon: Clock,
    title: "Emergency 24/7 Service",
    description: "Stuck in or out of your garage? Our technicians are available around the clock to assist you when you need us most.",
    iconBgColor: "bg-blue-50",
    iconColor: "text-[--brand-navy]",
  },
]

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-20 bg-secondary"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-[--brand-navy] mb-4"
          >
            Our Professional Services
          </h2>
          <div className="h-1 w-20 bg-[--brand-orange] mx-auto" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article 
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition duration-300"
            >
              <div className={`w-14 h-14 ${service.iconBgColor} flex items-center justify-center rounded-lg mb-6`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[--brand-navy] mb-3">{service.title}</h3>
              <p className="text-[--brand-slate] leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
