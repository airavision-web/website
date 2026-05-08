export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Home Inspection Team</h1>
          <p className="text-lg text-blue-100">
            Your trusted partner in comprehensive home inspections since 2020
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 text-lg">
                HIT Inspections is a leading provider of professional home inspection services. With a team of certified and experienced inspectors, we are committed to providing thorough, accurate, and unbiased assessments of residential properties.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Our mission is to empower homebuyers and property owners with the detailed information they need to make informed decisions about their most valuable investment.
              </p>
              <p className="text-gray-600 text-lg">
                We pride ourselves on our attention to detail, professional conduct, and commitment to customer satisfaction.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Company Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Properties Inspected" },
              { number: "50+", label: "Certified Inspectors" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24hr", label: "Average Report Time" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                title: "Lead Inspector",
                experience: "15+ years",
              },
              {
                name: "Jane Smith",
                title: "Senior Inspector",
                experience: "12+ years",
              },
              {
                name: "Mike Johnson",
                title: "Specialist Inspector",
                experience: "10+ years",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Team Member Photo</p>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600">{member.title}</p>
                <p className="text-gray-600 mt-2">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "We provide honest, unbiased inspections and transparent reporting",
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in all our inspections",
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction and peace of mind is our top priority",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
