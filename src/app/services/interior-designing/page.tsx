import Link from 'next/link';

export const metadata = {
  title: "Interior Designing - Aira Vision",
  description: "Transforming Spaces with Purpose, Precision, and Style.",
};

export default function InteriorDesigningPage() {
  return (
    <main className="flex-grow">
      {/* Page Header (Aligned with other pages) */}
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-surface-container-high">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <p className="font-label-sm text-label-sm text-construction-orange uppercase tracking-wider mb-stack-sm flex items-center gap-2">
              <span className="w-8 h-[1px] bg-construction-orange inline-block"></span>
              Interior Design
            </p>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-blue-900 mb-stack-md">
              Interior Designing Services
            </h1>
            <p className="font-body-lg text-body-lg text-blue-900">
              Transforming Spaces with Purpose, Precision, and Style. We harmonize aesthetic beauty with uncompromised functional utility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto space-y-24">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-stack-sm">
                <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-sm font-headline-md font-bold">
                  01
                </div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-blue-900">Crafting Exceptional Environments</h2>
              </div>
              <div className="h-[1px] w-full bg-steel-gray/30 mb-stack-md"></div>
              <p className="font-body-md text-body-md text-blue-900 mb-4">
                At Aira Vision, we believe that an interior should be a perfect reflection of its inhabitants, harmonizing aesthetic beauty with uncompromised functional utility. We approach interior design with the precision of structural engineers and the creativity of fine artists.
              </p>
              <p className="font-body-md text-body-md text-blue-900">
                Our dedicated team of professional designers ensures that every element, from spatial planning to the final textural finishes, is executed with absolute quality craftsmanship. We transform ordinary spaces into purposeful environments that inspire and endure.
              </p>
            </div>
            <div className="md:col-span-6">
              <img className="w-full h-auto rounded-sm shadow-sm border border-surface-variant object-cover aspect-video" alt="Interior designer workspace" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"/>
            </div>
          </div>

          <div className="border-t border-surface-variant pt-16">
            <div className="text-center mb-12">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-blue-900 mb-2">Interior Design Solutions We Offer</h2>
              <p className="font-body-md text-body-md text-blue-900">Comprehensive design expertise across all structural domains.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-surface-container-highest hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-blueprint-blue">
                <div className="w-12 h-12 bg-primary/10 text-blue-900 rounded flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-blue-900 mb-2">Residential</h3>
                <p className="font-body-md text-body-md text-blue-900">Bespoke home interiors that reflect your lifestyle, ensuring comfort and elegance in every room.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-surface-container-highest hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-construction-orange">
                <div className="w-12 h-12 bg-construction-orange/10 text-construction-orange rounded flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-blue-900 mb-2">Commercial</h3>
                <p className="font-body-md text-body-md text-blue-900">High-performance workspaces designed to enhance productivity and impress enterprise clients.</p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-sm shadow-sm border border-surface-container-highest hover:shadow-[0_4px_20px_rgba(0,43,91,0.08)] transition-shadow duration-300 border-t-4 border-t-secondary">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-blue-900 mb-2">Modular Kitchens</h3>
                <p className="font-body-md text-body-md text-blue-900">Ergonomically engineered culinary spaces maximizing storage efficiency and modern aesthetics.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* CTA Section (Matching other pages) */}
      <section className="bg-primary text-on-primary py-16 px-margin-mobile md:px-margin-desktop border-t-4 border-construction-orange">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-stack-sm">Ready to elevate your space?</h2>
          <p className="font-body-lg text-body-lg text-white mb-stack-md max-w-2xl mx-auto">
            Partner with Aira Vision for bespoke interior designs that blend aesthetic brilliance with structural integrity.
          </p>
          <Link href="/contact" className="bg-construction-orange text-white font-body-md px-8 py-3 rounded hover:bg-opacity-90 transition-all duration-200 ease-in-out border border-transparent shadow-sm font-medium inline-block">
            Discuss Your Interior Project
          </Link>
        </div>
      </section>
    </main>
  );
}
