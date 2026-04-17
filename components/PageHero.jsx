'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import SquircleButton from './SquircleButton'
import { MdCall } from 'react-icons/md'

// ─── Typewriter Hook ───────────────────────────────────────────────────────────
function useTypewriter(words, typingSpeed = 75, deletingSpeed = 40) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const current = words[wordIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1)
        setDisplayed(next)
        if (charIndex + 1 === current.length) {
          setPaused(true)
          setTimeout(() => {
            setPaused(false)
            setDeleting(true)
          }, 2200)
        } else {
          setCharIndex((c) => c + 1)
        }
      } else {
        const next = current.slice(0, charIndex - 1)
        setDisplayed(next)
        if (charIndex === 0) {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        } else {
          setCharIndex((c) => c - 1)
        }
      }
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, paused])

  return displayed
}

// ─── Typewriter words — apne services ke hisaab se change karo ────────────────
const TYPEWRITER_WORDS = [
  'Website Development',
  'SEO Growth Strategy',
  'Travel Portal Design',
  'E-Commerce Stores',
  'Portfolio Websites',
]

// ─── Main Component ────────────────────────────────────────────────────────────
export function PageHero({
  images = [],
  badge,
  title,
  highlightedText,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  effect = 'zoom',
}) {
  const typed = useTypewriter(TYPEWRITER_WORDS)

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-background">

      {/* ── Background image ── */}
      {images && images[0] && (
        <div className="absolute inset-0 z-0">
          <Image
            src={images[0]}
            alt="Hero background"
            fill
            priority
            className={[
              'object-cover object-center opacity-20',
              effect === 'zoom' ? 'scale-105 animate-[heroZoom_8s_ease-out_forwards]' : '',
            ].join(' ')}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
        </div>
      )}

      {/* ── Ambient glow blobs (theme color only, no harsh colors) ── */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8"
          >
            {/* Live pulse dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {badge}
          </motion.div>
        )}

        {/* Headline — original title + typewriter replaces highlightedText */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground mb-4"
        >
          {/* First line: static part */}
          {title && title.replace(highlightedText, '').trim()}{' '}
          {/* Typewriter line */}
          <span className="inline-block">
            <span className="text-primary">{typed}</span>
            {/* Blinking cursor */}
            <span
              className="inline-block w-[3px] h-[0.8em] bg-primary align-middle ml-[2px] rounded-sm"
              style={{ animation: 'twBlink 0.9s step-end infinite' }}
            />
          </span>
          {/* Optional: second static line */}
          <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl mt-2">
            for Indore Small Businesses
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {ctaPrimary && (
            <Link href={ctaPrimary.href}>
              <SquircleButton color="orange">
                <MdCall className="mr-2 h-4 w-4" />
                {ctaPrimary.text}
              </SquircleButton>
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondary.href}>
              <SquircleButton color="white">
                {ctaSecondary.text}
              </SquircleButton>
            </Link>
          )}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-14 mt-16 pt-10 border-t border-border/40"
        >
          {[
            { val: '70%', label: 'Avg Lead Increase' },
            { val: '300+', label: 'Bookings Generated' },
            { val: '7–10', label: 'Days Delivery' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">{s.val}</p>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Global keyframe for cursor blink ── */}
      <style>{`
        @keyframes twBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
