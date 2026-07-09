export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-blue-100">
            Professional Project Management Consultancy delivering excellence across the entire project lifecycle
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
                We are a professional construction consulting and project management firm dedicated to delivering quality, transparency, and excellence throughout the project lifecycle.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                We provide comprehensive Project Management Consultancy (PMC), Quality Assurance, Handover Inspection, and Interior Solutions for residential, commercial, institutional, and industrial projects.
              </p>
              <p className="text-gray-600 text-lg">
                Our objective is to safeguard our clients' investments by ensuring that projects are executed according to the desired quality standards, within budget, and on schedule. Through systematic planning, progress monitoring, quality control, and technical expertise, we help clients make informed decisions and achieve successful project outcomes.
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
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Industry Professionals" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" },
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
