import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { id, title, description, image, tags, githubLink, demoLink } = project;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-teal-400 dark:hover:border-[rgb(39,183,202)]"
    >
      <div className="relative overflow-hidden group h-52">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[rgb(39,183,202)] bg-gray-800/80 p-2 rounded-full"
              >
                <FiGithub size={18} />
              </a>
            )}
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[rgb(39,183,202)] bg-gray-800/80 p-2 rounded-full"
              >
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium bg-[rgba(39,183,202,0.15)] text-[rgb(39,183,202)] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/projects/${id}`}
          className="inline-flex items-center text-[rgb(39,183,202)] hover:text-[rgb(29,153,172)] font-medium"
        >
          View Details
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 