"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AchievementProps } from "../../types";
import CountUp from "react-countup";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList: AchievementProps[] = [
  {
    metric: "📁 Completed Projects",
    value: "20",
    postfix: "+",
  },
  {
    metric: "🧠 Solved Questions",
    value: "350",
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
    <section className="pt-4 pb-12 xl:pt-2 xl:pb-0">
      <div className="primary-bd container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {achievementsList.map((achievement, index) => {
              return (
              <div
                key={index}
                className="flex flex-1 items-center gap-4 justify-center xl:justify-start"
              >
                {/* <h2 className="primary md:text-4xl text-lg font-bold flex flex-row"> */}
                  {/* {achievement.prefix} */}
                  {/* <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    transitions={(index) => {
                      return {
                        duration: 0.5 + index * 0.1,
                        delay: 0.2 + index * 0.1,
                        ease: "easeInOut",
                      };
                    }}
                    locale="en-US"
                    className="text-4xl xl:text-6xl font-extrabold"
                  /> */}
                  {/* {achievement.postfix} */}
                {/* </h2> */}
                {/* <p className={``}>{achievement.metric}</p> */}
                <CountUp 
                  end={parseInt(achievement.value+achievement.postfix)}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
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
