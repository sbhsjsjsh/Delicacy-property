import type { Metadata } from 'next';
import FullBuildingPurchaseClient from './FullBuildingPurchaseClient';

export const metadata: Metadata = {
  title: 'Full Building Purchase in Dadar, Mumbai | Delicacy Property',
  description: 'Looking for a full building purchase in Dadar? Delicacy Property offers verified, clear-title buildings in central Mumbai for investors, developers and businesses. Call +91-9004810239 for a free site visit.',
  keywords: 'Full Building Purchase in Dadar, buy entire building in Dadar, whole building for sale in Dadar Mumbai, commercial building Dadar, residential building for sale Dadar, building for redevelopment Dadar, Dadar real estate investment',
  alternates: {
    canonical: 'https://delicacy-property.vercel.app/full-building-purchase-in-dadar',
  },
  openGraph: {
    title: 'Full Building Purchase in Dadar, Mumbai | Delicacy Property',
    description: 'Verified buildings for investment, redevelopment, and own use in central Mumbai. Secure a high-value asset in Dadar with Delicacy Property.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function FullBuildingPurchasePage() {
  return <FullBuildingPurchaseClient />;
}
