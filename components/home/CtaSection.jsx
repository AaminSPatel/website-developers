'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { MdCall, MdEmail } from 'react-icons/md'
import { contact } from '../../app/data/Contact'
import SquircleButton from '../SquircleButton'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="relative max-w-4xl z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready for the Best Affordable Web Design Services in Indore?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Don't let your local competition in Indore win. Check our <Link href="/projects" className="text-primary underline">case studies</Link> or contact us for a free quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="tel:+919302088025">
                        <SquircleButton color='orange' label='Call Local Support' icon='phone'/>

             {/*  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Call Local Support <MdCall className="ml-2" />
              </Button> */}
            </Link>

            <Link href="/contact">
            <SquircleButton color='white' label='Request a Quote' icon='email' className='px-8'/>
            
             {/*  <Button size="lg" variant="outline" className="border-2 px-8">
                Request a Quote <MdEmail className="ml-2" />
              </Button> */}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}