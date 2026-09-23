import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Map } from 'lucide-react';

export default function Sitemap() {
  const sitemapLinks = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "AI Assistant", path: "/chat" },
        { name: "Scheme Directory", path: "/schemes" },
        { name: "User Dashboard", path: "/dashboard" },
        { name: "Login / Register", path: "/login" },
      ]
    },
    {
      title: "Resources & Support",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Help & Support", path: "/help" },
      ]
    },
    {
      title: "Legal Information",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Accessibility", path: "/accessibility" },
        { name: "Disclaimer", path: "/disclaimer" },
      ]
    }
  ];

  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans pb-20">
      
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold mb-6">
            <ArrowLeft size={16}/> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Map size={40} className="text-indigo-400" />
            <h1 className="text-4xl md:text-5xl font-extrabold">Sitemap</h1>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl">A complete overview of the Sahayak-AI platform.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sitemapLinks.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link to={link.path} className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
