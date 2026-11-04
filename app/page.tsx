import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Delicacy Property Mumbai | SRA & Building Redevelopment Consultant',
  description: 'Delicacy Property is a trusted real estate consultant in Mumbai specializing in SRA deals, building redevelopment, strategic land acquisitions, and premium property consultancy.',
  keywords: 'Delicacy Property, Mumbai real estate, SRA projects Mumbai, building redevelopment Dadar, land acquisition Dahisar, JV land Mumbai, commercial property Mumbai',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Delicacy Property Mumbai | SRA & Building Redevelopment Consultant',
    description: 'Trusted real estate consultant in Mumbai specializing in SRA deals, building redevelopment, and strategic land acquisitions.',
    url: 'https://delicacy-property.vercel.app',
    siteName: 'Delicacy Property',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Delicacy Property Mumbai Real Estate',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
