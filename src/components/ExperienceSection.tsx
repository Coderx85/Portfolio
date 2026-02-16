"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/constants";
import { HiBriefcase, HiCalendarDays } from "react-icons/hi2";
import Link from "next/link";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Format a Date as "Mon YYYY" */
const formatDate = (date: Date) => {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * Calculate human-readable duration between two dates
 * @param start - Start date
 * @param end - End date
 * @returns Human-readable duration string
 *
 * @example
 * calcDuration(new Date("2022-01-01"), new Date("2022-02-01"));
 */
const calcDuration = (start: Date, end: Date) => {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // at least 1 month
  if (months < 1) months = 1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  // years and months
  if (years > 0 && remainingMonths > 0)
    return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;

  // years only
  if (years > 0) return `${years} yr${years > 1 ? "s" : ""}`;

  // months only
  return `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
};

const ExperienceSection = () => {
  return (
    <div className="mx-auto h-full mt-40 flex flex-col gap-7">
      {/* Section Header */}
      <div className="flex gap-3 flex-col text-accent">
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

      {/* Timeline */}
      <div className="relative mt-6">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-linear-to-b from-accent/60 to-accent/5" />

        <div className="flex flex-col gap-8">
          {experienceData.items
            // Sort by start date in descending order
            .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
            // Map over the sorted items
            .map((exp, index) => {
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
                      className={`w-[14px] h-[14px] rounded-full border-2 border-accent transition-all duration-300 ${
                        exp.isCurrent
                          ? "bg-accent shadow-[0_0_12px_rgba(22,100,102,0.6)]"
                          : "bg-[#0a0a0a]"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="glass-card glass-card-hover px-6 py-5 sm:px-8 sm:py-6 group cursor-default bg-zinc-600/10 hover:bg-zinc-600/20">
                    {/* Top Row: Title + Badge + Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                      <h3 className="text-white font-semibold text-lg sm:text-xl">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2.5 shrink-0">
                        {/* Timeline Badge + date range */}

                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full border border-accent/60 bg-accent/15 text-accent animate-pulse">
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
                          className="text-accent hover:text-accent-hover text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200"
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
                        <span className="text-accent text-sm font-medium inline-block">
                          {exp.company}
                        </span>
                      )}

                      {duration && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/5 text-white/40 border border-white/5">
                          <HiCalendarDays className="w-3 h-3" />
                          {duration}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mt-3">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4 flex-wrap">
                    {exp.techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/30 transition-all duration-300"
                      >
                        {tech.title}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
