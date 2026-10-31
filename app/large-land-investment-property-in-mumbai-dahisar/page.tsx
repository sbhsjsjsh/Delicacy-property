import { Metadata } from 'next';
import DahisarClient from './DahisarClient';

export const metadata: Metadata = {
  title: 'Large Land Investment Property in Mumbai Dahisar | Delicacy Property',
  description: 'Looking for a large land investment property in Mumbai Dahisar? Delicacy Property offers verified, clear-title land parcels with high appreciation potential. Call +91-9004810239 for a free site visit.',
  alternates: {
    canonical: '/large-land-investment-property-in-mumbai-dahisar',
  },
  openGraph: {
    title: 'Large Land Investment Property in Mumbai Dahisar | Delicacy Property',
    description: 'Explore verified land parcels in Dahisar, Mumbai with Delicacy Property. High appreciation potential and legally clear titles.',
    type: 'website',
  }
};

export default function DahisarLandPage() {
  return <DahisarClient />;
}
