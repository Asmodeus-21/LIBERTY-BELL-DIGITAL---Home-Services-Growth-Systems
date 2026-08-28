import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Building2,
  User,
  Mail,
  HelpCircle,
  Globe,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { LeadSubmission, CTASource, BusinessType, HelpTopic } from '../types';
import { extractUrlParams, submitLeadToGoHighLevel, trackEvent } from '../utils/tracking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaSource: CTASource;
}

const BUSINESS_TYPES: BusinessType[] = [
  'Plumbing',
  'HVAC & Climate',
  'Electrical',
  'Roofing & Gutters',
  'Landscaping & Tree Care',
  'House Cleaning & Maid Services',
  'Pest Control',
  'Handyman & Remodeling',
  'General Contractor',
  'Other Home Service',
];

const HELP_TOPICS: HelpTopic[] = [
  'Missing Calls',
  'Getting More Leads',
  'Booking More Appointments',
  'Website',
  'Google Visibility',
  'Advertising',
  'Automated Follow-Up',
  'AI Receptionist',
  'Not Sure Yet',
];

const TIME_SLOTS = [
  '9:00 AM - 9:30 AM',
  '10:30 AM - 11:00 AM',
  '11:30 AM - 12:00 PM',
  '1:30 PM - 2:00 PM',
  '3:00 PM - 3:30 PM',
  '4:30 PM - 5:00 PM',
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, ctaSource }) => {
  const isInPerson = ctaSource === 'In-Person Review';

  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '' as BusinessType | '',
    requestedService: 'Missing Calls' as HelpTopic,
    website: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calendar State
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:30 AM - 11:00 AM');

  // Days list (next 5 business days)
  const [availableDays, setAvailableDays] = useState<{ day: string; date: string; formatted: string }[]>([]);

  useEffect(() => {
    // Generate dates
    const days: { day: string; date: string; formatted: string }[] = [];
    const now = new Date();
    let current = new Date(now);
    
    // Add business days
    while (days.length < 5) {
      current.setDate(current.getDate() + 1);
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push({
          day: current.toLocaleDateString('en-US', { weekday: 'short' }),
          date: current.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          formatted: current.toISOString().split('T')[0],
        });
      }
    }
    setAvailableDays(days);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      trackEvent('ViewContent', { modal_opened: true, cta_source: ctaSource });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, ctaSource]);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.businessType) newErrors.businessType = 'Please select your primary trade/business';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) return;

    setIsSubmitting(true);

    const urlMeta = extractUrlParams();
    const leadPayload: LeadSubmission = {
      ...formData,
      landing_page_industry: 'home_services',
      landing_page_url: urlMeta.landing_page_url || window.location.href,
      ad_campaign: urlMeta.ad_campaign || '',
      ad_set: urlMeta.ad_set || '',
      ad_creative: urlMeta.ad_creative || '',
      utm_source: urlMeta.utm_source || '',
      utm_medium: urlMeta.utm_medium || '',
      utm_campaign: urlMeta.utm_campaign || '',
      utm_content: urlMeta.utm_content || '',
      utm_term: urlMeta.utm_term || '',
      fbclid: urlMeta.fbclid || '',
      date_created: new Date().toISOString(),
      appointment_status: 'pending_calendar',
      cta_source: ctaSource,
      meeting_type: isInPerson ? 'in_person_review' : 'strategy_call',
    };

    await submitLeadToGoHighLevel(leadPayload);
    setIsSubmitting(false);
    setStep(2);
  };

  const handleScheduleConfirm = async () => {
    setIsSubmitting(true);
    const chosenDay = availableDays[selectedDayIndex];

    const urlMeta = extractUrlParams();
    const finalPayload: LeadSubmission = {
      ...formData,
      landing_page_industry: 'home_services',
      landing_page_url: urlMeta.landing_page_url || window.location.href,
      ad_campaign: urlMeta.ad_campaign || '',
      ad_set: urlMeta.ad_set || '',
      ad_creative: urlMeta.ad_creative || '',
      utm_source: urlMeta.utm_source || '',
      utm_medium: urlMeta.utm_medium || '',
      utm_campaign: urlMeta.utm_campaign || '',
      utm_content: urlMeta.utm_content || '',
      utm_term: urlMeta.utm_term || '',
      fbclid: urlMeta.fbclid || '',
      date_created: new Date().toISOString(),
      appointment_status: 'confirmed',
      scheduled_date: `${chosenDay.day}, ${chosenDay.date}`,
      scheduled_time: selectedTimeSlot,
      cta_source: ctaSource,
      meeting_type: isInPerson ? 'in_person_review' : 'strategy_call',
    };

    await submitLeadToGoHighLevel(finalPayload);
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        id="booking-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 sm:p-6 relative">
          <button
            id="modal-close-button"
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600/90 text-white uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Home Services Growth System
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              100% Free • No Obligation
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white pr-8">
            {isInPerson ? 'Book Your Free In-Person Business Review' : 'Book Your Free Strategy Call'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg leading-relaxed">
            Tell us a little about your business and we'll take a look at where you may be losing calls, leads, bookings, or customers.
          </p>

          {/* Stepper indicator */}
          {!isConfirmed && (
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-700/60 text-xs font-medium">
              <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-red-400 font-semibold' : 'text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 1 ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                  1
                </span>
                <span>Business Information</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-red-400 font-semibold' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 2 ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                  2
                </span>
                <span>Choose a Time</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* STEP 1: BUSINESS INFORMATION */}
          {step === 1 && !isConfirmed && (
            <form id="lead-capture-form" onSubmit={handleStep1Submit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="input-first-name"
                      type="text"
                      required
                      placeholder="e.g. Mike"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors ${
                        errors.firstName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="input-last-name"
                      type="text"
                      required
                      placeholder="e.g. Sullivan"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors ${
                        errors.lastName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Business Name <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="input-business-name"
                    type="text"
                    required
                    placeholder="e.g. Apex Plumbing & HVAC"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors ${
                      errors.businessName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.businessName && <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="input-phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="input-email"
                      type="email"
                      required
                      placeholder="mike@apexplumbing.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Trade / Business Type <span className="text-red-600">*</span>
                </label>
                <select
                  id="select-business-type"
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value as BusinessType })}
                  className={`w-full px-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors ${
                    errors.businessType ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select your industry / trade...</option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.businessType && <p className="text-xs text-red-600 mt-1">{errors.businessType}</p>}
              </div>

              {/* Help topic (recommended) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  What would you like help with? <span className="text-slate-400 font-normal">(Recommended)</span>
                </label>
                <div className="relative">
                  <HelpCircle className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    id="select-help-topic"
                    value={formData.requestedService}
                    onChange={(e) => setFormData({ ...formData, requestedService: e.target.value as HelpTopic })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors"
                  >
                    {HELP_TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional: Website / GBP */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Website or Google Business Profile <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    id="input-website"
                    type="text"
                    placeholder="https://apexplumbing.com or Google Maps URL"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              {/* Optional: Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Anything we should know about your business? <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    id="input-notes"
                    rows={2}
                    placeholder="e.g. Currently 3 trucks on the road, missing after-hours emergency calls, looking to fill next month's schedule..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="submit-step-1-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Saving Your Information...
                    </div>
                  ) : (
                    <>
                      <span>{isInPerson ? 'Book My Free In-Person Business Review' : 'Book My Free Strategy Call'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  🔒 Privacy protected. We never sell your data or spam your inbox.
                </p>
              </div>
            </form>
          )}

          {/* STEP 2: CHOOSE A TIME */}
          {step === 2 && !isConfirmed && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">You're All Set</h4>
                  <p className="text-xs text-emerald-800 mt-0.5 leading-relaxed">
                    We've received your information. Choose a time that works for you and we'll talk through your business, what's currently happening, and where Liberty Bell may be able to help.
                  </p>
                </div>
              </div>

              {/* Day Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-red-600" /> Select Date:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {availableDays.map((d, index) => (
                    <button
                      key={d.formatted}
                      type="button"
                      onClick={() => setSelectedDayIndex(index)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDayIndex === index
                          ? 'border-red-600 bg-red-50 text-red-700 shadow-xs ring-2 ring-red-600/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span className="block text-[10px] sm:text-xs font-semibold uppercase text-slate-500">
                        {d.day}
                      </span>
                      <span className="block text-xs sm:text-sm font-bold mt-0.5">
                        {d.date}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-red-600" /> Select Time Slot (Eastern Time):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center cursor-pointer ${
                        selectedTimeSlot === slot
                          ? 'border-red-600 bg-red-600 text-white font-semibold shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">
                  Review Type:{' '}
                  <strong className="text-slate-900">
                    {isInPerson ? 'Free In-Person Business Review' : '15-Min Strategy Call'}
                  </strong>
                </span>
                <span className="text-slate-500 font-medium">
                  With: <strong>Liberty Bell Specialist</strong>
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  id="confirm-calendar-time-btn"
                  type="button"
                  onClick={handleScheduleConfirm}
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Locking In Your Time...
                    </div>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* FINAL CONFIRMED STATE */}
          {isConfirmed && (
            <div className="text-center py-6 px-2 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-black tracking-tight text-slate-900">You're Booked.</h3>
                <p className="text-sm font-semibold text-red-600">
                  {availableDays[selectedDayIndex]?.day}, {availableDays[selectedDayIndex]?.date} at {selectedTimeSlot}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto pt-1 leading-relaxed">
                  We'll see you then. Check your phone and email for confirmation and calendar invite details.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Business:</span>
                  <span className="font-semibold text-slate-900">{formData.businessName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-semibold text-slate-900">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-semibold text-slate-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Focus:</span>
                  <span className="font-semibold text-slate-900">{formData.requestedService}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="modal-finish-button"
                  type="button"
                  onClick={handleResetAndClose}
                  className="py-3 px-8 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-sm cursor-pointer"
                >
                  Close & Return to Page
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
