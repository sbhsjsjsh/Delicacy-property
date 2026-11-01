import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Properties in Mumbai | Latest Residential & Commercial Projects | Delicacy Property',
  description: 'Explore the latest new properties in Mumbai. From luxury residential towers to prime commercial hubs, discover exclusive real estate opportunities with Delicacy Property.',
  alternates: {
    canonical: '/new-properties-mumbai',
  },
  openGraph: {
    title: 'New Properties in Mumbai | Latest Residential & Commercial Projects | Delicacy Property',
    description: 'Explore the latest new properties in Mumbai. Exclusive real estate opportunities with Delicacy Property.',
    type: 'website',
  }
};

export default function NewPropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
