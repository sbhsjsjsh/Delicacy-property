'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  TrendingUp, 
  Zap, 
  Handshake, 
  UserCheck, 
  Navigation,
  MessageCircle,
  ChevronDown,
  LayoutGrid,
  ShieldCheck,
  Search
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

export default function DahisarWestDevelopersClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are clear-title land parcels available in Dahisar West?",
      answer: "Yes, we specialize in identifying and vetting land parcels in Dahisar West that have clear titles, proper demarcation, and no legal encumbrances."
    },
    {
      question: "What is the development potential in Dahisar West?",
      answer: "Dahisar West is experiencing a transformation due to the Coastal Road extension and Metro connectivity, making it ideal for luxury residential townships and commercial hubs."
    },
    {
      question: "Does Delicacy Property handle land aggregation?",
      answer: "Yes, we assist developers in aggregating smaller contiguous plots into larger, viable development blocks while ensuring all legal due diligence is met."
    },
    {
      question: "How do you assist with Joint Ventures in Dahisar West?",
      answer: "We facilitate transparent negotiations between landowners and developers, helping structure JV/JD agreements that protect the interests of both parties."
    },
    {
      question: "What infrastructure projects are boosting land value in Dahisar West?",
      answer: "Key drivers include the Coastal Road extension, Metro Lines 2A and 7, and the widening of major arterial roads in the West."
    },
    {
      question: "Can I get a site visit for large land parcels today?",
      answer: "Absolutely. Contact us at +91-9004810239 to schedule a free, guided site visit with our land specialists."
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
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920"
              alt="Aerial view of development land in Dahisar West Mumbai"
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
                <ShieldCheck className="w-3 h-3" /> Exclusive Developer Inventory
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Large Land Acquisition for <span className="text-emerald-500">Developers in Dahisar West</span>
              </h1>
              <p className="text-lg md:text-2xl text-emerald-800/70 font-medium leading-relaxed mb-12 max-w-xl">
                Secure high-value, clear-title land parcels in Mumbai&apos;s most promising growth frontier. Expert support for developers and institutional investors.
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
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
                alt="Large land development project in Dahisar West"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* Core Content Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight">Verified Land Parcels by Delicacy Property</h2>
            <div className="space-y-6 text-xl text-emerald-900/80 leading-relaxed font-medium">
              <p>
                Large, development-ready land is getting scarce in Mumbai, and Dahisar West is one of the few Western suburb locations where big parcels are still available. For builders and developers, <strong className="text-emerald-600 tracking-tight">large land acquisition in Dahisar West</strong> is a chance to launch high-value residential and commercial projects in a market with strong demand and rising infrastructure.
              </p>
              <p>
                At <strong>Delicacy Property</strong>, we help developers acquire legally verified large land parcels in Dahisar West with transparent pricing, proper due diligence and complete support from site visit to registration.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Dahisar West Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Strategic Advantage</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Acquire Large Land in Dahisar West?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: LayoutGrid,
                  title: "Rare Scale Availability",
                  desc: "Contiguous land parcels are disappearing across Mumbai. Dahisar West still offers scale for township-style and multi-tower projects."
                },
                {
                  icon: Zap,
                  title: "Infrastructure Surge",
                  desc: "Metro Lines 2A and 7, the Coastal Road extension, and the Link Road are boosting project demand and capital appreciation."
                },
                {
                  icon: UserCheck,
                  title: "Verified Clear Titles",
                  desc: "We focus on verified, non-litigated land to ensure a smooth transition from acquisition to project launch."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={FADE_UP}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[2.5rem] border border-emerald-100 hover:shadow-2xl transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950 mb-4">{item.title}</h4>
                  <p className="text-emerald-800/60 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
                alt="Development infrastructure and planning"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-10 leading-tight">Key Features of <span className="text-emerald-500">Dahisar West</span> Land</h2>
              <ul className="space-y-8">
                {[
                  { title: "Strategic Location", desc: "Dahisar West is the northern entry point to Mumbai, offering access to Borivali, Mira-Bhayandar, and the Western suburbs." },
                  { title: "Zoning Flexibility", desc: "Suitable for high-density residential towers, commercial complexes, or integrated township projects." },
                  { title: "Connectivity Hub", desc: "Proximity to the Western Express Highway, Metro stations, and the upcoming Coastal Road." },
                  { title: "Premium Living Potential", desc: "A preferred destination for families seeking modern lifestyle projects with green views." }
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

        {/* FAQs Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950">Expert Developer Insights</h2>
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
              <h2 className="text-3xl md:text-7xl font-black mb-10 leading-tight">Secure Your Next Big <br/><span className="text-emerald-500 font-light">Development Opportunity</span></h2>
              <p className="text-xl md:text-2xl text-emerald-100/60 mb-16 font-medium leading-relaxed">
                Contact our specialized land acquisition team for exclusive inventory in Dahisar West. We handle the complexity so you can focus on building.
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
