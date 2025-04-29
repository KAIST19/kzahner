import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBookOpen, FiCode, FiLayers, FiServer, FiUsers, FiMail, FiPhone, FiMapPin, FiAward, FiCalendar } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';

const skills = [
  {
    category: "Machine Learning",
    icon: <FiLayers />,
    items: [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "Scikit-Learn", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Reinforcement Learning", level: 75 },
    ]
  },
  {
    category: "Software Development",
    icon: <FiCode />,
    items: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "SQL", level: 85 },
    ]
  },
  {
    category: "Research & Development",
    icon: <FiBookOpen />,
    items: [
      { name: "Data Analysis", level: 90 },
      { name: "Experiment Design", level: 85 },
      { name: "Technical Writing", level: 90 },
      { name: "Research Methods", level: 90 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Literature Review", level: 90 },
    ]
  },
  {
    category: "Infrastructure & Deployment",
    icon: <FiServer />,
    items: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "MLOps", level: 80 },
      { name: "Git", level: 90 },
    ]
  },
  {
    category: "Collaboration & Leadership",
    icon: <FiUsers />,
    items: [
      { name: "Technical Project Management", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Technical Mentoring", level: 90 },
      { name: "Cross-functional Collaboration", level: 90 },
      { name: "Client Communication", level: 85 },
      { name: "Public Speaking", level: 80 },
    ]
  }
];

const education = [
  {
    degree: "Ph.D. in Computer Science",
    focus: "Machine Learning and Artificial Intelligence",
    institution: "Stanford University",
    period: "2015 - 2020",
    description: "Conducted research on neural network optimization methods for low-resource environments, published 6 papers in top-tier conferences including NeurIPS and ICML."
  },
  {
    degree: "M.S. in Computer Science",
    focus: "Data Science and Machine Learning",
    institution: "University of California, Berkeley",
    period: "2013 - 2015",
    description: "Specialized in machine learning algorithms and large-scale data processing. Graduate research assistant in the Berkeley AI Research Lab."
  },
  {
    degree: "B.S. in Computer Engineering",
    focus: "Minor in Mathematics",
    institution: "Massachusetts Institute of Technology",
    period: "2009 - 2013",
    description: "Graduated with honors. Undergraduate research in distributed systems and parallel computing."
  }
];

const experience = [
  {
    title: "Lead AI Researcher",
    company: "DeepTech AI",
    period: "2020 - Present",
    description: "Leading a team of researchers working on next-generation deep learning algorithms for computer vision and NLP applications. Published 4 research papers and filed 2 patents.",
    achievements: [
      "Developed a novel transformer architecture that reduced training time by 40% while maintaining accuracy",
      "Led a project that improved video understanding models, resulting in a 25% performance increase on standard benchmarks",
      "Mentored 5 junior researchers, with 3 going on to publish their first first-author papers"
    ]
  },
  {
    title: "Research Scientist",
    company: "Tech Innovation Labs",
    period: "2018 - 2020",
    description: "Conducted research on self-supervised learning techniques for computer vision applications. Collaborated with product teams to implement research findings in production systems.",
    achievements: [
      "Developed self-supervised learning methods that reduced labeled data requirements by 70%",
      "Created a framework for rapid experimentation that improved research iteration speed by 3x",
      "Collaborated with the product team to deploy models that improved user engagement by 15%"
    ]
  },
  {
    title: "AI Research Intern",
    company: "Global AI Research",
    period: "Summer 2017",
    description: "Worked on developing efficient neural network architectures for mobile devices. Implemented knowledge distillation techniques to compress large models.",
    achievements: [
      "Designed a compact neural network that ran 5x faster than baseline while retaining 95% accuracy",
      "Implemented an automated model compression pipeline that was adopted by the production team",
      "Contributed to an open-source library for on-device machine learning"
    ]
  }
];

