import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary border-t border-steel-gray/30 mt-auto py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md font-bold text-on-primary mb-6">Aira Vision</span>
            <p className="font-body-md text-body-md text-on-primary/80 leading-relaxed">
              Professional construction consulting and project management firm delivering quality, transparency, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline-md text-lg font-semibold text-on-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 font-body-md">
              <li>
                <Link href="/" className="text-on-primary/80 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-on-primary/80 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-on-primary/80 hover:text-white transition">
                  Projects & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-on-primary/80 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-headline-md text-lg font-semibold text-on-primary mb-6">Services</h4>
            <ul className="space-y-4 font-body-md text-on-primary/80">
              <li>
                <Link href="/services/project-management" className="hover:text-white transition">Project Management Consultancy</Link>
              </li>
              <li>
                <Link href="/services/home-inspection" className="hover:text-white transition">Flat Evaluation</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline-md text-lg font-semibold text-on-primary mb-6">Contact Us</h4>
            <div className="space-y-5 font-body-md">
              <div className="flex items-center space-x-2 text-on-primary/80">
                <Phone size={18} className="text-construction-orange shrink-0" />
                <div>
                  <span>+91 9550234556</span><br />
                  <span>+91 7671010806</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-on-primary/80">
                <Mail size={18} className="text-construction-orange shrink-0" />
                <a href="mailto:airavision.av@gmail.com" className="hover:text-white transition">airavision.av@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2 text-on-primary/80">
                <MapPin size={18} className="mt-1 text-construction-orange shrink-0" />
                <span className="leading-tight">2nd floor, Vaibhava lakshmi Nilayam-2, plot# 608, Aparna Hillpark Rd, PJR Layout, Chanda Nagar, Hyderabad, Telangana 500050</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-steel-gray/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center font-body-md">
            <p className="text-on-primary/60 font-label-sm text-label-sm">
              &copy; {new Date().getFullYear()} Aira Vision. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-on-primary/80 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-on-primary/80 hover:text-white transition">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
