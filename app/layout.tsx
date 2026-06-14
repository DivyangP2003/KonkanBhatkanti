import type { Metadata } from 'next'
import { Crimson_Text, Inter } from 'next/font/google'
import './globals.css'

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Konkan Bhatkanti - Discover the Soul of Konkan',
  description: 'Explore Konkan through its tourism, adventure, culture, heritage, history, monuments, geography, festivals, and more. Your comprehensive guide to Konkan travel.',
  keywords: 'Konkan, tourism, travel, culture, heritage, adventure, festivals, cuisine, hidden gems',
  openGraph: {
    title: 'Konkan Bhatkanti - Discover the Soul of Konkan',
    description: 'Explore Konkan through its tourism, adventure, culture, heritage, history, monuments, geography, festivals, and more.',
    type: 'website',
    url: 'https://konkanbhatkanti.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D5C6B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${inter.variable} bg-cream`}>
      <body className="font-sans text-text-primary">
        {children}
      </body>
    </html>
  )
}
