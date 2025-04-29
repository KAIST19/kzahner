import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

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
            <h4 className="text-[rgb(218,41,28)] font-medium mb-2">AI Researcher & Computer Science Student</h4>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kanghyeon Zahner</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I hold a B.S. in Computer Science from KAIST, where I conducted research on the training & text generation of LLMs. Now based in Switzerland.
            </p>

            <div className="flex gap-5 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/kanghyeon-zahner-29ba44192/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "rgb(218,41,28)" }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[rgb(218,41,28)] dark:hover:text-white transition-colors"
              >
                <FiLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:kaist19@kaist.ac.kr"
                whileHover={{ y: -5, color: "rgb(218,41,28)" }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[rgb(218,41,28)] dark:hover:text-white transition-colors"
              >
                <FiMail className="text-2xl" />
                <span>kaist19@kaist.ac.kr</span>
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
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[rgba(218,41,28,0.1)] rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-[rgba(218,41,28,0.15)] rounded-full filter blur-3xl"></div>

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
              <div className="text-[rgb(218,41,28)] text-4xl font-bold mb-2">KAIST</div>
              <div className="text-gray-700 dark:text-gray-300">B.S. in Computing</div>
            </div>
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-[rgb(218,41,28)] text-4xl font-bold mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300">Research Projects</div>
            </div>
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-[rgb(218,41,28)] text-4xl font-bold mb-2">8.0/9.0</div>
              <div className="text-gray-700 dark:text-gray-300">IELTS Score</div>
            </div>
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-[rgb(218,41,28)] text-4xl font-bold mb-2">URP</div>
              <div className="text-gray-700 dark:text-gray-300">Research Award</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
