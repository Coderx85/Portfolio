import {
  SiAmazonec2,
  SiAppwrite,
  SiArgo,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubpages,
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPrometheus,
  SiPulumi,
  SiSqlite,
  SiStreamlit,
  SiTerraform,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
} from "react-icons/si";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVectorSquare,
} from "react-icons/fa";
import {
  AbtData,
  EduProps,
  IExperience,
  SkillProps,
  TCategory,
  TTech,
  TTechStack,
} from "@/types";
import {
  FastifyOriginalIcon,
  NextjsOriginalIcon,
  PrometheusOriginalIcon,
  TypescriptOriginalIcon,
  TailwindcssOriginalIcon,
  PostgresqlOriginalIcon,
  MongodbOriginalIcon,
  DockerOriginalIcon,
  KubernetesOriginalIcon,
  GitOriginalIcon,
  GrafanaOriginalIcon,
  NodejsOriginalIcon,
  JavascriptOriginalIcon,
  BashOriginalIcon,
  PythonOriginalIcon,
  AppwriteOriginalIcon,
  VercelOriginalIcon,
  NestjsOriginalIcon,
  ReactOriginalIcon,
  Html5OriginalIcon,
  FastapiOriginalIcon,
  GoOriginalIcon,
  ExpressOriginalIcon,
  DenojsOriginalIcon,
  JenkinsOriginalIcon,
  WebpackOriginalIcon,
  ViteOriginalIcon,
  RabbitmqOriginalIcon,
  RedisOriginalIcon,
  AmazonwebservicesOriginalWordmarkIcon,
  NginxOriginalIcon,
  ApacheOriginalIcon,
  UbuntuOriginalIcon,
  Neo4jOriginalIcon,
  VuejsOriginalIcon,
  JestPlainIcon,
  HelmOriginalIcon,
} from "@devicon/react";
import React from "react";

