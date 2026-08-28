import React from 'react';
import { BellRing, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-800 text-xs pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md">
              <BellRing className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                LIBERTY BELL <span className="text-red-500">DIGITAL</span>
              </span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Home Services & Contractor Division
              </span>
            </div>
          </div>

          {/* Quick contact / info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tailored Systems for HVAC, Plumbing, Roofing, Electrical</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Serving Local Trade Contractors</span>
            </div>
          </div>
        </div>

        {/* Legal and Disclaimer */}
        <div className="space-y-3 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong>Disclaimer:</strong> Liberty Bell Digital builds custom marketing, AI call-handling, and automation workflows for independent home service contractors. Results vary based on local market competitiveness, service radius, seasonal demand, and response speed. We do not guarantee specific search rankings, lead volumes, or revenue figures.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-slate-900 text-slate-400">
            <p>© {new Date().getFullYear()} Liberty Bell Digital. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Contractor Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
