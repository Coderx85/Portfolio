import Link from 'next/link'
import React from 'react'
import { NavlinksProps } from '../../../types'

const Navlink = (link: NavlinksProps) => {
  return (
    <Link
    href={link.href}
    className="block py-2 pl-3 pr-4 text-[#ADB7BE] active:text-red-800 sm:text-xl rounded md:p-0 hover:text-white"
>
    {link.title}
    </Link>
  )
}

export default Navlink