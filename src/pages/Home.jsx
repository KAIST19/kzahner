import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className='bg-white dark:bg-[rgb(15,15,15)] text-gray-900 dark:text-white min-h-screen transition-colors duration-200'>
      <div className='container mx-auto px-4 py-12 md:py-20'>
        {/* Main content card that integrates all elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-[rgb(20,20,20)] border border-gray-200 dark:border-gray-800 shadow-2xl'
        >
          {/* Decorative elements */}
          <div className='absolute -top-20 -left-20 w-60 h-60 bg-[rgba(218,41,28,0.08)] rounded-full filter blur-3xl'></div>
          <div className='absolute bottom-20 right-20 w-80 h-80 bg-[rgba(218,41,28,0.12)] rounded-full filter blur-3xl'></div>

          <div className='flex flex-col lg:flex-row'>
            {/* Left side - Profile image in a creative frame */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='lg:w-2/5 relative overflow-hidden lg:self-stretch lg:flex'
            >
              <div className='h-full relative flex-grow'>
                <div className='absolute inset-0 bg-gradient-to-br from-[rgba(218,41,28,0.1)] to-transparent z-0'></div>
                <img
                  src='/img/kanghyeon_at_museum.png'
                  alt='Kanghyeon at Museum'
                  className='w-full h-full object-cover object-center sticky top-0'
                />
                <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/80 to-transparent'></div>

                {/* Name overlay on mobile */}
                <div className='absolute bottom-6 left-6 lg:hidden'>
                  <h1 className='text-4xl font-bold text-white drop-shadow-lg'>
                    {t('fullName')}
                  </h1>
                  <h4 className='text-[rgb(218,41,28)] font-medium mt-1 drop-shadow-md'>
                    {t('aiResearcher')}
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Right side - Text content and CTA integrated */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='lg:w-3/5 p-6 md:p-10 lg:p-12 flex flex-col'
            >
              {/* Header - Hidden on mobile, shown on desktop */}
              <div className='hidden lg:block mb-6'>
                <h4 className='text-[rgb(218,41,28)] font-medium mb-2'>
                  {t('aiResearcher')}
                </h4>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
                  {t('fullName')}
                </h1>
              </div>

              {/* Bio */}
              <div className='mb-8 mt-4 lg:mt-0'>
                <p className='text-xl text-gray-700 dark:text-gray-300 leading-relaxed'>
                  {t('bio')}
                </p>
              </div>

              {/* Social links */}
              <div className='flex flex-wrap gap-4 md:gap-5 mb-8'>
                <motion.a
                  href='https://www.linkedin.com/in/kanghyeon-kim-29ba44192/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ y: -3 }}
                  className='flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[rgb(218,41,28)] dark:hover:text-[rgb(218,41,28)] transition-colors'
                >
                  <FiLinkedin className='text-2xl' />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.p
                  whileHover={{ y: -3 }}
                  className='flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[rgb(218,41,28)] dark:hover:text-[rgb(218,41,28)] transition-colors'
                >
                  <FiMail className='text-2xl' />
                  <span>kaist19 (at) kaist.ac.kr</span>
                </motion.p>
              </div>

              {/* Learn About Me section - Integrated instead of separate */}
              <div className='mt-auto pt-4 border-t border-gray-200 dark:border-gray-800'>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('learnAbout')}{' '}
                  <span className='text-[rgb(218,41,28)]'>{t('me')}</span>
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-6'>
                  {t('discoverMore')}
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className='bg-[rgb(218,41,28)] hover:bg-[rgb(198,31,18)] text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 shadow-md'
                >
                  <Link to='/about' className='flex items-center gap-2'>
                    {t('learnAboutMeBtn')} <FiArrowRight />
                  </Link>
                </motion.button>
              </div>

              {/* Recommendation */}
              <div className='mt-8 pt-4 border-t border-gray-200 dark:border-gray-800'>
                <h3 className='text-2xl font-bold mb-4'>
                  {t('recommendation')}
                </h3>
                <blockquote className='text-gray-700 dark:text-gray-300 mb-6'>
                  "Kanghyeon worked with me as an undergraduate researcher for
                  about a year and a half. From the start, he showed exceptional
                  curiosity and independence, leading projects on language
                  models and even exploring the ethical dimensions of AI. He
                  always came prepared, thought deeply, and communicated
                  clearly. It was a real pleasure to mentor him, and I'm
                  confident he'll continue to grow as a thoughtful and capable
                  researcher."
                </blockquote>
                <div className='text-gray-600 dark:text-gray-400'>
                  <span>— Jiseon Kim, Ph.D. Candidate at U&I Lab, KAIST (May 2025)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
