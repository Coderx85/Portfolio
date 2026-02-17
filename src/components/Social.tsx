import { SocialLink } from "@/constants";
import { ISocialLinks } from "@/types";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex gap-3 sm:gap-4 justify-center items-center flex-wrap mt-4 sm:mt-6">
      {SocialLink.map((link: ISocialLinks, index: number) => (
        <Link
          key={index}
          className="flex items-center z-1 gap-2 rounded-full justify-center w-10 h-10 sm:w-11 sm:h-11
            border border-accent/40 bg-accent/5 text-base
            hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20
            hover:scale-110 active:scale-95
            group transition-all duration-300 ease-out"
          href={link.url}
          target="_blank"
          aria-label={link.name}
          rel="noopener noreferrer"
          title={link.name}
        >
          <span className="text-lg sm:text-xl text-white/70 group-hover:text-white transition-colors duration-300">
            <link.icon />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
