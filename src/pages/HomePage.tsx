import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedDesigns } from '../components/home/FeaturedDesigns';
import { DiscoveryWizard } from '../components/home/DiscoveryWizard';
import { MostViewed } from '../components/home/MostViewed';
import { ServicesShowcase } from '../components/home/ServicesShowcase';
import { BeforeAfter } from '../components/home/BeforeAfter';
import { DesignProcess } from '../components/home/DesignProcess';
import { ConsultationCta } from '../components/home/ConsultationCta';
import { FullscreenViewer } from '../components/viewer/FullscreenViewer';
import { DesignItem } from '../types';
import { designsData } from '../data/designsData';

export const HomePage: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleQuickView = (design: DesignItem) => {
    setSelectedDesign(design);
    setIsViewerOpen(true);
  };

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Company Introduction */}
      <CompanyIntro />

      {/* 3. Design Categories */}
      <CategoryGrid />

      {/* 4. Featured Designs */}
      <FeaturedDesigns onQuickView={handleQuickView} />

      {/* 5. Interactive Discovery Wizard */}
      <DiscoveryWizard />

      {/* 6. Most Viewed Designs */}
      <MostViewed onQuickView={handleQuickView} />

      {/* 7. Services Showcase */}
      <ServicesShowcase />

      {/* 8. Before & After Interactive Slider */}
      <BeforeAfter />

      {/* 9. 7-Step Design Process */}
      <DesignProcess />

      {/* 10. Final Call To Action */}
      <ConsultationCta />

      {/* Global Fullscreen Lightbox */}
      <FullscreenViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        design={selectedDesign}
        onSelectDesign={setSelectedDesign}
        allDesigns={designsData}
      />
    </div>
  );
};
