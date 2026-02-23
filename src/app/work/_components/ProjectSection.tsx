"use client";
import { useRef } from "react";
import { ProjectData } from "@/constants";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Heading from "@/components/Heading";
import { FaFolderOpen } from "react-icons/fa";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="px-24 mt-5 pb-16">
      <div className="flex gap-3 justify-between mt-8">
        <div className="flex gap-3 flex-col text-secondary">
          <Heading
            type="section"
            title="Projects"
            icon={FaFolderOpen}
            description={"Showcasing my latest work and creative solutions"}
          />
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
