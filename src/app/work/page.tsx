import type { Metadata } from "next";
import ProjectSection from "./WorkClient";

export const metadata: Metadata = {
  title: "Projects & Work",
  description:
    "Browse Priyanshu's portfolio of web development projects — full stack applications built with React, Next.js, Node.js, and TypeScript. See live demos, source code, and technical breakdowns.",
  alternates: {
    canonical: "https://coderx85.vercel.app/work",
  },
  openGraph: {
    title: "Projects & Work — Priyanshu | Full Stack Developer",
    description:
      "Explore production-ready web applications built by Priyanshu using React, Next.js, Node.js, and TypeScript. Live demos and GitHub source code included.",
    url: "https://coderx85.vercel.app/work",
    type: "website",
  },
};

export default function WorkPageWrapper() {
  return <ProjectSection />;
}
