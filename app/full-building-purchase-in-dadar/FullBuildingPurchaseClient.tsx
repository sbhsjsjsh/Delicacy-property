'use client';

import React, { useState } from 'react';
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
  Key,
  Layers,
  ChevronDown,
  Building
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

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

export default function FullBuildingPurchaseClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are full buildings available for purchase in Dadar?",
      answer: "Yes, but availability is very limited. Contact Delicacy Property for current verified options."
    },
    {
      question: "Is Dadar a good location to buy a full building?",
      answer: "Yes. Central connectivity, strong rental demand and redevelopment potential make Dadar one of Mumbai's strongest markets for building investment."
    },
    {
      question: "What is the price of a full building in Dadar?",
      answer: "Price depends on building age, size, location, tenancy status and redevelopment potential. Call us for the latest rates."
    },
    {
      question: "Can I redevelop the building after buying?",
      answer: "That depends on the building's status, tenant or society position and approvals. Our team verifies redevelopment feasibility before you invest."
    },
    {
      question: "Are the property documents legally clear?",
      answer: "We only list properties with verified titles. Legal due diligence is part of our process."
    },
    {
      question: "Can I book a site visit?",
      answer: "Yes. Call or WhatsApp us on +91-9004810239 to schedule a free site visit."
    }
  ];

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
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1920"
              alt="Dadar Mumbai Full Building Acquisition"
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
                <Key className="w-3 h-3" /> Full Asset Control
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Full Building Purchase in <span className="text-emerald-500">Dadar, Mumbai</span>
              </h1>
              <p className="text-lg md:text-2xl text-emerald-800/70 font-medium leading-relaxed mb-12 max-w-xl">
                Verified buildings for investment, redevelopment, and own use. Secure complete control over your Mumbai real estate portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:9004810239" className="px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" /> Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="px-10 py-5 bg-white border-2 border-emerald-200 text-emerald-600 font-black uppercase tracking-widest text-sm rounded-full hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/5">
                  <MessageCircle className="w-5 h-5" /> Book a Site Visit
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Full building sale in Dadar"
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
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight">Verified Buildings for Investment, Redevelopment & Own Use</h2>
            <div className="space-y-6 text-xl text-emerald-900/80 leading-relaxed font-medium">
              <p>
                Owning an entire building in Dadar is one of the strongest real estate moves you can make in Mumbai. A <strong className="text-emerald-600">full building purchase in Dadar</strong> gives you complete control over the asset: every floor, every unit and every opportunity for rental income, redevelopment or resale, in the most connected location in the city.
              </p>
              <p>
                At <strong>Delicacy Property</strong>, we help investors, developers, corporates and families acquire legally verified buildings in Dadar with transparent pricing, proper due diligence and complete support from site visit to registration.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Buy Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Strategic Ownership</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Buy a Full Building in Dadar?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Key,
                  title: "Complete Control",
                  desc: "Decide how to use, lease, redevelop, or sell the structure without dependency on other unit owners."
                },
                {
                  icon: Navigation,
                  title: "Central Hub",
                  desc: "Unmatched connectivity at the Western and Central railway meeting point, serving all of Mumbai."
                },
                {
                  icon: TrendingUp,
                  title: "Steady Rental Income",
                  desc: "Constant demand from commercial and residential tenants ensures occupancy and stable cash flow."
                },
                {
                  icon: Layers,
                  title: "Redevelopment Upside",
                  desc: "Older structures offer massive value through modern redevelopment and higher FSI utilization."
                },
                {
                  icon: ShieldCheck,
                  title: "Verified Titles",
                  desc: "Every listing is legally vetted for clear titles, NOCs, and OC status for your peace of mind."
                },
                {
                  icon: Building2,
                  title: "Scarce Supply",
                  desc: "Entire buildings rarely come to market in fully developed Dadar, supporting long-term value."
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Prime commercial and residential buildings in Dadar"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-10 leading-tight">Key Features of <span className="text-emerald-500">Our Building Options</span></h2>
              <ul className="space-y-8">
                {[
                  { title: "Clear Title & Legal Verification", desc: "Checks for ownership, tenancy, society position, and all necessary approvals (NOC, OC)." },
                  { title: "Prime Locations", desc: "Properties near Dadar station, Shivaji Park, Dadar TT, and major commercial corridors." },
                  { title: "Multiple Building Types", desc: "Residential, commercial, mixed-use, or redevelopment-ready assets to suit your strategy." },
                  { title: "Flexible Configuration", desc: "Options ranging from small plots to large multi-floor standalone buildings." }
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
                <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-400 mb-8">Location Highlights</h2>
                <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Strategic Advantage <br/> of <span className="text-emerald-400">Dadar</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2"><Navigation className="w-5 h-5" /> Connectivity</h4>
                    <p className="text-emerald-100/60 text-sm">Direct access to WEH, EEH, Atal Setu, and Bandra-Worli Sea Link. Primary rail junction for all Mumbai lines.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2"><Building2 className="w-5 h-5" /> Infrastructure</h4>
                    <p className="text-emerald-100/60 text-sm">Rich social ecosystem with Shivaji Park, top hospitals, banks, and iconic markets within walking distance.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border-4 border-emerald-800">
                <Image 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                  alt="Dadar Transit Hub Infrastructure"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-16">Who Should Buy a Full Building?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Investors", desc: "For steady rental income and high-value capital appreciation." },
              { title: "Developers", desc: "For redevelopment projects in a proven high-demand market." },
              { title: "Corporates", desc: "For dedicated headquarters and brand presence in central Mumbai." },
              { title: "Family Offices", desc: "For stable, tangible, and scarce high-value assets." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex flex-col items-center">
                <h4 className="text-2xl font-bold text-emerald-950 mb-4">{item.title}</h4>
                <p className="text-emerald-800/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buying vs Units Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8">Building vs. Individual Units</h2>
            <p className="text-xl text-emerald-900/70 leading-relaxed font-medium">
              Buying units one by one gives you limited control and limited upside. A full building lets you control leasing, upgrades and redevelopment decisions without depending on other owners. It also gives you the land component, which is where long-term value in Dadar is created.
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="bg-emerald-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="max-w-3xl mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-400 mb-6">Purchase Journey</h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">Our Simple, Transparent Buying Process</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Requirement", desc: "Share your budget, building type and purpose." },
                { step: "02", title: "Shortlisting", desc: "We curate legally checked building options." },
                { step: "03", title: "Site Visits", desc: "Property inspections guided by experts." },
                { step: "04", title: "Due Diligence", desc: "Verification of title, tenancy, and approvals." },
                { step: "05", title: "Negotiation", desc: "Transparent deal structuring and paperwork." },
                { step: "06", title: "Registration", desc: "Smooth closing and official handover." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-emerald-400 text-xs font-black mb-4 block uppercase">{item.step}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-emerald-100/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950">Expert Insights & FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-emerald-100 rounded-[1.5rem] overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between bg-white hover:bg-emerald-50/50 transition-colors"
                >
                  <span className="font-bold text-emerald-950 text-lg">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 text-emerald-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-emerald-800/70 text-base leading-relaxed border-t border-emerald-50 pt-6 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="bg-emerald-500 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-400 opacity-50" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-7xl font-black mb-10 leading-tight">Secure a High-Value <br/><span className="text-emerald-950 font-light">Asset in the Heart of Mumbai</span></h2>
              <p className="text-xl md:text-2xl text-emerald-50/80 mb-16 font-medium leading-relaxed">
                Full buildings in Dadar are a rare commodity. Speak to our expert now to secure your next major real estate acquisition.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="tel:9004810239" className="w-full sm:w-auto px-12 py-6 bg-white text-emerald-600 font-black uppercase tracking-widest rounded-full shadow-2xl hover:scale-105 transition-all text-center">
                  <Phone className="w-6 h-6 inline mr-3" /> Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="w-full sm:w-auto px-12 py-6 bg-emerald-950 text-white font-black uppercase tracking-widest rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6 text-emerald-500" /> WhatsApp Us
                </a>
              </div>
            </div>
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
              Expert real estate consultancy for full building acquisitions, redevelopment, and strategic land transactions across Mumbai.
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
