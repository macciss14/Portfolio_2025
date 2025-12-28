import Section from '../UI/Section';
import { skills } from '../../data/portfolio';

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to build digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-dark-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
