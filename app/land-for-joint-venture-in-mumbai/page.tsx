import type { Metadata } from 'next';
import JVLandHubClient from './JVLandHubClient';

export const metadata: Metadata = {
  title: 'Land for Joint Venture in Mumbai | Builders & Developers Hub',
  description: 'Explore prime land opportunities for Joint Venture in Mumbai. Delicacy Property connects landowners with reputable real estate developers for high-yield projects.',
  keywords: 'land for JV Mumbai, Joint Venture real estate Mumbai, builder land JV, developer opportunities Mumbai, Mumbai land development',
  alternates: {
    canonical: '/land-for-joint-venture-in-mumbai',
  },
  openGraph: {
    title: 'Land for Joint Venture in Mumbai | Delicacy Property',
    description: 'Unlock development potential with strategic JV partnerships across Mumbai.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Mumbai Development Land JV',
      },
    ],
    type: 'website',
  },
};

export default function JVLandHubPage() {
  return <JVLandHubClient />;
}
