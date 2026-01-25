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
import { MdArrowForward, MdCalendarToday, MdTimer } from "react-icons/md";
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

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          className="max-w-4xl z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Tips, insights, and best practices for web development and digital
            growth
          </p>
        </motion.div>
        <section className="absolute z-0 opacity-60 top-0 left-0  h-[70vh] w-full">
          <TechGrid />
        </section>
        <section className="absolute z-0 opacity-60 top-0 left-0  h-[30vh] w-full">
          <DotsStructure />
        </section>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
             /*  viewport={{ once: true }} */
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden lg:flex lg:flex-row lg:items-center pt-0  lg:p-6">
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg lg:h-full lg:w-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative h-64 md:h-96 ">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover md:object-fit hover:scale-100 scale-105 transition duration-500" 
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                </motion.div>

                <div className="p-8 lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <Badge variant="primary">{blogPosts[0].category}</Badge>
                    </div>
                    <CardTitle className="mb-3 text-3xl">
                      {blogPosts[0].title}
                    </CardTitle>
                    <CardDescription className="mb-4 text-base">
                      {blogPosts[0].excerpt}
                    </CardDescription>
                  </div>
                  <div>
                    <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MdCalendarToday size={16} />
                        {formatDate(blogPosts[0].publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <MdTimer size={16} />
                        {blogPosts[0].readingTime} min read
                      </div>
                      <span>by {blogPosts[0].author}</span>
                    </div>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button variant="primary" className="group">
                        Read Article
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
                <Card
                  variant="elevated"
                  className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  
                    <div className="relative h-64  ">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover md:object-fit hover:scale-100 scale-105 transition duration-500" 
                      priority
                      sizes="(max-width: 368px) 60vw, (max-width: 400px) 40vw, 400px"
                    />
                  </div>
                  <CardContent className="flex-1 flex flex-col pt-3">
                    <div className="mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="mb-2 text-xl">{post.title}</CardTitle>
                    <CardDescription className="mb-4 flex-1">
                      {post.excerpt}
                    </CardDescription>

                    <div className="space-y-3 mb-6 py-4 border-t border-border text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>{post.readingTime} min read</span>
                      </div>
                      <p>by {post.author}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post?.tags?.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/blog/${post.slug}`} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full cursor-pointer bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-muted/30 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest articles, tips, and insights delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary" className='border-2 border-accent p-5 cursor-pointer'>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
