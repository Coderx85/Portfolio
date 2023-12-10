"use client"
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import { Project_Data } from '../../../constants/contants'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

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
    <section className=''>
        <h2 className='text-center text-5xl font-bold '>
            <a className="font-serif text-white my-4 md:mb-12
            hover:text-gray-900 "
            id='projects'>
                My Projects
            </a>
        </h2>
        <div 
        className="text-white flex flex-row justify-center items-center gap-5 uppercase py-5
            
        ">
            <ProjectTag 
                onClick ={handleTabChange}
                tag = "All"
                name = "All Projects"
                isSelected ={tab == "All"}                
            />

            <ProjectTag 
                onClick ={handleTabChange}
                tag = "Web"
                name = "Web Projects"
                isSelected ={tab == "Web"}                
            />

            <ProjectTag
                onClick={handleTabChange}
                tag='ML'
                name='ML Projects'
                isSelected={tab == "ML"}
            />

            {/* <button className="rounded-full border-2 border-slate-600 hover:border-white px-5 py-3 text-xl cursor-pointer">Web</button>     */}
        </div>  
        <div className='border-[#ff0000] border-4 rounded-2xl p-10 '>
            <ul ref={ref} className="w-full rounded-xl grid md:grid-cols-2 gap-8 md:gap-12">
                {filterProjects 
                    .sort((a, b) => b.id - a.id)
                    .map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
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