"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { config } from "@/lib/config";

export default function GitHubStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative py-4 glass-card glass-card-hover overflow-hidden w-full mx-auto rounded-2xl"
      style={{
        background: "rgba(22, 100, 102, 0.15)",
      }}
    >
      {/* Calendar */}
      <div className="px-6 pb-6 pt-2 overflow-x-auto mx-auto w-full">
        <div className="flex flex-col mb-8">
          <h3 className="text-white font-semibold text-base">
            GitHub Contributions
          </h3>
          <p className="text-white/70 text-xs">
            {`@${config.username?.toLocaleLowerCase() || "coderx85"} · ${new Date().getFullYear()} activity`}
          </p>
        </div>
        <GitHubCalendar
          className="w-full bg-white/5 rounded-xl p-4"
          username={config.username || "coderx85"}
          blockSize={11}
          blockMargin={4}
          fontSize={11}
          colorScheme="dark"
          year={new Date().getFullYear()}
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
