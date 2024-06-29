import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from '@/components/menubar/Navbar';
import { Toaster } from '@/components/ui/toaster';
import PageTransition from '@/components/animation/PageTransition';
import StairTransition from '@/components/animation/StairTransition';

const inter = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster/>
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  )
}
