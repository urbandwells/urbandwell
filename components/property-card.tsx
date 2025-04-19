import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import type { Property } from "@/types/property"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="card group">
      <div className="relative h-64">
        <Image src={property.images[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{property.status}</span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">{property.type}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
            <Link href={`/properties/${property.id}`}>{property.title}</Link>
          </h3>
          <p className="text-xl font-bold text-red-600">₹{property.price.toLocaleString()}</p>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <p className="text-sm">{property.location}</p>
        </div>

        <div className="flex justify-between border-t pt-4">
          <div className="flex items-center text-gray-600">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.area} sq.ft.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
