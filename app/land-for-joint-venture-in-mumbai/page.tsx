'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Building2, 
  Handshake, 
  Gavel, 
  Search, 
  BarChart3, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowLeft,
  Briefcase,
  HelpCircle,
  MapPin,
  Send,
  Scale
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

export default function JVLandHubPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    location: '',
    budget: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our JV specialists will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <a href="#enquiry-form" className="px-5 py-2.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/10">
              Get Started
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
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
          <motion.div {...STAGGER} className="max-w-4xl mx-auto">
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Corporate & Industrial Solutions
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-950 leading-tight mb-8">
              Land for Joint Venture in Mumbai for <span className="text-emerald-500">Builders and Developers.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-emerald-800/80 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
              Delicacy Property specializes in aligning landowners with reputable real estate developers. We facilitate seamless Joint Venture (JV) partnerships to transform vacant land into high-yield residential and commercial landmarks.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#enquiry-form" className="px-12 py-5 bg-emerald-500 text-white font-black rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1 transition-all text-lg">
                Discuss a JV Opportunity
              </a>
              <a href="tel:9004810239" className="px-12 py-5 bg-white border-2 border-emerald-200 text-emerald-700 font-black rounded-full hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 text-lg">
                <Phone className="w-6 h-6" /> 9004810239
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Introduction / Why Us Section */}
        <section className="px-6 py-24 bg-emerald-50/50 border-y border-emerald-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-8">Connecting Vision with Real Estate Assets</h2>
                <div className="prose prose-emerald lg:prose-lg text-emerald-800 font-medium leading-relaxed space-y-6">
                  <p>
                    A Joint Venture is more than just a commercial agreement; it is a collaborative partnership where a landowner provides the asset and a developer brings the technical expertise and capital to execute a project. In a city as land-constrained as Mumbai, this model is essential for unlocking large-scale development opportunities.
                  </p>
                  <p>
                    Delicacy Property helps builders and developers navigate the complexities of JV arrangements. From initial land sourcing to structuring the 70:30 or 60:40 ratios, we ensure that both parties are aligned on project timelines, quality standards, and revenue sharing.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://picsum.photos/seed/jv-mumbai/800/1000"
                  alt="Modern Mumbai construction site representing Joint Venture development"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation & Process Section */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-600 mb-6">Our Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-black text-emerald-950">Evaluating JV Potential</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Search, title: 'Land Ownership', desc: 'Verifying 7/12 extracts, mutation records, and title history to ensure a clean marketable asset.' },
              { icon: MapPin, title: 'Location Viability', desc: 'Assessing connectivity, micro-market demand, and neighborhood infrastructure for project success.' },
              { icon: BarChart3, title: 'Dev Potential', desc: 'Calculating permissible FSI, TDR loading, and zoning restrictions under Mumbai DCPR 2034.' },
              { icon: Gavel, title: 'Legal Structure', desc: 'Drafting robust Development Agreements (DA) and Power of Attorney (PoA) for mutual protection.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={FADE_UP}
                initial="initial"
                whileInView="whileInView"
                className="p-10 rounded-[3rem] bg-white border border-emerald-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-emerald-950 leading-tight">{item.title}</h4>
                <p className="text-emerald-800/70 font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Builders Consider JV Section */}
        <section className="px-6 py-32 bg-emerald-950 text-white rounded-[4rem] mx-6 md:mx-12 mb-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 -z-10"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-400 mb-10">Strategic Rationale</h2>
              <h3 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">Optimizing <span className="text-emerald-400">Capital</span> Through JV Partnerships.</h3>
              <p className="text-emerald-200/70 font-medium text-xl leading-relaxed mb-16">
                For developers in Mumbai, Joint Ventures offer a low-risk entry into prime markets. By eliminating the upfront cost of land acquisition, builders can focus their liquidity on construction quality and marketing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h5 className="font-bold text-xl">Asset Light Model</h5>
                  <p className="text-emerald-200/40 text-sm">Reduce initial investment and improve Return on Equity (ROE) by sharing project rewards.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h5 className="font-bold text-xl">Shared Expertise</h5>
                  <p className="text-emerald-200/40 text-sm">Combine landowner local influence with developer construction and sales capabilities.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[4rem] border border-white/10">
              <h4 className="text-2xl font-bold mb-8 text-emerald-400 uppercase tracking-widest text-center underline decoration-2 underline-offset-8">Pre-Interest Review</h4>
              <p className="text-emerald-100 font-medium mb-10 text-center">Serious developers should review the following data points before proceeding:</p>
              <ul className="space-y-6">
                {[
                  'Confirmed Land Title & Revenue Records',
                  'Proposed Commercial Ratios (Area vs Revenue)',
                  'Security Deposit & Payment Milestones',
                  'Approval Status & IOD/CC Timeline expectations',
                  'Local Micro-market Absorption Statistics',
                  'Stakeholder Agreement & Consent Letters'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-emerald-50 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Explore Joint Venture Land Opportunities Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-emerald-600 mb-6">Current Inventory</h2>
              <h3 className="text-4xl md:text-6xl font-black text-emerald-950">Explore Joint Venture Land Opportunities</h3>
            </div>
            <Link href="/" className="px-8 py-4 bg-emerald-50 text-emerald-700 font-bold rounded-full hover:bg-emerald-100 transition-all border border-emerald-100 flex items-center gap-2">
              Browse More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Featured Card */}
            <Link href="/28-acre-jv-land-hiranandani-powai-mumbai" className="group block bg-white rounded-[3rem] border border-emerald-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 w-full">
                <Image 
                  src="https://picsum.photos/seed/powai-deal/800/600"
                  alt="28 Acre JV Land Powai Mumbai Listing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Confirmed Deal
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-black uppercase tracking-widest mb-4">
                  <MapPin className="w-4 h-4" /> Powai, Mumbai
                </div>
                <h4 className="text-3xl font-black text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors">28 Acre JV Opportunity near Hiranandani</h4>
                <p className="text-emerald-800/60 font-medium leading-relaxed mb-8">Strategic land block proposed for 60:40 Joint Venture. Ideal for Tier-1 developers looking for large-scale residential township development.</p>
                <div className="flex items-center justify-between pt-8 border-t border-emerald-50">
                  <div className="flex flex-col">
                    <span className="text-emerald-950 font-black text-2xl">28 Acres</span>
                    <span className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest">Available Now</span>
                  </div>
                  <span className="flex items-center gap-2 text-emerald-600 font-bold">Details <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
                </div>
              </div>
            </Link>

            <div className="bg-emerald-50 p-12 rounded-[3rem] border border-emerald-100 flex flex-col justify-center text-center items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm">
                <Briefcase className="w-12 h-12 text-emerald-400" />
              </div>
              <h4 className="text-3xl font-black text-emerald-950 mb-6">For Landowners</h4>
              <p className="text-emerald-800/70 font-medium mb-10 leading-relaxed text-lg max-w-sm">Unlock the true value of your land asset by partnering with Mumbai's most reputable developers through our firm.</p>
              <a href="tel:9004810239" className="px-10 py-4 bg-emerald-950 text-white font-bold rounded-full hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-950/20">
                Confidential Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Lead Generation Form Section */}
        <section id="enquiry-form" className="px-6 py-32 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-600 mb-8">Lead Generation</h2>
              <h3 className="text-5xl md:text-7xl font-black text-emerald-950 mb-10 leading-tight">Discuss a Joint Venture Opportunity.</h3>
              <p className="text-emerald-800/70 font-medium text-xl leading-relaxed mb-16">
                Our team provides professional intermediation for high-value real estate projects. Share your requirements, and our JV specialists will curate opportunities that match your development profile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <a href="tel:9004810239" className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-emerald-950 font-black text-2xl tracking-tighter">9004810239</p>
                    <p className="text-emerald-800/40 text-xs font-bold uppercase tracking-widest">Call our experts</p>
                  </div>
                </a>
                <a href="https://wa.me/919004810239" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-emerald-950 font-black text-2xl tracking-tighter">WhatsApp Us</p>
                    <p className="text-emerald-800/40 text-xs font-bold uppercase tracking-widest">Immediate Response</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="p-10 md:p-16 bg-emerald-50 rounded-[4rem] border border-emerald-100 shadow-[0_30px_100px_rgba(16,185,129,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 -z-10 rounded-full blur-3xl"></div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-white border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 text-emerald-950 font-bold" placeholder="Your Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Phone</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-white border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 text-emerald-950 font-bold" placeholder="Contact Number" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Company Name</label>
                  <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-white border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 text-emerald-950 font-bold" placeholder="Firm Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Preferred Location</label>
                    <input required type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-white border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 text-emerald-950 font-bold" placeholder="e.g. Bandra, Worli" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Approx Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-white border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 text-emerald-950 font-bold appearance-none">
                      <option value="">Select Budget</option>
                      <option value="50-100cr">₹50 Cr - ₹100 Cr</option>
                      <option value="100-500cr">₹100 Cr - ₹500 Cr</option>
                      <option value="500cr+">₹500 Cr +</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Enquiry Details</label>
                  <textarea required name="details" value={formData.details} onChange={handleChange} rows={5} className="w-full px-8 py-5 rounded-3xl bg-white border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 text-emerald-950 font-bold resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-emerald-950 text-white font-black uppercase tracking-[0.3em] rounded-3xl hover:bg-emerald-900 shadow-2xl shadow-emerald-950/20 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                  Send Enquiry <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-6 py-32 max-w-5xl mx-auto">
          <div className="text-center mb-24">
             <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-200 shadow-sm">
               <HelpCircle className="w-10 h-10 text-emerald-600" />
             </div>
             <h3 className="text-4xl md:text-6xl font-black text-emerald-950 mb-8">JV Hub FAQs</h3>
             <p className="text-emerald-800/60 font-black uppercase tracking-[0.2em] text-xs">Everything you need to know about Joint Ventures in Mumbai</p>
          </div>
          
          <div className="space-y-10">
            {[
              { q: 'What is the standard JV ratio for land in Mumbai?', a: 'Joint Venture ratios in Mumbai are highly dependent on the land cost to construction cost ratio. Typically, we facilitate deals ranging from 50:50 to 70:30, often accompanied by a security deposit.' },
              { q: 'How long does it take to finalize a JV agreement?', a: 'Finalizing a JV agreement involves multiple stages: title verification, term sheet negotiation, and drafting the Development Agreement. This usually takes between 4 to 8 weeks depending on due diligence complexity.' },
              { q: 'What are the risks for developers in a JV?', a: 'Key risks include land title encumbrances and unexpected regulatory changes. Delicacy Property mitigates these by performing thorough preliminary checks on all listed opportunities.' },
              { q: 'Does Delicacy Property handle commercial JV deals?', a: 'Yes, we manage both residential and commercial Joint Venture opportunities, including office complexes, industrial parks, and retail developments across Mumbai.' }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }}
                className="p-12 rounded-[3.5rem] bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 transition-colors duration-500"
              >
                <h5 className="text-2xl font-black text-emerald-950 mb-6 tracking-tight leading-tight">{faq.q}</h5>
                <p className="text-emerald-800/70 font-medium text-lg leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 py-32 md:px-12 max-w-7xl mx-auto border-t border-emerald-100 bg-emerald-50/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-5 group mb-12">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-emerald-500/20 bg-white p-1 shadow-sm group-hover:scale-105 transition-transform">
                <Image 
                  src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                  alt="Delicacy Property Logo"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-4xl font-black tracking-tighter text-emerald-950">
                Delicacy<span className="text-emerald-500 font-light">Property</span>
              </div>
            </Link>
            <p className="text-emerald-800/50 font-medium text-xl max-w-md leading-relaxed mb-12">
              Mumbai's most trusted real estate consultancy for Joint Venture partnerships, SRA redevelopment, and high-value land transactions.
            </p>
          </div>
          
          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-10 uppercase tracking-[0.3em]">Directory</h6>
            <ul className="space-y-6">
              <li><Link href="/" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Home</Link></li>
              <li><Link href="/28-acre-jv-land-hiranandani-powai-mumbai" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Powai Opportunity</Link></li>
              <li><Link href="/land-for-joint-venture-in-mumbai" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">JV Hub</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-10 uppercase tracking-[0.3em]">Expertise</h6>
            <ul className="space-y-6">
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><Phone className="w-5 h-5 text-emerald-600" /> 9004810239</li>
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><MessageCircle className="w-5 h-5 text-emerald-600" /> WhatsApp</li>
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><MapPin className="w-5 h-5 text-emerald-600" /> Mumbai Central</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 pt-16 border-t border-emerald-100 mt-20">
          <p className="text-[10px] text-emerald-500 font-black tracking-[0.4em] uppercase">
            &copy; {new Date().getFullYear()} Delicacy Property. Built for Developers.
          </p>
          <div className="flex gap-12 text-[10px] text-emerald-400 font-black uppercase tracking-[0.4em]">
            <span className="cursor-pointer hover:text-emerald-600 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-emerald-600 transition-colors">Legal</span>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-5 z-50">
        <a
          href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20am%20interested%20in%20discussing%20a%20land%20JV%20opportunity."
          target="_blank"
          rel="noopener noreferrer"
          className="w-18 h-18 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(16,185,129,0.3)] hover:scale-110 transition-all border-4 border-white group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </a>
        <a
          href="tel:9004810239"
          className="w-18 h-18 bg-emerald-950 text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(6,78,59,0.3)] hover:scale-110 transition-all border-4 border-white group"
          aria-label="Call Us"
        >
          <Phone className="w-8 h-8 text-emerald-400 group-hover:-rotate-12 transition-transform" />
        </a>
      </div>
    </div>
  );
}
