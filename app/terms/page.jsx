import { TermsClient } from './TermsClient'

export const metadata = {
  title: 'Terms & Conditions | Business Sathi Website Development Services Indore MP',
  description: 'Terms of service for Business Sathi website development projects. Payment terms, timelines, deliverables for Indore Ujjain MP clients.',
  keywords: 'Business Sathi terms conditions, web development agreement Indore, website service terms Ujjain, project terms MP',
  robots: { index: true, follow: false },
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms & Conditions | Business Sathi Web Developers',
    description: 'Business Sathi terms of service for website projects.'
  }
}

export default function TermsPage() {
  return <TermsClient />
}