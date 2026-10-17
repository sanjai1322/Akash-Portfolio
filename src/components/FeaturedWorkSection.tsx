import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { TestExecutionResult } from '../utils/telemetry.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';
import { AnimatedText } from './AnimatedText.tsx';

export const FeaturedWorkSection: React.FC = () => {
  const { featuredProject } = PORTFOLIO_DATA;
  const [logs, setLogs] = useState<TestExecutionResult[]>(featuredProject.defaultLogs);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [pipelineTime, setPipelineTime] = useState<string>(featuredProject.stats.duration);
  const [concurrency, setConcurrency] = useState<string>(featuredProject.stats.concurrency);
  const [activeTab, setActiveTab] = useState<'console' | 'architecture' | 'coverage'>('console');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testScenarios = [
    { name: 'OrderOrchestrationTest.verifyB2COrderProvisioning()', status: 'ASSERT_TRUE' as const, level: 'EXEC' as const },
    { name: 'BillingPipelineTest.verifyInvoiceGenerationPayload()', status: 'HTTP_200' as const, level: 'EXEC' as const },
    { name: "Payload Validated: { accountId: 'VZ-90241', latency: 38ms }", status: 'PASS' as const, level: 'DATA' as const },
    { name: 'SimActivationSuite.verifyESIMHandshakeProtocol()', status: 'ASSERT_TRUE' as const, level: 'EXEC' as const },
    { name: 'SDNNetworkControllerTest.verifyRouteFailover()', status: 'HTTP_200' as const, level: 'EXEC' as const },
    { name: 'CustomerPortalTest.verifySelfServicePlanUpgrade()', status: 'PASS' as const, level: 'EXEC' as const },
    { name: "KafkaStreamMonitor.assertZeroDroppedMessages()", status: 'PASS' as const, level: 'DATA' as const },
    { name: 'RegressionSuiteMatrix: 104 executed, 0 failed, 0 flaked', status: 'PASS' as const, level: 'COMPLETE' as const },
  ];

  const handleRerunSuite = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([
      {
        id: `init-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }) + '.002',
        level: 'INIT',
        name: 'RunnerContext: Initializing Grid Hub on 16 parallel threads...',
        status: 'OK',
        durationMs: 8,
        threadId: 1,
      },
    ]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < testScenarios.length) {
        const scenario = testScenarios[step];
        const newLog: TestExecutionResult = {
          id: `log-${Date.now()}-${step}`,
          timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(100 + Math.random() * 800),
          level: scenario.level,
          name: scenario.name,
          status: scenario.status,
          durationMs: Math.floor(10 + Math.random() * 40),
          threadId: (step % 16) + 1,
        };
        setLogs((prev) => [...prev, newLog]);
        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="work" className="w-full bg-[#060A19] px-4 sm:px-8 lg:px-16 py-32 text-[#dee1f7] overflow-hidden">
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
              04 / CASE STUDY DOSSIER
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 tracking-tight">
              <AnimatedText text="Engineering" delay={0.1} />{' '}
              <span className="italic font-light text-[#b8c4ff]">better</span>{' '}
              <AnimatedText text="releases." delay={0.25} />
            </h2>
          </div>
          <div className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#8d90a2] uppercase tracking-widest">
            {featuredProject.client}
          </div>
        </motion.div>

        {/* Spotlight Showcase Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Context & Specs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
            className="lg:col-span-5 bg-[#090d1d] p-8 lg:p-10 rounded-xl border border-white/10 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#285bff]/10 text-[#b8c4ff] font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider rounded font-medium">
                {featuredProject.tag}
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white">
                {featuredProject.title}
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-[#c4c5d9] leading-relaxed font-light">
                {featuredProject.description}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="font-['JetBrains_Mono'] text-xs text-[#8d90a2] uppercase tracking-wider font-semibold">
                TECHNOLOGIES DEPLOYED
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-[#1b1f2f] text-white font-['Plus_Jakarta_Sans'] text-xs uppercase font-medium rounded border border-white/5 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleRerunSuite}
                  disabled={isRunning}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#285bff] hover:bg-[#005fe5] disabled:opacity-50 text-white rounded text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(40,91,255,0.4)]"
                >
                  <span className={`material-symbols-outlined text-sm ${isRunning ? 'animate-spin' : ''}`}>
                    {isRunning ? 'sync' : 'play_arrow'}
                  </span>
                  <span>{isRunning ? 'Running Live Suite...' : 'Rerun Suite in Inspector'}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right: Avant-Garde Test Pipeline Darkroom Inspector Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
            className="lg:col-span-7 bg-[#090d1d] rounded-xl border border-white/10 p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            {/* Ambient Console Glow */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#285bff]/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* Scanning radar line when pipeline is active */}
            {isRunning && (
              <motion.div
                initial={{ top: 0, opacity: 0 }}
                animate={{ top: ['0%', '100%'], opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#285bff] to-transparent pointer-events-none z-10"
              />
            )}

            {/* Console Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#b2c5ff]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#285bff]"></span>
                  <span className="ml-3 font-['JetBrains_Mono'] text-xs text-[#8d90a2] font-mono">
                    verizon.suite.runner // parallel_threads: 16
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded font-['JetBrains_Mono'] text-[11px] uppercase font-mono font-semibold transition-all ${
                      isRunning
                        ? 'bg-amber-500/20 text-amber-300 animate-pulse'
                        : 'bg-[#285bff]/20 text-[#b8c4ff]'
                    }`}
                  >
                    {isRunning ? 'PIPELINE ACTIVE' : 'LIVE ASSERTIONS PASS'}
                  </span>
                </div>
              </div>

              {/* View switcher tabs */}
              <div className="flex gap-4 pt-4 border-b border-white/5 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab('console')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'console'
                      ? 'text-[#b8c4ff] border-b-2 border-[#285bff] font-bold'
                      : 'text-[#8d90a2] hover:text-white'
                  }`}
                >
                  Live Traces ({logs.length})
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'architecture'
                      ? 'text-[#b8c4ff] border-b-2 border-[#285bff] font-bold'
                      : 'text-[#8d90a2] hover:text-white'
                  }`}
                >
                  Pipeline Topology
                </button>
                <button
                  onClick={() => setActiveTab('coverage')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'coverage'
                      ? 'text-[#b8c4ff] border-b-2 border-[#285bff] font-bold'
                      : 'text-[#8d90a2] hover:text-white'
                  }`}
                >
                  Quality Gates
                </button>
              </div>
            </div>

            {/* Tab 1: Live Traces with AnimatePresence */}
            {activeTab === 'console' && (
              <div className="py-6 space-y-2.5 font-['JetBrains_Mono'] text-[12px] sm:text-[13px] leading-relaxed text-[#c4c5d9] overflow-x-auto min-h-[240px] max-h-[320px] overflow-y-auto">
                <AnimatePresence initial={false}>
                  {logs.map((log) => {
                    const isPass = log.status === 'PASS' || log.status === 'OK' || log.status === 'ASSERT_TRUE' || log.status === 'HTTP_200';
                    return (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-center justify-between gap-4 p-2 rounded transition-colors ${
                          log.level === 'DATA'
                            ? 'text-white bg-[#1b1f2f]/60'
                            : log.level === 'COMPLETE'
                            ? 'bg-[#285bff]/10 border border-[#285bff]/30'
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="truncate flex items-center gap-2">
                          <span className="text-[#8d90a2] font-mono text-[11px]">[{log.timestamp}]</span>
                          <span
                            className={`font-bold text-[10px] px-1.5 py-0.5 rounded ${
                              log.level === 'INIT'
                                ? 'bg-blue-900/60 text-[#b8c4ff]'
                                : log.level === 'DATA'
                                ? 'bg-indigo-900/60 text-[#dde1ff]'
                                : log.level === 'COMPLETE'
                                ? 'bg-emerald-900/60 text-emerald-300'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {log.level}
                          </span>
                          <span className="text-[#dee1f7]">{log.name}</span>
                        </div>
                        <span
                          className={`font-mono text-xs font-semibold shrink-0 ${
                            isPass ? 'text-[#b8c4ff]' : 'text-[#ffb4ab]'
                          }`}
                        >
                          {log.status} {log.durationMs ? `(${log.durationMs}ms)` : ''}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

            {/* Tab 2: Architecture Topology */}
            {activeTab === 'architecture' && (
              <div className="py-6 space-y-4 font-mono text-xs text-[#c4c5d9] min-h-[240px]">
                <div className="p-4 bg-[#1b1f2f] rounded border border-white/10 space-y-2">
                  <div className="text-white font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#285bff]">hub</span>
                    GRID DISTRIBUTOR TOPOLOGY
                  </div>
                  <div className="text-[#8d90a2] text-[11px] leading-relaxed">
                    [Jenkins Agent] → [Selenium Grid 4 Hub] ⇄ [16 Concurrent Docker Nodes (Chrome / Edge)]
                    <br />
                    ↳ [REST Assured API Gateway] ⇄ [Verizon Staging Order APIs (mTLS)]
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#171b2b] rounded border border-white/5">
                    <div className="text-[#8d90a2] text-[10px] uppercase">Execution Strategy</div>
                    <div className="text-white font-semibold mt-1">Parallel ThreadLocal WebDriver</div>
                  </div>
                  <div className="p-3 bg-[#171b2b] rounded border border-white/5">
                    <div className="text-[#8d90a2] text-[10px] uppercase">Reporting Harness</div>
                    <div className="text-white font-semibold mt-1">ExtentReports + Jenkins Pipeline</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Quality Gates */}
            {activeTab === 'coverage' && (
              <div className="py-6 space-y-3 font-['Inter'] text-xs text-[#c4c5d9] min-h-[240px]">
                <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded">
                  <span className="text-white font-medium">B2C Order Checkout & Cart Validation</span>
                  <span className="text-emerald-400 font-mono font-bold">100% Passed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded">
                  <span className="text-white font-medium">OSS Billing & Invoicing Payload Ingestion</span>
                  <span className="text-emerald-400 font-mono font-bold">100% Passed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded">
                  <span className="text-white font-medium">Network Provisioning SIM Swaps & Activation</span>
                  <span className="text-emerald-400 font-mono font-bold">100% Passed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1b1f2f] rounded">
                  <span className="text-white font-medium">Enterprise Security & Token Refresh Latency</span>
                  <span className="text-emerald-400 font-mono font-bold">42ms Average</span>
                </div>
              </div>
            )}

            {/* Footer Performance Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center font-mono">
              <div className="bg-[#1b1f2f] p-3 rounded">
                <div className="text-[#8d90a2] text-xs">THREAD CONCURRENCY</div>
                <div className="text-white font-bold text-lg mt-1">{concurrency}</div>
              </div>
              <div className="bg-[#1b1f2f] p-3 rounded">
                <div className="text-[#8d90a2] text-xs">PIPELINE DURATION</div>
                <div className="text-white font-bold text-lg mt-1">{pipelineTime}</div>
              </div>
              <div className="bg-[#1b1f2f] p-3 rounded">
                <div className="text-[#8d90a2] text-xs">DEFECT LEAKAGE</div>
                <div className="text-[#b8c4ff] font-bold text-lg mt-1">{featuredProject.stats.leakage}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
