"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AchievementProps } from "../types";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList: AchievementProps[] = [
  {
    metric: "📁 Projects",
    value: "20",
    postfix: "+",
  },
  {
    metric: "🧠 Solved",
    value: "350",
    postfix: "+",
  },
  {
    metric: "🚀 Hackathons",
    value: "10",
    postfix: "+",
  },
  {
    metric: "🌐 Contributed",
    value: "5",
    postfix: "+",
  },
  {
    metric: "💻 Coding Exp",
    value: "5",
    postfix: "+",
  }
];

const AchievementsSection = () => {
  return (
    <div className="py-8 xl:gap-16 sm:py-16 xl:px-16 text-sm w-full ">
      <div className="primary-bd w-full bg-gray-900 border-4 sm:gap-0 gap-14 grid md:grid-cols-5 grid-cols-2 rounded-lg py-8 px-10 sm:px-16 sm:flex flex-col sm:flex-row items-center justify-between backdrop-filter backdrop-blur-md">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-5 justify-center my-4 sm:my-0"
            >
              <h2 className="primary md:text-4xl text-lg font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white md:text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-xs sm:text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
