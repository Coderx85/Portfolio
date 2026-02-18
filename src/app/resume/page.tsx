import type { Metadata } from "next";
import ResumePage from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume & Skills",
  description:
    "Explore Priyanshu's resume — Full Stack Developer skilled in React, Node.js, Next.js, TypeScript, and DevOps. View technical expertise, education, and download the resume as PDF.",
  alternates: {
    canonical: "https://coderx85.vercel.app/resume",
  },
  openGraph: {
    title: "Resume & Skills — Priyanshu | Full Stack Developer",
    description:
      "Full Stack Developer resume showcasing expertise in React, Node.js, Next.js, TypeScript, and modern web development. Available for full-time opportunities.",
    url: "https://coderx85.vercel.app/resume",
    type: "profile",
  },
};

export default function ResumePageWrapper() {
  return <ResumePage />;
}
