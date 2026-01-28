import { BlogSlugClient } from './BlogSlugClient'
import { blogPosts } from '../../data/BlogPosts'

// Is URL ko apne actual domain se replace karein
const SITE_URL = 'https://website-developers.com' 

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const post = blogPosts.find(p => p.slug === resolvedParams.slug)

  // 1. Error Handling: Agar post na mile toh Google ko 'noindex' bol dein
  if (!post) {
    return {
      title: 'Page Not Found',
      description: 'The requested blog post could not be found.',
      robots: { index: false, follow: false } 
    }
  }

  // 2. Efficient Metadata Extraction
  const metadata = {}
  // Check if content exists to prevent errors
  const lines = post.content ? post.content.split('\n') : []

  for (const line of lines) {
    if (line.startsWith('META_TITLE: ')) metadata.title = line.replace('META_TITLE: ', '').trim()
    else if (line.startsWith('META_DESCRIPTION: ')) metadata.description = line.replace('META_DESCRIPTION: ', '').trim()
    else if (line.startsWith('KEYWORDS: ')) metadata.keywords = line.replace('KEYWORDS: ', '').split(',').map(k => k.trim())
    else if (line === '---METADATA_END---') break
  }

  // 3. Smart Title Strategy
  // Pattern: Post Title | Category/Niche | Brand
  const displayTitle = metadata.title || `${post.title} | Web Development Insights India`

  // 4. Natural Description Strategy
  // Keyword stuffing ki jagah ek "Hook" create karein jo click karwaye.
  const summary = post.excerpt || `Read our expert guide on ${post.title}. Learn actionable web development tips for small businesses and startups in India.`
  const displayDescription = metadata.description || summary

  // 5. Focused Keyword Strategy
  // Sirf relevant keywords rakhein, taaki spam score na badhe.
  const coreKeywords = ['freelance web developer India', 'web design tips', 'small business growth']
  const specificKeywords = post.tags || []
  // Combine and remove duplicates, limit to top 10
  const finalKeywords = metadata.keywords || [...new Set([...specificKeywords, ...coreKeywords])].slice(0, 10)

  // 6. Image Handling for Social Media
  const ogImage = post.image || '/images/default-blog-og.jpg'

  return {
    title: displayTitle,
    description: displayDescription,
    keywords: finalKeywords.join(', '),
    authors: [{ name: post.author || 'Website Developers India' }],
    creator: 'Website Developers India',
    publisher: 'Website Developers India',
    
    // Canonical URL (Duplicate content se bachne ke liye zaroori hai)
    alternates: {
      canonical: `${SITE_URL}/blog/${resolvedParams.slug}`,
    },

    // Social Media Sharing (WhatsApp, LinkedIn, Twitter)
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      url: `${SITE_URL}/blog/${resolvedParams.slug}`,
      siteName: 'Website Developers India',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_IN', // Targeting India
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: finalKeywords
    },

    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: displayDescription,
      images: [ogImage],
    },

    // Robots Control: Maximum Visibility
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large', // Large image in search results
        'max-snippet': -1,
      },
    },
  }
}

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params
  return <BlogSlugClient slug={resolvedParams.slug} />
}