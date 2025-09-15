import React from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiAward,
  FiCalendar,
  FiLinkedin,
} from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className='bg-white dark:bg-[rgb(15,15,15)] text-gray-900 dark:text-white py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            {t('aboutMe')}
          </h1>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-16 bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6 max-w-4xl mx-auto'
        >
          <h2 className='text-2xl font-bold mb-6 text-[rgb(218,41,28)] text-center'>
            {t('fullName')}
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-6 text-center'>
            {t('citizenInfo')}
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-[rgba(218,41,28,0.1)] p-3 rounded-full'>
                <FiMail className='text-[rgb(218,41,28)]' />
              </div>
              <div>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {t('email')}
                </p>
                <p className='font-medium'>kaist19 (at) kaist.ac.kr</p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div className='bg-[rgba(218,41,28,0.1)] p-3 rounded-full'>
                <FiLinkedin className='text-[rgb(218,41,28)]' />
              </div>
              <div>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  LinkedIn
                </p>
                <u>
                  <a
                    href='https://www.linkedin.com/in/kanghyeon-kim-29ba44192/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-medium hover:text-[rgb(218,41,28)] transition-colors'
                  >
                    Kanghyeon Zahner
                  </a>
                </u>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div className='bg-[rgba(218,41,28,0.1)] p-3 rounded-full'>
                <FiMapPin className='text-[rgb(218,41,28)]' />
              </div>
              <div>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {t('address')}
                </p>
                <p className='font-medium'>{t('currentAddress')}</p>
              </div>
            </div>
          </div>

          <div className='mt-8 pt-4 border-t border-gray-200 dark:border-gray-700'>
            <p className='text-sm text-gray-600 dark:text-gray-400 italic text-left'>
              {t('nameExplanation')}
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mb-16'
        >
          <div className='max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6'>
            <h2 className='text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4'>
              {t('education')}
            </h2>

            <div className='mb-6'>
              <div className='flex flex-col md:flex-row justify-between mb-2'>
                <h3 className='text-xl font-bold'>
                  Institut Polytechnique de Paris (IP Paris)
                </h3>
                <div className='flex items-center text-gray-600 dark:text-gray-400'>
                  <FiCalendar className='mr-2' />
                  <span>Sep 2025 – Present</span>
                </div>
              </div>
              <p className='text-gray-700 dark:text-gray-300 mb-2'>
                <u>
                  <a
                    href='https://www.ip-paris.fr/en/education/masters/computer-science-program/master-year-1-data-and-artificial-intelligence'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-[rgb(218,41,28)] transition-colors'
                  >
                    {t('msDataAI')}
                  </a>
                </u>
              </p>
              <p className='text-gray-600 dark:text-gray-400 mt-2'>
                {t('palaiseauFrance')}
              </p>
            </div>
            <div className='mb-6'>
              <div className='flex flex-col md:flex-row justify-between mb-2'>
                <h3 className='text-xl font-bold'>
                  Korea Advanced Institute of Science and Technology (KAIST)
                </h3>
                <div className='flex items-center text-gray-600 dark:text-gray-400'>
                  <FiCalendar className='mr-2' />
                  <span>Feb 2019 – Feb 2025</span>
                </div>
              </div>
              <p className='text-gray-700 dark:text-gray-300 mb-2'>
                <u>
                  <a
                    href='https://cs.kaist.ac.kr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-[rgb(218,41,28)] transition-colors'
                  >
                    {t('bsComputing')}
                  </a>
                </u>
              </p>
              <p className='text-gray-600 dark:text-gray-400 mt-2'>
                {t('daejeonKorea')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mb-16'
        >
          <div className='max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6'>
            <h2 className='text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4'>
              {t('experience')}
            </h2>

            <div className='mb-10'>
              <div className='flex flex-col md:flex-row justify-between mb-2'>
                <h3 className='text-xl font-bold'>U&I Lab, KAIST</h3>
                <div className='flex items-center text-gray-600 dark:text-gray-400'>
                  <FiCalendar className='mr-2' />
                  <span>Aug 2023 – Dec 2024</span>
                </div>
              </div>
              <p className='text-[rgb(218,41,28)] mb-4'>
                {t('undergradResearcher')}
              </p>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2'>
                <li>{t('exp1Point1')}</li>
                <li>
                  {t('exp1Point2')}
                  <ul className='list-inside pl-5 mt-1 space-y-1 text-gray-600 dark:text-gray-400'>
                    <li>
                      {t('exp1Project1')}
                      <a
                        href='/documents/AAfLM.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='ml-2 text-[rgb(218,41,28)] hover:underline'
                      >
                        [PDF]
                      </a>
                    </li>
                    <li>
                      {t('exp1Project2')}
                      <a
                        href='/documents/FERT.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='ml-2 text-[rgb(218,41,28)] hover:underline'
                      >
                        [PDF]
                      </a>
                    </li>
                  </ul>
                </li>
                <li>{t('exp1Point3')}</li>
              </ul>
              <p className='text-gray-600 dark:text-gray-400 mt-4'>
                {t('daejeonKorea')}
              </p>
            </div>

            <div>
              <div className='flex flex-col md:flex-row justify-between mb-2'>
                <h3 className='text-xl font-bold'>Republic of Korea Army</h3>
                <div className='flex items-center text-gray-600 dark:text-gray-400'>
                  <FiCalendar className='mr-2' />
                  <span>Feb 2021 – Aug 2022</span>
                </div>
              </div>
              <p className='text-[rgb(218,41,28)] mb-4'>{t('sergeant')}</p>
              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2'>
                <li>{t('exp2Point1')}</li>
                <li>{t('exp2Point2')}</li>
                <li>{t('exp2Point3')}</li>
                <li>{t('exp2Point4')}</li>
              </ul>
              <p className='text-gray-600 dark:text-gray-400 mt-4'>
                {t('busanKorea')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mb-16'
        >
          <div className='max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6'>
            <h2 className='text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4'>
              {t('awards')}
            </h2>

            <div className='mb-6'>
              <div className='flex flex-col md:flex-row justify-between mb-2'>
                <div className='flex items-start gap-3'>
                  <div className='bg-[rgba(218,41,28,0.1)] p-2 rounded-full mt-1'>
                    <FiAward className='text-[rgb(218,41,28)]' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>{t('award1Title')}</h3>
                    <p className='text-gray-700 dark:text-gray-300 mt-2'>
                      {t('award1Desc')}
                    </p>
                  </div>
                </div>
                <div className='flex items-center text-gray-600 dark:text-gray-400 whitespace-nowrap ml-11 md:ml-0'>
                  <FiCalendar className='mr-2' />
                  <span>Sep 2024</span>
                </div>
              </div>
              <p className='text-gray-600 dark:text-gray-400 mt-4 ml-11'>
                {t('daejeonKorea')}
              </p>
            </div>

            <div>
              <div className='flex flex-col md:flex-row justify-between mb-2'>
                <div className='flex items-start gap-3'>
                  <div className='bg-[rgba(218,41,28,0.1)] p-2 rounded-full mt-1'>
                    <FiAward className='text-[rgb(218,41,28)]' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>{t('award2Title')}</h3>
                    <p className='text-gray-700 dark:text-gray-300 mt-2'>
                      {t('award2Desc')}
                    </p>
                  </div>
                </div>
                <div className='flex items-center text-gray-600 dark:text-gray-400 whitespace-nowrap ml-11 md:ml-0'>
                  <FiCalendar className='mr-2' />
                  <span>Sep 2019</span>
                </div>
              </div>
              <p className='text-gray-600 dark:text-gray-400 mt-4 ml-11'>
                {t('daejeonKorea')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className='max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6'>
            <h2 className='text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4'>
              {t('skills')}
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-bold text-[rgb(218,41,28)] mb-4'>
                  {t('technical')}
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-2'>
                  <span className='font-medium'>
                    {t('programmingLanguages')}:
                  </span>{' '}
                  C, Python, Scala, F#, SQL
                </p>
                <p className='text-gray-700 dark:text-gray-300'>
                  <span className='font-medium'>{t('librariesTools')}:</span>{' '}
                  PyTorch, Git, Hugging Face Transformers
                </p>
              </div>

              <div>
                <h3 className='text-xl font-bold text-[rgb(218,41,28)] mb-4'>
                  {t('aiVision')}
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {t('aiSkills')}
                </p>
              </div>

              <div>
                <h3 className='text-xl font-bold text-[rgb(218,41,28)] mb-4'>
                  {t('language')}
                </h3>
                <p className='text-gray-700 dark:text-gray-300 mb-1'>
                  <span className='font-medium'>{t('koreanNative')}</span>
                </p>
                <p className='text-gray-700 dark:text-gray-300 mb-1'>
                  <span className='font-medium'>{t('englishLevel')}</span>
                </p>
                <p className='text-gray-700 dark:text-gray-300'>
                  <span className='font-medium'>{t('otherLanguages')}</span>
                </p>
              </div>

              <div>
                <h3 className='text-xl font-bold text-[rgb(218,41,28)] mb-4'>
                  {t('communicationCollaboration')}
                </h3>
                <p className='text-gray-700 dark:text-gray-300'>
                  {t('communicationSkills')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
