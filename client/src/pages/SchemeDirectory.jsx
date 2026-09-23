import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Leaf, Home, GraduationCap, HeartPulse, Briefcase, Coins, Users, Settings, Star, ShieldCheck, ArrowRight, Bot, Zap, Building2, UserCircle, Clock, FileText } from 'lucide-react';

export default function SchemeDirectory() {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-[#f8f9fc] dark:bg-[#0f0f16] min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-transparent rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/50 via-indigo-50/30 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="flex flex-col gap-5 animate-fade-up">
            
            {/* Breadcrumbs / Tags */}
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-indigo-600">
              <Link to="/schemes" className="hover:underline">Government Schemes</Link>
              <span className="text-gray-300">•</span>
              <Link to="/schemes" className="hover:underline">Subsidies</Link>
              <span className="text-gray-300">•</span>
              <Link to="/schemes" className="hover:underline">Grants</Link>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#1a1a3a] dark:text-white leading-[1.1] tracking-tight">
              Government Scheme Directory
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl font-medium leading-relaxed mt-2">
              Find the right scheme for your needs. Get complete details, eligibility criteria and apply easily — all in one place.
            </p>

            {/* Search Bar */}
            <div className="mt-4 relative max-w-2xl">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-32 py-4 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] rounded-full text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm text-lg transition-all"
                placeholder="Search for schemes (e.g. PM-KISAN, Housing, Education, Healthcare...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="absolute inset-y-2 right-2 bg-[#5c5cce] hover:bg-[#4a4aa8] text-white font-bold px-8 rounded-full transition-colors shadow-md">
                Search
              </button>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Popular Searches:</span>
              <button className="px-3 py-1 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">PM-KISAN</button>
              <button className="px-3 py-1 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">Housing</button>
              <button className="px-3 py-1 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">Scholarship</button>
              <button className="px-3 py-1 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">Health</button>
              <button className="px-3 py-1 bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-[#3a3a5a] text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors">Startup</button>
            </div>
          </div>

          {/* Hero Right Visuals (Simulated Graphic) */}
          <div className="relative h-[400px] animate-fade-up animate-delay-1 hidden lg:block">
             
             {/* Center Laptop / Person abstraction */}
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-32 bg-indigo-100 rounded-t-3xl border-b-8 border-indigo-200 flex flex-col items-center justify-end pb-4 shadow-xl z-20">
                <UserCircle size={64} className="text-indigo-400 mb-2" />
                <div className="w-24 h-2 bg-indigo-200 rounded-full"></div>
             </div>
             
             {/* Main Hub Node */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#3a3a7a] rounded-full flex items-center justify-center shadow-2xl z-20 border-4 border-white dark:border-[#2a2a4a]">
                <Building2 size={40} className="text-white" />
             </div>

             {/* Connection Lines (Simulated with dashed borders on absolute divs) */}
             <div className="absolute top-1/4 left-1/4 w-32 h-32 border-t-2 border-l-2 border-dashed border-indigo-200 rounded-tl-full z-10"></div>
             <div className="absolute top-1/4 right-1/4 w-32 h-32 border-t-2 border-r-2 border-dashed border-indigo-200 rounded-tr-full z-10"></div>
             <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border-b-2 border-l-2 border-dashed border-indigo-200 rounded-bl-full z-10"></div>
             <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-b-2 border-r-2 border-dashed border-indigo-200 rounded-br-full z-10"></div>

             {/* Orbiting Nodes */}
             <div className="absolute top-12 left-20 w-14 h-14 bg-white dark:bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-[#2a2a4a] z-20 animate-bounce" style={{animationDuration: '4s'}}><Leaf size={24} className="text-green-500" /></div>
             <div className="absolute top-4 right-32 w-14 h-14 bg-white dark:bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-[#2a2a4a] z-20 animate-bounce" style={{animationDuration: '3.5s'}}><Home size={24} className="text-red-500" /></div>
             <div className="absolute top-24 right-10 w-14 h-14 bg-white dark:bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-[#2a2a4a] z-20 animate-bounce" style={{animationDuration: '4.2s'}}><GraduationCap size={24} className="text-blue-500" /></div>
             <div className="absolute top-48 right-0 w-14 h-14 bg-white dark:bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-[#2a2a4a] z-20 animate-bounce" style={{animationDuration: '3.8s'}}><HeartPulse size={24} className="text-pink-500" /></div>
             <div className="absolute bottom-24 right-16 w-14 h-14 bg-white dark:bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-[#2a2a4a] z-20 animate-bounce" style={{animationDuration: '4.5s'}}><Coins size={24} className="text-purple-500" /></div>
             <div className="absolute bottom-28 left-12 w-14 h-14 bg-white dark:bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-lg border border-gray-100 dark:border-[#2a2a4a] z-20 animate-bounce" style={{animationDuration: '3.9s'}}><Briefcase size={24} className="text-amber-500" /></div>

             {/* Floating Text */}
             <div className="absolute right-0 top-1/3 rotate-12 text-indigo-400 font-custom text-xl opacity-70">Empowering<br/>Citizens<br/>Building a<br/>Better Tomorrow</div>

          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          
          {[
            { icon: <Leaf size={24} className="text-green-600"/>, title: "Agriculture\n& Farmers", bg: "bg-green-100" },
            { icon: <Home size={24} className="text-red-600"/>, title: "Housing\n& Urban Development", bg: "bg-red-100" },
            { icon: <GraduationCap size={24} className="text-blue-600"/>, title: "Education\n& Scholarships", bg: "bg-blue-100" },
            { icon: <HeartPulse size={24} className="text-pink-600"/>, title: "Healthcare\n& Wellness", bg: "bg-pink-100" },
            { icon: <Briefcase size={24} className="text-amber-600"/>, title: "Employment\n& Skill Development", bg: "bg-amber-100" },
            { icon: <Coins size={24} className="text-purple-600"/>, title: "Finance\n& Loans", bg: "bg-purple-100" },
            { icon: <Users size={24} className="text-teal-600"/>, title: "Women & Child\nDevelopment", bg: "bg-teal-100" },
            { icon: <Settings size={24} className="text-indigo-600"/>, title: "Miscellaneous\n& Others", bg: "bg-indigo-100" }
          ].map((cat, i) => (
            <div key={i} className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group flex flex-col items-center text-center relative h-36">
              <div className={`w-12 h-12 rounded-full ${cat.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>{cat.icon}</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100 text-xs whitespace-pre-line leading-tight">{cat.title}</h3>
              <ChevronRight size={14} className="text-gray-300 absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity group-hover:text-indigo-500" />
            </div>
          ))}

        </div>
      </section>

      {/* POPULAR SCHEMES & SIDEBAR */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a3a] dark:text-white flex items-center gap-2">
                  <Star size={24} className="text-indigo-600 fill-indigo-100" /> Popular Schemes
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mt-1 ml-8">Most applied and Beneficial Schemes</p>
              </div>
              <Link to="/schemes" className="text-indigo-600 font-bold text-sm hover:underline flex items-center gap-1">View All Schemes <ArrowRight size={14}/></Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Scheme Card 1 */}
              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col relative group h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0"><Leaf size={20}/></div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mt-1">PM-KISAN</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4 flex-1">Direct financial assistance to small and marginal farmer families across eligible households.</p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Agriculture</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-indigo-600 text-xs font-bold cursor-pointer hover:underline group-hover:text-indigo-700">
                  View Details <ArrowRight size={14}/>
                </div>
              </div>

              {/* Scheme Card 2 */}
              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col relative group h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0"><Home size={20}/></div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mt-1">Pradhan Mantri Awas Yojana</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4 flex-1">Affordable housing support for eligible rural and urban families with subsidized construction assistance.</p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Housing</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-indigo-600 text-xs font-bold cursor-pointer hover:underline group-hover:text-indigo-700">
                  View Details <ArrowRight size={14}/>
                </div>
              </div>

              {/* Scheme Card 3 */}
              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col relative group h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0"><Zap size={20}/></div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mt-1">Startup India Seed Fund</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4 flex-1">Seed capital support for early-stage startups with scalable innovation and employment potential.</p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">Business</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-indigo-600 text-xs font-bold cursor-pointer hover:underline group-hover:text-indigo-700">
                  View Details <ArrowRight size={14}/>
                </div>
              </div>

              {/* Scheme Card 4 */}
              <div className="bg-white dark:bg-[#1a1a2e] border border-gray-100 dark:border-[#2a2a4a] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col relative group h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><GraduationCap size={20}/></div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight mt-1">National Scholarship Portal</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4 flex-1">Financial support for students from various categories for higher education.</p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Education</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-indigo-600 text-xs font-bold cursor-pointer hover:underline group-hover:text-indigo-700">
                  View Details <ArrowRight size={14}/>
                </div>
              </div>

            </div>
          </div>

          {/* Need Help Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 h-full flex flex-col">
              <h3 className="text-xl font-bold text-indigo-950 mb-6">Need Help?</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#1a1a2e] flex items-center justify-center shrink-0 shadow-sm border border-indigo-100">
                  <Bot size={32} className="text-indigo-600"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Ask AI Assistant</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium leading-relaxed">Get instant answers about schemes, eligibility and application process.</p>
                </div>
              </div>

              <Link to="/chat" className="w-full bg-[#5c5cce] hover:bg-[#4a4aa8] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md mb-8">
                Chat Now <ArrowRight size={16}/>
              </Link>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-800">
                  <Clock size={16} className="text-indigo-500"/> 24/7 Support
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-800">
                  <Zap size={16} className="text-indigo-500"/> Quick Answers
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-800">
                  <ShieldCheck size={16} className="text-indigo-500"/> Easy Guidance
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-t border-gray-200 dark:border-[#3a3a5a] bg-white dark:bg-[#1a1a2e] py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            <div className="flex items-center gap-4 px-4 w-full md:w-1/3 justify-center md:justify-start">
              <div className="text-indigo-600 bg-indigo-50 p-3 rounded-xl"><FileText size={24}/></div>
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">1,000+</p>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Government Schemes</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 pt-6 md:pt-0 w-full md:w-1/3 justify-center md:justify-start">
              <div className="text-indigo-600 bg-indigo-50 p-3 rounded-xl"><Users size={24}/></div>
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">10M+</p>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Citizens Helped</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 pt-6 md:pt-0 w-full md:w-1/3 justify-center md:justify-start">
              <div className="text-indigo-600 bg-indigo-50 p-3 rounded-xl"><ShieldCheck size={24}/></div>
              <div>
                <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">100%</p>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Trusted Information</p>
              </div>
            </div>

            <div className="px-4 pt-6 md:pt-0 w-full md:w-1/3 text-center md:text-right">
              <p className="font-custom text-xl text-indigo-600">Your Rights • Our Priority</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}