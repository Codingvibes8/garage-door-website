"use client"

import { Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Repair & Maintenance",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", service: "Repair & Maintenance", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section 
      id="quote" 
      className="py-20 bg-secondary"
      aria-labelledby="quote-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left sidebar */}
            <div className="md:w-1/3 bg-[--brand-orange] p-10 text-white flex flex-col justify-center">
              <h2 
                id="quote-heading"
                className="text-3xl font-bold mb-4"
              >
                Request a Free Quote
              </h2>
              <p className="mb-8 opacity-90">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" aria-hidden="true" />
                  <a href="tel:5551234567" className="hover:underline">(555) 123-4567</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3" aria-hidden="true" />
                  <span>Serving Your Local Area</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:w-2/3 p-10">
              {isSubmitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[--brand-navy] mb-2">Thank You!</h3>
                    <p className="text-[--brand-slate]">We&apos;ll be in touch within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-semibold text-[--brand-navy] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[--brand-orange] focus:ring-[--brand-orange] text-foreground"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-semibold text-[--brand-navy] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[--brand-orange] focus:ring-[--brand-orange] text-foreground"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="service" 
                      className="block text-sm font-semibold text-[--brand-navy] mb-2"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[--brand-orange] focus:ring-[--brand-orange] text-foreground"
                    >
                      <option>Repair &amp; Maintenance</option>
                      <option>New Door Installation</option>
                      <option>Opener Replacement</option>
                      <option>Emergency Service</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-semibold text-[--brand-navy] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-[--brand-orange] focus:ring-[--brand-orange] text-foreground"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[--brand-navy] text-white py-4 rounded-md font-bold text-lg hover:bg-slate-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
