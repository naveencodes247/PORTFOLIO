import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Theme } from '../types';

interface ExperienceProps {
  theme: Theme;
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const experiences = [
    {
      index: '01',
      organization: 'MEDORA',
      role: 'CEO',
      focus: 'Healthcare Technology Venture',
      scope: 'Solving healthcare problems through software engineering, product direction, and organizational leadership.',
      link: 'https://medoraplus.base44.app/',
      linkLabel: 'medoraplus.base44.app',
    },
    {
      index: '02',
      organization: 'SMART INDIA HACKATHON 2026',
      role: 'Software Architecture & Development',
      focus: 'Problem Statement 26180',
      scope: 'Engineered the software part of the national hackathon solution, collaborating on system architecture, data feeds, and web client delivery.',
      link: 'https://agro-iotweb.netlify.app/',
      linkLabel: 'agro-iotweb.netlify.app',
    },
    {
      index: '03',
      organization: 'TRAINING & PLACEMENT DEPARTMENT — LNCT BHOPAL',
      role: 'Coordinator',
      focus: 'Student Coordination & Operations',
      scope: 'Managing student coordination across placement drives, structured data handling, database records, and departmental liaison.',
      link: null,
      linkLabel: null,
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200/80 dark:border-neutral-800/80"
        >
          <div>
            <span className="font-mono-custom text-xs uppercase tracking-widest text-[#076950] dark:text-emerald-400 font-semibold">
              05 / Trajectory & Roles
            </span>
            <h2 className="mt-2 font-editorial text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-950 dark:text-white">
              Experience & Leadership
            </h2>
          </div>
          <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
            Factual leadership roles across healthcare venture leadership, national innovation hackathons, and institutional coordination.
          </p>
        </motion.div>

        {/* Editorial Timeline Architecture */}
        <div className="mt-12 divide-y divide-neutral-200/80 dark:divide-neutral-800/80 border-b border-neutral-200/80 dark:border-neutral-800/80">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Col 1: Index & Organization */}
              <div className="lg:col-span-4">
                <span className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                  {exp.index} / {exp.focus}
                </span>
                <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors">
                  {exp.organization}
                </h3>
              </div>

              {/* Col 2: Role Badge & Context */}
              <div className="lg:col-span-3">
                <span className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                  Designation / Role
                </span>
                <p className="mt-1 font-heading text-lg sm:text-xl font-semibold text-[#076950] dark:text-emerald-400">
                  {exp.role}
                </p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 font-mono-custom text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <span>{exp.linkLabel}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#076950] dark:text-emerald-400" />
                  </a>
                )}
              </div>

              {/* Col 3: Scope & Factual Details */}
              <div className="lg:col-span-5">
                <span className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-2">
                  Scope & Responsibilities
                </span>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {exp.scope}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
