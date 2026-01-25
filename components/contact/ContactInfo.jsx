'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle } from '@/components/ui'
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { contact } from '@/app/data/Contact'

export function ContactInfo() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const infoItems = [
    {
      icon: MdEmail,
      title: 'Email',
      content: contact.email,
      href: `mailto:${contact.email}`
    },
    {
      icon: MdPhone,
      title: 'Phone',
      content: contact.phone,
      href: `tel:${contact.phone}`
    },
    {
      icon: MdLocationOn,
      title: 'Address',
      content: contact.address
    },
    {
      icon: MdAccessTime,
      title: 'Hours',
      content: 'Mon - Fri: 9am - 6pm PST'
    }
  ]

  return (
    <motion.div
      className="grid grid-cols-1 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {infoItems.map((item, idx) => {
        const Icon = item.icon

        return (
          <motion.div key={idx} variants={itemVariants}>
            <Card variant="elevated" className="h-full">
              <CardContent className="py-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
