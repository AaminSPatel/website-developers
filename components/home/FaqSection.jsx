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
      question: 'What is your typical project timeline?',
      answer: 'Most projects take between 4-12 weeks depending on complexity and scope. We break down the project into phases and keep you updated throughout the process.'
    },
    {
      id: 2,
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer ongoing support and maintenance packages to keep your website running smoothly, secure, and up-to-date with the latest features.'
    },
    {
      id: 3,
      question: 'What technologies do you use?',
      answer: 'We primarily use Next.js, React, Node.js, PostgreSQL, and other modern technologies. We choose the best stack for your specific needs.'
    },
    {
      id: 4,
      question: 'Will my website be optimized for SEO?',
      answer: 'Absolutely. We implement comprehensive SEO best practices including semantic HTML, meta tags, schema markup, and performance optimization.'
    },
    {
      id: 5,
      question: 'Do you work with startups and small businesses?',
      answer: 'Yes! We work with businesses of all sizes, from early-stage startups to established enterprises. We offer flexible pricing and solutions.'
    },
    {
      id: 6,
      question: 'How do you handle revisions and changes?',
      answer: 'We include revision rounds in our packages and use collaborative tools for feedback. We work closely with you to ensure your satisfaction.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Items */}
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
                    <h3 className="text-lg font-semibold text-foreground pr-8">
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
                        <p className="text-muted-foreground mt-4 leading-relaxed">
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
