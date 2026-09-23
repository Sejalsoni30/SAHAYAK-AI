import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, FileText, ShieldCheck, Globe, Activity, ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-[#f8f9fc] dark:bg-[#0f0f16] min-h-screen font-sans pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-indigo-100/60 to-transparent rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center max-w-3xl mx-auto relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-indigo-100 shadow-sm">
            <Bot size={16} /> Powered by Sahayak-AI
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1a3a] dark:text-white leading-tight tracking-tight mb-6">
            Automated Public <span className="text-[#3a3a7a]">Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-8">
            Experience next-generation civic assistance. From automated form filling to document translation, let Sahayak-AI handle the heavy lifting.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-3xl p-8 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-indigo-600 group-hover:scale-110 transition-transform duration-500"><FileText size={200}/></div>
            
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 border border-indigo-100 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <FileText size={32}/>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">AI Document Pre-filling</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Upload your basic details once, and our AI automatically parses and pre-fills complex government application forms across various departments, saving you hours of manual entry.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> Supports PDF & Image uploads</li>
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> High accuracy OCR extraction</li>
            </ul>
            <Link to="/chat" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800">
              Try Auto-fill <ArrowRight size={16}/>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-3xl p-8 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-emerald-600 group-hover:scale-110 transition-transform duration-500"><ShieldCheck size={200}/></div>
            
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <ShieldCheck size={32}/>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Instant Certificate Workflows</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Get immediate guidance and automated workflows for generating essential civic documents like Income Certificates, Caste Certificates, and Domicile proofs.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> Document checklist generation</li>
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> Direct integration guidance</li>
            </ul>
            <Link to="/chat" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800">
              Start Workflow <ArrowRight size={16}/>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-3xl p-8 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-orange-600 group-hover:scale-110 transition-transform duration-500"><Globe size={200}/></div>
            
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 border border-orange-100 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Globe size={32}/>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Real-time Document Translation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Upload official policy documents or forms in English and have them instantly translated into 5+ native Indian languages while retaining the original legal formatting.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> Hindi, Marathi, Bengali & Tamil</li>
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> Context-aware translation</li>
            </ul>
            <Link to="/chat" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-800">
              Translate Document <ArrowRight size={16}/>
            </Link>
          </div>

          {/* Service 4 */}
          <div className="bg-white dark:bg-[#1a1a2e] rounded-3xl p-8 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-purple-600 group-hover:scale-110 transition-transform duration-500"><Activity size={200}/></div>
            
            <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Activity size={32}/>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Application Status Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              No more navigating through multiple disjointed government portals. Track the real-time status of all your submitted applications across various departments in one unified dashboard.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> Unified dashboard view</li>
              <li className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><CheckCircle size={16} className="text-emerald-500"/> Automated alert notifications</li>
            </ul>
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-800">
              View Dashboard <ArrowRight size={16}/>
            </Link>
          </div>

        </div>
      </section>


    </div>
  );
}
