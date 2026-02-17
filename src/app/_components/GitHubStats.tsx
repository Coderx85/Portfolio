"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function GitHubStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative glass-card glass-card-hover overflow-hidden w-full mx-auto"
      style={{
        borderLeft: "3px solid var(--color-accent)",
        background:
          "linear-gradient(135deg, rgba(22, 100, 102, 0.08) 0%, transparent 60%), rgba(15, 23, 42, 0.5)",
      }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-3 flex items-center gap-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-lg"
          style={{ backgroundColor: "rgba(22, 100, 102, 0.15)" }}
        >
          <FaGithub className="w-5 h-5 text-accent" />
        </span>
        <div>
          <h3 className="text-white/90 font-semibold text-base">
            GitHub Contributions
          </h3>
          <p className="text-white/40 text-xs">
            @Coderx85 · {new Date().getFullYear()} activity
          </p>
        </div>
      </div>

      {/* Calendar */}
      <div className="px-6 pb-6 pt-2 overflow-x-auto mx-auto w-full">
        <GitHubCalendar
          className="w-full"
          username="Coderx85"
          blockSize={11}
          blockMargin={4}
          fontSize={11}
          colorScheme="dark"
          year={new Date().getFullYear()}
          style={{
            color: "rgba(255, 255, 255, 0.5)",
          }}
        />
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(22, 100, 102, 0.12), transparent 70%)",
        }}
      />
    </motion.div>
  );
}
