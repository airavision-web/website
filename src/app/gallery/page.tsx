export default function Gallery() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-lg text-blue-100">
            Examples of our professional inspection reports and findings
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500">Inspection Image {index + 1}</p>
                  <p className="text-sm text-gray-400 mt-2">Property Inspection</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Inspection Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Residential Homes",
                count: "200+",
              },
              {
                category: "Multi-Family Properties",
                count: "50+",
              },
              {
                category: "Commercial Buildings",
                count: "30+",
              },
              {
                category: "Properties Under Construction",
                count: "40+",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{item.count}</p>
                <p className="text-gray-600">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
