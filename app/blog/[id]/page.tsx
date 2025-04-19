import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: "1",
    title: "Top 5 Residential Areas in Jaipur for Investment",
    excerpt:
      "Discover the best areas in Jaipur to invest in real estate for maximum returns. We analyze growth potential, infrastructure development, and price trends.",
    content: `
      <p>Investing in real estate is one of the most reliable ways to build wealth over time. In Jaipur, the capital city of Rajasthan, the real estate market has been witnessing steady growth, making it an attractive destination for property investors.</p>
      
      <p>If you're looking to invest in residential properties in Jaipur, here are the top 5 areas that offer excellent potential for returns:</p>
      
      <h3>1. Jagatpura</h3>
      
      <p>Jagatpura has emerged as one of the most promising areas for real estate investment in Jaipur. Located in the southern part of the city, it offers excellent connectivity to major business hubs, educational institutions, and healthcare facilities.</p>
      
      <p>Key investment factors:</p>
      <ul>
        <li>Proximity to Jaipur International Airport</li>
        <li>Developing IT and business hubs</li>
        <li>Good educational institutions</li>
        <li>Modern residential complexes</li>
        <li>Excellent appreciation potential</li>
      </ul>
      
      <p>Average property prices in Jagatpura range from ₹3,500 to ₹5,000 per square foot, with an annual appreciation rate of 8-10%.</p>
      
      <h3>2. Malviya Nagar</h3>
      
      <p>Malviya Nagar is one of the most well-established and sought-after residential areas in Jaipur. It offers a perfect mix of residential and commercial properties, making it ideal for both end-users and investors.</p>
      
      <p>Key investment factors:</p>
      <ul>
        <li>Central location</li>
        <li>Excellent connectivity</li>
        <li>Premium educational institutions</li>
        <li>Top healthcare facilities</li>
        <li>Vibrant shopping areas</li>
      </ul>
      
      <p>Average property prices in Malviya Nagar range from ₹4,500 to ₹7,000 per square foot, with an annual appreciation rate of 6-8%.</p>
      
      <h3>3. Mansarovar</h3>
      
      <p>Mansarovar is one of the largest and most well-planned residential areas in Jaipur. Developed by the Jaipur Development Authority (JDA), this locality is known for its organized layout, wide roads, and abundant green spaces.</p>
      
      <p>Key investment factors:</p>
      <ul>
        <li>Well-planned layout</li>
        <li>Wide roads and green spaces</li>
        <li>Good connectivity</li>
        <li>Quality educational institutions</li>
        <li>Modern healthcare facilities</li>
      </ul>
      
      <p>Average property prices in Mansarovar range from ₹3,800 to ₹5,500 per square foot, with an annual appreciation rate of 7-9%.</p>
      
      <h3>4. Vaishali Nagar</h3>
      
      <p>Vaishali Nagar is a vibrant and self-sufficient residential area in the western part of Jaipur. It offers a wide range of amenities and is popular among families and professionals.</p>
      
      <p>Key investment factors:</p>
      <ul>
        <li>Self-sufficient neighborhood</li>
        <li>Excellent connectivity</li>
        <li>Vibrant commercial areas</li>
        <li>Quality educational institutions</li>
        <li>Modern healthcare facilities</li>
      </ul>
      
      <p>Average property prices in Vaishali Nagar range from ₹4,000 to ₹6,000 per square foot, with an annual appreciation rate of 6-8%.</p>
      
      <h3>5. Tonk Road</h3>
      
      <p>Tonk Road is a rapidly developing corridor in Jaipur that has seen significant real estate growth in recent years. It offers a mix of residential and commercial properties and is known for its excellent connectivity.</p>
      
      <p>Key investment factors:</p>
      <ul>
        <li>Strategic location</li>
        <li>Excellent connectivity</li>
        <li>Upcoming infrastructure projects</li>
        <li>Mix of affordable and premium properties</li>
        <li>High rental demand</li>
      </ul>
      
      <p>Average property prices on Tonk Road range from ₹3,200 to ₹6,500 per square foot, with an annual appreciation rate of 9-12% in developing areas.</p>
      
      <h3>Conclusion</h3>
      
      <p>When investing in real estate in Jaipur, it's essential to consider factors like location, infrastructure development, connectivity, amenities, and future growth potential. The areas mentioned above offer a good balance of these factors and are likely to provide attractive returns on investment in the coming years.</p>
      
      <p>At JaipurHomes, we can help you identify the best investment opportunities in these areas based on your budget and investment goals. Contact our real estate experts for personalized advice and assistance.</p>
    `,
    date: "May 15, 2023",
    author: "Rahul Sharma",
    authorTitle: "Senior Real Estate Consultant",
    authorBio:
      "Rahul has over 15 years of experience in the Jaipur real estate market and specializes in investment properties.",
    authorImage: "/placeholder.svg?height=100&width=100&text=RS",
    category: "Investment",
    tags: ["Investment", "Residential", "Property Market", "Jaipur", "Real Estate"],
    image: "/placeholder.svg?height=600&width=1200&text=Investment+Areas",
    relatedPosts: [3, 5, 6],
  },
  {
    id: "2",
    title: "Guide to Home Loans in Rajasthan",
    excerpt:
      "Everything you need to know about getting a home loan in Rajasthan. Learn about eligibility criteria, documentation, interest rates, and government subsidies.",
    content: `
      <p>Buying a home is a significant financial decision, and most people rely on home loans to fulfill their dream of homeownership. In Rajasthan, various banks and financial institutions offer home loans with different terms and conditions.</p>
      
      <p>This comprehensive guide will help you understand the home loan process in Rajasthan and make an informed decision.</p>
      
      <h3>Eligibility Criteria for Home Loans in Rajasthan</h3>
      
      <p>The eligibility criteria for home loans may vary slightly from one lender to another, but the general requirements include:</p>
      
      <ul>
        <li><strong>Age:</strong> 21 to 65 years</li>
        <li><strong>Income:</strong> Stable source of income (salaried or self-employed)</li>
        <li><strong>Credit Score:</strong> Minimum 650 (higher scores get better interest rates)</li>
        <li><strong>Employment Stability:</strong> At least 2 years of work experience</li>
        <li><strong>Property:</strong> The property should be legally approved and have clear title deeds</li>
      </ul>
      
      <h3>Documentation Required for Home Loans</h3>
      
      <p>When applying for a home loan in Rajasthan, you'll need to submit the following documents:</p>
      
      <ul>
        <li><strong>Identity Proof:</strong> Aadhaar Card, PAN Card, Passport, Voter ID</li>
        <li><strong>Address Proof:</strong> Aadhaar Card, Passport, Utility Bills</li>
        <li><strong>Income Proof:</strong> Salary Slips, Form 16, Income Tax Returns, Bank Statements</li>
        <li><strong>Property Documents:</strong> Sale Deed, Approved Plan, NOC, Property Tax Receipts</li>
        <li><strong>Passport-sized Photographs</strong></li>
      </ul>
      
      <h3>Types of Home Loans Available in Rajasthan</h3>
      
      <p>Various types of home loans are available to cater to different needs:</p>
      
      <ul>
        <li><strong>Home Purchase Loan:</strong> For buying a new or resale property</li>
        <li><strong>Home Construction Loan:</strong> For constructing a house on a plot you own</li>
        <li><strong>Home Extension Loan:</strong> For adding rooms or floors to an existing house</li>
        <li><strong>Home Renovation Loan:</strong> For renovating or repairing an existing house</li>
        <li><strong>Land Purchase Loan:</strong> For buying a plot for future construction</li>
        <li><strong>Balance Transfer Loan:</strong> For transferring an existing home loan to another lender at a lower interest rate</li>
      </ul>
      
      <h3>Interest Rates and Loan Amount</h3>
      
      <p>Home loan interest rates in Rajasthan typically range from 6.50% to 9.00% per annum, depending on the lender, loan amount, tenure, and your credit profile. Most banks offer up to 80% of the property value as a loan, with a repayment tenure of up to 30 years.</p>
      
      <p>The loan amount you're eligible for depends on your income, existing financial obligations, age, and the property's value. Most lenders use the EMI-to-Income ratio method, where your EMI should not exceed 40-50% of your monthly income.</p>
      
      <h3>Government Subsidies and Schemes</h3>
      
      <p>The government offers various subsidies and schemes to make home loans more affordable:</p>
      
      <ul>
        <li><strong>Pradhan Mantri Awas Yojana (PMAY):</strong> Offers interest subsidies of up to ₹2.67 lakhs for first-time homebuyers from economically weaker sections and low/middle-income groups</li>
        <li><strong>Credit Linked Subsidy Scheme (CLSS):</strong> Provides interest subsidies on home loans for specific income categories</li>
        <li><strong>Rajasthan Housing Board Schemes:</strong> Offers affordable housing options with subsidized rates</li>
      </ul>
      
      <h3>Home Loan Process in Rajasthan</h3>
      
      <p>The home loan process typically involves the following steps:</p>
      
      <ol>
        <li><strong>Pre-approval:</strong> Get an in-principle approval based on your income and credit profile</li>
        <li><strong>Property Selection:</strong> Choose a property that meets your requirements and budget</li>
        <li><strong>Loan Application:</strong> Submit the loan application form along with the required documents</li>
        <li><strong>Property Verification:</strong> The lender will verify the property documents and assess its value</li>
        <li><strong>Technical and Legal Verification:</strong> The lender will conduct technical and legal checks on the property</li>
        <li><strong>Loan Approval:</strong> Once all verifications are complete, the loan is approved</li>
        <li><strong>Loan Agreement:</strong> Sign the loan agreement and other related documents</li>
        <li><strong>Disbursement:</strong> The loan amount is disbursed to the seller or builder</li>
      </ol>
      
      <h3>Tips for Getting the Best Home Loan in Rajasthan</h3>
      
      <ul>
        <li>Maintain a good credit score (above 750) to get the best interest rates</li>
        <li>Compare offers from multiple lenders before making a decision</li>
        <li>Check for hidden charges and fees</li>
        <li>Opt for a longer tenure to reduce the EMI burden, but be aware that you'll pay more interest in the long run</li>
        <li>Consider making a larger down payment to reduce the loan amount and interest outgo</li>
        <li>Check your eligibility for government subsidies and schemes</li>
        <li>Read the loan agreement carefully before signing</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Getting a home loan in Rajasthan is a straightforward process if you have all the necessary documents and meet the eligibility criteria. By understanding the process and comparing offers from different lenders, you can secure a home loan with favorable terms and fulfill your dream of homeownership.</p>
      
      <p>At JaipurHomes, we can help you navigate the home loan process and connect you with our banking partners for the best deals. Contact our financial advisors for personalized assistance.</p>
    `,
    date: "April 28, 2023",
    author: "Priya Patel",
    authorTitle: "Financial Advisor",
    authorBio:
      "Priya specializes in real estate financing and has helped hundreds of clients secure the best home loan deals.",
    authorImage: "/placeholder.svg?height=100&width=100&text=PP",
    category: "Finance",
    tags: ["Home Loan", "Finance", "PMAY", "Interest Rates", "Property Purchase"],
    image: "/placeholder.svg?height=600&width=1200&text=Home+Loans",
    relatedPosts: [1, 4, 5],
  },
  {
    id: "3",
    title: "Jagatpura: The Rising Star of Jaipur Real Estate",
    excerpt:
      "Why Jagatpura is becoming the most sought-after location for homebuyers in Jaipur. Explore the infrastructure, connectivity, and lifestyle options.",
    content: `
      <p>Jagatpura has emerged as one of the most promising real estate destinations in Jaipur in recent years. Located in the southern part of the city, this area has witnessed significant development and is now a preferred choice for homebuyers and investors alike.</p>
      
      <p>Let's explore what makes Jagatpura the rising star of Jaipur's real estate market.</p>
      
      <h3>Strategic Location and Connectivity</h3>
      
      <p>Jagatpura's strategic location is one of its biggest advantages. It is situated close to:</p>
      
      <ul>
        <li>Jaipur International Airport (approximately 15 km)</li>
        <li>Jaipur Railway Station (approximately 12 km)</li>
        <li>Major highways like Tonk Road and Ring Road</li>
        <li>Educational institutions like Manipal University and JECRC University</li>
        <li>Healthcare facilities like Fortis Hospital and CK Birla Hospital</li>
      </ul>
      
      <p>The area is well-connected to other parts of the city through public transportation and has easy access to major business hubs, making it ideal for working professionals.</p>
      
      <h3>Infrastructure Development</h3>
      
      <p>Jagatpura has seen significant infrastructure development in recent years, including:</p>
      
      <ul>
        <li>Wide, well-maintained roads</li>
        <li>Underground electricity cables</li>
        <li>Proper water supply and drainage systems</li>
        <li>Street lighting and landscaped areas</li>
        <li>Parks and recreational spaces</li>
      </ul>
      
      <p>The Jaipur Development Authority (JDA) has been actively involved in the area's development, ensuring planned growth and modern infrastructure.</p>
      
      <h3>Real Estate Growth</h3>
      
      <p>The real estate market in Jagatpura has been witnessing steady growth, with property prices appreciating at an annual rate of 8-10%. Several factors contribute to this growth:</p>
      
      <ul>
        <li>Increasing demand from end-users and investors</li>
        <li>Development of premium residential projects</li>
        <li>Entry of reputed developers</li>
        <li>Availability of various property types (apartments, villas, plots)</li>
        <li>Relatively affordable prices compared to other prime locations in Jaipur</li>
      </ul>
      
      <p>The area offers properties across different budget ranges, making it accessible to various segments of homebuyers.</p>
      
      <h3>Educational Institutions</h3>
      
      <p>Jagatpura is home to several prestigious educational institutions, making it an ideal location for families with children:</p>
      
      <ul>
        <li>Manipal University</li>
        <li>JECRC University</li>
        <li>St. Xavier's School</li>
        <li>Delhi Public School</li>
        <li>Ryan International School</li>
      </ul>
      
      <p>The presence of these institutions has increased the demand for residential properties in the area, particularly among families who prioritize education.</p>
      
      <h3>Healthcare Facilities</h3>
      
      <p>Access to quality healthcare is another advantage of living in Jagatpura. The area has several hospitals and medical centers, including:</p>
      
      <ul>
        <li>Fortis Hospital</li>
        <li>CK Birla Hospital</li>
        <li>Apex Hospital</li>
        <li>Various specialized clinics and diagnostic centers</li>
      </ul>
      
      <p>These healthcare facilities ensure that residents have access to medical care whenever needed.</p>
      
      <h3>Commercial Development</h3>
      
      <p>Along with residential growth, Jagatpura has also seen significant commercial development:</p>
      
      <ul>
        <li>Shopping complexes and malls</li>
        <li>Restaurants and cafes</li>
        <li>Banks and ATMs</li>
        <li>Entertainment venues</li>
        <li>Office spaces and business centers</li>
      </ul>
      
      <p>This commercial development has created a self-sufficient neighborhood where residents can find everything they need within easy reach.</p>
      
      <h3>Lifestyle and Amenities</h3>
      
      <p>Modern residential projects in Jagatpura offer a range of lifestyle amenities:</p>
      
      <ul>
        <li>Swimming pools</li>
        <li>Gymnasiums and fitness centers</li>
        <li>Clubhouses and community halls</li>
        <li>Sports facilities (tennis courts, badminton courts, etc.)</li>
        <li>Children's play areas</li>
        <li>Landscaped gardens and walking tracks</li>
        <li>24/7 security and power backup</li>
      </ul>
      
      <p>These amenities enhance the quality of life for residents and make Jagatpura an attractive destination for those seeking a modern lifestyle.</p>
      
      <h3>Future Prospects</h3>
      
      <p>The future looks promising for Jagatpura, with several upcoming developments:</p>
      
      <ul>
        <li>Extension of the Ring Road, which will further improve connectivity</li>
        <li>Planned metro connectivity</li>
        <li>Development of IT and business parks</li>
        <li>More educational institutions and healthcare facilities</li>
        <li>Expansion of commercial areas</li>
      </ul>
      
      <p>These developments are expected to drive further growth in the real estate market and increase property values in the coming years.</p>
      
      <h3>Conclusion</h3>
      
      <p>Jagatpura's strategic location, excellent connectivity, modern infrastructure, educational institutions, healthcare facilities, and lifestyle amenities make it a preferred choice for homebuyers and investors in Jaipur. The area offers a perfect blend of urban convenience and peaceful living, making it ideal for families, professionals, and investors alike.</p>
      
      <p>If you're looking to buy a property in Jaipur, Jagatpura should definitely be on your radar. At JaipurHomes, we offer a wide range of properties in Jagatpura to suit different preferences and budgets. Contact our real estate experts to explore your options and make an informed decision.</p>
    `,
    date: "April 10, 2023",
    author: "Amit Verma",
    authorTitle: "Real Estate Analyst",
    authorBio:
      "Amit has been analyzing the Jaipur real estate market for over a decade and provides valuable insights to investors and homebuyers.",
    authorImage: "/placeholder.svg?height=100&width=100&text=AV",
    category: "Market Trends",
    tags: ["Jagatpura", "Property Market", "Investment", "Infrastructure", "Jaipur"],
    image: "/placeholder.svg?height=600&width=1200&text=Jagatpura+Growth",
    relatedPosts: [1, 4, 6],
  },
]

export function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return {
      title: "Blog Post Not Found | JaipurHomes",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | JaipurHomes Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Blog Post Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The blog post you are looking for does not exist or has been removed.
        </p>
        <Link href="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    )
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    .map((id) => blogPosts.find((post) => post.id === id.toString()))
    .filter(Boolean) as typeof blogPosts

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>{" "}
          {" / "}
          <Link href="/blog" className="hover:text-red-600">
            Blog
          </Link>{" "}
          {" / "}
          <span className="text-gray-700">{post.title}</span>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>

          <div className="flex flex-wrap items-center text-gray-500 gap-4 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              <Link
                href={`/blog?category=${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-red-600"
              >
                {post.category}
              </Link>
            </div>
          </div>

          <p className="text-xl text-gray-600">{post.excerpt}</p>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2 text-gray-800">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2 text-gray-800">Share This Post</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <div className="flex items-start">
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{post.author}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.authorTitle}</p>
              <p className="text-gray-600">{post.authorBio}</p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="card group">
                  <div className="relative h-40">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-sm mb-1">{relatedPost.date}</p>
                    <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                      {relatedPost.title}
                    </h4>
                    <span className="text-red-600 font-semibold text-sm group-hover:text-red-700">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
