import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Priyanshu — Full Stack Developer available for full-time opportunities. Reach out to discuss web development projects, collaborations, or job opportunities.",
  alternates: {
    canonical: "https://coderx85.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Priyanshu — Full Stack Developer",
    description:
      "Looking for a Full Stack Developer? Get in touch with Priyanshu to discuss web development projects, collaborations, or full-time opportunities.",
    url: "https://coderx85.vercel.app/contact",
    type: "website",
  },
};

export default function ContactPageWrapper() {
  return <ContactPage />;
}
