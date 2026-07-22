import Link from "next/link";
import { Network, ClipboardCheck, Paintbrush, ShieldCheck, Target, Monitor, HeadphonesIcon, Calendar, Handshake, Hand, Check, BadgeCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden border-b border-gray-200">
        
        {/* Full-width background image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-[50%_65%]"
          style={{ backgroundImage: "url('/assets/construction_site.webp')" }}
        ></div>

        {/* Content overlaid on the left */}
        <div className="relative z-10 w-full md:w-[60%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-gradient-to-r from-white/95 via-white/90 to-transparent min-h-full">
          <div className="max-w-xl flex flex-col items-start">
            
            {/* Logo and Title group */}
            {/* ponytail: stripped out extra boxes, min implementation for requested design */}
            <div className="flex flex-col items-center w-fit mb-4">
              <img 
                src="/assets/aira_icon.webp" 
                alt="Aira Vision Logo" 
                className="h-16 md:h-20 object-contain mb-3" 
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight uppercase">
                AIRA VISION
              </h1>
            </div>

            <h2 className="text-[14px] md:text-[16px] font-bold text-primary mb-6 tracking-widest uppercase leading-relaxed">
              Professional Home Inspection &<br/>Project Management Consultancy
            </h2>
            
            <p className="text-primary text-[15px] md:text-[16px] font-medium mb-10 leading-[1.8] max-w-[500px]">
              Helping homeowners, builders, and developers make confident decisions through expert inspections, quality assurance, and project oversight.
            </p>
            
            <div className="flex w-full justify-center mt-2">
              <Link href="/contact" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 text-[13px] font-bold tracking-widest uppercase text-center transition-colors rounded shadow-sm flex items-center justify-center gap-2">
                SCHEDULE INSPECTION <Calendar className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-primary text-white py-10 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          <div className="flex items-center justify-center gap-4 px-4">
            <Target className="w-10 h-10 text-white" strokeWidth={1.5} />
            <div className="font-semibold text-[15px] tracking-wide uppercase">Accuracy</div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <img src="/assets/integrity_icon.png" alt="Integrity" className="w-10 h-10 object-contain invert opacity-90 mix-blend-screen" />
            <div className="font-semibold text-[15px] tracking-wide uppercase">Integrity</div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <Handshake className="w-10 h-10 text-white" strokeWidth={1.5} />
            <div className="font-semibold text-[15px] tracking-wide uppercase">Reliability</div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <img src="/assets/assurance_icon_clean.png?v=2" alt="Assurance" className="w-10 h-10 object-contain opacity-90" />
            <div className="font-semibold text-[15px] tracking-wide uppercase">Assurance</div>
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">
            <div className="lg:w-5/12">
              <span className="font-semibold text-xs tracking-widest uppercase text-blue-600 mb-4 block">WHY CHOOSE AIRA VISION</span>
              <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tight">Building Confidence at Every Stage.</h2>
              <div className="h-[3px] w-16 bg-[#ea580c]"></div>
            </div>
            <div className="lg:w-7/12">
              <p className="text-[15px] md:text-[16px] text-primary leading-[1.9]">
                At Aira Vision, we believe every successful project starts with careful planning and ends with uncompromising quality. Whether you're purchasing a home, managing a construction project, or designing an interior, our team provides expert guidance, detailed inspections, and professional oversight to help you make informed decisions with confidence.
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
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 tracking-tight">Our Expertise</h2>
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[220px]">
            {/* Service 1: Project Management (Large Left Card) */}
            <div className="bg-white rounded-xl p-10 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-1 lg:row-span-2 group">
              <div>
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Project Management</h3>
                <div className="mb-6">
                  <h4 className="text-[13px] font-bold text-primary mb-3 uppercase tracking-wider">Highlights</h4>
                  <ul className="space-y-2">
                    {["End-to-end project coordination", "Budget & timeline management", "Site supervision", "Vendor & contractor coordination", "Quality monitoring"].map((item, i) => (
                      <li key={i} className="flex items-center text-[13px] text-primary">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto">
                <Link href="/services/project-management" className="inline-flex items-center text-primary font-bold text-[14px] hover:text-primary transition-colors">
                  Explore Capability <span className="ml-2 font-normal">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Service 2: Interior Fit-Out Solutions (Top Right) */}
            <div className="bg-white rounded-xl p-8 flex flex-col justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-2 lg:row-span-1">
              <div className="flex gap-6 items-start">
                <div className="h-14 w-14 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                  <Paintbrush className="w-7 h-7 text-[#ea580c]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4">Interior Design & Execution</h3>
                  <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {["Residential interiors", "Office fit-outs", "Commercial interiors", "False ceiling & lighting", "Modular kitchens", "Flooring & wall finishes", "Furniture coordination", "Final quality inspection"].map((item, i) => (
                        <li key={i} className="flex items-center text-[13px] text-primary">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Home Handover Inspections (Bottom Right) */}
            <div className="bg-white rounded-xl p-8 flex flex-col justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-2 lg:row-span-1">
              <div className="flex gap-6 items-start">
                <div className="h-14 w-14 bg-blue-50 rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                  <ClipboardCheck className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4">Home Handover Inspections</h3>
                  <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {["Structural defects", "Plumbing systems", "Electrical installations", "Doors & windows", "Flooring & wall finishes", "Waterproofing", "Paint quality", "Fixtures & fittings"].map((item, i) => (
                        <li key={i} className="flex items-center text-[13px] text-primary">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Quality Assurance (Full Width Bottom) */}
            <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] lg:col-span-3 lg:row-span-1 justify-between gap-8 mt-2">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-8 h-8 text-[#ea580c]" strokeWidth={1.5} />
                </div>
                <div className="max-w-3xl">
                  <h3 className="text-lg font-bold text-primary mb-4">Quality Assurance</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {["Site Quality Inspections", "Material Quality Verification", "Workmanship Assessment", "Compliance & Safety Checks"].map((item, i) => (
                      <li key={i} className="flex items-center text-[13px] text-primary">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <Link href="/contact" className="border-2 border-[#0f172a] text-primary hover:bg-[#0f172a] hover:text-white px-8 py-3 rounded-sm font-bold text-sm transition-colors block text-center w-full md:w-auto">
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
