"use client"

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui'
import {
  MdArrowBack,
  MdCalendarToday,
  MdTimer,
  MdShare,
  MdClose,
  MdCheck,
  MdEmail,
  MdArrowForward,
  MdPhone,
} from 'react-icons/md'
import {
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaTelegram,
  FaReddit,
  FaCopy,
} from 'react-icons/fa'
import { RelatedBlogs } from '../RelatedBlogs'
import { blogPosts } from '../../data/BlogPosts'

// ── Internal linking map ───────────────────────────────────────────────────────
const internalLinks = {
  'contact us': '/contact',
  'get in touch': '/contact',
  'web development services': '/services',
  'custom website': '/services',
  'portfolio': '/projects',
  'case studies': '/projects',
  'Next.js': '/services',
  'SEO optimization': '/services',
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function processInlineFormatting(text) {
  let r = text
  r = r.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
  r = r.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
  r = r.replace(/\|\|([^|]+)\|\|/g, '<mark class="bg-yellow-100 px-1 rounded text-gray-900">$1</mark>')
  r = r.replace(/\[([^\]]+)\]/g, '<span class="text-blue-600 font-medium">$1</span>')
  Object.keys(internalLinks).forEach((kw) => {
    const url = internalLinks[kw]
    const regex = new RegExp(`\\b(${escapeRegExp(kw)})\\b(?!([^<]+)?>)`, 'gi')
    let done = false
    r = r.replace(regex, (match) => {
      if (!done) {
        done = true
        return `<a href="${url}" class="text-blue-600 hover:underline font-medium transition-colors" title="Learn more about ${match}">${match}</a>`
      }
      return match
    })
  })
  return r
}

function parseBlogContent(content) {
  const lines = content.split('\n')
  let html = ''
  let inList = false
  let listType = 'ul'

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) continue

    if (line.startsWith('* ') && line.endsWith(' *')) {
      if (inList) { html += `</${listType}>\n`; inList = false }
      const t = line.replace(/^\*\s+|\s+\*$/g, '')
      html += `<h2 class="text-2xl md:text-3xl font-extrabold mt-12 mb-5 text-gray-900 leading-tight">${t}</h2>\n`
      continue
    }
    if (line.startsWith('** ') && line.endsWith(' **')) {
      if (inList) { html += `</${listType}>\n`; inList = false }
      const t = line.replace(/^\*\*\s+|\s+\*\*$/g, '')
      const id = t.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      html += `<h3 id="${id}" class="text-xl font-bold mt-9 mb-4 text-gray-800 scroll-mt-24">${t}</h3>\n`
      continue
    }
    if (line.startsWith('*** ') && line.endsWith(' ***')) {
      if (inList) { html += `</${listType}>\n`; inList = false }
      const t = line.replace(/^\*\*\*\s+|\s+\*\*\*$/g, '')
      html += `<h4 class="text-lg font-semibold mt-7 mb-3 text-gray-800">${t}</h4>\n`
      continue
    }
    if (line === '---') {
      if (inList) { html += `</${listType}>\n`; inList = false }
      html += '<hr class="my-10 border-t border-gray-200" />\n'
      continue
    }
    if (line.startsWith('- ')) {
      const item = line.substring(2).trim()
      if (!inList || listType !== 'ul') {
        if (inList) html += `</${listType}>\n`
        html += '<ul class="list-disc pl-6 mb-5 space-y-1.5 marker:text-blue-400">\n'
        inList = true; listType = 'ul'
      }
      html += `<li class="text-gray-700 leading-relaxed">${processInlineFormatting(item)}</li>\n`
      continue
    }
    if (line.startsWith('+ ')) {
      const item = line.substring(2).trim()
      if (!inList || listType !== 'ol') {
        if (inList) html += `</${listType}>\n`
        html += '<ol class="list-decimal pl-6 mb-5 space-y-1.5 marker:text-blue-500 marker:font-semibold">\n'
        inList = true; listType = 'ol'
      }
      html += `<li class="text-gray-700 leading-relaxed">${processInlineFormatting(item)}</li>\n`
      continue
    }
    if (inList) { html += `</${listType}>\n`; inList = false }
    html += `<p class="mb-5 text-gray-700 leading-[1.85] text-[1.05rem]">${processInlineFormatting(line)}</p>\n`
  }
  if (inList) html += `</${listType}>\n`
  return html
}

function extractMetadata(content) {
  const meta = {}
  for (const line of content.split('\n')) {
    if (line.startsWith('META_TITLE: ')) meta.title = line.replace('META_TITLE: ', '')
    if (line.startsWith('META_DESCRIPTION: ')) meta.description = line.replace('META_DESCRIPTION: ', '')
    if (line.startsWith('KEYWORDS: ')) meta.keywords = line.replace('KEYWORDS: ', '').split(',').map((k) => k.trim())
    if (line.startsWith('AUTHOR: ')) meta.author = line.replace('AUTHOR: ', '')
    if (line === '---METADATA_END---') break
  }
  return meta
}

