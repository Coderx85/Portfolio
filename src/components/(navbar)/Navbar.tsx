"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "@/components/(about)/MenuOverlay";
import { navLinks } from "@/constants";

const Navbar = () => {
  const navlinks = navLinks;
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
        <div 
          className="menu hidden md:block md:w-auto text-white uppercase text-xl font-medium" 
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row space-x-8 ">
            {navLinks.map((link, index) => (
              <li key={index} className="active:text-black ">
                <Link href={link.href} className="hover:bg-whit active:text-black focus:bg-white focus:text-black">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  )
}

export default Navbar;