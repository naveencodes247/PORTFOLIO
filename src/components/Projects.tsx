import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { Theme, Project } from '../types';
import medoraImg from '../assets/images/medora_project_preview_1791099493248.jpg';
import agroIotImg from '../assets/images/agro_iot_project_preview_1791099506171.jpg';

interface ProjectsProps {
  theme: Theme;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ theme, onSelectProject }) => {
  const projects: Project[] = [
    {
      id: 'medora',
      number: '01',
      name: 'MEDORA',
      role: 'Chief Executive Officer (CEO) & Founder',
      context: 'Healthcare Platform Venture',
      description:
        'Healthcare-focused venture solving coordination and accessibility problems through modern digital platforms and streamlined clinical interfaces.',
      liveUrl: 'https://medoraplus.base44.app/',
      tags: ['Healthcare Platform', 'React & Next.js', 'Executive Direction', 'Full-Stack Architecture'],
      image: medoraImg,
      overview:
        'MEDORA was founded to address real-world healthcare challenges by creating accessible digital interfaces for patients and clinical services. As CEO, Naveen directs platform workflows, operational milestones, and the product roadmap.',
      keyContributions: [
        'Executive direction and organizational strategy as Founder & CEO',
        'Solving healthcare coordination problems through digital software',
        'Full-stack architecture, interface workflows, and cloud deployment',
      ],
      techStackHighlights: ['React', 'Next.js', 'Node.js', 'HTML/CSS/JavaScript', 'Git / GitHub'],
    },
    {
      id: 'agro-iot',
      number: '02',
      name: 'AGRO-IOT',
      role: 'Software Architecture & Development',
      context: 'Smart India Hackathon 2026 · Problem Statement: 26180',
      problemStatement: 'Problem Statement: 26180',
      description:
        'Software telemetry and real-time field analytics platform engineered for Smart India Hackathon 2026 under nationwide Problem Statement 26180.',
      liveUrl: 'https://agro-iotweb.netlify.app/',
      tags: ['Smart India Hackathon 2026', 'PS: 26180', 'Software Architecture', 'Web Telemetry'],
      image: agroIotImg,
      overview:
        'Engineered for Smart India Hackathon 2026 under nationwide Problem Statement 26180. Designed to capture, structure, and visualize real-time field sensor data in an intuitive, responsive telemetry dashboard.',
      keyContributions: [
        'Software component development under competitive hackathon parameters',
        'Direct alignment with nationwide agricultural problem statement 26180',
        'Live telemetry visualization and responsive interface execution',
      ],
      techStackHighlights: ['React', 'JavaScript', 'Node.js', 'Web Telemetry', 'C++ Fundamentals'],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-[#E4E4DC] dark:border-[#1F2228] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-custom uppercase tracking-widest text-[#0B6E4F] dark:text-emerald-400">
              <span>03 // FEATURED WORK</span>
            </div>
            <h2 className="mt-3 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#121316] dark:text-[#F5F5F7] leading-[0.92]">
              SELECTED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-normal text-[#55575E] dark:text-[#8E919A] max-w-sm">
            Major platforms engineered with production rigor, startup ownership, and competitive execution.
          </p>
        </div>

        {/* Project Case Studies - Large Editorial Presentations */}
        <div className="mt-16 sm:mt-20 flex flex-col gap-24 sm:gap-32">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              
              {/* Text / Case Study Column (Cols 1-5 on odd, Cols 8-12 on even if staggered, or consistent 5/7) */}
              <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  
                  {/* Project Number & Context Tag */}
                  <div className="flex items-center gap-3 text-xs font-mono-custom text-neutral-500">
                    <span className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">
                      {project.number}
                    </span>
                    <span>/</span>
                    <span className="uppercase tracking-wider text-[#0B6E4F] dark:text-emerald-400 font-semibold">
                      {project.context}
                    </span>
                  </div>

                  {/* Monumental Project Title */}
                  <h3 className="mt-4 font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#121316] dark:text-[#F5F5F7]">
                    {project.name}
                  </h3>

                  {/* Role Indicator */}
                  <div className="mt-2 text-sm font-heading font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    ROLE: {project.role}
                  </div>

                  {/* Factual Editorial Description */}
                  <p className="mt-5 text-base text-[#55575E] dark:text-[#8E919A] leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono-custom">
                    {(project.techStackHighlights || project.tags || []).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#EAEAE4] dark:bg-[#1A1D24] text-neutral-800 dark:text-neutral-200 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Clear Primary Actions */}
                <div className="mt-8 pt-6 border-t border-[#E4E4DC] dark:border-[#1F2228] flex flex-wrap items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider rounded-md bg-[#121316] text-white hover:bg-neutral-800 dark:bg-[#F5F5F7] dark:text-[#121316] dark:hover:bg-neutral-200 transition-colors shadow-xs"
                  >
                    <span>View Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-heading font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-[#0B6E4F] dark:hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#0B6E4F] dark:text-emerald-400" />
                    <span>Case Study Overview</span>
                  </button>
                </div>
              </div>

              {/* Visual Project Preview Column (Cols 6-12) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div
                  onClick={() => onSelectProject(project)}
                  className="group relative rounded-xl overflow-hidden border border-[#E4E4DC] dark:border-[#1F2228] bg-[#121316] aspect-[16/10] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    loading="lazy"
                  />

                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Status Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono-custom uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Live Platform</span>
                  </div>

                  {/* Hover Overlay Prompt */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono-custom opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="bg-black/80 px-3 py-1.5 rounded backdrop-blur-xs">
                      Click to inspect full case study
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      ↗
                    </span>
                  </div>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
