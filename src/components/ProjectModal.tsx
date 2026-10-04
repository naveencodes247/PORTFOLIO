import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, ArrowUpRight, Code, Laptop } from 'lucide-react';
import { Project, Theme } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  theme,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl relative transition-all ${
          theme === 'dark'
            ? 'bg-[#121316] border-neutral-800 text-white'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className={`absolute top-6 right-6 p-2 rounded-lg border transition-colors cursor-pointer ${
            theme === 'dark'
              ? 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              : 'border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono-custom text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
          <span>PROJECT {project.number}</span>
          <span aria-hidden="true">·</span>
          <span>{project.context}</span>
        </div>

        <h3 className="mt-2 font-editorial text-4xl sm:text-5xl uppercase tracking-tight">
          {project.name}
        </h3>

        {/* Role & Specific Problem Statement */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
          <span>Role: {project.role}</span>
          {project.problemStatement && (
            <span className="font-mono-custom text-xs text-neutral-500 dark:text-neutral-400">
              {project.problemStatement}
            </span>
          )}
        </div>

        {/* Media Preview */}
        <div className="mt-6 rounded-xl overflow-hidden border border-neutral-200/40 dark:border-neutral-800/80 aspect-[16/9] bg-neutral-950 relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Overview & Purpose */}
        <div className="mt-6">
          <h4 className="text-xs uppercase font-mono-custom tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Overview & Purpose
          </h4>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.overview || project.description}
          </p>
        </div>

        {/* Scope & Role Contributions */}
        {project.keyContributions && (
          <div className="mt-6">
            <h4 className="text-xs uppercase font-mono-custom tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Key Responsibilities & Deliverables
            </h4>
            <ul className="flex flex-col gap-2">
              {project.keyContributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Components */}
        {project.techStackHighlights && (
          <div className="mt-6 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/80">
            <h4 className="text-xs uppercase font-mono-custom tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
              Technologies & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStackHighlights.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded-md font-mono-custom ${
                    theme === 'dark'
                      ? 'bg-neutral-800 text-neutral-200'
                      : 'bg-neutral-100 text-neutral-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
                : 'bg-neutral-950 hover:bg-neutral-800 text-white shadow-md'
            }`}
          >
            <span>Visit Live Platform</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-colors cursor-pointer ${
              theme === 'dark'
                ? 'border-neutral-800 text-neutral-400 hover:text-white'
                : 'border-neutral-200 text-neutral-600 hover:text-neutral-950'
            }`}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
