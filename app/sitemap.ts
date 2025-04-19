import type { MetadataRoute } from "next"
import { properties } from "@/data/properties"

// Add dynamic = "force-static" for static export
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL - replace with your actual domain in production
  const baseUrl = "https://jaipurhomes.com"

  // Get all property IDs for dynamic routes
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Get all locations for location pages
  const locations = ["jagatpura", "malviya-nagar", "mansarovar", "vaishali-nagar"]
  const locationRoutes = locations.map((location) => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Get all property types for type pages
  const propertyTypes = ["apartment", "villa", "plot", "commercial", "penthouse"]
  const typeRoutes = propertyTypes.map((type) => ({
    url: `${baseUrl}/property-types/${type}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPosts = [1, 2, 3, 4, 5, 6]
  const blogRoutes = blogPosts.map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/property-types`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  return [...staticRoutes, ...propertyRoutes, ...locationRoutes, ...typeRoutes, ...blogRoutes]
}
