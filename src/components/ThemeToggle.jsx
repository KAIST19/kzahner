import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

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