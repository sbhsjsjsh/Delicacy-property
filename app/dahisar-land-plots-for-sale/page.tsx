import type { Metadata } from 'next';
import DahisarPlotsClient from './DahisarPlotsClient';

export const metadata: Metadata = {
  title: 'Dahisar Land Plots for Sale | Verified Plots in Mumbai | Delicacy Property',
  description: 'Looking for Dahisar land plots for sale? Delicacy Property offers verified, clear-title plots for residential, commercial and investment use. Call +91-9004810239 for a free site visit.',
  keywords: 'Dahisar Land Plots for Sale, plots for sale in Dahisar, land for sale in Dahisar Mumbai, residential plot Dahisar, commercial plot Dahisar, buy land in Dahisar, Dahisar land investment',
  alternates: {
    canonical: 'https://delicacy-property.vercel.app/dahisar-land-plots-for-sale',
  },
  openGraph: {
    title: 'Dahisar Land Plots for Sale | Verified Plots in Mumbai | Delicacy Property',
    description: 'Looking for Dahisar land plots for sale? Delicacy Property offers verified, clear-title plots for residential, commercial and investment use.',
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function DahisarPlotsPage() {
  return <DahisarPlotsClient />;
}
