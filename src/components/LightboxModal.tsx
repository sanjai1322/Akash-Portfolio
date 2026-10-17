import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ExhibitItem } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface LightboxModalProps {
  exhibit: ExhibitItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  exhibit,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!exhibit) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={exhibit.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#090d1d] border border-white/15 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#285bff] text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Image Container */}
        <div className="md:w-3/5 bg-black/50 flex items-center justify-center p-4 relative group">
          <img
            src={exhibit.imageUrl}
            alt={exhibit.title}
            className="max-h-[60vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
          />
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#285bff] text-white flex items-center justify-center transition-colors"
              aria-label="Previous exhibit"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#285bff] text-white flex items-center justify-center transition-colors"
              aria-label="Next exhibit"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          )}
        </div>

        {/* Narrative & Milestone Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-[80vh] space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-[#285bff]/20 text-[#b8c4ff] border border-[#285bff]/30 rounded font-['JetBrains_Mono'] text-[11px] font-semibold uppercase">
                {exhibit.tag}
              </span>
              <span className="font-['JetBrains_Mono'] text-xs text-[#8d90a2]">
                {exhibit.date}
              </span>
            </div>

            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
              {exhibit.title}
            </h3>

            <div className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#b8c4ff]">
              {exhibit.subtitle}
            </div>

            <div className="h-px bg-white/10 w-full"></div>

            <p className="font-['Inter'] text-sm text-[#c4c5d9] leading-relaxed">
              {exhibit.detailedStory}
            </p>

            <div className="bg-[#1b1f2f] p-3 rounded-lg border border-white/5 space-y-1">
              <div className="font-['JetBrains_Mono'] text-[10px] text-[#8d90a2] uppercase">
                LOCATION / INSTITUTION
              </div>
              <div className="font-['Inter'] text-xs text-white">
                {exhibit.location}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8d90a2] font-mono">
            <span>OFFICIAL RECORD VERIFIED</span>
            <button
              onClick={() => window.open(exhibit.imageUrl, '_blank')}
              className="text-[#b8c4ff] hover:underline flex items-center gap-1"
            >
              <span>View Raw Asset</span>
              <span className="material-symbols-outlined text-xs">north_east</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
