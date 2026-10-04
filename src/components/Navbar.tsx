import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenResumeModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F8F6]/90 dark:bg-[#0D0E11]/90 backdrop-blur-md border-b border-[#E4E4DC] dark:border-[#1F2228] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Left: Clean Personal Brand Mark */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="group flex flex-col sm:flex-row sm:items-center sm:gap-3 text-left"
          >
            <span className="font-heading font-extrabold text-base sm:text-lg uppercase tracking-tight text-[#121316] dark:text-[#F5F5F7] group-hover:text-[#0B6E4F] dark:group-hover:text-emerald-400 transition-colors">
              NAVEEN YADAV
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#0B6E4F] dark:bg-emerald-400" />
            <span className="text-[11px] font-mono-custom uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Student Developer & Builder
            </span>
          </a>
        </div>

        {/* Center: Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-heading font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#55575E] dark:text-[#8E919A] hover:text-[#0B6E4F] dark:hover:text-emerald-400 transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions & Theme Switcher */}
        <div className="flex items-center gap-3">
          {/* Resume Trigger */}
          <button
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-heading font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-[#0B6E4F] dark:hover:text-emerald-400 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white/60 dark:bg-neutral-900/60 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#0B6E4F] dark:text-emerald-400" />
            <span>Resume</span>
          </button>

          {/* Primary Contact Link */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded-md bg-[#121316] text-white hover:bg-neutral-800 dark:bg-[#F5F5F7] dark:text-[#121316] dark:hover:bg-neutral-200 transition-colors"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0B6E4F] dark:text-emerald-600" />
          </a>

          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-md border border-[#E4E4DC] dark:border-[#1F2228] bg-white/70 dark:bg-neutral-900/70 text-neutral-700 dark:text-neutral-300 hover:text-[#0B6E4F] dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-neutral-800 dark:text-neutral-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E4E4DC] dark:border-[#1F2228] bg-[#F8F8F6] dark:bg-[#0D0E11] px-6 py-8 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-heading font-bold uppercase tracking-wider text-[#121316] dark:text-[#F5F5F7] hover:text-[#0B6E4F] dark:hover:text-emerald-400 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-5 border-t border-[#E4E4DC] dark:border-[#1F2228] flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-3 text-xs font-heading font-bold uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md text-center"
            >
              Resume Details
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-3 text-xs font-heading font-bold uppercase tracking-wider bg-[#121316] text-white dark:bg-white dark:text-[#121316] rounded-md text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
