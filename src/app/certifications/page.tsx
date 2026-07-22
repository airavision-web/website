import Link from 'next/link';

export const metadata = {
  title: "Certifications - Aira Vision",
  description: "Our certifications are a testament to our unwavering dedication to project success and structural integrity.",
};

export default function CertificationsPage() {
  return (
    <main className="flex-grow">
      {/* Page Header (Aligned with other pages) */}
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-surface-container-high">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <p className="font-label-sm text-label-sm text-construction-orange uppercase tracking-wider mb-stack-sm flex items-center gap-2">
              <span className="w-8 h-[1px] bg-construction-orange inline-block"></span>
              Commitment to Excellence
            </p>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-blue-900 mb-stack-md">
              Our Certifications
            </h1>
            <p className="font-body-lg text-body-lg text-blue-900">
              At Aira Construction Services, our foundation is built on rigorous adherence to global quality and safety standards. Our certifications are a testament to our unwavering dedication to project success and structural integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto space-y-24">
          
          <div className="pt-4">
            <div className="flex items-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-blue-900 mr-4">Core Certifications</h2>
              <div className="flex-grow border-b border-steel-gray/30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-surface-container-highest hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-blueprint-blue">
                <div className="w-12 h-12 bg-primary/10 text-blue-900 rounded flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-blue-900 mb-2">ISO 9001:2015</h3>
                <p className="font-body-md text-body-md text-blue-900 mb-4">Quality Management System</p>
                <div className="font-label-sm text-label-sm text-steel-gray bg-surface px-3 py-1 inline-block rounded border border-surface-variant">Global Standard</div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-surface-container-highest hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-construction-orange">
                <div className="w-12 h-12 bg-construction-orange/10 text-construction-orange rounded flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-blue-900 mb-2">ISO 14001:2015</h3>
                <p className="font-body-md text-body-md text-blue-900 mb-4">Environmental Management</p>
                <div className="font-label-sm text-label-sm text-steel-gray bg-surface px-3 py-1 inline-block rounded border border-surface-variant">Sustainability</div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-surface-container-highest hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-secondary">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h0"/><path d="M14 6h0a6 6 0 0 1 6 6v3"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-blue-900 mb-2">ISO 45001:2018</h3>
                <p className="font-body-md text-body-md text-blue-900 mb-4">Occupational Health & Safety</p>
                <div className="font-label-sm text-label-sm text-steel-gray bg-surface px-3 py-1 inline-block rounded border border-surface-variant">Zero Harm Target</div>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-surface-container-highest hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-blueprint-blue">
                <div className="w-12 h-12 bg-primary/10 text-blue-900 rounded flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-blue-900 mb-2">PMP Certified</h3>
                <p className="font-body-md text-body-md text-blue-900 mb-4">Project Management Professionals</p>
                <div className="font-label-sm text-label-sm text-steel-gray bg-surface px-3 py-1 inline-block rounded border border-surface-variant">Expert Oversight</div>
              </div>
            </div>
          </div>
          
          {/* Professional Memberships & Performance Indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg border-t border-surface-variant pt-16">
            <div>
              <h2 className="font-headline-md text-headline-md text-blue-900 mb-stack-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-construction-orange"><path d="m18 11-5.5-5.5a2 2 0 0 0-2.828 0L2 13v7h7l7.672-7.672a2 2 0 0 0 0-2.828Z"/><path d="m15.5 13.5 4.5-4.5a2 2 0 0 0 0-2.828L17.828 4a2 2 0 0 0-2.828 0L10.5 8.5"/></svg>
                Professional Memberships
              </h2>
              <p className="font-body-md text-body-md text-blue-900 mb-stack-md">
                We actively participate in leading industry organizations to ensure our methodologies remain at the forefront of construction and project management innovation.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="w-32 h-32 bg-surface-container-lowest border border-surface-container-highest rounded-sm shadow-sm flex items-center justify-center p-4">
                  <span className="font-bold text-steel-gray text-xl">PMI</span>
                </div>
                <div className="w-32 h-32 bg-surface-container-lowest border border-surface-container-highest rounded-sm shadow-sm flex items-center justify-center p-4">
                  <span className="font-bold text-steel-gray text-xl">NCC</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-headline-md text-headline-md text-blue-900 mb-stack-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-construction-orange"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                Performance Indicators
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <div className="bg-primary text-on-primary p-6 rounded-sm border-t-4 border-construction-orange shadow-sm">
                  <div className="font-display-lg text-display-lg mb-2">98%</div>
                  <div className="font-headline-md text-headline-md mb-2 text-lg">On-Time Delivery</div>
                  <p className="font-body-md text-sm text-white">Consistent track record of meeting critical path deadlines.</p>
                </div>
                <div className="bg-surface-container-lowest border border-surface-container-highest p-6 rounded-sm border-t-4 border-blueprint-blue shadow-sm">
                  <div className="font-display-lg text-display-lg text-blue-900 mb-2">10+</div>
                  <div className="font-headline-md text-headline-md text-blue-900 mb-2 text-lg">Years LTI Free</div>
                  <p className="font-body-md text-sm text-blue-900">Uncompromising commitment to zero Lost Time Incidents.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-on-primary py-16 px-margin-mobile md:px-margin-desktop border-t-4 border-construction-orange">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-stack-sm">Ready to Build with Certainty?</h2>
          <p className="font-body-lg text-body-lg text-white mb-stack-md max-w-2xl mx-auto">
            Partner with a consultancy that prioritizes compliance, safety, and operational excellence at every project phase.
          </p>
          <Link href="/contact" className="bg-construction-orange text-white font-body-md px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-200 ease-in-out border border-transparent shadow-sm font-medium inline-block">
            Work with a Certified Team
          </Link>
        </div>
      </section>

    </main>
  );
}
