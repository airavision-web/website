'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.svg" 
                alt=\"PMC Solutions Logo\" 
                width={60} 
                height={60}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition font-medium">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-orange-600 transition font-medium">
              Gallery
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-orange-600 transition font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition font-medium">
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">
              About
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">
              Services
            </Link>
            <Link href="/gallery" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">
              Gallery
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">
              Pricing
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-orange-600 font-medium">
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 bg-orange-600 text-white px-4 rounded mt-2 font-semibold"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
