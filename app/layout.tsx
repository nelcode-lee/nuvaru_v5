import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Nuvaru | AI Automation for Business Growth',
    template: '%s | Nuvaru',
  },
  description: 'Unlock growth and efficiency with custom AI automation for marketing, sales, HR, finance, and operations. Get your free automation audit or book a call with Nuvaru today.',
  generator: 'v0.dev',
  keywords: [
    'AI automation',
    'business automation',
    'Nuvaru',
    'process automation',
    'marketing automation',
    'sales automation',
    'HR automation',
    'finance automation',
    'AI consulting',
    'automation audit',
    'AI for business',
    'workflow automation',
    'digital transformation',
  ],
  openGraph: {
    title: 'Nuvaru | AI Automation for Business Growth',
    description: 'Unlock growth and efficiency with custom AI automation for marketing, sales, HR, finance, and operations. Get your free automation audit or book a call with Nuvaru today.',
    url: 'https://nuvaru.com',
    siteName: 'Nuvaru',
    images: [
      {
        url: 'https://nuvaru.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nuvaru - AI Automation for Business Growth',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuvaru | AI Automation for Business Growth',
    description: 'Unlock growth and efficiency with custom AI automation for marketing, sales, HR, finance, and operations. Get your free automation audit or book a call with Nuvaru today.',
    site: '@nuvaruai',
    creator: '@nuvaruai',
    images: ['https://nuvaru.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://nuvaru.com'),
  alternates: {
    canonical: 'https://nuvaru.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
