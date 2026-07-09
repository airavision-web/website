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
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering Confidence Through Expertise and Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Experienced Professionals",
                description: "Multidisciplinary team of project managers, engineers, and specialists with extensive industry experience",
              },
              {
                icon: Zap,
                title: "Technology-Driven Approach",
                description: "Leveraging BIM, Primavera P6, Microsoft Project, and digital reporting systems for enhanced project visibility",
              },
              {
                icon: Award,
                title: "Commitment to Quality",
                description: "Rigorous quality management processes and adherence to recognized industry standards",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Structured methodologies and proactive monitoring ensure projects are delivered on schedule",
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
              Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive Solutions Across the Project Lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Project Management Consultancy",
                description: "Strategic leadership and end-to-end management to ensure projects are delivered safely, on time, within budget",
              },
              {
                title: "Quality Assurance & Control",
                description: "Comprehensive QA/QC systems, inspections, compliance monitoring, and quality audits",
              },
              {
                title: "Construction Management",
                description: "Seamless coordination of site activities, contractors, resources, and schedules",
              },
              {
                title: "Planning & Scheduling",
                description: "Detailed project schedules using industry-leading tools and critical path analysis",
              },
              {
                title: "Handover Inspection",
                description: "Comprehensive snagging, defect rectification, and final quality verification",
              },
              {
                title: "Risk Management",
                description: "Proactive identification, assessment, and mitigation of project risks",
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
            Ready to Partner with Us?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Let's discuss how our project management expertise can deliver value for your next project
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
