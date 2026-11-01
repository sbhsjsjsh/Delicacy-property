import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outright Building Sale in Dadar Mumbai | Delicacy Property',
  description: 'Looking for an outright building sale in Dadar, Mumbai? Connect with Delicacy Property for building purchase enquiries. Call 9004810239.',
  alternates: {
    canonical: '/outright-building-sale-in-dadar',
  },
  openGraph: {
    title: 'Outright Building Sale in Dadar Mumbai | Delicacy Property',
    description: 'Looking for an outright building sale in Dadar, Mumbai? Connect with Delicacy Property for building purchase enquiries.',
    type: 'website',
  }
};

export default function DadarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
