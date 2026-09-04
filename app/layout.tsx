import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Delicacy Property Mumbai | SRA & Building Redevelopment Consultant',
  description: 'Delicacy Property is a trusted real estate consultant in Mumbai specializing in SRA deals, building redevelopment, property consultancy, and real estate solutions.',
  openGraph: {
    title: 'Delicacy Property Mumbai | SRA & Building Redevelopment Consultant',
    description: 'Delicacy Property is a trusted real estate consultant in Mumbai specializing in SRA deals, building redevelopment, property consultancy, and real estate solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delicacy Property Mumbai | SRA & Building Redevelopment Consultant',
    description: 'Delicacy Property is a trusted real estate consultant in Mumbai specializing in SRA deals, building redevelopment, property consultancy, and real estate solutions.',
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
