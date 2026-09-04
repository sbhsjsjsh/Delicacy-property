'use client';

import React from 'react';
import { ArrowRight, Building2, Map, ShieldCheck, TrendingUp, Phone, MessageCircle } from 'lucide-react';
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
      <header className="fixed top-0 w-full z-50 bg-teal-950/85 backdrop-blur-lg border-b border-teal-800/50 shadow-sm">
        <nav className="w-full px-6 py-4 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">
              Delicacy<span className="text-emerald-400 font-light">Property</span>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="tel:9004810239" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium tracking-wide text-teal-200 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-4 h-4" /> 9004810239
            </a>
            <a 
              href="#contact" 
              className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-teal-950 bg-emerald-400 hover:bg-emerald-300 px-5 py-2.5 rounded-full transition-all shadow-md shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-6 pt-32 pb-16 md:pt-48 md:pb-32 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <motion.div {...STAGGER} className="max-w-5xl flex flex-col items-center">
            <motion.h1 
              variants={FADE_UP}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] sm:leading-[1.05] text-white break-words"
            >
              Dealing in SRA &amp; Redevelopment Buildings.
            </motion.h1>
            <motion.p 
              variants={FADE_UP}
              className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-teal-100 max-w-3xl font-light leading-relaxed mx-auto"
            >
              Delicacy Property provides discreet, professional real estate consulting 
              specializing in high-value open land and premium commercial buildings. 
              We minimize complexity so you can focus on the return.
            </motion.p>
            <motion.div variants={FADE_UP} className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <a 
                href="#expertise" 
                className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 bg-emerald-400 text-teal-950 text-sm font-semibold tracking-wide uppercase rounded-full hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Our Expertise 
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Areas of Expertise */}
        <section id="expertise" className="px-6 py-16 md:py-24 md:px-12 bg-emerald-50 text-teal-950 border-t border-emerald-100 rounded-t-[2.5rem] md:rounded-t-[4rem]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/3"
            >
              <h2 className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4">Core Focus</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-teal-950 leading-tight">Specialized<br/>Portfolio</h3>
            </motion.div>
            
            <motion.div {...STAGGER} className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Service 1 */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-8 rounded-3xl border border-emerald-100 flex flex-col items-start transition-shadow hover:shadow-md hover:shadow-emerald-900/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Map className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-teal-950">Open Land</h4>
                <p className="text-teal-800/80 font-light leading-relaxed">
                  Navigating zoning, topographical viability, and developmental potential. We identify 
                  parcels of land poised for substantial appreciation and strategic development.
                </p>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                variants={FADE_UP}
                className="bg-white p-8 rounded-3xl border border-emerald-100 flex flex-col items-start transition-shadow hover:shadow-md hover:shadow-emerald-900/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-teal-950">Commercial</h4>
                <p className="text-teal-800/80 font-light leading-relaxed">
                  Sourcing performing and value-add commercial structures. We evaluate tenant quality, 
                  lease structures, and underlying asset health to ensure robust yield.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Methodology / Value Prop */}
        <section className="bg-white text-teal-950">
          <div className="px-6 py-16 md:py-32 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.div {...STAGGER} className="max-w-4xl">
              <motion.h2 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 sm:mb-8 leading-tight">
                A Disciplined Approach.
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-teal-800 font-light text-lg sm:text-xl leading-relaxed mb-12 sm:mb-16">
                Distractions cost deals. We operate with a singular focus on aligning your capital with the right asset. Our methodology strips away the noise of the broader market.
              </motion.p>
              <motion.ul variants={FADE_UP} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left">
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-emerald-50 rounded-2xl shrink-0">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xl mb-2">Discreet Execution</h5>
                    <p className="text-teal-800/80 font-light leading-relaxed">Confidential handling of all inquiries, valuations, and high-stakes negotiations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-emerald-50 rounded-2xl shrink-0">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xl mb-2">Data-Driven Valuation</h5>
                    <p className="text-teal-800/80 font-light leading-relaxed">Rigorous analysis of market trends, comparable sales, and intrinsic asset value.</p>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* CTA / Footer */}
        <section id="contact" className="px-6 py-20 md:py-32 md:px-12 max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.div {...STAGGER} className="flex flex-col items-center w-full">
            <motion.h2 variants={FADE_UP} className="text-sm font-semibold tracking-widest uppercase text-emerald-400 mb-6">
              Initiate a Conversation
            </motion.h2>
            <motion.h3 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 sm:mb-12 max-w-4xl text-white leading-tight">
              Ready to explore strategic opportunities?
            </motion.h3>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="tel:9004810239" 
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-emerald-400 text-teal-950 text-base sm:text-lg font-semibold tracking-wide uppercase rounded-full hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call: 9004810239
              </a>
              <a 
                href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20real%20estate%20opportunities." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white text-teal-950 text-base sm:text-lg font-semibold tracking-wide uppercase rounded-full hover:bg-teal-50 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500" /> WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <footer className="px-6 py-12 md:px-12 max-w-7xl mx-auto border-t border-teal-800/50 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-xl font-semibold tracking-tight text-white">
          Delicacy<span className="text-emerald-400 font-light">Property</span>
        </div>
        <p className="text-sm text-teal-500 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Delicacy Property. All rights reserved.
        </p>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20would%20like%20to%20discuss%20real%20estate%20opportunities."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-teal-900/40 hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:9004810239"
          className="w-14 h-14 bg-teal-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-teal-900/40 hover:scale-110 transition-transform"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
