import Link from "next/link"
import PropertyCard from "./property-card"
import { properties } from "@/data/properties"

export default function FeaturedProperties() {
  // Get the first 6 properties as featured
  const featuredProperties = properties.slice(0, 6)

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">Featured Properties</h2>
          <Link href="/properties" className="text-red-600 hover:text-red-700 font-semibold">
            View All Properties
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
