'use client';

import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Maximize2, 
  Scale, 
  Handshake, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowLeft,
  Building,
  TrendingUp,
  ShieldCheck
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

export default function JVLandPowaiClient() {
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
          <a href="tel:9004810239" className="flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            <Phone className="w-4 h-4" /> 9004810239
          </a>
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
        <section className="relative px-6 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image 
              src="https://images.unsplash.com/photo-1566933267062-4264667a4804?auto=format&fit=crop&q=80&w=1920"
              alt="Powai Lake and Hiranandani Skyline Premium View"
              fill
              className="object-cover opacity-15 grayscale"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          </div>

          <motion.div {...STAGGER} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Premium JV Opportunity
              </motion.div>
              <motion.h1 variants={FADE_UP} className="text-4xl md:text-7xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Strategic 28-Acre JV Land in <span className="text-emerald-500">Powai, Mumbai</span>
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-lg md:text-2xl text-emerald-800/80 font-medium leading-relaxed mb-12">
                A rare, massive land parcel located near the prestigious Hiranandani micro-market. Perfect for iconic residential or mixed-use redevelopment by Tier-1 developers.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="grid grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-[2rem] bg-emerald-50 border border-emerald-100 shadow-sm">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Land Area</p>
                  <p className="text-3xl font-black text-emerald-950">28 Acres</p>
                </div>
                <div className="p-6 rounded-[2rem] bg-emerald-50 border border-emerald-100 shadow-sm">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Proposed Ratio</p>
                  <p className="text-3xl font-black text-emerald-950">60:40 JV</p>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-6">
                <a href="tel:9004810239" className="flex items-center justify-center gap-4 px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1.5 transition-all">
                  <Phone className="w-6 h-6" /> Call Now
                </a>
                <a href="https://wa.me/919004810239" className="flex items-center justify-center gap-4 px-10 py-5 bg-white border-2 border-emerald-200 text-emerald-700 font-black uppercase tracking-widest text-sm rounded-full hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-500/5">
                  <MessageCircle className="w-6 h-6" /> WhatsApp Enquiry
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative h-[400px] md:h-[650px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <Image 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000"
                alt="Aerial view of massive land parcel for JV development in Mumbai"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
            </motion.div>
          </motion.div>
        </section>

        {/* Property Introduction */}
        <section className="px-6 py-20 bg-emerald-50/50 border-y border-emerald-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-8 text-center">Unveiling Mumbai&apos;s Most Coveted Development Parcel</h2>
            <div className="prose prose-emerald lg:prose-xl max-w-none text-emerald-800 font-medium leading-relaxed">
              <p>
                Delicacy Property presents an unprecedented Joint Venture (JV) opportunity for a sprawling 28-acre land parcel situated in the heart of Powai, Mumbai. Located in close proximity to the ultra-premium Hiranandani Gardens, this site represents one of the largest remaining contiguous land blocks in the eastern suburbs.
              </p>
              <div className="my-12 relative h-96 w-full rounded-[3rem] overflow-hidden shadow-xl border border-emerald-100">
                <Image 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
                  alt="Strategic Land Development Concept"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p>
                The property offers a perfect canvas for a landmark integrated township or a high-density luxury residential development. With the proposed 60:40 Joint Venture ratio, this deal is structured to align the interests of the landowner and the developer, fostering a partnership built on transparency and massive scale.
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-4">Investment Overview</h2>
            <h3 className="text-4xl md:text-5xl font-black text-emerald-950">Property Highlights</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" className="p-10 rounded-[2.5rem] bg-white border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-200/40 transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Maximize2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-black mb-4">Scale</h4>
              <p className="text-emerald-800/70 font-medium">28 Acres of prime land, providing immense flexibility for phased master-planning and township development.</p>
            </motion.div>
            
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" className="p-10 rounded-[2.5rem] bg-white border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-200/40 transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Scale className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-black mb-4">Proposed Terms</h4>
              <p className="text-emerald-800/70 font-medium">Structured as a 60:40 Joint Venture with a Refundable/Adjustable Security Deposit of ₹50 Crore.</p>
            </motion.div>

            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" className="p-10 rounded-[2.5rem] bg-white border border-emerald-100 shadow-sm hover:shadow-xl hover:shadow-emerald-200/40 transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Handshake className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-2xl font-black mb-4">Development</h4>
              <p className="text-emerald-800/70 font-medium">Clear title ownership and preferred transaction mode through institutional Joint Venture agreements.</p>
            </motion.div>
          </div>
        </section>

        {/* Location Advantages */}
        <section className="px-6 py-24 bg-emerald-950 text-white rounded-[4rem] mx-6 md:mx-12 mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-400 mb-8">Connectivity & Lifestyle</h2>
                <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Strategic Advantage of <span className="text-emerald-400 underline decoration-2 underline-offset-8">Powai</span></h3>
                <p className="text-emerald-200/60 font-medium text-lg leading-relaxed mb-12">
                  Powai has evolved from a quiet suburb to a thriving economic hub. Being adjacent to Hiranandani Gardens, this land parcel benefits from existing world-class social infrastructure.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    'Proximity to JVLR (Jogeshwari-Vikhroli Link Road)',
                    'Minutes away from Eastern Express Highway',
                    'Near upcoming Metro Line 6 connectivity',
                    'Direct access to premium healthcare & schools',
                    'Close to L&T Business Park and SEEPZ',
                    'Panoramic hill and green views'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-emerald-100/90 font-bold">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border-4 border-emerald-800 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1449156001931-8288395ec367?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Mumbai Cityscape and Connectivity Visual"
                  fill
                  className="object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Builder Audience & JV Terms */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="bg-emerald-50 p-10 md:p-16 rounded-[4rem] border border-emerald-100">
            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-8">Joint Venture Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <TrendingUp className="w-5 h-5" /> Target Audience
                </h4>
                <p className="text-emerald-800 font-medium leading-relaxed">
                  We are inviting expressions of interest exclusively from:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3 font-bold text-emerald-900"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Tier-1 Residential Developers</li>
                  <li className="flex items-center gap-3 font-bold text-emerald-900"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Institutional Real Estate Investors</li>
                  <li className="flex items-center gap-3 font-bold text-emerald-900"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Master Township Developers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <ShieldCheck className="w-5 h-5" /> Deal Parameters
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-emerald-200 pb-2">
                    <span className="text-emerald-800/60 font-bold uppercase text-xs">Proposed Ratio</span>
                    <span className="text-emerald-950 font-black">60 : 40</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-200 pb-2">
                    <span className="text-emerald-800/60 font-bold uppercase text-xs">Security Deposit</span>
                    <span className="text-emerald-950 font-black">₹50 Crore</span>
                  </div>
                  <div className="flex justify-between border-b border-emerald-200 pb-2">
                    <span className="text-emerald-800/60 font-bold uppercase text-xs">Land Title</span>
                    <span className="text-emerald-950 font-black">Clear & Marketable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { 
                q: 'What is the current legal status of the 28-acre land?', 
                a: 'The land is clear-titled and has marketable ownership. All primary documents are available for verification during the due diligence phase with serious developers.' 
              },
              { 
                q: 'Is the ₹50 Crore deposit negotiable?', 
                a: 'The ₹50 Crore security deposit is the current proposed requirement to demonstrate financial commitment and capability for a project of this magnitude. However, structured payment timelines can be discussed.' 
              },
              { 
                q: 'What kind of development is permitted on this site?', 
                a: 'The site is suitable for high-end residential towers, mixed-use commercial hubs, or a self-contained master township. Local zoning regulations (DCPR 2034) will apply to the FSI calculations.' 
              },
              { 
                q: 'Who is the direct contact for this transaction?', 
                a: 'Delicacy Property is the official consultant. You can reach the firm directly at 9004810239 for initial briefings and site visits.' 
              }
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
          <h2 className="text-4xl md:text-7xl font-black text-emerald-950 mb-8 leading-tight">Secure Your <span className="text-emerald-500">Next Landmark</span> Project.</h2>
          <p className="text-xl text-emerald-800/60 font-bold uppercase tracking-widest mb-12">Contact Delicacy Property Today</p>
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
            &copy; {new Date().getFullYear()} Delicacy Property. Mumbai&apos;s Land Specialists.
          </p>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a href="https://wa.me/919004810239" target="_blank" className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all border-4 border-white" aria-label="WhatsApp">
          <MessageCircle className="w-7 h-7" />
        </a>
        <a href="tel:9004810239" className="w-16 h-16 bg-emerald-950 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all border-4 border-white" aria-label="Call">
          <Phone className="w-7 h-7 text-emerald-400" />
        </a>
      </div>
    </div>
  );
}
