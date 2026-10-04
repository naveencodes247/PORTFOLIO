import React from 'react';
import { motion } from 'motion/react';
import { Theme } from '../types';

interface EducationProps {
  theme: Theme;
}

export const Education: React.FC<EducationProps> = ({ theme }) => {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-neutral-200/80 dark:border-neutral-800/80">
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
              06 / Academic Foundation
            </span>
            <h2 className="mt-2 font-editorial text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-950 dark:text-white">
              Education
            </h2>
          </div>
          <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
            Engineering curriculum and residential secondary school foundations.
          </p>
        </motion.div>

        {/* Minimal Editorial Columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* University Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between pb-8 border-b md:border-b-0 md:border-r border-neutral-200/80 dark:border-neutral-800/80 md:pr-12"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono-custom text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                <span>Undergraduate</span>
                <span className="text-[#076950] dark:text-emerald-400 font-medium">Graduation 2029</span>
              </div>

              <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Lakshmi Narain College of Technology (LNCT)
              </h3>
              <p className="mt-1 text-sm font-mono-custom text-neutral-500 dark:text-neutral-400">
                Bhopal, Madhya Pradesh
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono-custom text-xs uppercase">Degree</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Bachelor of Technology (B.Tech)
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono-custom text-xs uppercase">Major</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Electronics & Communication Engineering
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono-custom text-xs uppercase">Status</span>
                  <span className="font-semibold text-[#076950] dark:text-emerald-400">
                    Sophomore (2nd Year)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Schooling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between pb-8"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono-custom text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                <span>Secondary Schooling</span>
                <span>Alumnus</span>
              </div>

              <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Jawahar Navodaya Vidyalaya
              </h3>
              <p className="mt-1 text-sm font-mono-custom text-neutral-500 dark:text-neutral-400">
                Katihar, Bihar
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono-custom text-xs uppercase">Institution</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Navodaya Vidyalaya Samiti (NVS)
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono-custom text-xs uppercase">Curriculum</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Science & Mathematics Track
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400 font-mono-custom text-xs uppercase">Environment</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Residential Academic Institution
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
