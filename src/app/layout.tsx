import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import PageTransition from "@/components/animation/PageTransition";
import StairTransition from "@/components/animation/StairTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import JsonLd, { getPortfolioJsonLd } from "@/components/seo/JsonLd";

const font = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Priyanshu | Full Stack Developer — React, Node.js & Next.js Portfolio",
    template: "%s | Priyanshu — Full Stack Developer",
  },
  description:
    "Full Stack Developer with 1+ years of experience building scalable web applications using React, Node.js, and Next.js. Passionate about clean architecture, open-source contributions, and delivering production-ready solutions.",
  keywords: [
    "Priyanshu",
    "Coderx85",
    "Priyanshu085",
    "PriyanshuX085",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Full Stack Developer Portfolio",
    "Software Engineer Portfolio",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Developer Portfolio India",
  ],
  metadataBase: new URL("https://coderx85.vercel.app"),
  openGraph: {
    title:
      "Priyanshu | Full Stack Developer — React, Node.js & Next.js Portfolio",
    description:
      "Full Stack Developer with 1+ years of experience building scalable web applications using React, Node.js, and Next.js. Passionate about clean architecture, open-source contributions, and delivering production-ready solutions.",
    url: "https://coderx85.vercel.app",
    siteName: "Priyanshu — Full Stack Developer Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu — Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu | Full Stack Developer",
    description:
      "Full Stack Developer with 1+ years of experience building scalable web applications using React, Node.js, and Next.js.",
    creator: "@Priyanshux085",
    site: "@Priyanshux085",
    images: [
      {
        url: "/images/hero.png",
        alt: "Priyanshu — Full Stack Developer Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/hero.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://coderx85.vercel.app",
  },
  manifest: "/manifest.json",
  category: "portfolio",
  authors: [
    {
      name: "Priyanshu",
      url: "https://github.com/Coderx85",
    },
  ],
  creator: "Priyanshu",
  publisher: "Priyanshu",
  verification: {
    // Add your Google Search Console verification code here when available
    // google: "your-google-verification-code",
  },
  other: {
    "theme-color": "#0ea5e9",
    "color-scheme": "dark",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
          {/* JSON-LD Structured Data for SEO */}
          <JsonLd data={getPortfolioJsonLd()} />

          {/* Ambient Background Orbs */}
          <div className="orb orb-1" aria-hidden="true" />
          <div className="orb orb-2" aria-hidden="true" />
          <div className="orb orb-3" aria-hidden="true" />

          <section className="min-h-screen flex flex-col">
            <Navbar />
            <StairTransition />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
          </section>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
