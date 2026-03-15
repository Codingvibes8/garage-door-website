import { Star } from "lucide-react"

const testimonials = [
  {
    name: "James D.",
    initials: "JD",
    quote: "Excellent service! They came out the same day my spring broke and had it fixed in less than an hour. Very professional and fairly priced.",
  },
  {
    name: "Sarah M.",
    initials: "SM",
    quote: "We love our new insulated garage door! Precision Garage Solutions helped us choose the right style and the installation was flawless. Huge improvement!",
  },
  {
    name: "Robert K.",
    initials: "RK",
    quote: "My garage door opener failed on a Sunday morning. They arrived within 2 hours and fixed it. Truly the best emergency service in town.",
  },
]

function StarRating() {
  return (
    <div className="flex text-[--brand-orange] mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="py-20 bg-[--brand-navy] text-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Customers Say
          </h2>
          <div className="h-1 w-20 bg-[--brand-orange] mx-auto" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.name}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700"
            >
              <StarRating />
              <blockquote>
                <p className="text-gray-300 italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center">
                <div 
                  className="h-10 w-10 bg-slate-600 rounded-full flex items-center justify-center font-bold text-white"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <span className="ml-3 font-semibold">{testimonial.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
