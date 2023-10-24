"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { Project_Data } from '../../../constants/contants'
import ProjectTag from './ProjectTag'

const ProjectSection = () => {
    const [tab ,setTab] = useState("All");

    const handleTabChange = (selectTab: string) => {
        setTab(selectTab);
    };

    const filterProjects = Project_Data.filter((project) => 
        project.tag.includes(tab)
    )

    return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick ={handleTabChange}
                tag = "All"
                isSelected ={tab == "All"}                
            />

            <ProjectTag 
                onClick ={handleTabChange}
                tag = "Web"
                isSelected ={tab == "Web"}                
            />

            <ProjectTag
                onClick={handleTabChange}
                tag='ML'
                isSelected={ tab == "ML"}
            />

            {/* <button className="rounded-full border-2 border-slate-600 hover:border-white px-5 py-3 text-xl cursor-pointer">Web</button>     */}
        </div>  
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filterProjects.map((project) => (
            <ProjectCard 
                key={project.id}
                project={project}
            />
        ))}
        </div>
    </section>
  )
}

export default ProjectSection