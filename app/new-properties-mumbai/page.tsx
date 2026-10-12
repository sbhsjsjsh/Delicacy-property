'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const PROJECTS = [
  {
    title: 'Emerald Heights',
    location: 'Worli, Mumbai',
    type: 'Luxury Residential',
    status: 'Launching Soon',
    image: 'https://picsum.photos/seed/luxury/800/600',
    desc: 'Bespoke 3 & 4 BHK residences with unobstructed sea views and world-class amenities.'
  },
  {
    title: 'The Sovereign',
    location: 'Bandra West, Mumbai',
    type: 'Premium Redevelopment',
    status: 'Under Construction',
    image: 'https://picsum.photos/seed/sovereign/800/600',
    desc: 'An architectural marvel in the heart of Bandra, offering exclusivity and modern lifestyle.'
  },
  {
    title: 'Zenith Business Park',
    location: 'BKC, Mumbai',
    type: 'Grade-A Commercial',
    status: 'Ready to Move',
    image: 'https://picsum.photos/seed/office/800/600',
    desc: 'State-of-the-art office spaces designed for global corporations and growing enterprises.'
  }
];

export default function NewPropertiesPage() {
  return (
    <div className="min-h-screen bg-teal-950 text-teal-50 selection:bg-emerald-300 selection:text-teal-950 antialiased">
      {/* Mini Header */}
      <nav className="fixed top-0 w-full z-50 bg-teal-950/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
             <div className="relative w-10 h-10 overflow-hidden rounded-full border border-emerald-500/20 bg-white/5 p-0.5">
                <Image 
                  src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                  alt="Delicacy Property Logo"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-6 max-w-7xl mx-auto text-center mb-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8">
            <Sparkles className="w-3 h-3" /> New Projects 2024
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8">Exclusive New Properties <br/> across Mumbai.</h1>
          <p className="text-teal-100/60 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Discover premium residential and commercial opportunities curated by Delicacy Property. From pre-launches to ready possessions.
          </p>
        </section>

        {/* Property Grid */}
        <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={FADE_UP}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="group bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-emerald-500 text-teal-950 text-[10px] font-bold tracking-widest uppercase shadow-lg">
                  {project.status}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
                  <MapPin className="w-3 h-3" /> {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-teal-200/40 text-sm font-light leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs font-medium text-teal-200/60">{project.type}</span>
                  <Link 
                    href={`https://wa.me/919004810239?text=Interested%20in%20${encodeURIComponent(project.title)}`}
                    className="text-emerald-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Benefits Section */}
        <section className="bg-emerald-50 py-24 rounded-[3rem] md:rounded-[5rem] mx-6">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-teal-950 text-4xl md:text-5xl font-bold tracking-tight mb-8">Why invest in our new projects?</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Prime Locations', desc: 'Connectivity-rich hubs with high appreciation potential.' },
                  { title: 'Verified Developers', desc: 'RERA-registered projects from trusted real estate brands.' },
                  { title: 'Expert Negotiation', desc: 'Get the best inventory and pricing through our network.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-teal-950 font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-teal-800/60 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
               <Image 
                  src="https://picsum.photos/seed/investment/800/800"
                  alt="Property Investment"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-32 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Looking for something specific?</h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:9004810239" 
                className="px-10 py-5 bg-emerald-400 text-teal-950 font-bold uppercase rounded-full shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" /> Speak to Expert
              </a>
              <a 
                href="https://wa.me/919004810239?text=I%20am%20looking%20for%20a%20new%20property%20in%20Mumbai." 
                target="_blank"
                className="px-10 py-5 bg-white text-teal-950 font-bold uppercase rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500" /> Inquire via WhatsApp
              </a>
           </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-teal-200/40 text-xs uppercase tracking-widest">
         &copy; {new Date().getFullYear()} Delicacy Property. All rights reserved.
      </footer>
    </div>
  );
}
