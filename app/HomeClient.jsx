"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  MdArrowForward,
  MdCheck,
  MdStar,
  MdPhone,
  MdWhatsapp,
  MdLocationOn,
  MdSpeed,
  MdSearch,
  MdDevices,
  MdBusiness,
  MdTrendingUp,
  MdCode,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: MdBusiness,
    title: "Business Website Development",
    desc: "Professional websites for local businesses in Indore, Ujjain, Dewas & Ratlam. Mobile-first, fast, and built to convert visitors into customers.",
    keywords: ["Local SEO", "WhatsApp Integration", "Lead Generation"],
    href: "/services",
  },
  {
    icon: MdSearch,
    title: "SEO & Local Search Visibility",
    desc: "Get found on Google when customers in your city search for your services. Dominate local search results with proven on-page & technical SEO.",
    keywords: ["On-Page SEO", "Google My Business", "Keyword Strategy"],
    href: "/services",
  },
  {
    icon: MdDevices,
    title: "Travel Agency Portals",
    desc: "Full-featured travel portals with booking engines, package management, WhatsApp enquiry systems, and SEO-optimized destination pages.",
    keywords: ["Booking Engine", "Package Management", "Travel SEO"],
    href: "/services",
  },
  {
    icon: MdSpeed,
    title: "Website Redesign & Speed Optimization",
    desc: "Transform your slow, outdated website into a high-performance digital asset. Core Web Vitals optimized for better Google rankings.",
    keywords: ["Core Web Vitals", "Performance", "Conversion Rate"],
    href: "/services",
  },
  {
    icon: MdCode,
    title: "Next.js & React Development",
    desc: "Modern, scalable web applications using Next.js 14 — server-side rendering, edge performance, and developer-grade code quality.",
    keywords: ["Next.js 14", "React", "TypeScript"],
    href: "/services",
  },
  {
    icon: MdTrendingUp,
    title: "E-Commerce Solutions",
    desc: "Complete online stores with payment gateway, inventory management, and conversion-optimized product pages for Indian businesses.",
    keywords: ["Razorpay", "Inventory", "Mobile Commerce"],
    href: "/services",
  },
];

const STATS = [
  { value: "50+", label: "Websites Delivered" },
  { value: "95+", label: "Avg SEO Score" },
  { value: "1.5s", label: "Avg Load Time" },
  { value: "100%", label: "Client Satisfaction" },
];

const TESTIMONIALS = [
  {
    name: "Gautam Rathore",
    role: "Owner, Avantika Travels, Ujjain",
    text: "I am very happy with your service you developed a exact website as i want and specially in my budget you designed very good and user friendly interface and backend also very easy to handle Thankyou for your service and in future if i required any technical support i will looking forward to you.  Thanyou ! 🙏",
    rating: 5,
    city: "Ujjain",
  },
  {
    name: "Zeeshan Ahmad",
    role: "Director, A2ZDM Digital Marketing",
    text: "Website ka UI kafi achha he or Mobile Friendly he. Ab hum Indore mein digital marketing ke top results mein aate hain. Bahut professional team!",
    rating: 5,
    city: "Indore",
  },
  {
    name: "Faruk Patel",
    role: "Founder, Safar Sathi, Ujjain",
    text: "Multi-service booking platform ekdam smooth hai. 100+ bookings successfully process ho gayi. Highly recommend!",
    rating: 5,
    city: "Ujjain",
  }, {
    name: "Salman Khan",
    role: "Owner, MyMechanic24, Indore",
    text: "Website ki help se hamari digital presence kafi majboot hui he or client ka trust bhi bda he. Digital leads bhi aa rhi he.Thank you Business Sathi",
    rating: 5,
    city: "Indore",
  },
];

const CITIES = ["Indore", "Ujjain", "Dewas", "Ratlam", "Bhopal", "Khandwa"];

