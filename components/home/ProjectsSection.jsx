'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowForward, MdArrowBack, MdOpenInNew } from 'react-icons/md'

// ─── Projects data — apne hisaab se update karo ───────────────────────────────
const projects = [
  {
    image: '/avantika.png',
    title: 'Travel Website That Increased Booking Inquiries by 70%',
    client: 'Avantika Travels',
    category: 'Travel Portal',
    problem:
      'Avantika Travels was losing potential customers to competitors due to an outdated online presence. Their basic website failed to handle booking inquiries effectively, resulting in missed revenue and frustrated customers who couldn\'t easily reach the agency.',
    outcome:
      'A high-performance travel portal with automated inquiry routing transformed their business. Customers could now find packages, check availability, and send inquiries in seconds — resulting in a dramatic jump in qualified leads within the first quarter.',
    results: [
      { metric: '70%', label: 'increase in booking inquiries within 3 months' },
      { metric: '50%', label: 'reduction in customer response time' },
      { metric: '300+', label: 'new customer bookings generated' },
    ],
    href: '/projects',
  },
  {
    image: '/safarsathi.png',
    title: 'Multi-Service Booking Platform That Generated 100+ Bookings in 6 Months',
    client: 'Safar Sathi',
    category: 'Booking Platform',
    problem:
      'The client needed a single platform to manage multiple travel services — hotels, buses, and tours — but existing solutions were either too expensive or too generic for their local market.',
    outcome:
      'A custom multi-service booking platform built from scratch with real-time availability, WhatsApp integration, and a mobile-first design tailored to the Madhya Pradesh travel market.',
    results: [
      { metric: '100+', label: 'bookings generated in 6 months' },
      { metric: '3x', label: 'increase in website traffic' },
      { metric: '60%', label: 'of bookings from mobile users' },
    ],
    href: '/projects',
  },
  {
    image: '/a2zdm.png',
    title: 'Digital Marketing Agency Website That Generated 150+ Client Inquiries in 6 Months',
    client: 'A2Z Digital Marketing',
    category: 'Agency Website',
    problem:
      'The agency was relying entirely on referrals and had no digital presence that could showcase their work and convert visitors into paying clients.',
    outcome:
      'A bold, conversion-focused agency website with case study showcases, service pricing, and a streamlined contact flow that turned visitors into leads automatically.',
    results: [
      { metric: '150+', label: 'client inquiries in 6 months' },
      { metric: '4.8★', label: 'average client rating' },
      { metric: '40%', label: 'referral traffic from Google' },
    ],
    href: '/projects',
  },
  {
    image: '/spotify.png',
    title: 'Music Streaming Platform That Achieved 500+ Active Users in 3 Months',
    client: 'Indie Beats',
    category: 'Web App',
    problem:
      'Independent artists in India lacked an affordable platform to stream and monetize their music without giving up rights to large streaming giants.',
    outcome:
      'A lightweight, fast music streaming platform with artist dashboards, listener analytics, and integrated payments — giving indie musicians full ownership of their audience.',
    results: [
      { metric: '500+', label: 'active users in 3 months' },
      { metric: '2,000+', label: 'tracks uploaded' },
      { metric: '98%', label: 'uptime on Next.js infrastructure' },
    ],
    href: '/projects',
  },
  {
    image: '/dealify.png',
    title: 'E-Commerce Platform That Processed 500+ Orders with 3.8% Conversion Rate',
    client: 'Dealify',
    category: 'E-Commerce',
    problem:
      'The client was selling on social media manually via DMs — losing orders, spending hours on coordination, and having no way to track inventory or sales data.',
    outcome:
      'A complete e-commerce solution with product catalog, Razorpay payments, order tracking, and an admin dashboard — turning a chaotic social-media shop into a professional online store.',
    results: [
      { metric: '500+', label: 'orders processed successfully' },
      { metric: '3.8%', label: 'conversion rate (industry avg: 2.3%)' },
      { metric: '0', label: 'manual order errors after launch' },
    ],
    href: '/projects',
  },
  {
    image: '/flower.png',
    title: 'Wedding Decoration Website That Generated 45+ Monthly Inquiries',
    client: 'Floral Dreams',
    category: 'Local Business',
    problem:
      'A talented decorator in Indore had zero online visibility and was getting business only through word of mouth, limiting growth severely during off-seasons.',
    outcome:
      'A visually rich portfolio website with package listings, gallery, WhatsApp inquiry button, and local SEO — putting the business in front of engaged couples actively searching for decorators in Indore.',
    results: [
      { metric: '45+', label: 'monthly inquiries from website' },
      { metric: '25%', label: 'inquiry-to-booking conversion' },
      { metric: '#1', label: 'Google ranking for "wedding decorator Indore"' },
    ],
    href: '/projects',
  },
]

// ─── Result Badge ─────────────────────────────────────────────────────────────
function ResultBadge({ metric, label }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-lg font-bold text-primary leading-none mt-0.5 shrink-0">
        {metric}
      </span>
      <span className="text-xs text-muted-foreground leading-relaxed">{label}</span>
    </div>
  )
}

// ─── Single Project Slide ─────────────────────────────────────────────────────
function ProjectSlide({ project, isActive }) {
  return (
    <div
      className={[
        'w-full shrink-0 transition-opacity duration-500',
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
      ].join(' ')}
      aria-hidden={!isActive}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Image */}
        <motion.div
          key={project.title + '-img'}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden aspect-video shadow-xl border border-border"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Category tag */}
          <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            {project.category}
          </div>
        </motion.div>

        {/* Text content — ENHANCED */}
        <motion.div
          key={project.title + '-text'}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-col gap-5"
        >
          {/* Client */}
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {project.client}
          </p>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
            {project.title}
          </h3>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* The Challenge */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
              The Challenge
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-18">
              {project.problem}
            </p>
          </div>

          {/* Our Solution */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
              Our Solution
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3  min-h-18">
              {project.outcome}
            </p>
          </div>

          {/* Results */}
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-1">
              Results Achieved
            </p>
            {project.results.map((r) => (
              <ResultBadge key={r.metric + r.label} metric={r.metric} label={r.label} />
            ))}
          </div>

          {/* CTA */}
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
          >
            View full case study <MdOpenInNew size={15} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export function ProjectsSection() {
  const [current, setCurrent] = useState(0)
  const total = projects.length

  function prev() {
    setCurrent((c) => (c - 1 + total) % total)
  }
  function next() {
    setCurrent((c) => (c + 1) % total)
  }

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Crafting Digital Experiences That Matter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            We don't just build websites — we create digital assets that solve real business
            problems. Every project below started with a challenge and ended with measurable
            growth. Explore our featured work and see exactly how we help local brands across
            Indore and Ujjain compete online.
          </p>
        </motion.div>

        {/* Carousel — LAYOUT UNCHANGED, only text enhanced */}
        <div className="relative overflow-hidden">
          <div className="flex">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={[
                  'w-full shrink-0 transition-all duration-500',
                  i === current ? 'block' : 'hidden',
                ].join(' ')}
              >
                <ProjectSlide project={project} isActive={i === current} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-10">
          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <MdArrowBack size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <MdArrowForward size={18} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
                className={[
                  'rounded-full transition-all duration-300',
                  i === current
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60',
                ].join(' ')}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-sm text-muted-foreground tabular-nums">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
        </div>

        {/* Explore all */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-primary-foreground px-6 py-2.5 rounded-full transition-all duration-200">
              Explore All Projects <MdArrowForward size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
