'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function SeoContentSection() {
  return (
    <section className="py-16 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Affordable Web Design Services in Indore for Business Growth</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Welcome to Indore's hub for high-performance digital solutions. As a specialized <strong>website developer in Indore</strong>, I help small businesses and self-employed professionals in Indore and Ujjain establish a strong online presence. For more details on what we offer, visit our <Link href="/services" className="text-primary font-bold">Services Page</Link>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">Web Design for Travel Agencies</h3>
              <p className="text-muted-foreground mb-4">
                The tourism industry in Madhya Pradesh is unique. We provide specialized <Link href="/services" className="text-primary underline">Travel Portal Development</Link> to help agents in Indore and Ujjain convert more pilgrims and tourists.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4">Portfolio for Professionals</h3>
              <p className="text-muted-foreground mb-4">
                Are you a freelancer? We create stunning <Link href="/projects" className="text-primary underline">personal portfolios</Link> using Next.js that help you stand out in the global gig economy.
              </p>
            </motion.div>
          </div>
        </article>
      </div>
    </section>
  )
}