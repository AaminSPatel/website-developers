'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { MdCall, MdEmail } from 'react-icons/md'
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

      <div className="relative max-w-4xl z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build a Website That Actually Brings Customers?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop losing potential clients to competitors with outdated websites. 
            Whether you run a <strong>Travel Agency</strong> needing a booking portal, or a <strong>Small Business</strong> looking for local visibility, 
            I provide custom web development solutions that fit your budget and goals.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="tel:+919302088025">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8"
              >
                Get Free Website Consultation
                <MdCall className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted group px-8"
              >
                Request a Quote
                <MdEmail className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            className="mt-10 text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ⚡ Fast Response Guaranteed • 📞 Direct Support at {contact.phone}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}