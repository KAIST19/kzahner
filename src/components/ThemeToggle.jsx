import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a saved preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Check for saved theme or use system preference
      return savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Apply theme whenever darkMode changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Apply the theme change immediately
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <div className={`absolute inset-0 ${darkMode ? 'block' : 'hidden'}`}>
          <FiSun size={20} />
        </div>
        <div className={`absolute inset-0 ${!darkMode ? 'block' : 'hidden'}`}>
          <FiMoon size={20} />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 