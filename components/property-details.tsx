import type { Property } from "@/types/property"

interface PropertyDetailsProps {
  property: Property
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Property Details</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Basic Information</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Property ID:</span>
                <span className="font-medium">{property.id}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Property Type:</span>
                <span className="font-medium">{property.type}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium">{property.status}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Area:</span>
                <span className="font-medium">{property.area} sq.ft.</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Year Built:</span>
                <span className="font-medium">{property.yearBuilt || "N/A"}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Property Features</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Bedrooms:</span>
                <span className="font-medium">{property.bedrooms}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Bathrooms:</span>
                <span className="font-medium">{property.bathrooms}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Garage:</span>
                <span className="font-medium">{property.garage || "No"}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Furnishing:</span>
                <span className="font-medium">{property.furnishing || "Unfurnished"}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Floor:</span>
                <span className="font-medium">{property.floor || "N/A"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Description</h3>
        <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
      </div>
    </div>
  )
}