const publications = [
  {
    title: "Efficient Transformer Networks for Resource-Constrained Devices",
    venue: "NeurIPS 2022",
    authors: "J. Smith, A. Johnson, S. Williams",
    link: "https://example.com/paper1"
  },
  {
    title: "Self-Supervised Feature Learning for Low-Data Regimes",
    venue: "ICML 2021",
    authors: "J. Smith, P. Brown, M. Davis",
    link: "https://example.com/paper2"
  },
  {
    title: "Neural Architecture Search for Memory-Efficient Models",
    venue: "CVPR 2020",
    authors: "J. Smith, R. Garcia, T. Miller",
    link: "https://example.com/paper3"
  },
  {
    title: "Distillation Methods for Compact Neural Networks",
    venue: "ICLR 2019",
    authors: "J. Smith, L. Taylor, A. Robinson",
    link: "https://example.com/paper4"
  }
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-[rgb(15,15,15)] text-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('aboutMe')}</h1>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-[rgb(218,41,28)] text-center">{t('fullName')}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{t('citizenInfo')}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[rgba(218,41,28,0.1)] p-3 rounded-full">
                <FiPhone className="text-[rgb(218,41,28)]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('phone')}</p>
                <p className="font-medium">+82 10 6614 5817</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[rgba(218,41,28,0.1)] p-3 rounded-full">
                <FiMail className="text-[rgb(218,41,28)]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('email')}</p>
                <p className="font-medium">kaist19@kaist.ac.kr</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[rgba(218,41,28,0.1)] p-3 rounded-full">
                <FiMapPin className="text-[rgb(218,41,28)]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('address')}</p>
                <p className="font-medium">48 Sonnhaldenstrasse</p>
                <p className="font-medium">Kaltbrunn, SG 8722</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">{t('education')}</h2>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Korea Advanced Institute of Science and Technology (KAIST)</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>February 2019 – February 2025</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t('bsComputing')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">{t('csMajor')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('gpaInfo')}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{t('daejeonKorea')}</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">{t('experience')}</h2>

            <div className="mb-10">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">U&I Lab, KAIST</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>August 2023 – December 2024</span>
                </div>
              </div>
              <p className="text-[rgb(218,41,28)] mb-4">{t('undergradResearcher')}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>{t('exp1Point1')}</li>
                <li>{t('exp1Point2')}
                  <ul className="list-inside pl-5 mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>{t('exp1Project1')}</li>
                    <li>{t('exp1Project2')}</li>
                  </ul>
                </li>
                <li>{t('exp1Point3')}</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mt-4">{t('daejeonKorea')}</p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold">Republic of Korea Army</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>February 2021 – August 2022</span>
                </div>
              </div>
              <p className="text-[rgb(218,41,28)] mb-4">{t('sergeant')}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>{t('exp2Point1')}</li>
                <li>{t('exp2Point2')}</li>
                <li>{t('exp2Point3')}</li>
                <li>{t('exp2Point4')}</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 mt-4">{t('busanKorea')}</p>
            </div>
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">{t('awards')}</h2>

            <div className="mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-start gap-3">
                  <div className="bg-[rgba(218,41,28,0.1)] p-2 rounded-full mt-1">
                    <FiAward className="text-[rgb(218,41,28)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t('award1Title')}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{t('award1Desc')}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 whitespace-nowrap ml-11 md:ml-0">
                  <FiCalendar className="mr-2" />
                  <span>September 2024</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 ml-11">{t('daejeonKorea')}</p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-start gap-3">
                  <div className="bg-[rgba(218,41,28,0.1)] p-2 rounded-full mt-1">
                    <FiAward className="text-[rgb(218,41,28)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t('award2Title')}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{t('award2Desc')}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 whitespace-nowrap ml-11 md:ml-0">
                  <FiCalendar className="mr-2" />
                  <span>September 2019</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 ml-11">{t('daejeonKorea')}</p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800/40 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">{t('skills')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[rgb(218,41,28)] mb-4">{t('technical')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><span className="font-medium">{t('programmingLanguages')}:</span> C, Python, Scala, F#, SQL</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">{t('librariesTools')}:</span> PyTorch, Git, Hugging Face Transformers</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[rgb(218,41,28)] mb-4">{t('aiVision')}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t('aiSkills')}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[rgb(218,41,28)] mb-4">{t('language')}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><span className="font-medium">{t('koreanNative')}</span></p>
                <p className="text-gray-700 dark:text-gray-300 mb-1"><span className="font-medium">{t('englishLevel')}</span></p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">{t('otherLanguages')}</span></p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[rgb(218,41,28)] mb-4">{t('communicationCollaboration')}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t('communicationSkills')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 