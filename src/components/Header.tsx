import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { getFormattedIST } from '../utils/telemetry.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenTelemetry: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onOpenTelemetry, activeSection }) => {
  const [istTime, setIstTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIstTime(getFormattedIST());
    const interval = setInterval(() => {
      setIstTime(getFormattedIST());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Proof', href: '#proof', id: 'proof' },
    { label: 'Lab', href: '#lab', id: 'lab' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0e1322]/85 backdrop-blur-xl border-b border-white/5 transition-all"
    >
      <div className="h-20 w-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-primary"
            aria-label="Akash A. Portfolio Home"
          >
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm text-on-surface tracking-widest uppercase transition-colors group-hover:text-primary">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="font-['Inter'] text-[10px] sm:text-[11px] text-[#8d90a2] group-hover:text-primary transition-colors tracking-widest uppercase">
              {PORTFOLIO_DATA.profile.role}
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#285bff] shadow-[0_0_12px_rgba(40,91,255,0.9)] animate-pulse"></span>
            <span className="font-['Inter'] text-[11px] text-[#c4c5d9] uppercase tracking-widest font-mono">
              CHENNAI, IN • OPEN FOR ROLES
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1.5 p-1 bg-[#090d1d]/80 border border-white/10 backdrop-blur-md rounded-full shadow-inner"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-2 font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#285bff] text-white shadow-[0_0_16px_rgba(40,91,255,0.4)]'
                    : 'text-[#c4c5d9] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Metric Pill & Profile Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenTelemetry}
            className="hidden sm:flex flex-col text-right cursor-pointer group p-1.5 hover:bg-white/5 rounded border border-transparent hover:border-white/10 transition-all text-left"
            title="Inspect Live Telemetry & Pipeline Diagnostics"
            aria-label="Open Telemetry Manifest"
          >
            <span className="font-['Inter'] text-[10px] text-[#8d90a2] uppercase tracking-wider group-hover:text-white transition-colors">
              RUNTIME METRICS
            </span>
            <span className="font-['JetBrains_Mono'] text-xs text-[#b8c4ff] font-semibold flex items-center gap-1.5 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              PASS: {PORTFOLIO_DATA.profile.passRate}
            </span>
          </button>

          <button
            onClick={onOpenResume}
            className="px-3.5 py-2 hidden md:inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded text-xs font-['Plus_Jakarta_Sans'] font-semibold tracking-wider uppercase transition-colors"
            aria-label="View Resume Dossier"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-[14px]">description</span>
          </button>

          <button
            onClick={onOpenResume}
            className="w-9 h-9 rounded-full bg-[#285bff] hover:bg-[#005fe5] flex items-center justify-center text-white shadow-[0_0_14px_rgba(40,91,255,0.5)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open Akash Anjamani Profile"
            title="Akash Anjamani Profile"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d1d] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#8d90a2] font-mono">
            <span>CHENNAI, IN</span>
            <span>{istTime}</span>
          </div>
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-['Plus_Jakarta_Sans'] font-semibold text-white hover:text-primary tracking-wider uppercase"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="text-xs text-primary uppercase font-bold flex items-center gap-1"
              >
                <span>Download Resume Dossier</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTelemetry();
                }}
                className="text-xs text-[#8d90a2] uppercase font-mono"
              >
                Telemetry: 99.84%
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};
