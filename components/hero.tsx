import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1920&text=Jagatpura+Skyline"
          alt="Jagatpura Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Dream Home in Jagatpura
          </h1>
          <p className="text-xl text-white mb-8">Discover premium properties in Jaipur's most sought-after location</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/properties" className="btn-primary">
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
