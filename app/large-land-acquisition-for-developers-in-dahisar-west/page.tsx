import { Metadata } from 'next';
import DahisarWestDevelopersClient from './DahisarWestDevelopersClient';

export const metadata: Metadata = {
  title: 'Large Land Acquisition for Developers in Dahisar West, Mumbai | Delicacy Property',
  description: 'Looking for large land acquisition for developers in Dahisar West? Delicacy Property offers verified, clear-title land parcels for large-scale projects. Call +91-9004810239 for a free site visit.',
  alternates: {
    canonical: '/large-land-acquisition-for-developers-in-dahisar-west',
  },
  openGraph: {
    title: 'Large Land Acquisition for Developers in Dahisar West, Mumbai | Delicacy Property',
    description: 'Looking for large land acquisition for developers in Dahisar West? Delicacy Property offers verified, clear-title land parcels for large-scale projects.',
    type: 'website',
  }
};

export default function DahisarWestDevelopersPage() {
  return <DahisarWestDevelopersClient />;
}
