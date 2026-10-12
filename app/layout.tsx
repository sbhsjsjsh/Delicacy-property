import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

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
  icons: {
    icon: 'https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body suppressHydrationWarning className="antialiased font-sans">{children}</body>
    </html>
  );
}
