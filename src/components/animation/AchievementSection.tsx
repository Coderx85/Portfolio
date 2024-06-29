"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AchievementProps } from "@/types";
import CountUp from "react-countup";

const achievementsList: AchievementProps[] = [
  {
    metric: "Completed Projects",
    value: "20+",
    postfix: "+",
  },
  {
    metric: " Solved Questions",
    value: "350",
    postfix: "+",
  },
  {
    metric: "Commits",
    value: "500",
    postfix: "+",
  },
  {
    metric: "Coding Exp",
    value: "5",
    postfix: "+",
  }
];

const AchievementsSection = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-24 xl:pb-0">
      <div className="primary-bd container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {achievementsList.map((achievement, index) => {
              return (
              <div
                key={index}
                className="flex flex-1 items-center gap-4 justify-center xl:justify-start"
              >
                <CountUp 
                  end={parseInt(achievement.value+achievement.postfix)}
                  duration={5}
                  delay={2}
                className="text-4xl text-outline text-transparent xl:text-6xl font-extrabold"
                />
                <p
                  className={`text-white/80 ${achievement.metric.length > 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug`}
                >
                  {achievement.metric}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
