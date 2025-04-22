"use client"
import React, { useRef } from 'react'
import { ProjectData } from '@/constants'
import { motion, useInView } from 'framer-motion'
import ProjectCard from '@/app/work/_components/ProjectCard'

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
    <section className='container'>
        <h2 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2 sm:mt-0 mt-10'>
            My Projects
        </h2>
        
        <div
            className='md:primary-bd md:border-4 rounded-2xl mt-5 p-10 
        '>
            <ul ref={ref} className="w-full rounded-xl grid md:grid-cols-2 gap-8 md:gap-12">
                {ProjectData 
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