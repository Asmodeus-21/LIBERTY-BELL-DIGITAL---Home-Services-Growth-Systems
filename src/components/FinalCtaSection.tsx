import React from 'react';
import { PhoneCall, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { CTASource } from '../types';
import { trackCTAClick } from '../utils/tracking';

interface FinalCtaSectionProps {
  onOpenModal: (source: CTASource) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenModal }) => {
  const handleFinalCta = () => {
    trackCTAClick('Final CTA', 'Book My Free Strategy Call');
    onOpenModal('Final CTA');
  };

  return (
    <section id="final-cta-section" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Ready To Fill Your Schedule?
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Get Found. Answer Faster.{' '}
          <span className="text-red-600">Book More Opportunities.</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Stop losing high-margin contractor jobs to whoever picks up first. We’ll show you exactly how to capture every phone call and turn local searches into booked estimates.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-btn"
            onClick={handleFinalFinalCtaClick}
            className="w-full sm:w-auto py-4 px-8 sm:px-10 rounded-xl font-bold text-base sm:text-lg text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-xl shadow-red-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Book My Free Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Reassurances */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-600 font-semibold pt-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>15-Minute Zoom or Call</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Free Consultation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No Pressure or Commitments</span>
          </div>
        </div>
      </div>
    </section>
  );

  function handleFinalFinalCtaClick() {
    handleFinalCta();
  }
};
