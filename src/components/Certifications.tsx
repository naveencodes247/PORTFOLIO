import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Award, ChevronDown, X, ExternalLink, Download, FileCheck, ShieldCheck } from 'lucide-react';
import { Theme, Certification } from '../types';

import hpCertImg from '../assets/certificates/hp-effective-leadership.png';
import be10xCertImg from '../assets/certificates/be10x-ai-tools.png';
import pmpCertImg from '../assets/certificates/simplilearn-pmp-basics.png';
import canvaCertImg from '../assets/certificates/simplilearn-canva-beginners.png';
import designThinkingCertImg from '../assets/certificates/simplilearn-design-thinking.png';

interface CertificationsProps {
  theme: Theme;
}

// Verified authentic certifications with supplied PDFs
const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-hp-leadership',
    title: 'Effective Leadership',
    issuer: 'HP LIFE / HP Foundation',
    category: 'Leadership & Ethics',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: 'September 10, 2025',
    credentialCode: 'cd085e56-e7c1-468f-9300-376d4f7224da',
    pdfUrl: '/certificates/hp-effective-leadership.pdf',
    previewImg: hpCertImg,
    skillsCovered: ['Organizational Leadership', 'Leadership Strategies', 'Ethics in Leadership', 'Decisive Communication'],
  },
  {
    id: 'cert-be10x-ai',
    title: 'AI Tools & ChatGPT Workshop',
    issuer: 'be10x',
    category: 'AI & Productivity',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: 'September 12th, 2025',
    credentialCode: 'Verified be10x Certificate',
    pdfUrl: '/certificates/be10x-ai-tools.pdf',
    previewImg: be10xCertImg,
    skillsCovered: ['Presentations with AI in <5m', 'Data Analysis with AI in <30m', 'Code & Debug with AI in <10m'],
  },
  {
    id: 'cert-simplilearn-pmp',
    title: 'PMP Basics',
    issuer: 'Simplilearn SkillUp',
    category: 'Project Management',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: '5th December 2025',
    credentialCode: 'Certificate Code: 9537257',
    pdfUrl: '/certificates/simplilearn-pmp-basics.pdf',
    previewImg: pmpCertImg,
    skillsCovered: ['Project Management Lifecycle', 'Scope & Resource Planning', 'Risk Mitigation Frameworks'],
  },
  {
    id: 'cert-simplilearn-canva',
    title: 'Canva For Beginners',
    issuer: 'Simplilearn SkillUp',
    category: 'Design & Visual Systems',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: '6th December 2025',
    credentialCode: 'Certificate Code: 9538628',
    pdfUrl: '/certificates/simplilearn-canva-beginners.pdf',
    previewImg: canvaCertImg,
    skillsCovered: ['Visual Communication', 'Brand Prototyping', 'Design Hierarchy & Layouts'],
  },
  {
    id: 'cert-simplilearn-design-thinking',
    title: 'Design Thinking for Beginners',
    issuer: 'Simplilearn SkillUp',
    category: 'Human-Centered Design',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: '6th December 2025',
    credentialCode: 'Certificate Code: 9538710',
    pdfUrl: '/certificates/simplilearn-design-thinking.pdf',
    previewImg: designThinkingCertImg,
    skillsCovered: ['Human-Centered Design', 'Empathy Mapping', 'User Ideation & Prototyping'],
  },
  {
    id: 'cert-microsoft-copilot',
    title: 'Prompt Engineering with GitHub Copilot',
    issuer: 'Microsoft',
    category: 'AI & Engineering',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: '2025',
    credentialCode: 'Verified Microsoft Curriculum',
    skillsCovered: ['AI-Assisted Development', 'Context Window Crafting', 'Copilot Workflow Optimization'],
  },
  {
    id: 'cert-cbse-intel',
    title: 'AI Aware & AI Appreciate Badges',
    issuer: 'CBSE & Intel',
    category: 'AI & Ethics',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: '2024',
    credentialCode: 'Intel AI for Youth Accreditation',
    skillsCovered: ['AI Fundamentals', 'Computer Vision Basics', 'Ethical AI Principles'],
  },
  {
    id: 'cert-freedom-ai',
    title: 'Freedom with AI Masterclass',
    issuer: 'Freedom with AI',
    category: 'AI Systems',
    recipientName: 'NAVEEN KUMAR',
    issuedDate: '2025',
    credentialCode: 'Masterclass Certification',
    skillsCovered: ['AI Systems Thinking', 'Workflow Engineering', 'Practical AI Execution'],
  },
];

