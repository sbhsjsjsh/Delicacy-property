import type { Metadata } from 'next';
import CommercialPropertyClient from './CommercialPropertyClient';

export const metadata: Metadata = {
  title: 'Commercial Property for Sale in Mumbai | Premier Office & Retail Spaces',
  description: 'Looking for commercial property for sale in Mumbai? Delicacy Property assists serious buyers and investors in acquiring high-potential office spaces and retail assets.',
  keywords: 'commercial property Mumbai, office space for sale Mumbai, retail shops Mumbai, buy commercial building Mumbai, BKC office space, Lower Parel commercial',
  alternates: {
    canonical: '/commercial-property-for-sale-in-mumbai',
  },
  openGraph: {
    title: 'Commercial Property for Sale in Mumbai | Delicacy Property',
    description: 'Acquire high-potential commercial real estate across Mumbai prime business districts.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Modern Commercial Office Mumbai',
      },
    ],
    type: 'website',
  },
};

export default function CommercialPropertyPage() {
  return <CommercialPropertyClient />;
}
