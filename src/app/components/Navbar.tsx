"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#abouts",
  },
  {
    title: "Projects",
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact'
  }
]

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="navbar text-white fixe bg-[#121212] z-10">
      <div className="flex flex-wrap navbar items-center justify-between mx-auto px-4">
        <Link href={'/'} className="text-5xl text-white font-semibold">
          Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden  md:block md:w-auto text-white" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar;