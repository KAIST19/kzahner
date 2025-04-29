import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="bg-white dark:bg-[rgb(15,15,15)] text-gray-900 dark:text-white min-h-screen transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h4 className="text-[rgb(39,183,202)] font-medium mb-2">AI Researcher & Computer Science Student</h4>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kanghyeon Zahner</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I hold a B.S. in Computer Science from KAIST, where I conducted research on the training & text generation of LLMs. Now based in Switzerland.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[rgb(39,183,202)] hover:bg-[rgb(29,153,172)] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch <FiArrowRight />
                </Link>
              </motion.button>
            </div>
            
            <div className="flex gap-5">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "rgb(39,183,202)" }}
                className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] dark:hover:text-white transition-colors text-2xl"
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "rgb(39,183,202)" }}
                className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] dark:hover:text-white transition-colors text-2xl"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:kaist19@kaist.ac.kr" 
                whileHover={{ y: -5, color: "rgb(39,183,202)" }}
                className="text-gray-600 dark:text-gray-400 hover:text-[rgb(39,183,202)] dark:hover:text-white transition-colors text-2xl"
              >
                <FiMail />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Hero Image or Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[rgba(39,183,202,0.1)] rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-[rgba(39,183,202,0.15)] rounded-full filter blur-3xl"></div>
              
              {/* Profile Image with Border */}
              <div className="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                <img 
                  src="/img/kanghyeon_at_museum.png" 
                  alt="Kanghyeon at Museum"
                  className="w-full h-auto max-h-[350px] object-cover object-center rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="my-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-[rgb(39,183,202)] text-4xl font-bold mb-2">KAIST</div>
              <div className="text-gray-700 dark:text-gray-300">B.S. in Computing</div>
            </div>
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-[rgb(39,183,202)] text-4xl font-bold mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300">Research Projects</div>
            </div>
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-[rgb(39,183,202)] text-4xl font-bold mb-2">8.0/9.0</div>
              <div className="text-gray-700 dark:text-gray-300">IELTS Score</div>
            </div>
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-[rgb(39,183,202)] text-4xl font-bold mb-2">URP</div>
              <div className="text-gray-700 dark:text-gray-300">Research Award</div>
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center max-w-3xl mx-auto my-24"
        >
          <h2 className="text-3xl font-bold mb-6">Interested in <span className="text-[rgb(39,183,202)]">AI research</span> or collaboration?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's connect!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[rgb(39,183,202)] hover:bg-[rgb(29,153,172)] text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Get in Touch <FiArrowRight />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
