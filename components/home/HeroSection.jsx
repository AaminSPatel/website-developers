'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { MdArrowForward } from 'react-icons/md'
import TechGrid from '../TechGrid'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="absolute inset-0 bg-black/0"></div>

      <section className='absolute z-0 opacity-40 top-0 left-0 h-full w-full'>
        <TechGrid />
      </section>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-6">
              🏆 Expert Freelance Website Developer in India
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6"
            variants={itemVariants}
          >
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-orange-400 to-red-400">Website Development</span> That Grows Your Business
          </motion.h1>

          {/* Description - Increased word count with keywords */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Looking for affordable and high-performance web design? I help <strong>Small Businesses, Travel Agencies, and Freelancers</strong> across Mumbai, Delhi, and Bangalore get more customers. Get a mobile-friendly, SEO-optimized website built with Next.js that loads fast and ranks high on Google.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link href="/contact">
              <Button size="lg" variant="primary" className="group border-2 border-accent">
                Get Free Website Consultation
                <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className='hover:text-white'>
                View Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-center items-center gap-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Successful Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">3+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">SEO Optimized</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}