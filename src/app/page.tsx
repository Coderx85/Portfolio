import type { Metadata } from "next";
import HeroSection from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Priyanshu | Full Stack Developer — React, Node.js & Next.js Portfolio",
  description:
    "Full Stack Developer and DevOps Engineer with 2+ years of experience building production AI-driven SaaS and multi-tenant web applications using React, Node.js, and Next.js.",
  alternates: {
    canonical: "https://coderx85.vercel.app",
  },
  openGraph: {
    title:
      "Priyanshu | Full Stack Developer — React, Node.js & Next.js Portfolio",
    description:
      "Full Stack Developer and DevOps Engineer with 2+ years of experience building production AI-driven SaaS and multi-tenant web applications using React, Node.js, and Next.js.",
    url: "https://coderx85.vercel.app",
    type: "profile",
  },
};

export default function HomePage() {
  return <HeroSection />;
}
