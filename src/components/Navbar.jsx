import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-darkbg-900/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-darkbg-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-[rgb(218,41,28)] font-bold text-xl cursor-pointer"
              onClick={closeMenu}
            >
              Kanghyeon Zahner
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium rounded-md transition text-gray-700 dark:text-gray-300 hover:text-[rgb(218,41,28)] hover:bg-[rgb(218,41,28)]/10"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 text-sm font-medium rounded-md transition text-gray-700 dark:text-gray-300 hover:text-[rgb(218,41,28)] hover:bg-[rgb(218,41,28)]/10"
            >
              About
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-darkbg-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[rgb(218,41,28)]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-darkbg-800/95 backdrop-blur-sm transition-colors duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[rgb(218,41,28)] hover:bg-[rgb(218,41,28)]/10"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[rgb(218,41,28)] hover:bg-[rgb(218,41,28)]/10"
              onClick={closeMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 