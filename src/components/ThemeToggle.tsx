"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: resolvedTheme is only known client-side,
  // after next-themes reads the persisted/system preference.
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`rounded-full border border-black/10 dark:border-white/10 hover:border-accent/50 transition-all duration-300 ${className ?? ""}`}
    >
      {mounted ? (
        isDark ? (
          <FiSun className="h-4 w-4" />
        ) : (
          <FiMoon className="h-4 w-4" />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  );
}

export default ThemeToggle;
