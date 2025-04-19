import PropertyFilters from "@/components/property-filters"
import PropertyCard from "@/components/property-card"
import Pagination from "@/components/pagination"
import { properties } from "@/data/properties"
import StructuredData from "@/components/structured-data"

export const metadata = {
  title: "Property Listings | JaipurHomes",
  description:
    "Browse our extensive collection of properties in Jagatpura, Jaipur. Filter by type, price, and amenities to find your perfect home.",
  keywords:
    "property listings, Jaipur real estate, buy property in Jaipur, rent property in Jaipur, Jagatpura properties",
}

export default function PropertiesPage() {
  // Structured data for real estate listings
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: properties.slice(0, 10).map((property, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "RealEstateListing",
        name: property.title,
        description: property.description.substring(0, 200) + "...",
        image: property.images[0],
        url: `https://jaipurhomes.com/properties/${property.id}`,
        offers: {
          "@type": "Offer",
          price: property.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        numberOfRooms: property.bedrooms,
        floorSize: {
          "@type": "QuantitativeValue",
          value: property.area,
          unitCode: "SQF",
        },
      },
    })),
  }

  return (
    <>
      <StructuredData data={structuredData} />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Property Listings in Jagatpura, Jaipur</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <PropertyFilters />
          </div>

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{properties.length} properties found</p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-gray-600">
                  Sort by:
                </label>
                <select id="sort" className="border rounded p-2">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <Pagination totalPages={5} currentPage={1} />
          </div>
        </div>
      </div>
    </>
  )
}
