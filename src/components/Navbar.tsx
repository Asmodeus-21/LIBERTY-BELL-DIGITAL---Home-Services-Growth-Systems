import React from 'react';
import { Phone, BellRing } from 'lucide-react';
import { CTASource } from '../types';
import { trackCTAClick } from '../utils/tracking';

interface NavbarProps {
  onOpenModal: (source: CTASource) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const handleCtaClick = () => {
    trackCTAClick('Nav', 'Book My Free Strategy Call');
    onOpenModal('Nav');
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo Left */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform">
            <BellRing className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
              LIBERTY BELL <span className="text-red-600">DIGITAL</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 tracking-wider uppercase mt-0.5">
              Home Services Growth Systems
            </span>
          </div>
        </a>

        {/* Right side navigation and CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#how-it-works"
            className="hidden md:inline-flex text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
          >
            How It Works
          </a>

          <button
            id="nav-cta-button"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-md shadow-red-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden xs:inline" />
            <span>Book My Free Strategy Call</span>
          </button>
        </div>
      </div>
    </header>
  );
};