export const Certifications: React.FC<CertificationsProps> = ({ theme }) => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [expanded, setExpanded] = useState(false);

  const closeModal = () => {
    setActiveCert(null);
    if (window.location.hash.startsWith('#cert-')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (activeCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert]);

  // Support deep-linking to certificates via URL hash (e.g., #cert-hp-leadership)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('cert-')) {
        const found = CERTIFICATIONS_DATA.find((c) => c.id === hash);
        if (found) {
          setActiveCert(found);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const displayedCerts = expanded ? CERTIFICATIONS_DATA : CERTIFICATIONS_DATA.slice(0, 6);

  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200/80 dark:border-neutral-800/80"
        >
          <div>
            <span className="font-mono-custom text-xs uppercase tracking-widest text-[#076950] dark:text-emerald-400 font-semibold">
              07 / Verified Accreditations
            </span>
            <h2 className="mt-2 font-editorial text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-950 dark:text-white">
              Certifications
            </h2>
          </div>
          <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
            Click any certificate to view and inspect the authentic document preview and details.
          </p>
        </motion.div>

        {/* Compact 2-Column Editorial Grid with Interactive Click Triggers */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y md:divide-y-0 divide-neutral-200/60 dark:divide-neutral-800/60">
          {/* Column 1 */}
          <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
            {displayedCerts.slice(0, Math.ceil(displayedCerts.length / 2)).map((cert, idx) => (
              <motion.button
                key={cert.id}
                type="button"
                onClick={() => setActiveCert(cert)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="w-full py-4.5 flex items-baseline justify-between text-left group hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 px-3 -mx-3 rounded-xl transition-all cursor-pointer"
              >
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </span>
                    {cert.pdfUrl && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-custom bg-emerald-500/10 text-[#076950] dark:text-emerald-400 border border-emerald-500/20 font-medium">
                        PDF
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{cert.issuer}</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span>{cert.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-400 group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors shrink-0">
                  <span className="text-xs font-mono-custom hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                    Inspect
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Column 2 */}
          <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
            {displayedCerts.slice(Math.ceil(displayedCerts.length / 2)).map((cert, idx) => (
              <motion.button
                key={cert.id}
                type="button"
                onClick={() => setActiveCert(cert)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="w-full py-4.5 flex items-baseline justify-between text-left group hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 px-3 -mx-3 rounded-xl transition-all cursor-pointer"
              >
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </span>
                    {cert.pdfUrl && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-custom bg-emerald-500/10 text-[#076950] dark:text-emerald-400 border border-emerald-500/20 font-medium">
                        PDF
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{cert.issuer}</span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span>{cert.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-400 group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors shrink-0">
                  <span className="text-xs font-mono-custom hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                    Inspect
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* View all toggle */}
        {CERTIFICATIONS_DATA.length > 6 && (
          <div className="mt-8 pt-4 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-xs font-mono-custom uppercase tracking-wider text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>{expanded ? 'Show Less' : `View All (${CERTIFICATIONS_DATA.length})`}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Individual Certificate Modal Popup */}
        <AnimatePresence>
          {activeCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Blurred Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-[#121316] border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/40 overflow-hidden z-10 flex flex-col my-auto"
              >
                {/* Modal Header */}
                <div className="p-6 sm:p-7 border-b border-neutral-200/80 dark:border-neutral-800 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono-custom">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-[#076950] dark:text-emerald-400 font-semibold border border-emerald-500/20">
                        {activeCert.issuer}
                      </span>
                      <span className="text-neutral-400 dark:text-neutral-500">{activeCert.category}</span>
                      {activeCert.issuedDate && (
                        <>
                          <span className="text-neutral-300 dark:text-neutral-700">·</span>
                          <span className="text-neutral-500">{activeCert.issuedDate}</span>
                        </>
                      )}
                    </div>

                    <h3 className="mt-2.5 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                      {activeCert.title}
                    </h3>

                    {activeCert.credentialCode && (
                      <p className="mt-1 text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                        {activeCert.credentialCode}
                      </p>
                    )}
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    {activeCert.pdfUrl && (
                      <a
                        href={activeCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-heading font-semibold uppercase tracking-wider rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:border-[#076950] dark:hover:border-emerald-400 transition-colors"
                        title="Open full PDF document"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#076950] dark:text-emerald-400" />
                        <span className="hidden sm:inline">Open PDF</span>
                      </a>
                    )}
                    {activeCert.pdfUrl && (
                      <a
                        href={activeCert.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-heading font-semibold uppercase tracking-wider rounded-lg bg-[#121316] text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 transition-colors"
                        title="Download certificate PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Download</span>
                      </a>
                    )}
                    <button
                      onClick={closeModal}
                      className="p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Certificate Image Preview */}
                <div className="p-4 sm:p-6 bg-neutral-100/60 dark:bg-neutral-950/60 max-h-[70vh] overflow-y-auto flex items-center justify-center">
                  {activeCert.previewImg ? (
                    <div className="relative rounded-xl overflow-hidden shadow-lg border border-neutral-200/80 dark:border-neutral-800 max-w-full">
                      <img
                        src={activeCert.previewImg}
                        alt={`${activeCert.title} - Certificate of Completion`}
                        className="w-full h-auto object-contain max-h-[62vh]"
                      />
                    </div>
                  ) : (
                    <div className="py-16 px-6 text-center max-w-md flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-[#076950] dark:text-emerald-400 mb-4 border border-emerald-500/20">
                        <FileCheck className="w-8 h-8" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-neutral-900 dark:text-white">
                        Verified Course Completion
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        This credential was completed under the {activeCert.issuer} verified curriculum. The full certificate artifact is archived in Naveen's academic records.
                      </p>
                      {activeCert.skillsCovered && (
                        <div className="mt-6 flex flex-wrap gap-2 justify-center">
                          {activeCert.skillsCovered.map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 rounded-md text-xs font-mono-custom bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-5 border-t border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#121316] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#076950] dark:text-emerald-400" />
                    <span>Recipient: {activeCert.recipientName || 'Naveen Kumar (Yadav)'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>Press ESC to close</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
