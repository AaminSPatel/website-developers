'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import { 
  MdArrowBack, 
  MdCalendarToday, 
  MdTimer, 
  MdShare, 
  MdBookmark,
  MdClose,
  MdContentCopy,
  MdCheck,
  MdTwitter,
  MdFacebook,
  MdWhatsapp,
  MdLink,
  MdEmail
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

// Blog content parser function
function parseBlogContent(content) {
  const lines = content.split('\n')
  let html = ''
  let inList = false
  let listType = 'ul'

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    if (!line) continue

    if (line.startsWith('* ') && line.endsWith(' *')) {
      if (inList) {
        html += `</${listType}>\n`
        inList = false
      }
      const h1Text = line.replace(/^\*\s+|\s+\*$/g, '')
      html += `<h1 class="text-4xl font-bold mb-6 text-gray-900">${h1Text}</h1>\n`
      continue
    }

    if (line.startsWith('** ') && line.endsWith(' **')) {
      if (inList) {
        html += `</${listType}>\n`
        inList = false
      }
      const h2Text = line.replace(/^\*\*\s+|\s+\*\*$/g, '')
      const id = h2Text.toLowerCase().replace(/\s+/g, '-')
      html += `<h2 id="${id}" class="text-3xl font-bold mb-4 text-blue-700">${h2Text}</h2>\n`
      continue
    }

    if (line.startsWith('*** ') && line.endsWith(' ***')) {
      if (inList) {
        html += `</${listType}>\n`
        inList = false
      }
      const h3Text = line.replace(/^\*\*\*\s+|\s+\*\*\*$/g, '')
      html += `<h3 class="text-2xl font-semibold mb-3 text-gray-800">${h3Text}</h3>\n`
      continue
    }

    if (line.startsWith('- ')) {
      const listItem = line.substring(2).trim()
      if (!inList || listType !== 'ul') {
        if (inList) html += `</${listType}>\n`
        html += '<ul class="list-disc pl-6 mb-4 space-y-2">\n'
        inList = true
        listType = 'ul'
      }
      html += `<li class="text-gray-700">${processInlineFormatting(listItem)}</li>\n`
      continue
    }

    if (line.startsWith('+ ')) {
      const listItem = line.substring(2).trim()
      if (!inList || listType !== 'ol') {
        if (inList) html += `</${listType}>\n`
        html += '<ol class="list-decimal pl-6 mb-4 space-y-2">\n'
        inList = true
        listType = 'ol'
      }
      html += `<li class="text-gray-700">${processInlineFormatting(listItem)}</li>\n`
      continue
    }

    if (line.startsWith('== ') && line.endsWith(' ==')) {
      if (inList) {
        html += `</${listType}>\n`
        inList = false
      }
      const sectionTitle = line.replace(/^==\s+|\s+==$/g, '')
      html += `<section class="mb-10" id="${sectionTitle.toLowerCase().replace(/\s+/g, '-')}">\n`
      html += `<h2 class="text-3xl font-bold mb-4 text-blue-700">${sectionTitle}</h2>\n`
      continue
    }

    if (line === '---') {
      if (inList) {
        html += `</${listType}>\n`
        inList = false
      }
      html += '<hr class="my-8 border-t border-gray-300" />\n'
      continue
    }

    if (inList) {
      html += `</${listType}>\n`
      inList = false
    }

    const processedLine = processInlineFormatting(line)
    html += `<p class="mb-4 text-gray-700 leading-relaxed">${processedLine}</p>\n`
  }

  if (inList) {
    html += `</${listType}>\n`
  }

  return html
}

function processInlineFormatting(text) {
  let result = text
  
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')
  result = result.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
  result = result.replace(/\|\|([^|]+)\|\|/g, '<mark class="bg-yellow-100 px-1 rounded">$1</mark>')
  result = result.replace(/\[([^\]]+)\]/g, '<span class="text-blue-600 font-medium">$1</span>')
  
  return result
}

