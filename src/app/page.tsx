import type { Metadata } from "next";
import HeroSection from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Priyanshu | Full Stack Developer — React, Node.js & Next.js Portfolio",
  description:
    "Full Stack Developer with 1+ years of experience building scalable web applications using React, Node.js, and Next.js. Passionate about clean architecture, open-source contributions, and delivering production-ready solutions.",
  alternates: {
    canonical: "https://coderx85.vercel.app",
  },
  openGraph: {
    title:
      "Priyanshu | Full Stack Developer — React, Node.js & Next.js Portfolio",
    description:
      "Full Stack Developer with 1+ years of experience building scalable web applications using React, Node.js, and Next.js. Passionate about clean architecture, open-source contributions, and delivering production-ready solutions.",
    url: "https://coderx85.vercel.app",
    type: "profile",
  },
};

export default function HomePage() {
  return <HeroSection />;
}
