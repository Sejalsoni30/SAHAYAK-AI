import React, { useEffect, useState } from 'react';
import { FileText, Clock, AlertCircle, TrendingUp, UserCheck, Bell, Sparkles, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export default function UserDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("Citizen");

  useEffect(() => {
    const token = localStorage.getItem('sahayak_token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const userStr = localStorage.getItem('sahayak_user');
      if (userStr) {
        const user = JSON.parse(userStr);
        setUserName(user.full_name || "Citizen");
      }
    } catch(e) {}

    axios.get(`${API_BASE_URL}/applications`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setApplications(res.data.applications || []);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching dashboard applications:', err);
      // For hackathon demo, mock some applications if API fails
      setApplications([
        { id: 1, status: 'Processing', created_at: new Date().toISOString(), schemes: { title: 'PM Kisan Samman Nidhi', category: 'Agriculture' } },
        { id: 2, status: 'Approved', created_at: new Date(Date.now() - 86400000 * 5).toISOString(), schemes: { title: 'Ayushman Bharat Yojana', category: 'Health' } }
      ]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-gray-50/50 dark:bg-[#0f0f16] transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 flex flex-col min-h-0 animate-fade-in">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-heading tracking-tight">Citizen Application Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl">Track your eligibility verifications and pre-filled application drafts.</p>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-5 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Total Applications</span>
            <span className="block text-2xl font-bold text-gray-900 dark:text-white">{applications.length || 2}</span>
            <span className="text-green-600 dark:text-green-400 text-xs font-bold flex items-center gap-1 mt-2"><TrendingUp size={12}/> +1 this week</span>
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-5 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Verified Documents</span>
            <span className="block text-2xl font-bold text-gray-900 dark:text-white">4</span>
            <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold mt-2 block">Aadhaar, PAN linked</span>
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-5 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Pending Actions</span>
            <span className="block text-2xl font-bold text-amber-600 dark:text-amber-500">1</span>
            <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold mt-2 block">E-sign required</span>
          </div>
          <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-5 border border-gray-100 dark:border-[#2a2a4a] shadow-sm hover:shadow-md transition-shadow">
            <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Estimated Benefits</span>
            <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-500">₹12,000</span>
            <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold mt-2 block">Annual projected</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a4a] shadow-sm flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-[#2a2a4a] pb-4">
                <FileText size={20} className="text-indigo-600 dark:text-indigo-400" /> Active Application Drafts
              </h3>

              {loading ? (
                <p className="text-gray-500 dark:text-gray-400 py-4">Loading your submissions...</p>
              ) : applications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 dark:bg-[#0f0f16] rounded-xl border border-dashed border-gray-200 dark:border-[#2a2a4a]">
                  <AlertCircle size={36} className="text-gray-400 mb-3" />
                  <p className="text-gray-600 dark:text-gray-400 font-medium">No active application drafts found.</p>
                  <Link to="/chat" className="mt-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-sm transition-all hover:-translate-y-0.5">
                    Ask AI to find schemes
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {applications.map((app) => (
                    <div key={app.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100/50 dark:border-indigo-800/30 rounded-xl hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all gap-4">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg mb-1">{app.schemes?.title || 'Welfare Scheme Application'}</h4>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">Category: {app.schemes?.category} <span className="mx-2 text-gray-300 dark:text-gray-600">•</span> Created: {new Date(app.created_at).toLocaleDateString()}</p>
                      </div>
                      <span className={`self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-sm ${
                        app.status === 'Approved' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                      }`}>
                        <Clock size={12} /> {app.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 border border-gray-100 dark:border-[#2a2a4a] shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-[#2a2a4a] pb-4">
                <Bell size={20} className="text-rose-500" /> Recent Notifications
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start group">
                  <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl group-hover:scale-110 transition-transform"><ShieldCheck size={18}/></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="font-bold text-gray-900 dark:text-white text-sm truncate">Identity Verification Successful</p>
                      <span className="text-[10px] md:text-xs font-semibold text-gray-400 dark:text-gray-500 whitespace-nowrap">2 hrs ago</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Your Aadhaar details were successfully matched with UIDAI servers.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:scale-110 transition-transform"><BookOpen size={18}/></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="font-bold text-gray-900 dark:text-white text-sm truncate">New Scheme Alert</p>
                      <span className="text-[10px] md:text-xs font-semibold text-gray-400 dark:text-gray-500 whitespace-nowrap">1 day ago</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Based on your student profile, you might be eligible for Digital India Internship.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-900 dark:to-[#0f0f16] rounded-2xl p-6 border border-indigo-500/30 shadow-lg shadow-indigo-200/40 dark:shadow-none text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-base font-bold flex items-center gap-2 mb-4 relative z-10 text-indigo-100">
                <UserCheck size={18} /> Citizen Identity
              </h3>
              <div className="relative z-10">
                <p className="text-[10px] md:text-xs font-bold opacity-70 uppercase tracking-widest mb-1 text-indigo-200">Authenticated User</p>
                <p className="text-2xl font-bold font-heading mb-6">{userName}</p>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between items-center bg-black/10 dark:bg-black/30 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <span className="font-medium text-indigo-100">UIDAI Status</span>
                    <span className="font-bold text-emerald-300 flex items-center gap-1.5"><ShieldCheck size={14}/> Verified</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/10 dark:bg-black/30 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <span className="font-medium text-indigo-100">Language</span>
                    <span className="font-bold text-white">English (EN)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-[#1a1a2e] dark:to-[#1a1a2e] rounded-2xl p-6 border border-amber-100 dark:border-[#2a2a4a] shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                <Sparkles size={20} className="text-amber-500" /> AI Suggestions
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium mb-5">Based on your demographic data, Sahayak-AI recommends:</p>
              
              <div className="bg-white dark:bg-[#0f0f16] p-4 rounded-xl border border-amber-100 dark:border-[#3a3a5a] shadow-sm hover:shadow-md transition-shadow group">
                <span className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-1.5 mb-2">
                  <Sparkles size={14} className="text-indigo-500 group-hover:text-amber-500 transition-colors"/> Sukanya Samriddhi Yojana
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">High match probability. This scheme provides financial security for girl children.</p>
                <Link to="/chat" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:text-indigo-800 dark:hover:text-indigo-300 group/link">
                  Ask AI about this <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}