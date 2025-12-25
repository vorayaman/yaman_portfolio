
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectGrid from './components/ProjectGrid';
import Education from './components/Education';
import ProfessionalProfile from './components/ProfessionalProfile';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import WhatsAppButton from './components/WhatsAppButton';
import { Project } from './types';

type View = 'home' | 'skills' | 'experience' | 'projects' | 'education' | 'profile';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentView === 'home') {
      const handleScroll = () => {
        const sections = ['home', 'skills', 'experience', 'projects', 'education'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(section);
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveSection(currentView);
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'profile':
        return <ProfessionalProfile onBack={() => setCurrentView('home')} />;

      case 'education':
        return (
          <div className="pt-20 pb-40 space-y-12 animate-in fade-in duration-500">
            <button onClick={() => setCurrentView('home')} className="text-cyan-400 flex items-center gap-2 hover:underline mb-8 font-mono text-sm">
              ← Back to Home
            </button>
            <Education />
          </div>
        );

      case 'skills':
        return (
          <div className="pt-20 pb-40 space-y-12 animate-in fade-in duration-500">
            <button onClick={() => setCurrentView('home')} className="text-cyan-400 flex items-center gap-2 hover:underline mb-8 font-mono text-sm">
              ← Back to Home
            </button>
            <Skills />
          </div>
        );

      case 'experience':
        return (
          <div className="pt-20 pb-40 space-y-12 animate-in fade-in duration-500">
            <button onClick={() => setCurrentView('home')} className="text-cyan-400 flex items-center gap-2 hover:underline mb-8 font-mono text-sm">
              ← Back to Home
            </button>
            <ExperienceTimeline />
          </div>
        );

      case 'projects':
        return (
          <div className="pt-20 pb-40 space-y-12 animate-in fade-in duration-500">
            <button onClick={() => setCurrentView('home')} className="text-cyan-400 flex items-center gap-2 hover:underline mb-8 font-mono text-sm">
              ← Back to Home
            </button>
            <ProjectGrid onSelectProject={setSelectedProject} />
          </div>
        );

      default:
        return (
          <div className="space-y-32">
            <section id="home">
              <Hero onProfileClick={() => setCurrentView('profile')} />
            </section>
            <section id="skills" className="pt-20">
              <Skills />
            </section>
            <section id="experience" className="pt-20">
              <ExperienceTimeline />
            </section>
            <section id="projects" className="pt-20">
              <ProjectGrid onSelectProject={setSelectedProject} />
            </section>
            <section id="education" className="pt-20">
              <Education />
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 relative">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-10" />
      
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <Navbar 
        activeSection={activeSection} 
        onNavigate={(view) => setCurrentView(view as View)} 
      />
      
      <main className="max-w-6xl mx-auto px-6 pt-24 min-h-[80vh]">
        {renderView()}
      </main>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
