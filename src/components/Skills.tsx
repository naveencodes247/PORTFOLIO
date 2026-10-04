import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Theme } from '../types';

interface SkillsProps {
  theme: Theme;
}

interface TechSkill {
  id: string;
  name: string;
  category: string;
  categoryTag: string;
  descriptor: string;
  competencies: string[];
  application: string;
  scope: string;
  status: string;
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  // Strictly the 9 allowed technical skills with authentic, enriched technical metadata
  const technicalSkills: TechSkill[] = [
    {
      id: '01',
      name: 'C++',
      category: 'Systems & Algorithmic Logic',
      categoryTag: 'SYSTEMS & OOP',
      descriptor: 'Object-oriented programming, standard template library (STL), memory management fundamentals, and high-performance computational logic.',
      competencies: ['Object-Oriented Programming (OOP)', 'STL Containers & Iterators', 'Memory & Pointer Basics', 'Algorithmic Optimization'],
      application: 'Core language for competitive programming, foundational computer science logic, and rigorous algorithmic problem solving.',
      scope: 'Core Language & Logic',
      status: 'Active Stack',
    },
    {
      id: '02',
      name: 'DSA',
      category: 'Computational Problem Solving',
      categoryTag: 'ALGORITHMS',
      descriptor: 'Data structures, algorithm analysis, computational complexity, and systematic problem solving across complex problem spaces.',
      competencies: ['Time & Space Complexity', 'Trees, Graphs & Traversals', 'Dynamic Programming & Recursion', 'Search & Sort Optimization'],
      application: 'Daily problem-solving practice, optimizing time and space trade-offs, and building structured problem-solving discipline.',
      scope: 'Computational Logic',
      status: 'Active Daily',
    },
    {
      id: '03',
      name: 'HTML',
      category: 'Semantic Web Architecture',
      categoryTag: 'SEMANTIC WEB',
      descriptor: 'Semantic markup, accessible web architecture, SEO metadata standards, and clean document object structure.',
      competencies: ['Semantic HTML5 Elements', 'Web Accessibility (a11y)', 'SEO Meta & Open Graph Tags', 'Document Structure & DOM'],
      application: 'Structuring web applications and portfolio interfaces for optimal screen reader accessibility, clean hierarchy, and crawler indexing.',
      scope: 'Web Foundation',
      status: 'Core Standard',
    },
    {
      id: '04',
      name: 'CSS',
      category: 'Responsive & Visual Engineering',
      categoryTag: 'RESPONSIVE UI',
      descriptor: 'Responsive layout architecture, modern CSS Grid, Flexbox, custom animations, transitions, and glassmorphic UI systems.',
      competencies: ['Modern Flexbox & CSS Grid', 'Responsive Breakpoint Design', 'Transitions & Micro-Animations', 'Tailwind & Custom CSS Tokens'],
      application: 'Crafting polished, high-contrast user interfaces, dark/light theme switching, and fluid layouts across mobile and desktop.',
      scope: 'UI / UX Styling',
      status: 'Active Practice',
    },
    {
      id: '05',
      name: 'JAVASCRIPT',
      category: 'Client & Dynamic Logic',
      categoryTag: 'DYNAMIC LOGIC',
      descriptor: 'Modern ES6+ syntax, asynchronous programming, Promises, async/await, DOM events, and modular code architecture.',
      competencies: ['ES6+ Syntax & Array Methods', 'Asynchronous JS (Promises & Async)', 'DOM Events & Client Interaction', 'Modular Logic Architecture'],
      application: 'Powering dynamic client-side interactions, form validations, data transformation pipelines, and event handling.',
      scope: 'Dynamic Web Engine',
      status: 'Active Daily',
    },
    {
      id: '06',
      name: 'REACT',
      category: 'Component-Driven UI Library',
      categoryTag: 'UI COMPONENTS',
      descriptor: 'Declarative UI component architecture, state management hooks, effect lifecycles, and reactive rendering workflows.',
      competencies: ['React Hooks (useState, useEffect)', 'Component-Driven Architecture', 'State Workflows & Prop Flows', 'Virtual DOM & Performance'],
      application: 'Core frontend engine for MEDORA (Rural Healthcare Platform), interactive dashboards, and scalable portfolio components.',
      scope: 'Frontend Web Apps',
      status: 'Active Daily',
    },
    {
      id: '07',
      name: 'NEXT.JS',
      category: 'Full-Stack React Framework',
      categoryTag: 'FULL-STACK',
      descriptor: 'Production-ready React framework leveraging App Router, server-side rendering (SSR), static site generation (SSG), and API routes.',
      competencies: ['App Router & Page Architecture', 'Server & Client Component Boundaries', 'SSR & SSG Performance', 'API Route Handlers'],
      application: 'Architecting performant, SEO-optimized web applications with seamless client-server data fetching and modern page routing.',
      scope: 'Full-Stack Production',
      status: 'Active Focus',
    },
    {
      id: '08',
      name: 'NODE.JS',
      category: 'Server Runtime & Services',
      categoryTag: 'BACKEND APIS',
      descriptor: 'Asynchronous event-driven JavaScript runtime environment, Express.js backend services, RESTful API routing, and HTTP handling.',
      competencies: ['RESTful API Architecture', 'Express.js Framework', 'Asynchronous Event Loop & I/O', 'Middleware & JSON Data Pipelines'],
      application: 'Developing backend API services, handling client-server requests, and structuring modular server endpoints.',
      scope: 'Backend & APIs',
      status: 'Regular Stack',
    },
    {
      id: '09',
      name: 'GIT / GITHUB',
      category: 'Distributed Version Control',
      categoryTag: 'VERSION CONTROL',
      descriptor: 'Distributed version control, branch management strategies, pull request workflows, commit discipline, and open collaboration.',
      competencies: ['Branching & Merging Workflows', 'Commit Hygiene & Version History', 'GitHub Repositories & Collaboration', 'Merge Conflict Resolution'],
      application: 'Managing multi-contributor codebases for hackathon builds, tracking project evolution, and maintaining clean commit histories.',
      scope: 'DevOps & Collaboration',
      status: 'Daily Tool',
    },
  ];

