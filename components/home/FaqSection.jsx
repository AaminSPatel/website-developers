'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui'
import { MdAdd, MdRemove } from 'react-icons/md'
import SquircleButton from '../SquircleButton'

export function FaqSection() {
  const [openId, setOpenId] = useState(null)
  const faqs = [
    { id: 1, question: 'What is the cost of affordable web design services in Indore?', answer: 'For small businesses in Indore, our website packages start from a budget-friendly range (approx. ₹12k - ₹18k). We focus on providing high-quality Next.js sites that offer better ROI than generic templates.' },
    { id: 2, question: 'Are you a local website developer in Indore?', answer: 'Yes, we are based in Indore & Ujjain. This allows us to provide direct support and understand the local market better than outside agencies, ensuring your business gets the right visibility.' },
    { id: 3, question: 'Do you build websites for self-employed professionals?', answer: 'Absolutely. We specialize in portfolio and service-based websites for freelancers, doctors, lawyers, and consultants in Indore who want to establish a professional online presence.' },
    { id: 4, question: 'How long does it take to build a small business website?', answer: 'Typically, an optimized small business website takes 7-10 days. We follow an agile process to get your Indore business online as quickly as possible without compromising on SEO.' },
    { id: 5, question: 'Will my website rank for Indore-based keywords?', answer: 'Yes, our primary focus is local SEO. We optimize your site for keywords like "Services in Indore" to ensure local customers find you easily.' },
    { id: 6, question: 'Is maintenance included in your Indore web design packages?', answer: 'We offer flexible maintenance plans. Whether you need content updates or technical support, our Indore-based team is just a WhatsApp message away.' }
  ]
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">FAQs about Web Design in Indore</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about our local development services</p>
        </motion.div>
        <div className="space-y-8">
          {faqs.map((faq,i) => (
               <motion.div
          
          initial={i%2===0?{x:-70, opacity:0.7, scale:0.7}:{x:70, opacity:0.7, scale:0.7}}
          whileInView={{x:0, opacity:1, scale:1}}
          viewport={{ once: false }}
          transition={{duration:0.4, delay:i*0.04}}
           key={faq.id} className="three-d-box-white w-full cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setOpenId(openId === faq.id ? null : faq.id)}>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                 {/*  <SquircleButton color='white' label={faq.question} className='w-full'/> */}
                  <button 
                    className="min-w-11 h-11  flex items-center justify-center rounded-lg  text-black shadow-md hover:shadow-lg transition-all" 
                    onClick={(e) => {e.stopPropagation(); setOpenId(openId === faq.id ? null : faq.id); }}
                  >
                    {openId === faq.id ? <MdRemove className="h-5 w-5" /> : <MdAdd className="h-5 w-5" />}
                  </button>
                    {/* <SquircleButton color='blue'>
                              {openId === faq.id ? <MdRemove className="h-8 w-4 text-xl" /> : <MdAdd className="h-8 w-4 text-xl" />}
                            </SquircleButton> */}
                 {/*  <div className="text-primary">{openId === faq.id ? <MdRemove size={24} /> : <MdAdd size={24} />}</div>
               */}  </div>
                {openId === faq.id && <p className="text-muted-foreground mt-4 leading-relaxed text-left">{faq.answer}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}