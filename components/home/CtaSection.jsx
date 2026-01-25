'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { MdArrowForward, MdCall } from 'react-icons/md'
import ParticleStorm from '../ParticleStorm'
import TechSphere from '../TechSphere'
import { contact } from '../../app/data/Contact'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
 <section className='absolute opacity-80 top-0 left-0  h-[60vh] w-screen'>
        <ParticleStorm />
  </section> 
  <section className='absolute flex items-start justify-center z-0 opacity-40 lg:-top-10 md:-top-10 left-0  h-[60vh] w-screen'>
       
 <TechSphere line={8} />
  </section>
      <div className="relative max-w-4xl z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let’s Build a Website That Brings You Customers
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you are a business owner and want a professional website that actually works, let’s talk.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
         <Link href="tel:+919202302304">
  <Button 
    size="lg"
    className="bg-primary-foreground text-primary hover:bg-opacity-90 group"
  >
    Get Free Website Consultation Now
    <MdCall className="ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
</Link>

            <Link href="/projects">
              <Button 
                size="lg"
                className="border-2 border-primary-foreground hover:text-primary text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

          <motion.p
            className="mt-8 text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            📞 Or call us at {contact.phone} for a quick consultation
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
