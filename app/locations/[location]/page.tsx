import Link from "next/link"
import Image from "next/image"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"
import { Landmark, Car, School, ShoppingBag, Hospital } from "lucide-react"

// This would typically come from a database
const locationData = {
  jagatpura: {
    name: "Jagatpura",
    title: "Properties in Jagatpura, Jaipur",
    description:
      "Jagatpura is a prime residential area in Jaipur with excellent connectivity and modern amenities. It has emerged as one of the most sought-after locations due to its proximity to the airport, railway station, and major business hubs.",
    longDescription:
      "Jagatpura has witnessed significant real estate development in recent years, with numerous residential projects, commercial complexes, and educational institutions coming up in the area. The neighborhood offers a perfect blend of urban convenience and peaceful living, making it ideal for families, professionals, and investors alike.\n\nWith its strategic location on the outskirts of Jaipur, Jagatpura provides easy access to other parts of the city while maintaining a serene environment away from the hustle and bustle of the city center. The area is well-connected by road and public transportation, making commuting convenient for residents.",
    image: "/placeholder.svg?height=600&width=1200&text=Jagatpura+Skyline",
    amenities: [
      { name: "Schools", count: 12, icon: School },
      { name: "Hospitals", count: 5, icon: Hospital },
      { name: "Shopping Centers", count: 8, icon: ShoppingBag },
      { name: "Parks", count: 6, icon: Landmark },
      { name: "Public Transport", count: "Excellent", icon: Car },
    ],
    highlights: [
      "Proximity to Jaipur International Airport",
      "Well-connected to major highways",
      "Developing IT and business hubs",
      "Modern residential complexes",
      "Good educational institutions",
      "Healthcare facilities",
      "Shopping and entertainment options",
    ],
    propertyTypes: [
      { type: "Apartment", percentage: 45 },
      { type: "Villa", percentage: 30 },
      { type: "Plot", percentage: 15 },
      { type: "Commercial", percentage: 10 },
    ],
    priceRange: "₹30 Lac - ₹2.5 Cr",
    rentalRange: "₹12,000 - ₹45,000 per month",
  },
  "malviya-nagar": {
    name: "Malviya Nagar",
    title: "Properties in Malviya Nagar, Jaipur",
    description:
      "Malviya Nagar is an established neighborhood with a mix of residential and commercial properties. It offers excellent infrastructure, shopping centers, educational institutions, and healthcare facilities.",
    longDescription:
      "Malviya Nagar is one of the most well-established and sought-after residential areas in Jaipur. Named after the freedom fighter Madan Mohan Malviya, this locality has evolved into a self-sufficient neighborhood with all modern amenities and facilities.\n\nThe area is known for its well-planned layout, wide roads, and a perfect mix of residential and commercial properties. From independent houses to apartment complexes, Malviya Nagar offers a variety of housing options to suit different preferences and budgets.",
    image: "/placeholder.svg?height=600&width=1200&text=Malviya+Nagar+View",
    amenities: [
      { name: "Schools", count: 15, icon: School },
      { name: "Hospitals", count: 8, icon: Hospital },
      { name: "Shopping Centers", count: 12, icon: ShoppingBag },
      { name: "Parks", count: 9, icon: Landmark },
      { name: "Public Transport", count: "Excellent", icon: Car },
    ],
    highlights: [
      "Central location in Jaipur",
      "Well-established neighborhood",
      "Excellent connectivity",
      "Premium educational institutions",
      "Top healthcare facilities",
      "Vibrant shopping areas",
      "Diverse dining options",
    ],
    propertyTypes: [
      { type: "Apartment", percentage: 35 },
      { type: "Villa", percentage: 40 },
      { type: "Plot", percentage: 10 },
      { type: "Commercial", percentage: 15 },
    ],
    priceRange: "₹40 Lac - ₹3 Cr",
    rentalRange: "₹15,000 - ₹60,000 per month",
  },
  mansarovar: {
    name: "Mansarovar",
    title: "Properties in Mansarovar, Jaipur",
    description:
      "Mansarovar is a well-planned area with wide roads and green spaces. It is known for its organized layout, good connectivity, and a balanced mix of residential and commercial properties.",
    longDescription:
      "Mansarovar is one of the largest and most well-planned residential areas in Jaipur. Developed by the Jaipur Development Authority (JDA), this locality is known for its organized layout, wide roads, and abundant green spaces.\n\nThe area has seen significant development over the years and now offers a perfect blend of residential and commercial properties. From affordable housing to luxury apartments and villas, Mansarovar caters to a wide range of budgets and preferences.",
    image: "/placeholder.svg?height=600&width=1200&text=Mansarovar+Area",
    amenities: [
      { name: "Schools", count: 10, icon: School },
      { name: "Hospitals", count: 6, icon: Hospital },
      { name: "Shopping Centers", count: 9, icon: ShoppingBag },
      { name: "Parks", count: 12, icon: Landmark },
      { name: "Public Transport", count: "Good", icon: Car },
    ],
    highlights: [
      "Well-planned layout by JDA",
      "Wide roads and green spaces",
      "Good connectivity to other parts of the city",
      "Quality educational institutions",
      "Modern healthcare facilities",
      "Shopping and entertainment hubs",
      "Peaceful residential environment",
    ],
    propertyTypes: [
      { type: "Apartment", percentage: 40 },
      { type: "Villa", percentage: 35 },
      { type: "Plot", percentage: 20 },
      { type: "Commercial", percentage: 5 },
    ],
    priceRange: "₹35 Lac - ₹2.2 Cr",
    rentalRange: "₹14,000 - ₹50,000 per month",
  },
  "vaishali-nagar": {
    name: "Vaishali Nagar",
    title: "Properties in Vaishali Nagar, Jaipur",
    description:
      "Vaishali Nagar is a vibrant neighborhood with excellent amenities and lifestyle options. It is popular among families and professionals due to its well-developed infrastructure and proximity to workplaces.",
    longDescription:
      "Vaishali Nagar is a vibrant and self-sufficient residential area in the western part of Jaipur. Developed in the 1990s, this locality has grown into one of the most preferred residential destinations in the city.\n\nThe area is known for its well-developed infrastructure, excellent connectivity, and a wide range of amenities. From shopping centers and restaurants to schools and hospitals, Vaishali Nagar offers everything that residents need for a comfortable and convenient lifestyle.",
    image: "/placeholder.svg?height=600&width=1200&text=Vaishali+Nagar+View",
    amenities: [
      { name: "Schools", count: 8, icon: School },
      { name: "Hospitals", count: 4, icon: Hospital },
      { name: "Shopping Centers", count: 10, icon: ShoppingBag },
      { name: "Parks", count: 7, icon: Landmark },
      { name: "Public Transport", count: "Good", icon: Car },
    ],
    highlights: [
      "Self-sufficient neighborhood",
      "Excellent connectivity",
      "Vibrant commercial areas",
      "Quality educational institutions",
      "Modern healthcare facilities",
      "Diverse dining and entertainment options",
      "Active community life",
    ],
    propertyTypes: [
      { type: "Apartment", percentage: 50 },
      { type: "Villa", percentage: 30 },
      { type: "Plot", percentage: 10 },
      { type: "Commercial", percentage: 10 },
    ],
    priceRange: "₹32 Lac - ₹2.8 Cr",
    rentalRange: "₹13,000 - ₹55,000 per month",
  },
}

