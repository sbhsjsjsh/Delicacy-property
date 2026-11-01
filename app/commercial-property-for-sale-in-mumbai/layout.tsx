import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Property for Sale in Mumbai | Delicacy Property',
  description: 'Looking for commercial property for sale in Mumbai? Explore available property opportunities with Delicacy Property. Call 9004810239 for enquiries.',
  alternates: {
    canonical: '/commercial-property-for-sale-in-mumbai',
  },
  openGraph: {
    title: 'Commercial Property for Sale in Mumbai | Delicacy Property',
    description: 'Looking for commercial property for sale in Mumbai? Explore available property opportunities with Delicacy Property.',
    type: 'website',
  }
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
