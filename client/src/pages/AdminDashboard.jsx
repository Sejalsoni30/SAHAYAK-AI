import React from 'react';
import { ShieldAlert, Users, Database, FileCheck } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-gray-50/50 dark:bg-[#0f0f16] transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 flex flex-col min-h-0 animate-fade-in">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-700 dark:from-indigo-900/80 dark:to-violet-900/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 shadow-lg shadow-indigo-200/50 dark:shadow-none border border-indigo-500/20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading tracking-tight">Admin Oversight Panel</h2>
            <p className="text-indigo-100/90 text-sm md:text-base max-w-2xl">Monitor RAG knowledge base accuracy, user sessions, and system guardrails.</p>
          </div>
          <span className="px-4 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/20 flex items-center gap-2 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            System Status: Optimal
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1,248</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Citizens & Operators</p>
          </div>
          
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Database className="text-orange-600 dark:text-orange-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">45 Vector Chunks</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Official Government PDFs Indexed</p>
          </div>
          
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileCheck className="text-emerald-600 dark:text-emerald-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">99.4%</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">RAG Guardrail Accuracy Rate</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}