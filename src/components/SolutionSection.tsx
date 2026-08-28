import React from 'react';
import {
  Search,
  MapPin,
  Target,
  Smartphone,
  PhoneCall,
  ClipboardList,
  UserCheck,
  CalendarCheck,
  AlertCircle,
  HelpCircle,
  MessageSquareShare,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { CTASource } from '../types';
import { trackCTAClick } from '../utils/tracking';

interface SolutionSectionProps {
  onOpenModal: (source: CTASource) => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenModal }) => {
  const visibilityItems = [
    {
      title: 'Google Business Profile Optimization',
      desc: 'Position your business in local 3-pack map searches with verified service areas, accurate categories, geo-tagged project photos, and optimized local signals.',
      icon: MapPin,
      badge: 'Local Maps Visibility',
    },
    {
      title: 'Local SEO & Service Towns',
      desc: 'Build dedicated landing pages and local search relevance for the exact towns, suburbs, and counties you service every day.',
      icon: Search,
      badge: 'Organic Search Intent',
    },
    {
      title: 'High-Intent Google Ads',
      desc: 'Put your company at the very top of Google when homeowners search urgent terms like "emergency furnace repair" or "burst pipe plumber".',
      icon: Target,
      badge: 'Direct Search Ads',
    },
    {
      title: 'Conversion-Focused Website',
      desc: 'Fast, mobile-first pages engineered for quick tap-to-call dialing, instant quote requests, and frictionless appointment bookings.',
      icon: Smartphone,
      badge: 'High-Converting Layout',
    },
  ];

  const responseBenefits = [
    {
      title: 'Answers Calls 24/7/365',
      desc: 'Never let another late-night call, weekend emergency, or busy lunch-hour lead go to a silent voicemail.',
      icon: PhoneCall,
    },
    {
      title: 'Captures Service Requests',
      desc: 'Understands the exact issue (e.g., leaking water heater, breaker tripping, broken AC compressor) and job urgency.',
      icon: ClipboardList,
    },
    {
      title: 'Collects Customer Information',
      desc: 'Accurately gathers name, verified callback number, physical service address, and gate/access codes.',
      icon: UserCheck,
    },
    {
      title: 'Books Estimates / Appointments',
      desc: 'Directly checks your availability and locks in estimate windows without back-and-forth phone tag.',
      icon: CalendarCheck,
    },
    {
      title: 'Routes Urgent Calls',
      desc: 'Instantly identifies high-priority emergencies and patches the caller directly to your on-call technician.',
      icon: AlertCircle,
    },
    {
      title: 'Answers FAQs Accurately',
      desc: 'Provides clear answers on service areas, pricing policies, trip fee rules, insurance, and warranty questions.',
      icon: HelpCircle,
    },
    {
      title: 'Triggers Instant Follow-Up',
      desc: 'Automatically dispatches an SMS confirmation to the customer and alerts your dispatch team via push notification.',
      icon: MessageSquareShare,
    },
  ];

  const handleCta = () => {
    trackCTAClick('Mid-page Solution', 'Book My Free Strategy Call');
    onOpenModal('Mid-page Solution');
  };

  return (
    <section id="solution-section" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* PART 1: VISIBILITY */}
        <div className="space-y-8 sm:space-y-12">
          <div className="max-w-3xl text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              Step 1 of the System
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              First They Have To Find You.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Before anyone calls your business, you need consistent visibility where high-intent homeowners are searching for trade contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {visibilityItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-stone-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all hover:bg-white flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 bg-slate-200/70 px-2 py-0.5 rounded uppercase">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: RESPONSE & AI RECEPTIONIST */}
        <div className="space-y-8 sm:space-y-12 pt-8 border-t border-slate-200/80">
          <div className="max-w-3xl text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
              Step 2 of the System
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Then Someone Has To Answer.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Getting traffic and phone calls is only half the battle. If your phones are busy, unanswered on a job site, or ringing after 5:00 PM, leads evaporate. The Liberty Bell AI Receptionist picks up every call in seconds.
            </p>
          </div>

          {/* Benefit Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {responseBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:border-red-200 transition-all ${
                    idx === responseBenefits.length - 1 ? 'sm:col-span-2 lg:col-span-1 bg-red-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{benefit.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Mid-Page Action Card */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Customized To Your Business
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                See what a tailored growth system looks like for your service radius.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                We'll analyze your current Google presence and call capture rate in 15 minutes.
              </p>
            </div>
            <button
              id="solution-cta-btn"
              onClick={handleCta}
              className="py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-lg shadow-red-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              Book My Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
