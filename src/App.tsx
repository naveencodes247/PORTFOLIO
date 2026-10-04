import React, { useState, useEffect } from 'react';
import { Theme, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme');
      if (urlTheme === 'dark') return 'dark';
      if (urlTheme === 'light') return 'light';
      const stored = localStorage.getItem('naveen_portfolio_theme');
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return 'light';
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    localStorage.setItem('naveen_portfolio_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === 'dark'
          ? 'bg-[#0D0E11] text-neutral-100'
          : 'bg-[#F8F8F6] text-neutral-900'
      }`}
    >
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <main>
        <Hero
          theme={theme}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
        <Projects
          theme={theme}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <About theme={theme} />
        <Skills theme={theme} />
        <Experience theme={theme} />
        <Education theme={theme} />
        <Certifications theme={theme} />
        <Contact
          theme={theme}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
      </main>

      <Footer theme={theme} />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        theme={theme}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        theme={theme}
      />
    </div>
  );
}
