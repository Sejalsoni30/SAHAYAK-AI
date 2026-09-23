import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold mb-6">
            <ArrowLeft size={16}/> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Rules and regulations for using Sahayak-AI.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="prose prose-indigo max-w-none text-gray-600">
            <p className="text-sm text-gray-400 mb-8">Last Updated: October 2023</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using Sahayak-AI, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
            <p className="mb-6">
              You agree to use the service only for lawful purposes. You are prohibited from violating or attempting to violate the security of the platform, including generating malicious AI prompts or attempting to bypass rate limits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Modifications</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any significant changes.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
