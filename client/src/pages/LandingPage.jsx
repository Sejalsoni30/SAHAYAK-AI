import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ShieldCheck, Zap, Globe, ArrowRight, CheckCircle, FileText, Search, BookOpen, Clock, Activity, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-[#f8f9fc] dark:bg-[#0f0f16] min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Background Gradients to simulate the parliament graphic feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/40 via-purple-50/40 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-50/50 via-orange-50/30 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="flex flex-col gap-6 animate-fade-up">
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div> Sahayak-AI Online
              </span>
              <span className="flex items-center gap-1">Trusted</span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">RAG Powered</span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">Government Verified</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1a3a] dark:text-white leading-tight tracking-tight">
              Sahayak-AI<br/>
              <span className="text-[#3a3a7a]">Your Multilingual Public Service Assistant</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl font-medium leading-relaxed">
              Ask questions in your preferred language and get trusted, source-backed assistance for government schemes and services.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link to="/chat" className="flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3.5 rounded-full font-bold shadow-[0_8px_20px_-4px_rgba(249,115,22,0.4)] transition-all hover:scale-105">
                <MessageSquare size={18} /> Start AI Assistant <ArrowRight size={16} />
              </Link>
              <Link to="/schemes" className="flex items-center gap-2 bg-white dark:bg-[#1a1a2e] hover:bg-gray-50 dark:bg-[#2a2a4a] text-[#1a1a3a] dark:text-white px-6 py-3.5 rounded-full font-bold border border-gray-200 dark:border-[#3a3a5a] shadow-sm transition-all hover:shadow-md">
                <Search size={18} /> Explore Schemes
              </Link>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="relative animate-fade-up animate-delay-1 flex flex-col items-end">
            
            {/* Mocked Robot Speech Bubble */}
            <div className="absolute top-10 left-10 bg-white dark:bg-[#1a1a2e] p-4 rounded-2xl rounded-br-sm shadow-xl border border-gray-100 dark:border-[#2a2a4a] z-20 animate-bounce" style={{animationDuration: '3s'}}>
              <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">नमस्ते!<br/>मैं आपकी<br/>कैसे मदद कर सकता हूँ?</p>
            </div>

            {/* Simulated 3D Robot / Graphic Area */}
            <div className="w-72 h-72 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 border-8 border-white dark:border-[#2a2a4a]/50 backdrop-blur-sm mr-12 mt-12">
               <Bot size={120} className="text-white" />
            </div>

            {/* Language Selector Card Overlay */}
            <div className="bg-white dark:bg-[#1a1a2e]/90 backdrop-blur-md border border-white dark:border-[#2a2a4a] p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-80 absolute -bottom-12 right-0 z-30">
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><Globe size={18} className="text-indigo-600"/> Select Language</h3>
               <div className="bg-gray-50 dark:bg-[#2a2a4a] border border-gray-200 dark:border-[#3a3a5a] rounded-xl px-4 py-2 flex items-center justify-between mb-4 cursor-pointer">
                 <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200"><Globe size={14} className="text-gray-400"/> Hindi</span>
                 <ArrowRight size={14} className="text-gray-400 rotate-90" />
               </div>
               <div className="grid grid-cols-3 gap-2 mb-4">
                 <div className="bg-amber-50 text-amber-700 border border-amber-200 text-center py-2 rounded-lg text-sm font-bold shadow-sm">हिंदी</div>
                 <div className="text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-[#3a3a5a] text-center py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:bg-[#2a2a4a] cursor-pointer">English</div>
                 <div className="text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-[#3a3a5a] text-center py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:bg-[#2a2a4a] cursor-pointer">मराठी</div>
                 <div className="text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-[#3a3a5a] text-center py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:bg-[#2a2a4a] cursor-pointer">বাংলা</div>
                 <div className="text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-[#3a3a5a] text-center py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:bg-[#2a2a4a] cursor-pointer">தமிழ்</div>
               </div>
               <div className="bg-indigo-50 rounded-lg p-3 flex items-start gap-3">
                 <ShieldCheck size={16} className="text-indigo-600 mt-0.5 shrink-0" />
                 <p className="text-xs text-indigo-800 font-semibold leading-tight">AI responses will be provided in your selected language.</p>
               </div>
            </div>

          </div>
        </div>

        {/* Floating Feature Strip */}
        <div className="mt-28 relative z-20 bg-white dark:bg-[#1a1a2e]/80 backdrop-blur-xl border border-white dark:border-[#2a2a4a] shadow-xl rounded-2xl p-4 animate-fade-up animate-delay-2">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gray-100">
             
             <div className="flex items-center gap-4 pl-4">
               <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0"><Globe size={20} /></div>
               <div>
                 <p className="font-bold text-gray-900 dark:text-white text-sm">Multilingual</p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">5+ Indian Languages</p>
               </div>
             </div>
             
             <div className="flex items-center gap-4 pl-8">
               <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0"><ShieldCheck size={20} /></div>
               <div>
                 <p className="font-bold text-gray-900 dark:text-white text-sm">RAG / Verified Sources</p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Source-backed Answers</p>
               </div>
             </div>

             <div className="flex items-center gap-4 pl-8">
               <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0"><Zap size={20} /></div>
               <div>
                 <p className="font-bold text-gray-900 dark:text-white text-sm">Service Automation</p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">From Information to Action</p>
               </div>
             </div>

             <div className="flex items-center gap-4 pl-8">
               <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0"><Clock size={20} /></div>
               <div>
                 <p className="font-bold text-gray-900 dark:text-white text-sm">24/7 Support</p>
                 <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Always Here</p>
               </div>
             </div>

           </div>
        </div>

      </section>

      {/* QUICK ACTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a3a] dark:text-white flex items-center gap-2">
              <span className="text-orange-500">📦</span> Quick Actions
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mt-1">Access popular services and get started quickly</p>
          </div>
          <Link to="/schemes" className="text-indigo-600 font-bold text-sm hover:underline flex items-center gap-1">View All <ArrowRight size={14}/></Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          
          <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4"><CheckCircle size={20}/></div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 relative z-10">Government Schemes</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight relative z-10">Explore central & state schemes and benefits</p>
            <div className="absolute bottom-4 right-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-50 p-1.5 rounded-full"><ArrowRight size={14}/></div>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4"><BookOpen size={20}/></div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 relative z-10">Scholarships</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight relative z-10">Check eligibility and apply for scholarships</p>
            <div className="absolute bottom-4 right-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity bg-purple-50 p-1.5 rounded-full"><ArrowRight size={14}/></div>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4"><FileText size={20}/></div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 relative z-10">Certificates</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight relative z-10">Get information on various certificates</p>
            <div className="absolute bottom-4 right-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-50 p-1.5 rounded-full"><ArrowRight size={14}/></div>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4"><FileText size={20}/></div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 relative z-10">Required Documents</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight relative z-10">Know what documents you need</p>
            <div className="absolute bottom-4 right-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-50 p-1.5 rounded-full"><ArrowRight size={14}/></div>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4"><Globe size={20}/></div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 relative z-10">Application Guidance</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight relative z-10">Step-by-step application process</p>
            <div className="absolute bottom-4 right-4 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity bg-pink-50 p-1.5 rounded-full"><ArrowRight size={14}/></div>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4"><ShieldCheck size={20}/></div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 relative z-10">Public Services</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight relative z-10">Access common government services</p>
            <div className="absolute bottom-4 right-4 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-50 p-1.5 rounded-full"><ArrowRight size={14}/></div>
          </div>

          <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4"><Search size={20}/></div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 relative z-10">Track Application</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight relative z-10">Check your application status</p>
            <div className="absolute bottom-4 right-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity bg-purple-50 p-1.5 rounded-full"><ArrowRight size={14}/></div>
          </div>

        </div>
      </section>

      {/* COMPLEX CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Banner */}
          <div className="lg:col-span-3 bg-indigo-50 border border-indigo-100 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10 text-indigo-600"><Globe size={160} /></div>
            <h3 className="text-lg font-bold text-indigo-950 mb-3 relative z-10">Government Services<br/>Now at Your Fingertips</h3>
            <p className="text-xs text-indigo-800 font-medium mb-6 relative z-10">Get easy access to schemes, certificates, services and more — all in one place.</p>
            <Link to="/schemes" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 px-4 rounded-full w-max flex items-center gap-2 relative z-10 transition-colors shadow-sm">
              Explore Services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Center Process */}
          <div className="lg:col-span-6 bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] shadow-sm rounded-3xl p-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2"><span className="text-orange-500">⚙️</span> How It Works</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-10">Simple steps to get the information and services you need</p>
            
            <div className="flex items-center justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-[80px]">
                <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3 shadow-sm border border-purple-200"><MessageSquare size={24}/></div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Ask</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-1">Ask your question in your language</p>
              </div>
              
              <ArrowRight size={20} className="text-gray-300 -mt-8"/>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-[80px]">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3 shadow-sm border border-blue-200"><Bot size={24}/></div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Understand</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-1">AI understands your intent</p>
              </div>

              <ArrowRight size={20} className="text-gray-300 -mt-8"/>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-[80px]">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 shadow-sm border border-emerald-200"><ShieldCheck size={24}/></div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Verify</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-1">Checks trusted sources (RAG)</p>
              </div>

              <ArrowRight size={20} className="text-gray-300 -mt-8"/>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center max-w-[80px]">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-3 shadow-sm border border-orange-200"><FileText size={24}/></div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Guide</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-1">Provides step-by-step guidance</p>
              </div>

              <ArrowRight size={20} className="text-gray-300 -mt-8"/>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center max-w-[80px]">
                <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 shadow-sm border border-indigo-200"><CheckCircle size={24}/></div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Apply</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-1">Complete your service request</p>
              </div>
            </div>
          </div>

          {/* Right Why Sahayak */}
          <div className="lg:col-span-3 bg-[#f0f4f8] border border-blue-100 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Why Sahayak-AI?</h3>
            <div className="flex flex-col gap-5">
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg shrink-0 mt-0.5"><Globe size={16}/></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Multilingual Access</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Hindi, English, Marathi, Bengali, Tamil +</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg shrink-0 mt-0.5"><ShieldCheck size={16}/></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Verified Information</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Trusted government sources & RAG</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg shrink-0 mt-0.5"><Zap size={16}/></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-100">Service Automation</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">From information to action</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* RAG TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 text-white p-3 rounded-xl shadow-lg shadow-indigo-200"><Bot size={24} /></div>
            <div>
              <h3 className="text-base font-bold text-indigo-950">AI Responses are Grounded in Verified Sources</h3>
              <p className="text-xs font-semibold text-indigo-700 mt-1">We use trusted government sources and RAG technology to provide accurate, up-to-date information.</p>
            </div>
          </div>

          <div className="flex items-center gap-8 shrink-0 border-l border-indigo-200 pl-8">
             <div className="flex items-center gap-3">
               <FileText size={20} className="text-indigo-400"/>
               <span className="text-xs font-bold text-indigo-900 leading-tight">Source-backed<br/>Answers</span>
             </div>
             <div className="flex items-center gap-3">
               <ShieldCheck size={20} className="text-indigo-400"/>
               <span className="text-xs font-bold text-indigo-900 leading-tight">Official<br/>Information</span>
             </div>
             <div className="flex items-center gap-3">
               <Clock size={20} className="text-indigo-400"/>
               <span className="text-xs font-bold text-indigo-900 leading-tight">Last Updated<br/>Information</span>
             </div>
          </div>
        </div>
      </section>


    </div>
  );
}