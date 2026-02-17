import Link from "next/link";
import React from "react";
import { INavlinks } from "@/types";

interface NavlinkProps extends INavlinks {
  setNavbarOpen?: (open: boolean) => void;
}

const Navlink = ({ href, title, setNavbarOpen }: NavlinkProps) => {
  const handleClick = () => {
    if (setNavbarOpen) {
      setNavbarOpen(false);
    }
  };

  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white hover:text-accent hover:bg-accent sm:text-xl rounded md:p-0 focus:bg-white focus:text-black"
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export default Navlink;
