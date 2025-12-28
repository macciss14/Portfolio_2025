import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href={personalInfo.socials.telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Telegram"
            >
              <Send size={24} />
            </a>
            <a 
              href={personalInfo.socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
