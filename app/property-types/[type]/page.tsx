import Link from "next/link"
import Image from "next/image"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"

// Add dynamic = "force-static" for static export
export const dynamic = "force-static"

// This would typically come from a database
const propertyTypeData = {
  apartment: {
    name: "Apartments",
    title: "Apartments for Sale in Jaipur",
    description:
      "Discover modern apartments with contemporary amenities in Jaipur. Perfect for individuals, couples, and small families looking for convenient living spaces.",
    longDescription:
      "Apartments are self-contained housing units that occupy only part of a building. They are the most popular housing option in urban areas due to their affordability, convenience, and low maintenance requirements.\n\nIn Jaipur, apartments range from affordable 1BHK units to luxurious 4BHK penthouses with premium amenities. Most apartment complexes offer shared facilities like swimming pools, gyms, children's play areas, and community halls, making them ideal for those who enjoy a community living experience.",
    image: "/placeholder.svg?height=600&width=1200&text=Apartments+in+Jaipur",
    features: [
      "Secure gated communities",
      "Shared amenities like swimming pools and gyms",
      "Low maintenance",
      "24/7 security",
      "Community living",
      "Convenient location",
      "Modern facilities",
      "Parking space",
    ],
    advantages: [
      "More affordable than independent houses",
      "Lower maintenance responsibilities",
      "Better security features",
      "Access to shared amenities",
      "Community living experience",
      "Often located in convenient areas",
    ],
    considerations: [
      "Limited scope for customization",
      "Shared walls with neighbors",
      "Monthly maintenance charges",
      "Potential restrictions on renovations",
      "Less privacy compared to independent houses",
    ],
    popularLocations: ["Jagatpura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Tonk Road"],
    priceRange: "₹30 Lac - ₹1.5 Cr",
    maintenanceCost: "₹2 - ₹5 per sq.ft. per month",
    appreciationRate: "5-8% annually",
  },
  villa: {
    name: "Villas",
    title: "Luxury Villas for Sale in Jaipur",
    description:
      "Explore luxurious independent houses with private gardens and exclusive amenities in Jaipur. Ideal for those seeking privacy, space, and a premium lifestyle.",
    longDescription:
      "Villas are independent houses that offer the ultimate in privacy, space, and luxury. They are designed for those who value exclusivity and are willing to invest in a premium lifestyle.\n\nIn Jaipur, villas are typically found in gated communities in upscale neighborhoods. They offer spacious interiors, private gardens, and often come with exclusive amenities like private swimming pools, home theaters, and smart home features. Villas represent the pinnacle of residential real estate in the city.",
    image: "/placeholder.svg?height=600&width=1200&text=Villas+in+Jaipur",
    features: [
      "Private gardens",
      "Spacious interiors",
      "Customization options",
      "Premium lifestyle",
      "Exclusive amenities",
      "Multiple floors",
      "Dedicated parking",
      "High-end finishes",
    ],
    advantages: [
      "Maximum privacy and independence",
      "Spacious living areas",
      "Freedom to customize and renovate",
      "Private outdoor spaces",
      "Status symbol",
      "Potential for higher appreciation",
    ],
    considerations: [
      "Higher purchase price",
      "Greater maintenance responsibilities",
      "Higher utility costs",
      "More time and effort for upkeep",
      "Security concerns if not in a gated community",
    ],
    popularLocations: ["Jagatpura", "Malviya Nagar", "Bani Park", "Civil Lines", "Jaisinghpura"],
    priceRange: "₹1.2 Cr - ₹5 Cr",
    maintenanceCost: "₹10,000 - ₹30,000 per month",
    appreciationRate: "7-10% annually",
  },
  plot: {
    name: "Plots",
    title: "Residential Plots for Sale in Jaipur",
    description:
      "Find residential and commercial plots in prime locations of Jaipur. Perfect for those who want to build their dream home or develop a property according to their specifications.",
    longDescription:
      "Residential plots offer the ultimate flexibility in creating your dream home. They are vacant pieces of land where you can design and build a house according to your specific requirements and preferences.\n\nIn Jaipur, residential plots are available in various sizes and locations, from developing areas on the outskirts to established neighborhoods in the city. They are popular among those who have specific design preferences, want to build in phases, or are looking for long-term investment opportunities.",
    image: "/placeholder.svg?height=600&width=1200&text=Plots+in+Jaipur",
    features: [
      "Freedom to design and build",
      "Long-term investment potential",
      "Flexibility in construction timeline",
      "Customized home building",
      "Potential for appreciation",
      "No depreciation of land value",
      "Option to build in phases",
      "Complete control over construction quality",
    ],
    advantages: [
      "Complete customization of your home",
      "Build according to your budget and timeline",
      "Potential for higher long-term returns",
      "No depreciation in land value",
      "Freedom to choose builders and materials",
      "Option to expand in the future",
    ],
    considerations: [
      "Additional cost and time for construction",
      "Need for expertise in construction management",
      "Dealing with contractors and permits",
      "Longer time to possession",
      "Potential for construction delays and budget overruns",
    ],
    popularLocations: ["Jagatpura", "Ajmer Road", "Tonk Road", "Sikar Road", "Agra Road"],
    priceRange: "₹20 Lac - ₹2 Cr",
    maintenanceCost: "Minimal until construction",
    appreciationRate: "8-12% annually in developing areas",
  },
  commercial: {
    name: "Commercial",
    title: "Commercial Properties for Sale in Jaipur",
    description:
      "Explore office spaces, retail shops, and commercial complexes in strategic locations of Jaipur. Ideal for businesses looking for visibility and accessibility.",
    longDescription:
      "Commercial properties are designed for business purposes rather than residential living. They include office spaces, retail shops, showrooms, warehouses, and mixed-use buildings.\n\nIn Jaipur, commercial properties are concentrated in business districts and along major roads with high visibility and footfall. They are sought after by business owners, entrepreneurs, and investors looking for rental income or capital appreciation.",
    image: "/placeholder.svg?height=600&width=1200&text=Commercial+Properties+in+Jaipur",
    features: [
      "Prime locations with high footfall",
      "Modern infrastructure",
      "Ample parking space",
      "Professional environment",
      "Good return on investment",
      "High visibility",
      "Designed for business operations",
      "Multiple units available",
    ],
    advantages: [
      "Higher rental yields compared to residential properties",
      "Longer lease terms",
      "Potential for business growth in the right location",
      "Tax benefits for business owners",
      "Appreciation potential in developing areas",
      "Professional tenant relationships",
    ],
    considerations: [
      "Higher initial investment",
      "More complex legal and regulatory requirements",
      "Potential for longer vacancy periods",
      "Market sensitivity to economic conditions",
      "Higher maintenance and management needs",
    ],
    popularLocations: ["C-Scheme", "Tonk Road", "Malviya Nagar", "Vaishali Nagar", "Mansarovar"],
    priceRange: "₹50 Lac - ₹10 Cr",
    maintenanceCost: "₹5 - ₹10 per sq.ft. per month",
    appreciationRate: "6-9% annually",
  },
  penthouse: {
    name: "Penthouses",
    title: "Luxury Penthouses for Sale in Jaipur",
    description:
      "Discover luxury apartments located on the top floors of high-rise buildings with exclusive features like private terraces and panoramic views. The epitome of luxury living in Jaipur.",
    longDescription:
      "Penthouses are luxury apartments located on the top floors of high-rise buildings. They offer the best of both worlds: the convenience and security of apartment living combined with the exclusivity and privacy of a villa.\n\nIn Jaipur, penthouses are rare and highly sought after by those who value status, views, and luxury. They typically feature premium finishes, spacious layouts, private terraces, and panoramic views of the city skyline or surrounding landscapes.",
    image: "/placeholder.svg?height=600&width=1200&text=Penthouses+in+Jaipur",
    features: [
      "Panoramic views",
      "Private terraces",
      "Premium finishes",
      "Exclusive amenities",
      "Status symbol",
      "Spacious layouts",
      "Top floor location",
      "Luxury fittings and fixtures",
    ],
    advantages: [
      "Unmatched views and natural light",
      "More privacy than regular apartments",
      "Prestige and status",
      "Exclusive features not available in regular apartments",
      "Access to building amenities",
      "Security of a high-rise building",
    ],
    considerations: [
      "Premium pricing",
      "Limited availability",
      "Higher maintenance costs",
      "Potential for weather-related issues",
      "Dependence on elevators",
    ],
    popularLocations: ["Tonk Road", "C-Scheme", "Malviya Nagar", "Jagatpura", "Civil Lines"],
    priceRange: "₹2 Cr - ₹8 Cr",
    maintenanceCost: "₹5 - ₹10 per sq.ft. per month",
    appreciationRate: "7-10% annually",
  },
}

