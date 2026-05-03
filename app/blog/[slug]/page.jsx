// app/blog/[slug]/page.jsx
import { BlogSlugClient } from './BlogSlugClient'
import { blogPosts } from '../../data/BlogPosts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// ── Dynamic metadata for each blog post ──────────────────────────────────────
export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return {
      title: 'Article Not Found | Business Sathi Blog',
      description: 'The article you are looking for could not be found on Business Sathi.',
      robots: { index: false },
    }
  }

  // Extract META fields from post content if available
  const lines = post.content?.split('\n') || []
  let metaTitle = ''
  let metaDesc = ''
  let metaKeywords = []
  for (const line of lines) {
    if (line.startsWith('META_TITLE: ')) metaTitle = line.replace('META_TITLE: ', '')
    if (line.startsWith('META_DESCRIPTION: ')) metaDesc = line.replace('META_DESCRIPTION: ', '')
    if (line.startsWith('KEYWORDS: ')) metaKeywords = line.replace('KEYWORDS: ', '').split(',').map((k) => k.trim())
    if (line === '---METADATA_END---') break
  }

  const title = metaTitle || `${post.title} | Business Sathi - Web Development & SEO Blog`
  const description = metaDesc || post.excerpt || `Read "${post.title}" - Expert guide on ${post.category} for businesses in Indore, Ujjain & Madhya Pradesh.`
  const keywords = metaKeywords.length ? metaKeywords : post.tags || []

  return {
    title,
    description,
    keywords: [...new Set([
      ...keywords,
      post.category.toLowerCase(),
      `website development ${post.category.toLowerCase()}`,
      'web development Indore',
      'SEO expert Ujjain',
      'Business Sathi blog',
      'Madhya Pradesh digital marketing',
    ])],
    alternates: {
      canonical: `https://business-sathi.vercel.app/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://business-sathi.vercel.app/blog/${resolvedParams.slug}`,
      siteName: 'Business Sathi',
      type: 'article',
      locale: 'en_IN',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author || 'Business Sathi Team'],
      tags: keywords,
      images: [
        {
          url: post.image || '/og-blog.png',
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/webp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.image || '/og-blog.png'],
      creator: '@businesssathi',
      site: '@businesssathi',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Add your Google Search Console code
    },
  }
}

// ── Static paths for all blogs ──────────────────────────────────────────────
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)
  
  if (!post) {
    notFound()
  }

  // Add console log for debugging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[BlogPostPage] Rendering: ${post.slug} - ${post.title}`)
  }

  return <BlogSlugClient post={post} />
}