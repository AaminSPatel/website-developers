'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { MdCall, MdArrowForward } from 'react-icons/md'
import SquircleButton from '../SquircleButton'
import Squircle3D from '../Squircle3D'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      {/* <section className='absolute z-0 opacity-40 top-0 left-0 h-full w-full'>
        <TechGrid />
      </section> */}

      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-6">
              🏆 Best Affordable Web Design Services in Indore
            </span>
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6" variants={itemVariants}>
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-orange-400 to-red-400">Website Development</span> for Indore Small Businesses
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8 leading-relaxed" variants={itemVariants}>
            Searching for <strong>Affordable Web Design Services in Indore</strong>? I help small businesses, self-employed professionals, and travel agencies in Indore and Ujjain get more leads. Explore our <Link href="/services" className="text-primary underline">web development services</Link> or check our <Link href="/projects" className="text-primary underline">recent portfolio</Link> to see how we grow local brands.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            <Link href="tel:+919302088025">
              {/* <Button size="lg" variant="primary" className="group border-2 border-accent">
                Free Website Consultation
                <MdCall className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              {/* <SquircleButton
        color="orange"
        label={`Free Website Consultation`}
        icon=""
        className="w-full"
      />  */}
       <SquircleButton
        color="orange"
        icon="phone"
        label='Free Website Consultation'
        
        floatig
      />

            </Link>
            <Link href="/projects">
           {/*    <Button size="lg" variant="outline" className='hover:text-white'>
                View Case Studies
              </Button> */}
              <SquircleButton
        color="white"
        label="View Case Studies"
        className='px-4'
      />
      
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}