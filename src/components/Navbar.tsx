"use client";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full top-0 sticky bg-surface border-b border-steel-gray/20 z-50">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
          <Link href="/" className="flex items-center gap-4 group">
            <img
              alt="Aira Vision Logo"
              className="h-10 w-10 object-contain drop-shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAShwERnZMF_CNPRCwErUWPNyYwzflEOACZtnKFpaycwmEhKgd6pTfu6akgpzNHi2nVe1nzoSRQcKTwGoQ2Kj6kQgPKeUcgf6vXqVW72JdYQYqc1f0VpGUhQf2VjdM7O740IIKC0wYw49Dn4sCORIEUbzle8lvrf-1BpZTzUDoloWqt46T9csgt7a799BmneP-lWyVeWZWXPgPf1Wp0jo0-y2O7mUWbZyFVVJHu5Z5CmmZ36QzsKZcKp337sYe90iE4jQ"
            />
            <span className="font-headline-md text-2xl font-black text-slate-900 uppercase tracking-tighter">
              Aira Vision
            </span>
          </Link>
        <div className="hidden md:flex items-center gap-6">

          <Link href="/about" className="text-on-surface-variant py-1 text-body-md transition-colors duration-200 ease-in-out hover:text-secondary">
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group py-1">
            <button className="text-on-surface-variant text-body-md transition-colors duration-200 flex items-center gap-1 group-hover:text-secondary">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-surface-container-lowest border border-steel-gray/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/services/project-management" className="block px-4 py-3 text-body-md text-on-surface hover:bg-surface-container-low hover:text-blueprint-blue transition-colors">
                Project Management Consultancy
              </Link>
              <Link href="/services/home-inspection" className="block px-4 py-3 text-body-md text-on-surface hover:bg-surface-container-low hover:text-blueprint-blue transition-colors border-t border-steel-gray/10">
                Home Inspection
              </Link>
            </div>
          </div>

          <Link href="/projects" className="text-on-surface-variant py-1 text-body-md transition-colors duration-200 ease-in-out hover:text-secondary">
            Projects
          </Link>
          <Link href="/gallery" className="text-on-surface-variant py-1 text-body-md transition-colors duration-200 ease-in-out hover:text-secondary">
            Gallery
          </Link>
          <Link href="/blog" className="text-on-surface-variant py-1 text-body-md transition-colors duration-200 ease-in-out hover:text-secondary">
            Blog
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/contact" className="bg-construction-orange text-white px-6 py-3 rounded-none font-bold uppercase tracking-wider hover:bg-orange-700 transition-colors">
            Contact Us
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
        <div className="md:hidden bg-white border-t border-steel-gray/20 absolute w-full left-0 top-full shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/about" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services/project-management" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Project Management</Link>
            <Link href="/services/home-inspection" className="text-slate-900 py-2 text-lg font-bold border-b border-gray-100" onClick={() => setIsOpen(false)}>Home Inspection</Link>
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
