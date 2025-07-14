"use client"
import Link from "next/link";
import React, { useState } from "react";
import MenuOverlay from "@/components/menubar/MenuOverlay";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { FiCrosshair, FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const DefaultNavbarPage = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="py-8 xl:12 text-white bg-grid-white/[0.2] bg-black relative">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'} className="text-3xl group font-semibold group-hover:text-accent">
          Priyanshu <span className="text-accent group-hover:text-white">.</span>
        </Link>
        <div className="mobile-menu mt-8 block md:hidden">
          {!navbarOpen ? (
            <Button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FiMenu className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FiCrosshair className="h-5 w-5" />
            </Button>
          )}
        </div>
        <div 
          className="menu hidden lg:flex text-white uppercase items-center gap-8" 
          id="navbar"
        >
            {navLinks.map((link, index) => (
              <Link 
                href={link.href} 
                key={index}
                className={`${link.href === pathname && 'text-accent border-accent border-b-4'} font-bold hover:text-[#166466] sm:text-xl transition-all`}
              >
                {link.title}
              </Link>
            ))}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay setNavbarOpen={setNavbarOpen} /> : null}
    </nav>
  )
}

export default DefaultNavbarPage;