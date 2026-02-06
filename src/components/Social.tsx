import { SocialLink } from "@/constants";
import { SocialLinksProps } from "@/types";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div className="flex gap-4 sm:gap-6 justify-center items-center flex-wrap mt-4 sm:mt-8">
      {SocialLink.map((link: SocialLinksProps, index: number) => (
        <Link
          key={index}
          className="flex items-center z-1 gap-2 rounded-full justify-center w-10 h-10 sm:w-12 sm:h-12 border-accent text-base border-2
            hover:bg-accent hover:text-primary group hover:transition-all duration-500"
          href={link.url}
          about="Social Link"
          target="_blank"
          aria-label={link.name}
          rel="noopener noreferrer"
          title={link.url}
        >
          <span className="text-xl sm:text-2xl group-hover:scale-150">
            <link.icon />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
