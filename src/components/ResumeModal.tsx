import React, { useState, useEffect } from 'react';
import { X, FileText, Mail, Check, Copy, Printer, ArrowUpRight, GraduationCap, Briefcase, Award, Eye } from 'lucide-react';
import { Theme } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, theme }) => {
  const [viewMode, setViewMode] = useState<'overview' | 'printSheet'>('overview');
  const [copied, setCopied] = useState(false);

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

  if (!isOpen) return null;

  const email = 'connect.naveen@outlook.in';
  const phone = '+91 9709475357';

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Naveen Yadav\nStudent Developer & Builder\nB.Tech ECE Sophomore, LNCT Bhopal (2029)\nEmail: ${email}\nPhone: ${phone}\nGitHub: https://github.com/naveencodes247\nLinkedIn: https://www.linkedin.com/in/nvnydv`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl relative transition-all ${
          theme === 'dark'
            ? 'bg-[#121316] border-neutral-800 text-white'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className={`absolute top-6 right-6 p-2 rounded-lg border transition-colors cursor-pointer ${
            theme === 'dark'
              ? 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              : 'border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200/60 dark:border-neutral-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold">
                Naveen Yadav · Resume Profile
              </h3>
              <p className="text-xs text-neutral-500 font-mono-custom">
                B.Tech ECE Sophomore · LNCT Bhopal
              </p>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setViewMode('overview')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'overview'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setViewMode('printSheet')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'printSheet'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Resume Sheet
            </button>
          </div>
        </div>

        {/* Mode 1: Overview & Status */}
        {viewMode === 'overview' ? (
          <div className="mt-6 flex flex-col gap-6">
            <div className="p-4 rounded-xl bg-neutral-500/10 border border-neutral-500/20 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                Naveen is currently in his sophomore year at LNCT Bhopal. The updated 2026 resume is synchronized with his recent software work at MEDORA (CEO) and Smart India Hackathon 2026.
              </p>
            </div>

            {/* Quick Snapshot */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Education:
                  </span>{' '}
                  <span className="text-neutral-600 dark:text-neutral-400">
                    B.Tech in Electronics & Communication Engineering (LNCT Bhopal, Class of 2029) · School: Jawahar Navodaya Vidyalaya, Katihar
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Briefcase className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Key Leadership:
                  </span>{' '}
                  <span className="text-neutral-600 dark:text-neutral-400">
                    CEO @ MEDORA · Software Architecture @ Smart India Hackathon 2026 · Coordinator @ Training & Placement Dept, LNCT
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <Award className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Technical Stack:
                  </span>{' '}
                  <span className="text-neutral-600 dark:text-neutral-400">
                    C++, DSA, HTML, CSS, JavaScript, React, Next.js, Node.js, Git / GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mode 2: Clean Printable Resume Sheet */
          <div
            id="printable-resume"
            className={`mt-6 p-6 rounded-xl border font-sans text-xs leading-relaxed ${
              theme === 'dark'
                ? 'bg-neutral-900/60 border-neutral-800 text-neutral-200'
                : 'bg-neutral-50 border-neutral-200 text-neutral-800'
            }`}
          >
            {/* Header */}
            <div className="border-b pb-4 mb-4 border-neutral-300 dark:border-neutral-700">
              <h2 className="font-editorial text-2xl tracking-wide text-neutral-950 dark:text-white">
                NAVEEN YADAV
              </h2>
              <p className="font-mono-custom text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                Student Developer & Builder · B.Tech ECE (LNCT Bhopal)
              </p>
              <div className="mt-1 flex flex-wrap gap-x-3 text-[10px] text-neutral-500">
                <span>{email}</span>
                <span>·</span>
                <span>{phone}</span>
                <span>·</span>
                <span>github.com/naveencodes247</span>
                <span>·</span>
                <span>linkedin.com/in/nvnydv</span>
              </div>
            </div>

            {/* Section: Education */}
            <div className="mb-4">
              <h4 className="font-heading font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-[11px] border-b pb-1 mb-2 border-neutral-200 dark:border-neutral-800">
                Education
              </h4>
              <div className="flex justify-between items-baseline font-semibold">
                <span>Lakshmi Narain College of Technology (LNCT), Bhopal</span>
                <span className="font-mono-custom text-[10px]">2025 – 2029</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                B.Tech in Electronics & Communication Engineering · Sophomore Standing
              </p>
              <div className="mt-2 flex justify-between items-baseline font-semibold">
                <span>Jawahar Navodaya Vidyalaya, Katihar</span>
                <span className="font-mono-custom text-[10px]">Secondary Education</span>
              </div>
            </div>

            {/* Section: Experience & Leadership */}
            <div className="mb-4">
              <h4 className="font-heading font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-[11px] border-b pb-1 mb-2 border-neutral-200 dark:border-neutral-800">
                Experience & Leadership
              </h4>
              <div className="mb-2">
                <div className="flex justify-between font-semibold">
                  <span>CEO & Founder — MEDORA</span>
                  <span className="font-mono-custom text-[10px]">Healthcare Venture</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Directing strategic roadmap and building full-stack digital solutions to tackle real healthcare coordination problems.
                </p>
              </div>

              <div className="mb-2">
                <div className="flex justify-between font-semibold">
                  <span>Smart India Hackathon 2026 — AGRO-IOT</span>
                  <span className="font-mono-custom text-[10px]">Problem Statement: 26180</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Engineered the software platform and dashboard for live agricultural sensor telemetry under hackathon parameters.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-semibold">
                  <span>Coordinator — Training & Placement Department, LNCT Bhopal</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Coordinated institutional student placement activities and handled academic and corporate drive records.
                </p>
              </div>
            </div>

            {/* Section: Technical & Core Skills */}
            <div className="mb-3">
              <h4 className="font-heading font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-[11px] border-b pb-1 mb-2 border-neutral-200 dark:border-neutral-800">
                Skills
              </h4>
              <p>
                <strong className="text-neutral-900 dark:text-white">Technical:</strong> C++, DSA, HTML, CSS, JavaScript, React, Next.js, Node.js, Git / GitHub
              </p>
              <p className="mt-1">
                <strong className="text-neutral-900 dark:text-white">Core:</strong> Communication, Leadership, Management, Team Collaboration, Discipline, Consistency
              </p>
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}?subject=Resume Request - Naveen Yadav`}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-neutral-950 hover:bg-neutral-800 text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Updated Resume</span>
            </a>

            <button
              onClick={handlePrint}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white'
                  : 'border-neutral-300 bg-neutral-50 text-neutral-700 hover:text-neutral-900'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-colors cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-600'
                : theme === 'dark'
                ? 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white'
                : 'border-neutral-300 bg-neutral-50 text-neutral-700 hover:text-neutral-900'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Text Profile'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
