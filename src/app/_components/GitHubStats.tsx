"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { config } from "@/lib/config";

export default function GitHubStats() {
  // react-activity-calendar serializes date/SVG internals during data
  // resolution, so the SSR pass and the first client render disagree
  // (hydration mismatch → whole subtree regenerated). The card is data-
  // driven anyway: render a stable SSR skeleton, mount the real calendar
  // after hydration.
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative py-4 glass-card glass-card-hover overflow-hidden w-full mx-auto rounded-2xl"
      style={{
        background: "rgba(var(--accent-signal-rgb), 0.15)",
      }}
    >
      {/* Calendar */}
      <div className="px-6 pb-6 pt-2 overflow-x-auto mx-auto w-full">
        <div className="flex flex-col mb-8">
          <h3 className="text-foreground font-semibold text-base">
            GitHub Contributions
          </h3>
          <p className="text-muted-foreground text-xs">
            {mounted
              ? `@${config.username?.toLocaleLowerCase() || "coderx85"} · ${new Date().getFullYear()} activity`
              : `@${config.username?.toLocaleLowerCase() || "coderx85"} activity`}
          </p>
        </div>
        {mounted ? (
          <GitHubCalendar
            className="w-full bg-black/5 dark:bg-white/5 rounded-xl p-4"
            username={config.username || "coderx85"}
            blockSize={11}
            blockMargin={4}
            fontSize={11}
            colorScheme={resolvedTheme === "light" ? "light" : "dark"}
            year={new Date().getFullYear()}
          />
        ) : (
          // SSR skeleton sized like a loaded calendar so the card doesn't
          // jump when the real grid mounts.
          <div
            className="w-full h-[104px] bg-black/5 dark:bg-white/5 rounded-xl p-4 animate-pulse"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(var(--accent-signal-rgb), 0.12), transparent 70%)",
        }}
      />
    </motion.div>
  );
}
