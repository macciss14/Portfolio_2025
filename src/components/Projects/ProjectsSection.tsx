import { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../UI/Section';
import { projects } from '../../data/portfolio';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects" className="bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world solutions built to solve actual problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-6 py-2 border-2 border-white rounded-full">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-dark-card rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/20 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="h-64 sm:h-80 w-full relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    The Problem
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    The Solution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors">
                    <ExternalLink size={20} />
                    Live Demo
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary rounded-lg font-medium transition-colors">
                    <Github size={20} />
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
