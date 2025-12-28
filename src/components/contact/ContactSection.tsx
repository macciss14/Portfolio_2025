import { Mail, Send, Linkedin, MapPin } from 'lucide-react';
import Section from '../UI/Section';
import { personalInfo } from '../../data/portfolio';

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in collaboration, hiring, or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex flex-col items-center p-8 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1"
          >
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm break-all">
              {personalInfo.email}
            </p>
          </a>

          <a 
            href={personalInfo.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1"
          >
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Send size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Telegram</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
              @hayelom
            </p>
          </a>

          <a 
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1"
          >
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Linkedin size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
              Connect with me
            </p>
          </a>

          <div className="flex flex-col items-center p-8 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MapPin size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
              Mekelle, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
