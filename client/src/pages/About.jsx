import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Globe, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold mb-6">
            <ArrowLeft size={16}/> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Sahayak-AI</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Bridging the gap between citizens and government services through native-language AI.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="prose prose-indigo max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="mb-8">
              Navigating government services, schemes, and portals can be overwhelmingly complex. Language barriers, dense policy documents, and fragmented information prevent millions of citizens from accessing the benefits they are entitled to.
              <br/><br/>
              <strong>Sahayak-AI</strong> was built to solve this. We are on a mission to democratize access to public services by providing a highly intelligent, multilingual AI assistant that understands exactly what you need, verifies the information against official sources, and guides you step-by-step.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-12">
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <Globe className="text-indigo-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Language First</h3>
                <p className="text-sm">Speak naturally in Hindi, English, Marathi, Bengali, or Tamil. Our AI understands context, not just keywords.</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <ShieldCheck className="text-emerald-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">RAG Verified</h3>
                <p className="text-sm">Zero hallucinations. Every response is grounded in official government policy documents.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <Bot className="text-orange-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Action Oriented</h3>
                <p className="text-sm">We don't just give information; we guide you through the actual application process.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hackathon Project</h2>
            <p>
              This platform was conceptualized and built as a solution for improving citizen-government interfaces. By leveraging modern Large Language Models (LLMs) combined with Retrieval-Augmented Generation (RAG), Sahayak-AI ensures that the information provided is both highly accessible and strictly accurate.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