export const educationData: EduProps = {
  title: "education",
  description:
    "I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).",
  items: [
    {
      title: "B-Tech Computer Science",
      duration: "2021 - 2025",
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

export const experienceData: IExperience = {
  title: "experience",
  description: "I have worked as a web developer at XYZ company for 2 years.",
  items: [
    {
      id: 0,
      title: "Full Stack Web Intern",
      company: "Websmiths",
      startDate: new Date("2025-09-01"),
      endDate: new Date("2025-11-01"),
      companyUrl: "https://www.websmiths.io/",
      description:
        "Developed responsive web applications, collaborated with designers, and optimized performance, enhancing user experience.",
      linkedin: "https://www.linkedin.com/company/websmiths",
      isCurrent: false,
      techStack: [
        {
          title: "Next.js",
          icon: SiNextdotjs,
          level: "Advanced",
        },
        {
          title: "Fastify",
          icon: SiFastify,
          level: "Advanced",
        },
        {
          title: "Vitest",
          icon: SiVitest,
          level: "Advanced",
        },
        {
          title: "Postgres",
          icon: SiPostgresql,
          level: "Advanced",
        },
        {
          title: "Docker",
          icon: SiDocker,
          level: "Advanced",
        },
        {
          title: "AWS",
          icon: SiAmazonec2,
          level: "Advanced",
        },
      ],
    },
    {
      id: 1,
      title: "Frontend Web Intern",
      company: "JarGoan",
      startDate: new Date("2024-05-01"),
      endDate: new Date("2024-06-01"),
      companyUrl: "https://www.jargoan.com/",
      description:
        "Improved platform usability by 20.6%, increased user engagement by 26.53%, and led UI design initiatives.",
      linkedin: "https://www.linkedin.com/company/Jargoan",
    },
    {
      id: 2,
      title: "AI Intern",
      company: "Tublian",
      startDate: new Date("2024-04-01"),
      endDate: new Date("2024-06-01"),
      description:
        "Enhanced AI proficiency, crafted a chatbot increasing user interaction by 50%, and actively participated in AI sessions.",
      linkedin: "https://www.linkedin.com/company/Tublian",
    },
    {
      id: 3,
      title: "Contributor",
      company: "Winter of Code Social 2025",
      startDate: new Date("2025-11-01"),
      endDate: new Date("2026-01-31"),
      description:
        "Contributed to open source projects, collaborated with other developers, and learned about version control and software development best practices.",
      linkedin: "https://www.linkedin.com/company/websmiths",
      isCurrent: false,
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
          title: "JavaScript",
          icon: FaJs,
          level: "Intermediate",
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
      section: "GitOps",
      techStack: [
        {
          title: "GitOps",
          icon: SiArgo,
          level: "Intermediate",
        },
        // {
        //   title: "Terrafrom",
        //   icon: SiTerraform,
        //   level: "Beginner",
        // },
        {
          title: "Pulumi",
          icon: SiPulumi,
          level: "Beginner",
        },
        {
          title: "Helm",
          icon: SiHelm,
          level: "Beginner",
        },
      ],
    },
    {
      section: "DevOps & VCS",
      techStack: [
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
      ],
    },
    {
      section: "Obs & Monitoring",
      techStack: [
        {
          title: "Grafana",
          icon: SiGrafana,
          level: "Beginner",
        },
        {
          title: "Prometheus",
          icon: SiPrometheus,
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
  ],
};

// ─── Color scheme for tech category cards ───
export const categoryColors: Record<
  TCategory,
  { text: string; border: string; bg: string }
> = {
  Frontend: {
    text: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/5",
  },
  Backend: {
    text: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
  },
  Languages: {
    text: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
  },
  Database: {
    text: "text-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/5",
  },
  "DevOps & Cloud": {
    text: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/5",
  },
  Monitoring: {
    text: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
  },
  Infrastructure: {
    text: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/5",
  },
  Frameworks: {
    text: "text-fuchsia-400",
    border: "border-fuchsia-400/30",
    bg: "bg-fuchsia-400/5",
  },
};

export const tech: readonly TTechStack[] = [
  {
    title: "Frontend",
    techStack: [
      {
        title: "React",
        icon: ReactOriginalIcon,
        level: "Advanced",
        color: "#61DAFB",
      },
      {
        title: "HTML",
        icon: Html5OriginalIcon,
        level: "Advanced",
        color: "#E34F26",
      },
      {
        title: "Taiwind",
        icon: TailwindcssOriginalIcon,
        level: "Advanced",
        color: "#06B6D4",
      },
      {
        title: "Vue JS",
        icon: VuejsOriginalIcon,
        level: "Advanced",
        color: "#4FC08D",
      },
    ],
  },
  {
    title: "Backend",
    techStack: [
      {
        title: "Node JS",
        icon: NodejsOriginalIcon,
        level: "Advanced",
        color: "#339933",
      },
      {
        title: "Go",
        icon: GoOriginalIcon,
        level: "Beginner",
        color: "#00ADD8",
      },
      {
        title: "FastAPI",
        icon: FastapiOriginalIcon,
        level: "Intermediate",
        color: "#009688",
      },
      {
        title: "Jest",
        icon: JestPlainIcon,
        level: "Advanced",
        color: "#99425B",
      },
    ],
  },
  {
    title: "Languages",
    techStack: [
      {
        title: "Javascript",
        icon: JavascriptOriginalIcon,
        level: "Intermediate",
        color: "#F7DF1E",
      },
      {
        title: "Typescript",
        icon: TypescriptOriginalIcon,
        level: "Intermediate",
        color: "#3178C6",
      },
      {
        title: "Shell",
        icon: BashOriginalIcon,
        level: "Intermediate",
        color: "#4EAA25",
      },
      {
        title: "Python",
        icon: PythonOriginalIcon,
        level: "Advanced",
        color: "#3776AB",
      },
    ],
  },
  {
    title: "Database",
    techStack: [
      {
        title: "PostgreSQL",
        icon: PostgresqlOriginalIcon,
        level: "Intermediate",
        color: "#4169E1",
      },
      {
        title: "MongoDB",
        icon: MongodbOriginalIcon,
        level: "Intermediate",
        color: "#47A248",
      },
      {
        title: "Appwrite",
        icon: AppwriteOriginalIcon,
        level: "Intermediate",
        color: "#FD366E",
      },
      {
        title: "Redis",
        icon: RedisOriginalIcon,
        level: "Intermediate",
        color: "#DC382D",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    techStack: [
      {
        title: "Docker",
        icon: DockerOriginalIcon,
        level: "Advanced",
        color: "#2496ED",
      },
      {
        title: "Kubernetes",
        icon: KubernetesOriginalIcon,
        level: "Beginner",
        color: "#326CE5",
      },
      {
        title: "Jenkins",
        icon: JenkinsOriginalIcon,
        level: "Intermediate",
        color: "#D24939",
      },
      {
        title: "AWS",
        icon: AmazonwebservicesOriginalWordmarkIcon,
        level: "Intermediate",
        color: "#FF9900",
      },
    ],
  },
  {
    title: "Infrastructure",
    techStack: [
      {
        title: "Nginx",
        icon: NginxOriginalIcon,
        level: "Advanced",
        color: "#009639",
      },
      {
        title: "Apache",
        icon: ApacheOriginalIcon,
        level: "Intermediate",
        color: "#D22128",
      },
      {
        title: "Ubuntu",
        icon: UbuntuOriginalIcon,
        level: "Intermediate",
        color: "#E95420",
      },
    ],
  },
  {
    title: "Monitoring",
    techStack: [
      {
        title: "Grafana",
        icon: GrafanaOriginalIcon,
        level: "Beginner",
        color: "#F46800",
      },
      {
        title: "Prometheus",
        icon: PrometheusOriginalIcon,
        level: "Beginner",
        color: "#E6522C",
      },
      {
        title: "Vector",
        icon: VercelOriginalIcon,
        level: "Beginner",
        color: "#FFFFFF",
      },
    ],
  },
  {
    title: "Frameworks",
    techStack: [
      {
        title: "Fastify",
        icon: FastifyOriginalIcon,
        level: "Advanced",
        color: "#FFFFFF",
      },
      {
        title: "NestJS",
        icon: NestjsOriginalIcon,
        level: "Intermediate",
        color: "#E0234E",
      },
      {
        title: "NextJS",
        icon: NextjsOriginalIcon,
        level: "Advanced",
        color: "#FFFFFF",
      },
      {
        title: "Express",
        icon: ExpressOriginalIcon,
        level: "Advanced",
        color: "#FFFFFF",
      },
      {
        title: "RabbitMQ",
        icon: RabbitmqOriginalIcon,
        level: "Advanced",
        color: "#FF6600",
      },
      {
        title: "Webpack",
        icon: WebpackOriginalIcon,
        level: "Advanced",
        color: "#8DD6F9",
      },
      {
        title: "Vite",
        icon: ViteOriginalIcon,
        level: "Advanced",
        color: "#646CFF",
      },
      {
        title: "Helm",
        icon: HelmOriginalIcon,
        level: "Advanced",
        color: "#263238",
      },
    ],
  },
];

/**
 * 
 * techStack: {
    title: string;
    icon: IconType;
    level: LEVEL;
  }[];
 * 

  const tech[] = [
    {
      title: 
    }
  ]

 */
