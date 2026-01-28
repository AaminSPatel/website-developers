'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui'
import { MdAdd, MdRemove } from 'react-icons/md'

export function FaqSection() {
  const [openId, setOpenId] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'How much does a website cost for a small business in India?',
      answer: 'Our pricing is highly competitive for the Indian market. A standard small business website typically starts from a budget-friendly range (under ₹15k - ₹20k), while custom solutions like Travel Agency portals with booking features or E-commerce stores vary based on complexity. Contact us for a free quote tailored to your needs.'
    },
    {
      id: 2,
      question: 'Do you create specialized websites for Travel Agencies?',
      answer: 'Yes, we are experts in Travel Website Development. We understand that travel agents need visually appealing sites. We build features like dynamic itinerary displays, photo galleries, booking inquiry forms, and WhatsApp integration to help you convert visitors into tourists effectively.'
    },
    {
      id: 3,
      question: 'I am based in Mumbai or Delhi. Can we work together?',
      answer: 'Absolutely. While we are based in Indore & Ujjain, 90% of our clients are from major metro cities like Mumbai, Bangalore, and Delhi NCR. We manage the entire project professionally via Zoom/Google Meet and WhatsApp, ensuring you get agency-quality work at freelance rates.'
    },
    {
      id: 4,
      question: 'What technologies do you use for development?',
      answer: 'We primarily use the modern JAMstack: Next.js, React, Node.js, and Tailwind CSS. Unlike slow WordPress sites, our Next.js websites are lightning-fast, more secure, and rank significantly better on Google due to Server-Side Rendering (SSR) capabilities.'
    },
    {
      id: 5,
      question: 'Will my website be mobile-friendly and SEO optimized?',
      answer: 'Yes, we follow a "Mobile-First" approach. Every website we build is fully responsive on all devices (Mobile, Tablet, Desktop). We also include core On-Page SEO services like meta tag optimization, schema markup, and speed optimization to help your site rank.'
    },
    {
      id: 6,
      question: 'Do you provide website maintenance and support?',
      answer: 'Yes, we offer ongoing website maintenance packages. Whether you need to update content, fix issues, or add new features, we are just a message away. We support our clients long after the website is launched to ensure their business keeps growing.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our web development services
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 40 , scale:0.6}}
              whileInView={{ opacity: 1, y: 0, scale:1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                variant="elevated"
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground pr-8 text-left">
                      {faq.question}
                    </h3>
                    <div className="text-primary flex-shrink-0">
                      {openId === faq.id ? (
                        <MdRemove size={24} />
                      ) : (
                        <MdAdd size={24} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-muted-foreground mt-4 leading-relaxed text-left">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}