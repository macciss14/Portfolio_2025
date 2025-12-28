import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../UI/ThemeToggle';
import { personalInfo } from '../../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="text-2xl font-bold text-primary dark:text-white"
            >
              {personalInfo.name.split(' ')[0]}<span className="text-primary-dark">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary dark:text-primary'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-dark-card shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.href.substring(1)
                  ? 'text-primary bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
