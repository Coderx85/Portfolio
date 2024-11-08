"use client"
import React, { useRef, useState } from 'react'
import { Project_Data } from '@/constants'
import { motion, useInView } from 'framer-motion'
import { ProjectTagProps } from '@/types'
import ProjectTag from '@/components/project/ProjectTag'
import ProjectCard from '@/components/project/ProjectCard'

const project: ProjectTagProps[] = [
    {
        tag: "All",
        name: "All Projects",
    },
    {
        tag: "Web",
        name: "Web Dev.",
    },
    {
        tag: "ML",
        name: "Machine Learning",
    }
]

const ProjectSection = () => {
    const [tab ,setTab] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTabChange = (selectTab: string) => {
        setTab(selectTab);
    };

    const filterProjects = Project_Data.filter((project) => 
        project.tag.includes(tab)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
    <section className='container'>
        <h2 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2 sm:mt-0 mt-10'>
            My Projects
        </h2>

        <div className="md:hidden block mt-5 text-white">
          <select
            value={tab}
            onChange={(e) => handleTabChange(e.target.value)}
            className="block w-full mt-2 px-4 py-2 text-white bg-[#121212] border border-slate-200 rounded-md"
          >
            {project.map((project) => (
              <option key={project.tag} value={project.tag}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden text-white md:flex flex-row justify-center items-center gap-5 uppercase py-5">
            {project.map((project, index) => (
                <ProjectTag 
                    key= {index}
                    onClick= {handleTabChange}
                    tag= {project.tag}
                    name= {project.name}
                    isSelected= {tab == project.tag}                
                />
            ))}
        </div>  
        
        <div
            className='md:primary-bd md:border-4 rounded-2xl mt-5 p-10 
        '>
            <ul ref={ref} className="w-full rounded-xl grid md:grid-cols-2 gap-8 md:gap-12">
                {filterProjects 
                    .sort((a, b) => b.id - a.id)
                    .map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 1, delay: index * 1.0 }}
                        >
                            <ProjectCard 
                                key={project.id}
                                project={project}
                            />
                        </motion.li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default ProjectSection