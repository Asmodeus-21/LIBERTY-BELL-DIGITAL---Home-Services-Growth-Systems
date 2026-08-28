import React from 'react';
import {
  Smartphone,
  MessageSquare,
  Database,
  Bell,
  RefreshCw,
  CalendarCheck,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Website Form or Call',
      desc: 'Homeowner submits service request online or calls after hours.',
      icon: Smartphone,
      time: 'Second 0',
    },
    {
      num: '2',
      title: 'Instant SMS Sent',
      desc: 'Customer receives friendly confirmation text: "Thanks Mike, we have a tech reviewing..."',
      icon: MessageSquare,
      time: '< 30 Seconds',
    },
    {
      num: '3',
      title: 'CRM Lead Created',
      desc: 'Contact is automatically logged and tagged with trade, zip code, and priority.',
      icon: Database,
      time: 'Instant',
    },
    {
      num: '4',
      title: 'Team Notification',
      desc: 'Dispatcher or on-call tech gets an alert with one-tap dial and job notes.',
      icon: Bell,
      time: '< 1 Minute',
    },
    {
      num: '5',
      title: 'Follow-Up Sequence',
      desc: 'Multi-touch automated check-ins if customer has not yet confirmed an estimate slot.',
      icon: RefreshCw,
      time: 'Automated',
    },
    {
      num: '6',
      title: 'Estimate Scheduled',
      desc: 'Job is locked on your calendar with automated reminder text sent before arrival.',
      icon: CalendarCheck,
      time: 'Booked',
    },
  ];

  return (
    <section id="journey-section" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            Lead Management Engine
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Lead Isn't Valuable If Nobody Follows Up.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Studies show responding within 5 minutes makes you 21x more likely to enter the sales cycle. Here is the automated journey every new inquiry follows with Liberty Bell.
          </p>
        </div>

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-6 h-6 rounded-md bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                      {item.time}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-red-600 flex items-center justify-center mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1.5 leading-normal font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow indicator between steps on larger screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom takeaway box */}
        <div className="mt-10 bg-slate-900 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-red-600/30 text-red-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zero Leads Left Behind</h4>
              <p className="text-xs text-slate-300">
                Every call, web inquiry, and quote request is tracked and followed up systematically.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800">
            ✓ Automated 24/7
          </span>
        </div>
      </div>
    </section>
  );
};
