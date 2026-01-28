'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head' // Needed for Schema
import { motion, AnimatePresence } from 'framer-motion'
import { Card, Badge, Button } from '@/components/ui'
import { 
  MdArrowBack, 
  MdCalendarToday, 
  MdTimer, 
  MdShare, 
  MdClose,
  MdCheck,
  MdEmail,
  MdArrowForward
} from 'react-icons/md'
import { 
  FaTwitter, 
  FaFacebookF, 
  FaWhatsapp, 
  FaLinkedin,
  FaTelegram,
  FaReddit,
  FaCopy
} from 'react-icons/fa'
import { RelatedBlogs } from '../RelatedBlogs'
import { blogPosts } from '../../data/BlogPosts'
import { contact } from '../../data/Contact' // Assuming you have this for global URLs

// --- 1. SMART INTERNAL LINKING STRATEGY ---
// This map defines keywords to automatically link within your blog content
const internalLinks = {
  'contact us': '/contact',
  'get in touch': '/contact',
  'web development services': '/services',
  'custom website': '/services',
  'portfolio': '/projects',
  'case studies': '/projects',
  'Next.js': '/services',
  'SEO optimization': '/services'
}

// Helper to escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function processInlineFormatting(text) {
  let result = text;
  
  // Basic formatting
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
  result = result.replace(/\*([^*]+)\*/g, '<em class="italic text-gray-800">$1</em>')
  result = result.replace(/\|\|([^|]+)\|\|/g, '<mark class="bg-yellow-100 px-1 rounded text-gray-900">$1</mark>')
  result = result.replace(/\[([^\]]+)\]/g, '<span class="text-primary font-medium">$1</span>')

  // AUTOMATED INTERNAL LINKING
  // This looks for keywords and wraps them in links, but avoids replacing inside existing HTML tags
  Object.keys(internalLinks).forEach(keyword => {
    const url = internalLinks[keyword];
    const regex = new RegExp(`\\b(${escapeRegExp(keyword)})\\b(?!([^<]+)?>)`, 'gi');
    
    // Only link the first occurrence to avoid spamming
    let replaced = false;
    result = result.replace(regex, (match) => {
      if (!replaced) {
        replaced = true;
        return `<a href="${url}" class="text-blue-600 hover:underline font-medium hover:text-blue-800 transition-colors" title="Learn more about ${match}">${match}</a>`;
      }
      return match;
    });
  });
  
  return result;
}

// Blog content parser function (Updated with Semantic Tags)
function parseBlogContent(content) {
  const lines = content.split('\n')
  let html = ''
  let inList = false
  let listType = 'ul'

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    if (!line) continue

    // H1 - Semantic Header
    if (line.startsWith('* ') && line.endsWith(' *')) {
      if (inList) { html += `</${listType}>\n`; inList = false; }
      const h1Text = line.replace(/^\*\s+|\s+\*$/g, '')
      html += `<h2 class="text-3xl md:text-4xl font-bold mt-12 mb-6 text-gray-900 leading-tight">${h1Text}</h2>\n`
      continue
    }

    // H2 - Section Header (with ID for TOC)
    if (line.startsWith('** ') && line.endsWith(' **')) {
      if (inList) { html += `</${listType}>\n`; inList = false; }
      const h2Text = line.replace(/^\*\*\s+|\s+\*\*$/g, '')
      const id = h2Text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      html += `<h3 id="${id}" class="text-2xl font-bold mt-10 mb-4 text-gray-800 scroll-mt-24">${h2Text}</h3>\n`
      continue
    }

    // H3 - Subheader
    if (line.startsWith('*** ') && line.endsWith(' ***')) {
      if (inList) { html += `</${listType}>\n`; inList = false; }
      const h3Text = line.replace(/^\*\*\*\s+|\s+\*\*\*$/g, '')
      html += `<h4 class="text-xl font-semibold mt-8 mb-3 text-gray-800">${h3Text}</h4>\n`
      continue
    }

    // Lists
    if (line.startsWith('- ')) {
      const listItem = line.substring(2).trim()
      if (!inList || listType !== 'ul') {
        if (inList) html += `</${listType}>\n`
        html += '<ul class="list-disc pl-6 mb-6 space-y-2 marker:text-blue-500">\n'
        inList = true
        listType = 'ul'
      }
      html += `<li class="text-gray-700 leading-relaxed">${processInlineFormatting(listItem)}</li>\n`
      continue
    }

    if (line.startsWith('+ ')) {
      const listItem = line.substring(2).trim()
      if (!inList || listType !== 'ol') {
        if (inList) html += `</${listType}>\n`
        html += '<ol class="list-decimal pl-6 mb-6 space-y-2 marker:text-blue-500 font-medium">\n'
        inList = true
        listType = 'ol'
      }
      html += `<li class="text-gray-700 font-normal leading-relaxed">${processInlineFormatting(listItem)}</li>\n`
      continue
    }

    // Horizontal Rule
    if (line === '---') {
      if (inList) { html += `</${listType}>\n`; inList = false; }
      html += '<hr class="my-10 border-t border-gray-200" />\n'
      continue
    }

    if (inList) {
      html += `</${listType}>\n`
      inList = false
    }

    // Paragraphs
    const processedLine = processInlineFormatting(line)
    html += `<p class="mb-6 text-gray-700 leading-relaxed text-lg">${processedLine}</p>\n`
  }

  if (inList) {
    html += `</${listType}>\n`
  }

  return html
}

