import Link from 'next/link'
import React from 'react'

interface NavlinksProps {
    href: string,
    title: string
}

const Navlink = (link: NavlinksProps) => {
  return (
    <Link
    href={link.href}
    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
>
    {link.title}
    </Link>
  )
}

export default Navlink