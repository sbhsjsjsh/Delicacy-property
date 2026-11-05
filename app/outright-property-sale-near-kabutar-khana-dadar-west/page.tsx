import type { Metadata } from 'next';
import KabutarKhanaPropertyClient from './KabutarKhanaPropertyClient';

export const metadata: Metadata = {
  title: 'Outright Property Sale Near Kabutar Khana, Dadar West | Delicacy Property',
  description: 'Looking for an outright property sale near Kabutar Khana, Dadar West? Delicacy Property offers verified, clear-title properties in central Mumbai. Call +91-9004810239 for a free site visit.',
  keywords: 'Outright Property Sale Near Kabutar Khana Dadar West, property for sale near Kabutar Khana Dadar, outright sale property Dadar West, buy property in Dadar West Mumbai, commercial property Dadar West, residential property Dadar West, clear title property Dadar',
  alternates: {
    canonical: 'https://delicacy-property.vercel.app/outright-property-sale-near-kabutar-khana-dadar-west',
  },
  openGraph: {
    title: 'Outright Property Sale Near Kabutar Khana, Dadar West | Delicacy Property',
    description: 'Verified, clear-title properties in Mumbai\'s most active commercial hub. Full ownership and high visibility from day one.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'],
  },
};

export default function KabutarKhanaPropertyPage() {
  return <KabutarKhanaPropertyClient />;
}
