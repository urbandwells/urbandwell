import type { MetadataRoute } from "next"

// Add dynamic = "force-static" for static export
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://jaipurhomes.com/sitemap.xml",
  }
}
