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
  Map as MapIcon,
  Send,
  Scale,
  ShieldCheck,
  Building
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

export default function OutrightBuildingDadarPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    buildingType: '',
    budget: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our Dadar property specialists will contact you shortly regarding the building sale.');
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
              Enquire Now
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
              Commercial & Residential Inventory
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-950 leading-tight mb-8">
              Outright Building Sale in <span className="text-emerald-500">Dadar, Mumbai.</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-emerald-800/80 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
              Delicacy Property assists serious buyers, property investors, and businesses enquiring about outright building purchase opportunities in the heart of Dadar. We simplify high-value transactions with verified inventory and expert legal guidance.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#enquiry-form" className="px-12 py-5 bg-emerald-500 text-white font-black rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 hover:-translate-y-1 transition-all text-lg">
                Submit Purchase Enquiry
              </a>
              <a href="tel:9004810239" className="px-12 py-5 bg-white border-2 border-emerald-200 text-emerald-700 font-black rounded-full hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 text-lg">
                <Phone className="w-6 h-6" /> 9004810239
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="px-6 py-24 bg-emerald-50/50 border-y border-emerald-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-8">Understanding Outright Building Sales</h2>
                <div className="prose prose-emerald lg:prose-lg text-emerald-800 font-medium leading-relaxed space-y-6">
                  <p>
                    An outright building sale involves the transfer of the entire structure along with the land title from the current owner to the buyer. Unlike individual unit sales, this model provides buyers with complete control over the property's management, future development, and usage.
                  </p>
                  <p>
                    In Dadar, these opportunities are rare and highly sought after due to the central location and excellent connectivity. Evaluating a building purchase requires careful assessment of factors such as exact location, permitted usage (residential/commercial), current occupancy status, title documentation, and overall structural condition.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://picsum.photos/seed/dadar-building/800/1000"
                  alt="Modern commercial building in Dadar Mumbai representing outright sale opportunities"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explore Opportunities Section */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-600 mb-6">Market Inventory</h2>
            <h3 className="text-4xl md:text-6xl font-black text-emerald-950">Explore Building Purchase Opportunities in Dadar</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: Building2, 
                title: 'Commercial Complexes', 
                desc: 'Standalone office buildings ideal for corporate headquarters, banks, or institutional use in prime Dadar East/West business districts.' 
              },
              { 
                icon: Building, 
                title: 'Residential Blocks', 
                desc: 'Entire residential buildings suitable for staff housing, redevelopment, or high-yield rental portfolios in established residential pockets.' 
              },
              { 
                icon: MapIcon, 
                title: 'Mixed-Use Assets', 
                desc: 'Properties featuring retail on lower floors and residential/office space above, offering diversified revenue streams and high visibility.' 
              }
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
          
          <div className="mt-16 p-10 bg-emerald-950 text-white rounded-[3rem] text-center max-w-4xl mx-auto">
            <p className="text-lg font-medium text-emerald-100 leading-relaxed">
              <strong>Note:</strong> While we maintain an active database of building sale enquiries, specific building availability is shared only with verified buyers after initial screening. Contact us for the latest verified inventory.
            </p>
          </div>
        </section>

        {/* Why Dadar Section */}
        <section className="px-6 py-32 bg-emerald-50 rounded-[4rem] mx-6 md:mx-12 mb-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
                <Image 
                  src="https://picsum.photos/seed/dadar-market/800/1000"
                  alt="Dadar Railway Station area representing central connectivity"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div>
                <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-600 mb-10">Strategic Location</h2>
                <h3 className="text-5xl font-bold mb-12 leading-tight text-emerald-950">Why Consider Dadar for a Building Purchase?</h3>
                <div className="space-y-8 text-emerald-800 font-medium text-lg leading-relaxed">
                  <p>
                    Dadar serves as the heart of Mumbai, acting as the primary transit hub connecting the Central, Western, and Harbour lines. This unparalleled connectivity makes it one of the most desirable locations for both commercial and residential real estate.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                      <span><strong>Central Connectivity:</strong> Easy access to South Mumbai, Suburbs, and Navi Mumbai via rail and road.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                      <span><strong>Transit-Oriented Development:</strong> Proximity to major transport hubs increases footfall and commercial value.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                      <span><strong>Established Ecosystem:</strong> Rich with educational institutions, healthcare facilities, and vibrant markets.</span>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </section>

        {/* Due Diligence Section */}
        <section className="px-6 py-32 max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-600 mb-6">Expert Guidance</h2>
            <h3 className="text-4xl md:text-6xl font-black text-emerald-950">Important Details to Check Before Buying an Entire Building</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { title: 'Title & Ownership Verification', desc: 'Ensuring clear and marketable title, verifying property cards, and checking for any existing encumbrances or litigation.' },
              { title: 'Building Permissions & FSI', desc: 'Checking for valid IOD/CC, OC status, and evaluating any unutilized FSI or TDR potential for future development.' },
              { title: 'Occupancy & Lease Audit', desc: 'Verifying current tenants, existing lease agreements, and any liabilities associated with occupants or maintenance staff.' },
              { title: 'Structural & Financial Audit', desc: 'Assessing the physical health of the building, checking for outstanding property taxes, and reviewing society dues.' }
            ].map((item, idx) => (
              <div key={idx} className="p-12 rounded-[3.5rem] bg-white border border-emerald-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                 <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                 </div>
                 <div>
                    <h4 className="text-2xl font-bold mb-4 text-emerald-950">{item.title}</h4>
                    <p className="text-emerald-800/70 font-medium leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Generation Form Section */}
        <section id="enquiry-form" className="px-6 py-32 bg-emerald-950 text-white rounded-[4rem] mx-6 md:mx-12 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-black tracking-[0.4em] uppercase text-emerald-400 mb-8">Purchase Enquiry</h2>
              <h3 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Looking to Buy an Entire Building in Dadar?</h3>
              <p className="text-emerald-200/70 font-medium text-xl leading-relaxed mb-16">
                Connect with Delicacy Property for professional assistance in identifying and acquiring the right building asset in Dadar. We ensure transparency and confidentiality throughout the transaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <a href="tel:9004810239" className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all border border-white/10">
                    <Phone className="w-7 h-7 text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-black text-2xl tracking-tighter">9004810239</p>
                    <p className="text-emerald-400/50 text-xs font-bold uppercase tracking-widest">Call for availability</p>
                  </div>
                </a>
                <a href="https://wa.me/919004810239" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-all border border-white/10">
                    <MessageCircle className="w-7 h-7 text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-black text-2xl tracking-tighter">WhatsApp Us</p>
                    <p className="text-emerald-400/50 text-xs font-bold uppercase tracking-widest">Instant Connect</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="p-10 md:p-16 bg-white rounded-[4rem] text-emerald-950 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 font-bold" placeholder="Your Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Phone</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 font-bold" placeholder="Contact Number" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Company Name</label>
                  <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 font-bold" placeholder="Firm/Investor Name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Preferred Building Type</label>
                    <select required name="buildingType" value={formData.buildingType} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 font-bold appearance-none">
                      <option value="">Select Type</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="residential">Residential Block</option>
                      <option value="mixed-use">Mixed-Use Asset</option>
                      <option value="other">Other / Redevelopment</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Approx Budget (Cr)</label>
                    <input required type="text" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-8 py-5 rounded-3xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 font-bold" placeholder="e.g. 50 Cr" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-2">Additional Requirements</label>
                  <textarea required name="details" value={formData.details} onChange={handleChange} rows={5} className="w-full px-8 py-5 rounded-3xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 font-bold resize-none" placeholder="Mention preferred location in Dadar, usage etc."></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-emerald-950 text-white font-black uppercase tracking-[0.3em] rounded-3xl hover:bg-emerald-900 shadow-2xl shadow-emerald-950/20 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                  Request Details <Send className="w-5 h-5" />
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
             <h3 className="text-4xl md:text-6xl font-black text-emerald-950 mb-8">Building Sale FAQs</h3>
             <p className="text-emerald-800/60 font-black uppercase tracking-[0.2em] text-xs">Essential information for building purchase enquirers</p>
          </div>
          
          <div className="space-y-10">
            {[
              { q: 'What does outright building sale mean?', a: 'An outright building sale refers to a transaction where the buyer purchases the entire structure along with the land title, gaining complete ownership and control over the asset, as opposed to buying individual floors or units.' },
              { q: 'What documents should a buyer verify?', a: 'A buyer should verify the Property Card, 7/12 extract, Index-II, approved building plans, Occupation Certificate (OC), clear title report, and any existing tax or utility dues receipts.' },
              { q: 'Can a buyer enquire about commercial or residential buildings in Dadar?', a: 'Yes, Delicacy Property assists in sourcing and evaluating both residential and commercial buildings for outright sale in Dadar, depending on the buyer\'s requirement and budget.' },
              { q: 'How can I contact Delicacy Property for verified listings?', a: 'You can contact us directly by calling 9004810239 or clicking the WhatsApp button on this page to schedule a confidential discussion regarding current building sale opportunities.' }
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
              Expert real estate consultancy for outright building sales, SRA redevelopment, and strategic land transactions across Mumbai.
            </p>
          </div>
          
          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-10 uppercase tracking-[0.3em]">Directory</h6>
            <ul className="space-y-6">
              <li><Link href="/" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Home</Link></li>
              <li><Link href="/land-for-joint-venture-in-mumbai" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">JV Land Hub</Link></li>
              <li><Link href="/commercial-property-for-sale-in-mumbai" className="text-emerald-800/50 hover:text-emerald-600 text-lg font-bold transition-colors">Commercial Property</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="text-emerald-950 font-black text-sm mb-10 uppercase tracking-[0.3em]">Expertise</h6>
            <ul className="space-y-6">
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><Phone className="w-5 h-5 text-emerald-600" /> 9004810239</li>
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><MessageCircle className="w-5 h-5 text-emerald-600" /> WhatsApp</li>
              <li className="text-emerald-800/50 font-bold text-lg flex items-center gap-4"><MapPin className="w-5 h-5 text-emerald-600" /> Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 pt-16 border-t border-emerald-100 mt-20">
          <p className="text-[10px] text-emerald-500 font-black tracking-[0.4em] uppercase">
            &copy; {new Date().getFullYear()} Delicacy Property. High-Value Assets.
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
          href="https://wa.me/919004810239?text=Hello%20Delicacy%20Property%2C%20I%20am%20interested%20in%20discussing%20outright%20building%20sale%20opportunities%20in%20Dadar."
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

