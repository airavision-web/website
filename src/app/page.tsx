import Hero from "@/components/Hero";
import { CheckCircle, Zap, Award, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HIT Inspections?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive home inspection services with certified professionals and detailed reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Certified Professionals",
                description: "All inspectors are certified and highly trained in their field",
              },
              {
                icon: Zap,
                title: "Modern Equipment",
                description: "We use the latest technology for accurate inspections",
              },
              {
                icon: Award,
                title: "Quality Assured",
                description: "Guaranteed quality reports and detailed findings",
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                description: "Fast and efficient service without compromising quality",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <feature.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive inspection services covering all aspects of your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Inspection",
                description: "Complete structural assessment of foundation, walls, and roof",
              },
              {
                title: "Electrical Systems",
                description: "Thorough inspection of electrical wiring and safety",
              },
              {
                title: "Plumbing Systems",
                description: "Complete plumbing assessment and leak detection",
              },
              {
                title: "HVAC Systems",
                description: "Heating and cooling system evaluation",
              },
              {
                title: "Roof Inspection",
                description: "Comprehensive roof condition and safety assessment",
              },
              {
                title: "Water Damage",
                description: "Detection and assessment of moisture and water damage",
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                review:
                  "Excellent service! Very thorough inspection and comprehensive report. Highly recommended!",
              },
              {
                name: "Sarah Johnson",
                review:
                  "Professional and courteous inspectors. The detailed report helped us make the right decision.",
              },
              {
                name: "Michael Brown",
                review:
                  "Quick turnaround and competitive pricing. Best inspection service in the area!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Professional Home Inspection?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Schedule your inspection today and get peace of mind about your property
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
