import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface ExpertiseSectionProps {
  onSelectSkill: (skill: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onSelectSkill }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const selectedSkillInfo = PORTFOLIO_DATA.coreStack.find(
    (s) => s.name.toLowerCase() === activeSkill?.toLowerCase()
  );

  return (
    <section className="w-full bg-[#285BFF] px-4 sm:px-8 lg:px-16 py-32 text-white overflow-hidden relative selection:bg-white selection:text-[#285bff]">
      {/* Ambient Pattern / Watermark with scroll drift */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EDITORIAL_EASE }}
        className="pointer-events-none absolute -left-20 -bottom-20 select-none opacity-10 leading-none"
      >
        <span className="font-['Plus_Jakarta_Sans'] text-[160px] md:text-[260px] font-black tracking-tighter text-white">
          TOOLKIT
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
          className="flex items-center gap-3"
        >
          <span className="font-['JetBrains_Mono'] text-xs font-semibold text-white/80 uppercase tracking-widest">
            07 / CORE STACK
          </span>
          <div className="h-px flex-1 bg-white/20"></div>
        </motion.div>

        {/* Giant Display Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
          className="font-['Plus_Jakarta_Sans'] text-[52px] sm:text-[76px] lg:text-[96px] leading-[0.98] font-bold text-white tracking-tight"
        >
          Tools of the trade.
        </motion.h2>

        {/* Fluid Typographic Index Constellation Badges with staggered spring entry */}
        <div className="flex flex-wrap gap-3 sm:gap-5 pt-4">
          {PORTFOLIO_DATA.coreStack.map((tool, idx) => {
            const isCurrent = activeSkill === tool.name;
            return (
              <motion.button
                key={tool.name}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: EDITORIAL_EASE }}
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  const next = isCurrent ? null : tool.name;
                  setActiveSkill(next);
                  if (next) onSelectSkill(next);
                }}
                className={`px-6 py-4 rounded-xl backdrop-blur-md border transition-colors duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-white text-[#285BFF] shadow-[0_0_30px_rgba(255,255,255,0.4)] border-white'
                    : 'bg-white/10 hover:bg-white hover:text-[#285BFF] border-white/20 text-white'
                }`}
                aria-label={`View details for ${tool.name}`}
              >
                <span className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold">
                  {tool.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Skill Inspector Card if clicked */}
        <AnimatePresence>
          {selectedSkillInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 15 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
              className="p-6 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 max-w-xl space-y-2 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white">
                  {selectedSkillInfo.name} — {selectedSkillInfo.category}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white text-[#285bff] text-xs font-mono font-bold uppercase shadow-sm">
                  {selectedSkillInfo.mastery}
                </span>
              </div>
              <p className="font-['Inter'] text-sm text-white/95 leading-relaxed">
                {selectedSkillInfo.desc}
              </p>
              <div className="pt-2 text-xs font-mono text-white/80">
                Click badge again to dismiss • Filter applied in Automation Lab
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
