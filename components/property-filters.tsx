"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function PropertyFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "all",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedrooms: searchParams.get("bedrooms") || "any",
    bathrooms: searchParams.get("bathrooms") || "any",
    minArea: searchParams.get("minArea") || "",
    maxArea: searchParams.get("maxArea") || "",
    amenities: {
      parking: searchParams.get("parking") === "true",
      garden: searchParams.get("garden") === "true",
      pool: searchParams.get("pool") === "true",
      gym: searchParams.get("gym") === "true",
      security: searchParams.get("security") === "true",
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement
      setFilters((prev) => ({
        ...prev,
        amenities: {
          ...prev.amenities,
          [name]: checkbox.checked,
        },
      }))
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }))
    }
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (filters.type !== "all") params.append("type", filters.type)
    if (filters.minPrice) params.append("minPrice", filters.minPrice)
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice)
    if (filters.bedrooms !== "any") params.append("bedrooms", filters.bedrooms)
    if (filters.bathrooms !== "any") params.append("bathrooms", filters.bathrooms)
    if (filters.minArea) params.append("minArea", filters.minArea)
    if (filters.maxArea) params.append("maxArea", filters.maxArea)

    Object.entries(filters.amenities).forEach(([key, value]) => {
      if (value) params.append(key, "true")
    })

    router.push(`/properties?${params.toString()}`)
  }

  const resetFilters = () => {
    setFilters({
      type: "all",
      minPrice: "",
      maxPrice: "",
      bedrooms: "any",
      bathrooms: "any",
      minArea: "",
      maxArea: "",
      amenities: {
        parking: false,
        garden: false,
        pool: false,
        gym: false,
        security: false,
      },
    })

    router.push("/properties")
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Filter Properties</h3>

      <div className="space-y-6">
        <div>
          <label htmlFor="type" className="block text-gray-700 mb-2">
            Property Type
          </label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="plot">Plot</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Price Range (₹)</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Max"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
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
            value={filters.bedrooms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label htmlFor="bathrooms" className="block text-gray-700 mb-2">
            Bathrooms
          </label>
          <select
            id="bathrooms"
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Area (sq.ft.)</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              name="minArea"
              value={filters.minArea}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Max"
              name="maxArea"
              value={filters.maxArea}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Amenities</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="parking"
                name="parking"
                checked={filters.amenities.parking}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="parking">Parking</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="garden"
                name="garden"
                checked={filters.amenities.garden}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="garden">Garden</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pool"
                name="pool"
                checked={filters.amenities.pool}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="pool">Swimming Pool</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="gym"
                name="gym"
                checked={filters.amenities.gym}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="gym">Gym</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="security"
                name="security"
                checked={filters.amenities.security}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="security">24/7 Security</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <button type="button" onClick={applyFilters} className="btn-primary">
            Apply Filters
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  )
}
