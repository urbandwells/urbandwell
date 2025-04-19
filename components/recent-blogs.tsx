import Link from "next/link"
import Image from "next/image"

export default function RecentBlogs() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Residential Areas in Jaipur for Investment",
      excerpt: "Discover the best areas in Jaipur to invest in real estate for maximum returns.",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=300&width=500&text=Investment+Areas",
    },
    {
      id: 2,
      title: "Guide to Home Loans in Rajasthan",
      excerpt: "Everything you need to know about getting a home loan in Rajasthan.",
      date: "April 28, 2023",
      image: "/placeholder.svg?height=300&width=500&text=Home+Loans",
    },
    {
      id: 3,
      title: "Jagatpura: The Rising Star of Jaipur Real Estate",
      excerpt: "Why Jagatpura is becoming the most sought-after location for homebuyers in Jaipur.",
      date: "April 10, 2023",
      image: "/placeholder.svg?height=300&width=500&text=Jagatpura+Growth",
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">Real Estate Insights</h2>
          <Link href="/blog" className="text-red-600 hover:text-red-700 font-semibold">
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="card overflow-hidden">
              <div className="relative h-48">
                <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  <Link href={`/blog/${blog.id}`} className="hover:text-red-600 transition-colors duration-300">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link href={`/blog/${blog.id}`} className="text-red-600 hover:text-red-700 font-semibold">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
