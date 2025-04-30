import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FiGlobe } from 'react-icons/fi';

const LanguageToggle = () => {
  const languages = [
    { code: 'en', fullName: 'English' },
    { code: 'de', fullName: 'Deutsch' },
    { code: 'ko', fullName: '한국어' }
  ];

  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Find current language
  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        aria-label="Change language"
      >
        <div className="flex items-center">
          <FiGlobe size={20} />
        </div>
      </button>

      <div
        className={`absolute right-0 top-full pt-1 w-32 z-50 ${!isOpen ? 'hidden' : 'block'}`}
        style={{ marginTop: '0' }}
      >
        <div className="py-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${language === lang.code ? 'bg-gray-100 dark:bg-gray-700 text-[rgb(218,41,28)] font-semibold' : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              <span className="mr-2">{lang.code.toUpperCase()}</span>
              <span>{lang.fullName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle; 