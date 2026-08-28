/**
 * Tracking & Analytics Integration Utilities
 *
 * This module coordinates event logging across:
 * - Meta Pixel (Facebook & Instagram ads)
 * - Google Analytics 4 (GA4)
 * - Google Tag Manager (GTM dataLayer)
 * - GoHighLevel CRM Webhook sync
 */

import { LeadSubmission, CTASource } from '../types';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackEvent = (
  eventName:
    | 'PageView'
    | 'ViewContent'
    | 'Lead'
    | 'Contact'
    | 'Schedule'
    | 'BookedAppointment'
    | 'CTAClick',
  payload?: Record<string, any>
) => {
  const timestamp = new Date().toISOString();
  const eventData = {
    event: eventName,
    timestamp,
    page_industry: 'home_services',
    ...payload,
  };

  // 1. Console Log for development & verification
  console.group(`📊 [Liberty Bell Analytics] ${eventName}`);
  console.log('Payload:', eventData);
  console.groupEnd();

  // 2. Meta Pixel (Facebook / Instagram) Integration Hook
  // Replace with standard pixel or CAPI
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', eventName, payload);
    } catch (err) {
      console.warn('Meta Pixel dispatch error:', err);
    }
  }

  // 3. Google Analytics 4 (GA4) Integration Hook
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, payload);
    } catch (err) {
      console.warn('GA4 dispatch error:', err);
    }
  }

  // 4. Google Tag Manager Data Layer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};

export const trackCTAClick = (source: CTASource, buttonLabel: string) => {
  trackEvent('CTAClick', {
    cta_source: source,
    button_label: buttonLabel,
    page_location: window.location.href,
  });
};

export const extractUrlParams = () => {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    landing_page_url: window.location.href,
    utm_source: params.get('utm_source') || 'meta_ads',
    utm_medium: params.get('utm_medium') || 'paid_social',
    utm_campaign: params.get('utm_campaign') || 'contractor_growth_2026',
    utm_content: params.get('utm_content') || 'video_ai_receptionist',
    utm_term: params.get('utm_term') || 'home_services',
    ad_campaign: params.get('ad_campaign') || 'Contractor_Acquisition_V1',
    ad_set: params.get('ad_set') || 'Local_HVAC_Plumbing_Radius',
    ad_creative: params.get('ad_creative') || 'Response_Time_Comparison',
    fbclid: params.get('fbclid') || '',
  };
};

export const submitLeadToGoHighLevel = async (leadData: LeadSubmission): Promise<{ success: boolean }> => {
  // Simulates syncing to GoHighLevel CRM via Webhook / API
  console.group('🚀 [GoHighLevel CRM Sync] New Lead Payload Ready to Transmit');
  console.log('Complete Contact & Attribution Record:', JSON.stringify(leadData, null, 2));
  console.groupEnd();

  // Dispatch GTM / Pixel Lead conversion
  trackEvent(leadData.appointment_status === 'confirmed' ? 'BookedAppointment' : 'Lead', {
    business_name: leadData.businessName,
    business_type: leadData.businessType,
    requested_service: leadData.requestedService,
    meeting_type: leadData.meeting_type,
    cta_source: leadData.cta_source,
  });

  // Simulated instant async resolution
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 450);
  });
};
