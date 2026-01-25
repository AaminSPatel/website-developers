'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import { MdCalendarToday, MdTimer, MdArrowForward } from 'react-icons/md'
import { useSiteContext } from '../context/SiteContext'

export function RelatedBlogs({ currentSlug, currentCategory, currentTags, limit = 3 }) {
  const [relatedPosts, setRelatedPosts] = useState([])
  const siteData = useSiteContext()
  
  useEffect(() => {
    if (!siteData.blogPosts || !currentSlug) return
    
    // Filter out current post
    const allPosts = siteData.blogPosts.filter(post => post.slug !== currentSlug)
    
    // Calculate similarity score for each post
    const postsWithScore = allPosts.map(post => {
      let score = 0
      
      // Category match (highest weight)
      if (post.category === currentCategory) {
        score += 3
      }
      
      // Tag matches (medium weight)
      if (post.tags && currentTags) {
        const commonTags = post.tags.filter(tag => 
          currentTags.includes(tag)
        ).length
        score += commonTags * 2
      }
      
      // Content similarity (basic keyword matching)
      if (post.title && typeof post.title === 'string') {
        const titleWords = post.title.toLowerCase().split(/\s+/)
        const currentWords = currentTags || []
        const titleMatches = titleWords.filter(word => 
          currentWords.some(tag => tag.toLowerCase().includes(word) || word.includes(tag.toLowerCase()))
        ).length
        score += titleMatches * 0.5
      }
      
      return { ...post, relevanceScore: score }
    })
    
    // Sort by relevance score (descending) and take top posts
    const sortedPosts = postsWithScore
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit)
    
    // If we don't have enough related posts by score, fill with latest posts
    if (sortedPosts.length < limit) {
      const latestPosts = allPosts
        .filter(post => !sortedPosts.some(p => p.slug === post.slug))
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, limit - sortedPosts.length)
      
      setRelatedPosts([...sortedPosts, ...latestPosts])
    } else {
      setRelatedPosts(sortedPosts)
    }
  }, [siteData.blogPosts, currentSlug, currentCategory, currentTags, limit])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  // Fallback if no related posts found
  if (relatedPosts.length === 0) {
    return (
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Explore More Articles</h2>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No related articles found.</p>
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                Browse All Articles
                <MdArrowForward />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Articles</h2>
            <p className="text-gray-600 mt-2">More insights you might find valuable</p>
          </div>
          <Link href="/blog" className="mt-4 md:mt-0">
            <Button variant="ghost" className="gap-2">
              View All
              <MdArrowForward />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Featured Image */}
                    {post.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 text-accent rounded-md">
                          <Badge variant="primary" className="text-xs bg-white/30 ">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {post.excerpt || 'Read this insightful article...'}
                        </p>
                      </div>
                      
                      {/* Meta Info */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <MdCalendarToday size={12} />
                              {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1">
                              <MdTimer size={12} />
                              {post.readingTime}
                            </span>
                          </div>
                        </div>
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {post.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                +{post.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="primary" className="gap-2 px-8">
              Explore All Articles
              <MdArrowForward />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Alternative: Simple Related Blogs Component (if you don't have categories/tags)
export function SimpleRelatedBlogs({ currentSlug, limit = 3 }) {
  const [relatedPosts, setRelatedPosts] = useState([])
  const siteData = useSiteContext()
  
  useEffect(() => {
    if (!siteData.blogPosts || !currentSlug) return
    
    // Filter out current post and get latest posts
    const latestPosts = siteData.blogPosts
      .filter(post => post.slug !== currentSlug)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, limit)
    
    setRelatedPosts(latestPosts)
  }, [siteData.blogPosts, currentSlug, limit])

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-8 border-t">
      <h3 className="text-xl font-bold mb-6 text-gray-900">You Might Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
          >
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {post.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {post.description || ''}
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}