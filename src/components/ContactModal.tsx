import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    opportunityType: 'Full-time QA Architect',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Contact Akash A."
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
        className="relative max-w-xl w-full bg-[#090d1d] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-[#dee1f7] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0e1322]">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white uppercase tracking-wider">
              INITIATE TRANSMISSION
            </h3>
            <p className="font-['Inter'] text-xs text-[#8d90a2] mt-0.5">
              Direct line to Akash Anjamani • Chennai / Worldwide
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#8d90a2] hover:text-white transition-colors"
            aria-label="Close contact dialog"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                Transmission Queued
              </h4>
              <p className="font-['Inter'] text-sm text-[#c4c5d9] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Your inquiry regarding{' '}
                <span className="text-white font-medium">{formData.opportunityType}</span> has been simulated successfully. You can also connect directly via email below.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Opportunity from ${encodeURIComponent(
                    formData.name
                  )}&body=${encodeURIComponent(formData.message)}`}
                  className="px-5 py-2.5 bg-[#285bff] hover:bg-[#005fe5] text-white rounded text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider"
                >
                  Send via Mail Client
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider"
                >
                  Reset Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-['Inter'] text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[#8d90a2] font-['JetBrains_Mono'] uppercase">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#1b1f2f] border border-white/10 rounded p-2.5 text-white placeholder-[#8d90a2] focus:outline-none focus:border-[#285bff]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-[#8d90a2] font-['JetBrains_Mono'] uppercase">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@enterprise.com"
                    className="w-full bg-[#1b1f2f] border border-white/10 rounded p-2.5 text-white placeholder-[#8d90a2] focus:outline-none focus:border-[#285bff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-org" className="text-[#8d90a2] font-['JetBrains_Mono'] uppercase">
                    Organization / Company
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Telecom Systems Corp"
                    className="w-full bg-[#1b1f2f] border border-white/10 rounded p-2.5 text-white placeholder-[#8d90a2] focus:outline-none focus:border-[#285bff]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-type" className="text-[#8d90a2] font-['JetBrains_Mono'] uppercase">
                    Engagement Scope
                  </label>
                  <select
                    id="contact-type"
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    className="w-full bg-[#1b1f2f] border border-white/10 rounded p-2.5 text-white focus:outline-none focus:border-[#285bff]"
                  >
                    <option value="Full-time QA Architect">Full-time QA Architect</option>
                    <option value="Automation Test Engineering">Automation Test Engineering</option>
                    <option value="CI/CD Pipeline Consulting">CI/CD Pipeline Consulting</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-msg" className="text-[#8d90a2] font-['JetBrains_Mono'] uppercase">
                  Message / Brief *
                </label>
                <textarea
                  id="contact-msg"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the project scope, test automation objectives, or role specifications..."
                  className="w-full bg-[#1b1f2f] border border-white/10 rounded p-2.5 text-white placeholder-[#8d90a2] focus:outline-none focus:border-[#285bff]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#285bff] hover:bg-[#005fe5] text-white rounded font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(40,91,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Dispatch Transmission</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </form>
          )}

          {/* Quick Contact Fallback */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8d90a2]">
            <span>Direct Email:</span>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="text-[#b8c4ff] hover:underline font-mono"
              >
                {PORTFOLIO_DATA.profile.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 text-[#8d90a2] hover:text-white"
                title="Copy email"
              >
                <span className="material-symbols-outlined text-sm">
                  {copiedEmail ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
