import Hero from "@/components/hero"
import FeaturedProperties from "@/components/featured-properties"
import SearchSection from "@/components/search-section"
import LocationHighlights from "@/components/location-highlights"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import PropertyTypes from "@/components/property-types"
import RecentBlogs from "@/components/recent-blogs"

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchSection />
      <FeaturedProperties />
      <PropertyTypes />
      <LocationHighlights />
      <Testimonials />
      <RecentBlogs />
      <CTASection />
    </div>
  )
}
