"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { config } from "@/lib/config";

const ProfilePicPage = () => {
  const { username } = config;
  return (
    <div className="w-full h-full relative m-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeInOut" },
        }}
      >
        <div className="relative">
          <Avatar className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
            <AvatarImage
              src={`https://avatars.githubusercontent.com/${username}`}
              alt="Profile Picture"
              className="object-cover"
            />
            <AvatarFallback>
              <Image
                src="/images/hero.png"
                alt="Profile Picture"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </AvatarFallback>
          </Avatar>

          <motion.svg
            className="absolute top-0 left-0 w-[300px] h-[300px] xl:w-[410px] xl:h-[410px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="https://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#166466"
              strokeWidth="4"
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePicPage;
