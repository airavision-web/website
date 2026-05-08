export default function Blog() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-lg text-blue-100">
            Tips, insights, and guides for homeowners
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                title: "10 Critical Items to Check Before Buying a Home",
                date: "May 1, 2026",
                category: "Buyer's Guide",
                excerpt:
                  "Learn about the most important things to inspect when purchasing a home. This comprehensive guide covers structural, electrical, plumbing, and more.",
              },
              {
                title: "Understanding Your Inspection Report",
                date: "April 25, 2026",
                category: "Reports",
                excerpt:
                  "A detailed breakdown of what each section of your home inspection report means and how to use it to make informed decisions.",
              },
              {
                title: "Seasonal Maintenance Tips for Homeowners",
                date: "April 18, 2026",
                category: "Maintenance",
                excerpt:
                  "Discover the essential maintenance tasks you should perform each season to keep your home in top condition.",
              },
              {
                title: "Signs Your Home Needs Structural Repair",
                date: "April 10, 2026",
                category: "Safety",
                excerpt:
                  "Identify warning signs that indicate your home may have structural issues that need professional attention.",
              },
              {
                title: "How to Prepare Your Home for Inspection",
                date: "April 3, 2026",
                category: "Preparation",
                excerpt:
                  "Get tips on how to prepare your home before an inspection to ensure we can access all areas properly.",
              },
              {
                title: "The Importance of Professional Home Inspections",
                date: "March 27, 2026",
                category: "Education",
                excerpt:
                  "Learn why hiring a professional home inspector is one of the best investments you can make when buying property.",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="border-b pb-8 hover:shadow-lg transition p-4 rounded-lg"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-orange-600 hover:text-orange-800 font-semibold">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest home inspection tips and insights delivered to your inbox
          </p>
          <form className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-600"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
