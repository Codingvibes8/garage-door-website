import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Precision Garage Solutions | Premium Garage Door Services',
  description: 'Precision Garage Solutions provides expert garage door installation, 24/7 emergency repairs, and maintenance for residential and commercial doors. Licensed, insured technicians with quality parts and satisfaction guaranteed.',
  keywords: ['garage door repair', 'garage door installation', 'emergency garage door service', '24/7 garage repair', 'residential garage doors', 'commercial garage doors', 'garage door maintenance', 'broken spring repair', 'garage door opener'],
  authors: [{ name: 'Precision Garage Solutions' }],
  creator: 'Precision Garage Solutions',
  publisher: 'Precision Garage Solutions',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://precisiongaragesolutions.com',
    siteName: 'Precision Garage Solutions',
    title: 'Precision Garage Solutions | Premium Garage Door Services',
    description: 'Expert garage door installation, 24/7 emergency repairs, and maintenance for residential and commercial doors.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precision Garage Solutions | Premium Garage Door Services',
    description: 'Expert garage door installation, 24/7 emergency repairs, and maintenance for residential and commercial doors.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e293b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
