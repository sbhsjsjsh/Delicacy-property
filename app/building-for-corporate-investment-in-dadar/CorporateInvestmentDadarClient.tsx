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
  Briefcase,
  Gem,
  BarChart3,
  Globe
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

export default function CorporateInvestmentDadarClient() {
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
              alt="Dadar Mumbai Corporate Skyline"
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
                <Briefcase className="w-3 h-3" /> Institutional Real Estate
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Building for <span className="text-emerald-500">Corporate Investment</span> in Dadar, Mumbai
              </h1>
              <p className="text-lg md:text-2xl text-emerald-800/70 font-medium leading-relaxed mb-12 max-w-xl">
                Verified commercial buildings for companies and institutional investors in the heart of Mumbai. High visibility, steady yield, and long-term appreciation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:9004810239" className="px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" /> Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="px-10 py-5 bg-white border-2 border-emerald-200 text-emerald-600 font-black uppercase tracking-widest text-sm rounded-full hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/5">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Enquiry
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Corporate building in Dadar Mumbai"
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
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight">Verified Commercial Buildings for Companies & Institutional Investors</h2>
            <div className="space-y-6 text-xl text-emerald-900/80 leading-relaxed font-medium">
              <p>
                For companies and institutional investors, real estate is more than an expense. It is a long-term asset. A <strong className="text-emerald-600">building for corporate investment in Dadar</strong> gives your business a high-visibility address, steady rental income and strong appreciation in the most connected location in Mumbai.
              </p>
              <p>
                At <strong>Delicacy Property</strong>, we help corporates, family offices and investment groups acquire legally verified buildings in Dadar with transparent pricing, proper due diligence and complete support from site visit to registration.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Dadar */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Investment Rationale</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Choose Dadar for Corporate Real Estate Investment?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Unmatched Connectivity",
                  desc: "Only station where Western & Central lines meet. Easy access for employees and clients from across Mumbai."
                },
                {
                  icon: Gem,
                  title: "Strategic Proximity",
                  desc: "Quick reach to Lower Parel, Worli, BKC, and Nariman Point. A high-value alternative to costlier hubs."
                },
                {
                  icon: TrendingUp,
                  title: "Stable Lease Demand",
                  desc: "Offices, banks, and retail brands ensure high occupancy and consistent rental income."
                },
                {
                  icon: ShieldCheck,
                  title: "Capital Appreciation",
                  desc: "Dadar is fully developed. Scarce supply of commercial buildings supports long-term value growth."
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

        {/* Key Features */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
                alt="Modern corporate infrastructure"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-10 leading-tight">Key Features of <span className="text-emerald-500">Corporate Assets</span></h2>
              <ul className="space-y-8">
                {[
                  { title: "Clear Title & Due Diligence", desc: "Every building is checked for ownership, title, tenancy status, NOCs, and OC before listing." },
                  { title: "Prime Commercial Exposure", desc: "Locations near Dadar station, Dadar TT, and Tilak Bridge for maximum footfall and visibility." },
                  { title: "Flexible Use Cases", desc: "Suitable for HQ, branch offices, mixed-use assets, or redevelopment-ready buildings." },
                  { title: "Investment Scalability", desc: "Options available for mid-size firms, large corporates, and family offices." }
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

        {/* Location Section */}
        <section className="py-24 bg-emerald-950 text-white rounded-[4rem] mx-6 mb-32 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-400 mb-8">Central Hub</h2>
                <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Dadar: The <span className="text-emerald-400">Heart</span> of Mumbai</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Transit Proximity</h4>
                      <p className="text-emerald-100/60 text-sm">Direct access to Eastern Freeway, Sea Link, and major arterial roads.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Social Infrastructure</h4>
                      <p className="text-emerald-100/60 text-sm">Banks, leading schools, hospitals, Shivaji Park, and Shivaji Mandir.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-emerald-800">
                <Image 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                  alt="Dadar Transit and Business Hub"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Buying vs Renting Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8">Own vs Rent: The Strategic Choice</h2>
            <p className="text-xl text-emerald-900/70 leading-relaxed font-medium">
              Rent is a recurring cost that never builds equity. Owning a building in Dadar gives you control over your workspace, protection from rising rents and the option to lease out additional floors for income. Over time, the combination of rental yield and land appreciation can deliver far stronger returns than renting.
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="bg-emerald-50 rounded-[4rem] p-12 md:p-20 border border-emerald-100">
            <h3 className="text-3xl md:text-5xl font-black text-emerald-950 mb-12 text-center">Transparent Acquisition Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Requirement", desc: "Budget, building size, and usage goals." },
                { step: "02", title: "Shortlisting", desc: "Curating legally checked options." },
                { step: "03", title: "Site Visits", desc: "Property inspections with experts." },
                { step: "04", title: "Due Diligence", desc: "Title search, tenancy, and NOC verification." },
                { step: "05", title: "Negotiation", desc: "Transparent deal structuring." },
                { step: "06", title: "Registration", desc: "Secure closing and handover support." }
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
              { q: 'Are buildings available for corporate investment in Dadar?', a: 'Yes, but availability is limited. Contact Delicacy Property for current verified options.' },
              { q: 'Is Dadar a good location for a corporate office building?', a: 'Yes. Central connectivity, proximity to major business districts and strong demand make Dadar an excellent choice.' },
              { q: 'Can I lease out part of the building after buying?', a: 'Generally yes, subject to the building\'s approvals and tenancy position. Our team verifies this before you invest.' },
              { q: 'Are the property documents legally clear?', a: 'We only list properties with verified titles. Legal due diligence is part of our process.' }
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
          <h2 className="text-4xl md:text-7xl font-black text-emerald-950 mb-8 leading-tight">Secure Your <span className="text-emerald-500 font-light text-3xl md:text-6xl block">Corporate Landmark</span></h2>
          <p className="text-xl text-emerald-800/60 font-bold uppercase tracking-widest mb-12">Contact Our Corporate Desk Today</p>
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

      <footer className="px-6 py-20 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-emerald-200">
              <Image 
                src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                alt="Delicacy Property Logo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-bold text-emerald-950 tracking-tighter">Delicacy<span className="text-emerald-500 font-light">Property</span></span>
          </div>
          <p className="text-emerald-800/50 font-bold uppercase tracking-widest text-xs">
            &copy; {new Date().getFullYear()} Delicacy Property. Mumbai&apos;s Commercial Specialists.
          </p>
        </div>
      </footer>
    </div>
  );
}
