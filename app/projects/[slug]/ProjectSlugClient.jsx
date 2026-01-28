'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Badge, Button, Card, CardContent } from '@/components/ui'
import { MdArrowBack, MdLaunch, MdStar } from 'react-icons/md'
import { FaPhone, FaWhatsapp, FaQuoteLeft } from 'react-icons/fa'
import { projectDetails } from '../../data/Projects'
import { contact } from '../../data/Contact'

export function ProjectSlugClient({ slug }) {
  const [project, setProject] = useState(null)
  
  useEffect(() => {
    const foundProject = projectDetails?.find(p => p.slug === slug)
    setProject(foundProject)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
            <div className="h-4 w-32 bg-muted rounded mb-4"></div>
            <p className="text-muted-foreground">Loading Case Study...</p>
        </div>
      </div>
    )
  }

  // Enhanced Structured Data with Review
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${project.headline} Case Study`,
    "headline": project.headline,
    "description": project.problem,
    "image": project.images[0],
    "author": {
      "@type": "Organization",
      "name": "Website Developers India"
    },
    "keywords": project.techStack ? project.techStack.join(", ") : "",
    "url": `${contact.url}/projects/${slug}`,
    ...(project.link && { "sameAs": project.link }),
    // Adding Review Schema for Rich Snippets
    ...(project.testimonial && {
      "review": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": project.testimonial.name
        },
        "reviewBody": project.testimonial.content,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    })
  }

  return (
    <article className="min-h-screen bg-background text-foreground">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      {/* Hero Section */}
      <header className="bg-muted/30 py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <MdArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 text-sm px-3 py-1 uppercase tracking-wide">
              {project.industry || "Web Development"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {project.headline}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              How we helped {project.clientName || "our client"} achieve digital success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {project.link && (
                 <a href={project.link} target="_blank" rel="noopener noreferrer">
                   <Button size="lg" variant="primary" className="shadow-lg hover:shadow-primary/25">
                     Visit Live Website <MdLaunch className="ml-2" />
                   </Button>
                 </a>
              )}

              <a href={`https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I saw the ${project.headline} case study. I'm interested in a similar website.`)}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700">
                  Discuss on WhatsApp <FaWhatsapp className="ml-2 text-lg" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">The Challenge</h2>
            <div className="text-lg text-muted-foreground leading-relaxed">
              {project.problem ? (
                <p>{project.problem}</p>
              ) : (
                <p>The client needed a robust digital solution to overcome operational inefficiencies and improve their online visibility in a competitive market.</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
            <div className="text-lg text-muted-foreground leading-relaxed">
              {project.solution ? (
                <p>{project.solution}</p>
              ) : (
                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>We implemented a custom Next.js solution focusing on speed, SEO, and user conversion.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Proof */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold mb-10 text-center">Project Gallery</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {project?.images?.map((img, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                    <Image 
                        src={img} 
                        alt={`${project.headline} Screenshot ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results ? (
                project.results.slice(0,3).map((result, idx) => (
                  <div key={idx} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <span className="text-3xl font-bold mb-2 block">✓</span>
                    <p className="text-lg font-medium">{result}</p>
                  </div>
                ))
              ) : (
                <p className="text-center w-full">Project delivered successfully with high client satisfaction.</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Client Testimonial Section */}
      {project.testimonial && (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-8">
                         <h2 className="text-3xl font-bold mb-2">What the Client Says</h2>
                         <div className="flex justify-center gap-1 text-yellow-400">
                             {[...Array(5)].map((_, i) => <MdStar key={i} size={24} />)}
                         </div>
                    </div>
                    
                    <Card className="bg-muted/30 border-primary/20 relative">
                        <div className="absolute top-0 left-0 -mt-6 ml-6 text-primary/20">
                            <FaQuoteLeft size={60} />
                        </div>
                        <CardContent className="p-8 md:p-12 text-center">
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                                "{project.testimonial.content}"
                            </blockquote>
                            
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg overflow-hidden">
                                   {project.testimonial.avatar ? (
                                     <Image src={project.testimonial.avatar} alt={project.testimonial.name} width={48} height={48} className="object-cover" />
                                   ) : (
                                     project.testimonial.name.charAt(0)
                                   )}
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-foreground">{project.testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.techStack?.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="px-4 py-2 text-base">
                  {tech}
                </Badge>
              ))}
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a website like this?</h2>
            <p className="text-muted-foreground mb-8">Let's build a high-performance website for your business.</p>
            <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>
              <Button size="lg" variant="primary" className="px-8 shadow-xl">
                Start Your Project <FaPhone className="ml-2" />
              </Button>
            </a>
        </div>
      </section>
    </article>
  )
}