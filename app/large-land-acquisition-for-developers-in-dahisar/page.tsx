import { Metadata } from 'next';
import DahisarDevelopersClient from './DahisarDevelopersClient';

export const metadata: Metadata = {
  title: 'Large Land Acquisition for Developers in Dahisar, Mumbai | Delicacy Property',
  description: 'Looking for large land acquisition for developers in Dahisar? Delicacy Property offers verified, clear-title land parcels for large-scale projects. Call +91-9004810239 for a free site visit.',
  alternates: {
    canonical: '/large-land-acquisition-for-developers-in-dahisar',
  },
  openGraph: {
    title: 'Large Land Acquisition for Developers in Dahisar, Mumbai | Delicacy Property',
    description: 'Looking for large land acquisition for developers in Dahisar? Delicacy Property offers verified, clear-title land parcels for large-scale projects.',
    type: 'website',
  }
};

export default function DahisarDevelopersPage() {
  return <DahisarDevelopersClient />;
}
