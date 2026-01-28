'use client'

import { motion } from 'framer-motion'
import { Card, Badge } from '@/components/ui'
import { MdStar } from 'react-icons/md'

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CEO, TechStartup Inc',
      text: 'Exceptional work! They transformed our vision into a stunning reality. The website is fast, looks great on mobile, and our leads have increased significantly.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Founder, Travel Agency',
      text: 'Professional, responsive, and delivered on time. The booking features they built for our travel portal are working perfectly. Highly recommended for tourism websites.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Davis',
      title: 'Marketing Director',
      text: 'Outstanding design and development. They really understood our SEO needs and created a site that actually ranks. Great experience working with this freelance team.',
      rating: 5
    },
    {
      id: 4,
      name: 'John Wilson',
      title: 'Business Owner',
      text: 'Best investment we made. Our local business website generates leads consistently now. The direct WhatsApp support makes everything so easy.',
      rating: 5
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by Businesses Across India
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From ambitious startups in Bangalore to established Travel Agencies in Delhi, 
            see why business owners trust us for their web development needs.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
            initial={{ opacity: 0, y: 20, scale:0.5 }}
            whileInView={{ opacity: 1, y: 0, scale:1 }}
            transition={{ duration: 0.6 }}
            key={testimonial.id} variants={itemVariants}>
              <Card variant="elevated" className="h-full flex flex-col p-6 hover:shadow-lg transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <MdStar key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground mb-6 flex-1 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges - Enhanced Text */}
        <motion.div
          className="mt-16 pt-12 border-t border-border flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Badge variant="secondary" className="text-sm py-2 px-4">
            ⭐ 5-Star Rated Service
          </Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">
            🏆 Expert Development Team
          </Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">
            ✅ 100% Client Satisfaction
          </Badge>
        </motion.div>
      </div>
    </section>
  )
}