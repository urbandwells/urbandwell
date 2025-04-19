import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Property Types | JaipurHomes",
  description:
    "Explore different types of properties in Jaipur - apartments, villas, plots, commercial spaces, and penthouses. Find the perfect property type for your needs.",
  keywords:
    "property types, apartments in Jaipur, villas in Jaipur, plots in Jaipur, commercial property Jaipur, penthouses in Jaipur",
}

export default function PropertyTypesPage() {
  const propertyTypes = [
    {
      id: "apartment",
      name: "Apartments",
      description:
        "Modern apartments with contemporary amenities and facilities. Perfect for individuals, couples, and small families looking for convenient living spaces.",
      features: [
        "Secure gated communities",
        "Shared amenities like swimming pools and gyms",
        "Low maintenance",
        "24/7 security",
        "Community living",
      ],
      idealFor: ["First-time buyers", "Small families", "Working professionals", "Investors"],
      priceRange: "₹30 Lac - ₹1.5 Cr",
      count: 24,
      image: "/placeholder.svg?height=400&width=600&text=Apartments",
    },
    {
      id: "villa",
      name: "Villas",
      description:
        "Luxurious independent houses with private gardens and exclusive amenities. Ideal for those seeking privacy, space, and a premium lifestyle.",
      features: [
        "Private gardens",
        "Spacious interiors",
        "Customization options",
        "Premium lifestyle",
        "Exclusive amenities",
      ],
      idealFor: ["Large families", "Luxury seekers", "High-net-worth individuals", "Privacy enthusiasts"],
      priceRange: "₹1.2 Cr - ₹5 Cr",
      count: 18,
      image: "/placeholder.svg?height=400&width=600&text=Villas",
    },
    {
      id: "plot",
      name: "Plots",
      description:
        "Residential and commercial plots in prime locations. Perfect for those who want to build their dream home or develop a property according to their specifications.",
      features: [
        "Freedom to design and build",
        "Long-term investment potential",
        "Flexibility in construction timeline",
        "Customized home building",
        "Potential for appreciation",
      ],
      idealFor: ["Custom home builders", "Long-term investors", "Developers", "Future planning"],
      priceRange: "₹20 Lac - ₹2 Cr",
      count: 12,
      image: "/placeholder.svg?height=400&width=600&text=Plots",
    },
    {
      id: "commercial",
      name: "Commercial",
      description:
        "Office spaces, retail shops, and commercial complexes in strategic locations. Ideal for businesses looking for visibility and accessibility.",
      features: [
        "Prime locations with high footfall",
        "Modern infrastructure",
        "Ample parking space",
        "Professional environment",
        "Good return on investment",
      ],
      idealFor: ["Business owners", "Entrepreneurs", "Investors", "Professionals"],
      priceRange: "₹50 Lac - ₹10 Cr",
      count: 8,
      image: "/placeholder.svg?height=400&width=600&text=Commercial",
    },
    {
      id: "penthouse",
      name: "Penthouses",
      description:
        "Luxury apartments located on the top floors of high-rise buildings with exclusive features like private terraces and panoramic views. The epitome of luxury living in the city.",
      features: ["Panoramic views", "Private terraces", "Premium finishes", "Exclusive amenities", "Status symbol"],
      idealFor: [
        "Luxury seekers",
        "High-net-worth individuals",
        "Status conscious buyers",
        "Those who appreciate views",
      ],
      priceRange: "₹2 Cr - ₹8 Cr",
      count: 5,
      image: "/placeholder.svg?height=400&width=600&text=Penthouses",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Property Types in Jaipur</h1>
      <p className="text-xl text-gray-600 mb-8">Explore different types of properties to find what suits your needs</p>

      {propertyTypes.map((type, index) => (
        <div key={type.id} className={`mb-16 ${index % 2 === 1 ? "bg-gray-50 py-8 px-4 rounded-lg" : ""}`}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{type.name}</h2>
              <p className="text-gray-600 mb-6">{type.description}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Features</h3>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ideal For</h3>
                <div className="flex flex-wrap gap-2">
                  {type.idealFor.map((item, i) => (
                    <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Price Range</h3>
                  <p className="text-gray-600">{type.priceRange}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">Available</h3>
                  <p className="text-gray-600">{type.count} Properties</p>
                </div>
              </div>

              <Link href={`/properties?type=${type.id}`} className="btn-primary inline-block">
                View {type.name}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-blue-900 text-white p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Not Sure Which Property Type Is Right For You?</h2>
        <p className="mb-6">
          Our real estate experts can help you understand the pros and cons of each property type based on your specific
          requirements, budget, and long-term goals.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Get Expert Advice
        </Link>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Which property type offers the best investment returns in Jaipur?
            </h3>
            <p className="text-gray-600">
              The investment potential varies depending on the location, market conditions, and specific property
              features. Generally, apartments in developing areas like Jagatpura offer good returns due to their
              affordability and growing demand. Commercial properties in established business districts also provide
              attractive rental yields.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Are villas more expensive to maintain than apartments?
            </h3>
            <p className="text-gray-600">
              Yes, villas typically have higher maintenance costs compared to apartments. With a villa, you're
              responsible for maintaining the entire property, including the garden, exterior, and all systems.
              Apartments, on the other hand, share maintenance costs among all residents, making them more economical in
              terms of upkeep.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Is buying a plot and constructing a house more cost-effective than buying a ready-to-move property?
            </h3>
            <p className="text-gray-600">
              Building your own house on a plot can be more cost-effective in some cases, especially if you have
              specific design requirements. However, it requires more time, effort, and expertise in managing the
              construction process. Ready-to-move properties offer convenience and immediate possession, which might be
              valuable depending on your situation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              What are the advantages of investing in commercial properties?
            </h3>
            <p className="text-gray-600">
              Commercial properties typically offer higher rental yields compared to residential properties. They also
              come with longer lease terms, providing stable income. However, they require larger initial investments
              and might have longer vacancy periods between tenants.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
