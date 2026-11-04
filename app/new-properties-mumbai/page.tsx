import type { Metadata } from 'next';
import NewPropertiesClient from './NewPropertiesClient';

export const metadata: Metadata = {
  title: 'Exclusive New Residential & Commercial Projects in Mumbai | Delicacy Property',
  description: 'Explore verified new residential and commercial property launches in Mumbai. From luxury apartments in Worli to Grade-A offices in BKC. Call +91-9004810239.',
  keywords: 'new properties Mumbai, residential projects Mumbai, commercial projects Mumbai, pre-launch projects Mumbai, real estate investment Mumbai, premium property Mumbai',
  alternates: {
    canonical: 'https://delicacy-property.vercel.app/new-properties-mumbai',
  },
  openGraph: {
    title: 'Exclusive New Residential & Commercial Projects in Mumbai | Delicacy Property',
    description: 'Discover premium residential and commercial opportunities curated by Delicacy Property. From pre-launches to ready possessions.',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function NewPropertiesPage() {
  return <NewPropertiesClient />;
}
