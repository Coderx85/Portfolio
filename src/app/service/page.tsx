import type { Metadata } from "next";
import ServiceSection from "@/components/ServiceSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover the web development services offered by Priyanshu — full stack development, frontend engineering, backend APIs, and DevOps solutions. Built with React, Next.js, Node.js, and cloud technologies.",
  alternates: {
    canonical: "https://coderx85.vercel.app/service",
  },
  openGraph: {
    title: "Web Development Services — Priyanshu | Full Stack Developer",
    description:
      "Full stack web development services including frontend (React, Next.js), backend (Node.js), database design, and DevOps. Available for full-time roles.",
    url: "https://coderx85.vercel.app/service",
    type: "website",
  },
};

const ServicesPage = () => {
  return (
    <section className="min-h-screen px-20">
      <ServiceSection page="full" />
    </section>
  );
};

export default ServicesPage;
