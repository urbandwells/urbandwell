import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JaipurHomes | Premium Real Estate in Jagatpura, Jaipur",
  description:
    "Find your dream home in Jagatpura, Jaipur. Browse through our exclusive listings of apartments, villas, and plots with detailed information and virtual tours.",
  keywords:
    "real estate, property, Jagatpura, Jaipur, buy home, rent apartment, property listing, residential property",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jaipurhomes.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="JaipurHomes | Premium Real Estate in Jagatpura, Jaipur" />
        <meta
          property="og:description"
          content="Find your dream home in Jagatpura, Jaipur. Browse through our exclusive listings of apartments, villas, and plots."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://jaipurhomes.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
