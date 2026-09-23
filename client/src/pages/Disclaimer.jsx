import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold mb-6">
            <ArrowLeft size={16}/> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Important legal information regarding AI assistance.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="prose prose-indigo max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Legal or Financial Advice</h2>
            <p className="mb-6">
              The information provided by Sahayak-AI is for general informational purposes only. While we use Retrieval-Augmented Generation (RAG) to ground our AI responses in official government documents, the AI is not a substitute for professional legal, financial, or civic advice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy of Information</h2>
            <p className="mb-6">
              Government schemes, eligibility criteria, and deadlines change frequently. We make every effort to keep our database updated, but we make no warranties about the completeness, reliability, or accuracy of the information presented.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
            <p className="mb-6">
              Our platform may contain links to external websites that are not provided or maintained by or in any way affiliated with Sahayak-AI. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
