"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageHero } from "@/components/PageHero"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Badge,
} from "@/components/ui";
import SquircleButton from '@/components/SquircleButton';
import Link from "next/link";
import { FaAngleDoubleRight, FaChartLine, FaLaptopCode, FaRocket } from "react-icons/fa";
import { projectDetails } from "../data/Projects";

export function ProjectsClient() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    setProjects(projectDetails);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main>
      <PageHero
        effect="zoom"
        images={['/hero1.png']}
        title="Web Development Case Studies"
        subtitle="Explore our portfolio of high-performance websites. From Travel Agency Portals in Delhi to E-commerce Stores in Mumbai, see how we deliver measurable business results across India."
        ctaPrimary={{
          text: "Get a Free Quote",
          href: "/contact"
        }}
      />

      {/* NEW SEO SECTION: Methodology & Industry Focus (Word Count Booster) */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-4">How We Deliver Digital Success</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    We don't just write code; we solve business problems. Our web development process involves deep market research, SEO planning, and performance optimization to ensure your website ranks high and converts visitors.
                </p>
            </motion.div>

            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <motion.div 
                    className="bg-background p-6 rounded-xl shadow-sm border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <FaRocket size={24} />
                        <h3 className="font-bold text-lg">Travel Portals</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        For <strong>Tour Operators and Travel Agents</strong>, we build dynamic websites with itinerary management, gallery showcases, and WhatsApp booking integrations. Our sites are optimized for keywords like "Best Tour Packages India" to drive organic traffic.
                    </p>
                </motion.div>

                <motion.div 
                    className="bg-background p-6 rounded-xl shadow-sm border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <FaChartLine size={24} />
                        <h3 className="font-bold text-lg">Small Business SEO</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        We help <strong>Local Businesses in Indore, Pune, and Bangalore</strong> dominate their local market. By implementing Schema Markup and Local SEO strategies, we ensure your business appears in "Near Me" searches on Google Maps.
                    </p>
                </motion.div>

                <motion.div 
                    className="bg-background p-6 rounded-xl shadow-sm border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <FaLaptopCode size={24} />
                        <h3 className="font-bold text-lg">Technical Excellence</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Using <strong>Next.js and React</strong>, we move beyond slow WordPress templates. We deliver custom coded websites with 100/100 Google PageSpeed scores, ensuring your users get a lightning-fast experience on mobile and desktop.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
             <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
             <p className="text-muted-foreground">Browse our recent work across various industries.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.article key={project.slug} variants={itemVariants}>
                <Card
                  variant="elevated"
                  className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border/50 three-d-box-white"
                >
                  <div className="relative h-64 overflow-hidden bg-muted/20">
                    <div className="flex items-center justify-center h-full">
                       <div className="relative h-full w-full">
                          <Image
                            src={project.images[0]}
                            alt={`Web Development Case Study: ${project.headline}`}
                            width={600}
                            height={400}
                            className="w-full h-full object-contain hover:scale-105 transition duration-700 ease-in-out"
                            style={{ aspectRatio: '16/9' }}
                          />
                        </div>
                    </div>
                  </div>
                  
                  <CardContent className="flex-1 flex flex-col pt-8 px-8 pb-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge variant="primary" className="mb-2 text-xs uppercase tracking-wider">
                        {project.industry}
                      </Badge>
                      <Badge variant="outline" className="mb-2 text-xs">
                         Location: {project.location || 'India'}
                      </Badge>
                    </div>
                    
                    <CardTitle className="mb-3 text-2xl group-hover:text-primary transition-colors">
                      {project.headline}
                    </CardTitle>
                    
                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed line-clamp-3">
                      {project.problem}
                    </p>

                    {/* Key Results - Semantic List */}
                    <div className="mb-8 bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-bold text-sm mb-3 text-foreground flex items-center gap-2">
                        <FaChartLine className="text-primary" /> Key Results:
                      </h4>
                      <ul className="space-y-2">
                        {project.results.slice(0, 3).map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-green-500 mr-2 font-bold">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="w-full mt-auto">
                      <SquircleButton color="white">
                        Read Full Case Study
                      </SquircleButton>
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary/5 text-center border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to become our next Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you need a <strong>Personal Portfolio</strong> or a complex <strong>Travel Booking Website</strong>, we have the expertise to build it.
            </p>
            <Link href="/contact">
              <SquircleButton color="blue">
                Get a Free Quote
              </SquircleButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}