import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface ContactSectionProps {
  onOpenContactModal: () => void;
  onOpenTelemetry: () => void;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenContactModal,
  onOpenTelemetry,
  onOpenResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      <section
        id="contact"
        className="w-full bg-gradient-to-b from-[#060A19] to-[#171b2b] px-4 sm:px-8 lg:px-16 py-32 text-[#dee1f7] relative overflow-hidden"
      >
        {/* Ambient Blue Flare with subtle breathing */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-[#285bff]/20 rounded-full blur-[140px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
            className="flex items-center gap-3"
          >
            <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#b8c4ff] uppercase tracking-widest font-mono">
              09 / TRANSMISSION
            </span>
            <div className="h-px flex-1 bg-white/10"></div>
          </motion.div>

          {/* Monumental Headline */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
              className="font-['Plus_Jakarta_Sans'] text-[48px] sm:text-[76px] lg:text-[96px] leading-[0.98] font-bold text-white tracking-tight max-w-5xl"
            >
              Let’s make software <span className="italic font-light text-[#b8c4ff]">better</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EDITORIAL_EASE }}
              className="font-['Inter'] text-lg sm:text-xl font-light text-[#c4c5d9] max-w-2xl pt-2"
            >
              Open for enterprise QA architect opportunities, automation consulting, and high-impact software engineering roles worldwide.
            </motion.p>
          </div>

          {/* Interactive Action & Channels Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-white/10">
            {/* Large Action Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: EDITORIAL_EASE }}
              className="lg:col-span-5 flex justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 0 65px rgba(40,91,255,0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenContactModal}
                className="inline-flex flex-col items-center justify-center w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-[#285bff] hover:bg-[#005fe5] text-white transition-all duration-300 shadow-[0_0_50px_rgba(40,91,255,0.4)] group cursor-pointer"
                aria-label="Open contact message dialog"
              >
                <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold uppercase tracking-widest">
                  Get In Touch
                </span>
                <span className="material-symbols-outlined text-4xl mt-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                  north_east
                </span>
              </motion.button>
            </motion.div>

            {/* Direct Channels List */}
            <div className="lg:col-span-7 space-y-6">
              {/* Electronic Mail */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: EDITORIAL_EASE }}
                className="space-y-1"
              >
                <span className="font-['JetBrains_Mono'] text-xs text-[#8d90a2] uppercase">
                  ELECTRONIC MAIL
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white hover:text-[#b8c4ff] transition-colors"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </a>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCopyEmail}
                    className="text-xs text-[#8d90a2] hover:text-white p-1 rounded transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    <span className="material-symbols-outlined text-base">
                      {copiedEmail ? 'check' : 'content_copy'}
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Professional Network */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.3, ease: EDITORIAL_EASE }}
                className="space-y-1"
              >
                <span className="font-['JetBrains_Mono'] text-xs text-[#8d90a2] uppercase">
                  PROFESSIONAL NETWORK
                </span>
                <div>
                  <a
                    href={PORTFOLIO_DATA.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white hover:text-[#b8c4ff] transition-colors inline-flex items-center gap-2 group"
                  >
                    linkedin.com/in/{PORTFOLIO_DATA.profile.linkedinUser}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      north_east
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Source Repositories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.4, ease: EDITORIAL_EASE }}
                className="space-y-1"
              >
                <span className="font-['JetBrains_Mono'] text-xs text-[#8d90a2] uppercase">
                  SOURCE REPOSITORIES
                </span>
                <div>
                  <a
                    href={PORTFOLIO_DATA.profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white hover:text-[#b8c4ff] transition-colors inline-flex items-center gap-2 group"
                  >
                    github.com/{PORTFOLIO_DATA.profile.githubUser}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      north_east
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Final Monograph Note */}
          <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[#8d90a2] font-['JetBrains_Mono'] text-xs uppercase tracking-widest gap-4">
            <div>Designed with editorial precision © 2026 Akash A. All rights reserved.</div>
            <div>Chennai, TN • UTC+05:30</div>
          </div>
        </div>
      </section>

      {/* Global Architectural Footer */}
      <footer className="w-full bg-[#090d1d] py-12 border-t border-white/5">
        <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-white uppercase tracking-wider">
              AKASH A. — ARCHITECTURE MONOGRAPH
            </span>
            <p className="font-['Inter'] text-xs text-[#8d90a2]">
              © 2026 ALL RIGHTS RESERVED. HIGH-CONCURRENCY QUALITY ASSURANCE & SYSTEM AUDITING.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex flex-col">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#8d90a2] uppercase">
                SYSTEM TIME
              </span>
              <span className="font-['JetBrains_Mono'] text-xs text-[#dee1f7]">
                IST / UTC+05:30
              </span>
            </div>

            <nav className="flex items-center gap-4 text-xs font-['JetBrains_Mono'] uppercase">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c4c5d9] hover:text-[#b8c4ff] transition-colors"
              >
                GITHUB
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c4c5d9] hover:text-[#b8c4ff] transition-colors"
              >
                LINKEDIN
              </a>
              <button
                onClick={onOpenTelemetry}
                className="text-[#c4c5d9] hover:text-[#b8c4ff] transition-colors cursor-pointer"
              >
                TELEMETRY
              </button>
              <button
                onClick={onOpenResume}
                className="text-[#c4c5d9] hover:text-[#b8c4ff] transition-colors cursor-pointer"
              >
                RESUME
              </button>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
