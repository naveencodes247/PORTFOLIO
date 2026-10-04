import React from 'react';
import { motion } from 'motion/react';
import { Code2, Terminal, Layers, GitBranch, Shield, Zap, Quote, Users, Award, Briefcase } from 'lucide-react';
import { Theme } from '../types';

interface ImpactAndSkillsProps {
  theme: Theme;
}

export const ImpactAndSkills: React.FC<ImpactAndSkillsProps> = ({ theme }) => {
  // Only the exact skills specified in the prompt: C++, DSA, HTML, CSS, JavaScript, React, Next.js, Node.js, Git / GitHub
  const technicalSkills = [
    { name: 'DSA & Problem Solving', category: 'C++ Systems', barWidth: '95%' },
    { name: 'React & Next.js', category: 'Frontend Architecture', barWidth: '90%' },
    { name: 'Node.js & JavaScript', category: 'Full-Stack Runtime', barWidth: '85%' },
    { name: 'HTML & CSS Systems', category: 'Responsive Standards', barWidth: '92%' },
    { name: 'Git & GitHub', category: 'Codebase Versioning', barWidth: '88%' },
  ];

  const leadershipQualities = [
    { name: 'Leadership & Team Ownership', barWidth: '94%' },
    { name: 'Discipline & Daily Consistency', barWidth: '96%' },
    { name: 'Student Coordination & Data', barWidth: '90%' },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-[#F7F7F5] dark:bg-[#0D0E11] border-b border-neutral-300/70 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: SKILLS & TOOLKIT */}
          <div className="lg:col-span-6 flex flex-col pr-0 lg:pr-6">
            <div className="pb-4 border-b border-neutral-300/70 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-[11px] font-mono-custom uppercase tracking-widest text-[#076950] dark:text-emerald-400">
                <span>03 // COMPETENCIES</span>
              </div>
              <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#121316] dark:text-white">
                SKILLS & TOOLKIT
              </h2>
              <div className="mt-3 w-8 h-[2px] bg-[#076950] dark:bg-emerald-500" />
            </div>

            {/* Technical Stack with Clean Hairline Metric Bars */}
            <div className="mt-8 flex flex-col gap-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono-custom uppercase tracking-wider">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {skill.name}
                    </span>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {skill.category}
                    </span>
                  </div>
                  {/* Clean Horizontal Line Indicator */}
                  <div className="w-full h-1 bg-neutral-200/90 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#076950] dark:bg-emerald-500 rounded-full transition-all duration-700"
                      style={{ width: skill.barWidth }}
                    />
                  </div>
                </div>
              ))}

              {/* Core Execution & Leadership Skills */}
              <div className="pt-6 mt-2 border-t border-neutral-300/60 dark:border-neutral-800">
                <span className="text-[11px] font-mono-custom uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-4">
                  // Leadership & Core Execution
                </span>
                <div className="flex flex-col gap-5">
                  {leadershipQualities.map((item) => (
                    <div key={item.name} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs font-mono-custom uppercase tracking-wider">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          {item.name}
                        </span>
                        <span className="text-[#076950] dark:text-emerald-400 text-[10px] font-bold">
                          Core Mindset
                        </span>
                      </div>
                      <div className="w-full h-1 bg-neutral-200/90 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#076950] dark:bg-emerald-500 rounded-full transition-all duration-700"
                          style={{ width: item.barWidth }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: IMPACT & EXPERIENCE */}
          <div
            id="experience"
            className="lg:col-span-6 flex flex-col justify-between pl-0 lg:pl-8 lg:border-l border-neutral-300/70 dark:border-neutral-800"
          >
            <div>
              <div className="pb-4 border-b border-neutral-300/70 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-[11px] font-mono-custom uppercase tracking-widest text-[#076950] dark:text-emerald-400">
                  <span>04 // RECORD</span>
                </div>
                <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#121316] dark:text-white">
                  IMPACT & EXPERIENCE
                </h2>
                <div className="mt-3 w-8 h-[2px] bg-[#076950] dark:bg-emerald-500" />
              </div>

              {/* 3 Metric Pillars */}
              <div className="mt-8 grid grid-cols-3 gap-4 pb-8 border-b border-neutral-300/70 dark:border-neutral-800 text-center">
                <div className="flex flex-col items-center">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-[#121316] dark:text-white">
                    2029
                  </span>
                  <span className="mt-1 font-mono-custom text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">
                    Graduation Year
                  </span>
                </div>

                <div className="flex flex-col items-center border-x border-neutral-300/70 dark:border-neutral-800 px-2">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-[#076950] dark:text-emerald-400">
                    CEO
                  </span>
                  <span className="mt-1 font-mono-custom text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">
                    MEDORA Founder
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-[#121316] dark:text-white">
                    26180
                  </span>
                  <span className="mt-1 font-mono-custom text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">
                    SIH 2026 Problem
                  </span>
                </div>
              </div>

              {/* Factual Leadership Experience Records */}
              <div className="mt-6 flex flex-col gap-4">
                <div className="p-5 rounded-lg border border-neutral-300/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40">
                  <div className="flex justify-between items-baseline text-xs font-mono-custom">
                    <span className="font-bold text-[#121316] dark:text-white">
                      MEDORA — CEO & Founder
                    </span>
                    <span className="text-[#076950] dark:text-emerald-400 font-semibold">Healthcare Venture</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    Directing executive roadmap, organizing team execution, and engineering digital platforms dedicated to solving healthcare coordination challenges.
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-neutral-300/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40">
                  <div className="flex justify-between items-baseline text-xs font-mono-custom">
                    <span className="font-bold text-[#121316] dark:text-white">
                      Training & Placement Dept — Coordinator
                    </span>
                    <span className="text-neutral-500">LNCT Bhopal</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    Coordinating student cohorts across institutional placement sessions, managing recruitment drive schedules, and handling academic records.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Quote Box */}
            <div className="mt-8 p-6 rounded-lg border border-neutral-300/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 relative">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-serif text-[#076950] dark:text-emerald-400 leading-none select-none">
                  “
                </span>
                <div>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed italic">
                    "Currently focused on full-stack web development alongside DSA. I believe in disciplined execution, daily grind without compromise, and taking ownership as a student builder."
                  </p>
                  <p className="mt-3 text-[11px] font-mono-custom uppercase tracking-wider font-semibold text-[#121316] dark:text-white text-right">
                    — NAVEEN YADAV
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
