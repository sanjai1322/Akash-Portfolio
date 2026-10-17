import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface ManifestoSectionProps {
  selectedTech: string | null;
  onSelectTech: (tech: string) => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ selectedTech, onSelectTech }) => {
  return (
    <section className="w-full bg-[#F5F6F8] text-[#090D1C] px-4 sm:px-8 lg:px-16 py-28 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Meta Chapter with hairline grow animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
          className="flex items-center gap-3"
        >
          <span className="font-['JetBrains_Mono'] text-xs font-semibold text-slate-500 uppercase tracking-widest">
            02 / MANIFESTO
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
            className="h-px flex-1 bg-slate-300 origin-left"
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
          className="font-['Plus_Jakarta_Sans'] text-[42px] sm:text-[62px] lg:text-[76px] leading-[1.05] tracking-tight font-bold text-slate-900 max-w-5xl"
        >
          Built on precision.{' '}
          <span className="italic font-light text-[#285bff]">Driven</span>{' '}by quality.
        </motion.h2>

        {/* Asymmetric 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
          {/* Oversized Sculptural Typographic Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
            className="lg:col-span-5 select-none"
          >
            <div className="text-[100px] sm:text-[140px] lg:text-[170px] leading-none font-black text-slate-300/80 tracking-tighter">
              {PORTFOLIO_DATA.profile.experienceYears}
            </div>
            <div className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-slate-500 uppercase tracking-widest -mt-4 pl-2">
              YEARS DEDICATED TESTING RIGOR
            </div>
          </motion.div>

          {/* Punchy Editorial Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: EDITORIAL_EASE }}
              className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-medium text-slate-800 leading-relaxed"
            >
              Specialized in building end-to-end regression frameworks and automated validation pipelines for tier-1 telecom infrastructure, ensuring flawless continuous delivery at scale.
            </motion.p>

            {/* Tech Pill Strip with kinetic hover micro-animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: EDITORIAL_EASE }}
              className="pt-4 flex flex-wrap items-center gap-3 text-slate-700"
            >
              {PORTFOLIO_DATA.manifestoTech.map((tech, idx) => {
                const isSelected = selectedTech?.toLowerCase() === tech.toLowerCase();
                return (
                  <React.Fragment key={tech}>
                    <motion.button
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => onSelectTech(tech)}
                      className={`px-3.5 py-1.5 rounded-md font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#285bff] text-white shadow-md'
                          : 'bg-slate-200/90 hover:bg-slate-300 text-slate-800'
                      }`}
                      title={`Filter Lab projects by ${tech}`}
                    >
                      {tech}
                    </motion.button>
                    {idx < PORTFOLIO_DATA.manifestoTech.length - 1 && (
                      <span className="text-slate-300 hidden sm:inline">•</span>
                    )}
                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
