import { properties } from "@/data/properties"

// Add dynamic = "force-static" for static export
export const dynamic = "force-static"

// Add generateStaticParams function for static export
export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }))
}

// Rest of your component code...
// This is a placeholder since we don't have the full content of this file
// In a real scenario, you would add the complete component code here
export default function PropertyPage({ params }: { params: { id: string } }) {
  return <div>Property {params.id} details would be displayed here</div>
}
