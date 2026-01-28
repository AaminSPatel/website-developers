'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardTitle, Badge, Button } from '@/components/ui'
import { MdArrowForward } from 'react-icons/md'
import { projectDetails } from '../../app/data/Projects'

export function ProjectsSection() {
  const projects = projectDetails
  const featuredProjects = projects.slice(0, 3)

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

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - SEO Enhanced */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Web Development Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just design websites; we build digital assets that solve business problems. 
            From <strong>high-converting travel agency portals</strong> to <strong>SEO-focused small business websites</strong> and personal portfolios, explore how we have helped clients across India achieving their digital goals.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects?.map((project) => (
            <motion.div
             initial={{ opacity: 0, y: 20, scale:0.8 }}
             whileInView={{ opacity: 1, y: 0, scale:1 }}
             transition={{ duration: 0.6 }}
             key={project.slug} variants={itemVariants}>
              <Link href={`/projects/${project.slug}`}>
                <Card variant="elevated" className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-shadow group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={`${project.headline} - Website Project`}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain scale-90"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </div>
                  <CardContent className="flex-1 flex flex-col pt-6">
                    <CardTitle className="mb-2 line-clamp-1">{project?.headline}</CardTitle>
                    <CardDescription className="mb-4 flex-1 line-clamp-3">
                      {project?.problem}
                    </CardDescription>

                    {/* Key Results */}
                    <div className="flex flex-wrap gap-2">
                      {project?.results.slice(0, 3).map((result, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {result.length > 25 ? result.substring(0, 25) + '...' : result}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Closing Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just a few examples of our expertise in Next.js and modern web technologies. 
            Want to see how we can transform your business ideas into reality?
          </p>
          <Link href="/projects">
            <Button size="lg" variant="primary" className="group">
              View All Case Studies
              <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}