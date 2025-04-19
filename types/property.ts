export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  type: string
  status: string
  bedrooms: number
  bathrooms: number
  area: number
  yearBuilt: number | null
  furnishing: string | null
  floor: string | null
  garage: string | null
  images: string[]
  amenities: string[]
  agent: {
    name: string
    image: string
    phone: string
    email: string
  }
}
