import Image from "next/image"

export const metadata = {
  title: "About Us | JaipurHomes",
  description:
    "Learn about JaipurHomes, the leading real estate agency in Jagatpura, Jaipur. Our mission, vision, and team of expert real estate professionals.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">About JaipurHomes</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, JaipurHomes has established itself as the premier real estate agency in Jagatpura, Jaipur.
            What started as a small family business has grown into a trusted name in the real estate market, known for
            our integrity, expertise, and commitment to client satisfaction.
          </p>
          <p className="text-gray-600 mb-4">
            Over the years, we have helped thousands of families find their dream homes and investors secure profitable
            properties. Our deep understanding of the local market and dedication to personalized service sets us apart
            from other agencies.
          </p>
          <p className="text-gray-600">
            Today, we are expanding our reach across India, bringing our expertise and customer-centric approach to new
            markets while maintaining our core values and commitment to excellence.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="JaipurHomes office" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We believe in honest communication and transparent dealings with all our clients.
            </p>
          </div>
          <div className="card p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our service, from property selection to client support.
            </p>
          </div>
          <div className="card p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
            <p className="text-gray-600">Our clients' needs and satisfaction are at the center of everything we do.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Team Member ${i}`}
                  alt={`Team member ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Team Member {i}</h3>
                <p className="text-gray-500 mb-2">Real Estate Expert</p>
                <p className="text-gray-600">
                  Specializing in residential properties with over 10 years of experience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
