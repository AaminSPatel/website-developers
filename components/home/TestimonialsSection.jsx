'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdFormatQuote, MdStar } from 'react-icons/md'

// ─── Testimonials data ─────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Gautam Rathore',
    role: 'Owner',
    company: 'Avantika Travels, Ujjain',
    avatar: 'GR',
    rating: 5,
    short: 'Our booking inquiries went up 70% in just 3 months.',
    full: 'Exceptional work! They transformed our travel agency\'s online presence completely. The website is fast, looks great on mobile, and our booking inquiries have increased by 70% in just 3 months. Best investment we made for the business.',
  },
  {
    name: 'Faruk Patel',
    role: 'Founder',
    company: 'Safar Sathi, Indore',
    avatar: 'PJ',
    rating: 5,
    short: 'Professional, responsive, and delivered on time.',
    full: 'Professional, responsive, and delivered exactly on time. The multi-service booking platform they built for our travel business is working perfectly. Customers love how easy it is to book. Highly recommended for anyone in tourism.',
  },
  {
    name: 'Zeeshan Ahmed',
    role: 'Director',
    company: 'A2Z Digital Marketing, Indore',
    avatar: 'AV',
    rating: 5,
    short: 'Our agency website now brings 150+ leads every month.',
    full: 'Outstanding design and development. They really understood our SEO needs and created a site that actually ranks on Google. Our agency website now brings in 150+ client inquiries every month on autopilot. Great experience from start to finish.',
  },
  /* {
    name: 'Neha Malhotra',
    role: 'Business Owner',
    company: 'Floral Dreams, Indore',
    avatar: 'NM',
    rating: 5,
    short: 'Best investment I made. Leads come in automatically now.',
    full: 'Best investment I made for my decoration business. Before the website, I relied completely on word of mouth. Now I get 45+ inquiries every month from Google and the site practically runs itself. Direct WhatsApp support made everything so easy.',
  },
  {
    name: 'Vikram Singh',
    role: 'Co-Founder',
    company: 'Dealify, Bhopal',
    avatar: 'VS',
    rating: 5,
    short: '500+ orders processed, zero manual errors. Incredible.',
    full: 'We were managing orders through Instagram DMs — it was a mess. The e-commerce platform they built completely transformed our operations. 500+ orders processed, 3.8% conversion rate, and zero manual errors since launch. Absolutely incredible work.',
  },
  {
    name: 'Sunita Patel',
    role: 'Freelance Designer',
    company: 'Mumbai',
    avatar: 'SP',
    rating: 5,
    short: 'My portfolio gets international clients now. Worth every rupee.',
    full: 'I wanted a portfolio that would help me get international clients and Business Sathi delivered exactly that. The Next.js portfolio they built is blazing fast, looks stunning, and has already helped me land 3 international projects. Worth every rupee.',
  }, */
]

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <MdStar key={i} size={14} className="text-primary fill-primary" />
      ))}
    </div>
  )
}

// ─── Avatar Circle ────────────────────────────────────────────────────────────
function Avatar({ initials }) {
  return (
    <div className="w-11 h-11 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center shrink-0 border border-primary/20">
      {initials}
    </div>
  )
}

// ─── Featured (large) Card ────────────────────────────────────────────────────
function FeaturedCard({ testimonial }) {
  return (
    <motion.div
      key={testimonial.name}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45 }}
      className="relative rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 flex flex-col md:h-auto md:min-h-94"
    >
      {/* Large quote icon */}
      <MdFormatQuote
        size={56}
        className="text-primary/20 absolute top-6 right-6"
        aria-hidden
      />

      <StarRating count={testimonial.rating} />

      {/* Full quote */}
      <blockquote className="mt-5 text-foreground text-lg md:text-xl leading-relaxed font-medium md:flex-none">
        &ldquo;{testimonial.full}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
        <Avatar initials={testimonial.avatar} />
        <div>
          <p className="font-semibold text-foreground text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>

        {/* Verified badge */}
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2.5 py-1">
          Verified Client
        </span>
      </div>
    </motion.div>
  )
}

// ─── Small selector card ──────────────────────────────────────────────────────
function SelectorCard({ testimonial, isActive, onClick, index }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onClick={onClick}
      className={[
        'w-full text-left rounded-xl border p-4 transition-all duration-250 group',
        isActive
          ? 'border-primary/40 bg-primary/8 shadow-sm'
          : 'border-border bg-card hover:border-primary/25 hover:bg-primary/4',
      ].join(' ')}
      style={{ background: isActive ? 'hsl(var(--primary) / 0.06)' : undefined }}
    >
      <div className="flex items-start gap-3">
        <Avatar initials={testimonial.avatar} />
        <div className="min-w-0">
          <p className="font-semibold text-foreground text-sm truncate">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground truncate">{testimonial.company}</p>
          <p className="text-xs text-muted-foreground/80 mt-1.5 line-clamp-2 leading-relaxed">
            &ldquo;{testimonial.short}&rdquo;
          </p>
        </div>
      </div>
      {/* Active bar */}
      {isActive && (
        <div className="mt-3 h-0.5 w-full rounded-full bg-primary/40" />
      )}
    </motion.button>
  )
}

// ─── Scrolling marquee strip ──────────────────────────────────────────────────
function MarqueeStrip() {
  const items = [
    '⭐ 5-Star Rated Service',
    '🏆 Expert Development Team',
    '✅ 100% Client Satisfaction',
    '🚀 7–10 Day Delivery',
    '📞 Direct WhatsApp Support',
    '🇮🇳 Trusted Across India',
  ]
  // Duplicate for infinite loop
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-4 border-y border-border/50 bg-background mt-12">
      <div className="flex gap-10 animate-[marquee_22s_linear_infinite] whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-medium text-muted-foreground px-2">
            {item}
          </span>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  // Auto-advance every 5 seconds
  function resetTimer() {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  function handleSelect(i) {
    setActive(i)
    resetTimer()
  }

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
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
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Businesses Across India
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            From ambitious startups in Bangalore to established travel agencies in Indore — see
            why business owners rely on us to build their online presence and grow their revenue.
          </p>
        </motion.div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">

          {/* Left: featured card */}
          <AnimatePresence mode="wait">
            <FeaturedCard
              key={active}
              testimonial={testimonials[active]}
            />
          </AnimatePresence>

          {/* Right: selector list */}
          <div className="flex flex-col gap-3">
            {testimonials.slice(0,3).map((t, i) => (
              <SelectorCard
                key={t.name}
                testimonial={t}
                isActive={i === active}
                onClick={() => handleSelect(i)}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={[
                'rounded-full transition-all duration-300',
                i === active
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/50',
              ].join(' ')}
            />
          ))}
        </div>

        {/* Scrolling strip */}
        <MarqueeStrip />
      </div>
    </section>
  )
}
