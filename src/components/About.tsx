import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight, Code2, Cpu, Flame, Users, Shield, Target } from 'lucide-react';
import { Theme } from '../types';

interface AboutProps {
  theme: Theme;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#approach' || window.location.search.includes('expand=about');
    }
    return false;
  });

  React.useEffect(() => {
    const handleCheck = () => {
      if (window.location.hash === '#approach' || window.location.search.includes('expand=about')) {
        setIsExpanded(true);
      }
    };
    handleCheck();
    window.addEventListener('hashchange', handleCheck);
    return () => window.removeEventListener('hashchange', handleCheck);
  }, []);

  // Approach points grounded strictly in Naveen's actual profile
  const approachDetails = [
    {
      title: 'Full-Stack Development',
      category: 'Engineering',
      icon: Code2,
      desc: 'Building responsive web applications using React, Next.js, and Node.js with clean architecture and modern standards.',
    },
    {
      title: 'DSA & Problem Solving',
      category: 'Logic',
      icon: Cpu,
      desc: 'Consistent algorithmic problem solving in C++ to develop structured thinking, optimal complexity, and strong fundamentals.',
    },
    {
      title: 'Discipline',
      category: 'Habit',
      icon: Target,
      desc: 'Approaching technical learning with structured daily routines, rigorous focus, and deep personal accountability.',
    },
    {
      title: 'Consistency',
      category: 'Mindset',
      icon: Flame,
      desc: 'Sustained, continuous progress across academics, coding practice, and project development day in and day out.',
    },
    {
      title: 'Leadership & Management',
      category: 'Execution',
      icon: Shield,
      desc: 'Guiding MEDORA as CEO and coordinating large student cohorts and company drives in LNCT Bhopal’s Training & Placement Department.',
    },
    {
      title: 'Team Collaboration',
      category: 'Community',
      icon: Users,
      desc: 'Partnering across disciplines on collaborative projects like AGRO-IOT in SIH 2026, valuing open communication and shared goals.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono-custom text-xs uppercase tracking-widest text-[#076950] dark:text-emerald-400 font-semibold">
              02 / Profile & Background
            </span>
            <h2 className="mt-2 font-editorial text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-neutral-950 dark:text-white">
              About Naveen
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-custom text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Sophomore · LNCT Bhopal · Class of 2029
          </p>
        </motion.div>

        {/* Main Editorial Row: Asymmetric Composition */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Bold Personal Identity Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono-custom text-xs uppercase tracking-widest text-[#076950] dark:text-emerald-400 font-semibold block">
                // 01 · Core Philosophy
              </span>
              <h3
                style={{ fontFamily: "'Bebas Neue', Impact, 'Arial Narrow', sans-serif" }}
                className="mt-3 text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-neutral-950 dark:text-white leading-[0.96]"
              >
                <span className="block whitespace-nowrap">BUILDING.</span>
                <span className="block whitespace-nowrap">LEARNING.</span>
                <span className="block whitespace-nowrap text-[#076950] dark:text-emerald-400">LEADING.</span>
              </h3>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 max-w-sm">
              <p className="text-xs font-mono-custom uppercase tracking-wider text-neutral-500 dark:text-neutral-400 leading-relaxed">
                A student developer committed to disciplined code and purposeful leadership.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clear, Honest Personal Story (No Corporate Fluff) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="font-mono-custom text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold block">
              // 02 · Biography & Focus
            </span>

            <p className="text-lg sm:text-xl text-neutral-900 dark:text-neutral-100 font-normal leading-relaxed">
              I'm <span className="font-semibold text-neutral-950 dark:text-white">Naveen Yadav</span>, an undergraduate student pursuing my Bachelor of Technology in Electronics & Communication Engineering at <span className="font-semibold text-neutral-950 dark:text-white">Lakshmi Narain College of Technology (LNCT), Bhopal</span>, graduating in 2029.
            </p>

            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              My core focus is full-stack web development paired with Data Structures & Algorithms. Working toward my goal of becoming a <span className="font-medium text-neutral-900 dark:text-white">Software Developer</span>, I believe in practicing consistently in C++ while building practical, responsive web applications using modern web tools.
            </p>

            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              Beyond the classroom, I serve as the <span className="font-medium text-neutral-900 dark:text-white">CEO of MEDORA</span>, contribute on the software side for the <span className="font-medium text-neutral-900 dark:text-white">AGRO-IOT project</span> in Smart India Hackathon (SIH 2026), and work as a student coordinator in LNCT Bhopal’s <span className="font-medium text-neutral-900 dark:text-white">Training & Placement Department</span>.
            </p>
          </motion.div>

        </div>

        {/* Elegant Minimal Personal Facts Strip (Subtle lines, NO cards) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 sm:mt-18 pt-8 pb-8 border-y border-neutral-200/80 dark:border-neutral-800/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80 dark:divide-neutral-800/80">
            
            <div className="pt-4 md:pt-0 md:px-4 first:pl-0">
              <span className="font-mono-custom text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                Degree & Branch
              </span>
              <p className="mt-1.5 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-950 dark:text-white">
                B.Tech ECE
              </p>
              <span className="text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                Sophomore Year
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-6">
              <span className="font-mono-custom text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                Institution
              </span>
              <p className="mt-1.5 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-950 dark:text-white">
                LNCT Bhopal
              </p>
              <span className="text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                Madhya Pradesh, India
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-6">
              <span className="font-mono-custom text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                Target Graduation
              </span>
              <p className="mt-1.5 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#076950] dark:text-emerald-400">
                Grad 2029
              </p>
              <span className="text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                4-Year Program
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 last:pr-0">
              <span className="font-mono-custom text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                Primary Goal
              </span>
              <p className="mt-1.5 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-950 dark:text-white">
                Software Dev
              </p>
              <span className="text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                Full-Stack + DSA Focus
              </span>
            </div>

          </div>
        </motion.div>

        {/* Interactive Element: "My Approach & Focus" Expandable Section */}
        <div className="mt-10 flex flex-col items-start w-full">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 hover:border-[#076950] dark:hover:border-emerald-400 text-neutral-900 dark:text-neutral-100 transition-all cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span className="font-mono-custom text-xs uppercase tracking-wider font-semibold">
              {isExpanded ? 'Hide Approach & Focus' : 'Explore My Approach & Focus'}
            </span>
            <ChevronDown className={`w-4 h-4 text-[#076950] dark:text-emerald-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {/* Expandable Content Area */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="approach-panel"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="mt-6 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approachDetails.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.04 }}
                        className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#121316] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono-custom text-[10px] uppercase tracking-wider text-[#076950] dark:text-emerald-400 font-semibold">
                              {item.category}
                            </span>
                            <IconComp className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                          </div>
                          <h4 className="mt-3 font-heading text-base font-bold text-neutral-950 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
