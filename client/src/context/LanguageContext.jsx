import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('hi'); // Default to Hindi as preferred regional language

  const translations = {
    hi: {
      welcome: 'नमस्ते! Sahayak-AI में आपका स्वागत है।',
      placeholder: 'अपनी योजना या समस्या यहाँ लिखें...',
      send: 'भेजें',
      source: 'स्रोत'
    },
    en: {
      welcome: 'Hello! Welcome to Sahayak-AI.',
      placeholder: 'Type your scheme query here...',
      send: 'Send',
      source: 'Source'
    },
    mr: {
      welcome: 'नमस्कार! Sahayak-AI मध्ये आपले स्वागत आहे.',
      placeholder: 'तुमची योजना किंवा समस्या येथे लिहा...',
      send: 'पाठवा',
      source: 'स्त्रोत'
    }
  };

  const t = (key) => translations[language]?.[key] || translations['en'][key];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);