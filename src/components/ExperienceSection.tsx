"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/constants";
import { HiBriefcase, HiCalendarDays } from "react-icons/hi2";
import Link from "next/link";
import { calcDuration, formatDate } from "@/lib/dayjs";
import { FaArrowRight } from "react-icons/fa6";

// Unique accent color per experience card — curated minimal palette
const EXP_COLORS = [
  "#38bdf8", // sky blue
  "#a78bfa", // soft violet
  "#4ade80", // sage green
  "#fbbf24", // warm amber
] as const;

type TMode = "half" | "full";

const ExperienceSection = ({ mode = "half" }: { mode?: TMode }) => {
  const sortedItems = [...experienceData.items].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime(),
  );

  const visibleItems = mode === "half" ? sortedItems.slice(0, 2) : sortedItems;
  const colorsArray = mode === "half" ? EXP_COLORS.slice(0, 2) : EXP_COLORS;

  return (
    <div className="h-full flex flex-col gap-7">
      {/* Section Header */}
      <div className="flex gap-3 justify-between text-accent">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3 text-accent text-3xl"
          >
            <HiBriefcase className="fill-accent" />
            Work Experience
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white"
          >
            Where I&apos;ve Worked
          </motion.h2>
        </div>
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
            className="flex gap-3 items-center"
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 px-4 py-2 border-b-2 border-white/25 hover:bg-white/15 transition-colors duration-300"
            >
              {"My Projects" as const}
              <FaArrowRight className="text-sm items-center justify-center" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mt-6">
        {/* Vertical Line — gradient through card colours */}
        <div
          className="absolute left-1.75 top-2 bottom-2 w-0.5"
          style={{
            background: `linear-gradient(to bottom, ${colorsArray.join(", ")}, transparent)`,
          }}
        />

        <div className="flex flex-col gap-8">
          {visibleItems.map((exp, index) => {
            const color = colorsArray[index % colorsArray.length];
            const dateRange = `${formatDate(exp.startDate)} – ${exp.isCurrent ? "Present" : formatDate(exp.endDate)}`;
            const duration = calcDuration(
              exp.startDate,
              exp.isCurrent ? new Date() : exp.endDate,
            );

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="relative pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-5 z-10">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 transition-all duration-300"
                    style={{
                      borderColor: color,
                      backgroundColor: exp.isCurrent ? color : "#0a0a0a",
                      boxShadow: exp.isCurrent ? `0 0 12px ${color}99` : "none",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="group relative glass-card glass-card-hover px-6 py-5 sm:px-8 sm:py-6 cursor-default overflow-hidden"
                  style={{
                    borderLeft: `3px solid ${color}`,
                    background: `linear-gradient(135deg, ${color}12 0%, transparent 60%), rgba(15, 23, 42, 0.5)`,
                  }}
                >
                  {/* Top Row: Title + Badge + Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <h3 className="text-white/90 font-semibold text-lg sm:text-xl">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2.5 shrink-0">
                      {exp.isCurrent && (
                        <span
                          className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full animate-pulse"
                          style={{
                            border: `1px solid ${color}99`,
                            backgroundColor: `${color}26`,
                            color: color,
                          }}
                        >
                          Current
                        </span>
                      )}
                      <span className="text-white/40 text-sm whitespace-nowrap">
                        {dateRange}
                      </span>
                    </div>
                  </div>

                  {/* Company + Duration pill */}
                  <div className="flex items-center gap-3 mt-1">
                    {exp.linkedin ? (
                      <Link
                        href={exp.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200 hover:brightness-125"
                        style={{ color }}
                      >
                        {exp.company}
                        <svg
                          className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-4.5L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <span
                        className="text-sm font-medium inline-block"
                        style={{ color }}
                      >
                        {exp.company}
                      </span>
                    )}

                    {duration && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-md"
                        style={{
                          backgroundColor: `${color}0d`,
                          color: `${color}cc`,
                          border: `1px solid ${color}1a`,
                        }}
                      >
                        <HiCalendarDays className="w-3 h-3" />
                        {duration}
                      </span>
                    )}
                  </div>

                  {/* Description — Bullet Points */}
                  <ul className="mt-3 space-y-1.5 list-none">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/60 text-sm leading-relaxed"
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{
                      background: `radial-gradient(circle at top left, ${color}15, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Tech Stack Pills */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {exp.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + i * 0.05,
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-all duration-300 hover:brightness-125"
                        style={{
                          backgroundColor: `${color}1a`,
                          color: color,
                          border: `1px solid ${color}33`,
                        }}
                      >
                        <tech.icon className="w-3 h-3" />
                        {tech.title}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* "View All" Button for half mode */}
        {mode === "half" && experienceData.items.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.4 + 5 * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="pl-5 h-full w-fit justify-start flex items-start "
          >
            <Link
              href="/experience"
              className="text-white flex gap-2 px-4 py-2 rounded-xl border-2 border-white hover:border-white/50 hover:bg-white/10 transition-colors duration-300"
            >
              View more experiences
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center"
              >
                <FaArrowRight className="text-sm items-center" />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
