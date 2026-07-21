"use client";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 sticky bg-white border-b border-steel-gray/20 z-50">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-2">
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <img
              alt="Aira Vision Logo"
              className="h-8 md:h-10 w-auto object-contain"
              src="/assets/Aira_Vision_logo.webp"
            />
          </Link>
        <div className="hidden md:flex items-center gap-8">

          <Link href="/about" className="text-on-surface-variant py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group py-1">
            <button className="text-on-surface-variant text-sm font-medium transition-colors duration-200 flex items-center gap-1 group-hover:text-construction-orange">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-steel-gray/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/project-management" className="block px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-construction-orange transition-colors">
                Project Management Consultancy
              </Link>
              <Link href="/services/home-inspection" className="block px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-construction-orange transition-colors border-t border-steel-gray/10">
                Home Inspection
              </Link>
              <Link href="/services/interior-designing" className="block px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-construction-orange transition-colors border-t border-steel-gray/10">
                Interior Designing
              </Link>
            </div>
          </div>

          <Link href="/projects" className="text-on-surface-variant py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            Projects
          </Link>
          <Link href="/gallery" className="text-on-surface-variant py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            Gallery
          </Link>
          <Link href="/blog" className="text-on-surface-variant py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-construction-orange">
            Blog
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/contact" className="bg-construction-orange text-white px-4 py-2 rounded-sm font-bold uppercase tracking-wider hover:bg-orange-700 transition-colors text-xs">
            CONTACT US
          </Link>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-on-surface-variant p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-steel-gray/20 absolute w-full left-0 top-full shadow-lg h-[calc(100vh-73px)] overflow-y-auto">
          <div className="flex flex-col px-6 py-4 space-y-4 pb-8">
            <Link href="/about" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services/project-management" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Project Management</Link>
            <Link href="/services/home-inspection" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Home Inspection</Link>
            <Link href="/services/interior-designing" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Interior Designing</Link>
            <Link href="/projects" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/gallery" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/blog" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className="bg-construction-orange text-white px-6 py-4 text-center font-bold uppercase mt-2" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
