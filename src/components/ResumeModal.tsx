import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainResume = `
AKASH A.
QA & Automation Architect | Automation Test Engineer
Location: Chennai, India | Email: ak10akash@gmail.com
LinkedIn: linkedin.com/in/akash-anjamani | GitHub: github.com/akash-1024

SUMMARY:
Results-driven Automation Test Engineer with 2+ years of intensive enterprise quality assurance experience. Proven track record architecting high-concurrency Selenium WebDriver and Playwright test frameworks for tier-1 telecom infrastructure (Verizon Telecom). Reduced defect leakage by 80% and achieved 90% regression coverage across 100+ daily automated test executions.

WORK EXPERIENCE:
PRODAPT NORTH AMERICA (Client: Verizon Telecom Automation)
Associate Software Engineer | Nov 2024 — Present | Chennai, India
• Architected scalable Selenium Java & Playwright automated regression suites safeguarding mission-critical telecom order orchestration platforms.
• Reduced production defect leakage by 80% via proactive shift-left validation and automated API contract testing.
• Engineered parallel test execution cluster on Jenkins achieving sub-5 minute pipeline duration across 104+ test scenarios.
• Validated 50+ enterprise REST API endpoints with robust assertion harnesses and contract checks.
• Honored with Prodapt Star Award of the Month (Feb 2026) and Foundations Program Distinction.

TECHNICAL SKILLS:
• Test Automation: Selenium WebDriver, Playwright, TestNG, Pytest, Cucumber BDD, RestAssured
• Languages: Java 17+, Python 3.11+, JavaScript/TypeScript, SQL
• CI/CD & DevOps: Jenkins, Docker, Git, GitHub Actions, Maven, Gradle
• Methodologies & Tools: Page Object Model (POM), Agile/Scrum, Jira, Postman, JMeter, ExtentReports

EDUCATION:
• Bachelor of Science in Computer Science (2021 — 2024)
  Bishop Heber College, Tiruchirappalli (Distinction)
• Higher Secondary Education (2019 — 2021)
  Maxwell Higher Secondary School, Thanjavur
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Akash A. Resume Dossier"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
        className="relative max-w-4xl w-full bg-[#090d1d] border border-white/15 rounded-2xl overflow-hidden shadow-2xl my-auto text-[#dee1f7] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0e1322]">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#285bff]"></span>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-white uppercase tracking-wider">
                CURRICULUM VITAE // DOSSIER
              </span>
              <span className="hidden sm:inline font-['JetBrains_Mono'] text-xs text-[#8d90a2] ml-2">
                REV. 2026.V4
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-['Plus_Jakarta_Sans'] text-white border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#285bff] hover:bg-[#005fe5] text-xs font-['Plus_Jakarta_Sans'] text-white font-bold transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#8d90a2] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-['Inter'] text-sm leading-relaxed text-[#c4c5d9]">
          {/* Header section */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.profile.fullName}
                </h1>
                <div className="font-['JetBrains_Mono'] text-sm text-[#b8c4ff] mt-1 font-semibold">
                  {PORTFOLIO_DATA.profile.role} • ENTERPRISE TELECOM SPECIALIST
                </div>
              </div>
              <div className="text-xs font-mono text-[#8d90a2] space-y-1">
                <div>Chennai, Tamil Nadu, India</div>
                <div className="text-[#dee1f7]">{PORTFOLIO_DATA.profile.email}</div>
                <div>github.com/{PORTFOLIO_DATA.profile.githubUser}</div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#b8c4ff] font-mono">
              01 // EXECUTIVE SUMMARY
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
              Automation Test Engineer and QA Architect with 2+ years of experience engineering high-concurrency automated testing suites for tier-1 telecommunication clients (Verizon). Specialized in Selenium WebDriver, Playwright, TestNG, and CI/CD pipelines, driving an 80% reduction in production defect leakage and scaling daily automated test executions to 100+ cases.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#b8c4ff] font-mono">
              02 // ENTERPRISE EXPERIENCE
            </h2>
            <div className="space-y-3 bg-[#171b2b] p-5 rounded-lg border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white">
                    PRODAPT NORTH AMERICA — Associate Software Engineer
                  </div>
                  <div className="text-xs font-mono text-[#b8c4ff]">
                    Client: Verizon Telecom Automation | Chennai, India
                  </div>
                </div>
                <div className="text-xs font-mono text-[#8d90a2] mt-1 sm:mt-0">
                  Nov 2024 — Present
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#c4c5d9]">
                <li>
                  Architected full-stack automation testing framework reducing manual regression overhead by 70%.
                </li>
                <li>
                  Engineered parallel test execution cluster across 16 concurrent worker threads in Jenkins CI/CD.
                </li>
                <li>
                  Achieved 90% regression coverage across B2C order provisioning and billing pipeline workflows.
                </li>
                <li>
                  Systematically validated 50+ enterprise REST API endpoints with robust contract assertions.
                </li>
                <li>
                  Honored with the Prodapt Star Award of the Month (Feb 2026) for zero defect leakage in critical releases.
                </li>
              </ul>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div className="space-y-4">
            <h2 className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#b8c4ff] font-mono">
              03 // CORE TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-[#171b2b] rounded border border-white/5 space-y-1">
                <span className="text-[#8d90a2] uppercase">Test Automation & Tools:</span>
                <p className="text-white">Selenium 4, Playwright, TestNG, Pytest, Cucumber BDD, RestAssured, Postman, JMeter</p>
              </div>
              <div className="p-3 bg-[#171b2b] rounded border border-white/5 space-y-1">
                <span className="text-[#8d90a2] uppercase">Languages & Runtimes:</span>
                <p className="text-white">Java 17/21, Python 3.11+, TypeScript, JavaScript, SQL, Bash</p>
              </div>
              <div className="p-3 bg-[#171b2b] rounded border border-white/5 space-y-1">
                <span className="text-[#8d90a2] uppercase">CI/CD & Infrastructure:</span>
                <p className="text-white">Jenkins, Docker, GitHub Actions, Maven, Gradle, Allure Reports, ExtentReports</p>
              </div>
              <div className="p-3 bg-[#171b2b] rounded border border-white/5 space-y-1">
                <span className="text-[#8d90a2] uppercase">Engineering Practices:</span>
                <p className="text-white">Page Object Model (POM), BDD, Shift-Left Testing, Agile/Scrum, Jira, Git Flow</p>
              </div>
            </div>
          </div>

          {/* Education & Honors */}
          <div className="space-y-4">
            <h2 className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#b8c4ff] font-mono">
              04 // EDUCATION & HONORS
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline py-1 border-b border-white/5">
                <span className="text-white font-medium">BSc Computer Science — Bishop Heber College, Tiruchirappalli</span>
                <span className="font-mono text-[#8d90a2]">2021 — 2024</span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-white/5">
                <span className="text-white font-medium">Prodapt University Foundations Program Honors & Valediction</span>
                <span className="font-mono text-[#8d90a2]">Class of 2025</span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-white/5">
                <span className="text-white font-medium">Prodapt Star Award of the Month — Enterprise Quality Commendation</span>
                <span className="font-mono text-[#8d90a2]">Feb 2026</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
