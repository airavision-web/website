import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Project Management Consultancy
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              Quality Assurance | Handover Inspection | Interior Solutions
            </p>
            <p className="text-lg mb-8 text-blue-100">
              Managing Quality. Monitoring Progress. Protecting Your Investment. We provide comprehensive project management, quality assurance, and consultancy services throughout the entire project lifecycle.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-8 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">Experienced Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">End-to-End Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg font-semibold">Transparent & Accountable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
