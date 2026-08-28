import React from 'react';
import {
  Bot,
  User,
  CheckCircle2,
  PhoneCall,
  Clock,
  MapPin,
  AlertTriangle,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { CTASource } from '../types';
import { trackCTAClick } from '../utils/tracking';

interface AiDemoSectionProps {
  onOpenModal: (source: CTASource) => void;
}

export const AiDemoSection: React.FC<AiDemoSectionProps> = ({ onOpenModal }) => {
  const handleCta = () => {
    trackCTAClick('AI Receptionist Demo', 'Book My Free Strategy Call');
    onOpenModal('AI Receptionist Demo');
  };

  return (
    <section id="ai-demo-section" className="py-14 sm:py-20 bg-stone-100/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Live Interaction Example
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How The AI Receptionist Handles A Call
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Whether a caller dials at 2:00 PM or 11:30 PM, they are greeted by a natural, polite assistant trained on your specific services and dispatch rules.
          </p>
        </div>

        {/* 2-Column Interactive Mock Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Mock Chat Exchange */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">
                  LB
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Liberty Bell AI Receptionist
                  </h4>
                  <p className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Active Call / Instant Response
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Audio & Text Sync</span>
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-3.5 pt-2">
              {/* Customer Bubble */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 text-xs mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-100 rounded-2xl rounded-tl-xs p-3.5 max-w-[85%] text-xs sm:text-sm text-slate-800 border border-slate-200/60 shadow-2xs">
                  <p className="font-medium">
                    "Hi, I have a leaking pipe and need someone to take a look."
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Caller • 2:14 PM</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-2.5 justify-end">
                <div className="bg-red-50 border border-red-200 rounded-2xl rounded-tr-xs p-3.5 max-w-[85%] text-xs sm:text-sm text-slate-900 shadow-2xs">
                  <p className="font-medium text-slate-800">
                    "I can help with that. May I get your name and service address?"
                  </p>
                  <span className="text-[10px] text-red-600 font-semibold mt-1 block text-right">
                    AI Receptionist • Instant Answer
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 text-xs mt-1 shadow-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Customer Bubble 2 */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 text-xs mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-100 rounded-2xl rounded-tl-xs p-3.5 max-w-[85%] text-xs sm:text-sm text-slate-800 border border-slate-200/60 shadow-2xs">
                  <p className="font-medium">
                    "This is Mark Henderson at 742 Evergreen Terrace. The pipe under the kitchen sink is dripping into the cabinet."
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Caller • 2:15 PM</span>
                </div>
              </div>

              {/* AI Response 2 */}
              <div className="flex items-start gap-2.5 justify-end">
                <div className="bg-red-50 border border-red-200 rounded-2xl rounded-tr-xs p-3.5 max-w-[85%] text-xs sm:text-sm text-slate-900 shadow-2xs">
                  <p className="font-medium text-slate-800">
                    "Got it, Mark. We have a licensed technician in your area this afternoon between 3:00 PM and 5:00 PM. Would that work for you?"
                  </p>
                  <span className="text-[10px] text-red-600 font-semibold mt-1 block text-right">
                    AI Receptionist • Verified Availability
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 text-xs mt-1 shadow-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Data Captured & Status Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Captured Data Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Data Captured in Real-Time
                </h4>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  100% Extracted
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">Issue:</span>
                  <span className="font-bold text-slate-900">Leaking Pipe (Kitchen Sink)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">Urgency:</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Today
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">Preferred Slot:</span>
                  <span className="font-bold text-slate-900">Afternoon (3:00 - 5:00 PM)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">Customer:</span>
                  <span className="font-bold text-slate-900">Mark Henderson</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">Address:</span>
                  <span className="font-bold text-slate-900">742 Evergreen Terrace</span>
                </div>
              </div>
            </div>

            {/* Booked Status Card */}
            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-4 sm:p-5 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="text-sm font-bold">New Service Lead Captured</h4>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Assigned to dispatch team • Instant SMS confirmation sent to customer with technician arrival window.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Elapsed time: 48 seconds from initial ring</span>
              </div>
            </div>

            {/* Trigger Button */}
            <button
              id="ai-demo-cta-btn"
              type="button"
              onClick={handleCta}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>See How It Works For Your Business</span>
              <ArrowRight className="w-4 h-4 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
