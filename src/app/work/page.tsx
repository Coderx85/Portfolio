"use client";
import React, { useEffect, useRef } from "react";
import { ProjectData } from "@/constants";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./_components/ProjectCard";

const ProjectSection = () => {
  useEffect(() => {
    document.title = "Projects | Portfolio";
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="container mt-5 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="font-bold gradient-text text-5xl uppercase sm:mt-0 mt-10 mb-2">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded-full mb-8" />
      </motion.div>

      <div className="mt-5">
        <ul ref={ref} className="w-full grid md:grid-cols-2 gap-8 md:gap-10">
          {ProjectData.sort((a, b) => b.id - a.id).map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ProjectCard key={project.id} project={project} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