function extractMetadata(content) {
  const metadata = {}
  const lines = content.split('\n')
  
  for (const line of lines) {
    if (line.startsWith('META_TITLE: ')) metadata.title = line.replace('META_TITLE: ', '')
    else if (line.startsWith('META_DESCRIPTION: ')) metadata.description = line.replace('META_DESCRIPTION: ', '')
    else if (line.startsWith('KEYWORDS: ')) metadata.keywords = line.replace('KEYWORDS: ', '').split(',').map(k => k.trim())
    else if (line.startsWith('AUTHOR: ')) metadata.author = line.replace('AUTHOR: ', '')
    else if (line === '---METADATA_END---') break
  }
  
  return metadata
}

function getContentWithoutMetadata(content) {
  const lines = content.split('\n')
  let contentStartIndex = 0
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '---METADATA_END---') {
      contentStartIndex = i + 1
      break
    }
  }
  return lines.slice(contentStartIndex).join('\n')
}

// Share Modal Component (Unchanged logic, just keeping it concise here)
function ShareModal({ isOpen, onClose, postTitle, postUrl, postDescription }) {
  const [copied, setCopied] = useState(false)
  const modalRef = useRef(null)

  const shareOptions = [
    { name: 'WhatsApp', icon: <FaWhatsapp className="text-green-500" size={24} />, color: 'hover:bg-green-50 border-green-100', action: () => window.open(`https://wa.me/?text=${encodeURIComponent(`${postTitle}\n${postUrl}`)}`, '_blank') },
    { name: 'Facebook', icon: <FaFacebookF className="text-blue-600" size={24} />, color: 'hover:bg-blue-50 border-blue-100', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank') },
    { name: 'Twitter', icon: <FaTwitter className="text-blue-400" size={24} />, color: 'hover:bg-blue-50 border-blue-100', action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`, '_blank') },
    { name: 'LinkedIn', icon: <FaLinkedin className="text-blue-700" size={24} />, color: 'hover:bg-blue-50 border-blue-100', action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, '_blank') },
    { name: 'Telegram', icon: <FaTelegram className="text-blue-400" size={24} />, color: 'hover:bg-blue-50 border-blue-100', action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`, '_blank') },
    { name: 'Reddit', icon: <FaReddit className="text-orange-500" size={24} />, color: 'hover:bg-orange-50 border-orange-100', action: () => window.open(`https://reddit.com/submit?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`, '_blank') },
    { name: 'Email', icon: <MdEmail className="text-gray-600" size={24} />, color: 'hover:bg-gray-50 border-gray-100', action: () => window.open(`mailto:?subject=${encodeURIComponent(postTitle)}&body=${encodeURIComponent(postUrl)}`) },
    { name: 'Copy Link', icon: copied ? <MdCheck className="text-green-500" size={24} /> : <FaCopy className="text-gray-600" size={24} />, color: copied ? 'bg-green-50 border-green-200' : 'hover:bg-gray-50 border-gray-100', action: async () => { await navigator.clipboard.writeText(postUrl); setCopied(true); setTimeout(() => setCopied(false), 2000); } }
  ]

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"><MdClose size={24} /></button>
        <div className="p-6 border-b">
          <h3 className="text-xl font-bold">Share this article</h3>
        </div>
        <div className="p-6 grid grid-cols-4 gap-4">
          {shareOptions.map((opt) => (
            <button key={opt.name} onClick={opt.action} className={`flex flex-col items-center p-3 rounded-lg border ${opt.color}`}>
              {opt.icon} <span className="text-xs mt-2">{opt.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main Blog Component
export function BlogSlugClient({ slug }) {
  const [post, setPost] = useState(null)
  const [parsedContent, setParsedContent] = useState('')
  const [additionalMetadata, setAdditionalMetadata] = useState({})
  const [showShareModal, setShowShareModal] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // Table of Contents Memoization
  const tableOfContents = useMemo(() => {
    const toc = []
    if (parsedContent) {
      const h3Matches = parsedContent.match(/<h3[^>]*>(.*?)<\/h3>/g)
      if (h3Matches) {
        h3Matches.forEach((h3, index) => {
          const text = h3.replace(/<[^>]*>/g, '')
          const idMatch = h3.match(/id="([^"]*)"/)
          const id = idMatch ? idMatch[1] : `section-${index}`
          toc.push({ text, id })
        })
      }
    }
    return toc
  }, [parsedContent])
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug)
    if (foundPost) {
      setPost(foundPost)
      const metadata = extractMetadata(foundPost.content)
      setAdditionalMetadata(metadata)
      const contentWithoutMetadata = getContentWithoutMetadata(foundPost.content)
      const parsed = parseBlogContent(contentWithoutMetadata)
      setParsedContent(parsed)
    }
  }, [slug])
  
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      </div>
    )
  }

  const displayTitle = additionalMetadata.title || post.title
  const displayDescription = additionalMetadata.description || post.description
  const displayAuthor = additionalMetadata.author || post.author
  const keywords = additionalMetadata.keywords || post.tags
  const postUrl = typeof window !== 'undefined' ? window.location.href : ''

  // --- SCHEMA MARKUP FOR SEO ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": displayTitle,
    "image": post.image ? [post.image] : [],
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt, // You should add updated date if available
    "author": [{
      "@type": "Person",
      "name": displayAuthor,
      "url": "https://website-developers.com/about" // Link to about page
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Website Developers India",
      "logo": {
        "@type": "ImageObject",
        "url": "https://website-developers.com/logo.png"
      }
    },
    "description": displayDescription,
    "articleBody": parsedContent.replace(/<[^>]*>?/gm, '') // Strip HTML for schema
  }

  return (
    <>
      <Head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Header Section (Semantic Tag: header) */}
        <header className="bg-gradient-to-b from-blue-50/50 to-white pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group">
              <MdArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                {post.category}
              </Badge>
              {/* Share Button */}
              <button 
                onClick={() => setShowShareModal(true)} 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MdShare /> Share Article
              </button>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              {displayTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <MdCalendarToday className="text-primary" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="flex items-center gap-2">
                <MdTimer className="text-primary" />
                <span>{post.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">By {displayAuthor}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area (Semantic Tag: main) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Table of Contents (Semantic Tag: aside) */}
            <aside className="lg:col-span-3 lg:order-2 hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* TOC */}
                {tableOfContents.length > 0 && (
                  <div className="bg-white rounded-xl border p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">On this page</h3>
                    <nav className="flex flex-col gap-2">
                      {tableOfContents.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className="text-sm text-gray-600 hover:text-primary hover:translate-x-1 transition-all duration-200 block border-l-2 border-transparent hover:border-primary pl-2"
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Internal Linking / Service CTA (SEO Boost) */}
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                    <h3 className="font-bold text-gray-900 mb-2">Need Professional Help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        We build high-performance websites for businesses like yours.
                    </p>
                    <Link href="/contact" className="w-full">
                        <Button className="w-full text-sm" variant="primary">
                            Get a Quote <MdArrowForward className="ml-1"/>
                        </Button>
                    </Link>
                </div>
              </div>
            </aside>

            {/* Article Content (Semantic Tag: article) */}
            <article className="lg:col-span-9 lg:order-1">
              {post.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative h-[300px] md:h-[500px]">
                   <Image
                    src={post.image}
                    alt={`${displayTitle} - Blog Post Image`}
                    fill
                    className="object-cover"
                    priority // LCP Optimization
                  />
                </div>
              )}

              {/* The content rendering */}
              <div 
                className="prose prose-lg md:prose-xl max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />

              {/* Tags & Keywords */}
              <div className="mt-12 pt-8 border-t">
                 <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Related Topics</h4>
                 <div className="flex flex-wrap gap-2">
                    {keywords.map((tag, idx) => (
                        <Link href="/blog" key={idx}>
                             <Badge variant="outline" className="hover:bg-primary hover:text-white cursor-pointer transition-colors">
                                #{tag}
                            </Badge>
                        </Link>
                    ))}
                 </div>
              </div>

              {/* Mobile CTA (Visible only on small screens) */}
              <div className="lg:hidden mt-12 bg-primary/5 p-6 rounded-xl text-center">
                  <h3 className="font-bold text-lg mb-2">Grow Your Business Online</h3>
                  <p className="text-muted-foreground mb-4">Expert web development services tailored for you.</p>
                  <Link href="/services">
                      <Button>Explore Services</Button>
                  </Link>
              </div>
            </article>
          </div>
        </div>

        {/* Related Posts */}
        <section className="bg-muted/30 py-16 border-t border-border">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-bold mb-8">Continue Reading</h2>
                 <RelatedBlogs
                    currentSlug={slug}
                    currentCategory={post.category}
                    currentTags={keywords}
                    limit={3}
                />
             </div>
        </section>

        {/* Share Modal */}
        <AnimatePresence>
          {showShareModal && (
            <ShareModal
              isOpen={showShareModal}
              onClose={() => setShowShareModal(false)}
              postTitle={displayTitle}
              postUrl={postUrl}
              postDescription={displayDescription}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}