function getContentWithoutMetadata(content) {
  const lines = content.split('\n')
  let idx = 0
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '---METADATA_END---') { idx = i + 1; break }
  }
  return lines.slice(idx).join('\n')
}

// ── Share Modal ────────────────────────────────────────────────────────────────
function ShareModal({ isOpen, onClose, postTitle, postUrl }) {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])
  if (!isOpen) return null

  const shareOptions = [
    { name: 'WhatsApp', icon: <FaWhatsapp className="text-green-500" size={22} />, color: 'hover:bg-green-50', action: () => window.open(`https://wa.me/?text=${encodeURIComponent(`${postTitle}\n${postUrl}`)}`, '_blank') },
    { name: 'Facebook', icon: <FaFacebookF className="text-blue-600" size={22} />, color: 'hover:bg-blue-50', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank') },
    { name: 'Twitter', icon: <FaTwitter className="text-sky-400" size={22} />, color: 'hover:bg-sky-50', action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`, '_blank') },
    { name: 'LinkedIn', icon: <FaLinkedin className="text-blue-700" size={22} />, color: 'hover:bg-blue-50', action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, '_blank') },
    { name: 'Telegram', icon: <FaTelegram className="text-blue-400" size={22} />, color: 'hover:bg-blue-50', action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`, '_blank') },
    { name: 'Reddit', icon: <FaReddit className="text-orange-500" size={22} />, color: 'hover:bg-orange-50', action: () => window.open(`https://reddit.com/submit?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`, '_blank') },
    { name: 'Email', icon: <MdEmail className="text-gray-500" size={22} />, color: 'hover:bg-gray-50', action: () => window.open(`mailto:?subject=${encodeURIComponent(postTitle)}&body=${encodeURIComponent(postUrl)}`) },
    { name: copied ? 'Copied!' : 'Copy Link', icon: copied ? <MdCheck className="text-green-500" size={22} /> : <FaCopy className="text-gray-500" size={22} />, color: copied ? 'bg-green-50' : 'hover:bg-gray-50', action: async () => { await navigator.clipboard.writeText(postUrl); setCopied(true); setTimeout(() => setCopied(false), 2000) } },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h3 className="font-bold text-gray-900">Share this article</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <MdClose size={20} />
          </button>
        </div>
        <div className="p-5 grid grid-cols-4 gap-3">
          {shareOptions.map((opt) => (
            <button
              key={opt.name}
              onClick={opt.action}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-100 ${opt.color} transition-colors`}
            >
              {opt.icon}
              <span className="text-xs text-gray-600 font-medium">{opt.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ── Lead Capture Sidebar CTA ───────────────────────────────────────────────────
function LeadCTA({ category }) {
  const isTravel = category?.toLowerCase().includes('travel')
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
      <div className="text-2xl mb-3">🚀</div>
      <h3 className="font-bold text-lg mb-2">
        {isTravel ? 'Need a Travel Website?' : 'Need a Business Website?'}
      </h3>
      <p className="text-blue-100 text-sm mb-4 leading-relaxed">
        {isTravel
          ? 'We build SEO-optimized travel portals for agencies across India. WhatsApp booking, package management & more.'
          : 'We build fast, SEO-ready websites for businesses in Indore, Ujjain & across MP. Free consultation!'}
      </p>
      <Link
        href="/contact"
        className="block w-full bg-white text-blue-700 font-bold text-sm py-3 rounded-xl text-center hover:bg-blue-50 transition-colors mb-3"
      >
        Get Free Quote →
      </Link>
      <a
        href="https://wa.me/919302088025?text=Hi! I need a website for my business"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
      >
        <FaWhatsapp size={16} />
        WhatsApp Now
      </a>
    </div>
  )
}

// ── Reading Progress Bar ───────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const height = el.scrollHeight - el.clientHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function BlogSlugClient({ slug }) {
  const [post, setPost] = useState(null)
  const [parsedContent, setParsedContent] = useState('')
  const [additionalMetadata, setAdditionalMetadata] = useState({})
  const [showShareModal, setShowShareModal] = useState(false)

  const tableOfContents = useMemo(() => {
    const toc = []
    if (parsedContent) {
      const matches = parsedContent.match(/<h3[^>]*>(.*?)<\/h3>/g)
      matches?.forEach((h3, i) => {
        const text = h3.replace(/<[^>]*>/g, '')
        const idMatch = h3.match(/id="([^"]*)"/)
        toc.push({ text, id: idMatch ? idMatch[1] : `section-${i}` })
      })
    }
    return toc
  }, [parsedContent])

  useEffect(() => {
    const found = blogPosts.find((p) => p.slug === slug)
    if (found) {
      setPost(found)
      const meta = extractMetadata(found.content)
      setAdditionalMetadata(meta)
      setParsedContent(parseBlogContent(getContentWithoutMetadata(found.content)))
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    )
  }

  const displayTitle = additionalMetadata.title || post.title
  const displayAuthor = additionalMetadata.author || post.author
  const keywords = additionalMetadata.keywords || post.tags || []
  const postUrl = typeof window !== 'undefined' ? window.location.href : `https://businesssathi.vercel.app/blog/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: displayTitle,
    image: post.image ? [post.image] : [],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: [{
      '@type': 'Person',
      name: displayAuthor,
      url: 'https://businesssathi.vercel.app/about',
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Business Sathi',
      logo: { '@type': 'ImageObject', url: 'https://businesssathi.vercel.app/apple-icon.jpeg' },
    },
    description: additionalMetadata.description || post.excerpt,
    keywords: keywords.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    articleBody: parsedContent.replace(/<[^>]*>?/gm, ''),
  }

  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />

      <div className="min-h-screen bg-white">
        {/* ── Article Header ── */}
        <header className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-10 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors group"
            >
              <MdArrowBack className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                {post.category}
              </span>
              <button
                onClick={() => setShowShareModal(true)}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-600 transition-colors ml-auto"
              >
                <MdShare size={16} />
                Share
              </button>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {displayTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pt-6 border-t border-gray-100">
              <span className="flex items-center gap-2">
                <MdCalendarToday className="text-blue-500" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </span>
              <span className="flex items-center gap-2">
                <MdTimer className="text-blue-500" />
                {post.readingTime} min read
              </span>
              <span className="font-medium text-gray-700">By {displayAuthor}</span>
            </div>
          </div>
        </header>

        {/* ── Main Content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block lg:col-span-3 lg:order-2">
              <div className="sticky top-20 space-y-6">

                {/* TOC */}
                {tableOfContents.length > 0 && (
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
                      On This Page
                    </h3>
                    <nav className="space-y-1">
                      {tableOfContents.map((item, i) => (
                        <a
                          key={i}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 py-1 pl-3 border-l-2 border-transparent hover:border-blue-500 transition-all"
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Lead CTA */}
                <LeadCTA category={post.category} />

                {/* Phone CTA */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center">
                  <p className="text-sm text-gray-600 mb-3">Talk to us directly</p>
                  <a
                    href="tel:+919302088025"
                    className="flex items-center justify-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                  >
                    <MdPhone size={18} />
                    +91 93020 88025
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Article ── */}
            <article className="lg:col-span-9 lg:order-1">
              {/* Hero image */}
              {post.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-md border border-gray-100 relative h-[280px] md:h-[460px]">
                  <Image
                    src={post.image}
                    alt={`${displayTitle} - Business Sathi Blog`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Related Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((tag, i) => (
                    <Link href="/blog" key={i}>
                      <span className="inline-block border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-700 text-sm px-3 py-1 rounded-full transition-all cursor-pointer">
                        #{tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden mt-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white text-center">
                <h3 className="font-bold text-lg mb-2">Need a Website for Your Business?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Free consultation — we serve Indore, Ujjain, Dewas, Ratlam & all of MP.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Get Free Quote <MdArrowForward size={18} />
                </Link>
              </div>

              {/* Author box */}
              <div className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl shrink-0">
                  {displayAuthor.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{displayAuthor}</div>
                  <div className="text-sm text-gray-500 mb-2">Web Development Expert — Business Sathi</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Helping businesses across Indore, Ujjain & Madhya Pradesh build powerful digital
                    presence with SEO-optimized websites and growth strategies.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* ── Related Posts ── */}
        <RelatedBlogs
          currentSlug={slug}
          currentCategory={post.category}
          currentTags={keywords}
          limit={3}
        />

        {/* ── Bottom Lead Bar ── */}
        <div className="bg-slate-900 py-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-white font-bold text-xl mb-2">
              Ready to grow your business online?
            </p>
            <p className="text-slate-400 text-sm mb-6">
              Get a free website consultation — serving Indore, Ujjain, Dewas & all of MP
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Get Free Quote <MdArrowForward size={18} />
              </Link>
              <a
                href="https://wa.me/919302088025?text=Hi! I want a website for my business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                <FaWhatsapp size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Share Modal */}
        <AnimatePresence>
          {showShareModal && (
            <ShareModal
              isOpen={showShareModal}
              onClose={() => setShowShareModal(false)}
              postTitle={displayTitle}
              postUrl={postUrl}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
