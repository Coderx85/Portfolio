import Link from 'next/link'
import React from 'react'
import { NavlinksProps } from '../../../types'

const Navlink = (link: NavlinksProps) => {
  return (
    <Link
    href={link.href}
    className="block py-2 pl-3 pr-4 text-white active:text-red-800 active:bg-white sm:text-xl rounded md:p-0 focus:bg-white focus:text-black"
    >
    {link.title}
    </Link>
  )
}

export default Navlink