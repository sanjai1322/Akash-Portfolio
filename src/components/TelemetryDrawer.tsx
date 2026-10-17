import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { getFormattedIST } from '../utils/telemetry.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface TelemetryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelemetryDrawer: React.FC<TelemetryDrawerProps> = ({ isOpen, onClose }) => {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    setIstTime(getFormattedIST());
    const interval = setInterval(() => {
      setIstTime(getFormattedIST());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Runtime Telemetry Manifest"
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
        className="w-full max-w-lg h-full bg-[#090d1d] border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-[#dee1f7] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white uppercase tracking-wider">
                  TELEMETRY MONOGRAPH
                </h3>
                <div className="font-['JetBrains_Mono'] text-xs text-[#8d90a2]">
                  PRODAPT // VERIZON AUTOMATION GRID
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#8d90a2] hover:text-white transition-colors"
              aria-label="Close drawer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Primary Runtime Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#171b2b] rounded-lg border border-white/5 space-y-1">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#8d90a2] uppercase">
                OVERALL PASS RATE
              </span>
              <div className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-emerald-400">
                {PORTFOLIO_DATA.profile.passRate}
              </div>
              <div className="text-[11px] text-[#c4c5d9]">10,480+ Assertions Run</div>
            </div>

            <div className="p-4 bg-[#171b2b] rounded-lg border border-white/5 space-y-1">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#8d90a2] uppercase">
                DEFECT LEAKAGE
              </span>
              <div className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#b8c4ff]">
                0.00%
              </div>
              <div className="text-[11px] text-[#c4c5d9]">Zero Critical Escapees</div>
            </div>

            <div className="p-4 bg-[#171b2b] rounded-lg border border-white/5 space-y-1">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#8d90a2] uppercase">
                PIPELINE VELOCITY
              </span>
              <div className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                04m 12s
              </div>
              <div className="text-[11px] text-[#c4c5d9]">Sub-5min Full Suite</div>
            </div>

            <div className="p-4 bg-[#171b2b] rounded-lg border border-white/5 space-y-1">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#8d90a2] uppercase">
                CLUSTER WORKERS
              </span>
              <div className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#285bff]">
                16 Threads
              </div>
              <div className="text-[11px] text-[#c4c5d9]">ThreadLocal Grid Nodes</div>
            </div>
          </div>

          {/* Node Health Diagnostics */}
          <div className="space-y-3">
            <div className="font-['JetBrains_Mono'] text-xs text-[#8d90a2] uppercase font-semibold">
              PIPELINE INFRASTRUCTURE HEALTH
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded border border-white/5">
                <span className="text-white">Selenium Hub 4.25 (grid.prodapt)</span>
                <span className="text-emerald-400 font-bold">ONLINE (16/16)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded border border-white/5">
                <span className="text-white">Jenkins Orchestrator Cluster</span>
                <span className="text-emerald-400 font-bold">CONNECTED</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded border border-white/5">
                <span className="text-white">Playwright Headless Workers</span>
                <span className="text-emerald-400 font-bold">ACTIVE (0 FLAKE)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded border border-white/5">
                <span className="text-white">Verizon REST Assured Gateway</span>
                <span className="text-[#b8c4ff] font-bold">mTLS VERIFIED</span>
              </div>
            </div>
          </div>

          {/* System Environment */}
          <div className="p-4 bg-[#171b2b] rounded-lg border border-white/5 space-y-2 text-xs">
            <div className="font-['JetBrains_Mono'] text-[#8d90a2] uppercase">
              LOCAL SYSTEM TIMESTAMP
            </div>
            <div className="font-mono text-sm text-white font-bold">{istTime}</div>
            <div className="text-[11px] text-[#c4c5d9]">
              Node Runtime: Linux x86_64 • Container Engine • UTC+05:30
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#8d90a2] font-mono">
          <span>MONITORING VERIFIED</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#b8c4ff] transition-colors"
          >
            Dismiss
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
