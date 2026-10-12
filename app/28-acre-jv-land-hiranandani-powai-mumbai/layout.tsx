import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '28 Acre JV Land in Powai Mumbai | Delicacy Property',
  description: 'Explore a 28-acre JV land opportunity near Hiranandani, Powai, Mumbai. Proposed 60:40 JV ratio with ₹50 crore deposit. Contact Delicacy Property at 9004810239.',
  alternates: {
    canonical: 'https://ais-dev-mi53eyqhlpcgtlywuqfbua-728728199311.asia-southeast1.run.app/28-acre-jv-land-hiranandani-powai-mumbai',
  },
  openGraph: {
    title: '28 Acre JV Land in Powai Mumbai | Delicacy Property',
    description: 'Explore a 28-acre JV land opportunity near Hiranandani, Powai, Mumbai. Proposed 60:40 JV ratio with ₹50 crore deposit.',
    url: 'https://ais-dev-mi53eyqhlpcgtlywuqfbua-728728199311.asia-southeast1.run.app/28-acre-jv-land-hiranandani-powai-mumbai',
    siteName: 'Delicacy Property',
    images: [
      {
        url: 'https://picsum.photos/seed/powai/1200/630',
        width: 1200,
        height: 630,
        alt: '28 Acre JV Land in Powai Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '28 Acre JV Land in Powai Mumbai | Delicacy Property',
    description: 'Explore a 28-acre JV land opportunity near Hiranandani, Powai, Mumbai. Proposed 60:40 JV ratio with ₹50 crore deposit.',
    images: ['https://picsum.photos/seed/powai/1200/630'],
  },
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
