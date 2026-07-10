import Link from 'next/link';

export const metadata = {
  title: "Project Management Consultancy - Aira Vision",
  description: "Comprehensive project management and oversight services.",
};

export default function ProjectManagementPage() {
  return (
    <main className="flex-grow">
      {/* Page Header */}
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-surface-container-high">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <p className="font-label-sm text-label-sm text-construction-orange uppercase tracking-wider mb-stack-sm flex items-center gap-2">
              <span className="w-8 h-[1px] bg-construction-orange inline-block"></span>
              Our Expertise
            </p>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-stack-md">
              Comprehensive Project Management Services
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We deliver structured, end-to-end oversight ensuring architectural intent translates perfectly into structural reality. Our methodology is rooted in precision, reliability, and rigorous data analysis across all project phases.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto space-y-24">

          {/* 1. Pre-Construction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-stack-sm">
                <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-sm font-headline-md font-bold">
                  01
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">Pre-Construction</h2>
              </div>
              <div className="h-[1px] w-full bg-steel-gray/30 mb-stack-md"></div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Establishing the foundation for success before breaking ground. We conduct rigorous analysis, planning, and design management to mitigate risks and define clear operational blueprints.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-surface-container-lowest p-stack-md border border-surface-container-highest rounded-sm shadow-sm hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-blueprint-blue relative overflow-hidden group">
                <div className="h-48 w-full mb-6 rounded overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400" alt="Architecture & Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Design Management</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                  Coordinating architectural, structural, and MEP designs to ensure clash-free documentation and alignment with project objectives.
                </p>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5" /></svg> Schematic Design Review</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5" /></svg> Value Engineering</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5" /></svg> Constructability Analysis</li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest p-stack-md border border-surface-container-highest rounded-sm shadow-sm hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-blueprint-blue relative overflow-hidden group">
                <div className="h-48 w-full mb-6 rounded overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Feasibility & Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Feasibility & Analysis</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                  Comprehensive evaluation of site conditions, regulatory requirements, and financial modeling to validate project viability.
                </p>
                <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5" /></svg> Cost Estimation & Budgeting</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5" /></svg> Risk Assessment Modeling</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5" /></svg> Master Scheduling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Construction Phase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-stack-sm">
                <div className="w-12 h-12 bg-construction-orange text-white flex items-center justify-center rounded-sm font-headline-md font-bold">
                  02
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">Construction Phase</h2>
              </div>
              <div className="h-[1px] w-full bg-steel-gray/30 mb-stack-md"></div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Active execution and oversight on-site. We drive progress while enforcing strict adherence to quality, safety, and timeline specifications through robust Project Management Consultancy (PMC).
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-surface-container-lowest border border-surface-container-highest rounded-sm shadow-sm overflow-hidden mb-gutter border-l-4 border-l-construction-orange">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 relative h-48 md:h-auto border-b md:border-b-0 md:border-r border-surface-container-highest bg-surface-container-high">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Construction Phase" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-3 p-stack-md">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-construction-orange"><path d="m18 11-5.5-5.5a2 2 0 0 0-2.828 0L2 13v7h7l7.672-7.672a2 2 0 0 0 0-2.828Z" /><path d="m15.5 13.5 4.5-4.5a2 2 0 0 0 0-2.828L17.828 4a2 2 0 0 0-2.828 0L10.5 8.5" /></svg>
                      <h3 className="font-headline-md text-headline-md text-primary">Project Management Consultancy (PMC)</h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                      Acting as the principal representative, we oversee daily operations, coordinate contractors, and ensure continuous alignment with the strategic roadmap.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface p-3 rounded-sm border border-surface-variant">
                        <div className="font-label-sm text-label-sm text-steel-gray uppercase mb-1">Focus Area</div>
                        <div className="font-body-md text-primary font-medium">Contract Administration</div>
                      </div>
                      <div className="bg-surface p-3 rounded-sm border border-surface-variant">
                        <div className="font-label-sm text-label-sm text-steel-gray uppercase mb-1">Focus Area</div>
                        <div className="font-body-md text-primary font-medium">Schedule Enforcement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="bg-surface-container-lowest p-stack-md border border-surface-container-highest rounded-sm shadow-sm hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-construction-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-construction-orange mb-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Quality Assurance (QA/QC)</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Implementing strict inspection protocols and material testing to guarantee all structural and aesthetic elements meet specified standards.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-stack-md border border-surface-container-highest rounded-sm shadow-sm hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-construction-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-construction-orange mb-6"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" /><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" /><path d="M4 15v-3a6 6 0 0 1 6-6h0" /><path d="M14 6h0a6 6 0 0 1 6 6v3" /></svg>
                  <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">HSE Supervision</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Enforcing Health, Safety, and Environment protocols to maintain a zero-incident culture and ensure regulatory compliance on site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Post-Construction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-stack-sm">
                <div className="w-12 h-12 bg-secondary text-white flex items-center justify-center rounded-sm font-headline-md font-bold">
                  03
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">Post-Construction</h2>
              </div>
              <div className="h-[1px] w-full bg-steel-gray/30 mb-stack-md"></div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Ensuring a seamless transition from construction to occupancy. We manage the final detailed inspections, documentation, and formal handover processes.
              </p>
            </div>
            <div className="lg:col-span-8 bg-surface-container-lowest border border-surface-container-highest rounded-sm p-stack-md md:p-8 shadow-sm border-t-4 border-t-secondary">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mb-6"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Final Verification</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Comprehensive auditing of the completed structure against original blueprints and contractual obligations.
                  </p>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="flex gap-4 p-4 bg-surface rounded-sm border border-surface-variant">
                    <div className="w-16 h-16 shrink-0 rounded bg-secondary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-body-lg text-primary font-medium mb-1">Snagging & Defect Resolution</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Identification, documentation, and managed rectification of all minor defects prior to practical completion certification.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-surface rounded-sm border border-surface-variant">
                    <div className="w-16 h-16 shrink-0 rounded bg-secondary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" /></svg>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-body-lg text-primary font-medium mb-1">Handover & Documentation</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm">Compilation of As-Built drawings, O&M manuals, warranties, and training coordination for facility management teams.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-on-primary py-16 px-margin-mobile md:px-margin-desktop border-t-4 border-construction-orange">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-stack-sm">Ready to structure your next project?</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 mb-stack-md max-w-2xl mx-auto">
            Partner with Aira Vision for authoritative project management and uncompromising structural integrity.
          </p>
          <Link href="/contact" className="bg-construction-orange text-white font-body-md px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-200 ease-in-out border border-transparent shadow-sm font-medium inline-block">
            Discuss Your Project Requirements
          </Link>
        </div>
      </section>
    </main>
  );
}
