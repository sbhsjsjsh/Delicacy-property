'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Landmark, 
  TrendingUp, 
  Zap, 
  Search, 
  Handshake, 
  UserCheck, 
  Navigation,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function DahisarClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is large land available for investment in Dahisar, Mumbai?",
      answer: "Yes, but large parcels are limited and sell quickly. Contact Delicacy Property for current verified options."
    },
    {
      question: "Is Dahisar a good location for land investment?",
      answer: "Yes. Metro connectivity, highway access and growing demand make Dahisar one of the strongest growth areas in the Western suburbs."
    },
    {
      question: "What is the price of large land in Dahisar?",
      answer: "Price depends on location, size, zoning, road access and development potential. Call us for the latest rates."
    },
    {
      question: "Can I build a residential or commercial project on this land?",
      answer: "That depends on land use, zoning and approvals. We verify permitted use before you invest."
    },
    {
      question: "Are the land documents legally clear?",
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
              alt="Golden hour view of Mumbai urban development land"
              fill
              className="object-cover opacity-15 grayscale"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <TrendingUp className="w-3 h-3" /> High Appreciation Potential
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Large Land Investment Property in <span className="text-emerald-500">Mumbai Dahisar</span>
              </h1>
              <p className="text-lg md:text-2xl text-emerald-800/70 font-medium leading-relaxed mb-12 max-w-xl">
                Verified land parcels by Delicacy Property. Dahisar is one of the last growth frontiers of Mumbai&apos;s Western suburbs. Legally verified, clear-title land parcels with transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:9004810239" className="px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" /> Call Now: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="px-10 py-5 bg-white border-2 border-emerald-200 text-emerald-600 font-black uppercase tracking-widest text-sm rounded-full hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/5">
                  <MessageCircle className="w-5 h-5" /> Book a Free Site Visit
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
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
                alt="Large Land Development Opportunity in Mumbai Dahisar"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-32">
          <motion.p variants={FADE_UP} initial="initial" whileInView="whileInView" className="text-xl text-emerald-900 leading-relaxed font-medium">
            Dahisar is one of the last growth frontiers of Mumbai&apos;s Western suburbs. With metro connectivity, the Coastal Road extension, the Western Express Highway and strong demand from homebuyers, a <strong className="text-emerald-600">large land investment property in Mumbai Dahisar</strong> is a smart way to build long-term wealth.
          </motion.p>
          <motion.p variants={FADE_UP} initial="initial" whileInView="whileInView" className="mt-6 text-emerald-800/60 leading-relaxed">
            At <strong>Delicacy Property</strong>, we help investors, developers and business groups buy legally verified land in Dahisar with transparent pricing and complete support from site visit to registration. We also provide specialized services for <Link href="/large-land-acquisition-for-developers-in-dahisar" className="text-emerald-600 hover:underline">developers looking for large land in Dahisar</Link>, including <Link href="/large-land-acquisition-for-developers-in-dahisar-west" className="text-emerald-600 hover:underline">Dahisar West acquisitions</Link> and <Link href="/large-plot-for-sale-in-dahisar-east" className="text-emerald-600 hover:underline">plots in Dahisar East</Link>.
          </motion.p>
        </section>

        {/* Why Invest Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Investment Rationale</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Invest in Large Land in Dahisar?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Navigation,
                  title: "Gateway of Western Suburbs",
                  desc: "Northern entry point to Mumbai, with quick access to Borivali, Mira-Bhayandar, and Vasai-Virar."
                },
                {
                  icon: Zap,
                  title: "Infrastructure Boost",
                  desc: "Metro Lines 2A & 7, Coastal Road extension, and WEH are pushing land values higher."
                },
                {
                  icon: Search,
                  title: "Rare Large Parcels",
                  desc: "Big contiguous land parcels in city limits are disappearing. Dahisar still offers scale."
                },
                {
                  icon: TrendingUp,
                  title: "Strong Returns",
                  desc: "Build residential towers, commercial complexes or hold for high future appreciation."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={FADE_UP}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-emerald-100 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 mb-3">{item.title}</h4>
                  <p className="text-emerald-800/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-[3rem] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800"
                alt="Architectural Planning and Land Development Visualization"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-10 leading-tight">Key Features of Our <br/><span className="text-emerald-500">Land Properties</span> in Dahisar</h2>
              <div className="space-y-8">
                {[
                  { title: "Clear Title & Legal Verification", desc: "Every property is checked for ownership, title, NOCs, land use and approvals." },
                  { title: "Strategic Road Access", desc: "Parcels are close to highways, metro stations, and railway corridors." },
                  { title: "Suitable for Multiple Uses", desc: "Residential, commercial, warehousing, or mixed-use development." },
                  { title: "Flexible Sizes", desc: "Options from mid-size plots to large parcels based on project goals." }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-950 mb-1">{feature.title}</h4>
                      <p className="text-emerald-800/60 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 bg-emerald-950 text-white rounded-[3rem] md:rounded-[6rem] mx-6 mb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <MapPin className="w-full h-full" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-400 mb-6">Location Benefits</h2>
                <h3 className="text-3xl md:text-5xl font-bold">Location Advantages of Dahisar</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
                  <Navigation className="w-6 h-6" /> Excellent Connectivity
                </h4>
                <ul className="space-y-4">
                  {[
                    "Dahisar Railway Station (Western line)",
                    "Dahisar Metro stations (Lines 2A and 7)",
                    "Western Express Highway and Link Road",
                    "Easy access to Borivali, Kandivali, Mira Road",
                    "Quick reach to Airport and Mumbai-Ahmedabad Highway"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-emerald-100/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
                  <Building2 className="w-6 h-6" /> Social Infrastructure
                </h4>
                <ul className="space-y-4">
                  {[
                    "Reputed schools and colleges",
                    "Hospitals and healthcare centres",
                    "Malls, markets and entertainment hubs",
                    "Banks, offices and daily-needs retail",
                    "Sanjay Gandhi National Park nearby"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-emerald-100/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950">Who Should Invest?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Real Estate Developers", icon: Building2, desc: "Acquire land for residential towers and commercial projects in a high-demand micro-market." },
              { title: "Investors & Land Bankers", icon: Landmark, desc: "Hold a scarce, non-depreciating asset that grows as infrastructure develops." },
              { title: "Business Groups", icon: Handshake, desc: "Set up warehouses, offices or institutions with strong connectivity." },
              { title: "HNIs & Families", icon: UserCheck, desc: "Diversify your portfolio with land, one of the most stable and trusted asset classes." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-emerald-100 bg-emerald-50/30 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white text-emerald-500 flex items-center justify-center mb-6 shadow-sm">
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
          <div className="bg-emerald-50 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16">
            <div className="max-w-3xl mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Our Methodology</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950 leading-tight">Simple, Transparent, Secure Investment Process</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Share Requirement", desc: "Budget, land size and purpose" },
                { step: "02", title: "Get Verified Options", desc: "Legally checked land parcels" },
                { step: "03", title: "Site Visit", desc: "Visit property with our expert" },
                { step: "04", title: "Due Diligence", desc: "Title search and NOC verification" },
                { step: "05", title: "Registration", desc: "Smooth, secure closing support" }
              ].map((item, i) => (
                <div key={i} className="relative p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                  <span className="text-emerald-500 text-xs font-black mb-4 block">{item.step}</span>
                  <h4 className="text-base font-bold text-emerald-950 mb-2">{item.title}</h4>
                  <p className="text-emerald-800/60 text-xs leading-relaxed">{item.desc}</p>
                  {i < 4 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-emerald-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-emerald-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-emerald-50/50 transition-colors"
                >
                  <span className="font-bold text-emerald-950">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-emerald-800/70 text-sm leading-relaxed border-t border-emerald-50 pt-4">
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
          <div className="bg-emerald-500 rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-400" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Invest in Large Land in Dahisar with Delicacy Property</h2>
              <p className="text-lg md:text-xl text-emerald-50/80 mb-12 font-medium">
                Prime land parcels in Dahisar don&apos;t stay available for long. Speak to our expert now and secure a high-value asset for your future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="tel:9004810239" className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-600 font-bold uppercase rounded-full shadow-xl hover:scale-105 transition-all text-center">
                  Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="w-full sm:w-auto px-10 py-5 bg-emerald-950 text-white font-bold uppercase rounded-full shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Expert
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-emerald-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-100">
              <Image 
                src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                alt="Delicacy Property Logo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm font-bold text-emerald-950">Delicacy<span className="text-emerald-500">Property</span></span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-emerald-800/40">
            &copy; {new Date().getFullYear()} Delicacy Property. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-emerald-800/60 font-bold text-xs uppercase tracking-tighter">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <a href="tel:9004810239" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
