'use client'
import { useState } from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ProjectCardProp } from '../../../types';
import ProjectDetails from './ProjectDetails';

interface ProjectCardProps {
  project: ProjectCardProp;
}

const ProjectCard = ({project} : ProjectCardProps) => {
  
  const [isOpen, setIsOpen] = useState(false)

  // const bgimng = !project.imgUrl ? `https://github.com/Priyanshu085/${project.title}/blob/my/public/screenshots/bg.png`: project.imgUrl ;

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-xl bg-no-repeat bg-center relative group"
        style={{ background: `url(${project.imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 
                      hover:cursor-pointer "
          onClick={() => setIsOpen(true)}
          >
          {/* <Link
            href={project.gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
          {/* <button
            // href={project.previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            onClick={() => setIsOpen(true)}  
          >
            <span>
              <EyeIcon 
                className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" 
              />
              </span>
          </button> */}
        </div>
      </div>
      <ProjectDetails project={project} isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{project.title}</h5> 
      </div>
    </div>
  )
}

export default ProjectCard