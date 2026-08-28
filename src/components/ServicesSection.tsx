import React from 'react';
import {
  MapPin,
  Search,
  Target,
  Bot,
  MessageSquare,
  Star,
  Check,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Google Business Profile Management',
      desc: 'Weekly geo-tagged photo uploads, category audits, service menu updates, and regular posts to maximize your 3-pack presence in Google Maps.',
      icon: MapPin,
      features: ['Local 3-Pack Optimization', 'Geo-Tagged Photo Updates', 'Category & Attribute Tuning'],
    },
    {
      title: 'Local SEO & Town Landing Pages',
      desc: 'Targeted organic search strategy designed specifically for trade contractors to rank in surrounding neighborhoods and service zip codes.',
      icon: Search,
      features: ['Service Area City Pages', 'High-Intent Trade Keywords', 'Local Citation Building'],
    },
    {
      title: 'Google Ads & Local Service Ads',
      desc: 'Laser-focused paid search campaigns configured for emergency repairs, replacements, and high-margin installations with negative keyword safeguards.',
      icon: Target,
      features: ['Call-Only & Search Ads', 'Negative Keyword Filtering', 'Conversion Tracking Setup'],
    },
    {
      title: '24/7 AI Receptionist & Call Handler',
      desc: 'Never let a call go unanswered. Our AI assistant handles inbound calls, screens service needs, collects job details, and schedules estimates on your calendar.',
      icon: Bot,
      features: ['Zero Missed Calls', 'Custom Urgent Routing', 'Direct Calendar Scheduling'],
    },
    {
      title: 'Automated SMS & Email Follow-Up',
      desc: 'Instant auto-replies for new inquiries, automated quote follow-ups for open bids, and seasonal maintenance campaigns (AC tune-ups, winterizing).',
      icon: MessageSquare,
      features: ['< 30 Second Response Time', 'Unclosed Quote Follow-Up', 'Seasonal Tune-Up Reminders'],
    },
    {
      title: 'Review Automation & Reputation',
      desc: 'Automatically send a 1-tap Google review request via SMS right after a technician marks a job complete in the field.',
      icon: Star,
      features: ['Automated Post-Job SMS', '1-Tap Google Review Link', 'Consistent 5-Star Growth'],
    },
  ];

  return (
    <section id="services-section" className="py-14 sm:py-20 bg-stone-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider">
            Industry-Specific Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Growth Infrastructure For Home Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            We only deploy services that directly solve contractor visibility, phone response, and quote conversion. No unnecessary generic fluff.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all hover:border-red-200 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{service.desc}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
