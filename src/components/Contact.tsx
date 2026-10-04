import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Send } from 'lucide-react';
import { Theme } from '../types';

interface ContactProps {
  theme: Theme;
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ theme, onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const email = 'connect.naveen@outlook.in';
  const github = 'https://github.com/naveencodes247';
  const linkedin = 'https://www.linkedin.com/in/nvnydv';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const mailBody = encodeURIComponent(
      `Hello Naveen,\n\n${senderMessage}\n\nFrom: ${senderName || 'Anonymous'}\nEmail: ${senderEmail || 'Not specified'}`
    );
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
    setComposerOpen(false);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental "LET'S CONNECT" */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="font-mono-custom text-xs uppercase tracking-widest text-[#076950] dark:text-emerald-400 font-semibold">
              08 / Inquiries & Collaboration
            </span>
            <h2 className="mt-4 font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-neutral-950 dark:text-white leading-[0.9]">
              Let's
              <br />
              Connect.
            </h2>

            <p className="mt-8 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-lg leading-relaxed font-normal">
              Interested in software engineering roles, full-stack product building, or collaborative hackathon ventures. Feel free to reach out directly.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio%20Inquiry%20-%20Naveen%20Yadav`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                  if (isMobile) {
                    e.preventDefault();
                    window.location.href = `mailto:${email}?subject=Portfolio%20Inquiry%20-%20Naveen%20Yadav`;
                  }
                }}
                className="px-8 py-4 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-heading text-sm font-bold uppercase tracking-wider hover:bg-[#076950] dark:hover:bg-emerald-400 dark:hover:text-neutral-950 transition-colors inline-flex items-center gap-2"
              >
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setComposerOpen(!composerOpen)}
                className="px-6 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 font-heading text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-white transition-colors cursor-pointer"
              >
                {composerOpen ? 'Close Composer' : 'Write a Quick Note'}
              </button>
            </div>

            {/* Quick Note Composer Accordion */}
            {composerOpen && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleSendMail}
                className="mt-8 p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 flex flex-col gap-4 max-w-lg"
              >
                <div className="flex flex-col gap-1">
                  <label className="font-mono-custom text-xs uppercase tracking-wider text-neutral-500">Your Name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm focus:outline-hidden focus:border-[#076950]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono-custom text-xs uppercase tracking-wider text-neutral-500">Your Email</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm focus:outline-hidden focus:border-[#076950]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-mono-custom text-xs uppercase tracking-wider text-neutral-500">Message</label>
                  <textarea
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Hi Naveen, I came across your portfolio..."
                    className="p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm focus:outline-hidden focus:border-[#076950] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 py-3 rounded-lg bg-[#076950] dark:bg-emerald-500 text-white font-heading text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-[#065440] transition-colors cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </motion.form>
            )}
          </div>

          {/* Right Column: Clean Editorial Channel List */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-4 lg:pt-12">
            <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80 border-y border-neutral-200/80 dark:border-neutral-800/80">
              {/* Email Row */}
              <div className="py-6 flex items-baseline justify-between group">
                <div>
                  <span className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                    Direct Email
                  </span>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio%20Inquiry%20-%20Naveen%20Yadav`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                      if (isMobile) {
                        e.preventDefault();
                        window.location.href = `mailto:${email}?subject=Portfolio%20Inquiry%20-%20Naveen%20Yadav`;
                      }
                    }}
                    className="block mt-1.5 font-heading text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors"
                  >
                    {email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#076950]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Row */}
              <div className="py-6 flex items-baseline justify-between group">
                <div>
                  <span className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                    Codebase & Projects
                  </span>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 font-heading text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>github.com/naveencodes247</span>
                  </a>
                </div>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  aria-label="Visit GitHub Profile"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* LinkedIn Row */}
              <div className="py-6 flex items-baseline justify-between group">
                <div>
                  <span className="font-mono-custom text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                    Professional Network
                  </span>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 font-heading text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#076950] dark:group-hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>linkedin.com/in/nvnydv</span>
                  </a>
                </div>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  aria-label="Visit LinkedIn Profile"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Tag */}
            <div className="mt-8 flex items-center justify-between text-xs font-mono-custom text-neutral-400 dark:text-neutral-500">
              <span>Location</span>
              <span>LNCT Bhopal, Madhya Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