const WHY_US = [
  { point: "Local market understanding — we know Indore & Ujjain businesses" },
  { point: "SEO-first approach — every website built to rank on Google" },
  { point: "WhatsApp-first communication — instant support, no delays" },
  { point: "Fast delivery — most projects ready in 7–21 days" },
  { point: "Affordable pricing — enterprise quality at SME budget" },
  { point: "Post-launch support — we don't disappear after delivery" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function HomeClient() {
const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [activeCity, setActiveCity] = useState(0);

  return (
    <main className="overflow-x-hidden bg-white">
      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
        aria-label="Business Sathi - Website Development Company in Indore & Ujjain"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Trusted by 50+ Businesses in MP
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
            >
              Website Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Indore & Ujjain
              </span>
              <span className="block text-2xl md:text-3xl font-medium text-slate-300 mt-2">
                That Actually Ranks on Google
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
            >
              We build <strong className="text-white">SEO-optimized, mobile-first websites</strong> for local businesses,
              travel agencies, and service providers across Madhya Pradesh. From Indore to Ujjain —
              your digital presence starts here.
            </motion.p>

            {/* City pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-2 mb-8"
            >
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="text-xs bg-white/5 border border-white/10 text-slate-400 px-3 py-1 rounded-full"
                >
                  📍 {city}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Get Free Website Quote
                <MdArrowForward size={20} />
              </Link>
              <a
                href="https://wa.me/919302088025?text=Hi! I want a website for my business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                <FaWhatsapp size={20} />
                WhatsApp Now
              </a>
            </motion.div>
          </div>

          {/* Right — Stats card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-white font-bold text-xl mb-6">Why Choose Business Sathi?</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-extrabold text-blue-400">{s.value}</div>
                    <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {WHY_US.slice(0, 4).map((w, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <MdCheck className="text-green-400 mt-0.5 shrink-0" size={18} />
                    <span className="text-slate-300 text-sm">{w.point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ─────────────────────────────────────────────────── */}
      <section className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm font-medium">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">{s.value}</span>
                <span className="text-blue-100">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="py-20 md:py-28 bg-slate-50"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              What We Build
            </span>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4"
            >
              Website Development Services
              <span className="block text-blue-600">for Indore, Ujjain & MP</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              From a simple business website to a full-fledged travel booking portal — we deliver
              modern, fast, and Google-optimized digital solutions for every kind of local business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <svc.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {svc.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              View All Services <MdArrowForward size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCAL TARGETING ──────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-white"
        aria-labelledby="local-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                Serving Madhya Pradesh
              </span>
              <h2
                id="local-heading"
                className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6"
              >
                Local Business Website Expert
                <span className="block text-blue-600">in Indore & Ujjain</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We understand the local market dynamics of Madhya Pradesh. Whether you run a <strong>travel agency in Ujjain</strong>,
                a <strong>shop in Indore</strong>, a medical practice in <strong>Dewas</strong>, or a
                coaching center in <strong>Ratlam</strong> — our websites are designed to attract local customers
                and convert them.
              </p>
              <ul className="space-y-3 mb-8">
                {WHY_US.map((w, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <MdCheck size={12} className="text-green-600" />
                    </span>
                    <span className="text-slate-700 text-sm">{w.point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Start Your Project <MdArrowForward size={18} />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  See Our Work
                </Link>
              </div>
            </motion.div>

            {/* City grid */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { city: "Indore", desc: "IT Hub & Business Capital of MP", clients: "20+ clients" },
                { city: "Ujjain", desc: "Religious Tourism & Local Trade", clients: "15+ clients" },
                { city: "Dewas", desc: "Industrial & Pharmaceutical Hub", clients: "8+ clients" },
                { city: "Ratlam", desc: "Growing Business Community", clients: "7+ clients" },
              ].map((item, i) => (
                <div
                  key={item.city}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MdLocationOn className="text-blue-500" size={18} />
                    <span className="font-bold text-slate-900">{item.city}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{item.desc}</p>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {item.clients}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              id="industries-heading"
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            >
              Industries We Serve
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Specialized website solutions built for your industry's unique requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Travel Agencies", emoji: "✈️", href: "/services" },
              { label: "Medical Clinics", emoji: "🏥", href: "/services" },
              { label: "Coaching Centers", emoji: "📚", href: "/services" },
              { label: "Retail Shops", emoji: "🛍️", href: "/services" },
              { label: "Restaurants", emoji: "🍽️", href: "/services" },
              { label: "Real Estate", emoji: "🏠", href: "/services" },
              { label: "CA / Legal Firms", emoji: "⚖️", href: "/services" },
              { label: "Event Planners", emoji: "🎉", href: "/services" },
            ].map((ind, i) => (
              <motion.div
                key={ind.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  href={ind.href}
                  className="flex flex-col items-center gap-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 text-center group"
                >
                  <span className="text-3xl">{ind.emoji}</span>
                  <span className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                    {ind.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Client Reviews
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2"
            >
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-7"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <MdStar key={j} className="text-amber-400" size={18} />
                  ))}
                </div>
                <blockquote className="text-slate-700 leading-relaxed mb-6 text-sm">
                  "{t.text}"
                </blockquote>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-slate-500 text-sm">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-blue-50" aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            >
              How We Work
            </h2>
            <p className="text-slate-600">Simple, transparent process — from idea to live website</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Consultation", desc: "Tell us about your business. We analyze your market and competitors." },
              { step: "02", title: "Design & Plan", desc: "We create a wireframe and SEO strategy tailored to your industry." },
              { step: "03", title: "Build & Optimize", desc: "Development with speed optimization, SEO, and mobile-first design." },
              { step: "04", title: "Launch & Grow", desc: "Go live with Google indexing, GMB setup, and ongoing support." },
            ].map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-blue-200 z-0" />
                )}
                <div className="relative z-10 text-center bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-lg mx-auto mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-extrabold text-white mb-6"
            >
              Ready to Get Your Business
              <span className="block">Online in Indore / Ujjain?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Get a free consultation and website quote. We'll analyze your competitors and show you
              exactly how to rank on Google in your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
              >
                Get Free Quote <MdArrowForward size={20} />
              </Link>
              <a
                href="https://wa.me/919302088025?text=Hi! I want a website for my business in Indore/Ujjain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                <FaWhatsapp size={22} />
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              📍 Serving Indore • Ujjain • Dewas • Ratlam • Bhopal & all of MP
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FLOATING WHATSAPP ────────────────────────────────────────────────── */}
   {/*    <a
        href="https://wa.me/919302088025?text=Hi! I need a website for my business"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a> */}
    </main>
  );
}