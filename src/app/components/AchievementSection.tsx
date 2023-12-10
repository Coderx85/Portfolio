"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AchievementProps } from "../../../types";

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
    value: "300",
    postfix: "+",
  },
  {
    metric: "🚀 Hackathons",
    value: "10",
    postfix: "+",
  },
  {
    metric: "🌐 Contributed",
    value: "2",
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
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mx-[-70px] md:w-[1300px] ">
      <div className="sm:border-[#33353F] w-full sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-[#ff0000] text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  // configs={(_: any, index: number) => {
                  //   return {
                  //     mass: 1,
                  //     friction: 100,
                  //     tensions: 140 * (index + 1),
                  //   };
                  // }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
