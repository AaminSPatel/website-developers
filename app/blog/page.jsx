import { BlogClient } from './BlogClient'

export const metadata = {
  // Topic + Target Audience + Location
  title: 'Web Development Insights & SEO Tips | Blog for Small Businesses India',
  
  // Promises value (Tips, Strategies) to the reader
  description: 'Read expert guides on growing your business online. From SEO hacks for small businesses to Next.js tutorials for startups, get actionable digital strategy tips from top Indian developers.',
  
  // Keywords focusing on "Tips", "Guide", "How to"
  keywords: 'web development blog India, SEO tips for small business, website design trends 2026, Next.js guides for beginners, digital marketing strategy for travel agencies, freelance developer insights',
  
  openGraph: {
    title: 'Web Development & Digital Growth Blog',
    description: 'Expert insights on Website Design, SEO, and Business Growth strategies for the Indian market.',
    type: 'website'
  }
}

export default function BlogPage() {
  return <BlogClient />
}