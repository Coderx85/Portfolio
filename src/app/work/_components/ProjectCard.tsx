"use client";
import { useState } from "react";
import ProjectDetails from "@/app/work/_components/ProjectDetails";
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

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <div
        className={cn(
          "h-52 md:h-72 rounded-2xl bg-no-repeat bg-center relative overflow-hidden cursor-pointer",
          "border border-white/5 hover:border-accent/30 transition-all duration-500",
          !project.imgUrl && "backdrop-brightness-50",
        )}
        style={
          project.imgUrl
            ? { background: `url(${project.imgUrl})`, backgroundSize: "cover" }
            : {
                background: "url('/images/no-preview.png')",
                backgroundSize: "cover",
              }
        }
        onClick={() => setIsOpen(true)}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent
            opacity-60 group-hover:opacity-90 transition-opacity duration-500"
        />

        {/* Hover content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3
            opacity-0 group-hover:opacity-100 transition-all duration-500"
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

        {/* Tech stack badges */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 max-w-[60%] justify-end">
          {Object.keys(project.techStack)
            .slice(0, 3)
            .map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider
                  rounded-full bg-black/60 backdrop-blur-sm border border-white/10
                  text-white/70 opacity-0 group-hover:opacity-100 
                  transition-all duration-300"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>

      <ProjectDetails
        project={project}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />

      {/* Title area */}
      <div className="mt-3 px-1">
        <h5 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h5>
        {project.description && (
          <p className="text-sm text-white/40 mt-1 line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
