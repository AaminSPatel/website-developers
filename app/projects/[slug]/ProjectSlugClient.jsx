'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Card, CardContent, Badge, Button, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui'
import Autoplay from "embla-carousel-autoplay"
import { MdArrowBack, MdCall, MdLaunch } from 'react-icons/md'
import { projectDetails } from '../../data/Projects'
import { contact } from '../../data/Contact'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

export function ProjectSlugClient({ slug }) {
  const [project, setProject] = useState(null)
  useEffect(() => {
    //console.log('slug',slug);
    
    const foundProject = projectDetails?.find(p => p.slug === slug)
   // console.log('found project', foundProject);
    
    setProject(foundProject)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.headline,
    "description": project.problem,
    "url": `${contact.url}/projects/${slug}`,
    "image": project.images[0],
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Portfolio Developer"
    },
    "keywords": project.techStack ? project.techStack.join(", ") : [],
    "featureList": project.highlights || [],
    "screenshot": project.images
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <MdArrowBack className="mr-2" />
            Back to Case Studies
          </Link>

          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              {project.industry || "Business Solution"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.headline || project.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.clientName && `Client: ${project.clientName}`}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>
              <Button size="lg" variant="outline" className="group">
                Build a Similar Website <FaPhone />
              </Button>
            </a>
            <a href={`https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi Aamin, I saw your ${project.headline} project and want to know more about this project and budget.`)}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                WhatsApp Us <FaWhatsapp />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Problem</h2>
            <div className="text-lg text-muted-foreground leading-relaxed">
              {project.problem ? (
                <p>{project.problem}</p>
              ) : (
                <p>Our client was struggling with outdated online presence and losing potential customers to competitors. Their basic website couldn't handle modern business requirements effectively.</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Solution</h2>
            <div className="text-lg text-muted-foreground leading-relaxed">
              {project.solution ? (
                <p>{project.solution}</p>
              ) : (
                <div className="prose prose-lg max-w-none">
                  {project?.details?.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph?.trim()}</p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Results</h2>
            <div className="grid gap-4">
              {project.results ? (
                project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-primary text-2xl mr-4">✓</span>
                    <p className="text-lg">{result}</p>
                  </div>
                ))
              ) : project.businessMetrics ? (
                Object.entries(project.businessMetrics).map(([key, value]) => (
                  <div key={key} className="flex items-start">
                    <span className="text-primary text-2xl mr-4">✓</span>
                    <p className="text-lg capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-lg text-muted-foreground">Measurable business results achieved through this solution.</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Proof */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Visual Proof</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project?.images?.slice(0, 6).map((image, idx) => (
                <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={image}
                    alt={`${project.headline} - Screenshot ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What This Website Does For The Business */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What This Website Does For The Business
            </h2>
            <div className="grid gap-4">
              {project.highlights ? (
                project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-primary text-2xl mr-4">✓</span>
                    <p className="text-lg">{highlight}</p>
                  </div>
                ))
              ) : project.keyFeatures ? (
                project.keyFeatures.slice(0, 5).map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-primary text-2xl mr-4">✓</span>
                    <p className="text-lg">{feature}</p>
                  </div>
                ))
              ) : (
                <div className="text-lg text-muted-foreground">
                  <p>This website delivers measurable business benefits including increased leads, improved customer engagement, and streamlined operations.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.techStack.map((tech, idx) => (
                <Card key={idx} className="text-center p-4">
                  <CardContent className="p-0">
                    <p className="font-semibold">{tech}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strong Closing CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want Similar Results for Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can transform your business with a high-converting website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone}`}  className='w-fit mx-auto'>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 cursor-pointer">
                  Call Now: {contact.phone}
                </Button>
              </a>
              <a href={`https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi Aamin, I saw your ${project.headline} project and want to know more about this project and budget.`)}`} target="_blank" rel="noopener noreferrer" className='w-fit mx-auto'>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 cursor-pointer">
                  WhatsApp Us <FaWhatsapp size={21} className='text-green-500 p-0.5 scale-125 bg-white rounded-full'/>
                </Button>
              </a>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
