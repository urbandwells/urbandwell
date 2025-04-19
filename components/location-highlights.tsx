import Link from "next/link"
import Image from "next/image"

export default function LocationHighlights() {
  const locations = [
    {
      id: "jagatpura",
      name: "Jagatpura",
      description: "A prime residential area with excellent connectivity and modern amenities.",
      image: "/placeholder.svg?height=400&width=600&text=Jagatpura",
    },
    {
      id: "malviya-nagar",
      name: "Malviya Nagar",
      description: "An established neighborhood with a mix of residential and commercial properties.",
      image: "/placeholder.svg?height=400&width=600&text=Malviya+Nagar",
    },
    {
      id: "mansarovar",
      name: "Mansarovar",
      description: "A well-planned area with wide roads and green spaces.",
      image: "/placeholder.svg?height=400&width=600&text=Mansarovar",
    },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Popular Locations</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="card overflow-hidden">
              <div className="relative h-64">
                <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <Link
                  href={`/properties?location=${location.id}`}
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  View Properties
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
