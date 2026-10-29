"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experienceData } from "@/constants";
import { HiBriefcase, HiCalendarDays } from "react-icons/hi2";
import Link from "next/link";
import { calcDuration, formatDate } from "@/lib/dayjs";
import { FaArrowRight } from "react-icons/fa6";
import Heading from "./Heading";
import TechShowcasePanel from "./experience/TechShowcasePanel";
import Image from "next/image";
import { Briefcase } from "lucide-react";

// Unique accent color per experience card — curated minimal palette
const EXP_COLORS = [
  "#fb7185", // rose
  "#38bdf8", // sky blue
  "#a78bfa", // soft violet
  "#4ade80", // sage green
  "#fbbf24", // warm amber
] as const;

type TMode = "half" | "full";

function renderCard(
  exp: (typeof experienceData.items)[number],
  color: string,
  linked = false,
) {
  const dateRange = `${formatDate(exp.startDate)} – ${exp.isCurrent ? "Present" : formatDate(exp.endDate)}`;
  const duration = calcDuration(
    exp.startDate,
    exp.isCurrent ? new Date() : exp.endDate,
  );
  return (
    <div
      className="group relative glass-card glass-card-hover min-h-[320px] flex flex-col justify-center p-6"
      style={{
        borderTop: linked ? `1px solid ${color}40` : undefined,
        borderRight: linked ? `1px solid ${color}40` : undefined,
        borderBottom: linked ? `1px solid ${color}40` : undefined,
        borderLeft: `3px solid ${color}`,
        boxShadow: linked ? `0 0 28px -10px ${color}66` : undefined,
        background: `linear-gradient(135deg, ${color}12 0%, transparent 60%), var(--card-tint)`,
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div
            className="shrink-0 rounded-lg border flex items-center justify-center"
            style={{ backgroundColor: `${color}0d`, borderColor: `${color}33` }}
          >
            {!exp.imgUrl ? (
              <Briefcase />
            ) : (
              <Image
                src={exp.imgUrl ?? "/images/experience/default-company.png"}
                alt={`${exp.company} logo`}
                width={48}
                height={48}
                className="object-contain rounded-2xl"
                style={{ width: "auto", height: "auto" }}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
              <h3 className="text-foreground font-semibold text-sm sm:text-base truncate">
                {exp.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                {exp.isCurrent && (
                  <span
                    className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full animate-pulse"
                    style={{
                      border: `1px solid ${color}99`,
                      backgroundColor: `${color}26`,
                      color: color,
                    }}
                  >
                    Current
                  </span>
                )}
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {dateRange}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              {exp.linkedin ? (
                <Link
                  href={exp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium inline-flex items-center gap-1 transition-colors duration-200 hover:brightness-125"
                  style={{ color }}
                >
                  {exp.company}
                </Link>
              ) : (
                <span
                  className="text-xs font-medium inline-block"
                  style={{ color }}
                >
                  {exp.company}
                </span>
              )}
              {duration && (
                <span
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[11px] font-medium rounded-md"
                  style={{
                    backgroundColor: `${color}0d`,
                    color: `${color}cc`,
                    border: `1px solid ${color}1a`,
                  }}
                >
                  <HiCalendarDays className="w-2.5 h-2.5" />
                  {duration}
                </span>
              )}
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-1.5">
          {exp.description.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-muted-foreground leading-relaxed"
            >
              <span
                className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              {point}
            </li>
          ))}
        </ul>
        {exp.techStack && exp.techStack.length > 0 && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {exp.techStack.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-all duration-300 hover:brightness-125"
                style={{
                  backgroundColor: `${color}1a`,
                  color: color,
                  border: `1px solid ${color}33`,
                }}
              >
                <tech.icon className="w-3 h-3" />
                {tech.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const ExperienceSection = ({ mode = "half" }: { mode?: TMode }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeCardIndexRef = useRef(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // How far the user has scrolled past the active card's snap point, roughly
  // -1..1 — updated on every scroll tick (no setState, so no re-render) and
  // read directly by the cube's per-frame loop to couple its tilt/parallax
  // to the scroll gesture itself, not just to the card change it settles on.
  const scrollProgressRef = useRef(0);
  const sortedItems = [...experienceData.items].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime(),
  );

  const visibleItems = mode === "half" ? sortedItems.slice(0, 2) : sortedItems;
  const colorsArray = mode === "half" ? EXP_COLORS.slice(0, 2) : EXP_COLORS;

  const activeItem = visibleItems[activeCardIndex] ?? visibleItems[0];

  // Full mode: cards live in their own fixed-height, scroll-snapped viewport
  // — one card fills it at a time, and scrolling (or the dots) snaps to the
  // next/previous one. An IntersectionObserver (rooted in that viewport)
  // tracks whichever card is snapped into view and syncs the cube to it
  // (content/color + one more quarter-turn).
  useEffect(() => {
    if (mode !== "full" || !scrollContainerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex: number | null = null;
        let bestRatio = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio <= bestRatio)
            return;
          const index = cardRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );
          if (index !== -1) {
            bestIndex = index;
            bestRatio = entry.intersectionRatio;
          }
        });
        if (bestIndex !== null && bestIndex !== activeCardIndexRef.current) {
          activeCardIndexRef.current = bestIndex;
          setActiveCardIndex(bestIndex);
        }
      },
      { root: scrollContainerRef.current, threshold: [0.5, 0.6, 0.75, 0.9, 1] },
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [mode, visibleItems.length]);

  // Tracks raw scroll position continuously, separate from the (discrete,
  // snap-driven) observer above — this is what lets the cube's tilt follow
  // the gesture in progress rather than only reacting once it settles.
  useEffect(() => {
    if (mode !== "full" || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const handleScroll = () => {
      const cardHeight = container.clientHeight || 1;
      const continuousIndex = container.scrollTop / cardHeight;
      scrollProgressRef.current = Math.max(
        -1,
        Math.min(1, continuousIndex - activeCardIndexRef.current),
      );
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [mode]);

  const showcase = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-8">
      <div className="order-1 lg:sticky lg:top-28 h-[220px] lg:h-[560px] flex items-center justify-center [overflow-anchor:none]">
        <TechShowcasePanel
          activeIndex={activeCardIndex}
          activeItem={activeItem}
          colors={colorsArray}
          scrollProgressRef={scrollProgressRef}
          className="h-full w-full max-w-[420px]"
        />
      </div>
      <div className="order-2 relative flex flex-col gap-4">
        <div
          ref={scrollContainerRef}
          className="relative h-[480px] lg:h-[560px] overflow-y-auto overscroll-contain snap-y snap-mandatory rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {visibleItems.map((exp, index) => {
            const color = colorsArray[index % colorsArray.length];
            const isActive = index === activeCardIndex;
            return (
              <div
                key={exp.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="h-full flex items-center snap-start snap-always"
              >
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 56 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    root: scrollContainerRef,
                    margin: "-10% 0px",
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.45,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  {renderCard(exp, color, isActive)}
                </motion.div>
              </div>
            );
          })}
        </div>
        {activeCardIndex < visibleItems.length - 1 && (
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 rounded-b-2xl"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(var(--canvas-scrim-rgb), 0.9))",
            }}
            aria-hidden="true"
          />
        )}

        {visibleItems.length > 1 && (
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs text-muted-foreground tabular-nums">
              {activeCardIndex + 1}/{visibleItems.length}
            </span>
            <div className="flex gap-1 px-2 py-1.5 rounded-full glass">
              {visibleItems.map((exp, index) => (
                <button
                  key={exp.id}
                  type="button"
                  aria-label={`Scroll to ${exp.company}`}
                  onClick={() => {
                    const card = cardRefs.current[index];
                    const container = scrollContainerRef.current;
                    if (card && container) {
                      container.scrollTo({
                        top: card.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="w-8 h-8 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: colorsArray[index % colorsArray.length],
                      opacity: index === activeCardIndex ? 1 : 0.3,
                      transform:
                        index === activeCardIndex ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        <div aria-live="polite" className="sr-only">
          {`Experience ${activeCardIndex + 1} of ${visibleItems.length}`}
        </div>
      </div>
    </div>
  );

  const timelineAndButton = (
    <>
      {/* Timeline — zigzag two-column layout, alternating left/right around a center spine */}
      <div className="exp-timeline">
        <div
          className="exp-spine"
          style={{
            background: `linear-gradient(to bottom, ${colorsArray.join(", ")}, transparent)`,
          }}
        />
        {visibleItems.map((exp, index) => {
          const color = colorsArray[index % colorsArray.length];
          const onLeft = index % 2 === 0;
          const card = renderCard(exp, color);
          return (
            <motion.div
              key={exp.id}
              initial={{
                opacity: 0,
                y: 40,
                rotateX: prefersReducedMotion ? 0 : 16,
                scale: prefersReducedMotion ? 1 : 0.97,
              }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              style={{
                transformPerspective: 1000,
                transformOrigin: "top center",
              }}
              className="exp-row"
            >
              <div>{onLeft && card}</div>
              <div className="exp-cell-dot">
                <div
                  className="exp-dot"
                  style={{
                    borderColor: color,
                    backgroundColor: exp.isCurrent
                      ? color
                      : "rgb(var(--canvas-scrim-rgb))",
                    boxShadow: exp.isCurrent ? `0 0 12px ${color}99` : "none",
                  }}
                />
              </div>
              <div>{!onLeft && card}</div>
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
            delay: 0.5,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="pl-5 h-full w-fit justify-start flex items-start mt-8"
        >
          <Link
            href="/experience"
            className="text-foreground flex gap-2 px-4 py-2 rounded-xl border-2 border-black dark:border-white hover:border-black/50 dark:hover:border-white/50 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
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
    </>
  );

  const header = (
    <div className="flex gap-3 justify-between text-accent" id="experience">
      <Heading
        title={"Work Experience"}
        icon={HiBriefcase}
        type="section"
        description={"Where I've Worked"}
      />{" "}
      <div className="flex justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="flex gap-3 items-center"
        >
          <Link
            href="/work#projects"
            className="flex items-center gap-2 px-4 py-2 border-b-2 border-black/25 dark:border-white/25 hover:bg-black/5 dark:hover:bg-white/15 transition-colors duration-300"
          >
            {"My Projects" as const}
            <FaArrowRight className="text-sm items-center justify-center" />
          </Link>
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="exp-rail-layout">
      <div className="exp-rail">
        <div
          className="exp-rail-line"
          style={{
            background: `linear-gradient(to bottom, ${colorsArray.join(", ")}, transparent)`,
          }}
        />
      </div>
      <div className="exp-rail-body">
        {header}
        {mode === "full" ? showcase : timelineAndButton}
      </div>
    </div>
  );
};

export default ExperienceSection;
