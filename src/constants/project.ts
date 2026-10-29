import { TProject } from "@/types";

// Project Data

/**
 * Curated strongest-first display order for the Projects grid.
 * Strongest = live preview URL + a real GitHub repo + a serious backend stack
 * (PostgreSQL/Drizzle/Prisma/Appwrite). Projects with a live demo but no repo
 * come next; projects with no live preview and no public repo go last.
 */
export const FeaturedOrder: number[] = [
  2, // Bux — live preview, public repo, PostgreSQL + Drizzle ORM + Appwrite
  4, // SensAI — live preview, public repo, PostgreSQL + Drizzle + Prisma
  5, // Droxy — live preview, public repo, PostgreSQL + Drizzle ORM + Clerk
  8, // Collaro — live preview, public repo, PostgreSQL + Drizzle
  7, // Neotion — live preview, public repo, Convex + Clerk
  6, // Byte — live preview, public repo, tRPC + Inngest
  1, // PromptHub — live preview, but no public repo (MongoDB stack)
];

export const ProjectData: TProject[] = [
  {
    id: 1,
    title: "PromptHub",
    description:
      '"PromptHub" is a web platform designed for sharing prompts. It provides a space for users to post and explore various prompts that can be used for creative writing, brainstorming, or any context that requires a starting point.',
    imgUrl: "/images/projects/prompthub.png",
    gitUrl: "",
    previewUrl: "https://prompthub-085.vercel.app",
    techStack: {
      "Next.js": "SiNextdotjs",
      AuthJS: "FaShieldAlt",
      TailwindCSS: "SiTailwindcss",
      MongoDB: "SiMongodb",
      Vercel: "SiVercel",
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
      },
    ],
    lessonsLearned: [],
  },
  {
    id: 2,
    title: "Bux",
    description:
      "A storage management system. It is designed to help manage and organize storage units efficiently.",
    imgUrl: "/images/projects/19.png",
    gitUrl: "https://github.com/coderx85/bux.git",
    previewUrl: "https://bux-storage.vercel.app/",
    techStack: {
      "Next.js": "SiNextdotjs",
      TailwindCSS: "SiTailwindcss",
      TypeScript: "SiTypescript",
      PostgreSQL: "SiPostgresql",
      "Drizzle ORM": "BsCloudDrizzle",
      Vercel: "SiVercel",
      Appwrite: "SiAppwrite",
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
      },
    ],
    lessonsLearned: [],
  },
  {
    id: 3,
    title: "Fiverplus",
    description:
      "A full-stack web platform built with Next.js, TypeScript, PostgreSQL, and Drizzle ORM.",
    imgUrl: "",
    gitUrl: "",
    previewUrl: "",
    techStack: {
      "Next.js": "SiNextdotjs",
      TailwindCSS: "SiTailwindcss",
      TypeScript: "SiTypescript",
      PostgreSQL: "SiPostgresql",
      "Drizzle ORM": "BsCloudDrizzle",
      Vercel: "SiVercel",
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
      },
    ],
    lessonsLearned: [],
  },
  {
    id: 4,
    title: "SensAI",
    description:
      "SensAI is a web application designed to help users generate cover letters, manage their profiles, and prepare for interviews. The application leverages various modern web technologies and libraries to provide a seamless user experience.",
    imgUrl: "/images/projects/sensai.png",
    gitUrl: "https://github.com/Coderx85/sensai.git",
    previewUrl: "https://sensai-eta.vercel.app/",
    techStack: {
      "Next.js": "SiNextdotjs",
      TailwindCSS: "SiTailwindcss",
      PostgreSQL: "SiPostgresql",
      TypeScript: "SiTypescript",
      Drizzle: "BsCloudDrizzle",
      Vercel: "SiVercel",
      Prisma: "SiPrisma",
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
      },
    ],
    lessonsLearned: [],
  },
  {
    id: 8,
    title: "Collaro",
    description:
      "Collaro is a developer-centric collaboration platform that integrates real-time communication, live streaming, and structured meetings. It allows users to create or join workspaces, invite members. Designed for remote teams. Collaro enhances productivity by providing a seamless environment for discussions, and project tracking.",
    imgUrl: "/images/projects/collaro.png",
    gitUrl: "https://github.com/coderx85/collaro.git",
    previewUrl: "https://devntalk.vercel.app/",
    techStack: {
      "Next.js": "SiNextdotjs",
      TailwindCSS: "SiTailwindcss",
      TypeScript: "SiTypescript",
      PostgreSQL: "SiPostgresql",
      Drizzle: "FiCloudDrizzle",
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
      },
    ],
    lessonsLearned: [],
  },
  {
    id: 5,
    title: "Droxy",
    description:
      "Droxy is a web application designed to help users manage their personal finances. It provides features for tracking expenses, creating budgets, and generating financial reports.",
    imgUrl: "/images/projects/droxy.png",
    gitUrl: "https://github.com/coderx85/droxy.git",
    previewUrl: "https://droxy.vercel.app/",
    techStack: {
      "Next.js": "SiNextdotjs",
      React: "SiReact",
      Clerk: "SiClerk",
      TypeScript: "SiTypescript",
      TailwindCSS: "SiTailwindcss",
      PostgreSQL: "SiPostgresql",
      "Drizzle ORM": "FiCloudDrizzle",
      Vercel: "SiVercel",
      ImageKit: "BsFileImage",
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
      },
    ],
    lessonsLearned: [],
  },
  {
    id: 7,
    title: "Neotion",
    description:
      "Neotion is a modern, open-source alternative to Notion, designed for users who need a fast, secure, and highly extensible workspace. It provides real-time collaborative editing, markdown support, and a clean, intuitive user interface, all powered by a robust tech stack including Next.js, Convex, and Clerk.",
    imgUrl: "/images/projects/24.png",
    gitUrl: "https://github.com/coderx85/neotion.git",
    previewUrl: "https://neotion.vercel.app/",
    techStack: {
      "Next.js": "SiNextdotjs",
      React: "SiReact",
      Clerk: "SiClerk",
      TypeScript: "SiTypescript",
      TailwindCSS: "SiTailwindcss",
      Convex: "FiCloudDrizzle",
      Vercel: "SiVercel",
    },
    challengesFaced: [
      {
        title:
          "How do you handle real-time collaboration conflicts in the editor",
        solution:
          "Convex provides real-time sync, serverless scaling, and TypeScript-first development experience, eliminating complex backend setup while ensuring instant collaboration features.",
      },
    ],
    lessonsLearned: [],
  },
  {
    id: 6,
    title: "Byte",
    description: "A lovable clone built with Next.js, tRPC, and Inngest.",
    imgUrl: "/images/projects/byte.png",
    gitUrl: "https://github.com/coderx85/byte.git",
    previewUrl: "https://byte-delta.vercel.app/",
    techStack: {
      "Next.js": "SiNextdotjs",
      TypeScript: "SiTypescript",
      TailwindCSS: "SiTailwindcss",
      Vercel: "SiVercel",
      tRPC: "SiTrpc",
      Inngest: "SiInngest",
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
      },
    ],
    lessonsLearned: [],
  },
];
