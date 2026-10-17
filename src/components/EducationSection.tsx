import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

export const EducationSection: React.FC = () => {
  return (
    <section className="w-full bg-[#090D1C] px-4 sm:px-8 lg:px-16 py-28 text-[#dee1f7] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Meta Chapter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
          className="flex items-center justify-between border-b border-white/10 pb-6"
        >
          <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#b8c4ff] uppercase tracking-widest font-mono">
            08 / ACADEMIC FOUNDATION
          </span>
          <span className="font-['JetBrains_Mono'] text-xs text-[#8d90a2] uppercase">
            ACCREDITATION
          </span>
        </motion.div>

        {/* Horizontal Minimal Editorial Timeline */}
        <div className="divide-y divide-white/10">
          {PORTFOLIO_DATA.education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: idx * 0.15, ease: EDITORIAL_EASE }}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group hover:bg-white/[0.02] px-2 rounded transition-colors"
            >
              <div className="md:col-span-3 font-['JetBrains_Mono'] text-2xl sm:text-3xl font-bold text-white">
                {item.period}
              </div>
              <div className="md:col-span-5">
                <div className="font-['Plus_Jakarta_Sans'] text-2xl font-semibold text-white group-hover:text-[#b8c4ff] transition-colors">
                  {item.degree}
                </div>
                {item.details && (
                  <p className="font-['Inter'] text-xs text-[#8d90a2] mt-1.5 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
              <div className="md:col-span-4 font-['Inter'] text-sm sm:text-base text-[#8d90a2] md:text-right">
                {item.institution}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
