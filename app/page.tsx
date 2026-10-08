'use client';

import React from 'react';
import { ArrowRight, Building2, Map, ShieldCheck, TrendingUp, Phone, MessageCircle, CheckCircle2, Users2, HelpCircle } from 'lucide-react';
import Image from 'next/image';
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
    <div className="min-h-screen overflow-x-hidden bg-teal-950 text-teal-50 font-sans selection:bg-emerald-300 selection:text-teal-950 antialiased">
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 bg-teal-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <nav className="w-full px-6 py-4 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-emerald-500/30 bg-white/5 p-0.5 shadow-lg shadow-emerald-500/10 group-hover:border-emerald-400/50 transition-all duration-300">
              <Image 
                src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                alt="Delicacy Property Logo"
                fill
                className="object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-50 transition-colors">
              Delicacy<span className="text-emerald-400 font-light">Property</span>
            </div>
          </div>
          <div className="flex items-center">
            <a 
              href="tel:9004810239" 
              className="flex items-center gap-2 text-sm font-medium tracking-wide text-teal-200 hover:text-emerald-300 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" /> <span className="hidden sm:inline">9004810239</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-16 md:pt-48 md:pb-32 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <motion.div {...STAGGER} className="max-w-5xl flex flex-col items-center">
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Premium Real Estate Consulting Mumbai
            </motion.div>
            <motion.h1 
              variants={FADE_UP}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] sm:leading-[1.05] text-white break-words"
            >
              Specialists in SRA &amp; Redevelopment Projects.
            </motion.h1>
            <motion.p 
              variants={FADE_UP}
              className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-teal-100 max-w-3xl font-light leading-relaxed mx-auto"
            >
              Delicacy Property is your trusted partner for high-stakes real estate transitions in Mumbai. We specialize in SRA (Slum Rehabilitation Authority) consulting, building redevelopment, and strategic land acquisitions.
            </motion.p>
            <motion.div variants={FADE_UP} className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <a 
                href="#expertise" 
                className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 bg-emerald-400 text-teal-950 text-sm font-bold tracking-wide uppercase rounded-full hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                View Services 
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20a%20project." 
                target="_blank"
                className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 bg-transparent border-2 border-emerald-400/30 text-emerald-400 text-sm font-bold tracking-wide uppercase rounded-full hover:bg-emerald-400/5 transition-all flex items-center justify-center gap-2"
              >
                Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Brand Promise / Stats */}
        <section className="px-6 py-12 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 py-12 border-y border-white/5 text-center sm:text-left">
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">15+ Years</h4>
              <p className="text-teal-400 font-medium tracking-wide uppercase text-xs">Industry Experience</p>
            </motion.div>
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">Mumbai Wide</h4>
              <p className="text-teal-400 font-medium tracking-wide uppercase text-xs">Strategic Presence</p>
            </motion.div>
            <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">Discreet</h4>
              <p className="text-teal-400 font-medium tracking-wide uppercase text-xs">End-to-End Privacy</p>
            </motion.div>
          </div>
        </section>

        {/* Specialized Services */}
        <section id="expertise" className="px-6 py-20 md:py-32 md:px-12 bg-emerald-50 text-teal-950 border-t border-emerald-100 rounded-t-[2.5rem] md:rounded-t-[5rem]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-6">Expert Solutions</h2>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">Navigating Mumbai's Complex Real Estate Landscape.</h3>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-teal-800 font-light text-lg max-w-sm mb-2"
              >
                From legal hurdles to architectural viability, we provide a seamless experience for developers and land owners.
              </motion.p>
            </div>
            
            <motion.div {...STAGGER} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* SRA Consulting */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-10 rounded-[2.5rem] border border-emerald-100 flex flex-col items-start hover:shadow-2xl hover:shadow-emerald-900/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Users2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">SRA Projects</h4>
                <p className="text-teal-800/70 font-light leading-relaxed mb-6">
                  Expert guidance on Slum Rehabilitation Authority projects. We handle survey management, legal compliance, and stakeholder coordination for large-scale redevelopment.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Legal Vetting', 'Tenant Coordination', 'Regulatory Clearances'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-teal-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Building Redevelopment */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-10 rounded-[2.5rem] border border-emerald-100 flex flex-col items-start hover:shadow-2xl hover:shadow-emerald-900/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-teal-900 text-white flex items-center justify-center mb-8 shadow-lg shadow-teal-900/20 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Redevelopment</h4>
                <p className="text-teal-800/70 font-light leading-relaxed mb-6">
                  Transforming aging structures into modern landmarks. We bridge the gap between housing societies and premium developers, ensuring fair terms and timely execution.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Society Liasoning', 'PMC Services', 'Developer Selection'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-teal-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Open Land & Commercial */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-10 rounded-[2.5rem] border border-emerald-100 flex flex-col items-start hover:shadow-2xl hover:shadow-emerald-900/10 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-8 shadow-lg shadow-emerald-900/5 group-hover:scale-110 transition-transform">
                  <Map className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Strategic Assets</h4>
                <p className="text-teal-800/70 font-light leading-relaxed mb-6">
                  Identifying prime open land and commercial inventory for investors. Our data-driven approach identifies high-growth zones before the market reacts.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Land Surveying', 'Commercial Leasing', 'Yield Analysis'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-teal-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-white text-teal-950 py-24 md:py-40">
          <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.h2 variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-8 leading-tight">
                Integrity is the Foundation of Every Deal.
              </motion.h2>
              <motion.p variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-teal-800 font-light text-xl leading-relaxed mb-12">
                In a market filled with noise, Delicacy Property stands out through radical transparency and precision. We don't just find properties; we build legacies.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h5 className="font-bold text-xl mb-2 text-teal-950">Absolute Privacy</h5>
                  <p className="text-teal-800/70 font-light text-sm leading-relaxed">Your high-value transactions deserve complete confidentiality at every stage.</p>
                </motion.div>
                <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h5 className="font-bold text-xl mb-2 text-teal-950">Market Intelligence</h5>
                  <p className="text-teal-800/70 font-light text-sm leading-relaxed">Leverage our deep network and proprietary data for informed decision-making.</p>
                </motion.div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-teal-900/20">
              <Image 
                src="https://picsum.photos/seed/realestate/800/1000"
                alt="Mumbai Skyline"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white font-medium text-lg leading-relaxed mb-4">"Our goal is to simplify the complex world of Mumbai real estate, one project at a time."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-400"></div>
                  <div>
                    <p className="text-white font-bold text-sm">Strategic Director</p>
                    <p className="text-emerald-400 text-xs tracking-widest uppercase">Delicacy Property</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6 py-24 bg-teal-900/20 border-y border-white/5">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6">Our Process</h2>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">How We Deliver Excellence.</h3>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
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
                className="relative"
              >
                <div className="text-7xl font-bold text-white/5 absolute -top-10 left-0 leading-none">{p.step}</div>
                <h4 className="text-xl font-bold text-white mb-4 relative z-10">{p.title}</h4>
                <p className="text-teal-200/60 font-light text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="px-6 py-24 md:py-32 max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <HelpCircle className="w-12 h-12 text-emerald-500 mx-auto mb-6 opacity-50" />
             <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h3>
             <p className="text-teal-200/50">Common inquiries about our consulting services.</p>
          </div>
          
          <div className="space-y-6">
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
                className="p-8 rounded-3xl bg-white/5 border border-white/5"
              >
                <h5 className="text-lg font-bold text-white mb-3">{faq.q}</h5>
                <p className="text-teal-200/60 font-light text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA / Footer */}
        <section id="contact" className="px-6 py-20 md:py-40 md:px-12 max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.div {...STAGGER} className="flex flex-col items-center w-full">
            <motion.h2 variants={FADE_UP} className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-8">
              Start Your Journey
            </motion.h2>
            <motion.h3 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight mb-12 max-w-4xl text-white leading-tight">
              Ready to secure your next strategic asset?
            </motion.h3>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a 
                href="tel:9004810239" 
                className="w-full sm:w-auto px-10 py-5 bg-emerald-400 text-teal-950 text-base font-bold tracking-wide uppercase rounded-full hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a 
                href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20real%20estate%20opportunities." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-white text-teal-950 text-base font-bold tracking-wide uppercase rounded-full hover:bg-teal-50 transition-all shadow-xl shadow-white/10 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500" /> WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="px-6 py-20 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 group mb-8">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-emerald-500/20 bg-white/5 p-0.5">
                <Image 
                  src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                  alt="Delicacy Property Logo"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-2xl font-bold tracking-tight text-white">
                Delicacy<span className="text-emerald-400 font-light">Property</span>
              </div>
            </div>
            <p className="text-teal-200/40 font-light text-sm max-w-xs leading-relaxed">
              Mumbai's premier real estate consultancy specializing in SRA, building redevelopment, and high-value property acquisitions. Trusted by land owners and developers alike.
            </p>
          </div>
          
          <div>
            <h6 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Services</h6>
            <ul className="space-y-4">
              {['SRA Consulting', 'Redevelopment', 'Open Land Deals', 'Commercial Assets'].map((s) => (
                <li key={s} className="text-teal-200/40 hover:text-emerald-400 text-sm font-medium transition-colors cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Connect</h6>
            <ul className="space-y-4">
              <li className="text-teal-200/40 hover:text-white text-sm font-medium transition-colors cursor-pointer flex items-center gap-2">
                <Phone className="w-4 h-4" /> 9004810239
              </li>
              <li className="text-teal-200/40 hover:text-white text-sm font-medium transition-colors cursor-pointer flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </li>
              <li className="text-teal-200/40 hover:text-white text-sm font-medium transition-colors cursor-pointer">
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-xs text-teal-500 font-medium tracking-wide uppercase">
            &copy; {new Date().getFullYear()} Delicacy Property. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-teal-500 font-medium tracking-wide uppercase cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="text-xs text-teal-500 font-medium tracking-wide uppercase cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20real%20estate%20opportunities."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-teal-900/40 hover:scale-110 transition-transform active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:9004810239"
          className="w-14 h-14 bg-teal-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-teal-900/40 hover:scale-110 transition-transform active:scale-95"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
