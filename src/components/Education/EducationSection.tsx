import { GraduationCap, Award } from 'lucide-react';
import Section from '../UI/Section';
import { education } from '../../data/portfolio';

export default function EducationSection() {
  return (
    <Section id="education" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-dark-bg"></div>
                
                <div className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary mr-4">
                        {index === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <span className="inline-block px-3 py-1 bg-white dark:bg-gray-800 text-primary text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">
                      {edu.year}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-dark-bg"></div>
              <div className="bg-gray-50 dark:bg-dark-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Community Involvement
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Active member of university tech clubs and charity organizations, organizing workshops and mentoring junior students in programming and system design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
