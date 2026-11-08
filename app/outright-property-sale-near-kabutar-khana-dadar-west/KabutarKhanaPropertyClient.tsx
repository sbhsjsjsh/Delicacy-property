'use client';

import React from 'react';
import { 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  MessageCircle, 
  ArrowLeft,
  Navigation,
  ShoppingCart,
  Home,
  Gavel,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const STAGGER = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function KabutarKhanaPropertyClient() {
  return (
    <div className="min-h-screen bg-white text-emerald-950 font-sans selection:bg-emerald-200 selection:text-emerald-950 antialiased">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
        <nav className="w-full px-6 py-4 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-emerald-200 p-0.5 bg-emerald-50 group-hover:border-emerald-500 transition-all">
              <Image 
                src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                alt="Delicacy Property"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-bold text-emerald-950 hidden sm:block">Delicacy<span className="text-emerald-500 font-light">Property</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:9004810239" className="hidden sm:flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
              <Phone className="w-4 h-4" /> 9004810239
            </a>
            <a href="https://wa.me/919004810239" className="px-5 py-2.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/10">
              WhatsApp Us
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-48 md:px-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1920"
              alt="Dadar West Mumbai Property View"
              fill
              className="object-cover opacity-15 grayscale"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <MapPin className="w-3 h-3" /> Landmark Opportunity
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Outright Property Sale Near <span className="text-emerald-500">Kabutar Khana, Dadar West</span>
              </h1>
              <p className="text-lg md:text-2xl text-emerald-800/70 font-medium leading-relaxed mb-12 max-w-xl">
                Verified, clear-title properties in Mumbai&apos;s most active commercial hub. Full ownership and high visibility from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:9004810239" className="px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" /> Book a Site Visit
                </a>
                <a href="https://wa.me/919004810239" className="px-10 py-5 bg-white border-2 border-emerald-200 text-emerald-600 font-black uppercase tracking-widest text-sm rounded-full hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/5">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200"
                alt="Property near Kabutar Khana Dadar"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight">Verified Properties by Delicacy Property</h2>
            <div className="space-y-6 text-xl text-emerald-900/80 leading-relaxed font-medium">
              <p>
                Kabutar Khana is one of Dadar West&apos;s best-known landmarks, surrounded by busy markets, heritage buildings and some of Mumbai&apos;s most active commercial streets. An <strong className="text-emerald-600">outright property sale near Kabutar Khana, Dadar West</strong> gives you a rare chance to own a high-visibility asset in the heart of central Mumbai, with no partnership complications and full ownership from day one.
              </p>
              <p>
                At <strong>Delicacy Property</strong>, we help buyers acquire legally verified properties in Dadar West with transparent pricing, proper due diligence and complete support from site visit to registration.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Buy Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Why Choose This Location?</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Benefits of Buying Near Kabutar Khana</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Landmark Location",
                  desc: "A well-known reference point with extreme visibility and easy recognition for any business."
                },
                {
                  icon: Navigation,
                  title: "Unmatched Connectivity",
                  desc: "Near Dadar station and major highways. Accessible from every part of Mumbai."
                },
                {
                  icon: ShoppingCart,
                  title: "High Commercial Demand",
                  desc: "Constant footfall from Dadar Market and Plaza, perfect for retail and showrooms."
                },
                {
                  icon: TrendingUp,
                  title: "Scarce Supply",
                  desc: "Dadar West is fully developed. Properties here are rare and appreciate rapidly."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={FADE_UP}
                  initial="initial"
                  whileInView="whileInView"
                  className="bg-white p-8 rounded-[2rem] border border-emerald-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 mb-3">{item.title}</h4>
                  <p className="text-emerald-800/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outright vs JV Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 text-center">What is an Outright Property Sale?</h2>
            <p className="text-xl text-emerald-900/70 leading-relaxed font-medium">
              In an outright sale, ownership of the property is transferred fully to the buyer in a single transaction. There is no joint venture, revenue sharing or ongoing dependency on the seller. You get complete control to use, lease, redevelop or resell the property as you choose. This flexibility is a major advantage for investors and growing businesses.
            </p>
          </motion.div>
        </section>

        {/* Key Features Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
                alt="Urban commercial infrastructure in Mumbai"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-10 leading-tight">Key Features of <span className="text-emerald-500">Our Listings</span></h2>
              <ul className="space-y-8">
                {[
                  { title: "Clear Title & Verification", desc: "Every property is strictly checked for ownership, title history, and NOCs before being listed." },
                  { title: "Prime Strategic Locations", desc: "Properties located close to Dadar station, Dadar Market, and major arterial roads." },
                  { title: "Versatile Use Cases", desc: "Suitable for retail shops, showrooms, corporate offices, clinics, or residential use." },
                  { title: "Flexible Budget Options", desc: "A range of property sizes and types to match diverse investment goals and budgets." }
                ].map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-950 mb-2">{feature.title}</h4>
                      <p className="text-emerald-800/60 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-24 bg-emerald-950 text-white rounded-[3rem] md:rounded-[6rem] mx-6 mb-32 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-400 mb-6">Area Highlights</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Location Advantages of Dadar West</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Connectivity</h4>
                    <p className="text-emerald-100/60 text-sm leading-relaxed">Minutes from Dadar Railway Station (W/C Lines). Direct access to Sea Link, Eastern Freeway, and Atal Setu. Quick reach to BKC and South Mumbai.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">Social Infrastructure</h4>
                    <p className="text-emerald-100/60 text-sm leading-relaxed">Surrounded by leading schools, colleges, and multi-specialty hospitals. Near Shivaji Park, Plaza Cinema, and vibrant markets.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-emerald-800">
                <Image 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                  alt="Dadar West Infrastructure"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-4">Target Segments</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Who Should Buy Property Here?</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Investors", icon: TrendingUp, desc: "Own a scarce asset with steady rental yields and high resale potential." },
              { title: "Business Owners", icon: Briefcase, desc: "Set up your office or showroom in Mumbai's most active commercial zone." },
              { title: "Developers", icon: Building2, desc: "Acquire high-potential plots for premium redevelopment projects." },
              { title: "Families", icon: Home, desc: "Own a private home in the geographical heart of central Mumbai." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-emerald-100 bg-white hover:-translate-y-2 transition-all shadow-sm hover:shadow-md text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950 mb-3">{item.title}</h4>
                <p className="text-emerald-800/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="bg-emerald-50 rounded-[4rem] p-12 md:p-20 border border-emerald-100">
            <h3 className="text-3xl md:text-5xl font-black text-emerald-950 mb-12 text-center">Our Simple Buying Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Requirement", desc: "Share your budget, property type and purpose." },
                { step: "02", title: "Shortlisting", desc: "Get curated, legally checked property options." },
                { step: "03", title: "Site Visits", desc: "Property inspections guided by our local experts." },
                { step: "04", title: "Due Diligence", desc: "Verification of title, tenancy, and approvals." },
                { step: "05", title: "Negotiation", desc: "Transparent deal structuring and documentation." },
                { step: "06", title: "Registration", desc: "Secure closing and legal handover support." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-[2rem] border border-emerald-50">
                  <span className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-4 block">{item.step}</span>
                  <h4 className="text-xl font-bold text-emerald-950 mb-2">{item.title}</h4>
                  <p className="text-emerald-800/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is property available for outright sale near Kabutar Khana?', a: 'Yes, but availability is extremely limited. Contact Delicacy Property for the latest verified options in Dadar West.' },
              { q: 'What does outright sale mean?', a: 'It means full ownership of the property is transferred to you in a single transaction, with no partnership or revenue-sharing arrangement.' },
              { q: 'Is Dadar West a good location for property investment?', a: 'Absolutely. Central location, high footfall, and limited supply make it one of Mumbai\'s strongest and most stable micro-markets.' },
              { q: 'Are the property documents legally clear?', a: 'We only list properties with verified titles. Legal due diligence is a mandatory part of our process before offering properties to clients.' }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100">
                <h5 className="text-lg font-black text-emerald-950 mb-3">{faq.q}</h5>
                <p className="text-emerald-800/70 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-24 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[120px] -z-10"></div>
          <h2 className="text-4xl md:text-7xl font-black text-emerald-950 mb-8 leading-tight">Secure Your <span className="text-emerald-500 font-light text-3xl md:text-6xl block">Asset Near Kabutar Khana</span></h2>
          <p className="text-xl text-emerald-800/60 font-bold uppercase tracking-widest mb-12">Contact Our Dadar West Desk Today</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:9004810239" className="px-12 py-6 bg-emerald-500 text-white font-black text-xl rounded-full shadow-2xl shadow-emerald-500/40 hover:-translate-y-2 hover:bg-emerald-600 transition-all flex items-center justify-center gap-4">
              <Phone className="w-7 h-7" /> Call: 9004810239
            </a>
            <a href="https://wa.me/919004810239" target="_blank" className="px-12 py-6 bg-white border border-emerald-200 text-emerald-950 font-black text-xl rounded-full shadow-xl shadow-emerald-950/10 hover:-translate-y-2 hover:bg-emerald-50 transition-all flex items-center justify-center gap-4">
              <MessageCircle className="w-7 h-7 text-emerald-500" /> WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="px-6 py-32 md:px-12 max-w-7xl mx-auto border-t border-emerald-100 bg-emerald-50/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-5 group mb-12">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-emerald-500/20 bg-white p-1 shadow-sm group-hover:scale-105 transition-transform">
                <Image 
                  src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                  alt="Delicacy Property Logo"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-4xl font-black tracking-tighter text-emerald-950">
                Delicacy<span className="text-emerald-500 font-light">Property</span>
              </div>
            </Link>
            <p className="text-emerald-800/50 font-medium text-xl max-w-md leading-relaxed mb-12">
              Expert real estate consultancy for outright property sales near Kabutar Khana, building investments, and strategic transactions across Mumbai.
            </p>
          </div>
          
          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-10 uppercase tracking-[0.3em]">Directory</h6>
            <ul className="space-y-6">
              <li><Link href="/" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Home</Link></li>
              <li><Link href="/outright-building-sale-in-dadar" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Outright Sale Dadar</Link></li>
              <li><Link href="/full-building-purchase-in-dadar" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Full Building Purchase</Link></li>
              <li><Link href="/outright-property-sale-near-kabutar-khana-dadar-west" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Kabutar Khana Property</Link></li>
              <li><Link href="/building-for-corporate-investment-in-dadar" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Corporate Investment Dadar</Link></li>
              <li><Link href="/commercial-property-for-corporate-buyers-dadar" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Corporate Buyers Dadar</Link></li>
              <li><Link href="/land-for-joint-venture-in-mumbai" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">JV Land Hub</Link></li>
              <li><Link href="/commercial-property-for-sale-in-mumbai" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Commercial Property</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-10 uppercase tracking-[0.3em]">Expertise</h6>
            <ul className="space-y-6">
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><Phone className="w-5 h-5 text-emerald-600" /> 9004810239</li>
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><MessageCircle className="w-5 h-5 text-emerald-600" /> WhatsApp</li>
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><MapPin className="w-5 h-5 text-emerald-600" /> Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 pt-16 border-t border-emerald-100 mt-20">
          <p className="text-[10px] text-emerald-500 font-black tracking-[0.4em] uppercase">
            &copy; {new Date().getFullYear()} Delicacy Property. High-Value Assets.
          </p>
          <div className="flex gap-12 text-[10px] text-emerald-400 font-black uppercase tracking-[0.4em]">
            <span className="cursor-pointer hover:text-emerald-600 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-emerald-600 transition-colors">Legal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
