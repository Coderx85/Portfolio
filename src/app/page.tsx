"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Social from "@/components/Social";
// import ProfilePicPage from "@/app/_components/ProfilePic";
import Link from "next/link";
// import { FlipWords } from "@/components/animation/Flipword";
import { motion } from "framer-motion";
import ScrambleText from "@/components/animation/ScrambleText";
// import AchievementsSection from "@/components/animation/AchievementSection";
import { config } from "@/lib/config";
import { useRouter } from "next/navigation";
// import RotatingText from "@/components/RotatingText";

const HeroSection = () => {
  const { username, description, name } = config;
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
    "Open Source Contributor",
    "AI Engineer",
  ];

  useEffect(() => {
    window.document.title = `${name} | Portfolio`;
  }, [name]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
    >
      <div className="px-6 sm:px-12 lg:px-20 pt-10 pb-6 mx-auto h-full">
        <div className="flex xl:flex-row flex-col items-center sm:px-5 mt-32 justify-between gap-8 xl:gap-16">
          {/* Text Section */}
          <div className="text-left order-2 xl:order-0 py-0 h-full min-h-[400px] flex flex-col gap-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em]
                  border border-gray-100/30 bg-gray-100/5 text-gray-100"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.6 }}
              className="text-white text-4xl sm:text-5xl py-2 font-bold leading-[1.1]"
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
              className="flex w-full mt-5 xl:w-fit gap-4 justify-between items-center"
            >
              <Link
                href="/Resume.pdf"
                type="button"
                download="Resume/Priyanshu.pdf"
                target="_blank"
                aria-label="Download Resume"
                className="uppercase inline-flex items-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 justify-center border-2 py-3 mx-auto w-full gap-2 text-white border-accent/50 hover:bg-accent hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-400 ease-out group"
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
          </div>

          {/* Profile Picture Section */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
            className="order-1 xl:order-none mb-8 xl:mb-0 flex flex-col items-center gap-6"
          >
            {/* <ProfilePicPage /> */}
          {/* <Social /> */}
          {/* </motion.div> */}
        </div>
      </div>

      {/* Achievement Stats Section */}
      {/* <AchievementsSection /> */}
    </motion.section>
  );
};

export default HeroSection;
