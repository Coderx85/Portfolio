import { SiAppwrite, SiMongodb, SiNextdotjs, SiPostgresql, SiPrisma, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { ProjectProps } from "@/app/work/types";
import { BsCloudDrizzle } from "react-icons/bs";
import { FiCloudDrizzle } from "react-icons/fi";

// Project Data
export const ProjectData: ProjectProps[] = [
  {
    id: 15,
    title: "PromptHub",
    description:
      '"PromptHub" is a web platform designed for sharing prompts. It provides a space for users to post and explore various prompts that can be used for creative writing, brainstorming, or any context that requires a starting point.',
    imgUrl: "/images/projects/3.png",
    gitUrl: "",
    previewUrl: "https://prompthub-085.vercel.app",
    techStack: {
      "NextJs": SiNextdotjs,
      "TailwindCSS": SiTailwindcss,
      "MongoDB": SiMongodb,
      "Vercel": SiVercel,
    },
    challengesFaced: [
      {
        title: "Designing a user-friendly interface",
        solution:
          "Conducted user research to understand needs and iterated on designs based on feedback.",
      },
      {
        title: "Ensuring prompt quality and relevance",
        solution:
          "Implemented a community moderation system where users can upvote or downvote prompts.",
      }
    ],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
  },
  {
    id: 19,
    title: "Bux",
    description:
      "A storage management system. It is designed to help manage and organize storage units efficiently.",
    imgUrl: "/images/projects/19.png",
    gitUrl: "https://github.com/coderx85/bux.git",
    previewUrl: "https://bux-storage.vercel.app/",
    techStack: {
      "Next.js": SiNextdotjs,
      "TailwindCSS": SiTailwindcss,
      "TypeScript": SiTypescript,
      "PostgreSQL": SiPostgresql,
      "Drizzle ORM": BsCloudDrizzle,
      "Vercel": SiVercel,
      "Appwrite": SiAppwrite
    },
    challengesFaced: [
      {
        title: "Designing a user-friendly interface",
        solution:
          "Conducted user research to understand needs and iterated on designs based on feedback.",
      },
      {
        title: "Ensuring prompt quality and relevance",
        solution:
          "Implemented a community moderation system where users can upvote or downvote prompts.",
      }
    ],
    lessonsLearned: [],
  },
  {
    id: 20,
    title: "Fiverplus",
    description: "",
    imgUrl: "",
    gitUrl: "fiverplus",
    previewUrl: "",
    techStack: {
      "Next.js": SiNextdotjs,
      "TailwindCSS": SiTailwindcss,
      "TypeScript": SiTypescript,
      "PostgreSQL": SiPostgresql,
      "Drizzle ORM": BsCloudDrizzle,
      "Vercel": SiVercel,
    },
    challengesFaced: [
      {
        title: "Designing a user-friendly interface",
        solution:
          "Conducted user research to understand needs and iterated on designs based on feedback.",
      },
      {
        title: "Ensuring prompt quality and relevance",
        solution:
          "Implemented a community moderation system where users can upvote or downvote prompts.",
      }
    ],
    lessonsLearned: [],
  },
  {
    id: 21,
    title: "SensAI",
    description:
      "SensAI is a web application designed to help users generate cover letters, manage their profiles, and prepare for interviews. The application leverages various modern web technologies and libraries to provide a seamless user experience.",
    imgUrl: "/images/projects/21.png",
    gitUrl: "https://github.com/Coderx85sensai.git",
    previewUrl: "https://sensai-eta.vercel.app/",
    techStack: {
      "Next.js": SiNextdotjs,
      "TailwindCSS": SiTailwindcss,
      "PostgreSQL": SiPostgresql,
      "TypeScript": SiTypescript,
      "Drizzle": BsCloudDrizzle,
      "Vercel": SiVercel,
      "Prisma": SiPrisma
    },
    challengesFaced: [
      {
        title: "Designing a user-friendly interface",
        solution:
          "Conducted user research to understand needs and iterated on designs based on feedback.",
      },
      {
        title: "Ensuring prompt quality and relevance",
        solution:
          "Implemented a community moderation system where users can upvote or downvote prompts.",
      }
    ],
    lessonsLearned: [],
  },
  {
    id: 22,
    title: "DevnTalk",
    description:
      "DevnTalk is a developer-centric collaboration platform that integrates real-time communication, live streaming, and structured meetings. It allows users to create or join workspaces, invite members. Designed for remote teams. DevnTalk enhances productivity by providing a seamless environment for discussions, and project tracking.",
    imgUrl: "/images/projects/22.png",
    gitUrl: "https://github.com/coderx85/DevTalk.git",
    previewUrl: "https://devntalk.vercel.app/",
    techStack: {
      "Next.js": SiNextdotjs,
      "TailwindCSS": SiTailwindcss,
      "TypeScript": SiTypescript,
      "PostgreSQL": SiPostgresql,
      "Drizzle": FiCloudDrizzle,
      
    },
    challengesFaced: [
      {
        title: "Designing a user-friendly interface",
        solution:
          "Conducted user research to understand needs and iterated on designs based on feedback.",
      },
      {
        title: "Ensuring prompt quality and relevance",
        solution:
          "Implemented a community moderation system where users can upvote or downvote prompts.",
      }
    ],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
  },  
];