// Add generateStaticParams function for static export
export function generateStaticParams() {
  return Object.keys(propertyTypeData).map((type) => ({
    type,
  }))
}

export function generateMetadata({ params }: { params: { type: string } }) {
  const type = propertyTypeData[params.type as keyof typeof propertyTypeData]

  if (!type) {
    return {
      title: "Property Type Not Found | JaipurHomes",
      description: "The requested property type information could not be found.",
    }
  }

  return {
    title: `${type.title} | JaipurHomes`,
    description: type.description,
    keywords: `${type.name.toLowerCase()} in Jaipur, buy ${type.name.toLowerCase()} in Jaipur, ${type.name.toLowerCase()} for sale, luxury ${type.name.toLowerCase()}, affordable ${type.name.toLowerCase()}`,
    openGraph: {
      title: type.title,
      description: type.description,
      images: [type.image],
    },
  }
}

export default function PropertyTypePage({ params }: { params: { type: string } }) {
  const typeSlug = params.type
  const type = propertyTypeData[typeSlug as keyof typeof propertyTypeData]

  if (!type) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Property Type Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The property type you are looking for does not exist or has been removed.
        </p>
        <Link href="/property-types" className="btn-primary">
          Explore All Property Types
        </Link>
      </div>
    )
  }

  // Filter properties by type
  const typeProperties = properties
    .filter((property) => property.type.toLowerCase() === typeSlug.toLowerCase())
    .slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{type.title}</h1>
            <p className="text-xl text-white">{type.description}</p>
          </div>
        </div>
      </div>

      {/* Property Type Overview */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About {type.name}</h2>
            <div className="text-gray-600 space-y-4">
              {type.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {type.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Price Range</p>
                  <p className="text-gray-600">{type.priceRange}</p>
                </div>
                <div>
                  <p className="font-medium">Maintenance Cost</p>
                  <p className="text-gray-600">{type.maintenanceCost}</p>
                </div>
                <div>
                  <p className="font-medium">Average Appreciation</p>
                  <p className="text-gray-600">{type.appreciationRate}</p>
                </div>
                <div>
                  <p className="font-medium">Popular Locations</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {type.popularLocations.map((location, index) => (
                      <Link
                        key={index}
                        href={`/locations/${location.toLowerCase().replace(/\s+/g, "-")}`}
                        className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-full text-sm"
                      >
                        {location}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Our real estate experts can help you find the perfect {type.name.toLowerCase()} based on your
                requirements and budget.
              </p>
              <Link href="/contact" className="btn-primary w-full text-center block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Advantages</h3>
            <ul className="space-y-2">
              {type.advantages.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Considerations</h3>
            <ul className="space-y-2">
              {type.considerations.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-red-600 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Properties of this type */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{type.name} for Sale in Jaipur</h2>
            <Link href={`/properties?type=${typeSlug}`} className="text-red-600 hover:text-red-700 font-semibold">
              View All {type.name}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typeProperties.length > 0 ? (
              typeProperties.map((property) => <PropertyCard key={property.id} property={property} />)
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600 mb-4">No {type.name.toLowerCase()} currently available.</p>
                <Link href="/properties" className="btn-primary">
                  Browse All Properties
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                What are the advantages of buying a {type.name.toLowerCase().slice(0, -1)} over other property types?
              </h3>
              <p className="text-gray-600">
                {type.name === "Apartments"
                  ? "Apartments offer affordability, lower maintenance, better security, and access to shared amenities like swimming pools and gyms. They're ideal for first-time buyers, small families, and those who prefer a community living experience."
                  : type.name === "Villas"
                    ? "Villas offer maximum privacy, spacious living areas, customization options, and exclusive features like private gardens. They're ideal for those seeking a premium lifestyle and are often considered a status symbol."
                    : type.name === "Plots"
                      ? "Plots offer complete freedom to design and build your dream home according to your specifications. They also have excellent long-term investment potential and the flexibility to build in phases based on your budget and timeline."
                      : type.name === "Commercial"
                        ? "Commercial properties typically offer higher rental yields compared to residential properties, longer lease terms, and better tax benefits for business owners. They're ideal for those looking for regular rental income and long-term appreciation."
                        : "Penthouses offer unmatched views, more privacy than regular apartments, prestige, and exclusive features like private terraces. They combine the convenience of apartment living with the exclusivity of a villa."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                What should I look for when buying a {type.name.toLowerCase().slice(0, -1)} in Jaipur?
              </h3>
              <p className="text-gray-600">
                {type.name === "Apartments"
                  ? "When buying an apartment, look for location, builder reputation, quality of construction, amenities offered, maintenance charges, parking facilities, security features, and potential for appreciation. Also, check the society bylaws and restrictions."
                  : type.name === "Villas"
                    ? "When buying a villa, focus on location, plot size, built-up area, quality of construction, design and layout, outdoor spaces, security features, and proximity to essential services. Also, check for any encumbrances on the property."
                    : type.name === "Plots"
                      ? "When buying a plot, check the location, legal status, dimensions and shape, soil quality, availability of utilities, zoning regulations, future development plans in the area, and connectivity to major roads and highways."
                      : type.name === "Commercial"
                        ? "When buying a commercial property, focus on location, visibility, footfall, parking facilities, infrastructure, lease potential, rental yields, and future development plans in the area. Also, check zoning laws and permitted usage."
                        : "When buying a penthouse, look for views, terrace size, privacy, exclusivity, building amenities, security features, elevator reliability, and quality of finishes. Also, check for any weather-related issues that might affect the top floor."}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                What are the best locations for {type.name.toLowerCase()} in Jaipur?
              </h3>
              <p className="text-gray-600">
                The best locations for {type.name.toLowerCase()} in Jaipur include {type.popularLocations.join(", ")}.
                Each of these areas offers unique advantages in terms of connectivity, infrastructure, amenities, and
                potential for appreciation. The ideal location depends on your specific requirements, budget, and
                long-term goals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect {type.name.slice(0, -1)}?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Browse our extensive collection of {type.name.toLowerCase()} in Jaipur or contact our real estate experts
            for personalized assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/properties?type=${typeSlug}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Browse {type.name}
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
