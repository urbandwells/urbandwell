"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function SearchSection() {
  const router = useRouter()
  const [searchParams, setSearchParams] = useState({
    type: "all",
    location: "jagatpura",
    minPrice: "",
    maxPrice: "",
    bedrooms: "any",
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setSearchParams((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (searchParams.type !== "all") params.append("type", searchParams.type)
    if (searchParams.location !== "jagatpura") params.append("location", searchParams.location)
    if (searchParams.minPrice) params.append("minPrice", searchParams.minPrice)
    if (searchParams.maxPrice) params.append("maxPrice", searchParams.maxPrice)
    if (searchParams.bedrooms !== "any") params.append("bedrooms", searchParams.bedrooms)

    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="bg-white shadow-lg rounded-lg -mt-20 relative z-20 mx-4 lg:mx-auto max-w-6xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Your Perfect Property</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label htmlFor="type" className="block text-gray-700 mb-2">
                Property Type
              </label>
              <select
                id="type"
                name="type"
                value={searchParams.type}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              >
                <option value="all">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-gray-700 mb-2">
                Location
              </label>
              <select
                id="location"
                name="location"
                value={searchParams.location}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              >
                <option value="jagatpura">Jagatpura</option>
                <option value="malviya-nagar">Malviya Nagar</option>
                <option value="mansarovar">Mansarovar</option>
                <option value="vaishali-nagar">Vaishali Nagar</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-gray-700 mb-2">
                Price Range
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  name="minPrice"
                  value={searchParams.minPrice}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  name="maxPrice"
                  value={searchParams.maxPrice}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
            </div>

            <div>
              <label htmlFor="bedrooms" className="block text-gray-700 mb-2">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={searchParams.bedrooms}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              >
                <option value="any">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div className="flex items-end">
              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                <Search className="mr-2 h-5 w-5" />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
