import { TermsClient } from './TermsClient'

export const metadata = {
  // Professional and standard title
  title: 'Terms & Conditions | Web Development Services Agreement',
  
  // Clear explanation of what this page contains
  description: 'Review the terms of service for our web development projects. Transparent policies on payments, timelines, and deliverables for our Indian and global clients.',
  
  // Minimal keywords needed here
  keywords: 'web development terms and conditions, service agreement India, freelance developer contract terms, website design policy',
  
  openGraph: {
    title: 'Terms and Conditions - Website Developers India',
    description: 'Our commitment to transparent and fair business practices.',
    type: 'website'
  }
}

export default function TermsPage() {
  return <TermsClient />
}