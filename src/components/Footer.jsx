import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-100 dark:bg-[rgb(15,15,15)] text-gray-800 dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Dr.<span className="text-[rgb(39,183,202)]">Portfolio</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              A showcase of AI research, machine learning projects, and technical expertise.
              Focused on deep learning, computer vision, and natural language processing.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="mailto:info@example.com" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Email: info@example.com</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Location: San Francisco, CA</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Available for: Consulting, Research Collaboration, Speaking</p>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-[rgb(39,183,202)] hover:text-white bg-gray-200 hover:bg-[rgb(39,183,202)] dark:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <FiArrowUp className="mr-2" />
              Back to Top
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-500 text-center">
            © {new Date().getFullYear()} Portfolio. All rights reserved. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 