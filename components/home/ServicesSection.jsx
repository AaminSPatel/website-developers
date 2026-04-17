'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  MdTravelExplore,
  MdTrendingUp,
  MdShoppingCart,
  MdSearch,
  MdCode,
  MdPhotoCamera,
} from 'react-icons/md'

// ─── Service data ──────────────────────────────────────────────────────────────
const services = [
  {
    icon: MdTravelExplore,
    category: 'Travel Industry',
    title: 'Travel Portal Development',
    description:
      'Automated booking systems and high-performance travel portals built for agents in Indore & Ujjain. Convert more pilgrims and tourists with seamless online booking.',
    href: '/services',
    highlight: 'Specialized Expertise',
  },
  {
    icon: MdTrendingUp,
    category: 'Business Growth',
    title: 'Lead Generation Websites',
    description:
      'SEO-optimized websites designed to convert local Indore traffic into loyal customers. Every element is crafted to grow your revenue and brand.',
    href: '/services',
    highlight: 'High ROI',
  },
  {
    icon: MdShoppingCart,
    category: 'E-Commerce',
    title: 'Online Store Development',
    description:
      'Full-featured e-commerce stores with payment integration, inventory management, and mobile-first design. Start selling online within days.',
    href: '/services',
    highlight: 'Quick Launch',
  },
  {
    icon: MdSearch,
    category: 'SEO Services',
    title: 'Local SEO & Google Ranking',
    description:
      'Rank higher on Google for Indore and Ujjain keywords. We optimize your site for Core Web Vitals and local search to bring you real, paying customers.',
    href: '/services',
    highlight: 'Proven Results',
  },
  {
    icon: MdCode,
    category: 'Next.js Migration',
    title: 'Website Speed Optimization',
    description:
      'Migrate your slow WordPress or static site to blazing-fast Next.js. Achieve perfect Lighthouse scores and dramatically better user experience.',
    href: '/services',
    highlight: 'Performance First',
  },
  {
    icon: MdPhotoCamera,
    category: 'Portfolio',
    title: 'Personal Portfolio Websites',
    description:
      'Stunning personal portfolios using Next.js for freelancers and professionals who want to stand out in the global gig economy.',
    href: '/services',
    highlight: 'Stand Out',
  },
]

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────
function TiltCard({ service, index }) {
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    // Max tilt: 12 degrees
    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    // Move the shine
    const shine = card.querySelector('.card-shine')
    if (shine) {
      const shineX = (x / rect.width) * 100
      const shineY = (y / rect.height) * 100
      shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, hsl(var(--primary) / 0.13) 0%, transparent 60%)`
    }
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    const shine = card.querySelector('.card-shine')
    if (shine) shine.style.background = 'transparent'
  }

  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group rounded-2xl border border-border bg-card p-6 h-full cursor-default overflow-hidden"
        style={{
          transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          boxShadow: '0 2px 16px 0 hsl(var(--primary) / 0.04)',
        }}
        onMouseEnter={(e) => {
          const card = cardRef.current
          if (card) card.style.boxShadow = '0 16px 48px 0 hsl(var(--primary) / 0.18)'
        }}
      >
        {/* Shine overlay — moves with mouse */}
        <div className="card-shine absolute inset-0 rounded-2xl pointer-events-none transition-all duration-100" />

        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-primary/0 group-hover:bg-primary/60 transition-all duration-300" />

        {/* Content — translateZ gives depth */}
        <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
          {/* Icon */}
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon size={22} />
          </div>

          {/* Highlight badge */}
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-2.5 py-0.5 mb-3">
            {service.highlight}
          </span>

          {/* Category */}
          <p className="text-xs text-muted-foreground mb-1">{service.category}</p>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Link */}
          <Link
            href={service.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
          >
            Learn more
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Solutions for Modern Businesses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            From travel portals to e-commerce — everything your business needs to grow online, delivered in 7–10 days.
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <TiltCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
