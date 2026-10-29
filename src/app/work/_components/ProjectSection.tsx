"use client";
import { useRef } from "react";
import { ProjectData, FeaturedOrder } from "@/constants";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Heading from "@/components/Heading";
import { FaFolderOpen } from "react-icons/fa";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Curated strongest-first order; never sort ProjectData in place.
  const orderedProjects = FeaturedOrder.map((id) =>
    ProjectData.find((project) => project.id === id),
  ).filter((project): project is (typeof ProjectData)[number] =>
    Boolean(project),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="px-4 md:px-10 xl:px-24 mt-5 pb-16">
      <div className="flex gap-3 justify-between mt-8">
        <div className="flex gap-3 flex-col text-secondary">
          <Heading
            type="section"
            title="Projects"
            icon={FaFolderOpen}
            description={
              "Seven builds across full-stack apps, storage and prompt platforms — Next.js, TypeScript, and PostgreSQL end to end."
            }
          />
        </div>
        <div className="justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-3 items-center"
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 h-10 px-4 py-2 rounded-full bg-white/95 text-[#0f172a]
                border border-white/10 transition-all duration-300
                hover:bg-white hover:border-secondary/40 hover:-translate-y-0.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a8385]"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mt-5">
        <ul ref={ref} className="w-full grid md:grid-cols-2 gap-8 md:gap-10">
          {orderedProjects.map((project, index) => (
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
