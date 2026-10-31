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
  ChevronDown,
  LayoutGrid
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

export default function DahisarDevelopersClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are there large land parcels suitable for townships in Dahisar?",
      answer: "Yes, Dahisar still has contiguous land parcels available that are ideal for large-scale township projects or multi-tower residential developments."
    },
    {
      question: "What makes Dahisar attractive for developers right now?",
      answer: "The scarcity of large land in Mumbai, combined with the new Metro Line 2A & 7 connectivity and the Coastal Road extension, makes Dahisar a prime growth corridor."
    },
    {
      question: "Can Delicacy Property help with legal due diligence?",
      answer: "Absolutely. We specialize in verified, clear-title land. We provide complete support for title searches, NOC verification, and land use compliance."
    },
    {
      question: "What is the typical size of land available for developers?",
      answer: "We handle land parcels starting from a few acres up to significantly larger contiguous tracts suitable for major developments."
    },
    {
      question: "Are there joint venture opportunities available?",
      answer: "Yes, we facilitate both outright acquisitions and Joint Venture (JV) arrangements between landowners and developers."
    },
    {
      question: "How can I schedule a site visit or meeting?",
      answer: "You can call us directly at +91-9004810239 or WhatsApp us to schedule a site visit or a consultation with our experts."
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
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6">
                <LayoutGrid className="w-3 h-3" /> For Builders & Developers
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-emerald-950 leading-[1.1] mb-6">
                Large Land Acquisition for <span className="text-emerald-500">Developers in Dahisar</span>
              </h1>
              <p className="text-lg text-emerald-800/70 font-medium leading-relaxed mb-8 max-w-xl">
                Verified, clear-title land parcels for large-scale residential and commercial projects. Secure your next landmark development with Delicacy Property.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:9004810239" className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="px-8 py-4 bg-white border-2 border-emerald-100 text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Schedule Site Visit
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <Image 
                src="https://picsum.photos/seed/developer-land/1200/1200"
                alt="Large Land Acquisition for Developers in Dahisar"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl font-black text-emerald-950 mb-8">Scale Your Development in Dahisar</h2>
            <p className="text-xl text-emerald-900 leading-relaxed font-medium">
              Large, development-ready land is getting scarce in Mumbai, and Dahisar is one of the few Western suburb locations where big parcels are still available. For builders and developers, <strong className="text-emerald-600">large land acquisition in Dahisar</strong> is a chance to launch high-value residential and commercial projects in a market with strong demand and rising infrastructure.
            </p>
            <p className="mt-6 text-emerald-800/60 leading-relaxed">
              At <strong>Delicacy Property</strong>, we help developers acquire legally verified large land parcels in Dahisar with transparent pricing, proper due diligence and complete support from site visit to registration.
            </p>
          </motion.div>
        </section>

        {/* Why Acquire Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Developer Advantage</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Acquire Large Land in Dahisar?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: LayoutGrid,
                  title: "Rare Large Scale",
                  desc: "Contiguous land parcels are disappearing. Dahisar still offers scale for township and multi-tower projects."
                },
                {
                  icon: Zap,
                  title: "Infrastructure Growth",
                  desc: "Metro 2A/7 and Coastal Road extension are creating massive catchment demand."
                },
                {
                  icon: TrendingUp,
                  title: "Strong Absorption",
                  desc: "Dahisar sees consistent residential and commercial sales due to its balance of price and connectivity."
                },
                {
                  icon: UserCheck,
                  title: "Clear Title Verification",
                  desc: "We focus on legally vetted land to ensure your project launches without document-related delays."
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

        {/* Services for Developers */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-[3rem] overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/developer-services/800/800"
                alt="Services for Real Estate Developers"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-10 leading-tight">Expert Support for <br/><span className="text-emerald-500">Large Acquisitions</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Strategic Land Sourcing", desc: "Finding contiguous parcels that meet your FSI and project requirements." },
                  { title: "Aggregated Title Search", desc: "Verifying multiple small plots into a single, clean-title contiguous block." },
                  { title: "Joint Venture Structuring", desc: "Mediating between landowners and developers for balanced JV terms." },
                  { title: "Liaison Assistance", desc: "Helping you understand land use, zoning, and local development norms." }
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

        {/* Location Advantage */}
        <section className="py-24 bg-emerald-950 text-white rounded-[3rem] md:rounded-[6rem] mx-6 mb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <MapPin className="w-full h-full" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-2xl mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-400 mb-6">Market Potential</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Strategic Value of Dahisar</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
                  <Navigation className="w-6 h-6" /> Unbeatable Connectivity
                </h4>
                <ul className="space-y-4">
                  {[
                    "Direct access to Metro Line 2A & 7 connecting to entire Mumbai",
                    "Minutes from Western Express Highway for north-south transit",
                    "Close to Dahisar and Borivali Railway Stations",
                    "Upcoming Coastal Road extension to improve travel times",
                    "Connectivity to Link Road and S.V. Road"
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
                  <Building2 className="w-6 h-6" /> Ready Catchment
                </h4>
                <ul className="space-y-4">
                  {[
                    "Established middle and upper-middle-class residential hub",
                    "Strong demand for high-quality gated communities",
                    "Proximity to commercial hubs in Borivali and Malad",
                    "Green surroundings with Sanjay Gandhi National Park access",
                    "Mature social infra (schools, hospitals, malls)"
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

        {/* Process Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="bg-emerald-50 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16">
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Acquisition Flow</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950 leading-tight">Streamlined Developer Support</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Mandate Share", desc: "Share your land size and FSI needs" },
                { step: "02", title: "Feasibility Review", desc: "We shortlist plots with zoning checks" },
                { step: "03", title: "Site Inspection", desc: "Detailed visit and landmark analysis" },
                { step: "04", title: "Title Due Diligence", desc: "Rigorous legal vetting of documents" },
                { step: "05", title: "Transaction", desc: "Closing, registration, and handover" }
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
            <h2 className="text-3xl font-bold text-emerald-950">Developer Queries & FAQs</h2>
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
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Launch Your Next Landmark in Dahisar</h2>
              <p className="text-lg md:text-xl text-emerald-50/80 mb-12 font-medium">
                Connect with our large land specialists today. Whether it&apos;s a township, luxury residential project, or commercial complex, we have the verified inventory you need.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="tel:9004810239" className="w-full sm:w-auto px-10 py-5 bg-white text-emerald-600 font-bold uppercase rounded-full shadow-xl hover:scale-105 transition-all text-center">
                  Call: +91-9004810239
                </a>
                <a href="https://wa.me/919004810239" className="w-full sm:w-auto px-10 py-5 bg-emerald-950 text-white font-bold uppercase rounded-full shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Developer Team
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
