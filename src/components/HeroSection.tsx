import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';
import { AnimatedText } from './AnimatedText.tsx';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenTelemetry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenTelemetry }) => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#060A19] min-h-[92vh] flex flex-col justify-between px-4 sm:px-8 lg:px-16 pt-8 sm:pt-12 pb-12 selection:bg-[#285bff] selection:text-white"
    >
      {/* Giant cropped background typography with subtle parallax drift */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.4, ease: EDITORIAL_EASE }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center select-none overflow-hidden"
      >
        <span className="font-['Plus_Jakarta_Sans'] text-[100px] sm:text-[180px] md:text-[230px] lg:text-[300px] leading-none font-bold tracking-tighter text-[#dee1f7] whitespace-nowrap">
          AKASH.
        </span>
      </motion.div>

      {/* Ambient Cobalt Radial Light Glows with gentle breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.26, 0.18],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-20 top-1/4 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-[#285bff]/20 blur-[100px] sm:blur-[130px]"
      />
      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.12, 0.20, 0.12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 bottom-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#005fe5]/15 blur-[90px] sm:blur-[120px]"
      />

      {/* Main Hero Spread */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4 sm:pt-8">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
          {/* Meta kicker with pulsing beacon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EDITORIAL_EASE }}
            className="inline-flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b8c4ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#285bff] shadow-[0_0_12px_#285bff]"></span>
            </span>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] sm:text-xs text-[#dae3f4] tracking-widest uppercase">
              {PORTFOLIO_DATA.profile.name} / {PORTFOLIO_DATA.profile.title.toUpperCase()}
            </span>
          </motion.div>

          {/* Giant Architectural Headline with word reveal */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-[38px] sm:text-[56px] md:text-[70px] lg:text-[84px] leading-[1.02] sm:leading-[0.98] tracking-tight text-white font-semibold">
            <AnimatedText text="I test what" delay={0.2} />{' '}
            <motion.span
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.45, ease: EDITORIAL_EASE }}
              className="inline-block whitespace-nowrap"
            >
              <span className="italic font-light text-[#b8c4ff] underline decoration-[#b8c4ff]/40 underline-offset-8">
                matters
              </span>
              <span className="text-[#285bff]">.</span>
            </motion.span>
          </h1>

          {/* Supporting Statement with smooth animated reveal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EDITORIAL_EASE }}
            className="font-['Inter'] text-base sm:text-lg lg:text-xl font-light text-[#c4c5d9] max-w-xl leading-relaxed"
          >
            Architecting bulletproof automated test pipelines, eliminating defect leakage, and guaranteeing mission-critical enterprise software releases.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EDITORIAL_EASE }}
            className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(40,91,255,0.6)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 bg-[#285bff] hover:bg-[#005fe5] text-white font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase rounded-full shadow-[0_0_24px_rgba(40,91,255,0.4)] transition-all cursor-pointer"
            >
              Explore Work ↓
            </motion.a>

            <motion.button
              onClick={onOpenResume}
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 text-[#dee1f7] hover:text-[#b8c4ff] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer py-2"
            >
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                north_east
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Visual Column: Cutout Portrait Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: EDITORIAL_EASE }}
          className="lg:col-span-5 relative flex flex-col items-center justify-center mt-6 lg:mt-0"
        >
          {/* Orbital Glowing Chrome Halo: rotating outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#b8c4ff]/25 bg-gradient-to-tr from-[#285bff]/25 via-transparent to-[#b8c4ff]/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(40,91,255,0.25)] pointer-events-none"
          />

          {/* Counter-rotating inner ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full border border-dashed border-[#dde1ff]/20 pointer-events-none"
          />

          {/* Portrait Image seamlessly merged at the bottom into the background */}
          <div className="relative z-10 w-full max-w-[270px] sm:max-w-[340px] lg:max-w-[420px] flex flex-col items-center">
            <div
              className="relative w-full overflow-hidden drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 58%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0) 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 58%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0) 98%)',
              }}
            >
              <img
                src={PORTFOLIO_DATA.profile.portraitUrl}
                alt="Akash A., Automation Test Engineer"
                className="w-full h-auto object-contain filter contrast-105 select-none"
                loading="eager"
              />
              {/* Soft atmospheric gradient blending bottom edge seamlessly */}
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#060A19] via-[#060A19]/70 to-transparent pointer-events-none" />
            </div>

            {/* Grounding ambient glow beneath subject */}
            <div className="w-3/4 h-8 bg-[#285bff]/20 blur-xl -mt-5 rounded-full pointer-events-none" />
          </div>

          {/* Precision Telemetry Tag */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EDITORIAL_EASE }}
            whileHover={{ y: -3, scale: 1.02 }}
            onClick={onOpenTelemetry}
            className="relative sm:absolute sm:-bottom-2 sm:left-2 lg:-left-4 z-20 mt-3 sm:mt-0 bg-[#090d1d]/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 shadow-2xl flex items-center gap-3 text-left hover:border-[#285bff]/60 transition-colors cursor-pointer group"
            title="Click to inspect real-time telemetry diagnostics"
          >
            <span className="w-2.5 h-2.5 bg-[#285bff] shadow-[0_0_8px_#285bff] group-hover:scale-125 transition-transform"></span>
            <div>
              <div className="font-['Inter'] text-[10px] text-[#8d90a2] uppercase tracking-wider font-semibold">
                TEST SUITE STATUS
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#dee1f7] group-hover:text-[#b8c4ff] transition-colors font-semibold">
                0 DEVIATIONS • ENTERPRISE READY
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Architectural Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.85 }}
        className="relative z-10 w-full max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[#8d90a2] font-['Inter'] text-xs uppercase tracking-widest gap-4 text-center sm:text-left"
      >
        <div>Chennai, India / Available Worldwide</div>
        <a href="#experience" className="flex items-center justify-center gap-2 hover:text-[#dee1f7] transition-colors group">
          <span>Continuous Scroll</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform animate-bounce">
            arrow_downward
          </span>
        </a>
        <div className="font-mono">Telemetry Monograph: 2026.V4</div>
      </motion.div>
    </section>
  );
};
