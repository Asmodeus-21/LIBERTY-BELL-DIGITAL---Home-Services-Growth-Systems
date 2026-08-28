import React from 'react';
import { Search, MapPin, PhoneCall, Zap, Trophy, ArrowRight, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Search',
      query: '"Plumber Near Me" or "AC Repair"',
      description: 'A homeowner has an immediate repair, maintenance, or installation need and searches on mobile.',
      icon: Search,
      badge: 'Immediate Intent',
    },
    {
      step: '2',
      title: 'Find',
      query: 'Google Map Pack & Reviews',
      description: 'They glance at the top 3 Google results, check star ratings, local proximity, and phone availability.',
      icon: MapPin,
      badge: 'Visibility Filter',
    },
    {
      step: '3',
      title: 'Call',
      query: 'Taps Call Button',
      description: 'They tap to call the highest-rated contractor who looks open and ready to take jobs.',
      icon: PhoneCall,
      badge: 'Moment of Truth',
    },
    {
      step: '4',
      title: 'Response',
      query: 'Instant Pick-Up vs Voicemail',
      description: 'If answered live: job captured. If sent to voicemail: 80% hang up and call the next listing.',
      icon: Zap,
      badge: 'Speed Decides',
    },
    {
      step: '5',
      title: 'Booked Job',
      query: 'First Responder Wins',
      description: 'The contractor who responded first books the estimate and secures the customer.',
      icon: Trophy,
      badge: 'Revenue Won',
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-stone-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 text-red-700 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Local Contractor Reality
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Customer Usually Calls Whoever Responds First.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            When a homeowner needs a repair or quote, they don't browse for days. They search, check the top results, and dial. Slow response or poor visibility immediately hands the job to your competitor.
          </p>
        </div>

        {/* Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all hover:border-slate-300 flex flex-col justify-between relative group"
              >
                {/* Step pill */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-black text-xs flex items-center justify-center">
                    0{item.step}
                  </span>
                  <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <div className="text-xs font-semibold text-red-600 font-mono bg-stone-50 p-1.5 rounded border border-slate-200/60">
                    {item.query}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Arrow connector on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs items-center justify-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-sm font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span>Every Step Matters.</span>
            <span className="text-slate-500 font-normal text-xs pl-2 border-l border-slate-200">
              A breakdown in visibility or answering loses the job instantly.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
