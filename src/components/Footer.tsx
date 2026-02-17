"use client";
import Link from "next/link";
import { navLinks, SocialLink } from "@/constants";
import { INavlinks, ISocialLinks } from "@/types";
import { config } from "@/lib/config";
import { FaArrowUp, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  const { name, description } = config;
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="gradient-border-top mt-auto relative">
      <div className="glass py-12 px-6 md:px-16 lg:px-24">
        {/* ── Top Section: Brand + CTA ── */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="gradient-text">{name}</span>
              <span className="text-accent animate-pulse">.</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* CTA / Tagline */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">
              Let&apos;s build something great
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                border border-accent/40 bg-accent/10 
                hover:bg-accent/20 hover:border-accent/70
                transition-all duration-300 text-sm font-medium text-accent hover:text-white"
            >
              Get in Touch
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* ── Middle Section: 3 Columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-1">
              Quick Links
            </h5>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link: INavlinks, index: number) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/50 hover:text-white 
                    transition-all duration-300 text-sm w-fit"
                >
                  <span
                    className="inline-block w-0 group-hover:w-4 overflow-hidden 
                      transition-all duration-300 text-accent text-xs"
                  >
                    →
                  </span>
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Get In Touch */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-1">
              Get In Touch
            </h5>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${config.email}`}
                className="group flex items-center gap-3 text-white/50 hover:text-white 
                  transition-colors duration-300 text-sm"
              >
                <span
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 
                  flex items-center justify-center group-hover:border-accent/40 
                  group-hover:bg-accent/10 transition-all duration-300 shrink-0"
                >
                  <FaEnvelope className="text-xs text-white/40 group-hover:text-accent transition-colors duration-300" />
                </span>
                {config.email}
              </a>

              <div className="group flex items-center gap-3 text-white/50 text-sm">
                <span
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 
                  flex items-center justify-center shrink-0"
                >
                  <FaPhone className="text-xs text-white/40" />
                </span>
                +91 {config.phone}
              </div>

              <div className="group flex items-center gap-3 text-white/50 text-sm">
                <span
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 
                  flex items-center justify-center shrink-0"
                >
                  <FaLocationDot className="text-xs text-white/40" />
                </span>
                {config.location}
              </div>
            </div>
          </div>

          {/* Column 3: Social / Follow Me */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-1">
              Follow Me
            </h5>
            <div className="flex flex-col gap-2.5">
              {SocialLink.map((link: ISocialLinks, index: number) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group flex items-center gap-3 text-white/50 hover:text-white 
                    transition-all duration-300 text-sm w-fit"
                >
                  <span
                    className="w-8 h-8 rounded-lg border border-white/10 bg-white/5
                      flex items-center justify-center
                      group-hover:border-accent/40 group-hover:bg-accent/10 
                      transition-all duration-300 shrink-0"
                  >
                    <link.icon className="text-xs text-white/40 group-hover:text-accent transition-colors duration-300" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm leading-tight">{link.name}</span>
                    <span className="text-[11px] text-white/30 leading-tight">
                      @{link.username}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Divider ── */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} <span className="text-white/50">{name}</span>. All rights
            reserved.
          </p>

          <p className="text-white/20 text-xs flex items-center gap-1.5">
            Crafted with
            <span className="text-red-400 text-sm animate-pulse">♥</span>
            using Next.js & TypeScript
          </p>
        </div>
      </div>

      {/* ── Back to Top Button ── */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-6 md:right-16 lg:right-24 -top-5
          w-10 h-10 rounded-full 
          bg-accent/20 border border-accent/40
          flex items-center justify-center
          hover:bg-accent/40 hover:border-accent/70 hover:scale-110
          transition-all duration-300 
          backdrop-blur-sm group"
      >
        <FaArrowUp className="text-xs text-accent group-hover:text-white transition-colors duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
