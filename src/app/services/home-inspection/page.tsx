import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* ponytail: solid industrial colors, heavy borders, bold caps */}
      <section className="bg-slate-900 text-white py-24 border-b-8 border-construction-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Flat Evaluation</h1>
          <p className="text-xl text-blue-900 font-medium max-w-2xl">
            Comprehensive flat evaluation and inspection solutions
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                title: "General Flat Evaluation",
                image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800",
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
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
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
                image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
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
                image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800",
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
              <div key={index} className="border-b border-steel-gray/20 pb-12 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                    <h3 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-blue-900 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-construction-orange shrink-0" />
                          <span className="text-blue-900 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`border-4 border-slate-900 overflow-hidden h-72 md:h-[400px] ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale-[20%]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Water Damage Detection",
                image: "/assets/water-damage.webp",
                description:
                  "Advanced moisture detection and water damage assessment using thermal imaging.",
              },
              {
                title: "Pest Inspection",
                image: "/assets/pest-inspection.webp",
                description:
                  "Inspection for termites, rodents, and other pest damage or infestation signs.",
              },
              {
                title: "Foundation Assessment",
                image: "/assets/foundation-assessment.webp",
                description:
                  "Professional evaluation of foundation integrity and structural health.",
              },
              {
                title: "Interior Solutions",
                image: "/assets/interior-solutions.webp",
                description:
                  "Complete interior planning and design consultancy for optimal space utilization.",
              },
              {
                title: "Safety Compliance",
                image: "/assets/safety-compliance.webp",
                description:
                  "Verification of safety standards and compliance with building regulations.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white border-2 border-slate-300 overflow-hidden hover:border-construction-orange hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col group rounded-none">
                {/* ponytail: auto-height so image text isn't cropped */}
                <div className="w-full overflow-hidden border-b border-gray-100">
                  <img src={service.image} alt={service.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-headline-md text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                  <p className="font-body-md text-blue-900 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Process</h2>
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
                <div className="w-16 h-16 bg-construction-orange text-white border-4 border-slate-900 rounded-none flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-blue-900">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
