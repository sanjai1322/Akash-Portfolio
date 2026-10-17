import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, ExhibitItem } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';
import { AnimatedText } from './AnimatedText.tsx';

interface ProofSectionProps {
  onOpenLightbox: (exhibit: ExhibitItem) => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onOpenLightbox }) => {
  const [exhibit1, exhibit2, exhibit3, exhibit4] = PORTFOLIO_DATA.exhibits;

  return (
    <section id="proof" className="w-full bg-[#060A19] px-4 sm:px-8 lg:px-16 py-32 text-[#dee1f7] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
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
              06 / PROVEN RECORD
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              <AnimatedText text="Proof in the" delay={0.1} />{' '}
              <span className="italic font-light text-[#b8c4ff]">work</span>.
            </h2>
          </div>
          <p className="font-['Inter'] text-sm text-[#8d90a2] max-w-sm">
            Verified academic and professional milestones from Prodapt Enterprise Telecom foundations.
          </p>
        </motion.div>

        {/* Curated Museum-Grade Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Large Hero Photo: On-Stage Certificate Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
            className="lg:col-span-7 space-y-4"
          >
            <div
              onClick={() => onOpenLightbox(exhibit1)}
              className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl group cursor-pointer"
            >
              <img
                src={exhibit1.imageUrl}
                alt={exhibit1.title}
                className="w-full h-auto object-cover filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>

              {/* Hover inspect badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-['Plus_Jakarta_Sans'] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5 shadow-lg">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
                <span>Click to Expand</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white pointer-events-none">
                <div>
                  <span className="px-2.5 py-1 bg-[#285bff] text-white font-['JetBrains_Mono'] text-[11px] uppercase rounded font-semibold shadow-[0_0_12px_rgba(40,91,255,0.6)]">
                    {exhibit1.tag}
                  </span>
                  <div className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold mt-2">
                    {exhibit1.title}
                  </div>
                  <div className="font-['Inter'] text-xs text-[#c4c5d9]">
                    {exhibit1.subtitle}
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['JetBrains_Mono'] text-[11px] text-[#8d90a2] uppercase tracking-wider pl-2">
              {exhibit1.caption}
            </p>
          </motion.div>

          {/* Right Side: Star of the Month & University Certificate */}
          <div className="lg:col-span-5 space-y-8">
            {/* Star Award of the Month */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: EDITORIAL_EASE }}
              className="space-y-3"
            >
              <div
                onClick={() => onOpenLightbox(exhibit2)}
                className="rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#090d1d] group cursor-pointer relative"
              >
                <img
                  src={exhibit2.imageUrl}
                  alt={exhibit2.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-['Plus_Jakarta_Sans'] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5 shadow-lg">
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                  <span>Inspect Award</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 font-['JetBrains_Mono'] text-[11px] text-[#8d90a2] uppercase">
                <span>EXHIBIT 02: STAR AWARD OF THE MONTH</span>
                <span className="text-[#b8c4ff] font-mono font-semibold">{exhibit2.date}</span>
              </div>
            </motion.div>

            {/* Prodapt University Certificate of Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.25, ease: EDITORIAL_EASE }}
              className="space-y-3"
            >
              <div
                onClick={() => onOpenLightbox(exhibit3)}
                className="rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#090d1d] group cursor-pointer relative"
              >
                <img
                  src={exhibit3.imageUrl}
                  alt={exhibit3.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-['Plus_Jakarta_Sans'] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5 shadow-lg">
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                  <span>Inspect Diploma</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 font-['JetBrains_Mono'] text-[11px] text-[#8d90a2] uppercase">
                <span>EXHIBIT 03: ACCREDITATION DIPLOMA</span>
                <span className="text-[#b8c4ff] font-mono font-semibold">{exhibit3.date}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cohort Community Spread */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: EDITORIAL_EASE }}
          className="pt-8 space-y-4"
        >
          <div
            onClick={() => onOpenLightbox(exhibit4)}
            className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group cursor-pointer"
          >
            <img
              src={exhibit4.imageUrl}
              alt={exhibit4.title}
              className="w-full max-h-[500px] object-cover filter contrast-[1.02] group-hover:scale-[1.015] transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-['Plus_Jakarta_Sans'] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5 shadow-lg">
              <span className="material-symbols-outlined text-sm">zoom_in</span>
              <span>Inspect Cohort</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-4 pointer-events-none">
              <div>
                <span className="px-2.5 py-1 bg-white/20 text-white font-['JetBrains_Mono'] text-[11px] uppercase rounded backdrop-blur-md font-semibold">
                  {exhibit4.tag}
                </span>
                <div className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold mt-2">
                  {exhibit4.title}
                </div>
                <div className="font-['Inter'] text-xs text-[#c4c5d9]">
                  {exhibit4.subtitle}
                </div>
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#c4c5d9] uppercase tracking-widest font-mono">
                TAMIL NADU, INDIA
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
