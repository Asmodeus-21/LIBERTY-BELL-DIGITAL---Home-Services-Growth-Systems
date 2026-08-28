/**
 * Liberty Bell Digital — Home Services & Contractors Landing Page
 *
 * Designed for high conversion from Meta / Facebook / Instagram ads:
 * - Single-industry focus (Plumbing, HVAC, Roofing, Electrical, Landscaping, Cleaning, Pest Control)
 * - 30-60 second scroll time
 * - 2-step booking modal with GoHighLevel CRM object sync
 * - Analytics & Meta Pixel tracking hooks
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AiDemoSection } from './components/AiDemoSection';
import { JourneySection } from './components/JourneySection';
import { ServicesSection } from './components/ServicesSection';
import { TrustSection } from './components/TrustSection';
import { InPersonReviewSection } from './components/InPersonReviewSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { StickyCta } from './components/StickyCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CTASource } from './types';
import { trackEvent } from './utils/tracking';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<CTASource>('Hero');

  useEffect(() => {
    // Initial PageView tracking for Meta Pixel / GA4 / GTM
    trackEvent('PageView', {
      landing_page_industry: 'home_services',
      page_title: document.title,
      referrer: document.referrer || 'direct',
    });
  }, []);

  const handleOpenModal = (source: CTASource) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col selection:bg-red-600 selection:text-white">
      {/* 1. Minimal Nav */}
      <Navbar onOpenModal={handleOpenModal} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 3. Industry-specific problem */}
        <ProblemSection />

        {/* 4. Liberty Bell / AI Receptionist solution */}
        <SolutionSection onOpenModal={handleOpenModal} />

        {/* 5. AI Receptionist conversation demo */}
        <AiDemoSection onOpenModal={handleOpenModal} />

        {/* 6. Customer journey after a lead comes in */}
        <JourneySection />

        {/* 7. Relevant additional services */}
        <ServicesSection />

        {/* 8. Why Liberty Bell / trust section */}
        <TrustSection />

        {/* 9. In-person review section */}
        <InPersonReviewSection onOpenModal={handleOpenModal} />

        {/* 10. FAQ */}
        <FaqSection />

        {/* 11. Final CTA */}
        <FinalCtaSection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 12. Sticky CTA (Mobile bottom bar + Desktop floating pill) */}
      <StickyCta onOpenModal={handleOpenModal} />

      {/* 13. Booking popup (Unified modal for all CTAs) */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        ctaSource={modalSource}
      />
    </div>
  );
}