function extractMetadata(content) {
  const metadata = {}
  const lines = content.split('\n')
  
  for (const line of lines) {
    if (line.startsWith('META_TITLE: ')) {
      metadata.title = line.replace('META_TITLE: ', '')
    } else if (line.startsWith('META_DESCRIPTION: ')) {
      metadata.description = line.replace('META_DESCRIPTION: ', '')
    } else if (line.startsWith('KEYWORDS: ')) {
      metadata.keywords = line.replace('KEYWORDS: ', '').split(',').map(k => k.trim())
    } else if (line.startsWith('AUTHOR: ')) {
      metadata.author = line.replace('AUTHOR: ', '')
    } else if (line === '---METADATA_END---') {
      break
    }
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

// Share Modal Component
function ShareModal({ isOpen, onClose, postTitle, postUrl, postDescription }) {
  const [copied, setCopied] = useState(false)
  const modalRef = useRef(null)

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-green-500" size={24} />,
      color: 'hover:bg-green-50 border-green-100',
      action: () => {
        const text = `Check out this blog post: ${postTitle}\n${postUrl}`
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
      }
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF className="text-blue-600" size={24} />,
      color: 'hover:bg-blue-50 border-blue-100',
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank')
      }
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="text-blue-400" size={24} />,
      color: 'hover:bg-blue-50 border-blue-100',
      action: () => {
        const text = `Check out: ${postTitle}`
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(postUrl)}`, '_blank')
      }
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-blue-700" size={24} />,
      color: 'hover:bg-blue-50 border-blue-100',
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, '_blank')
      }
    },
    {
      name: 'Telegram',
      icon: <FaTelegram className="text-blue-400" size={24} />,
      color: 'hover:bg-blue-50 border-blue-100',
      action: () => {
        const text = `${postTitle}\n\n${postDescription}\n\nRead more: ${postUrl}`
        window.open(`https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(text)}`, '_blank')
      }
    },
    {
      name: 'Reddit',
      icon: <FaReddit className="text-orange-500" size={24} />,
      color: 'hover:bg-orange-50 border-orange-100',
      action: () => {
        window.open(`https://reddit.com/submit?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`, '_blank')
      }
    },
    {
      name: 'Email',
      icon: <MdEmail className="text-gray-600" size={24} />,
      color: 'hover:bg-gray-50 border-gray-100',
      action: () => {
        const subject = `Check out: ${postTitle}`
        const body = `I thought you might be interested in this blog post:\n\n${postTitle}\n\n${postDescription}\n\nRead more: ${postUrl}`
        window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
      }
    },
    {
      name: 'Copy Link',
      icon: copied ? <MdCheck className="text-green-500" size={24} /> : <FaCopy className="text-gray-600" size={24} />,
      color: copied ? 'bg-green-50 border-green-200' : 'hover:bg-gray-50 border-gray-100',
      action: async () => {
        try {
          await navigator.clipboard.writeText(postUrl)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        } catch (err) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea')
          textArea.value = postUrl
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }
      }
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-1">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
            <p className="text-sm text-gray-500 mt-1">Spread the knowledge</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <MdClose size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Share Options Grid */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            {shareOptions.map((option, index) => (
              <motion.button
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={option.action}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 ${option.color} active:scale-95`}
              >
                {option.icon}
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {option.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* URL Box */}
          <div className="mt-8">
            <p className="text-sm font-medium text-gray-700 mb-2">Or copy the link</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 p-3 bg-gray-50 border rounded-lg overflow-hidden">
                <p className="text-sm text-gray-600 truncate">{postUrl}</p>
              </div>
              <button
                onClick={shareOptions[7].action}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t bg-gray-50">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Share with your network</span>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{copied ? 'Link copied to clipboard!' : ''}</span>
            </div>
          </div>
        </div>
      </motion.div>
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
  const [allBlogs, setAllBlogs] = useState(blogPosts)
  const tableOfContents = useMemo(() => {
    const toc = []
    if (parsedContent) {
      const h2Matches = parsedContent.match(/<h2[^>]*>(.*?)<\/h2>/g)
      if (h2Matches) {
        h2Matches.forEach((h2, index) => {
          const text = h2.replace(/<[^>]*>/g, '')
          const idMatch = h2.match(/id="([^"]*)"/)
          const id = idMatch ? idMatch[1] : `section-${index}`
          toc.push({ text, id })
        })
      }
    }
    return toc
  }, [parsedContent])
  
  useEffect(() => {
    const foundPost = allBlogs.find(p => p.slug === slug)
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
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Quick share functions
  const handleQuickShare = (platform) => {
    const postUrl = typeof window !== 'undefined' ? window.location.href : ''
    const title = additionalMetadata.title || post?.title || ''
    const description = additionalMetadata.description || ''

    switch (platform) {
      case 'whatsapp':
        const whatsappText = `Check out this blog post: ${title}\n${postUrl}`
        window.open(`https://wa.me/?text=${encodeURIComponent(whatsappText)}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank')
        break
      case 'twitter':
        const twitterText = `Check out: ${title}`
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(postUrl)}`, '_blank')
        break
      case 'copy':
        handleCopyLink()
        break
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback
      const textArea = document.createElement('textarea')
      textArea.value = window.location.href
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const displayTitle = additionalMetadata.title || post.title
  const displayDescription = additionalMetadata.description || post.description
  const displayAuthor = additionalMetadata.author || post.author
  const keywords = additionalMetadata.keywords || post.tags
  const postUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200">
              <MdArrowBack className="mr-2" />
              Back to Blog
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <Badge variant="primary" className="self-start">
                {post.category}
              </Badge>
              <div className="flex items-center gap-2">
                {/* <Button variant="ghost" size="sm" className="gap-2">
                  <MdBookmark />
                  Save
                </Button> */}
                {/* Updated Share Button */}
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 relative"
                    onClick={() => setShowShareModal(true)}
                  >
                    <MdShare />
                    Share
                    {copied && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        Copied!
                      </span>
                    )}
                  </Button>
                  
                  {/* Quick Share Dropdown (Optional) */}
                  {/* <div className="absolute right-0 mt-2 hidden group-hover:block">
                    <div className="bg-white rounded-lg shadow-lg border p-2 min-w-[200px]">
                      <button onClick={() => handleQuickShare('whatsapp')} className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                        <FaWhatsapp className="text-green-500 mr-2" />
                        WhatsApp
                      </button>
                      <button onClick={() => handleQuickShare('facebook')} className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                        <FaFacebookF className="text-blue-600 mr-2" />
                        Facebook
                      </button>
                      <button onClick={() => handleQuickShare('twitter')} className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                        <FaTwitter className="text-blue-400 mr-2" />
                        Twitter
                      </button>
                      <button onClick={handleCopyLink} className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                        <MdContentCopy className="mr-2" />
                        Copy Link
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              {displayTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                <MdCalendarToday size={14} />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                <MdTimer size={14} />
                {post.readingTime}
              </div>
              <span className="bg-white px-3 py-1 rounded-full">
                by {displayAuthor}
              </span>
            </div>

            {displayDescription && (
              <p className="text-lg text-gray-700 mb-4 italic">
                {displayDescription}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {keywords.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs hover:bg-blue-50 transition-colors">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {tableOfContents.length > 0 && (
                <div className="lg:col-span-1">
                  <div className="sticky top-24 bg-white rounded-lg border p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-4 text-gray-900">Table of Contents</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 hover:underline py-1 transition-colors duration-200"
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              )}

              <div className={tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
                {post.image && post.image.length > 0 && (
                  <motion.div
                    className="mb-8 rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className="prose prose-lg max-w-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  dangerouslySetInnerHTML={{ __html: parsedContent }}
                />

                {/* Share Bar at Bottom */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border">
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Found this helpful?</h3>
                      <p className="text-gray-600">Share it with others who might benefit</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuickShare('whatsapp')}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <FaWhatsapp size={20} />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                      <button
                        onClick={() => handleQuickShare('facebook')}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaFacebookF size={20} />
                        <span className="hidden sm:inline">Facebook</span>
                      </button>
                      <button
                        onClick={() => handleQuickShare('twitter')}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                      >
                        <FaTwitter size={20} />
                        <span className="hidden sm:inline">Twitter</span>
                      </button>
                      <button
                        onClick={handleCopyLink}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          copied 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {copied ? <MdCheck size={20} /> : <FaCopy size={20} />}
                        <span className="hidden sm:inline">
                          {copied ? 'Copied!' : 'Copy Link'}
                        </span>
                      </button>
                      <button
                        onClick={() => setShowShareModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <MdShare size={20} />
                        <span className="hidden sm:inline">More Options</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RelatedBlogs
  currentSlug={slug}
  currentCategory={post.category}
  currentTags={keywords}
  limit={3}
/>
      </div>

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
    </>
  )
}