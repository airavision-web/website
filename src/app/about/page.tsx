export const metadata = {
  title: "About Us - Aira Vision",
  description: "Learn about Aira Vision's mission, vision, and commitments to excellence in project management and home inspections.",
};

export default function AboutPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg items-center">
        <div className="md:col-span-6 space-y-stack-md">
          <div>
            <h1 className="font-display-lg text-display-lg md:text-display-lg font-bold text-primary mb-2">
              Building Trust Through Structural Integrity.
            </h1>
            <div className="w-16 h-1 bg-blueprint-blue"></div>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Aira Vision is a premier project management consultancy dedicated to delivering complex infrastructure with absolute precision and uncompromising standards.
          </p>
        </div>
        <div className="md:col-span-6">
          <div className="bg-white border border-[#E2E8F0] p-2 rounded">
            <img
              className="w-full h-auto aspect-video object-cover rounded"
              alt="A professional architectural construction site"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmrb10OSqdbIoc5mZHatNL_GuEIH44IIYifzZuP0b-ghy2Dm_TI0MdamixuvQ1xpQSEtfoFmgZ8MuA6QZLh1uoBYSGdl18fGe1aZLMJNGGVXllgMqF3PN5crEcZ_Negdo4hKbE0bCtUHGkmvoEVRe1ZxAwyjFMXZ5DpQia7JfmsMUzM-k0xENGWyArARL0jDtLYY4V_ygCv_PtrwNtAKcAeuBbe8eHY1j33PjsKelTTJo89X02jmKT"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Grid */}
      <section className="mb-stack-lg">
        <div className="mb-stack-md">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Core Purpose
          </h2>
          <div className="border-b border-outline-variant/30 mt-stack-md mb-stack-lg"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Mission */}
          <div className="bg-white border border-[#E2E8F0] rounded p-stack-md border-t-4 border-t-blueprint-blue transition-all duration-300 hover:-translate-y-[2px] hover:border-blueprint-blue flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded bg-blueprint-blue/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blueprint-blue"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">Our Mission</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              To provide meticulous project management and consultancy services that ensure architectural visions are realized with exact structural fidelity, strict budget adherence, and flawless execution. We translate blueprints into reality with unwavering reliability.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white border border-[#E2E8F0] rounded p-stack-md border-t-4 border-t-construction-orange transition-all duration-300 hover:-translate-y-[2px] hover:border-blueprint-blue flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded bg-construction-orange/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-construction-orange"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">Our Vision</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              To be the definitive benchmark for construction consultancy globally, recognized for pioneering robust methodologies that elevate the standards of enterprise infrastructure and foster sustainable urban development.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="mb-stack-lg">
        <div className="mb-stack-md">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Our Commitments
          </h2>
          <div className="border-b border-outline-variant/30 mt-stack-md mb-stack-lg"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Pillar 1 */}
          <div className="bg-white border border-[#E2E8F0] rounded p-stack-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-blueprint-blue">
            <div className="h-32 rounded mb-4 overflow-hidden bg-emerald-50/50 p-6 flex items-center justify-center border border-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            </div>
            <h4 className="font-headline-md text-[20px] leading-tight font-semibold text-primary mb-2">Excellence & Quality</h4>
            <p className="font-body-md text-sm text-on-surface-variant">
              Rigorous QA processes and uncompromising standards ensure every phase of construction meets exacting specifications.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="bg-white border border-[#E2E8F0] rounded p-stack-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-blueprint-blue">
            <div className="h-32 rounded mb-4 overflow-hidden bg-blue-50/50 p-6 flex items-center justify-center border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blueprint-blue"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h4 className="font-headline-md text-[20px] leading-tight font-semibold text-primary mb-2">Innovation</h4>
            <p className="font-body-md text-sm text-on-surface-variant">
              Leveraging modern technology, BIM, and advanced analytics to optimize workflows and predict structural outcomes.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="bg-white border border-[#E2E8F0] rounded p-stack-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-blueprint-blue">
            <div className="h-32 rounded mb-4 overflow-hidden bg-teal-50/50 p-6 flex items-center justify-center border border-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <h4 className="font-headline-md text-[20px] leading-tight font-semibold text-primary mb-2">Sustainability</h4>
            <p className="font-body-md text-sm text-on-surface-variant">
              Dedicated to responsible development practices that minimize environmental impact and maximize long-term asset value.
            </p>
          </div>
          {/* Pillar 4 */}
          <div className="bg-white border border-[#E2E8F0] rounded p-stack-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-blueprint-blue">
            <div className="h-32 rounded mb-4 overflow-hidden bg-orange-50/50 p-6 flex items-center justify-center border border-orange-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-construction-orange"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4 className="font-headline-md text-[20px] leading-tight font-semibold text-primary mb-2">Transparency & Integrity</h4>
            <p className="font-body-md text-sm text-on-surface-variant">
              Fostering open communication and ethical practices with all stakeholders to build enduring professional trust.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
