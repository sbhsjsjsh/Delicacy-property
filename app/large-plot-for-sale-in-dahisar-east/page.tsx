import { Metadata } from 'next';
import DahisarEastPlotClient from './DahisarEastPlotClient';

export const metadata: Metadata = {
  title: 'Large Plot for Sale in Dahisar East, Mumbai | Delicacy Property',
  description: 'Looking for a large plot for sale in Dahisar East? Delicacy Property offers verified, clear-title plots for residential and commercial development. Call +91-9004810239 for a free site visit.',
  alternates: {
    canonical: '/large-plot-for-sale-in-dahisar-east',
  },
  openGraph: {
    title: 'Large Plot for Sale in Dahisar East, Mumbai | Delicacy Property',
    description: 'Looking for a large plot for sale in Dahisar East? Delicacy Property offers verified, clear-title plots for residential and commercial development.',
    type: 'website',
  }
};

export default function DahisarEastPlotPage() {
  return <DahisarEastPlotClient />;
}
