import React from 'react';
import { Headphones, Sliders, LineChart, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const cards = [
    {
      title: 'We Listen First',
      desc: 'We start by understanding your service area, team size, truck capacity, and current pain points. We never pitch a cookie-cutter package until we understand how your business currently operates.',
      icon: Headphones,
      badge: 'Discovery & Consultation',
    },
    {
      title: 'We Build Around You',
      desc: 'Whether your dispatchers use ServiceTitan, Housecall Pro, Jobber, or simple phone sheets, our AI call handling and automation plug directly into your daily workflow without disrupting your field techs.',
      icon: Sliders,
      badge: 'Custom Architecture',
    },
    {
      title: 'We Stay Focused On Results',
      desc: 'We don’t distract you with vanity metrics, impressions, or vague traffic stats. We focus on real measurable outcomes: answered calls, qualified lead captures, and booked appointments on your calendar.',
      icon: LineChart,
      badge: 'Revenue-Driven',
    },
  ];

  return (
    <section id="trust-section" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            The Liberty Bell Approach
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Local Service Businesses Trust Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            We operate as your dedicated growth and call-handling partner, not another detached software subscription.
          </p>
        </div>

        {/* 3 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-stone-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-200/70 px-2 py-0.5 rounded uppercase tracking-wider">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>Practical local service focus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
