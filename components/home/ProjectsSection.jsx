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
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our recent work and successful client collaborations
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
          /* viewport={{ once: true }} */
          transition={{ duration: 0.6 }}
            key={project.slug} variants={itemVariants}>
              <Link href={`/projects/${project.slug}`}>
                <Card variant="elevated" className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-shadow group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.headline}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain scale-90"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </div>
                  <CardContent className="flex-1 flex flex-col pt-6">
                    <CardTitle className="mb-2">{project?.headline}</CardTitle>
                    <CardDescription className="mb-4 flex-1">
                      {project?.problem?.length > 100 ? `${project?.problem?.substring(0, 100)}...` : project?.problem}
                    </CardDescription>

                    {/* Key Results */}
                    <div className="flex flex-wrap gap-2">
                      {project?.results.slice(0, 3).map((result, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {result.length > 20 ? result.substring(0, 20) + '...' : result}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/projects">
            <Button size="lg" variant="primary" className="group">
              View All Projects
              <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
