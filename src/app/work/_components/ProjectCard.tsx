"use client";
import { useState } from "react";
import ProjectDetails from "@/app/work/_components/ProjectDetails";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    gitUrl: string;
    previewUrl: string;
    techStack: Record<string, string>;
    challengesFaced: { title: string; solution: string }[];
    lessonsLearned: string[];
  };
}

// Badges always visible at rest vs. revealed on hover; "+N" counts the rest.
const RESTING_BADGES = 2;
const HOVER_BADGES = 4;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const allTech = Object.keys(project.techStack);
  const shownTech = allTech.slice(0, HOVER_BADGES);
  const hiddenCount = allTech.length - RESTING_BADGES;

  return (
    <div className="group">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`View details: ${project.title}`}
        onClick={() => setIsOpen(true)}
        className={cn(
          "h-52 md:h-72 relative w-full overflow-hidden rounded-2xl cursor-pointer p-0 text-left",
          "border border-white/10 bg-[rgba(15,23,42,0.5)] backdrop-blur-sm",
          "transition-all duration-500",
          // System hover language: teal border shift + small lift + documented card hover shadow
          "hover:-translate-y-0.5 hover:border-accent/30 focus-visible:outline-none",
          "hover:shadow-[0_8px_32px_rgba(255,122,26,0.15),0_0_0_1px_rgba(255,122,26,0.1)]",
          "md:hover:-translate-y-1",
        )}
      >
        {project.imgUrl ? (
          <Image
            src={project.imgUrl}
            alt={`${project.title} project preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          // Dark-glass placeholder surface when no preview image exists
          <div
            aria-hidden
            className="absolute inset-0
              [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
              [background-size:24px_24px]"
          />
        )}

        {/* Gradient overlay */}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent",
            "opacity-60 group-hover:opacity-90 transition-opacity duration-500",
          )}
        />

        {/* Hover content */}
        <div
          aria-hidden
          className="absolute inset-0 flex flex-col items-center justify-center gap-3
            opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-500"
        >
          <div
            className="w-12 h-12 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-sm
              flex items-center justify-center
              group-hover:scale-110 transition-transform duration-300"
          >
            <FiExternalLink className="text-accent text-lg" />
          </div>
          <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
            View Details
          </span>
        </div>

        {/* Tech stack badges — visible at rest, embellished (count up) on hover */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 max-w-[60%] justify-end">
          {shownTech.map((tech, i) => (
            <span
              key={tech}
              className={cn(
                "px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                "rounded-full bg-black/60 backdrop-blur-sm border border-white/10",
                "text-white/70 transition-all duration-300",
                i >= RESTING_BADGES &&
                  "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
              )}
            >
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/50">
              +{hiddenCount}
            </span>
          )}
        </div>
      </button>

      <ProjectDetails
        project={project}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />

      {/* Title area — rest state information lives here */}
      <div className="mt-3 px-1">
        <h5 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h5>
        {project.description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
