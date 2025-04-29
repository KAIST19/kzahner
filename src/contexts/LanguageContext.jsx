import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

// English translations (default)
const translations = {
  en: {
    // Home page
    aiResearcher: "AI Researcher & Computer Science Student",
    bio: "I hold a B.S. in Computer Science from KAIST, where I conducted research on the training & text generation of LLMs. Now based in Switzerland.",
    learnAbout: "Learn About",
    me: "Me",
    discoverMore: "Discover more about my background, research interests, and projects.",
    learnAboutMeBtn: "Learn About Me",
  },
  de: {
    // Home page
    aiResearcher: "KI-Forscher & Informatikstudent",
    bio: "Ich besitze einen B.S. in Informatik von KAIST, wo ich an Training und Textgenerierung von LLMs forschte. Jetzt in der Schweiz ansässig.",
    learnAbout: "Mehr über",
    me: "mich",
    discoverMore: "Erfahren Sie mehr über meinen Hintergrund, Forschungsinteressen und Projekte.",
    learnAboutMeBtn: "Mehr über mich",
  },
  ko: {
    // Home page
    aiResearcher: "AI 연구원 & 컴퓨터 과학 학생",
    bio: "KAIST에서 컴퓨터 과학 학사 학위를 받았으며, LLM의 학습 및 텍스트 생성에 관한 연구를 수행했습니다. 현재 스위스에 거주 중입니다.",
    learnAbout: "나에 대해",
    me: "더 알아보기",
    discoverMore: "제 배경, 연구 관심사 및 프로젝트에 대해 자세히 알아보세요.",
    learnAboutMeBtn: "나에 대해 더 알아보기",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check if user has a saved preference
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      // Return saved language or default to English
      return savedLang || 'en';
    }
    return 'en';
  });

  // Apply language whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext); 