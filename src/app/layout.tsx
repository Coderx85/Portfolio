import './globals.css'
import type { Metadata } from 'next'
import { Inter, Tilt_Prism, Borel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const tilt_prism = Tilt_Prism({
  subsets: ['latin'],
  variable: '--font-tilt-prism',
  // display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


const borel = Borel({
  subsets: ['latin'],
  variable: '--font-borel',
  display: 'swap',
  weight: '400'
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
    <html lang="en" className={`
      ${inter.className} 
      `}>

      <body>
        {children}
        </body>
        <Analytics />
    </html>
  )
}
