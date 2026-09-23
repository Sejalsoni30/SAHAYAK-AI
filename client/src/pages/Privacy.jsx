import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold mb-6">
            <ArrowLeft size={16}/> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-400 max-w-2xl">How we handle and protect your data.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="prose prose-indigo max-w-none text-gray-600">
            <p className="text-sm text-gray-400 mb-8">Last Updated: October 2023</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              When you use Sahayak-AI, we may collect the following types of information:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Personal information provided during registration (Name, Email).</li>
                <li>Chat logs and interaction data with our AI assistant to improve service quality.</li>
                <li>Usage data such as browser type, device information, and navigation paths.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Data</h2>
            <p className="mb-6">
              The data collected is strictly used to:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provide accurate, context-aware AI assistance regarding government schemes.</li>
                <li>Personalize your dashboard and pre-fill applications locally.</li>
                <li>Improve our AI models and Retrieval-Augmented Generation (RAG) systems.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p className="mb-6">
              We employ industry-standard encryption and security protocols to safeguard your data. Your interaction logs are anonymized before being processed for model improvements. We do not sell your personal data to third parties.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
