"use client";
import { useState } from "react";
import ProjectDetails from "@/app/work/_components/ProjectDetails";
import { cn } from "@/lib/utils";

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
    <div>
      <div
        className={cn(
          "h-52 md:h-72 rounded-xl bg-no-repeat bg-center relative group ",
          !project.imgUrl && " backdrop-brightness-50 border-xl",
        )}
        style={
          project.imgUrl
            ? { background: `url(${project.imgUrl})`, backgroundSize: "cover" }
            : {
                background: "url('/images/no-preview.png')",
                backgroundSize: "cover",
              }
        }
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/55 hidden group-hover:flex group-hover:hover:bg-black/55 transition-all duration-500 hover:cursor-pointer "
          onClick={() => setIsOpen(true)}
        ></div>
      </div>
      <ProjectDetails
        project={project}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
      <div className="text-white rounded-b-xl mt-2 py-2 px-4">
        <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
