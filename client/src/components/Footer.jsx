import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Globe, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12 border-t border-gray-800 font-sans mt-auto z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#f97316] text-white p-2 rounded-xl"><Bot size={24}/></div>
              <div>
                <h3 className="text-xl font-bold tracking-wide">Sahayak-AI</h3>
                <p className="text-xs text-gray-400">Multilingual AI & Public Service Assistant</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-sm mb-6">
              Empowering citizens by bridging the gap between complex government services and accessible, native-language support through advanced RAG AI.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 bg-gray-800/50 w-max px-3 py-1.5 rounded-lg">
              <ShieldCheck size={14} className="text-emerald-500" /> Government Verified Sources
            </div>
          </div>

          {/* Links: Government Services */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wider text-sm uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/schemes" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">All Schemes</Link></li>
              <li><Link to="/schemes" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Subsidies</Link></li>
              <li><Link to="/schemes" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Certificates</Link></li>
              <li><Link to="/schemes" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Track Application</Link></li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wider text-sm uppercase">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Help & Support</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact Us</Link></li>
              <li><Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Sitemap</Link></li>
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wider text-sm uppercase">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Terms & Conditions</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Accessibility</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-xs text-gray-500 font-semibold gap-4">
          <p>&copy; {new Date().getFullYear()} Sahayak-AI Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Globe size={14} className="text-gray-400"/> Multilingual Support</span>
            <span className="flex items-center gap-1.5"><Bot size={14} className="text-gray-400"/> AI Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}