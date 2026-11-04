import type { Metadata } from 'next';
import OutrightBuildingDadarClient from './OutrightBuildingDadarClient';

export const metadata: Metadata = {
  title: 'Outright Building Sale in Dadar, Mumbai | Premium Real Estate Assets',
  description: 'Looking for an outright building sale in Dadar? Delicacy Property assists serious buyers and investors in acquiring verified commercial and residential buildings in the heart of Mumbai.',
  keywords: 'outright building sale Dadar, buy entire building Mumbai, commercial building Dadar East, residential building Dadar West, Mumbai property investment',
  alternates: {
    canonical: '/outright-building-sale-in-dadar',
  },
  openGraph: {
    title: 'Outright Building Sale in Dadar, Mumbai | Delicacy Property',
    description: 'Acquire high-value standalone building assets in Dadar with complete legal due diligence and expert guidance.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Standalone Building Dadar Mumbai',
      },
    ],
    type: 'website',
  },
};

export default function OutrightBuildingDadarPage() {
  return <OutrightBuildingDadarClient />;
}
