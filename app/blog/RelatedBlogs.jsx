"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MdCalendarToday, MdTimer, MdArrowForward } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { useSiteContext } from '../context/SiteContext'

export function RelatedBlogs({
  currentSlug,
  currentCategory,
  currentTags,
  limit = 3
}) {
  const [relatedPosts, setRelatedPosts] = useState([])
  const siteData = useSiteContext()

  useEffect(() => {
    if (!siteData.blogPosts || !currentSlug) return
    const allPosts = siteData.blogPosts.filter((p) => p.slug !== currentSlug)

    const scored = allPosts.map((post) => {
      let score = 0
      if (post.category === currentCategory) score += 3
      if (post.tags && currentTags) {
        const common = post.tags.filter((t) => currentTags.includes(t)).length
        score += common * 2
      }
      return { ...post, _score: score }
    })

    const sorted = scored.sort((a, b) => b._score - a._score).slice(0, limit)

    if (sorted.length < limit) {
      const extra = allPosts
        .filter((p) => !sorted.some((s) => s.slug === p.slug))
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit - sorted.length)
      setRelatedPosts([...sorted, ...extra])
    } else {
      setRelatedPosts(sorted)
    }
  }, [siteData.blogPosts, currentSlug, currentCategory, currentTags, limit])

  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Continue Reading
            </h2>
            <p className="text-gray-500 text-sm mt-1">More guides you might find useful</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Articles <MdArrowForward size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {relatedPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <article className="group h-full flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                  {post.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    {post.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.slice(0, 3).map((tag, j) => (
                          <span key={j} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <MdCalendarToday size={12} /> {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdTimer size={12} /> {post.readingTime} min
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h3 className="font-extrabold text-xl md:text-2xl mb-2">
            Want a Website for Your Business?
          </h3>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto text-sm">
            We build SEO-optimized websites for businesses in Indore, Ujjain & across Madhya Pradesh.
            Free consultation, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get Free Quote <MdArrowForward size={16} />
            </Link>
            <a
              href="https://wa.me/919302088025?text=Hi! I want a website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <FaWhatsapp size={18} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

