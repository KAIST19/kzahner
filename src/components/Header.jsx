import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[rgb(15,15,15)]/90 backdrop-blur-md py-4 shadow-md'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-white text-2xl font-bold">
            Dr.<span className="text-[rgb(218,41,28)]">Portfolio</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg transition-colors hover:text-[rgb(218,41,28)] ${isActive ? 'text-[rgb(218,41,28)]' : 'text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="#"
              className="bg-[rgb(218,41,28)] hover:bg-[rgb(198,31,18)] text-white px-5 py-2 rounded-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open('/resume.pdf', '_blank');
              }}
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[rgb(15,15,15)] border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg py-2 transition-colors hover:text-[rgb(218,41,28)] ${isActive ? 'text-[rgb(218,41,28)]' : 'text-white'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="#"
                className="inline-block bg-[rgb(218,41,28)] hover:bg-[rgb(198,31,18)] text-white px-5 py-2 rounded-lg font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/resume.pdf', '_blank');
                  setIsOpen(false);
                }}
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 