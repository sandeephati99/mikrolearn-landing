import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Clarity from "@/components/clarity"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mikrolearn - AI-Powered Microlearning for Professionals | Daily Skill Development",
  description:
    "Transform your career with Mikrolearn's AI-curated 60-second learning cards. Join 10,000+ professionals mastering new skills daily. Personalized content for Product Management, UX Design, Data Science & more.",
  keywords: [
    "microlearning platform",
    "professional development app",
    "AI-powered learning",
    "skill development",
    "career advancement",
    "daily learning",
    "productivity tools",
    "professional skills training",
    "personalized learning",
    "bite-sized learning",
    "workplace skills",
    "continuous learning",
    "professional growth",
    "learning app",
    "skill building",
    "career development",
    "professional education",
    "micro-learning",
    "smart learning",
    "executive learning",
  ],
  authors: [{ name: "Mikrolearn Team" }],
  creator: "Mikrolearn",
  publisher: "Mikrolearn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikrolearn.com",
    siteName: "Mikrolearn",
    title: "Mikrolearn - AI-Powered Microlearning for Professionals",
    description:
      "Transform your career with AI-curated 60-second learning cards. Join 10,000+ professionals mastering new skills daily.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mikrolearn - Professional Microlearning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikrolearn - AI-Powered Microlearning for Professionals",
    description:
      "Transform your career with AI-curated 60-second learning cards. Join 10,000+ professionals mastering new skills daily.",
    images: ["/twitter-image.jpg"],
    creator: "@mikrolearn",
    site: "@mikrolearn",
  },
  alternates: {
    canonical: "https://mikrolearn.com",
  },
  category: "Education",
  classification: "Professional Development",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Mikrolearn",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#4F46E5",
    "theme-color": "#4F46E5",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Mikrolearn",
              description:
                "AI-powered microlearning platform for professional development with personalized 60-second learning cards",
              url: "https://mikrolearn.com",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web, iOS, Android",
              offers: [
                {
                  "@type": "Offer",
                  name: "Free Plan",
                  price: "0",
                  priceCurrency: "INR",
                  description: "Basic access to daily learning cards",
                },
                {
                  "@type": "Offer",
                  name: "Challenger Plan",
                  price: "99",
                  priceCurrency: "INR",
                  description: "Advanced features with unlimited bookmarks and ad-free experience",
                },
                {
                  "@type": "Offer",
                  name: "Pro Plan",
                  price: "149",
                  priceCurrency: "INR",
                  description: "Full access with AI personalization and team collaboration",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1247",
                bestRating: "5",
                worstRating: "1",
              },
              author: {
                "@type": "Organization",
                name: "Mikrolearn",
                url: "https://mikrolearn.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Mikrolearn",
                logo: {
                  "@type": "ImageObject",
                  url: "https://mikrolearn.com/logo.png",
                },
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mikrolearn",
              url: "https://mikrolearn.com",
              logo: "https://mikrolearn.com/logo.png",
              description: "Leading microlearning platform for professional development",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Mikrolearn Team",
                },
              ],
              sameAs: [
                "https://linkedin.com/company/mikrolearn",
                "https://twitter.com/mikrolearn",
                "https://instagram.com/mikrolearn",
                "https://facebook.com/mikrolearn",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "support@mikrolearn.com",
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How is Mikrolearn different from Blinkist or Inshorts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unlike general content platforms, Mikrolearn uses AI to personalize content specifically for your professional skills and career goals. Our 60-word summaries are curated for busy professionals, not general audiences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the content updated daily?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Our AI system curates fresh content daily across 15+ skill categories. You'll always have new, relevant insights waiting for you each morning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does AI personalization work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our AI analyzes your LinkedIn profile, reading habits, saved content, and quiz responses to understand your interests and career trajectory. The more you use Mikrolearn, the better it gets at serving relevant content.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://mikrolearn.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Professional Development",
                  item: "https://mikrolearn.com/professional-development",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Microlearning Platform",
                  item: "https://mikrolearn.com/microlearning-platform",
                },
              ],
            }),
          }}
        />
        
        {/* Google Analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZWK5GEMLT7`}
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZWK5GEMLT7');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Clarity />
        {children}
      </body>
    </html>
  )
}
