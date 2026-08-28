import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you only work with plumbers?',
      a: 'No. We work with all residential and commercial trade contractors — including HVAC & cooling, roofing, electrical, landscaping & tree care, cleaning companies, pest control, handymen, and general contractors.',
    },
    {
      q: 'Can you help us get more calls from Google?',
      a: 'Yes. We optimize your Google Business Profile, improve your local search rankings, run targeted Google Ads, and ensure your website turns searchers into actual phone calls.',
    },
    {
      q: 'Can your AI receptionist handle urgent calls?',
      a: 'Yes. You can set custom rules so that urgent emergencies (like burst pipes or furnace outages in freezing weather) are immediately routed to your on-call technician’s phone.',
    },
    {
      q: 'Can leads automatically go into our CRM?',
      a: 'Yes. We integrate directly with GoHighLevel, ServiceTitan, Housecall Pro, Jobber, and most major contractor CRMs so leads flow seamlessly into your existing dispatch pipeline.',
    },
    {
      q: 'Do we have to replace our current systems?',
      a: 'No. Liberty Bell is designed to bridge the gaps in your current setup. Whether you use existing dispatch software or simple spreadsheets, we enhance what you have without disrupting daily operations.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-14 sm:py-20 bg-stone-100/60 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            Clear Answers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Everything you need to know about our home service growth systems.
          </p>
        </div>

        {/* 5 Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-red-600 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-red-50 text-red-600 text-xs flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-14 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
