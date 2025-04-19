import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Real Estate Blog | JaipurHomes",
  description:
    "Stay updated with the latest real estate trends, market insights, and property buying tips in Jaipur. Expert advice for homebuyers, sellers, and investors.",
  keywords:
    "real estate blog, property tips, Jaipur real estate market, investment advice, home buying guide, property trends",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Residential Areas in Jaipur for Investment",
      excerpt:
        "Discover the best areas in Jaipur to invest in real estate for maximum returns. We analyze growth potential, infrastructure development, and price trends.",
      date: "May 15, 2023",
      author: "Rahul Sharma",
      category: "Investment",
      image: "/placeholder.svg?height=300&width=500&text=Investment+Areas",
    },
    {
      id: 2,
      title: "Guide to Home Loans in Rajasthan",
      excerpt:
        "Everything you need to know about getting a home loan in Rajasthan. Learn about eligibility criteria, documentation, interest rates, and government subsidies.",
      date: "April 28, 2023",
      author: "Priya Patel",
      category: "Finance",
      image: "/placeholder.svg?height=300&width=500&text=Home+Loans",
    },
    {
      id: 3,
      title: "Jagatpura: The Rising Star of Jaipur Real Estate",
      excerpt:
        "Why Jagatpura is becoming the most sought-after location for homebuyers in Jaipur. Explore the infrastructure, connectivity, and lifestyle options.",
      date: "April 10, 2023",
      author: "Amit Verma",
      category: "Market Trends",
      image: "/placeholder.svg?height=300&width=500&text=Jagatpura+Growth",
    },
    {
      id: 4,
      title: "5 Things to Check Before Buying a Property",
      excerpt:
        "Essential checklist for property buyers to avoid common pitfalls. From legal verification to construction quality, make sure you cover all bases.",
      date: "March 22, 2023",
      author: "Neha Singh",
      category: "Buying Tips",
      image: "/placeholder.svg?height=300&width=500&text=Property+Checklist",
    },
    {
      id: 5,
      title: "Understanding RERA and Its Impact on Jaipur Real Estate",
      excerpt:
        "How the Real Estate Regulatory Authority has transformed the property market in Jaipur. Know your rights as a buyer under RERA.",
      date: "March 5, 2023",
      author: "Rahul Sharma",
      category: "Legal",
      image: "/placeholder.svg?height=300&width=500&text=RERA+Impact",
    },
    {
      id: 6,
      title: "Vastu Tips for Your New Home",
      excerpt:
        "Incorporate these Vastu principles when buying or designing your new home for harmony, prosperity, and positive energy.",
      date: "February 18, 2023",
      author: "Priya Patel",
      category: "Lifestyle",
      image: "/placeholder.svg?height=300&width=500&text=Vastu+Tips",
    },
  ]

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Investment", count: blogPosts.filter((post) => post.category === "Investment").length },
    { name: "Finance", count: blogPosts.filter((post) => post.category === "Finance").length },
    { name: "Market Trends", count: blogPosts.filter((post) => post.category === "Market Trends").length },
    { name: "Buying Tips", count: blogPosts.filter((post) => post.category === "Buying Tips").length },
    { name: "Legal", count: blogPosts.filter((post) => post.category === "Legal").length },
    { name: "Lifestyle", count: blogPosts.filter((post) => post.category === "Lifestyle").length },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Real Estate Insights</h1>
      <p className="text-xl text-gray-600 mb-8">
        Stay updated with the latest trends and expert advice in Jaipur real estate
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="card group">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">
                    {post.date} • By {post.author}
                  </p>
                  <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-red-600 font-semibold group-hover:text-red-700">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:w-1/4">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={
                      category.name === "All"
                        ? "/blog"
                        : `/blog?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="flex justify-between items-center text-gray-600 hover:text-red-600"
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-4">
              Get the latest real estate insights and market updates delivered to your inbox.
            </p>
            <form>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
              </div>
              <button type="submit" className="btn-primary w-full">
                Subscribe
              </button>
            </form>
          </div>

          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need Expert Advice?</h2>
            <p className="mb-4">
              Our real estate consultants can help you make informed decisions about property investment in Jaipur.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-2 px-4 rounded block text-center transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
