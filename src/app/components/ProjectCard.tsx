'use client'
import { useState } from 'react';
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
        <div 
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 hover:cursor-pointer "
          onClick={() => setIsOpen(true)}
          >
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