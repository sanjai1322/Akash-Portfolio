import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

export const ExperienceSection: React.FC = () => {
  const [activeMetricIndex, setActiveMetricIndex] = useState<number | null>(null);
  const { experience } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="relative w-full bg-[#090D1C] px-4 sm:px-8 lg:px-16 py-32 overflow-hidden text-[#dee1f7]"
    >
      {/* Huge Cropped Watermark with subtle scroll parallax */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.05, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EDITORIAL_EASE }}
        className="pointer-events-none absolute right-0 top-12 select-none opacity-5 leading-none"
      >
        <span className="font-['Plus_Jakarta_Sans'] text-[120px] sm:text-[180px] lg:text-[240px] font-black tracking-tighter text-white">
          PRODAPT
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#b8c4ff] uppercase tracking-widest">
              03 / PRODUCTION TENURE
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
              {experience.company} / {experience.division}
            </h2>
          </div>
          <div className="text-left md:text-right">
            <div className="font-['Plus_Jakarta_Sans'] text-2xl font-semibold text-[#b8c4ff]">
              {experience.role}
            </div>
            <div className="font-['Inter'] text-sm text-[#8d90a2] mt-1">
              {experience.period} • Client: {experience.client}
            </div>
          </div>
        </motion.div>

        {/* Narrative Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EDITORIAL_EASE }}
          className="font-['Inter'] text-lg sm:text-xl font-light text-[#c4c5d9] max-w-3xl leading-relaxed"
        >
          {experience.summary}
        </motion.p>

        {/* Four Giant Independent Metric Sculptures with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {experience.metrics.map((metric, idx) => {
            const isHovered = activeMetricIndex === idx;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: EDITORIAL_EASE }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onMouseEnter={() => setActiveMetricIndex(idx)}
                onMouseLeave={() => setActiveMetricIndex(null)}
                className={`p-7 rounded-lg border transition-colors duration-300 relative group cursor-default ${
                  isHovered
                    ? 'bg-[#1b1f2f] border-[#285bff]/70 shadow-[0_0_35px_rgba(40,91,255,0.25)]'
                    : 'bg-[#171b2b]/70 border-white/5 hover:border-white/15'
                }`}
              >
                <div className="font-['Plus_Jakarta_Sans'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight flex items-baseline">
                  {metric.value}
                  <span className="text-[#b8c4ff] text-3xl sm:text-4xl ml-0.5">{metric.suffix}</span>
                </div>

                <div className="h-px w-12 bg-[#285bff] my-4 group-hover:w-24 transition-all duration-300"></div>

                <div className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white mb-1">
                  {metric.label}
                </div>

                <p className="font-['Inter'] text-xs text-[#c4c5d9] leading-relaxed">
                  {metric.description}
                </p>

                {/* Subtext reveal on hover */}
                <div
                  className={`mt-3 pt-3 border-t border-white/10 text-[11px] font-['JetBrains_Mono'] text-[#b8c4ff] transition-opacity duration-200 ${
                    isHovered ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  → {metric.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
