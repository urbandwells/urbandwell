import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Homeowner",
      content:
        "JaipurHomes helped me find my dream apartment in Jagatpura. Their team was professional and understood exactly what I was looking for.",
      image: "/placeholder.svg?height=100&width=100&text=RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Investor",
      content:
        "I've been investing in properties through JaipurHomes for the past 3 years. Their market insights and property recommendations have always been spot on.",
      image: "/placeholder.svg?height=100&width=100&text=PP",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "First-time Buyer",
      content:
        "As a first-time buyer, I was nervous about the process. JaipurHomes guided me through every step and made it seamless.",
      image: "/placeholder.svg?height=100&width=100&text=AV",
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
