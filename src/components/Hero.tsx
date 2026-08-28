import React, { useState } from 'react';
import {
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Wrench,
  Flame,
  Droplet,
  Home,
  Clock,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { CTASource } from '../types';
import { trackCTAClick } from '../utils/tracking';

interface HeroProps {
  onOpenModal: (source: CTASource) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'with' | 'without'>('with');

  const handleHeroCta = () => {
    trackCTAClick('Hero', 'Book My Free Strategy Call');
    onOpenModal('Hero');
  };

  return (
    <section id="hero-section" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-white border-b border-slate-200/70">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs sm:text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              LOCAL GROWTH SYSTEMS FOR HOME SERVICE BUSINESSES
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              When Someone Needs Your Service,{' '}
              <span className="text-red-600 inline-block underline decoration-red-200 decoration-wavy decoration-2">
                Do They Find You First?
              </span>
            </h1>

            {/* Subhead (2-3 sentences as specified) */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Liberty Bell helps local service businesses get discovered, answer more calls, capture leads and follow up before opportunities go cold. From Google visibility and advertising to AI-powered call handling and automated follow-up, we build the system around the way your business works.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                id="hero-primary-cta"
                onClick={handleHeroCta}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-xl shadow-red-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <span>Book My Free Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center border border-slate-200"
              >
                <span>See How It Works</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Microtext */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Free 15-minute review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tailored to your local service area</span>
              </div>
            </div>

            {/* Supported Trades Pill Tags */}
            <div className="pt-2 border-t border-slate-200/80">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                Built specifically for local trades & contractors:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  { label: 'HVAC & AC', icon: Flame },
                  { label: 'Plumbing', icon: Droplet },
                  { label: 'Roofing', icon: Home },
                  { label: 'Electrical', icon: Zap },
                  { label: 'Landscaping', icon: Wrench },
                  { label: 'Cleaning & Maid', icon: Sparkles },
                  { label: 'Pest Control', icon: ShieldCheck },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100/90 text-slate-700 border border-slate-200/60"
                    >
                      <Icon className="w-3 h-3 text-red-600" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Visual / Interactive Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-2xl border border-slate-800 relative">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Live Dispatch Simulator
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Incoming Search & Call
                </div>
              </div>

              {/* Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-800/80 rounded-xl mb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('with')}
                  className={`py-2 px-3 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'with'
                      ? 'bg-red-600 text-white shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ⚡ With Liberty Bell
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('without')}
                  className={`py-2 px-3 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'without'
                      ? 'bg-slate-700 text-white shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ❌ Without (Voicemail)
                </button>
              </div>

              {/* Simulation Content */}
              {activeTab === 'with' ? (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  {/* Lead Notification */}
                  <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200 flex items-center gap-1.5">
                        <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                        Inbound Call: 7:15 PM (After Hours)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-mono text-[10px] border border-emerald-800">
                        Answered in 1 Ring
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 font-mono">
                      "AC stopped blowing cold, house is 85° — need emergency service technician."
                    </p>
                  </div>

                  {/* AI Response & Action */}
                  <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        AI Receptionist Booked Job
                      </span>
                      <span className="text-[11px] text-emerald-400 font-semibold">
                        Slot: Tomorrow 8:00 AM
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
                      <div className="bg-slate-900/50 p-2 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">Customer:</span>
                        David M. (Verified)
                      </div>
                      <div className="bg-slate-900/50 p-2 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">Auto SMS:</span>
                        Confirmation Sent
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      Result:
                    </span>
                    <strong className="text-emerald-400 font-bold">$450-$1,200 Service Job Secured</strong>
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="bg-rose-950/30 border border-rose-900/50 rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-rose-300 flex items-center gap-1.5">
                        <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
                        Inbound Call: 7:15 PM
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 font-mono text-[10px] border border-rose-800">
                        Went to Voicemail
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 italic">
                      Customer hung up after hearing voicemail greeting without leaving a message.
                    </p>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5 text-xs text-slate-300 space-y-1.5">
                    <div className="font-semibold text-rose-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Next Action by Customer:
                    </div>
                    <p className="text-slate-400 text-xs">
                      Tapped the next contractor in Google Maps. They answered and booked the $800 repair immediately.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      Result:
                    </span>
                    <strong className="text-rose-400 font-bold">Lost Revenue to Local Competitor</strong>
                  </div>
                </div>
              )}

              {/* Bottom Micro CTA inside card */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Never lose a service call again</span>
                <button
                  type="button"
                  onClick={handleHeroCta}
                  className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Fix My Call Flow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
