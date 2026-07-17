import Link from "next/link";
import { Network, ClipboardCheck, Paintbrush, ShieldCheck, Target, Monitor, HeadphonesIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden border-b border-gray-200">
        
        {/* Full-width background image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        ></div>
        
        {/* Gradient Overlay: Opaque white on the left, fading to transparent on the right */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full md:w-[80%]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white to-transparent w-full md:w-[50%]"></div>

        {/* Content overlaid on the left */}
        <div className="relative z-10 w-full md:w-[60%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="max-w-xl flex flex-col items-start">
            
            {/* Logo and Title group - aligns logo center above text */}
            <div className="flex flex-col items-center w-fit">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAShwERnZMF_CNPRCwErUWPNyYwzflEOACZtnKFpaycwmEhKgd6pTfu6akgpzNHi2nVe1nzoSRQcKTwGoQ2Kj6kQgPKeUcgf6vXqVW72JdYQYqc1f0VpGUhQf2VjdM7O740IIKC0wYw49Dn4sCORIEUbzle8lvrf-1BpZTzUDoloWqt46T9csgt7a799BmneP-lWyVeWZWXPgPf1Wp0jo0-y2O7mUWbZyFVVJHu5Z5CmmZ36QzsKZcKp337sYe90iE4jQ" 
                alt="Aira Vision Logo" 
                className="h-24 md:h-32 mb-4 object-contain mix-blend-multiply" 
              />
              <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] tracking-tight mb-2 uppercase">
                AIRA VISION
              </h1>
            </div>

            <h2 className="text-2xl md:text-4xl font-serif text-[#0f172a] mb-10 mt-2">
              Bringing Your Vision To Scale
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/project-management" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase text-center transition-colors shadow-sm">
                PMC SERVICES
              </Link>
              <Link href="/services/home-inspection" className="border-2 border-[#0f172a] bg-transparent hover:bg-slate-50 text-[#0f172a] px-8 py-4 text-sm font-bold tracking-widest uppercase text-center transition-colors shadow-sm">
                HOME INSPECTIONS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-b border-gray-200 bg-white py-10 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          <div className="flex items-center justify-center gap-4 px-4">
            <Target className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
            <div className="font-semibold text-[15px] text-[#0f172a]">Accurate<br/>Inspections</div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <ClipboardCheck className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
            <div className="font-semibold text-[15px] text-[#0f172a]">Timely<br/>Reports</div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <Monitor className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
            <div className="font-semibold text-[15px] text-[#0f172a]">Modern<br/>Technology</div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <HeadphonesIcon className="w-10 h-10 text-slate-700" strokeWidth={1.5} />
            <div className="font-semibold text-[15px] text-[#0f172a]">Reliable<br/>Support</div>
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">
            <div className="lg:w-5/12">
              <span className="font-semibold text-xs tracking-widest uppercase text-blue-600 mb-4 block">Professional Consultancy</span>
              <h2 className="text-4xl md:text-5xl font-medium text-[#0f172a] mb-6 tracking-tight">Precision in Every Phase.</h2>
              <div className="h-[3px] w-16 bg-[#ea580c]"></div>
            </div>
            <div className="lg:w-7/12">
              <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.9]">
                At Aira Vision, we operate at the intersection of strategic planning and rigorous execution. We are not just overseers; we are your dedicated advocates on the ground. By applying advanced project management methodologies and stringent quality control protocols, we mitigate risk and streamline complex construction processes. Our approach is deeply rooted in structural integrity and transparent reporting, building trust with enterprise clients through every milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot (Bento Grid) */}
      <section className="py-24 bg-[#f8fafc] border-t border-gray-100 relative">
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-[url('/dotted-pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a] mb-6 tracking-tight">Services Snapshot</h2>
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[220px]">
            {/* Service 1: Project Management (Large Left Card) */}
            <div className="bg-white rounded-xl p-10 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-1 lg:row-span-2 group">
              <div>
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-blue-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">Project Management</h3>
                <p className="text-[14px] text-slate-500 leading-[1.8] mb-6">
                  Comprehensive lifecycle oversight, from initial feasibility studies through to final delivery. We coordinate specialized teams, manage complex timelines, and maintain strict adherence to enterprise-grade budgets.
                </p>
              </div>
              <div className="mt-auto">
                <Link href="/services/project-management" className="inline-flex items-center text-blue-700 font-bold text-[14px] hover:text-blue-900 transition-colors">
                  Explore Capability <span className="ml-2 font-normal">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Service 2: Quality Assurance (Top Right) */}
            <div className="bg-white rounded-xl p-8 flex flex-col justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-2 lg:row-span-1">
              <div className="flex gap-6 items-start">
                <div className="h-14 w-14 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-[#ea580c]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">Quality Assurance</h3>
                  <p className="text-[14px] text-slate-500 leading-[1.8]">
                    Rigorous site inspections and materials testing to ensure strict compliance with architectural blueprints and industry safety regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3: Home Handover Inspections (Bottom Right) */}
            <div className="bg-white rounded-xl p-8 flex flex-col justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-2 lg:row-span-1">
              <div className="flex gap-6 items-start">
                <div className="h-14 w-14 bg-blue-50 rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                  <ClipboardCheck className="w-7 h-7 text-blue-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">Home Handover Inspections</h3>
                  <p className="text-[14px] text-slate-500 leading-[1.8]">
                    Meticulous final phase snagging, defect resolution management, and residential property assessments guaranteeing seamless project delivery to stakeholders.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4: Interior Fit-Out Solutions (Full Width Bottom) */}
            <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-3 lg:row-span-1 justify-between gap-8 mt-2">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                  <Paintbrush className="w-8 h-8 text-[#ea580c]" strokeWidth={1.5} />
                </div>
                <div className="max-w-3xl">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">Interior Fit-Out Solutions</h3>
                  <p className="text-[14px] text-slate-500 leading-[1.8]">
                    Specialized oversight for high-end corporate and commercial interior installations. Coordinating diverse contractors to achieve precise design intent and functional workspace optimization.
                  </p>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <Link href="/contact" className="border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white px-8 py-3 rounded-sm font-bold text-sm transition-colors block text-center w-full md:w-auto">
                  Discuss Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
