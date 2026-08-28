export type BusinessType =
  | 'Plumbing'
  | 'HVAC & Climate'
  | 'Electrical'
  | 'Roofing & Gutters'
  | 'Landscaping & Tree Care'
  | 'House Cleaning & Maid Services'
  | 'Pest Control'
  | 'Handyman & Remodeling'
  | 'General Contractor'
  | 'Other Home Service';

export type HelpTopic =
  | 'Missing Calls'
  | 'Getting More Leads'
  | 'Booking More Appointments'
  | 'Website'
  | 'Google Visibility'
  | 'Advertising'
  | 'Automated Follow-Up'
  | 'AI Receptionist'
  | 'Not Sure Yet';

export interface LeadSubmission {
  firstName: string;
  lastName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: BusinessType | '';
  requestedService: HelpTopic | '';
  website: string;
  notes: string;
  landing_page_industry: 'home_services';
  landing_page_url: string;
  ad_campaign: string;
  ad_set: string;
  ad_creative: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  date_created: string;
  appointment_status: 'pending_calendar' | 'confirmed';
  scheduled_date?: string;
  scheduled_time?: string;
  cta_source: string;
  meeting_type: 'strategy_call' | 'in_person_review';
}

export type CTASource =
  | 'Hero'
  | 'Nav'
  | 'Sticky Mobile'
  | 'Sticky Desktop'
  | 'Mid-page Solution'
  | 'AI Receptionist Demo'
  | 'In-Person Review'
  | 'Final CTA';
