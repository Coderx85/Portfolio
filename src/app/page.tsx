"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSection";
import ScrambleText from "@/components/animation/ScrambleText";
import Link from "next/link";
import { motion } from "framer-motion";
import { config } from "@/lib/config";
import { useRouter } from "next/navigation";
import { categoryColors, tech } from "@/constants";
import { convertLevelIntoNumber } from "@/lib/convertLevel";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { Separator } from "@radix-ui/react-select";
import { FaCode } from "react-icons/fa6";
import { HiForward } from "react-icons/hi2";

const HeroSection = () => {
  const { description, name } = config;
  const router = useRouter();

  const text = [
    "Full Stack Developer",
    "Problem Solver",
    "Software Engineer",
    "NodeJS Developer",
    "Software Architect",
    "Web Developer",
    "Pragmatic Engineer",
    "NextJS Developer",
    "AI Engineer",
  ] as const;

  useEffect(() => {
    window.document.title = `${name} | Portfolio`;
  }, [name]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        className="xs:px-7 px-20"
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
          className="mx-auto mt-32 pb-12 text-left order-2 xl:order-0 py-0 h-full min-h-[400px] flex flex-col gap-3"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
          >
            <span className="inline-flex gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-gray-100/30 bg-gray-100/5 text-gray-100">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.6 }}
            className="text-white text-4xl xl:text-5xl py-2 font-bold leading-[1.4]"
          >
            <p className="py-1 ">{"I'm a "}</p>
            <ScrambleText
              text={text}
              className="text-accent min-h-[50px]"
              speed={0.4}
              playOnMount
              replayOnHover
              cycleDuration={3000}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.5 }}
            className="max-w-[520px] md:mx-0 mx-auto text-white/60 text-base leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.5 }}
            className="flex w-full mt-5 xl:w-fit gap-4 justify-between items-center pb-32"
          >
            <Link
              href="/Resume.pdf"
              type="button"
              download="Resume/Priyanshu.pdf"
              target="_blank"
              aria-label="Download Resume"
              className="uppercase inline-flex px-5 items-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 justify-center border-2 py-3 mx-auto w-full gap-2 text-white border-accent/50 hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-400 ease-out group"
            >
              {/* <Button variant="outline" size="lg"> */}
              Checkout My CV{" "}
              <FiDownload className="text-sm text-accent group-hover:text-white transition-colors duration-300" />
              {/* </Button> */}
            </Link>

            <Button
              variant="outline"
              size="lg"
              aria-label="Hire Me"
              onClick={() => router.push("/contact/#contact")}
              className="uppercase w-full items-center gap-2 text-white bg-accent border-accent rounded-xl hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25
                  transition-all duration-400 ease-out group"
            >
              Hire Me
              <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        <ServiceSection page="Home" />

        <Separator className="bg-gray-500 size-0.5 min-w-screen" />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
          }}
          className="flex flex-col gap-5 mt-14 mb-36"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            {/* Add a glimpse of my skills set */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="text-2xl flex gap-3 font-bold text-white"
            >
              <FaCode className="fill-accent" />
              Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="text-white/60 text-base leading-relaxed"
            >
              Here's a glimpse of my skills set
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="flex flex-wrap grid-cols-2 gap-6"
          >
            {tech.slice(0, 6).map((skill, index) => {
              const colors = categoryColors[skill.title];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + index * 0.15,
                    duration: 0.5,
                  }}
                  className={`${colors.bg} ${colors.border} rounded-2xl p-5 flex flex-col gap-4`}
                >
                  <motion.h4
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.15,
                      duration: 0.4,
                    }}
                    className={`flex items-center gap-2 text-lg font-semibold ${colors.text} tracking-wide`}
                  >
                    <skill.icon className={`${colors.fill}`} />
                    {skill.title}
                  </motion.h4>
                  <div className="flex gap-4 flex-wrap md:justify-start justify-center">
                    {skill.techStack
                      // Filter out Beginner level tech stack
                      .filter((techItem) => techItem.level !== "Beginner")
                      .slice(0, 3)
                      .map((techItem, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.35 + index * 0.15 + techIndex * 0.08,
                            duration: 0.4,
                          }}
                          className="w-[80px] transition-colors border-white/10 hover:border-white/30 duration-300 rounded-xl p-3 flex flex-col gap-2 items-center text-center"
                          style={{ borderColor: `${techItem.color}20` }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `${techItem.color}60`;
                            e.currentTarget.style.backgroundColor = `${techItem.color}80`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = `${techItem.color}80`;
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <span
                            className="text-3xl"
                            style={{ color: techItem.color }}
                          >
                            <techItem.icon />
                          </span>
                          <p className="text-xs font-medium uppercase">
                            {techItem.title}
                          </p>
                          <div className="w-full">
                            <Progress
                              value={convertLevelIntoNumber(techItem.level)}
                              className="bg-white/10 h-1.5 rounded-full"
                              indicatorStyle={{
                                backgroundColor: techItem.color,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.35 + index * 0.15 + 3 * 0.08,
                        duration: 0.4,
                      }}
                      onClick={() => {
                        router.push("/resume");
                      }}
                      className="w-[80px] transition-colors border-white/10 hover:border-white/30 duration-30 hover:bg-white/10 pointer rounded-xl p-3 flex flex-col gap-2 items-center text-center"
                    >
                      <HiForward className="text-3xl" />
                      <p className="text-xs font-medium uppercase">View All</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div className="flex px-5">
            <Button
              onClick={() => router.push("/resume")}
              className="text-white rounded-xl bg-transparent border-white hover:bg-white/10 border-2"
            >
              View all skills.
            </Button>
          </motion.div>
        </motion.section>
      </motion.section>
      <Footer />
    </>
  );
};

export default HeroSection;