  // Strictly the 6 core qualities specified in prompt
  const coreQualities = [
    {
      id: '01',
      name: 'LEADERSHIP',
      tag: 'MEDORA & TEAMS',
      desc: 'Guiding MEDORA as CEO and taking direct initiative across student engineering teams.',
    },
    {
      id: '02',
      name: 'COMMUNICATION',
      tag: 'TECHNICAL & PEER',
      desc: 'Articulating ideas clearly across developers, stakeholders, and student cohorts.',
    },
    {
      id: '03',
      name: 'MANAGEMENT',
      tag: 'T&P PLACEMENTS',
      desc: 'Organizing placement drives, operational timelines, and student cohort milestones.',
    },
    {
      id: '04',
      name: 'TEAM COLLABORATION',
      tag: 'HACKATHON BUILDS',
      desc: 'Working closely with cross-functional peers on hackathon and startup builds.',
    },
    {
      id: '05',
      name: 'DISCIPLINE',
      tag: 'DAILY PRACTICE',
      desc: 'Structured daily habits dedicated to coding practice, academic rigor, and continuous growth.',
    },
    {
      id: '06',
      name: 'CONSISTENCY',
      tag: 'CONTINUOUS HABIT',
      desc: 'Steady, reliable effort sustained over time across programming, academics, and projects.',
    },
  ];

  const isDark = theme === 'dark';

