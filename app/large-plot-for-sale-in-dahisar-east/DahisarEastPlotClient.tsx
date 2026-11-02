'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Building2, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  TrendingUp, 
  Zap, 
  UserCheck, 
  Navigation,
  MessageCircle,
  ChevronDown,
  LayoutGrid,
  ShieldCheck,
  Search,
  Globe,
  Briefcase,
  Gem
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

export default function DahisarEastPlotClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is a large plot available for sale in Dahisar East?",
      answer: "Yes, but large plots are limited and sell quickly due to high demand for development. Contact Delicacy Property at +91-9004810239 for current verified options."
    },
    {
      question: "Is Dahisar East a good location for land investment?",
      answer: "Absolutely. With direct Western Express Highway access, Metro connectivity (Lines 2A and 7), and proximity to Sanjay Gandhi National Park, it's one of the strongest growth corridors in Mumbai's Western suburbs."
    },
    {
      question: "What is the approximate price of a large plot in Dahisar East?",
      answer: "Pricing varies based on exact location, road frontage, zoning (residential/commercial), and FSI potential. Contact us for the latest market rates and specific plot evaluations."
    },
    {
      question: "Can I build a residential or commercial project on these plots?",
      answer: "Most large plots in Dahisar East are suitable for mixed-use, residential, or commercial development. We verify the specific land use and permitted zoning before you proceed with an investment."
    },
    {
      question: "Are the plot documents legally clear?",
      answer: "Legal transparency is our priority. We only list properties with verified clear titles, confirmed ownership, and necessary NOCs. We also assist with independent legal due diligence."
    },
    {
      question: "How can I book a site visit?",
      answer: "You can schedule a free, guided site visit by calling or messaging us on WhatsApp at +91-9004810239. Our experts will accompany you and provide all necessary site details."
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
              src="https://images.unsplash.com/photo-1500382017468-9049fee78a6c?auto=format&fit=crop&q=80&w=1920"
              alt="Large plot area in Dahisar East Mumbai"
              fill
              className="object-cover opacity-20 grayscale"
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
                <ShieldCheck className="w-3 h-3" /> Verified Plot Inventory
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Large Plot for Sale in <span className="text-emerald-500">Dahisar East</span>
              </h1>
              <p className="text-lg md:text-2xl text-emerald-800/70 font-medium leading-relaxed mb-12 max-w-xl">
                Verified plots for development & investment by Delicacy Property. Secure a high-value asset in Mumbai&apos;s Western growth corridor.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:9004810239" className="px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" /> Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="px-10 py-5 bg-white border-2 border-emerald-200 text-emerald-600 font-black uppercase tracking-widest text-sm rounded-full hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/5">
                  <MessageCircle className="w-5 h-5" /> Free Site Visit
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
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
                alt="Development site in Dahisar East"
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
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight">Verified Plots for Development & Investment</h2>
            <div className="space-y-6 text-xl text-emerald-900/80 leading-relaxed font-medium">
              <p>
                Dahisar East is one of the most promising growth locations in Mumbai&apos;s Western suburbs. With metro connectivity, direct access to the Western Express Highway and steady demand from homebuyers and businesses, a <strong>large plot for sale in Dahisar East</strong> is a smart opportunity for developers, investors and business groups.
              </p>
              <p>
                At <strong>Delicacy Property</strong>, we help you buy legally verified large plots in Dahisar East with transparent pricing and complete support from site visit to registration. We also specialize in <Link href="/large-land-acquisition-for-developers-in-dahisar-west" className="text-emerald-600 hover:underline">large land acquisition in Dahisar West</Link> and general <Link href="/large-land-investment-property-in-mumbai-dahisar" className="text-emerald-600 hover:underline">land investment opportunities in Dahisar</Link>.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Buy Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Investment Rationale</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Buy a Large Plot in Dahisar East?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Navigation,
                  title: "Strong Connectivity",
                  desc: "Direct access to Western Express Highway, Dahisar Metro (Lines 2A & 7), and the railway station."
                },
                {
                  icon: LayoutGrid,
                  title: "Rare Large Scale",
                  desc: "Contiguous plots are becoming scarce. Dahisar East still offers scale for multi-tower developments."
                },
                {
                  icon: TrendingUp,
                  title: "Rising Land Value",
                  desc: "Metro expansion and highway upgrades are pushing values upward. Early buyers capture the best appreciation."
                },
                {
                  icon: Building2,
                  title: "High Demand",
                  desc: "Consistent demand for housing and commercial space supports strong sales and rental potential."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={FADE_UP}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2rem] border border-emerald-100 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 mb-3">{item.title}</h4>
                  <p className="text-emerald-800/60 leading-relaxed text-sm font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features & Uses Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-10 leading-tight">Key Features of Our <span className="text-emerald-500">Large Plots</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Clear Title", desc: "Verified ownership and title search for every plot." },
                  { title: "Legal Verification", desc: "Confirmed NOCs, land use, and necessary approvals." },
                  { title: "Prime Location", desc: "Immediate access to Western Express Highway." },
                  { title: "Multiple Uses", desc: "Ideal for Residential, Commercial, or Mixed-use." },
                  { title: "Flexible Sizes", desc: "Options ranging from mid-size to very large parcels." },
                  { title: "Road Access", desc: "Strategic arterial road connectivity for all plots." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-950 mb-1">{feature.title}</h4>
                      <p className="text-emerald-800/60 text-sm font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Urban development potential"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Location Advantages */}
        <section className="py-24 bg-emerald-900 text-white rounded-[3rem] md:rounded-[6rem] mx-6 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">Location Advantages of Dahisar East</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Unmatched Connectivity</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-emerald-100/70 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Dahisar Railway Station</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Metro Lines 2A & 7</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Western Express Highway</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Quick Airport Access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Social Infrastructure</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-emerald-100/70 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Reputed Schools & Colleges</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Premium Hospitals</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Malls & Daily Needs</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Near National Park</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000"
                  alt="Infrastructure in Mumbai"
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950">Who Should Invest Here?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Developers", desc: "Build residential or commercial projects in a high-demand market." },
              { icon: Globe, title: "Investors", desc: "Hold a scarce, non-depreciating asset that grows with infra." },
              { icon: Building2, title: "Business Owners", desc: "Set up offices, showrooms, or institutions with highway connectivity." },
              { icon: Gem, title: "HNWIs", desc: "Diversify your portfolio with one of India's most trusted asset classes." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-emerald-50 shadow-lg shadow-emerald-900/5 hover:-translate-y-2 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 mb-3">{item.title}</h4>
                <p className="text-emerald-800/60 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-16 text-center">Simple & Secure Buying Process</h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Share Your Requirement", desc: "Let us know your budget, plot size, and intended purpose." },
                { step: "02", title: "Get Verified Options", desc: "We shortlist legally checked plots that match your criteria." },
                { step: "03", title: "Guided Site Visit", desc: "Visit the land with our expert to understand topography and potential." },
                { step: "04", title: "Legal Due Diligence", desc: "We provide title search reports, NOCs, and approval verifications." },
                { step: "05", title: "Registration & Handover", desc: "Secure closing with full documentation and registration support." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="text-4xl md:text-6xl font-black text-emerald-200 shrink-0">{item.step}</div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-bold text-emerald-950 mb-2">{item.title}</h4>
                    <p className="text-emerald-800/60 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950">Frequently Asked Questions</h2>
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

        {/* Final CTA Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="bg-emerald-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[150px]"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-7xl font-black mb-10 leading-tight">Secure a Large Plot in <br/><span className="text-emerald-500 font-light">Dahisar East Today</span></h2>
              <p className="text-xl md:text-2xl text-emerald-100/60 mb-16 font-medium leading-relaxed">
                Opportunities like this are rare. Speak to our Dahisar East land expert and book your site visit today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="tel:9004810239" className="w-full sm:w-auto px-12 py-6 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all text-center">
                  <Phone className="w-6 h-6 inline mr-3" /> Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="w-full sm:w-auto px-12 py-6 bg-white text-emerald-950 font-black uppercase tracking-widest rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6 text-emerald-500" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-emerald-50 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-emerald-100">
              <Image 
                src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                alt="Delicacy Property Logo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-lg font-bold text-emerald-950 tracking-tight">Delicacy<span className="text-emerald-500 font-light">Property</span></span>
          </div>
          <div className="text-xs font-black uppercase tracking-[0.3em] text-emerald-800/30">
            &copy; {new Date().getFullYear()} Delicacy Property. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-emerald-800/50 font-bold text-sm uppercase tracking-tighter">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <Link href="/large-land-acquisition-for-developers-in-dahisar" className="hover:text-emerald-600 transition-colors">Dahisar Land</Link>
            <a href="tel:9004810239" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