export function generateMetadata({ params }: { params: { location: string } }) {
  const location = locationData[params.location as keyof typeof locationData]

  if (!location) {
    return {
      title: "Location Not Found | JaipurHomes",
      description: "The requested location information could not be found.",
    }
  }

  return {
    title: `${location.title} | JaipurHomes`,
    description: location.description,
    keywords: `${location.name} properties, real estate in ${location.name}, buy property in ${location.name}, ${location.name} Jaipur, homes in ${location.name}`,
    openGraph: {
      title: location.title,
      description: location.description,
      images: [location.image],
    },
  }
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const locationSlug = params.location
  const location = locationData[locationSlug as keyof typeof locationData]

  if (!location) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Location Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The location you are looking for does not exist or has been removed.
        </p>
        <Link href="/locations" className="btn-primary">
          Explore All Locations
        </Link>
      </div>
    )
  }

  // Filter properties by location
  const locationProperties = properties
    .filter((property) => property.location.toLowerCase().includes(locationSlug.toLowerCase()))
    .slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={location.image || "/placeholder.svg"}
            alt={location.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{location.title}</h1>
            <p className="text-xl text-white">{location.description}</p>
          </div>
        </div>
      </div>

      {/* Location Overview */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About {location.name}</h2>
            <div className="text-gray-600 space-y-4">
              {location.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {location.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Location Amenities</h3>
              <ul className="space-y-4">
                {location.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <amenity.icon className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <span className="font-medium">{amenity.name}</span>
                      <p className="text-sm text-gray-600">{amenity.count}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Property Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Property Types</p>
                  <ul className="mt-2 space-y-2">
                    {location.propertyTypes.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.type}</span>
                        <span>{item.percentage}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Price Range</p>
                  <p className="text-gray-600">{location.priceRange}</p>
                </div>
                <div>
                  <p className="font-medium">Rental Range</p>
                  <p className="text-gray-600">{location.rentalRange}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties in this location */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Properties in {location.name}</h2>
            <Link
              href={`/properties?location=${locationSlug}`}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              View All Properties
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationProperties.length > 0 ? (
              locationProperties.map((property) => <PropertyCard key={property.id} property={property} />)
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600 mb-4">No properties currently available in this location.</p>
                <Link href="/properties" className="btn-primary">
                  Browse All Properties
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Location Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{location.name} Map</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg relative">
            {/* In a real implementation, you would use a Google Maps or similar component here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map of {location.name} Would Be Displayed Here</p>
            </div>
          </div>
        </div>

        {/* Nearby Locations */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Explore Nearby Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(locationData)
              .filter(([key]) => key !== locationSlug)
              .slice(0, 3)
              .map(([key, loc]) => (
                <Link key={key} href={`/locations/${key}`} className="card group">
                  <div className="relative h-48">
                    <Image src={loc.image || "/placeholder.svg"} alt={loc.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{loc.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 line-clamp-2">{loc.description}</p>
                    <span className="text-red-600 font-semibold group-hover:text-red-700 mt-2 inline-block">
                      Explore {loc.name} →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
