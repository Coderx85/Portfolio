import type { Metadata } from "next";
import ExperienceSection from "@/components/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "View Priyanshu's professional experience as a Full Stack Developer — work history, internships, and contributions to production web applications using React, Node.js, Next.js, and modern technologies.",
  alternates: {
    canonical: "https://coderx85.vercel.app/experience",
  },
  openGraph: {
    title: "Professional Experience — Priyanshu | Full Stack Developer",
    description:
      "Full Stack Developer with hands-on experience building scalable web applications. Explore Priyanshu's professional journey and technical contributions.",
    url: "https://coderx85.vercel.app/experience",
    type: "profile",
  },
};

const ExperiencePage = () => {
  return (
    <section className="mx-24 my-20">
      <ExperienceSection mode="full" />
    </section>
  );
};

export default ExperiencePage;
