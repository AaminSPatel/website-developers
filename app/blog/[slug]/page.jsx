import { BlogSlugClient } from './BlogSlugClient'
//import { siteData } from '../../context/SiteContext'
import { blogPosts } from '../../data/BlogPosts'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const post = blogPosts.find(p => p.slug === resolvedParams.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | Website Developers India | Freelance Web Development Blog',
      description: 'The requested blog post could not be found. Explore our comprehensive freelance web development blog in India featuring expert insights on website design, development, SEO optimization, and digital marketing strategies for small businesses and entrepreneurs.'
    }
  }

  // Extract metadata from content
  const metadata = {}
  const lines = post.content.split('\n')

  for (const line of lines) {
    if (line.startsWith('META_TITLE: ')) {
      metadata.title = line.replace('META_TITLE: ', '')
    } else if (line.startsWith('META_DESCRIPTION: ')) {
      metadata.description = line.replace('META_DESCRIPTION: ', '')
    } else if (line.startsWith('KEYWORDS: ')) {
      metadata.keywords = line.replace('KEYWORDS: ', '').split(',').map(k => k.trim())
    } else if (line === '---METADATA_END---') {
      break
    }
  }

  const displayTitle = metadata.title || `${post.title} | Freelance Web Development Blog India | Website Design Tips & Digital Strategy`
  const displayDescription = metadata.description || `Read expert insights on ${post.title.toLowerCase()} for small businesses in India. Learn professional web development tips, SEO strategies, and digital marketing techniques from experienced freelance developers. Discover how to create successful websites that drive customer acquisition and business growth with affordable solutions under ₹1.3 lakh. Get practical advice on Next.js development, responsive design, user experience optimization, and search engine ranking improvements for your business website.`
  const keywords = metadata.keywords || [...post.tags, 'freelance web development blog India', 'website design tips', 'digital strategy small business', 'SEO optimization techniques', 'Next.js development guide', 'responsive web design', 'user experience optimization', 'search engine ranking', 'customer acquisition websites', 'business growth digital', 'affordable web solutions', 'professional web development', 'small business websites', 'entrepreneur web tips', 'web development strategies', 'digital marketing India', 'website performance optimization', 'conversion rate improvement', 'mobile-friendly websites', 'web development best practices']

  return {
    title: displayTitle,
    description: displayDescription,
    keywords: keywords.join(', '),
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: keywords
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: displayDescription
    },
    alternates: {
      canonical: `https://website-developers.vercel.app/blog/${resolvedParams.slug}`
    }
  }
}

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await params
  return <BlogSlugClient slug={resolvedParams.slug} />
}
