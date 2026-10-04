import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Theme } from '../types';

interface FooterProps {
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-heading font-bold text-lg uppercase tracking-tight text-neutral-950 dark:text-white">
            NAVEEN YADAV
          </span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">·</span>
          <span className="text-xs font-mono-custom text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Student Developer & Builder
          </span>
        </div>

        {/* Minimal Social & Scroll Action */}
        <div className="flex items-center gap-6 text-xs font-mono-custom">
          <a
            href="https://github.com/naveencodes247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nvnydv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
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
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
