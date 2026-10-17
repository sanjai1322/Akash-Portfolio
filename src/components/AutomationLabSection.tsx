import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { filterLabProjects, LabProject } from '../utils/telemetry.ts';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface AutomationLabSectionProps {
  onSelectProject: (project: LabProject) => void;
  selectedTech: string | null;
  onClearTechFilter: () => void;
}

export const AutomationLabSection: React.FC<AutomationLabSectionProps> = ({
  onSelectProject,
  selectedTech,
  onClearTechFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredProjects = filterLabProjects(
    PORTFOLIO_DATA.labProjects,
    searchQuery,
    selectedTech || (activeCategory === 'ALL' ? null : activeCategory)
  );

  const categories = ['ALL', 'Java', 'Python', 'Playwright', 'Selenium'];

  return (
    <section id="lab" className="w-full bg-[#090D1C] px-4 sm:px-8 lg:px-16 py-32 text-[#dee1f7] overflow-hidden">
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
              05 / CODE ARTIFACTS
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-bold text-white mt-2 tracking-tight">
              The Automation Lab
            </h2>
            <p className="font-['Inter'] text-sm text-[#8d90a2] mt-1">
              Selected open-source testing architectures & automated toolkits
            </p>
          </div>
          <motion.a
            whileHover={{ x: 3 }}
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#b8c4ff] hover:text-white font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>github.com/{PORTFOLIO_DATA.profile.githubUser}</span>
            <span className="material-symbols-outlined text-base">north_east</span>
          </motion.a>
        </motion.div>

        {/* Filter Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = (selectedTech ? selectedTech.toLowerCase() === cat.toLowerCase() : activeCategory === cat);
              return (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    onClearTechFilter();
                    setActiveCategory(cat);
                  }}
                  className={`px-3.5 py-1.5 rounded text-xs font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#285bff] text-white shadow-[0_0_15px_rgba(40,91,255,0.4)]'
                      : 'bg-[#1b1f2f] text-[#c4c5d9] hover:bg-[#25293a] hover:text-white'
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
            {selectedTech && (
              <button
                onClick={onClearTechFilter}
                className="text-xs text-[#b8c4ff] hover:underline flex items-center gap-1 ml-2 font-mono"
              >
                <span>Reset filter ({selectedTech})</span>
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            )}
          </div>

          {/* Quick Search */}
          <div className="relative max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#8d90a2]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture..."
              className="w-full bg-[#1b1f2f] border border-white/10 rounded pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#8d90a2] focus:outline-none focus:border-[#285bff] transition-colors"
            />
          </div>
        </motion.div>

        {/* Asymmetrical 4-Tile Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EDITORIAL_EASE }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => onSelectProject(project)}
                className="bg-[#090d1d] p-8 rounded-xl border border-white/10 hover:border-[#b8c4ff]/50 transition-colors flex flex-col justify-between space-y-8 group cursor-pointer hover:shadow-[0_10px_35px_rgba(40,91,255,0.15)] relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[#8d90a2]">
                    <span className="font-['JetBrains_Mono'] text-xs uppercase">
                      {project.code}
                    </span>
                    <span className="material-symbols-outlined group-hover:text-[#b8c4ff] group-hover:rotate-6 transition-all text-xl">
                      {project.id === 'arch-01'
                        ? 'terminal'
                        : project.id === 'arch-02'
                        ? 'web_stories'
                        : project.id === 'arch-03'
                        ? 'account_tree'
                        : 'smart_toy'}
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white group-hover:text-[#b8c4ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-['Inter'] text-sm sm:text-base text-[#c4c5d9] leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between font-['Plus_Jakarta_Sans'] text-xs font-bold">
                  <span className="text-[#dae3f4] uppercase tracking-wider">
                    {project.techStack.slice(0, 3).join(' • ')}
                  </span>
                  <span className="text-[#285bff] group-hover:text-[#b8c4ff] group-hover:translate-x-1.5 transition-all inline-flex items-center gap-1 uppercase tracking-wider">
                    INSPECT ARCHITECTURE{' '}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
