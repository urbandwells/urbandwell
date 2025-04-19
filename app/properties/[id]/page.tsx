import PropertyGallery from "@/components/property-gallery"
import PropertyDetails from "@/components/property-details"
import PropertyAmenities from "@/components/property-amenities"
import PropertyLocation from "@/components/property-location"
import ContactAgent from "@/components/contact-agent"
import SimilarProperties from "@/components/similar-properties"
import StructuredData from "@/components/structured-data"
import { properties } from "@/data/properties"

export function generateMetadata({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id) || properties[0]

  return {
    title: `${property.title} | JaipurHomes`,
    description: property.description.substring(0, 160),
    keywords: `${property.type.toLowerCase()}, ${property.location}, ${property.bedrooms} BHK, property for ${property.status.toLowerCase()}, real estate`,
    openGraph: {
      images: [property.images[0]],
      title: property.title,
      description: property.description.substring(0, 160),
      type: "website",
    },
  }
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the property data based on the ID
  const property = properties.find((p) => p.id === params.id) || properties[0]

  // Structured data for real estate listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    image: property.images,
    url: `https://jaipurhomes.com/properties/${property.id}`,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location.split(",")[0].trim(),
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    numberOfRooms: property.bedrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "SQF",
    },
    amenityFeature: property.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
  }

  return (
    <>
      <StructuredData data={structuredData} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">{property.title}</h1>
            <p className="text-gray-600 mb-4">{property.location}</p>

            <PropertyGallery images={property.images} />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500">Price</p>
                <p className="text-2xl font-bold text-red-600">₹{property.price.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500">Area</p>
                <p className="text-2xl font-bold">{property.area} sq.ft.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500">Type</p>
                <p className="text-2xl font-bold">{property.type}</p>
              </div>
            </div>

            <PropertyDetails property={property} />
            <PropertyAmenities amenities={property.amenities} />
            <PropertyLocation location={property.location} />
          </div>

          <div className="lg:col-span-1">
            <ContactAgent agent={property.agent} />

            <div className="card mt-8 p-6">
              <h3 className="text-xl font-bold mb-4">Schedule a Visit</h3>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
                </div>
                <div className="mb-4">
                  <input type="tel" placeholder="Your Phone" className="w-full p-3 border rounded" />
                </div>
                <div className="mb-4">
                  <input type="date" className="w-full p-3 border rounded" />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Schedule Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <SimilarProperties currentPropertyId={property.id} />
      </div>
    </>
  )
}
