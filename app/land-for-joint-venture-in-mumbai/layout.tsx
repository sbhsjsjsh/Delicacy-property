import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Land for Joint Venture in Mumbai | Delicacy Property',
  description: 'Looking for land for a joint venture in Mumbai? Explore property opportunities for builders and developers with Delicacy Property. Call 9004810239.',
  alternates: {
    canonical: 'https://ais-dev-mi53eyqhlpcgtlywuqfbua-728728199311.asia-southeast1.run.app/land-for-joint-venture-in-mumbai',
  },
  openGraph: {
    title: 'Land for Joint Venture in Mumbai | Delicacy Property',
    description: 'Looking for land for a joint venture in Mumbai? Explore property opportunities for builders and developers with Delicacy Property.',
    url: 'https://ais-dev-mi53eyqhlpcgtlywuqfbua-728728199311.asia-southeast1.run.app/land-for-joint-venture-in-mumbai',
    siteName: 'Delicacy Property',
    images: [
      {
        url: 'https://picsum.photos/seed/mumbai-jv/1200/630',
        width: 1200,
        height: 630,
        alt: 'Land for Joint Venture in Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Land for Joint Venture in Mumbai | Delicacy Property',
    description: 'Looking for land for a joint venture in Mumbai? Explore property opportunities for builders and developers with Delicacy Property.',
    images: ['https://picsum.photos/seed/mumbai-jv/1200/630'],
  },
};

export default function JVLandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
