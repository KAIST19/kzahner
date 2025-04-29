import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'de', label: 'DE', fullName: 'Deutsch' },
    { code: 'ko', label: 'KO', fullName: '한국어' }
  ];

  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 px-1 py-1 rounded-md bg-gray-200 dark:bg-gray-800">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`text-xs px-2 py-1 rounded-md focus:outline-none ${language === lang.code
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