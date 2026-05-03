import { ProjectSlugClient } from './ProjectSlugClient'
import { projectDetails } from '../../data/Projects'

// Generate Dynamic Metadata
export async function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = projectDetails.find(p => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found | Business Sathi Portfolio',
      description: 'Case study not found.',
      robots: { index: false }
    }
  }

  return {
    title: `${project.headline} Case Study | Business Sathi Portfolio Indore Ujjain`,
    description: `${project.clientName} ${project.industry} website development case study. ${project.results?.[0] || ''}. Built by Business Sathi Indore web developers.`,
    keywords: [
      `${project.clientName} website case study`,
      `${project.industry} website Indore`,
      'Next.js case study MP',
      'web development portfolio Ujjain',
      ...project.techStack.map(t => `${t} project example`)
    ].join(', '),
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.headline} | Business Sathi Case Study`,
      description: project.solution?.substring(0, 150) + '...',
      type: 'article',
      publishedTime: new Date('2024-01-01').toISOString(),
      images: project.images?.map(img => ({
        url: img.src || img,
        alt: img.alt || `${project.clientName} project screenshot`
      })) || [{ url: '/og-projects.png' }]
    }
  }
}

export default async function ProjectSlugPage({ params }) {
  const { slug } = await params
  return <ProjectSlugClient slug={slug} />
}
