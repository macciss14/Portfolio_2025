import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import SkillsSection from './components/Skills/SkillsSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import EducationSection from './components/Education/EducationSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
