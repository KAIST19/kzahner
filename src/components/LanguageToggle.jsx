import React, { useEffect, useState } from 'react';

const LanguageToggle = () => {
  const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'de', label: 'DE', fullName: 'Deutsch' },
    { code: 'ko', label: 'KO', fullName: '한국어' }
  ];

  const [currentLang, setCurrentLang] = useState(() => {
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
    // Apply the language change immediately
    document.documentElement.setAttribute('lang', currentLang);
    localStorage.setItem('language', currentLang);

    // Here you could load different translations based on language
    // For now, we'll just save the preference
  }, [currentLang]);

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
  };

  return (
    <div className="flex items-center space-x-1 px-1 py-1 rounded-md bg-gray-200 dark:bg-gray-800">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`text-xs px-2 py-1 rounded-md focus:outline-none ${currentLang === lang.code
            ? 'bg-[rgb(218,41,28)] text-white font-bold'
            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          aria-label={`Switch to ${lang.fullName}`}
          title={lang.fullName}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle; 