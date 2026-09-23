import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    localStorage.setItem('sahayak_lang', selectedLang);
    
    // Trigger Google Translate hidden dropdown
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = selectedLang;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="flex items-center gap-2 bg-gray-50 dark:bg-[#2a2a4a] border border-gray-200 dark:border-[#3a3a5a] px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer">
      <Globe size={16} className="text-[#f97316] drop-shadow-sm" />
      <select
        value={language}
        onChange={handleLanguageChange}
        className="bg-transparent text-sm font-semibold text-gray-700 dark:text-gray-200 focus:outline-none cursor-pointer appearance-none pr-1"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी (Hindi)</option>
        <option value="mr">मराठी (Marathi)</option>
        <option value="ta">தமிழ் (Tamil)</option>
        <option value="te">తెలుగు (Telugu)</option>
        <option value="bn">বাংলা (Bengali)</option>
        <option value="gu">ગુજરાતી (Gujarati)</option>
        <option value="kn">ಕನ್ನಡ (Kannada)</option>
        <option value="ml">മലയാളം (Malayalam)</option>
        <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
      </select>
    </div>
  );
}