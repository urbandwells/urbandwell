import Link from "next/link"
import Image from "next/image"

export default function PropertyTypes() {
  const propertyTypes = [
    {
      id: "apartment",
      name: "Apartments",
      count: 24,
      image: "/placeholder.svg?height=300&width=400&text=Apartments",
    },
    {
      id: "villa",
      name: "Villas",
      count: 18,
      image: "/placeholder.svg?height=300&width=400&text=Villas",
    },
    {
      id: "plot",
      name: "Plots",
      count: 12,
      image: "/placeholder.svg?height=300&width=400&text=Plots",
    },
    {
      id: "commercial",
      name: "Commercial",
      count: 8,
      image: "/placeholder.svg?height=300&width=400&text=Commercial",
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Browse by Property Type</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type) => (
            <Link key={type.id} href={`/properties?type=${type.id}`} className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{type.name}</h3>
                  <p>{type.count} Properties</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
