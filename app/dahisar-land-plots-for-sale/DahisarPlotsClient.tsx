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
  Search, 
  Handshake, 
  UserCheck, 
  Navigation,
  MessageCircle,
  ChevronDown,
  LayoutGrid,
  Zap,
  ShieldCheck
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

export default function DahisarPlotsClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are land plots available for sale in Dahisar?",
      answer: "Yes, but good plots are limited and sell quickly. Contact Delicacy Property for current verified options."
    },
    {
      question: "Is Dahisar a good location for land investment?",
      answer: "Yes. Metro connectivity, highway access and growing demand make Dahisar one of the strongest growth areas in the Western suburbs."
    },
    {
      question: "What is the price of land plots in Dahisar?",
      answer: "Price depends on plot size, location, zoning, road access and development potential. Call us for the latest rates."
    },
    {
      question: "Can I build a residential or commercial project on these plots?",
      answer: "That depends on land use, zoning and approvals. We verify permitted use before you invest."
    },
    {
      question: "Are the plot documents legally clear?",
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
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920"
              alt="Aerial view of land plots for sale in Dahisar Mumbai"
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
                <MapPin className="w-3 h-3" /> Verified Mumbai Plots
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-[1.05] mb-8 tracking-tight">
                Dahisar Land <span className="text-emerald-500">Plots for Sale</span>
              </h1>
              <p className="text-lg md:text-2xl text-emerald-800/70 font-medium leading-relaxed mb-12 max-w-xl">
                Verified plots for residential, commercial and investment use. Secure your piece of Mumbai&apos;s growth with Delicacy Property.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:9004810239" className="px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-sm rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1.5 transition-all flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" /> Call Now: +91-9004810239
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
                alt="Land for sale in Dahisar Mumbai"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8 leading-tight">Verified Plots for Residential, Commercial & Investment</h2>
            <div className="space-y-6 text-xl text-emerald-900/80 leading-relaxed font-medium">
              <p>
                Dahisar is one of the most promising locations in Mumbai&apos;s Western suburbs. With metro connectivity, highway access and steady demand from homebuyers and businesses, <strong className="text-emerald-600 tracking-tight">Dahisar land plots for sale</strong> are an excellent opportunity for investors, developers and end-users.
              </p>
              <p>
                At <strong>Delicacy Property</strong>, we help you buy legally verified plots in Dahisar East and Dahisar West with transparent pricing and complete support from site visit to registration. We also handle <Link href="/large-land-acquisition-for-developers-in-dahisar" className="text-emerald-600 hover:underline">large land acquisitions for developers</Link> and <Link href="/large-land-investment-property-in-mumbai-dahisar" className="text-emerald-600 hover:underline">high-value investment land</Link>.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Buy Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Investment Rationale</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Why Buy Land Plots in Dahisar?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Navigation,
                  title: "Gateway of Western Suburbs",
                  desc: "Northern entry point to Mumbai, with quick access to Borivali, Mira-Bhayandar, and the wider MMR."
                },
                {
                  icon: Zap,
                  title: "Infrastructure Growth",
                  desc: "Metro 2A/7 and Coastal Road extension are creating massive catchment demand."
                },
                {
                  icon: LayoutGrid,
                  title: "Limited Availability",
                  desc: "As Mumbai densifies, open plots are disappearing. Secure your asset before prices escalate."
                },
                {
                  icon: TrendingUp,
                  title: "Strong Appreciation",
                  desc: "Consistent demand from families and businesses ensures steady long-term growth."
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

        {/* Key Features Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000"
                alt="Infrastructure development and plot planning"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-10 leading-tight">Key Features of <span className="text-emerald-500">Our Land Plots</span></h2>
              <ul className="space-y-8">
                {[
                  { title: "Clear Title & Legal Verification", desc: "Every plot is checked for ownership, title, NOCs, land use and approvals before it is offered to you." },
                  { title: "Prime Locations with Road Access", desc: "Plots are close to the Western Express Highway, metro stations, railway station and main roads." },
                  { title: "Suitable for Multiple Uses", desc: "Ideal for residential projects, commercial complexes, showrooms, warehousing, or long-term land banking." },
                  { title: "Flexible Plot Sizes", desc: "Options are available from small plots for individual buyers to large parcels for developers." }
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

        {/* Popular Areas Section */}
        <section className="py-24 bg-emerald-950 text-white rounded-[3rem] md:rounded-[6rem] mx-6 mb-32 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-400 mb-6">Regional Focus</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Popular Areas for Plots in Dahisar</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
                  <Navigation className="w-6 h-6" /> <Link href="/large-plot-for-sale-in-dahisar-east" className="hover:underline">Dahisar East</Link>
                </h4>
                <p className="text-emerald-100/70 leading-relaxed">
                  Direct access to the Western Express Highway and metro stations. Ideal for residential, commercial and warehousing projects. High visibility and fast appreciation.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
                <h4 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
                  <Navigation className="w-6 h-6" /> <Link href="/large-land-acquisition-for-developers-in-dahisar-west" className="hover:underline">Dahisar West</Link>
                </h4>
                <p className="text-emerald-100/70 leading-relaxed">
                  Close to the railway station, Link Road and Coastal Road corridor. Strong demand for residential and mixed-use development in a premium lifestyle pocket.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantages Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-emerald-950 mb-10 leading-tight">Location Advantages <br/><span className="text-emerald-500">of Dahisar</span></h2>
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-3">
                    <Navigation className="w-6 h-6 text-emerald-500" /> Excellent Connectivity
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Dahisar Railway Station",
                      "Metro Lines 2A & 7",
                      "Western Express Highway",
                      "Link Road & S.V. Road",
                      "Mumbai-Ahmedabad Highway",
                      "Easy reach to Airport"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-emerald-800/70 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-emerald-500" /> Social Infrastructure
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Reputed schools & colleges",
                      "Hospitals & healthcare",
                      "Malls & local markets",
                      "Banks & daily retail",
                      "Sanjay Gandhi National Park",
                      "Entertainment hubs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-emerald-800/70 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                alt="Urban growth in Dahisar"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Who Should Buy Section */}
        <section className="py-24 bg-emerald-50 rounded-[3rem] md:rounded-[6rem] mx-6 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Target Segments</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-emerald-950">Who Should Buy Land Plots in Dahisar?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Real Estate Developers", icon: Building2, desc: "Build residential or commercial projects in a high-demand micro-market." },
                { title: "Investors & Land Bankers", icon: Landmark, desc: "Hold a scarce, non-depreciating asset that grows as infrastructure develops." },
                { title: "Business Owners", icon: Handshake, desc: "Set up offices, showrooms or warehouses with strong connectivity." },
                { title: "Families & Individuals", icon: UserCheck, desc: "Own land in a growing Mumbai location and build for the future." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] border border-emerald-100 bg-white text-center flex flex-col items-center hover:-translate-y-2 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 mb-3">{item.title}</h4>
                  <p className="text-emerald-800/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smarter Choice Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-32">
          <motion.div variants={FADE_UP} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-950 mb-8">Why Land is a Smarter Choice Than Ready Property</h2>
            <p className="text-xl text-emerald-900 leading-relaxed font-medium">
              Land is a limited asset that does not depreciate. Buildings age and need maintenance, but land in a growing location like Dahisar appreciates as infrastructure and demand increase. A plot also gives you full freedom to develop, partner with builders or sell at the right time.
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="bg-emerald-950 rounded-[3rem] md:rounded-[4rem] p-12 md:p-24 text-white">
            <div className="max-w-3xl mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-400 mb-6">Buying Journey</h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">Simple, Transparent, Secure Buying Process</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Requirement", desc: "Share your budget and plot size needs" },
                { step: "02", title: "Shortlist", desc: "Get legally verified plot options" },
                { step: "03", title: "Site Visit", desc: "Visit the land with our land specialist" },
                { step: "04", title: "Due Diligence", desc: "Rigorous title and NOC verification" },
                { step: "05", title: "Registration", desc: "Secure closing and document support" }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-emerald-400 text-xs font-black mb-4 block uppercase">{item.step}</span>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-emerald-100/60 text-xs leading-relaxed">{item.desc}</p>
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
              <h2 className="text-3xl md:text-7xl font-black mb-10 leading-tight">Secure a High-Value <br/><span className="text-emerald-950 font-light">Asset for Your Future</span></h2>
              <p className="text-xl md:text-2xl text-emerald-50/80 mb-16 font-medium leading-relaxed">
                Good plots in Dahisar don&apos;t stay available for long. Speak to our expert now and secure your Mumbai land investment.
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
            <Link href="/large-land-investment-property-in-mumbai-dahisar" className="hover:text-emerald-600 transition-colors">Investment</Link>
            <a href="tel:9004810239" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
