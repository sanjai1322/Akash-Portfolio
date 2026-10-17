import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LabProject } from '../utils/telemetry.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface LabArtifactModalProps {
  project: LabProject | null;
  onClose: () => void;
}

export const LabArtifactModal: React.FC<LabArtifactModalProps> = ({ project, onClose }) => {
  const [copiedCli, setCopiedCli] = useState(false);

  React.useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCli = () => {
    navigator.clipboard.writeText(project.cliSample);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
        className="relative max-w-4xl w-full bg-[#090d1d] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-[#dee1f7] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0e1322]">
          <div className="flex items-center gap-3">
            <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#b8c4ff] bg-[#285bff]/20 px-2.5 py-1 rounded">
              {project.code}
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#285bff] hover:bg-[#005fe5] text-white text-xs font-['Plus_Jakarta_Sans'] font-semibold rounded uppercase tracking-wider transition-colors"
            >
              <span>GitHub Repo</span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#8d90a2] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-['Inter'] text-sm">
          {/* Detailed Overview */}
          <div className="space-y-2">
            <div className="text-xs font-['JetBrains_Mono'] text-[#8d90a2] uppercase">
              ARCHITECTURAL SPECIFICATION
            </div>
            <p className="text-base text-white/90 font-light leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            <div className="p-3 bg-[#171b2b] rounded border border-white/5">
              <div className="text-[10px] text-[#8d90a2] uppercase">Test Coverage</div>
              <div className="text-lg font-bold text-[#b8c4ff] mt-0.5">{project.metrics.coverage}</div>
            </div>
            <div className="p-3 bg-[#171b2b] rounded border border-white/5">
              <div className="text-[10px] text-[#8d90a2] uppercase">Execution Speed</div>
              <div className="text-lg font-bold text-emerald-400 mt-0.5">{project.metrics.speed}</div>
            </div>
            <div className="p-3 bg-[#171b2b] rounded border border-white/5">
              <div className="text-[10px] text-[#8d90a2] uppercase">Automated Tests</div>
              <div className="text-lg font-bold text-white mt-0.5">{project.metrics.tests}+</div>
            </div>
            <div className="p-3 bg-[#171b2b] rounded border border-white/5">
              <div className="text-[10px] text-[#8d90a2] uppercase">Tech Category</div>
              <div className="text-xs font-bold text-[#dde1ff] mt-1.5 truncate">{project.category}</div>
            </div>
          </div>

          {/* CLI Run Command with One-click Copy */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-['JetBrains_Mono'] text-[#8d90a2] uppercase">
                TERMINAL EXECUTION HARNESS
              </span>
              <button
                onClick={handleCopyCli}
                className="text-xs text-[#b8c4ff] hover:text-white flex items-center gap-1 font-mono cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {copiedCli ? 'check' : 'content_copy'}
                </span>
                <span>{copiedCli ? 'Copied' : 'Copy Command'}</span>
              </button>
            </div>
            <div className="p-4 bg-[#050711] rounded-lg border border-white/10 font-['JetBrains_Mono'] text-xs text-emerald-400 flex items-center justify-between overflow-x-auto">
              <code>$ {project.cliSample}</code>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <div className="text-xs font-['JetBrains_Mono'] text-[#8d90a2] uppercase">
              ENGINEERING HIGHLIGHTS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="p-3 bg-[#171b2b] rounded border border-white/5 flex items-start gap-2.5 text-xs text-[#c4c5d9]"
                >
                  <span className="material-symbols-outlined text-sm text-[#285bff] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-['JetBrains_Mono'] text-[#8d90a2] uppercase mr-2">
              DEPENDENCIES:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#1b1f2f] text-white rounded font-['Plus_Jakarta_Sans'] text-xs uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
