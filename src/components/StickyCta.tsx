import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { CTASource } from '../types';
import { trackCTAClick } from '../utils/tracking';

interface StickyCtaProps {
  onOpenModal: (source: CTASource) => void;
}

export const StickyCta: React.FC<StickyCtaProps> = ({ onOpenModal }) => {
  const [showDesktopSticky, setShowDesktopSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show desktop sticky bar once scrolled past 400px
      if (window.scrollY > 450) {
        setShowDesktopSticky(true);
      } else {
        setShowDesktopSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileClick = () => {
    trackCTAClick('Sticky Mobile', 'Book My Free Strategy Call');
    onOpenModal('Sticky Mobile');
  };

  const handleDesktopClick = () => {
    trackCTAClick('Sticky Desktop', 'Book My Free Strategy Call');
    onOpenModal('Sticky Desktop');
  };

  return (
    <>
      {/* MOBILE PERSISTENT BOTTOM BAR */}
      <div
        id="sticky-mobile-bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl safe-area-pb"
      >
        <div className="flex items-center gap-2">
          <button
            id="mobile-sticky-cta-btn"
            type="button"
            onClick={handleMobileClick}
            className="w-full min-h-[48px] py-3 px-4 rounded-xl font-extrabold text-sm text-white bg-red-600 active:bg-red-700 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Book My Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DESKTOP FLOATING TOP/BOTTOM SUBTLE BAR */}
      {showDesktopSticky && (
        <div
          id="sticky-desktop-bar"
          className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-white py-2.5 px-5 rounded-full shadow-2xl items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300 ring-1 ring-white/10"
        >
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-200">
              Contractor Growth System • Never Miss Another Job
            </span>
          </div>

          <div className="h-4 w-px bg-slate-700" />

          <button
            id="desktop-sticky-cta-btn"
            type="button"
            onClick={handleDesktopClick}
            className="py-2 px-4 rounded-full font-bold text-xs text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-md shadow-red-600/20 transition-transform hover:scale-105 cursor-pointer flex items-center gap-1.5"
          >
            <span>Book My Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </>
  );
};
