import Link from 'next/link';
import { ArrowRight, Building2, ShieldPlus, Factory } from 'lucide-react';

export const metadata = {
  title: "Projects & Portfolio - Aira Vision",
  description: "Delivering structural integrity and operational excellence across diverse built environments."
};

export default function ProjectsPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-surface-container-highest py-stack-lg border-b border-outline-variant/30 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #001736 0, #001736 1px, transparent 1px, transparent 10px)" }}></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl">
            <p className="font-label-sm text-label-sm text-construction-orange uppercase tracking-widest mb-stack-sm flex items-center gap-2">
              <span className="w-8 h-px bg-construction-orange"></span>
              Our Expertise
            </p>
            <h1 className="font-display-lg text-[40px] md:text-display-lg font-bold text-primary mb-stack-md leading-tight">Sectors &amp; Portfolio</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Delivering structural integrity and operational excellence across diverse built environments. Our portfolio reflects a commitment to precision, scalable infrastructure, and enduring architectural quality.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Bento Grid */}
      <section className="py-stack-lg bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md border-b border-steel-gray/20 pb-4 flex justify-between items-end">
            <h2 className="font-headline-lg text-headline-lg text-primary">Industries Served</h2>
            <span className="font-label-sm text-label-sm text-outline hidden md:block">02 CORE SECTORS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            
            {/* Commercial, Residential, Healthcare & Institutional */}
            <div className="md:col-span-12 group relative bg-surface-container-lowest border border-surface-variant overflow-hidden flex flex-col min-h-[400px] hover:-translate-y-0.5 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-blueprint-blue z-20"></div>
              <div className="relative h-64 md:h-80 overflow-hidden w-full">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Commercial Skyscraper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu3IpBZ7oBPYy8mi2axQ0pAU3EWs57IOwk-36i6HSUWefo_F4XL0guOplhVjlq0GBGhYEEJ4f51H-uzuexLn4z2jNczWUAqqzxZu2hOBqIHHNgS0PoOvUJa2oqQE4zhiPc8VXLO0c91mm6o3DaYCT4pouMOGVPd-1TmvLWbkKn7qrV0gBtRYRo2s3Iu82EwEMznFjl2l_TMH0hERHhNZJy7ZofEc1F5lsU6x3NGulg6z_UfFjuvMYK" />
                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur px-3 py-1 font-label-sm text-label-sm text-primary z-20 border border-surface-variant">
                  REF: COM-2024
                </div>
              </div>
              <div className="p-gutter flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-3">
                    <Building2 className="text-blueprint-blue w-6 h-6" />
                    Commercial &amp; Institutional
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md mb-stack-md max-w-4xl">
                    High-performance commercial centers and specialized institutional facilities engineered for functionality and wellbeing. We focus on optimizing usable space, energy efficiency, and meeting rigorous compliance for modern educational and institutional environments.
                  </p>
                </div>
                <Link href="/services/project-management" className="flex items-center text-construction-orange font-label-sm text-label-sm uppercase tracking-wider group-hover:text-secondary transition-colors cursor-pointer w-max mt-4">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Industrial & Infrastructure */}
            <div className="md:col-span-12 group relative bg-primary-container text-on-primary-container overflow-hidden flex flex-col md:flex-row min-h-[300px] hover:-translate-y-0.5 transition-transform duration-300 border border-primary/20">
              <div className="absolute left-0 top-0 h-full w-1 bg-safety-yellow z-20 hidden md:block"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-safety-yellow z-20 md:hidden"></div>
              <div className="md:w-2/5 p-gutter md:p-margin-desktop flex flex-col justify-center bg-primary text-on-primary relative z-10">
                <h3 className="font-headline-md text-[24px] mb-stack-sm flex items-center gap-3">
                  <Factory className="text-safety-yellow w-6 h-6" />
                  Industrial &amp; Infrastructure
                </h3>
                <p className="text-on-primary/80 font-body-md text-body-md mb-stack-md">
                  Robust structural frameworks and heavy-duty infrastructure designed to withstand operational stress and support logistical efficiency at scale.
                </p>
                <Link href="/services/project-management" className="flex items-center text-safety-yellow font-label-sm text-label-sm uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer w-max">
                  Explore Capabilities
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="md:w-3/5 relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" alt="Industrial Warehouse" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-2mkbCjdOHL4AANfnY_q7JZEJymn7nmV0EOtjfgxIPPmytgnzHm3m-TujbEpYDRnfhdVy9FmDx6OzVCKSkfJeDBekrGQP8HYj8qwgwtjrVeDj2yeX27p93a_472gQy8tI38RChair8uv_F8duHfjHfpQMWBgoXhm33Wj7yeyP_yxxB7cgi2z2UjvUnknMuEvYLXIBg_DCmoAQOhg0H_PAnC68pGRIrK1D7Cz2UvMbnqoD2k43H2fj" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
