"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

interface Project{
    id: number,
    title: string,
    description: string,
    image: string,
    tag: string[],
    gitUrl: string,
    previewUrl: string,
}

const Project_Data: Project[] = [
    {
        id: 1,
        title: "Glitch Xpert",
        description: "lorem20",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Threads+",
        description: "lorem20",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Glitch Xpert",
        description: "lorem20",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Glitch Xpert",
        description: "lorem20",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Glitch Xpert",
        description: "lorem20",
        image: "/images/projects/5.png",
        tag: ["Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Glitch Xpert",
        description: "lorem20",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    }
]

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

            {/* <button className="rounded-full border-2 border-slate-600 hover:border-white px-5 py-3 text-xl cursor-pointer">Web</button>     */}
        </div>  
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filterProjects.map((project) => (
            <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                // tag={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        ))}
        </div>
    </section>
  )
}

export default ProjectSection