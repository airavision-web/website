import Link from "next/link";
import { Network, ClipboardCheck, Paintbrush, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081622-4a09ce7d78fa?auto=format&fit=crop&q=80&w=2070')" }}
        >
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-left mt-16 md:mt-0">
          <div className="max-w-3xl border-l-4 border-construction-orange pl-4 md:pl-8 py-2">
            {/* ponytail: explicit h1, with lighter font weights */}
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Project Management <br className="hidden md:block" />
              <span className="text-construction-orange">&amp;</span> Home Inspection
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-8 max-w-3xl drop-shadow-md">
              Authoritative oversight, rigorous execution, and meticulous inspections to protect your investment from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link href="/services/project-management" className="bg-construction-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-none font-black text-base sm:text-lg uppercase tracking-wider sm:tracking-widest hover:bg-orange-700 transition-colors border-4 border-construction-orange text-center w-full sm:w-auto">
                PMC Services
              </Link>
              <Link href="/services/home-inspection" className="bg-transparent border-4 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-none font-black text-base sm:text-lg uppercase tracking-wider sm:tracking-widest hover:bg-white hover:text-slate-900 transition-colors text-center w-full sm:w-auto whitespace-normal">
                Home Inspections
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Brief Intro */}
      <section className="py-stack-lg md:py-[80px] bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5">
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-steel-gray mb-2 block">Professional Consultancy</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-blueprint-blue mb-4">Precision in Every Phase.</h2>
              <div className="h-px w-24 bg-steel-gray/30 mb-6"></div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                At Aira Vision, we operate at the intersection of strategic planning and rigorous execution. We are not just overseers; we are your dedicated advocates on the ground. By applying advanced project management methodologies and stringent quality control protocols, we mitigate risk and streamline complex construction processes. Our approach is deeply rooted in structural integrity and transparent reporting, building trust with enterprise clients through every milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot (Bento Grid) */}
      <section className="py-stack-lg bg-surface-container-low border-t border-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Services Snapshot</h2>
            <div className="h-px w-full bg-steel-gray/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter auto-rows-auto lg:auto-rows-[250px]">
            {/* Service 1: Project Management (Large) */}
            <div className="bg-surface-container-lowest border-t-4 border-blueprint-blue border border-surface-container-highest rounded-DEFAULT p-6 flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,43,91,0.08)] transition-all duration-300 hover:-translate-y-1 lg:col-span-2 lg:row-span-2 group relative overflow-hidden">

              <div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mb-4">
                  <Network className="w-7 h-7 text-blueprint-blue" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Project Management</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Comprehensive lifecycle oversight, from initial feasibility studies through to final delivery. We coordinate specialized teams, manage complex timelines, and maintain strict adherence to enterprise-grade budgets.</p>
              </div>
              <div className="mt-4">
                <Link href="/services/project-management" className="inline-flex items-center text-blueprint-blue font-medium font-body-md text-body-md group-hover:underline">
                  Explore Capability <span className="ml-1 text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Service 2: Quality Assurance */}
            <div className="bg-surface-container-lowest border-t-4 border-construction-orange border border-surface-container-highest rounded-DEFAULT p-6 flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,43,91,0.08)] transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 bg-construction-orange/10 rounded flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-construction-orange" />
                  </div>
                </div>
                <h3 className="font-headline-md text-[20px] leading-7 font-bold text-primary mb-2">Quality Assurance</h3>
                <p className="font-body-md text-[14px] leading-5 text-on-surface-variant line-clamp-3">Rigorous site inspections and materials testing to ensure strict compliance with architectural blueprints and industry safety regulations.</p>
              </div>
            </div>

            {/* Service 3: Handover Inspections */}
            <div className="bg-surface-container-lowest border-t-4 border-steel-gray border border-surface-container-highest rounded-DEFAULT p-6 flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,43,91,0.08)] transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 bg-steel-gray/10 rounded flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-steel-gray" />
                  </div>
                </div>
                <h3 className="font-headline-md text-[20px] leading-7 font-bold text-primary mb-2">Home Handover Inspections</h3>
                <p className="font-body-md text-[14px] leading-5 text-on-surface-variant line-clamp-3">Meticulous final phase snagging, defect resolution management, and residential property assessments guaranteeing seamless project delivery to stakeholders.</p>
              </div>
            </div>

            {/* Service 4: Interior Solutions (Horizontal Span) */}
            <div className="bg-surface-container-lowest border-t-4 border-primary border border-surface-container-highest rounded-DEFAULT p-6 flex flex-col justify-center hover:shadow-[0px_4px_20px_rgba(0,43,91,0.08)] transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Paintbrush className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">Interior Fit-Out Solutions</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">Specialized oversight for high-end corporate and commercial interior installations. Coordinating diverse contractors to achieve precise design intent and functional workspace optimization.</p>
                </div>
                <div className="md:ml-auto shrink-0">
                  <Link href="/contact" className="border border-outline text-primary px-6 py-2 rounded-DEFAULT font-body-md text-body-md font-medium hover:bg-surface-container-highest transition-colors inline-block">Discuss Project</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
