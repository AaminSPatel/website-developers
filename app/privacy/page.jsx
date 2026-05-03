import { PrivacyClient } from './PrivacyClient'

export const metadata = {
  title: 'Privacy Policy | Business Sathi Website Development Indore Ujjain MP',
  description: 'Privacy Policy for Business Sathi - Professional website development company serving Indore, Ujjain & Madhya Pradesh. How we protect your data and ensure privacy for all clients.',
  keywords: 'Business Sathi privacy policy, website developer privacy Indore, web development data protection Ujjain, client privacy MP',
  robots: { index: true, follow: false },
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Business Sathi - Indore Web Developers',
    description: 'Business Sathi data privacy and protection policy for website development services.'
  }
}

export default function PrivacyPage() {
  return <PrivacyClient />
}
