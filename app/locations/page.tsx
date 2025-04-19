import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Explore Locations | JaipurHomes",
  description:
    "Discover prime real estate locations in Jaipur. Browse properties in Jagatpura, Malviya Nagar, Mansarovar, and other top neighborhoods.",
  keywords: "Jaipur locations, Jagatpura real estate, Malviya Nagar properties, Mansarovar homes, Jaipur neighborhoods",
}

export default function LocationsPage() {
  const locations = [
    {
      id: "jagatpura",
      name: "Jagatpura",
      description:
        "A prime residential area with excellent connectivity and modern amenities. Jagatpura has emerged as one of the most sought-after locations in Jaipur due to its proximity to the airport, railway station, and major business hubs.",
      properties: 42,
      image: "/placeholder.svg?height=400&width=600&text=Jagatpura",
    },
    {
      id: "malviya-nagar",
      name: "Malviya Nagar",
      description:
        "An established neighborhood with a mix of residential and commercial properties. Malviya Nagar offers excellent infrastructure, shopping centers, educational institutions, and healthcare facilities.",
      properties: 35,
      image: "/placeholder.svg?height=400&width=600&text=Malviya+Nagar",
    },
    {
      id: "mansarovar",
      name: "Mansarovar",
      description:
        "A well-planned area with wide roads and green spaces. Mansarovar is known for its organized layout, good connectivity, and a balanced mix of residential and commercial properties.",
      properties: 28,
      image: "/placeholder.svg?height=400&width=600&text=Mansarovar",
    },
    {
      id: "vaishali-nagar",
      name: "Vaishali Nagar",
      description:
        "A vibrant neighborhood with excellent amenities and lifestyle options. Vaishali Nagar is popular among families and professionals due to its well-developed infrastructure and proximity to workplaces.",
      properties: 23,
      image: "/placeholder.svg?height=400&width=600&text=Vaishali+Nagar",
    },
    {
      id: "raja-park",
      name: "Raja Park",
      description:
        "A centrally located area with a mix of traditional and modern housing. Raja Park offers a unique blend of old-world charm and contemporary amenities.",
      properties: 19,
      image: "/placeholder.svg?height=400&width=600&text=Raja+Park",
    },
    {
      id: "tonk-road",
      name: "Tonk Road",
      description:
        "A rapidly developing corridor with premium residential projects. Tonk Road has seen significant growth in real estate development due to its strategic location and connectivity.",
      properties: 31,
      image: "/placeholder.svg?height=400&width=600&text=Tonk+Road",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Explore Jaipur Locations</h1>
      <p className="text-xl text-gray-600 mb-8">Discover the perfect neighborhood for your next home or investment</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {locations.map((location) => (
          <Link key={location.id} href={`/locations/${location.id}`} className="card group">
            <div className="relative h-64">
              <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-1">{location.name}</h2>
                <p>{location.properties} Properties</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{location.description}</p>
              <span className="text-red-600 font-semibold group-hover:text-red-700">Explore {location.name} →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Location Matters in Real Estate</h2>
        <p className="text-gray-600 mb-4">
          The location of a property is one of the most critical factors that determine its value and potential for
          appreciation. A property in a prime location with good connectivity, infrastructure, and amenities will always
          command a premium price and offer better returns on investment.
        </p>
        <p className="text-gray-600 mb-4">
          Jaipur, the capital city of Rajasthan, offers a diverse range of locations, each with its unique
          characteristics and advantages. From the bustling city center to peaceful suburban neighborhoods, there's
          something for everyone in the Pink City.
        </p>
        <p className="text-gray-600">
          At JaipurHomes, we help you navigate through the various locations in Jaipur to find the one that best suits
          your requirements and preferences. Our local expertise and market knowledge ensure that you make an informed
          decision when choosing a location for your home or investment.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Can't Decide on a Location?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our real estate experts can help you find the perfect location based on your requirements and preferences.
        </p>
        <Link href="/contact" className="btn-primary inline-block">
          Get Expert Advice
        </Link>
      </div>
    </div>
  )
}
