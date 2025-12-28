import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

export default function Hero() {
  const [greeting, setGreeting] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      } else {
        setDisplayedRole(
          currentRole.substring(0, displayedRole.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
              {greeting}, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {personalInfo.name}
            </h1>
            <div className="h-12 mb-6">
              <span className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                I am a <span className="text-primary">{displayedRole}</span>
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {personalInfo.about}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium transition-all duration-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary shadow-sm hover:shadow-md"
              >
                View Work
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-300 rounded-full animate-spin-slow opacity-70 blur-sm"></div>
              <div className="absolute inset-1 bg-white dark:bg-dark-bg rounded-full z-10 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                {/* Placeholder for profile image - using a professional avatar placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-card p-3 rounded-xl shadow-lg z-20 border border-gray-100 dark:border-gray-700"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-card p-3 rounded-xl shadow-lg z-20 border border-gray-100 dark:border-gray-700"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="text-gray-400 hover:text-primary transition-colors" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
