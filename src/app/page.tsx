"use client";
import React, { useEffect } from "react";
import AchievementsSection from "@/components/animation/AchievementSection";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import ProfilePicPage from "@/app/_components/ProfilePic";
import Link from "next/link";
import { FlipWords } from "@/components/animation/Flipword";
import { motion } from "framer-motion";
import GitHubStats from "@/app/_components/GitHubStats";
import { config } from "@/lib/config";
import { useRouter } from "next/navigation";
const HeroSection = () => {
  const { username, description, name } = config;
	const router = useRouter()
  useEffect(() => {
    window.document.title = `${name} | Portfolio`;
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[calc(100vh-100px)] bg-gradient-to-b from-zic-900 via-slate-800/25 to-white/5"
    >
      <div className="px-20 pt-10 mx-auto h-full" >
        <div className="flex xl:flex-row flex-col items-center sm:px-5 justify-between">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg my-4 xl:text-left">
              Software Developer | Web Developer | Open Source Contributor
            </span>
            <h1 className="text-white text-4xl mb-4 sm:text-5xl lg:text-4xl text-extrabold">
              {"I'm "}
              <FlipWords
                words={[`${name}`, `@${username}`]}
                duration={2000}
                className="text-accent text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal"
              />
            </h1>
            <p className="max-w-[500px] pt-2 my-4 md:mx-0 mx-auto text-white/80">
              {description}
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Link
                href="/Resume.pdf"
                download="Resume/Priyanshu.pdf"
                target="_blank"
                aria-label="Downlod Resume"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase items-center gap-2 text-white border-accent rounded-full hover:bg-accent transition-all duration-300 ease-in-out "
                >
                  Checkout My CV <FiDownload className="text-xl text-accent" />
                </Button>
              </Link>
								<Button
									variant="outline"
									size="lg"
									onClick={() => router.push('/contact/#contact')}
									className="uppercase items-center gap-2 text-white bg-accent border-accent rounded-full hover:bg-transparent transition-all duration-300 ease-in-out "
								>
									Hire Me
								</Button>
            </div>
            <GitHubStats />
          </div>
          {/* Image Scetion */}
          <div className="order-1 xl:order-none mb-8 gap-2 xl:mb-0 items-center">
            <ProfilePicPage />
            <Social />
          </div>
        </div>
      </div>
      {/* Achievememt Section */}
      <AchievementsSection />
    </motion.section>
  );
};

export default HeroSection;
