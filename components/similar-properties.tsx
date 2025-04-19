import PropertyCard from "./property-card"
import { properties } from "@/data/properties"

interface SimilarPropertiesProps {
  currentPropertyId: string
}

export default function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  // Filter out the current property and get 3 similar properties
  const similarProperties = properties.filter((property) => property.id !== currentPropertyId).slice(0, 3)

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Similar Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {similarProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
