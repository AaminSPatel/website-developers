import { BlogSlugClient } from './BlogSlugClient'
import { blogPosts } from '../../data/BlogPosts'

// ── Dynamic metadata for each blog post ──────────────────────────────────────
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Article Not Found | Business Sathi Blog',
      description: 'This article could not be found.',
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

  const title = metaTitle || `${post.title} | Business Sathi Blog`
  const description = metaDesc || post.excerpt || 'Read this expert guide on Business Sathi Blog.'
  const keywords = metaKeywords.length ? metaKeywords : post.tags || []

  return {
    title,
    description,
    keywords: [
      ...keywords,
      // Always append local keywords for local SEO signal
      'website development Indore',
      'web developer Ujjain',
      'Business Sathi',
    ],
    alternates: {
      canonical: `https://businesssathi.vercel.app/blog/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://businesssathi.vercel.app/blog/${params.slug}`,
      siteName: 'Business Sathi',
      type: 'article',
      locale: 'en_IN',
      publishedTime: post.publishedAt,
      authors: [post.author || 'Business Sathi'],
      tags: keywords,
      images: [
        {
          url: post.image || '/og-blog.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.image || '/og-blog.png'],
    },
    robots: { index: true, follow: true },
  }
}

// ── Static paths ──────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }) {
  return <BlogSlugClient slug={params.slug} />
}