  // Initialize activeIndex immediately from URL param if available (e.g. ?skill=1 for DSA)
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const skillParam = params.get('skill');
      if (skillParam !== null) {
        const idx = parseInt(skillParam, 10);
        if (!isNaN(idx) && idx >= 0 && idx < 9) {
          return idx;
        }
      }
    }
    return 0;
  });

  React.useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const skillParam = params.get('skill');
      if (skillParam !== null) {
        const idx = parseInt(skillParam, 10);
        if (!isNaN(idx) && idx >= 0 && idx < technicalSkills.length) {
          setActiveIndex(idx);
        }
      }
    };
    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [technicalSkills.length]);

  const activeTech = technicalSkills[activeIndex] || technicalSkills[0];

  return (
    <section id="skills" className={`py-20 md:py-28 border-t transition-colors duration-300 ${isDark ? 'border-neutral-800/80 bg-[#0D0E11]' : 'border-neutral-200/80 bg-[#F8F8F6]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className={`pb-8 border-b flex flex-col md:flex-row md:items-end justify-between gap-4 ${isDark ? 'border-neutral-800/80' : 'border-neutral-200/80'}`}
        >
          <div>
            <span className={`font-mono-custom text-xs uppercase tracking-widest font-semibold ${isDark ? 'text-emerald-400' : 'text-[#076950]'}`}>
              04 / Technical Stack & Mindset
            </span>
            <h2 className={`mt-2 font-editorial text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight ${isDark ? 'text-white' : 'text-neutral-950'}`}>
              Skills & Toolkit
            </h2>
          </div>
          <p className={`text-xs sm:text-sm font-mono-custom uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Interactive Index · 09 Technologies · 06 Core Qualities
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* PART 1: TECHNICAL SKILLS (Aligned Dual-Panel Interactive Index) */}
        {/* ============================================================== */}
        <div className="mt-12 sm:mt-16">
          
          {/* Aligned Sub-Headers Bar (Both columns start on the EXACT same baseline) */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-4 border-b ${isDark ? 'border-neutral-800/80' : 'border-neutral-200/80'}`}>
            {/* Left Header */}
            <div className="lg:col-span-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-emerald-400' : 'bg-[#076950]'}`} />
                <span className={`font-mono-custom text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  // Part 01 — Technical Index
                </span>
              </div>
              <span className={`text-[11px] font-mono-custom ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                09 Core Technologies
              </span>
            </div>

            {/* Right Header */}
            <div className="hidden lg:flex lg:col-span-6 items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-emerald-400' : 'bg-[#076950]'}`} />
                <span className={`font-mono-custom text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  // Live Focus Inspector
                </span>
              </div>
              <span className={`text-[11px] font-mono-custom font-medium ${isDark ? 'text-emerald-400' : 'text-[#076950]'}`}>
                Detailed Technical Spec
              </span>
            </div>
          </div>

          {/* Dual-Panel Grid: Balanced 6-col / 6-col Structure */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Panel: 9 Interactive Rows with Category Badges & Clean Alignment */}
            <div className="lg:col-span-6 flex flex-col gap-1.5">
              {technicalSkills.map((tech, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`w-full py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl flex items-center justify-between text-left group transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? isDark
                          ? 'bg-[#18191E] border-neutral-700 shadow-md ring-1 ring-neutral-700/50'
                          : 'bg-neutral-100 border-neutral-300 shadow-sm'
                        : isDark
                          ? 'bg-transparent border-transparent hover:bg-neutral-900/40 hover:border-neutral-800'
                          : 'bg-transparent border-transparent hover:bg-neutral-100/60 hover:border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span
                        className={`font-mono-custom text-xs font-semibold transition-colors shrink-0 ${
                          isSelected
                            ? isDark ? 'text-emerald-400' : 'text-[#076950]'
                            : isDark ? 'text-neutral-500 group-hover:text-neutral-400' : 'text-neutral-400 group-hover:text-neutral-600'
                        }`}
                      >
                        {tech.id}
                      </span>
                      <span
                        style={{ fontFamily: "'Bebas Neue', Impact, 'Arial Narrow', sans-serif" }}
                        className={`text-2xl sm:text-3xl uppercase tracking-wider transition-colors truncate ${
                          isSelected
                            ? isDark ? 'text-white' : 'text-neutral-950'
                            : isDark ? 'text-neutral-400 group-hover:text-neutral-200' : 'text-neutral-500 group-hover:text-neutral-900'
                        }`}
                      >
                        {tech.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <span
                        className={`font-mono-custom text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border transition-all ${
                          isSelected
                            ? isDark
                              ? 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400 font-semibold'
                              : 'bg-[#076950]/10 border-[#076950]/30 text-[#076950] font-semibold'
                            : isDark
                              ? 'bg-neutral-900/60 border-neutral-800 text-neutral-400 group-hover:text-neutral-300'
                              : 'bg-neutral-100/80 border-neutral-200 text-neutral-500 group-hover:text-neutral-700'
                        }`}
                      >
                        {tech.categoryTag}
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-all duration-200 ${
                          isSelected
                            ? isDark ? 'text-emerald-400 translate-x-0 opacity-100' : 'text-[#076950] translate-x-0 opacity-100'
                            : isDark ? 'text-neutral-600 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' : 'text-neutral-400 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Panel: Catchy, Highly Informational Technical Inspector Card */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className={`p-6 sm:p-7 rounded-2xl border backdrop-blur-md shadow-sm relative overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'border-neutral-800 bg-[#131418] text-neutral-200'
                  : 'border-neutral-200/90 bg-white text-neutral-800'
              }`}>
                
                {/* Subtle Decorative Ambient Glow */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl pointer-events-none ${
                  isDark ? 'bg-emerald-400/10' : 'bg-[#076950]/10'
                }`} />

                {/* Card Top Meta Bar */}
                <div className={`flex items-center justify-between pb-4 border-b ${isDark ? 'border-neutral-800' : 'border-neutral-200/70'}`}>
                  <div className="flex items-center gap-2">
                    <span className={`font-mono-custom text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border font-semibold ${
                      isDark
                        ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-400'
                        : 'border-[#076950]/30 bg-[#076950]/10 text-[#076950]'
                    }`}>
                      {activeTech.category}
                    </span>
                    <span className={`text-[11px] font-mono-custom ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                      // {activeTech.id} of 09
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-emerald-400' : 'bg-[#076950]'}`} />
                    <span className={`font-mono-custom text-[11px] uppercase tracking-wider font-medium ${isDark ? 'text-emerald-400' : 'text-[#076950]'}`}>
                      {activeTech.status}
                    </span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTech.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="mt-5 flex flex-col gap-5"
                  >
                    {/* Title & Core Overview */}
                    <div>
                      <h3
                        style={{ fontFamily: "'Bebas Neue', Impact, 'Arial Narrow', sans-serif" }}
                        className={`text-4xl sm:text-5xl uppercase tracking-wider ${isDark ? 'text-white' : 'text-neutral-950'}`}
                      >
                        {activeTech.name}
                      </h3>
                      <p className={`mt-2 text-sm sm:text-base font-normal leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        {activeTech.descriptor}
                      </p>
                    </div>

                    {/* Key Competencies / Topics (Pills) */}
                    <div>
                      <span className={`font-mono-custom text-[10px] uppercase tracking-widest font-semibold block mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        Key Focus Areas & Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeTech.competencies.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs font-mono-custom px-2.5 py-1 rounded-md border shadow-2xs ${
                              isDark
                                ? 'bg-neutral-900 border-neutral-800 text-neutral-200'
                                : 'bg-neutral-100 border-neutral-200/90 text-neutral-800'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Real-world Application / Practical Implementation Context */}
                    <div className={`p-3.5 rounded-xl border ${
                      isDark
                        ? 'border-neutral-800 bg-neutral-900/60'
                        : 'border-neutral-200 bg-neutral-50'
                    }`}>
                      <span className={`font-mono-custom text-[10px] uppercase tracking-widest font-semibold block mb-1 ${
                        isDark ? 'text-emerald-400' : 'text-[#076950]'
                      }`}>
                        // Applied in Practice
                      </span>
                      <p className={`text-xs sm:text-sm leading-relaxed font-normal ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                        {activeTech.application}
                      </p>
                    </div>

                    {/* Bottom Specs Strip */}
                    <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono-custom ${
                      isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200/70 text-neutral-500'
                    }`}>
                      <span>Domain: <strong className={`font-medium ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>{activeTech.scope}</strong></span>
                      <span className={`font-medium ${isDark ? 'text-emerald-400' : 'text-[#076950]'}`}>Verified Capability</span>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 2: CORE QUALITIES (Aligned Editorial Execution Grid)      */}
        {/* ============================================================== */}
        <div className={`mt-20 sm:mt-24 pt-12 sm:pt-16 border-t ${isDark ? 'border-neutral-800/80' : 'border-neutral-200/80'}`}>
          
          <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b ${isDark ? 'border-neutral-800/80' : 'border-neutral-200/80'}`}>
            <div>
              <span className={`font-mono-custom text-xs uppercase tracking-wider font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                // Part 02 — Core Qualities
              </span>
              <h3 className={`mt-1 font-editorial text-2xl sm:text-3xl uppercase tracking-tight ${isDark ? 'text-white' : 'text-neutral-950'}`}>
                Execution Mindset
              </h3>
            </div>
            <span className={`text-xs font-mono-custom ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              06 Personal & Leadership Pillars
            </span>
          </div>

          {/* Clean 3-Column Aligned Grid with Catchy Badges & Factual Detail */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreQualities.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`group p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isDark
                    ? 'border-neutral-800 bg-[#131418] hover:border-neutral-700'
                    : 'border-neutral-200/80 bg-white hover:border-neutral-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`font-mono-custom text-xs font-semibold ${isDark ? 'text-emerald-400' : 'text-[#076950]'}`}>
                      {item.id}
                    </span>
                    <span className={`font-mono-custom text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${
                      isDark
                        ? 'text-neutral-400 bg-neutral-900 border-neutral-800'
                        : 'text-neutral-500 bg-neutral-100 border-neutral-200/80'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 className={`mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-emerald-400'
                      : 'text-neutral-950 group-hover:text-[#076950]'
                  }`}>
                    {item.name}
                  </h4>
                  <p className={`mt-2 text-xs sm:text-sm leading-relaxed font-normal ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

