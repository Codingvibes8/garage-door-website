import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  {
    title: "Expert Technicians",
    description: "Our team is fully licensed, insured, and background-checked for your peace of mind.",
  },
  {
    title: "Quality Parts",
    description: "We only use high-grade components from industry-leading manufacturers to ensure longevity.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with comprehensive warranties and a 100% satisfaction guarantee.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section 
      id="about" 
      className="py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaL-ELB6Vv36Tj57tHENhrFJYkl4yM_J4AmhfhYhh-GI4jQ1V3KdmEgGgoYJrfIoDrQa0y7tI10d2PQ91MVvorK_UhDtwQ01vwHzgCPsI7UmHD7O7tk_byjfxukcWPqIk4m2icnUR1xJsmSL0KV5K4TzA5r_FdL4o5wUp8n9iT1trC70UtYkRezm404fg6HfFr_hFZdbywK55jqCpbJklojiec3cHWIc1wvipw5lBoZmbV4RhWaF7VuMo14zD5420HrjIXbXmBCi4"
              alt="Professional technician servicing a garage door with precision tools"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-[--brand-navy] mb-6"
            >
              Why Choose Precision Garage Solutions?
            </h2>
            <p className="text-lg text-[--brand-slate] mb-8">
              We pride ourselves on providing top-tier craftsmanship and exceptional 
              customer service to our local community.
            </p>
            
            <ul className="space-y-6" role="list">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[--brand-orange]" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[--brand-navy]">{feature.title}</h3>
                    <p className="text-[--brand-slate]">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
