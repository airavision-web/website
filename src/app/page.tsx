import Link from "next/link";
import { Network, ClipboardCheck, Paintbrush, ShieldCheck, Target, Monitor, HeadphonesIcon, Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden border-b border-gray-200">
        
        {/* Full-width background image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-right md:bg-[85%_center]"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight uppercase">
                AIRA VISION
              </h1>
            </div>

            <h2 className="text-[14px] md:text-[16px] font-bold text-[#334155] mb-6 tracking-widest uppercase leading-relaxed">
              Professional Home Inspection &<br/>Project Management Consultancy
            </h2>
            
            <p className="text-[#475569] text-[15px] md:text-[16px] font-medium mb-10 leading-[1.8] max-w-[500px]">
              Helping homeowners, builders, and developers make confident decisions through expert inspections, quality assurance, and project oversight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-4 text-[13px] font-bold tracking-widest uppercase text-center transition-colors rounded shadow-sm flex items-center justify-center gap-2">
                SCHEDULE INSPECTION <Calendar className="w-4 h-4" />
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
              <span className="font-semibold text-xs tracking-widest uppercase text-blue-600 mb-4 block">WHY CHOOSE AIRA VISION</span>
              <h2 className="text-4xl md:text-5xl font-medium text-[#0f172a] mb-6 tracking-tight">Building Confidence at Every Stage.</h2>
              <div className="h-[3px] w-16 bg-[#ea580c]"></div>
            </div>
            <div className="lg:w-7/12">
              <p className="text-[15px] md:text-[16px] text-slate-600 leading-[1.9]">
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
            <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a] mb-6 tracking-tight">Our Expertise</h2>
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
                <div className="mb-6">
                  <h4 className="text-[13px] font-bold text-[#0f172a] mb-3 uppercase tracking-wider">Highlights</h4>
                  <ul className="space-y-2">
                    {["End-to-end project coordination", "Budget & timeline management", "Site supervision", "Vendor & contractor coordination", "Quality monitoring"].map((item, i) => (
                      <li key={i} className="flex items-center text-[13px] text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto">
                <Link href="/services/project-management" className="inline-flex items-center text-blue-700 font-bold text-[14px] hover:text-blue-900 transition-colors">
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
                  <h3 className="text-lg font-bold text-[#0f172a] mb-4">Interior Design & Execution</h3>
                  <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {["Residential interiors", "Office fit-outs", "Commercial interiors", "False ceiling & lighting", "Modular kitchens", "Flooring & wall finishes", "Furniture coordination", "Final quality inspection"].map((item, i) => (
                        <li key={i} className="flex items-center text-[13px] text-slate-600">
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
                  <ClipboardCheck className="w-7 h-7 text-blue-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-4">Home Handover Inspections</h3>
                  <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {["Structural defects", "Plumbing systems", "Electrical installations", "Doors & windows", "Flooring & wall finishes", "Waterproofing", "Paint quality", "Fixtures & fittings"].map((item, i) => (
                        <li key={i} className="flex items-center text-[13px] text-slate-600">
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
                  <h3 className="text-lg font-bold text-[#0f172a] mb-4">Quality Assurance</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {["Site Quality Inspections", "Material Quality Verification", "Workmanship Assessment", "Compliance & Safety Checks"].map((item, i) => (
                      <li key={i} className="flex items-center text-[13px] text-slate-600">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
