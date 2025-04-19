import { MapPin } from "lucide-react"

interface PropertyLocationProps {
  location: string
}

export default function PropertyLocation({ location }: PropertyLocationProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Location</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 text-red-600 mr-2" />
          <span className="text-gray-800 font-medium">{location}</span>
        </div>

        <div className="h-[300px] bg-gray-200 rounded-lg relative">
          {/* In a real implementation, you would use a Google Maps or similar component here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Nearby Places</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
              <span className="text-gray-600">Schools within 1 km</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
              <span className="text-gray-600">Shopping centers within 2 km</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
              <span className="text-gray-600">Hospitals within 3 km</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
              <span className="text-gray-600">Public transportation within 500 m</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
