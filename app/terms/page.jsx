import { TermsClient } from './TermsClient'

export const metadata = {
  title: 'Terms and Conditions - Website Developers',
  description: 'Read our terms and conditions for web development services.',
  openGraph: {
    title: 'Terms and Conditions - Website Developers'
  }
}

export default function TermsPage() {
  return <TermsClient />
}
