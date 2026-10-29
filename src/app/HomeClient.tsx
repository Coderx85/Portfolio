"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSection";
import ScrambleText from "@/components/animation/ScrambleText";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { config } from "@/lib/config";
import { useRouter } from "next/navigation";
import { categoryGlass, tech } from "@/constants";
import { convertLevelIntoNumber } from "@/lib/convertLevel";
import { levelBarColor } from "@/lib/levelBarColor";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { HiForward } from "react-icons/hi2";

const HeroSection = () => {
  const { description } = config;
  const router = useRouter();

  const ROLES = [
    "Full Stack Developer",
    "Forward Deployed Engineer",
    "Problem Solver",
    "Software Engineer",
    "NodeJS Developer",
    "Software Architect",
    "Web Developer",
    "Pragmatic Engineer",
    "NextJS Developer",
    "AI Engineer",
  ] as const;

  const WELCOME_MESSAGE = "Hi, I'm a" as const;

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 420, damping: 38, mass: 0.9 },
    },
  } as const;

  const tapFeedback = {
    scale: 0.97,
  } as const;

  const tapTransition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  } as const;

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        initial={{ opacity: 0 }}
        className="xs:px-7 px-20"
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
          className="mx-auto mt-32 pb-12 text-left order-2 xl:order-0 py-0 h-full min-h-100 flex flex-col gap-3"
        >
          <motion.div variants={heroItemVariants}>
            <span className="inline-flex gap-2 px-4 py-1.5  items-center rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-black/15 dark:border-gray-100/30 bg-black/5 dark:bg-gray-100/5 text-foreground">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="text-foreground text-4xl xl:text-5xl py-2 font-bold leading-[1.4]"
          >
            <p className="py-1 ">{WELCOME_MESSAGE}</p>
            <ScrambleText
              text={ROLES}
              className="text-accent min-h-12.5"
              speed={0.4}
              playOnMount
              replayOnHover
              cycleDuration={3000}
            />
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="max-w-130 md:mx-0 mx-auto text-muted-foreground text-base leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="flex w-full mt-5 xl:w-fit gap-4 justify-between items-center pb-32"
          >
            <motion.div
              whileTap={tapFeedback}
              transition={tapTransition}
              className="w-full"
            >
              <Link
                href="/Resume.pdf"
                type="button"
                download="Resume/Priyanshu.pdf"
                target="_blank"
                aria-label="Download Resume"
                className="uppercase inline-flex px-5 items-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 justify-center border-2 py-3 mx-auto w-full gap-2 text-foreground border-accent/50 hover:bg-accent hover:border-accent hover:text-primary hover:shadow-lg hover:shadow-accent/20 transition-all duration-400 ease-out group"
              >
                Checkout My CV{" "}
                <FiDownload className="text-sm text-accent group-hover:text-primary transition-colors duration-300" />
              </Link>
            </motion.div>

            <motion.div
              whileTap={tapFeedback}
              transition={tapTransition}
              className="w-full"
            >
              <Button
                variant="outline"
                size="lg"
                aria-label="Hire Me"
                onClick={() => router.push("/contact/#contact")}
                className="uppercase w-full items-center gap-2 text-primary bg-accent border-accent rounded-xl hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25
                  transition-all duration-400 ease-out group"
              >
                Hire Me
                <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <ServiceSection page="half" />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
          }}
          className="flex flex-col gap-5 mt-14 mb-36"
          id="skills"
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
              className="text-2xl flex gap-3 font-bold text-foreground"
            >
              <FaCode className="fill-accent" />
              Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="text-muted-foreground text-base leading-relaxed"
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
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + index * 0.06,
                    duration: 0.5,
                  }}
                  className={`${categoryGlass.bg} ${categoryGlass.border} rounded-2xl p-5 flex flex-col gap-4`}
                >
                  <motion.h4
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.06,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-2 text-lg font-semibold text-foreground tracking-wide"
                  >
                    <skill.icon className="text-muted-foreground" />
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
                            delay: 0.12 + index * 0.06 + techIndex * 0.04,
                            duration: 0.4,
                          }}
                          className="w-20 transition-colors border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 duration-300 rounded-xl p-3 flex flex-col gap-2 items-center text-center"
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
                              className="bg-black/10 dark:bg-white/10 h-1.5 rounded-full"
                              aria-label={`${techItem.title}: ${techItem.level}`}
                              indicatorStyle={{
                                backgroundColor: levelBarColor(techItem.level),
                              }}
                            />
                            <p className="mt-1 text-[10px] md:text-[11px] text-muted-foreground tracking-wide uppercase text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                              {techItem.level}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.12 + index * 0.06 + 3 * 0.04,
                        duration: 0.4,
                      }}
                      whileTap={{ ...tapFeedback, transition: tapTransition }}
                      onClick={() => {
                        router.push("/resume");
                      }}
                      className="w-20 transition-colors border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 duration-30 hover:bg-black/10 dark:hover:bg-white/10 pointer rounded-xl p-3 flex flex-col gap-2 items-center text-center"
                    >
                      <HiForward className="text-3xl" />
                      <p className="text-xs font-medium uppercase">View All</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            whileTap={{ ...tapFeedback, transition: tapTransition }}
            className="flex px-5"
          >
            <Button
              onClick={() => router.push("/resume#skills")}
              className="text-foreground rounded-xl bg-transparent border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10 border-2"
            >
              View all skills.
            </Button>
          </motion.div>
        </motion.section>
      </motion.section>
      <Footer />
    </MotionConfig>
  );
};

export default HeroSection;
