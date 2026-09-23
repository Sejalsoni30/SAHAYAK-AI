import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, HelpCircle, FileText } from 'lucide-react';

export default function HelpSupport() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold mb-6">
            <ArrowLeft size={16}/> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Help & Support</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Find answers or get in touch with our team.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link to="/chat" className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow">
              <MessageCircle className="text-indigo-600 mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Live AI Chat</h3>
              <p className="text-sm text-gray-600">Get instant answers from our AI assistant.</p>
            </Link>
            <Link to="/contact" className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-md transition-shadow">
              <HelpCircle className="text-emerald-600 mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Contact Team</h3>
              <p className="text-sm text-gray-600">Reach out to our human support team.</p>
            </Link>
            <Link to="/schemes" className="bg-orange-50 p-6 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
              <FileText className="text-orange-600 mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Scheme Guides</h3>
              <p className="text-sm text-gray-600">Browse detailed information on schemes.</p>
            </Link>
          </div>

          <div className="prose prose-indigo max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900">Is Sahayak-AI free to use?</h4>
                <p>Yes, our platform is completely free for all citizens.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900">How many languages are supported?</h4>
                <p>We currently support English, Hindi, Marathi, Bengali, and Tamil, with more regional languages being added continuously.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">Is my data secure?</h4>
                <p>Absolutely. We use enterprise-grade security and do not sell your personal data. Read our <Link to="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link> for more details.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
