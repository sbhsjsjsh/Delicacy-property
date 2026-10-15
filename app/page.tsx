'use client';

import React from 'react';
import { ArrowRight, Building2, Map, ShieldCheck, TrendingUp, Phone, MessageCircle, CheckCircle2, Users2, HelpCircle, MapPin, Handshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const STAGGER = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-emerald-950 font-sans selection:bg-emerald-200 selection:text-emerald-950 antialiased">
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-emerald-100 shadow-[0_2px_15px_rgba(16,185,129,0.05)]">
        <nav className="w-full px-6 py-4 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-emerald-400/30 bg-emerald-50 p-0.5 shadow-lg shadow-emerald-500/10 group-hover:border-emerald-500 transition-all duration-300">
              <Image 
                src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                alt="Delicacy Property Logo"
                fill
                className="object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-emerald-950 group-hover:text-emerald-700 transition-colors">
              Delicacy<span className="text-emerald-500 font-light">Property</span>
            </div>
          </div>
          <div className="flex items-center">
            <a 
              href="tel:9004810239" 
              className="flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-700 hover:text-emerald-900 transition-all bg-emerald-50 px-5 py-2.5 rounded-full border border-emerald-100 shadow-sm hover:shadow-md hover:bg-emerald-100"
            >
              <Phone className="w-4 h-4 text-emerald-500" /> <span className="hidden sm:inline">9004810239</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-40 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          
          <motion.div {...STAGGER} className="max-w-5xl flex flex-col items-center">
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Premium Real Estate Consulting Mumbai
            </motion.div>
            <motion.h1 
              variants={FADE_UP}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] sm:leading-[1.05] text-emerald-950 break-words"
            >
              Specialists in SRA &amp; <span className="text-emerald-500">Redevelopment</span> Projects.
            </motion.h1>
            <motion.p 
              variants={FADE_UP}
              className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-emerald-800/80 max-w-3xl font-medium leading-relaxed mx-auto"
            >
              Delicacy Property is your trusted partner for high-stakes real estate transitions in Mumbai. We specialize in SRA consulting, building redevelopment, and strategic land acquisitions.
            </motion.p>
            <motion.div variants={FADE_UP} className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <a 
                href="#expertise" 
                className="w-full sm:w-auto px-10 py-4 sm:px-12 sm:py-5 bg-emerald-500 text-white text-base font-bold tracking-wide uppercase rounded-full hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                View Services 
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20a%20project." 
                target="_blank"
                className="w-full sm:w-auto px-10 py-4 sm:px-12 sm:py-5 bg-white border-2 border-emerald-200 text-emerald-600 text-base font-bold tracking-wide uppercase rounded-full hover:bg-emerald-50 hover:border-emerald-400 transition-all flex items-center justify-center gap-3"
              >
                Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 py-16 border-y border-emerald-100 bg-emerald-50/30 rounded-3xl px-8 md:px-16">
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center sm:text-left">
              <h4 className="text-4xl md:text-5xl font-black text-emerald-900 mb-2">15+ Years</h4>
              <p className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Industry Experience</p>
            </motion.div>
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center sm:text-left">
              <h4 className="text-4xl md:text-5xl font-black text-emerald-900 mb-2">Mumbai Wide</h4>
              <p className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Strategic Presence</p>
            </motion.div>
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center sm:text-left">
              <h4 className="text-4xl md:text-5xl font-black text-emerald-900 mb-2">Discreet</h4>
              <p className="text-emerald-600 font-bold tracking-widest uppercase text-xs">End-to-End Privacy</p>
            </motion.div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section className="px-6 py-20 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-4">Featured Opportunities</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Active JV Projects</h3>
            </div>
            <Link href="/28-acre-jv-land-hiranandani-powai-mumbai" className="group flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800 transition-colors">
              View All Deals <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Card 1 */}
            <Link href="/28-acre-jv-land-hiranandani-powai-mumbai" className="group">
              <div className="bg-white rounded-[2.5rem] border border-emerald-100 overflow-hidden hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image 
                    src="https://picsum.photos/seed/powai/600/400" 
                    alt="28 Acre JV Land Powai"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Exclusive
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-3">
                    <MapPin className="w-3 h-3" /> Powai, Mumbai
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors">28 Acre Strategic JV Land</h4>
                  <p className="text-emerald-800/60 text-sm font-medium leading-relaxed mb-6">Massive development block near Hiranandani. Proposed 60:40 ratio with high FSI potential.</p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <div className="flex items-center justify-between pt-6 border-t border-emerald-50">
                    <span className="text-emerald-950 font-black text-lg">28 Acres</span>
                    <span className="flex items-center gap-2 text-emerald-600 text-sm font-bold">Details <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Hub Card */}
            <Link href="/land-for-joint-venture-in-mumbai" className="group">
              <div className="bg-emerald-50 rounded-[2.5rem] border border-emerald-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="p-10 flex-grow flex flex-col justify-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <Handshake className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h4 className="text-3xl font-black text-emerald-950 mb-6 group-hover:text-emerald-600 transition-colors">Mumbai JV Hub</h4>
                  <p className="text-emerald-800/60 font-medium leading-relaxed mb-8">Access our complete directory of land opportunities for Joint Venture development across Mumbai.</p>
                  <span className="inline-flex items-center gap-2 text-emerald-600 font-bold justify-center mt-auto">
                    Explore Hub <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Specialized Services */}
        <section id="expertise" className="px-6 py-24 md:py-40 md:px-12 bg-emerald-50/50 border-t border-emerald-100 rounded-t-[3rem] md:rounded-t-[6rem]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-28 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Expert Solutions</h2>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-emerald-950">Navigating Mumbai's Complex Landscape.</h3>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-emerald-800/70 font-medium text-lg max-w-sm mb-2"
              >
                From legal hurdles to architectural viability, we provide a seamless experience for developers and land owners.
              </motion.p>
            </div>
            
            <motion.div {...STAGGER} className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* SRA Consulting */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-12 rounded-[3rem] border border-emerald-100 flex flex-col items-start hover:shadow-2xl hover:shadow-emerald-200/40 transition-all group hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-emerald-500 text-white flex items-center justify-center mb-10 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Users2 className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-black mb-6 text-emerald-950 tracking-tight">SRA Projects</h4>
                <p className="text-emerald-800/70 font-medium leading-relaxed mb-8">
                  Expert guidance on Slum Rehabilitation Authority projects. We handle survey management, legal compliance, and stakeholder coordination.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Legal Vetting', 'Tenant Coordination', 'Regulatory Clearances'].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-base font-bold text-emerald-900">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Building Redevelopment */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-12 rounded-[3rem] border border-emerald-100 flex flex-col items-start hover:shadow-2xl hover:shadow-emerald-200/40 transition-all group hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-emerald-900 text-white flex items-center justify-center mb-10 shadow-lg shadow-emerald-900/20 group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-black mb-6 text-emerald-950 tracking-tight">Redevelopment</h4>
                <p className="text-emerald-800/70 font-medium leading-relaxed mb-8">
                  Transforming aging structures into modern landmarks. We bridge the gap between housing societies and premium developers.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Society Liasoning', 'PMC Services', 'Developer Selection'].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-base font-bold text-emerald-900">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Open Land & Commercial */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-12 rounded-[3rem] border border-emerald-100 flex flex-col items-start hover:shadow-2xl hover:shadow-emerald-200/40 transition-all group hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-[1.5rem] bg-emerald-50 text-emerald-600 flex items-center justify-center mb-10 shadow-lg shadow-emerald-200/20 group-hover:scale-110 transition-transform duration-500 border border-emerald-200">
                  <Map className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-black mb-6 text-emerald-950 tracking-tight">Strategic Assets</h4>
                <p className="text-emerald-800/70 font-medium leading-relaxed mb-8">
                  Identifying prime open land and commercial inventory for investors. Our data-driven approach identifies high-growth zones.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Land Surveying', 'Commercial Leasing', 'Yield Analysis'].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-base font-bold text-emerald-900">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-white text-emerald-950 py-32 md:py-48 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[150px] -z-10"></div>
          
          <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <motion.h2 variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-10 leading-tight">
                Integrity is the Foundation.
              </motion.h2>
              <motion.p variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-emerald-800 font-medium text-xl leading-relaxed mb-16">
                In a market filled with noise, Delicacy Property stands out through radical transparency and precision. We don't just find properties; we build legacies.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
                    <ShieldCheck className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h5 className="font-black text-2xl mb-3 text-emerald-950">Absolute Privacy</h5>
                  <p className="text-emerald-800/70 font-medium text-base leading-relaxed">Your high-value transactions deserve complete confidentiality at every stage.</p>
                </motion.div>
                <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
                    <TrendingUp className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h5 className="font-black text-2xl mb-3 text-emerald-950">Intelligence</h5>
                  <p className="text-emerald-800/70 font-medium text-base leading-relaxed">Leverage our deep network and proprietary data for informed decision-making.</p>
                </motion.div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative h-[600px] md:h-[700px] w-full rounded-[4rem] overflow-hidden shadow-2xl shadow-emerald-500/10 border-8 border-white">
              <Image 
                src="https://picsum.photos/seed/mumbai/800/1000"
                alt="Mumbai Architecture"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay"></div>
              <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-2xl">
                <p className="text-emerald-950 font-bold text-xl leading-relaxed mb-6 italic">"Our goal is to simplify the complex world of Mumbai real estate, one project at a time."</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 border-4 border-emerald-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-emerald-950 font-black text-base uppercase tracking-wider">Strategic Director</p>
                    <p className="text-emerald-600 text-xs font-black tracking-[0.2em] uppercase">Delicacy Property</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6 py-32 bg-emerald-950 text-white rounded-[4rem] mx-6 md:mx-12 mb-32">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-400 mb-8">Our Process</h2>
            <h3 className="text-4xl sm:text-6xl font-bold tracking-tight">How We Deliver Excellence.</h3>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and asset potential.' },
              { step: '02', title: 'Analysis', desc: 'Detailed legal and technical feasibility reports.' },
              { step: '03', title: 'Strategy', desc: 'Custom roadmaps for development or acquisition.' },
              { step: '04', title: 'Execution', desc: 'Precise management from start to final handover.' }
            ].map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="text-8xl font-black text-emerald-800/30 absolute -top-12 left-0 leading-none select-none group-hover:text-emerald-500/20 transition-colors">{p.step}</div>
                <h4 className="text-2xl font-bold text-emerald-50 mb-4 relative z-10">{p.title}</h4>
                <p className="text-emerald-200/60 font-medium text-base leading-relaxed relative z-10">{p.desc}</p>
                <div className="mt-8 w-12 h-1 bg-emerald-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 py-20 md:py-32 max-w-5xl mx-auto">
          <div className="text-center mb-20">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-8 border border-emerald-200">
               <HelpCircle className="w-8 h-8 text-emerald-600" />
             </div>
             <h3 className="text-4xl sm:text-5xl font-black text-emerald-950 mb-6">Expert Insights</h3>
             <p className="text-emerald-800/60 font-bold uppercase tracking-widest text-sm">Common inquiries about our consulting services</p>
          </div>
          
          <div className="space-y-8">
            {[
              { q: 'What is your specialty in SRA projects?', a: 'We specialize in navigating the complex regulatory framework of Slum Rehabilitation Authority, from initial surveys to final allotments.' },
              { q: 'How do you help with building redevelopment?', a: 'We act as professional mediators between housing societies and developers, ensuring legal transparency and financial security for members.' },
              { q: 'Do you handle property outside of Mumbai?', a: 'Our core focus remains the Mumbai Metropolitan Region (MMR) where our expertise and network are most powerful.' }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }}
                className="p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 transition-colors"
              >
                <h5 className="text-xl font-black text-emerald-950 mb-4">{faq.q}</h5>
                <p className="text-emerald-800/70 font-medium text-base leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA / Footer */}
        <section id="contact" className="px-6 py-32 md:py-48 md:px-12 max-w-7xl mx-auto text-center flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[120px] -z-10"></div>
          
          <motion.div {...STAGGER} className="flex flex-col items-center w-full">
            <motion.h2 variants={FADE_UP} className="text-sm font-black tracking-[0.4em] uppercase text-emerald-600 mb-10">
              Start Your Journey
            </motion.h2>
            <motion.h3 variants={FADE_UP} className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-16 max-w-5xl text-emerald-950 leading-none">
              Ready to <span className="text-emerald-500">Secure</span> Your Asset?
            </motion.h3>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
              <a 
                href="tel:9004810239" 
                className="w-full sm:w-auto px-12 py-6 bg-emerald-500 text-white text-lg font-black tracking-widest uppercase rounded-full hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-500/30 hover:-translate-y-1.5 flex items-center justify-center gap-4"
              >
                <Phone className="w-6 h-6" /> Call Now
              </a>
              <a 
                href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20real%20estate%20opportunities." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 bg-white text-emerald-950 text-lg font-black tracking-widest uppercase rounded-full hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-200/20 hover:-translate-y-1.5 flex items-center justify-center gap-4 border border-emerald-100"
              >
                <MessageCircle className="w-6 h-6 text-emerald-500" /> WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="px-6 py-24 md:px-12 max-w-7xl mx-auto border-t border-emerald-100 bg-emerald-50/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 group mb-10">
              <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-emerald-500/20 bg-white p-1 shadow-sm">
                <Image 
                  src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                  alt="Delicacy Property Logo"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-3xl font-black tracking-tighter text-emerald-950">
                Delicacy<span className="text-emerald-500 font-light">Property</span>
              </div>
            </div>
            <p className="text-emerald-800/50 font-medium text-lg max-w-sm leading-relaxed">
              Mumbai's premier real estate consultancy specializing in SRA, building redevelopment, and high-value property acquisitions. Trusted by land owners and developers alike.
            </p>
          </div>
          
          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-8 uppercase tracking-[0.2em]">Services</h6>
            <ul className="space-y-5">
              <li><Link href="/land-for-joint-venture-in-mumbai" className="text-emerald-800/40 hover:text-emerald-600 text-base font-bold transition-colors">JV Land Hub</Link></li>
              {['SRA Consulting', 'Redevelopment', 'Open Land Deals', 'Commercial Assets'].map((s) => (
                <li key={s} className="text-emerald-800/40 hover:text-emerald-600 text-base font-bold transition-colors cursor-pointer flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-8 uppercase tracking-[0.2em]">Connect</h6>
            <ul className="space-y-5">
              <li className="text-emerald-800/40 hover:text-emerald-950 text-base font-bold transition-colors cursor-pointer flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                9004810239
              </li>
              <li className="text-emerald-800/40 hover:text-emerald-950 text-base font-bold transition-colors cursor-pointer flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </div>
                WhatsApp
              </li>
              <li className="text-emerald-800/40 text-base font-bold flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Map className="w-4 h-4 text-emerald-600" />
                </div>
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-emerald-100">
          <p className="text-xs text-emerald-500 font-black tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} Delicacy Property. All rights reserved.
          </p>
          <div className="flex gap-10">
            <span className="text-xs text-emerald-400 font-black tracking-[0.2em] uppercase cursor-pointer hover:text-emerald-700 transition-colors">Privacy Policy</span>
            <span className="text-xs text-emerald-400 font-black tracking-[0.2em] uppercase cursor-pointer hover:text-emerald-700 transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20real%20estate%20opportunities."
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all active:scale-95 border-4 border-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a
          href="tel:9004810239"
          className="w-16 h-16 bg-emerald-950 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-110 transition-all active:scale-95 border-4 border-white"
          aria-label="Call Us"
        >
          <Phone className="w-7 h-7 text-emerald-400" />
        </a>
      </div>
    </div>
  );
}
