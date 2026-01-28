"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Badge,
  Button,
} from "@/components/ui";
import { MdArrowForward, MdCalendarToday, MdTimer, MdTrendingUp, MdPerson, MdBusiness } from "react-icons/md";
import { useSiteContext } from "../context/SiteContext";
import { useEffect, useState } from "react";
import TechGrid from "../../components/TechGrid";
import DotsStructure from "../../components/DotsStructure";
import Image from "next/image";
import { blogPosts } from "../data/BlogPosts";

export function BlogClient() {

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

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // New Audience Data for SEO
  const audiences = [
    {
      icon: MdBusiness,
      title: "For Small Business Owners",
      desc: "Learn how to leverage Local SEO to dominate markets in Indore, Mumbai, & Delhi. Turn your website into a 24/7 sales machine."
    },
    {
      icon: MdPerson,
      title: "For Freelancers & Self-Employed",
      desc: "Discover how to build a personal brand portfolio that attracts high-ticket international clients and establishes your authority."
    },
    {
      icon: MdTrendingUp,
      title: "For Travel & Service Agencies",
      desc: "Specific insights on booking engines, gallery showcases, and digital marketing strategies to convert visitors into loyal customers."
    }
  ];

  return (
    <div>
      {/* Hero Section - Keyword Enriched */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web Development & Growth <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Your go-to resource for digital success. Whether you are a <strong>Startup Founder</strong>, <strong>Freelancer</strong>, or run a <strong>Travel Agency</strong>, discover actionable strategies to build high-ranking websites and grow your brand online.
          </p>
        </motion.div>
        <section className="absolute z-0 opacity-60 top-0 left-0 h-[70vh] w-full">
          <TechGrid />
        </section>
      </section>

      {/* NEW SECTION: Audience Targeting (SEO Boost) */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Who is this Blog For?</h2>
                <p className="text-muted-foreground">Curated advice to help you scale, no matter your business size.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {audiences.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="h-full bg-background hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our latest tutorials on Next.js, SEO tips for small businesses, and case studies on how we helped local brands go global.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              /* viewport={{ once: true }} */
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden lg:flex lg:flex-row lg:items-center pt-0 lg:p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg lg:h-full lg:w-1/2 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative h-64 md:h-96 w-full">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover hover:scale-105 transition duration-700 ease-out" 
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                  </div>
                </motion.div>

                <div className="p-8 lg:w-1/2 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <Badge variant="primary" className="text-sm px-3 py-1">{blogPosts[0].category}</Badge>
                      <span className="text-xs text-muted-foreground">Featured Read</span>
                    </div>
                    <CardTitle className="mb-4 text-3xl md:text-4xl leading-tight group-hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </CardTitle>
                    <CardDescription className="mb-6 text-base md:text-lg leading-relaxed line-clamp-3">
                      {blogPosts[0].excerpt}
                    </CardDescription>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 text-sm text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center gap-1.5">
                        <MdCalendarToday size={16} className="text-primary" />
                        {formatDate(blogPosts[0].publishedAt)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MdTimer size={16} className="text-primary" />
                        {blogPosts[0].readingTime} min read
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MdPerson size={16} className="text-primary" />
                        {blogPosts[0].author}
                      </div>
                    </div>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button variant="default" size="lg" className="group">
                        Read Full Article
                        <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* All Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {blogPosts.slice(1).map((post) => (
              <motion.div key={post.id}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                    <Card
                    variant="elevated"
                    className="h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                    <div className="relative h-60 w-full overflow-hidden">
                        <Image
                        src={post.image}
                        alt={`${post.title} - Web Development Blog`}
                        fill
                        className="object-cover hover:scale-110 transition duration-500" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-foreground hover:bg-background">
                                {post.category}
                            </Badge>
                        </div>
                    </div>
                    
                    <CardContent className="flex-1 flex flex-col pt-6 px-6">
                        <CardTitle className="mb-3 text-xl line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                        </CardTitle>
                        <CardDescription className="mb-4 flex-1 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                        </CardDescription>

                        <div className="mt-auto space-y-4">
                             {/* Tags */}
                             <div className="flex flex-wrap gap-2">
                                {post?.tags?.slice(0, 3).map((tag, idx) => (
                                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                                    #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <MdCalendarToday size={14} />
                                    <span>{formatDate(post.publishedAt)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MdTimer size={14} />
                                    <span>{post.readingTime} min</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Audience Focused */}
      <section className="py-20 md:py-32 bg-muted/30 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join 500+ Business Owners & Freelancers
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter for exclusive tips on <strong>Scaling your Business</strong>, <strong>SEO Hacks</strong>, and <strong>Web Development Trends</strong> delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
              <Button variant="primary" className='py-3 px-8 shadow-md hover:shadow-lg transition-all'>
                Subscribe Free
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}