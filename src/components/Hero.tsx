import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowUpRight, FileText, X } from 'lucide-react';
import { Theme } from '../types';
import portraitImg from '../assets/images/naveen_transparent.png';

interface HeroProps {
  theme: Theme;
  onOpenResumeModal: () => void;
}

// Clean Application Icons (Displaying strictly only icons as requested)
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ theme, onOpenResumeModal }) => {
  const [contactPopupOpen, setContactPopupOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('touch') === 'open';
    }
    return false;
  });
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setContactPopupOpen(false);
      }
    };
    if (contactPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [contactPopupOpen]);

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        
        {/* Top Eyebrow Editorial Marker */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between pb-6 border-b border-[#E4E4DC] dark:border-[#1F2228] text-xs font-mono-custom uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B6E4F] dark:bg-emerald-400" />
            <span>01 // Portfolio 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-neutral-400 dark:text-neutral-500">
            <span>B.Tech ECE Sophomore</span>
            <span>·</span>
            <span>LNCT Bhopal</span>
          </div>
          <div className="text-[#0B6E4F] dark:text-emerald-400 font-semibold">
            CEO @ MEDORA
          </div>
        </motion.div>

        {/* Hero Main Stage Grid */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Typography Hierarchy (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            
            {/* 1. Monumental Editorial Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-extrabold uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.6rem] leading-[0.88] tracking-[-0.03em] text-[#121316] dark:text-[#F5F5F7] select-none"
            >
              NAVEEN
              <br />
              YADAV<span className="text-[#0B6E4F] dark:text-emerald-400">.</span>
            </motion.h1>

            {/* 2. Distinct Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 sm:mt-6 flex items-center gap-3"
            >
              <div className="w-8 sm:w-12 h-[2px] bg-[#0B6E4F] dark:bg-emerald-400" />
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-[#0B6E4F] dark:text-emerald-400">
                Student Developer & Builder
              </h2>
            </motion.div>

            {/* 3. Concise Factual Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 text-base sm:text-lg text-[#55575E] dark:text-[#8E919A] max-w-xl font-normal leading-relaxed text-balance"
            >
              I’m Naveen, a B.Tech ECE student at LNCT Bhopal focused on full-stack web development and DSA, with a strong interest in building practical products and working with teams.
            </motion.p>

            {/* 4. Exactly Two Primary Clear Actions + Direct Popup */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary Action */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-heading font-bold uppercase tracking-wider rounded-md bg-[#121316] text-white hover:bg-neutral-800 dark:bg-[#F5F5F7] dark:text-[#121316] dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-sm"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              {/* Secondary Action with Popup Trigger */}
              <div className="relative" ref={popupRef}>
                <button
                  type="button"
                  onClick={() => setContactPopupOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 text-xs font-heading font-bold uppercase tracking-wider rounded-md border transition-all cursor-pointer ${
                    contactPopupOpen
                      ? 'border-[#0B6E4F] dark:border-emerald-400 bg-emerald-500/10 text-[#0B6E4F] dark:text-emerald-400 ring-2 ring-emerald-500/20'
                      : 'border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 hover:border-[#0B6E4F] dark:hover:border-emerald-400'
                  }`}
                  aria-expanded={contactPopupOpen}
                  aria-haspopup="true"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 text-[#0B6E4F] dark:text-emerald-400 transition-transform duration-200 ${
                      contactPopupOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>

                {/* Popup: Shows ONLY Application Icons for WhatsApp (+91 9709475357), Email, and LinkedIn */}
                <AnimatePresence>
                  {contactPopupOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.94 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-full mb-3 left-0 z-40 flex items-center gap-2 p-2 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/95 dark:bg-[#131418]/95 backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/60"
                    >
                      {/* WhatsApp Icon (+91 9709475357) */}
                      <a
                        href="https://wa.me/919709475357"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-white hover:bg-[#25D366] transition-all duration-200 hover:scale-105 active:scale-95 border border-transparent hover:border-[#25D366]"
                        aria-label="WhatsApp (+91 9709475357)"
                        title="WhatsApp: +91 9709475357"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                      </a>

                      {/* Email Icon: Direct transfer to composing section (connect.naveen@outlook.in) */}
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=connect.naveen@outlook.in&su=Portfolio%20Inquiry%20-%20Naveen%20Yadav"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                          if (isMobile) {
                            e.preventDefault();
                            window.location.href = 'mailto:connect.naveen@outlook.in?subject=Portfolio%20Inquiry%20-%20Naveen%20Yadav';
                          }
                        }}
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-white hover:bg-[#0B6E4F] transition-all duration-200 hover:scale-105 active:scale-95 border border-transparent hover:border-[#0B6E4F]"
                        aria-label="Direct Email Compose (connect.naveen@outlook.in)"
                        title="Compose email to connect.naveen@outlook.in"
                      >
                        <EmailIcon className="w-5 h-5" />
                      </a>

                      {/* LinkedIn Icon (nvnydv) */}
                      <a
                        href="https://www.linkedin.com/in/nvnydv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:text-white hover:bg-[#0A66C2] transition-all duration-200 hover:scale-105 active:scale-95 border border-transparent hover:border-[#0A66C2]"
                        aria-label="LinkedIn"
                        title="LinkedIn Profile"
                      >
                        <LinkedInIcon className="w-5 h-5" />
                      </a>

                      {/* Small Bottom Pointer Arrow */}
                      <div className="absolute -bottom-1.5 left-7 w-3 h-3 rotate-45 border-r border-b border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131418]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resume Trigger */}
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-heading font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-[#0B6E4F] dark:hover:text-emerald-400 transition-colors ml-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#0B6E4F] dark:text-emerald-400" />
                <span>Resume Details</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Authentic Naveen Yadav Portrait Anchor (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center items-end relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] flex items-end justify-center"
            >
              <img
                src={portraitImg}
                alt="Naveen Yadav - Student Developer & Builder"
                className="w-full h-auto object-contain object-bottom drop-shadow-xl"
                loading="eager"
              />
            </motion.div>
          </div>

        </div>

        {/* Factual Bottom Context Footer */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#E4E4DC] dark:border-[#1F2228] flex flex-wrap items-center justify-between gap-4 text-xs font-mono-custom text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">FOCUS:</span>
            <span>Full-Stack Web Platforms & Systems Engineering</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/naveencodes247"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B6E4F] dark:hover:text-emerald-400 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/nvnydv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B6E4F] dark:hover:text-emerald-400 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=connect.naveen@outlook.in&su=Portfolio%20Inquiry%20-%20Naveen%20Yadav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0B6E4F] dark:hover:text-emerald-400 transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
