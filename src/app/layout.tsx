import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from '@/components/ui/toaster';
import PageTransition from '@/components/animation/PageTransition';
import StairTransition from '@/components/animation/StairTransition';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

const font = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-primary',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Priyanshu | Portfolio',
    template: '%s | Priyanshu',
  },
  description: 'Modern, animated portfolio website built with Next.js 14, React 18, and TypeScript. Showcasing projects, skills, and contact info.',
  metadataBase: new URL('https://coderx85.vercel.app'),
  openGraph: {
    title: 'Priyanshu | Portfolio',
    description: 'Modern, animated portfolio website built with Next.js 14, React 18, and TypeScript.',
    url: 'https://coderx85.vercel.app',
    siteName: 'Priyanshu Portfolio',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu | Portfolio',
    description: 'Modern, animated portfolio website built with Next.js 14, React 18, and TypeScript.',
    creator: '@Coderx85',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/hero.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://coderx85.vercel.app',
    languages: {
      'en-US': 'https://coderx85.vercel.app/en-US',
    },
  },
  manifest: '/manifest.json',
  category: 'portfolio',
  authors: [{ name: 'Priyanshu', url: 'https://github.com/Coderx85' }],
  publisher: 'Priyanshu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider 
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
          <Toaster/>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
