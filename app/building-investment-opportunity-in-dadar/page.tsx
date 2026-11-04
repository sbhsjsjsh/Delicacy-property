import type { Metadata } from 'next';
import DadarInvestmentClient from './DadarInvestmentClient';

export const metadata: Metadata = {
  title: 'Building Investment Opportunity in Dadar, Mumbai | Delicacy Property',
  description: 'Looking for a building investment opportunity in Dadar? Delicacy Property offers verified, clear-title buildings and development assets in central Mumbai. Call +91-9004810239 for a free site visit.',
  keywords: 'Building Investment Opportunity in Dadar, building for sale in Dadar, commercial building Dadar Mumbai, residential building investment Dadar, redevelopment building Dadar, Dadar real estate investment, buy building in Dadar',
  openGraph: {
    title: 'Building Investment Opportunity in Dadar, Mumbai | Delicacy Property',
    description: 'Verified buildings for rental income and redevelopment in central Mumbai. Secure a high-value asset in Dadar with Delicacy Property.',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function DadarInvestmentPage() {
  return <DadarInvestmentClient />;
}
