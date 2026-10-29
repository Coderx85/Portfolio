import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders JSON-LD structured data for SEO.
 * Used to provide Schema.org markup to search engines.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

/**
 * Person + WebSite combined structured data for the portfolio.
 * This helps Google connect all social profiles and understand the site owner.
 */
export function getPortfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://coderx85.vercel.app/#website",
        url: "https://coderx85.vercel.app",
        name: "Priyanshu | Full Stack Developer Portfolio",
        description:
          "Full Stack Developer and DevOps Engineer with 2+ years of experience building production AI-driven SaaS and multi-tenant web applications using React, Node.js, and Next.js.",
        publisher: {
          "@id": "https://coderx85.vercel.app/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": "https://coderx85.vercel.app/#person",
        name: "Priyanshu",
        alternateName: ["Coderx85", "Priyanshu085", "PRiyanshuX085"],
        url: "https://coderx85.vercel.app",
        image: "https://coderx85.vercel.app/images/hero.png",
        jobTitle: "Forward Deployed Engineer",
        description:
          "Full Stack Developer and DevOps Engineer with 2+ years of experience building production AI-driven SaaS and multi-tenant web applications using React, Node.js, and Next.js.",
        email: "work.priyanshu085@gmail.com",
        worksFor: {
          "@type": "Organization",
          name: "Adleia Labs",
          url: "https://adleia.com/",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "New Delhi",
        },
        sameAs: [
          "https://github.com/coderx85",
          "https://www.linkedin.com/in/coderx85/",
          "https://twitter.com/Priyanshux085",
          "https://www.reddit.com/user/coderx85",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Full Stack Development",
          "Web Development",
          "Software Engineering",
          "DevOps",
          "Open Source",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": "https://coderx85.vercel.app/#profilepage",
        url: "https://coderx85.vercel.app",
        name: "Priyanshu — Full Stack Developer Portfolio",
        isPartOf: {
          "@id": "https://coderx85.vercel.app/#website",
        },
        about: {
          "@id": "https://coderx85.vercel.app/#person",
        },
        mainEntity: {
          "@id": "https://coderx85.vercel.app/#person",
        },
      },
    ],
  };
}
