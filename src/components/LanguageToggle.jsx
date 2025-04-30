import React, { useState, useRef, useEffect } from 'react';
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
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle clicks outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    changeLanguage(langCode);
    // Keep dropdown open on mobile to provide visual feedback of selection
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  // Find current language
  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <FiGlobe size={20} />
        </div>
      </button>

      <div
        ref={dropdownRef}
        className={`absolute right-0 top-full pt-1 w-32 z-50 ${!isOpen ? 'hidden' : 'block'}`}
      >
        <div className="py-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => handleLanguageChange(lang.code, e)}
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