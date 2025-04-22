import {
  SiAppwrite,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubpages,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiSqlite,
  SiStreamlit,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { AbtData, EduProps, ExpProps, SkillProps } from "@/types";

export const educationData: EduProps = {
  title: "education",
  description:
    "I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).",
  items: [
    {
      title: "B-Tech Computer Science",
      duration: "2021 - Present",
      institute: "GCET, Noida",
    },
    {
      title: "Intermediate",
      duration: "2019 - 21",
      institute: "Avadh Collegiate, Lucknow",
    },
  ],
};

export const aboutData: AbtData = {
  title: "About Me",
  description:
    "I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Priyanshu",
    },
    {
      fieldName: "Phone",
      fieldValue: "7071915785",
    },
    {
      fieldName: "Email",
      fieldValue: "work.priyanshu085@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "India",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Coding, Reading",
    },
    {
      fieldName: "Interests",
      fieldValue: "Data Science, AI",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

export const experienceData: ExpProps = {
  title: "experience",
  description: "I have worked as a web developer at XYZ company for 2 years.",
  items: [
    {
      id: 1,
      title: "Frontend Web Intern",
      company: "JarGoan",
      duration: "05/2024 - 06/2024",
      description:
        "Improved platform usability by 20.6%, increased user engagement by 26.53%, and led UI design initiatives.",
      linkedin: "https://www.linkedin.com/company/Jargoan",
    },
    {
      id: 2,
      title: "AI Intern",
      company: "Tublian",
      duration: "04/2024 - 06/2024",
      description:
        "Enhanced AI proficiency, crafted a chatbot increasing user interaction by 50%, and actively participated in AI sessions.",
      linkedin: "https://www.linkedin.com/company/Tublian",
    },
    {
      id: 3,
      title: "Open Source Contributor",
      company: "Tublian",
      duration: "09/2023 - 11/2023",
      description:
        "Outperformed 91% of users, engaged in AI challenges, and enhanced AI technology proficiency by 30%.",
      linkedin: "https://www.linkedin.com/company/Tublian",
    },
    {
      id: 4,
      title: "Open Source Contributor",
      company: "Hacktoberfest 2023",
      duration: "09/2023 - 10/2023",
      description:
        "Contributed 4 PRs accepted in open source projects, collaborated with global developers, improving community engagement.",
      linkedin: "https://www.linkedin.com/company/Hacktoberfest",
    },
  ],
};

export const skillsData: SkillProps = {
  title: "skills",
  description:
    "I am proficient in Python, MERN stack, and front-end technologies.",
  items: [
    {
      section: "Languages",
      techStack: [
        {
          title: "TypeScript",
          icon: SiTypescript,
          level: "Advanced",
        },
        {
          title: "Python",
          icon: FaPython,
          level: "Advanced",
        },
        {
          title: "C++",
          icon: SiCplusplus,
          level: "Intermediate",
        },
        {
          title: "JavaScript",
          icon: FaJs,
          level: "Intermediate",
        },
      ],
    },
    {
      section: "Frontend Dev",
      techStack: [
        {
          title: "Next.js",
          icon: SiNextdotjs,
          level: "Advanced",
        },
        {
          title: "Vite.js",
          icon: SiVite,
          level: "Advanced",
        },
        {
          title: "React.js",
          icon: FaReact,
          level: "Intermediate",
        },
        {
          title: "Html",
          icon: FaHtml5,
          level: "Advanced",
        },
        {
          title: "Css",
          icon: FaCss3,
          level: "Advanced",
        },
      ],
    },
    {
      section: "DevOps & VCS",
      techStack: [
        {
          title: "Github",
          icon: SiGithub,
          level: "Intermediate",
        },
        {
          title: "Git",
          icon: SiGit,
          level: "Intermediate",
        },
        {
          title: "Docker",
          icon: SiDocker,
          level: "Intermediate",
        },
        {
          title: "Kubernetes",
          icon: SiKubernetes,
          level: "Beginner",
        },
        {
          title: "GitHub Actions",
          icon: SiGithubactions,
          level: "Beginner",
        },
      ],
    },
    {
      section: "Backend Dev",
      techStack: [
        {
          title: "Node.js",
          icon: FaNodeJs,
          level: "Intermediate",
        },
        {
          title: "Express.js",
          icon: SiExpress,
          level: "Intermediate",
        },
        {
          title: "FastApi",
          icon: SiFastapi,
          level: "Intermediate",
        },
        {
          title: "Php",
          icon: SiPhp,
          level: "Intermediate",
        },
      ],
    },
    {
      section: "Database",
      techStack: [
        {
          title: "MongoDB",
          icon: SiMongodb,
          level: "Intermediate",
        },
        {
          title: "Sql",
          icon: SiSqlite,
          level: "Intermediate",
        },
        {
          title: "Appwrite",
          icon: SiAppwrite,
          level: "Intermediate",
        },
        {
          title: "PostgreSQL",
          icon: SiPostgresql,
          level: "Intermediate",
        },
      ],
    },
    {
      section: "Deployment",
      techStack: [
        {
          title: "Vercel",
          icon: SiVercel,
          level: "Intermediate",
        },
        {
          title: "Github Pages",
          icon: SiGithubpages,
          level: "Intermediate",
        },
        {
          title: "Streamlit",
          icon: SiStreamlit,
          level: "Intermediate",
        },
      ],
    },
  ],
};
