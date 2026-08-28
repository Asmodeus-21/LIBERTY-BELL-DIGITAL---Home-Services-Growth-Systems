import React from 'react';
import {
  Compass,
  SearchCheck,
  Layers,
  MapPin,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { CTASource } from '../types';
import { trackCTAClick } from '../utils/tracking';

interface InPersonReviewSectionProps {
  onOpenModal: (source: CTASource) => void;
}

export const InPersonReviewSection: React.FC<InPersonReviewSectionProps> = ({ onOpenModal }) => {
  const items = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We review your current service radius, marketing spend, inbound call volume, and how customer inquiries travel from initial search to final payment.',
      icon: Compass,
      focus: 'Business & Customer Journey',
    },
    {
      num: '02',
      title: 'Identify',
      desc: 'We pinpoint the exact leaks: missed after-hours calls, slow quote response times, weak local map visibility, or lost re-engagement opportunities.',
      icon: SearchCheck,
      focus: 'Where Opportunities Are Lost',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'We map out the exact combination of Google visibility, AI Receptionist call handling, and automated follow-ups tailored to your trade and team size.',
      icon: Layers,
      focus: 'Right Marketing + Automation Mix',
    },
  ];

  const handleInPersonCta = () => {
    trackCTAClick('In-Person Review', 'Book My Free In-Person Business Review');
    onOpenModal('In-Person Review');
  };

  return (
    <section id="in-person-review-section" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl text-left mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Face-To-Face Local Consultation
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            We Come To You Before We Recommend Anything.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Every home service business has distinct operational bottlenecks. We sit down with you to review your current systems, call flows, and customer acquisition in person.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-12">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-red-500/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-red-500 font-mono">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-700 text-red-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    {item.focus}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>No pitch unless there is a clear fit</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Schedule Your Free In-Person Business Review
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              30-45 minutes. We'll examine where you are losing calls and present custom automation fixes.
            </p>
          </div>

          <button
            id="in-person-review-cta-btn"
            onClick={handleInPersonCta}
            className="w-full sm:w-auto py-3.5 px-7 rounded-xl font-bold text-sm sm:text-base text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
          >
            <span>Book My Free In-Person Business Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
