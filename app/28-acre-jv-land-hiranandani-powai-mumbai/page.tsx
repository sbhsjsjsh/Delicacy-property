import type { Metadata } from 'next';
import JVLandPowaiClient from './JVLandPowaiClient';

export const metadata: Metadata = {
  title: '28-Acre JV Land in Hiranandani, Powai, Mumbai | Delicacy Property',
  description: 'Massive 28-acre JV land opportunity in Powai near Hiranandani Gardens. Perfect for Tier-1 developers for township projects. Call +91-9004810239 for details.',
  keywords: '28-acre JV land Powai, Joint Venture land Mumbai, Hiranandani Powai land for development, massive land parcel Mumbai, township project land Powai, real estate investment Mumbai',
  alternates: {
    canonical: 'https://delicacy-property.vercel.app/28-acre-jv-land-hiranandani-powai-mumbai',
  },
  openGraph: {
    title: '28-Acre JV Land in Hiranandani, Powai, Mumbai | Delicacy Property',
    description: 'A rare, massive land parcel located near the prestigious Hiranandani micro-market. Perfect for iconic residential or mixed-use redevelopment.',
    images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function JVLandPowaiPage() {
  return <JVLandPowaiClient />;
}
