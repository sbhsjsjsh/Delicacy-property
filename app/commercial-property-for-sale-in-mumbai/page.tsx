'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Building2, 
  Search, 
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
  Building,
  Target,
  LayoutGrid,
  ClipboardCheck,
  Zap
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

export default function CommercialPropertyMumbaiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    propertyType: '',
    budget: '',
    area: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our commercial real estate specialists will contact you shortly.');
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
              <Target className="w-3 h-3" /> Premier Business Spaces
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-4xl md:text-6xl font-black text-emerald-950 mb-6 leading-[1.1] tracking-tight">
              Commercial Property for <span className="text-emerald-500 italic">Sale in Mumbai</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-emerald-800/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Delicacy Property assists serious buyers, business owners, and property investors in acquiring high-potential commercial real estate across Mumbai's prime business districts.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-wrap justify-center gap-4">
              <a href="tel:9004810239" className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/25">
                <Phone className="w-5 h-5" /> Call 9004810239
              </a>
              <a href="https://wa.me/919004810239" className="flex items-center gap-3 px-8 py-4 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-2xl font-bold hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]">
                <MessageCircle className="w-5 h-5" /> WhatsApp Enquiries
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Features/Info Section */}
        <section className="bg-emerald-50/50 py-24 px-6 md:px-12 border-y border-emerald-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-8 leading-tight">
                  Expert Guidance in Mumbai's <br /><span className="text-emerald-500">Commercial Real Estate</span>
                </h2>
                <p className="text-emerald-800/80 text-lg mb-8 leading-relaxed">
                  Navigating the Mumbai commercial market requires precision, local expertise, and an understanding of business-specific requirements. At Delicacy Property, we bridge the gap between demand and premium supply.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Strategic Location Analysis", desc: "Evaluating connectivity, footfall, and business ecosystem relevance." },
                    { title: "Asset Type Matching", desc: "From Grade-A office spaces to prime retail frontage and industrial sheds." },
                    { title: "Legal & Due Diligence", desc: "Comprehensive documentation review and title verification assistance." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-emerald-100/50 shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-950 mb-1">{item.title}</h4>
                        <p className="text-sm text-emerald-800/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Commercial Office Space Mumbai"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50">
                  <p className="text-sm font-bold text-emerald-950 italic leading-relaxed">
                    "Mumbai's commercial landscape is diverse. Choosing the right space means balancing immediate utility with long-term capital appreciation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-6">
              Explore Commercial <span className="text-emerald-500">Property Opportunities</span>
            </h2>
            <p className="text-emerald-800/60 max-w-2xl mx-auto font-medium">
              We facilitate enquiries across multiple commercial asset classes to meet the specific operational needs of modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Briefcase, 
                title: 'Premium Office Spaces', 
                desc: 'Grade-A office premises in BKC, Lower Parel, and Nariman Point for corporate headquarters and MNCs.' 
              },
              { 
                icon: LayoutGrid, 
                title: 'Retail Showrooms', 
                desc: 'High-visibility retail spaces and frontage properties in Mumbai\'s busiest shopping districts and malls.' 
              },
              { 
                icon: Building2, 
                title: 'Commercial Buildings', 
                desc: 'Enquire about standalone commercial blocks, IT parks, and business centers for large-scale operations.' 
              },
              { 
                icon: MapPin, 
                title: 'Strategic Locations', 
                desc: 'Focusing on hubs like Andheri, Powai, Dadar, and the emerging business corridors of Navi Mumbai.' 
              },
              { 
                icon: Scale, 
                title: 'Business-Ready Assets', 
                desc: 'Properties with necessary OC, permitted commercial usage, and robust infrastructure already in place.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Investment Grade', 
                desc: 'Pre-leased commercial properties and high-yield assets for institutional and HNW investors.' 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={FADE_UP}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="group p-8 rounded-3xl border border-emerald-100 hover:border-emerald-500 transition-all hover:bg-emerald-50/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">{feature.title}</h3>
                <p className="text-emerald-800/60 text-sm leading-relaxed mb-6">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="bg-emerald-950 py-24 px-6 md:px-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Building className="w-full h-full" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                How to Choose the <br /><span className="text-emerald-400 italic">Right Commercial Property</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" /> Business Suitability
                  </h4>
                  <p className="text-emerald-100/70 leading-relaxed text-sm">
                    Ensure the property type matches your operational flow—considering carpet area, floor plate efficiency, and natural lighting.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" /> Accessibility & Infrastructure
                  </h4>
                  <p className="text-emerald-100/70 leading-relaxed text-sm">
                    Analyze proximity to railway stations, highways, and the upcoming Metro lines, alongside essential power backup and fiber connectivity.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5" /> Legal Due Diligence
                  </h4>
                  <p className="text-emerald-100/70 leading-relaxed text-sm">
                    Verify Title clearance, OC status, RERA compliance, and permitted commercial usage (e.g., Office, Retail, F&B) before commitment.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Maintenance & Costs
                  </h4>
                  <p className="text-emerald-100/70 leading-relaxed text-sm">
                    Factoring in monthly maintenance charges, property taxes, and potential fit-out costs into your overall financial planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Gen Section */}
        <section id="enquiry-form" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] border border-emerald-100 p-8 md:p-16 shadow-2xl shadow-emerald-950/5 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6">
                <Send className="w-3 h-3" /> Get Listing Updates
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-6 leading-tight">
                Looking for Commercial <br />Property in Mumbai?
              </h2>
              <p className="text-emerald-800/60 text-lg mb-10 font-medium">
                Share your business requirements and location preferences. Our team will provide verified commercial property options tailored to your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-800/40 mb-1">Direct Call</p>
                    <a href="tel:9004810239" className="text-xl font-black text-emerald-950 hover:text-emerald-500 transition-colors">9004810239</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-emerald-800/40 mb-1">WhatsApp</p>
                    <a href="https://wa.me/919004810239" className="text-xl font-bold text-emerald-950 hover:text-emerald-500 transition-colors">Chat with Experts</a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800/60 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-emerald-950 placeholder:text-emerald-800/30 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800/60 ml-4">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9004810239"
                    className="w-full px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-emerald-950 placeholder:text-emerald-800/30 font-medium"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800/60 ml-4">Property Type</label>
                  <select 
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-emerald-950 font-medium appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="office">Office Space</option>
                    <option value="retail">Retail/Shop</option>
                    <option value="building">Entire Building</option>
                    <option value="warehouse">Warehouse/Industrial</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800/60 ml-4">Carpet Area (sq.ft)</label>
                  <input 
                    type="text" 
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="e.g. 5,000"
                    className="w-full px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-emerald-950 placeholder:text-emerald-800/30 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-emerald-800/60 ml-4">Additional Details</label>
                <textarea 
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your budget, preferred location and business type..."
                  className="w-full px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-emerald-950 placeholder:text-emerald-800/30 font-medium resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-emerald-950 mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-emerald-500" /> Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How can I find commercial property for sale in Mumbai?",
                a: "You can find commercial property by contacting specialized agencies like Delicacy Property. We provide curated listings based on your budget, required carpet area, and preferred location hubs like BKC, Worli, or Andheri."
              },
              {
                q: "What documents should I verify before purchasing commercial property?",
                a: "Key documents include the Sale Deed, Occupation Certificate (OC), Approved Building Plan, Share Certificate (if in a society), Property Tax receipts, and Title Clearance certificate from a legal professional."
              },
              {
                q: "How can I enquire about commercial buildings or office spaces?",
                a: "You can enquire by calling us directly at 9004810239 or filling out our enquiry form with your specific needs, such as preferred location, business usage type, and budget range."
              },
              {
                q: "How do I contact Delicacy Property?",
                a: "You can reach us at 9004810239 or via WhatsApp. We are available to discuss outright purchases, joint ventures, and premium commercial space enquiries across Mumbai."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden transition-all">
                <summary className="list-none p-6 cursor-pointer flex items-center justify-between font-bold text-emerald-950 group-open:bg-emerald-50/50">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-6 pt-2 text-emerald-800/70 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Internal Links Footer */}
      <footer className="bg-emerald-50/80 border-t border-emerald-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border border-emerald-200 p-0.5 bg-emerald-50">
                <Image 
                  src="https://i.ibb.co/PG1tCFXY/file-00000000551c81fd87e21cbaa623a2a2.png"
                  alt="Delicacy Property"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-black text-emerald-950">Delicacy<span className="text-emerald-500 font-light">Property</span></span>
            </Link>
            <p className="text-emerald-800/40 text-xs font-bold max-w-xs">
              Mumbais premier consultancy for high-value land joint ventures, outright building sales, and premium commercial property.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800/30 mb-6">Directory</p>
              <ul className="space-y-4">
                <li><Link href="/" className="text-emerald-800/50 hover:text-emerald-600 text-sm font-bold transition-colors">Home</Link></li>
                <li><Link href="/land-for-joint-venture-in-mumbai" className="text-emerald-800/50 hover:text-emerald-600 text-sm font-bold transition-colors">JV Land Mumbai</Link></li>
                <li><Link href="/outright-building-sale-in-dadar" className="text-emerald-800/50 hover:text-emerald-600 text-sm font-bold transition-colors">Outright Sale Dadar</Link></li>
                <li><Link href="/commercial-property-for-sale-in-mumbai" className="text-emerald-600 text-sm font-black transition-colors">Commercial Property</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-emerald-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-800/30 text-[10px] font-bold">© 2024 Delicacy Property. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="tel:9004810239" className="text-emerald-800/30 hover:text-emerald-500 transition-colors"><Phone className="w-4 h-4" /></a>
             <a href="https://wa.me/919004810239" className="text-emerald-800/30 hover:text-emerald-500 transition-colors"><MessageCircle className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

