import Link from "next/link"

export default function CTASection() {
  return (
    <div className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're looking to buy, sell, or rent a property in Jagatpura, our team of experts is here to help you
          every step of the way.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/properties"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Browse Properties
          </Link>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
