import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Pricing</h1>
          <p className="text-lg text-blue-100">
            Transparent and competitive pricing for all inspection services
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Inspection",
                price: "$299",
                description: "Perfect for smaller properties",
                features: [
                  "Home inspection up to 1000 sqft",
                  "Detailed written report",
                  "Photos and recommendations",
                  "24-hour report delivery",
                ],
              },
              {
                name: "Standard Inspection",
                price: "$399",
                description: "Most popular option",
                features: [
                  "Home inspection up to 2000 sqft",
                  "Comprehensive report with photos",
                  "Video walkthrough",
                  "Same-day report delivery",
                  "Free follow-up consultation",
                ],
                featured: true,
              },
              {
                name: "Premium Inspection",
                price: "$599",
                description: "Complete coverage",
                features: [
                  "Home inspection up to 4000 sqft",
                  "Advanced thermal imaging",
                  "Detailed video report",
                  "Same-day report delivery",
                  "Extended consultation",
                  "Moisture meter testing",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 transition ${
                  plan.featured
                    ? "bg-gradient-to-r from-slate-900 to-orange-600 text-white shadow-2xl transform scale-105"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.featured ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className={`${plan.featured ? "bg-white text-orange-600" : "bg-orange-600 text-white"} rounded-full w-5 h-5 flex items-center justify-center text-sm`}>
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    plan.featured
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pricing Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Professional certified inspectors</li>
                <li>✓ Detailed written report</li>
                <li>✓ High-quality photos</li>
                <li>✓ Professional recommendations</li>
                <li>✓ Follow-up support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Thermal Imaging: +$150</li>
                <li>Mold Assessment: +$200</li>
                <li>Pest Inspection: +$150</li>
                <li>Well & Septic: +$250</li>
                <li>Foundation Report: +$100</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
