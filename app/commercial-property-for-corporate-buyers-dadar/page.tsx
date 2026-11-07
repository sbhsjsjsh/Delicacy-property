import type { Metadata } from 'next';
import CommercialCorporateBuyersClient from './CommercialCorporateBuyersClient';

export const metadata: Metadata = {
  title: 'Commercial Property for Corporate Buyers in Dadar, Mumbai | Delicacy Property',
  description: 'Looking for commercial property for corporate buyers in Dadar? Delicacy Property offers verified, clear-title offices, floors and buildings in central Mumbai. Call +91-9004810239 for a free site visit.',
  keywords: 'commercial property for sale in Dadar, corporate office space Dadar Mumbai, buy office in Dadar, commercial building Dadar, corporate real estate Dadar, Dadar commercial property investment',
  alternates: {
    canonical: 'https://delicacy-property.vercel.app/commercial-property-for-corporate-buyers-dadar',
  },
  openGraph: {
    title: 'Commercial Property for Corporate Buyers in Dadar | Delicacy Property',
    description: 'Verified offices, floors and buildings for companies and institutional investors in central Mumbai.',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function CommercialCorporateBuyersPage() {
  return <CommercialCorporateBuyersClient />;
}
