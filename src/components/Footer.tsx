"use client";
import Link from "next/link";
import { navLinks, SocialLink } from "@/constants";
import { INavlinks, SocialLinksProps } from "@/types";
import { config } from "@/lib/config";

const Footer = () => {
  const { name, description } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="gradient-border-top mt-auto">
      <div className="glass py-16 px-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col w-1/3 gap-2">
            <h4 className="text-xl font-semibold group">
              {name}{" "}
              <span className="text-accent group-hover:text-white transition-colors duration-300">
                .
              </span>
            </h4>
            <p className="text-white/60 text-sm">{description}</p>
            {/* Social Links */}
            <div className="flex gap-3">
              {SocialLink.map((link: SocialLinksProps, index: number) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-9 h-9 rounded-full border border-white/10 
                    flex items-center justify-center
                    hover:border-accent hover:bg-accent/10 
                    transition-all duration-300 group"
                >
                  <link.icon className="text-sm text-white/60 group-hover:text-accent transition-colors duration-300" />
                </Link>
              ))}
            </div>
            <p className="text-white/40 text-sm">
              Building digital experiences with passion
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-semibold group">Navigation</h4>
            {navLinks.map((link: INavlinks, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            © {year} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
