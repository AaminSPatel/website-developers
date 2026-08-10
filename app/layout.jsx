import { Sora, Outfit, Space_Mono } from "next/font/google";
import { Syne, Manrope } from "next/font/google";
import { Epilogue, Schibsted_Grotesk, Chivo_Mono } from "next/font/google";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import ScrollProgress from "@/components/ScrollProgress";
import { brand } from "@/lib/siteData";


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});


const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo-mono",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL(brand.website),
  title: {
    default: `${brand.name} — Website Development & Digital Growth in Indore`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Business Sathi is an Ujjain-based digital studio helping local businesses grow online through website development, Google Business Profile optimization, Meta Ads management, SEO, and video editing.",
  keywords: [
    "website development Indore",
    "web developer Indore",
    "website developer India",
    "Google Business Profile Management",
    "Google Business optimization",
    "Small Business Website",
    "Business Website Developer",
    "SEO Services Indore",
    "AI Video Generation",
    "Video Editing Indore",
    "Local Business Marketing",
    "Digital Agency Indore",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: brand.website,
    siteName: brand.name,
    title: `${brand.name} — Website Development & Digital Growth in Ujjain`,
    description:
      "Websites and digital growth services for local businesses in Ujjain — website development, Google Business Profile,  SEO, and video.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Website Development & Digital Growth in Ujjain`,
    description:
      "Websites and digital growth services for local businesses in Ujjain.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: brand.website,
  },
  verification: {
    google: "SpeVecqWTh2X61e4RV8XTjrx8FkRCkYW5J705R4KZFM", 
  },
};
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    description:
      "Website development and digital growth studio serving Indore & Ujjain businesses.",
    url: brand.website,
    email: brand.email,
    telephone: brand.phone,
    areaServed: {
      "@type": "City",
      name: "Ujjain",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ujjain",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
  };

  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable} ${firaCode.variable}`}>
      <body className="bg-[#FAFAFA] text-[#111111] font-body antialiased">
         <Script
          src="https://cdn.counter.dev/script.js"
          data-id="95795ebe-d6a8-4887-abef-7dbb03a06eb2"
          data-utcoffset="5.5" 
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CallButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
