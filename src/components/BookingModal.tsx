import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { CTASource } from '../types';
import { trackEvent } from '../utils/tracking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaSource: CTASource;
}

// GoHighLevel form embed details (Liberty Bell Digital - Home Services - Free Strategy Call)
const GHL_FORM_ID = '5hioC0TYiQuA1uJIbNo3';
const GHL_FORM_HEIGHT = 1260;
const GHL_EMBED_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';

// Load GHL's form embed script once per page load (it auto-resizes the iframe
// and relays submit events) rather than once per modal open.
function useGhlEmbedScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = GHL_EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, ctaSource }) => {
  useGhlEmbedScript();

  const isInPerson = ctaSource === 'In-Person Review';

  useEffect(() => {
    if (isOpen) {
      trackEvent('ViewContent', { modal: 'booking_popup', source_location: ctaSource });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, ctaSource]);

  if (!isOpen) return null;

  const modalHeadline = isInPerson
    ? 'Book Your Free In-Person Business Review'
    : 'Book Your Free Strategy Call';

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
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
            onClick={handleClose}
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
            {modalHeadline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg leading-relaxed">
            Tell us a little about your business and we'll take a look at where you may be losing
            calls, leads, bookings, or customers.
          </p>
        </div>

        {/* Body: live GoHighLevel form */}
        <div className="overflow-y-auto">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
            style={{ width: '100%', height: `${GHL_FORM_HEIGHT}px`, border: 'none' }}
            id={`inline-${GHL_FORM_ID}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={modalHeadline}
            data-height={GHL_FORM_HEIGHT}
            data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
            data-form-id={GHL_FORM_ID}
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title={modalHeadline}
          />
        </div>
      </div>
    </div>
  );
};
