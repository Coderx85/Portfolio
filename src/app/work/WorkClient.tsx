"use client";
import { useRef } from "react";
import { ProjectData } from "@/constants";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./_components/ProjectCard";
import { SiBrandfolder } from "react-icons/si";
import Link from "next/link";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="container mt-5 pb-16">
      <div className="flex gap-3 justify-between">
        <div className="flex gap-3 flex-col text-accent">
          <motion.h3
            className="flex gap-3 text-accent text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          >
            <SiBrandfolder className="fill-accent" />
            Projects
          </motion.h3>
          <motion.h2
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          >
            Explore my work and projects
          </motion.h2>
        </div>
        <div className="justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
            className="flex gap-3 items-center"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 border-b-2 border-white/25 hover:bg-white/15 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="font-bold gradient-text text-5xl uppercase sm:mt-0 mt-10 mb-2">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent rounded-full mb-8" />
      </motion.div> */}

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
