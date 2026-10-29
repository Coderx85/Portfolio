"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuOverlay from "@/components/menubar/MenuOverlay";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { FiX, FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-4 text-foreground sticky top-0 transition-all duration-500 gradient-border-bottom ${
        scrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-black/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl xl:text-3xl group font-bold tracking-tight"
        >
          <span className="gradient-text">Priyanshu</span>{" "}
          <span className="text-accent group-hover:text-foreground transition-colors duration-300">
            .
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            onClick={() => setNavbarOpen(!navbarOpen)}
            variant="ghost"
            size="sm"
            className="relative w-10 h-10 rounded-full border border-black/10 dark:border-white/10 hover:border-secondary transition-all duration-300"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {navbarOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Desktop navigation */}
        <div
          className="menu hidden lg:flex text-foreground uppercase items-center gap-1"
          id="navbar"
        >
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-wider
                transition-all duration-300 ease-out
                ${
                  link.href === pathname
                    ? "text-accent bg-accent/10"
                    : "text-secondary-foreground/65 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                }`}
            >
              {link.title}
              {link.href === pathname && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-px rounded-full bg-accent "
                  style={{ boxShadow: "0 0 8px rgba(255, 122, 26, 0.8)" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle className="ml-2" />
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass mt-2 mx-4 rounded-2xl overflow-hidden lg:hidden"
          >
            <MenuOverlay setNavbarOpen={setNavbarOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
