import type { Metadata } from 'next';
import CorporateInvestmentDadarClient from './CorporateInvestmentDadarClient';

export const metadata: Metadata = {
  title: 'Building for Corporate Investment in Dadar, Mumbai | Delicacy Property',
  description: 'Looking for a building for corporate investment in Dadar? Delicacy Property offers verified, clear-title commercial buildings in central Mumbai for companies and institutional investors. Call +91-9004810239 for a free site visit.',
  keywords: 'Building for Corporate Investment in Dadar, commercial building for sale in Dadar, corporate office building Dadar, institutional real estate investment Mumbai, Dadar commercial property investment, buy office building in Dadar, corporate real estate Dadar Mumbai',
  alternates: {
    canonical: 'https://delicacy-property.vercel.app/building-for-corporate-investment-in-dadar',
  },
  openGraph: {
    title: 'Building for Corporate Investment in Dadar, Mumbai | Delicacy Property',
    description: 'Verified commercial buildings for companies and institutional investors in central Mumbai. Secure a high-value asset in Dadar with Delicacy Property.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function CorporateInvestmentDadarPage() {
  return <CorporateInvestmentDadarClient />;
}
