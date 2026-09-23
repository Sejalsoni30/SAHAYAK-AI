import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Accessibility() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold mb-6">
            <ArrowLeft size={16}/> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Accessibility Statement</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Our commitment to digital inclusion.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="prose prose-indigo max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="mb-6">
              Sahayak-AI is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Standards</h2>
            <p className="mb-6">
              Our goal is to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This includes:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>High contrast UI elements for visually impaired users.</li>
                <li>Keyboard navigable interfaces.</li>
                <li>Screen-reader friendly markup.</li>
                <li>Multilingual support to break language barriers.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback</h2>
            <p className="mb-6">
              If you experience any difficulty accessing any part of our platform, please contact us immediately through our Help & Support page.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
