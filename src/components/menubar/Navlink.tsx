import Link from 'next/link'
import React from 'react'
import { NavlinksProps } from '@/types'

interface NavlinkProps extends NavlinksProps {
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
      className="block py-2 pl-3 pr-4 text-white hover:text-[#166466] hover:bg-[#166466] sm:text-xl rounded md:p-0 focus:bg-white focus:text-black"
      onClick={handleClick}
    >
      {title}
    </Link>
  )
}

export default Navlink