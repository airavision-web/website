"use client";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 sticky bg-white border-b border-steel-gray/20 z-50">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <img
              alt="Aira Vision Logo"
              className="h-10 md:h-12 w-auto object-contain"
              src="/assets/Aira_Vision_logo.webp"
            />
          </Link>
        <div className="hidden md:flex items-center gap-8">

          <Link href="/about" className="text-primary py-1 text-base font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group py-1">
            <button className="text-primary text-base font-medium transition-colors duration-200 flex items-center gap-1 group-hover:text-construction-orange">
              Services <ChevronDown className="w-5 h-5" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-steel-gray/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/project-management" className="block px-4 py-2 text-base font-medium text-primary hover:bg-slate-50 hover:text-construction-orange transition-colors">
                Project Management Consultancy
              </Link>
              <Link href="/services/home-inspection" className="block px-4 py-2 text-base font-medium text-primary hover:bg-slate-50 hover:text-construction-orange transition-colors border-t border-steel-gray/10">
                Flat Evaluation
              </Link>
              <Link href="/services/interior-designing" className="block px-4 py-2 text-base font-medium text-primary hover:bg-slate-50 hover:text-construction-orange transition-colors border-t border-steel-gray/10">
                Interior Designing
              </Link>
            </div>
          </div>

          <Link href="/projects" className="text-primary py-1 text-base font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            Projects
          </Link>
          <Link href="/gallery" className="text-primary py-1 text-base font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            Gallery
          </Link>
          <Link href="/certifications" className="text-primary py-1 text-base font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            Certifications
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/contact" className="bg-construction-orange text-white px-5 py-2.5 rounded-sm font-bold uppercase tracking-wider hover:bg-orange-700 transition-colors text-sm">
            CONTACT US
          </Link>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-steel-gray/20 absolute w-full left-0 top-full shadow-lg h-[calc(100vh-73px)] overflow-y-auto">
          <div className="flex flex-col px-6 py-4 space-y-4 pb-8">
            <Link href="/about" className="text-primary py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services/project-management" className="text-primary py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Project Management</Link>
            <Link href="/services/home-inspection" className="text-primary py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Flat Evaluation</Link>
            <Link href="/services/interior-designing" className="text-primary py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Interior Designing</Link>
            <Link href="/projects" className="text-primary py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/gallery" className="text-primary py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/certifications" className="text-primary py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Certifications</Link>
            <Link href="/contact" className="bg-construction-orange text-white px-6 py-4 text-center font-bold uppercase mt-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
