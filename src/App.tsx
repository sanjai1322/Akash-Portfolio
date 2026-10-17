import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ManifestoSection } from './components/ManifestoSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { FeaturedWorkSection } from './components/FeaturedWorkSection.tsx';
import { AutomationLabSection } from './components/AutomationLabSection.tsx';
import { ProofSection } from './components/ProofSection.tsx';
import { ExpertiseSection } from './components/ExpertiseSection.tsx';
import { EducationSection } from './components/EducationSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { LightboxModal } from './components/LightboxModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { LabArtifactModal } from './components/LabArtifactModal.tsx';
import { TelemetryDrawer } from './components/TelemetryDrawer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { PORTFOLIO_DATA, ExhibitItem } from './data/portfolioData.ts';
import { LabProject } from './utils/telemetry.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isTelemetryOpen, setIsTelemetryOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [selectedExhibit, setSelectedExhibit] = useState<ExhibitItem | null>(null);
  const [selectedLabProject, setSelectedLabProject] = useState<LabProject | null>(null);
  const [filteredTech, setFilteredTech] = useState<string | null>(null);

  // Active section scroll spy
  useEffect(() => {
    const sections = ['hero', 'experience', 'work', 'lab', 'proof', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exhibit navigation within lightbox
  const currentExhibitIndex = selectedExhibit
    ? PORTFOLIO_DATA.exhibits.findIndex((e) => e.id === selectedExhibit.id)
    : -1;

  const handleNextExhibit = () => {
    if (currentExhibitIndex !== -1) {
      const nextIdx = (currentExhibitIndex + 1) % PORTFOLIO_DATA.exhibits.length;
      setSelectedExhibit(PORTFOLIO_DATA.exhibits[nextIdx]);
    }
  };

  const handlePrevExhibit = () => {
    if (currentExhibitIndex !== -1) {
      const prevIdx =
        (currentExhibitIndex - 1 + PORTFOLIO_DATA.exhibits.length) %
        PORTFOLIO_DATA.exhibits.length;
      setSelectedExhibit(PORTFOLIO_DATA.exhibits[prevIdx]);
    }
  };

  const handleSelectTech = (tech: string) => {
    setFilteredTech(tech);
    const labEl = document.getElementById('lab');
    if (labEl) {
      labEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0e1322] text-[#dee1f7] min-h-screen selection:bg-[#285bff] selection:text-[#eeeeff] font-['Inter'] relative">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Header */}
      <Header
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTelemetry={() => setIsTelemetryOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTelemetry={() => setIsTelemetryOpen(true)}
        />

        <ManifestoSection
          selectedTech={filteredTech}
          onSelectTech={handleSelectTech}
        />

        <ExperienceSection />

        <FeaturedWorkSection />

        <AutomationLabSection
          selectedTech={filteredTech}
          onClearTechFilter={() => setFilteredTech(null)}
          onSelectProject={(project) => setSelectedLabProject(project)}
        />

        <ProofSection
          onOpenLightbox={(exhibit) => setSelectedExhibit(exhibit)}
        />

        <ExpertiseSection onSelectSkill={handleSelectTech} />

        <EducationSection />

        <ContactSection
          onOpenContactModal={() => setIsContactOpen(true)}
          onOpenTelemetry={() => setIsTelemetryOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <LightboxModal
        exhibit={selectedExhibit}
        onClose={() => setSelectedExhibit(null)}
        onNext={handleNextExhibit}
        onPrev={handlePrevExhibit}
      />

      <LabArtifactModal
        project={selectedLabProject}
        onClose={() => setSelectedLabProject(null)}
      />

      <TelemetryDrawer
        isOpen={isTelemetryOpen}
        onClose={() => setIsTelemetryOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
