import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-blue-100">
            Comprehensive home inspection services for every property need
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                title: "General Home Inspection",
                description:
                  "A comprehensive examination of the home's major systems and components, including structural elements, roof, exterior, plumbing, electrical, HVAC, and interior.",
                includes: [
                  "Structural assessment",
                  "Roof inspection",
                  "Foundation check",
                  "Electrical systems",
                  "Plumbing systems",
                  "HVAC systems",
                ],
              },
              {
                title: "Foundation & Structural",
                description:
                  "Detailed inspection of the home's foundation, structural integrity, and any signs of settling, cracks, or damage.",
                includes: [
                  "Foundation cracks",
                  "Water damage detection",
                  "Structural integrity",
                  "Settlement assessment",
                  "Basement evaluation",
                ],
              },
              {
                title: "Electrical Systems",
                description:
                  "Complete inspection of electrical wiring, panels, outlets, and safety features.",
                includes: [
                  "Panel inspection",
                  "Wiring assessment",
                  "Outlet testing",
                  "Safety evaluations",
                  "Code compliance check",
                ],
              },
              {
                title: "Plumbing Systems",
                description:
                  "Thorough evaluation of water supply, drainage systems, and fixtures.",
                includes: [
                  "Water pressure test",
                  "Drain system check",
                  "Pipe condition",
                  "Leak detection",
                  "Fixture inspection",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="border-b pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Roof Inspection",
                description:
                  "Professional roof assessment including shingles, flashing, gutters, and overall condition.",
              },
              {
                title: "HVAC Systems",
                description:
                  "Complete heating and cooling system evaluation and functionality assessment.",
              },
              {
                title: "Water Damage Detection",
                description:
                  "Advanced moisture detection and water damage assessment using thermal imaging.",
              },
              {
                title: "Pest Inspection",
                description:
                  "Inspection for termites, rodents, and other pest damage or infestation signs.",
              },
              {
                title: "Thermal Imaging",
                description:
                  "Infrared technology to detect hidden issues like insulation gaps and leaks.",
              },
              {
                title: "Mold Assessment",
                description:
                  "Professional evaluation of potential mold and moisture problems.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Schedule",
                description: "Contact us and schedule your inspection at a convenient time",
              },
              {
                step: "2",
                title: "Inspect",
                description: "Our certified inspectors conduct a thorough property examination",
              },
              {
                step: "3",
                title: "Report",
                description: "Receive a detailed report with findings and recommendations",
              },
              {
                step: "4",
                title: "Support",
                description: "We're available to answer questions about your inspection",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-900 to-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
