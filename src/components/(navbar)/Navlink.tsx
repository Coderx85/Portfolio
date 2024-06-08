import Link from 'next/link'
import React from 'react'
import { NavlinksProps } from '@/types'

const Navlink = (link: NavlinksProps) => {
  return (
    <Link
    href={link.href}
    className="block py-2 pl-3 pr-4 text-white hover:text-[#166466] hover:bg-[#166466] sm:text-xl rounded md:p-0 focus:bg-white focus:text-black"
    >
    {link.title}
    </Link>
  )
}

export default Navlink