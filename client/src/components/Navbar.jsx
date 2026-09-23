import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Home, FileText, LayoutDashboard, LogIn, ShieldCheck, Menu, X, Sun, Moon } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <header className="topbar sticky top-0 z-40 bg-white/90 dark:bg-[#1a1a2e]/90 backdrop-blur-md border-b border-gray-100 dark:border-[#2a2a4a] shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="bg-[#f97316] text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform"><Bot size={20} /></span>
              <span className="font-extrabold text-xl tracking-tight text-[#1a1a3a] dark:text-white">Sahayak-AI</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link to="/" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><Home size={16} /> Home</Link>
              <Link to="/chat" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><Bot size={16} /> AI Assistant</Link>
              <Link to="/schemes" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><FileText size={16} /> Schemes</Link>
              <Link to="/services" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><ShieldCheck size={16} /> Services</Link>
              <Link to="/dashboard" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><LayoutDashboard size={16} /> Dashboard</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            
            <button 
              onClick={toggleTheme} 
              className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${isDarkMode ? 'bg-[#2a2a4a] shadow-inner' : 'bg-blue-50 shadow-inner border-blue-100'}`}
              aria-label="Toggle Dark Mode"
            >
              <span className="sr-only">Toggle Dark Mode</span>
              
              {/* Sun Icon (Light Mode) */}
              <span className={`absolute left-1.5 flex h-4 w-4 items-center justify-center transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
                <Sun size={14} className="text-amber-500 drop-shadow-sm" />
              </span>
              
              {/* Moon Icon (Dark Mode) */}
              <span className={`absolute right-1.5 flex h-4 w-4 items-center justify-center transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                <Moon size={14} className="text-indigo-300 drop-shadow-sm" />
              </span>

              {/* Sliding Thumb */}
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-1 ring-black/5 transition duration-300 ease-in-out ${
                  isDarkMode ? 'translate-x-[26px]' : 'translate-x-0.5'
                }`}
              />
            </button>

            <div className="hidden sm:block">
              <LanguageSelector />
            </div>
            


            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-[#2a2a4a] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 max-w-sm bg-white dark:bg-[#1a1a2e] h-full shadow-2xl flex flex-col animate-fade-right animate-duration-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-[#2a2a4a]">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="bg-[#f97316] text-white p-1.5 rounded-lg"><Bot size={20} /></span>
                <span className="font-extrabold text-lg text-[#1a1a3a] dark:text-white">Sahayak-AI</span>
              </Link>
              <button 
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><Home size={18} /> Home</Link>
              <Link to="/chat" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><Bot size={18} /> AI Assistant</Link>
              <Link to="/schemes" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><FileText size={18} /> Schemes</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><ShieldCheck size={18} /> Services</Link>
              <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><LayoutDashboard size={18} /> Dashboard</Link>
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-[#2a2a4a] flex flex-col gap-3">
              <LanguageSelector />
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-4 py-3 rounded-xl text-sm font-bold w-full transition-colors">
                <LogIn size={18} /> Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}