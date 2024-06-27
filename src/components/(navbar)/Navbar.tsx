"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "@/components/(about)/MenuOverlay";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navlinks = navLinks;
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="navbar py-8 xl:12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'} className="text-3xl font-semibold">
          Priyanshu <span className="text-accent">.</span>
        </Link>
        <div className="mobile-menu mt-8 block md:hidden">
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
          className="menu hidden xl:flex text-white uppercase items-center gap-8" 
          id="navbar"
        >
            {navLinks.map((link, index) => (
              <Link 
                href={link.href} 
                key={index}
                className={`${link.href === pathname && 'text-accent border-accent border-b-4'} font-bold hover:text-[#166466] sm:text-xl transition-all166466`}
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  )
}

export default Navbar;