import type { IconType } from "react-icons/lib";
import {
  SiAppwrite,
  SiArgo,
  SiBetterauth,
  SiClaude,
  SiCloudinary,
  SiCplusplus,
  SiCypress,
  SiDatadog,
  SiDocker,
  SiFastapi,
  SiFastify,
  SiGit,
  SiGithub,
  SiGrafana,
  SiGrocy,
  SiHelm,
  SiHono,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiLanguagetool,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPrometheus,
  SiPulumi,
  SiRailway,
  SiRedis,
  SiServerless,
  SiSqlite,
  SiStreamlit,
  SiTelegram,
  SiTypescript,
  SiVitest,
  SiWhatsapp,
} from "react-icons/si";
import {
  FaCss3,
  FaDesktop,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPlay,
  FaPython,
  FaReact,
  FaTools,
} from "react-icons/fa";
import {
  AbtData,
  EduProps,
  IExperience,
  SkillProps,
  TCategory,
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
  JenkinsOriginalIcon,
  WebpackOriginalIcon,
  ViteOriginalIcon,
  RabbitmqOriginalIcon,
  RedisOriginalIcon,
  AmazonwebservicesOriginalWordmarkIcon,
  NginxOriginalIcon,
  ApacheOriginalIcon,
  UbuntuOriginalIcon,
  VuejsOriginalIcon,
  JestPlainIcon,
  HelmOriginalIcon,
  BunOriginalIcon,
  DenojsOriginalIcon,
  Html5PlainIcon,
  Css3PlainIcon,
  JavascriptPlainIcon,
} from "@devicon/react";
import {
  FaAsymmetrik,
  FaBuilding,
  FaCloud,
  FaDatabase,
  FaServer,
} from "react-icons/fa6";

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
      id: 4,
      title: "Forward Deployed Engineer",
      company: "Adleia Labs",
      imgUrl: "https://adleia.com/adleia-logo.jpg",
      linkedin: "https://www.linkedin.com/company/adleia-labs/",
      startDate: new Date("2026-07-01"),
      endDate: new Date("2026-04-01"),
      companyUrl: "https://adleia.com/",
      description: [
        "Owned end-to-end engineering across two greenfield products, driving requirements discovery, system architecture, development, testing, deployment, and iterative improvements through direct stakeholder collaboration.",
        "Built multimodal LLM integrations using LangChain and Google Gemini, alongside WhatsApp and Telegram bot integrations for AI-powered workflows.",
        "Automated cloud infrastructure and GitOps deployments using GCP, Pulumi, Kubernetes, and Argo CD.",
        "Applied TDD and established unit, end-to-end, and load-testing workflows using Vitest, Playwright, Cypress, and k6.",
        "Improved client-management and planning workflows, saving approximately one working day per week.",
      ],
      isCurrent: true,
      techStack: [
        {
          title: "Railway",
          icon: SiRailway,
          level: "Intermediate",
        },
        {
          title: "Next.js",
          icon: SiNextdotjs,
          level: "Advanced",
        },
        {
          title: "ArgoCD",
          icon: SiArgo,
          level: "Intermediate",
        },
        {
          title: "PostgreSQL",
          icon: SiPostgresql,
          level: "Intermediate",
        },
        {
          title: "Fastify",
          icon: SiFastify,
          level: "Advanced",
        },
        {
          title: "Vitest",
          icon: SiVitest,
          level: "Intermediate",
        },
        {
          title: "Pulumi",
          icon: SiPulumi,
          level: "Intermediate",
        },
        {
          title: "Docker",
          icon: SiDocker,
          level: "Advanced",
        },
        {
          title: "Cypress",
          icon: SiCypress,
          level: "Intermediate",
        },
        {
          title: "Redis",
          icon: SiRedis,
          level: "Advanced",
        },
        {
          title: "Kubernetes",
          icon: SiKubernetes,
          level: "Advanced",
        },
        {
          title: "Whatsapp API",
          icon: SiWhatsapp,
          level: "Intermediate",
        },
        {
          title: "Telegram API",
          icon: SiTelegram,
          level: "Advanced",
        },
        {
          title: "Claude Code",
          icon: SiClaude,
          level: "Intermediate",
        },
        {
          title: "OpenAI LLM",
          icon: SiOpenai,
          level: "Intermediate",
        },
      ],
    },
    {
      id: 0,
      title: "Software Developer Engineer",
      company: "Websmiths",
      imgUrl: "https://websmiths.io/images/logo/logo-dark.png",
      startDate: new Date("2025-09-01"),
      endDate: new Date("2026-04-01"),
      companyUrl: "https://www.websmiths.io/",
      description: [
        "Architected a secure, multi-tenant SaaS backend in Node.js and Fastify, implementing robust tenant isolation and a Role, and Attribute-Based Access Control system to onboard over 100+ enterprise organizations and 5k+ users securely.",
        "Engineered a high-throughput, event-driven notification microservice via Apache Kafka, reliably processing 1k+ concurrent activities at 450 req/sec with zero performance degradation.",
        "Migrated legacy backend structure to a modular monolith architecture, improving testability by 3\\times, reducing cross-module dependencies by 60%, and accelerating feature development.",
        "Stood up a comprehensive AWS observability and telemetry pipeline integrating Grafana, Loki, and Vector to centralize structured logging, successfully reducing production debugging latency and MTTR by 24%",
      ],
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
          title: "Better-auth",
          icon: SiBetterauth,
          level: "Advanced",
        },
        {
          title: "Datadog",
          icon: SiDatadog,
          level: "Intermediate",
        },
        {
          title: "Vitest",
          icon: SiVitest,
          level: "Advanced",
        },
        {
          title: "Grafana",
          icon: SiGrafana,
          level: "Intermediate",
        },
        {
          title: "Postgres",
          icon: SiPostgresql,
          level: "Advanced",
        },
        {
          title: "SQLite",
          icon: SiSqlite,
          level: "Intermediate",
        },
        {
          title: "Docker",
          icon: SiDocker,
          level: "Advanced",
        },
      ],
    },
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "JarGoan",
      startDate: new Date("2024-05-01"),
      endDate: new Date("2024-06-01"),
      companyUrl: "https://www.jargoan.com/",
      description: [
        "Improved platform usability by 20.6% through responsive redesigns and accessibility enhancements",
        "Increased user engagement by 26.53% by implementing interactive UI components with React",
        "Led UI design initiatives collaborating with a cross-functional team of designers and developers",
        "Optimized front-end performance by lazy-loading assets and reducing initial bundle size by 18%",
      ],
      linkedin: "https://www.linkedin.com/company/Jargoan",
      techStack: [
        {
          title: "React",
          icon: FaReact,
          level: "Advanced",
        },
        {
          // react-icons' FaHtml5 has a non-square viewBox (384x512) that
          // rendered clipped/garbled when baked onto the cube's square
          // canvas tiles (TechShowcasePanel's createFeatureTexture) — the
          // devicon Plain variant has a clean 128x128 viewBox and still
          // respects the `color` prop (currentColor fill), unlike the
          // devicon "Original" variants, which hardcode brand colors. The
          // cast matches how every other devicon icon in this file is
          // already structurally incompatible with react-icons' IconType.
          title: "HTML",
          icon: Html5PlainIcon as unknown as IconType,
          level: "Advanced",
        },
        {
          title: "CSS",
          icon: Css3PlainIcon as unknown as IconType,
          level: "Advanced",
        },
        {
          title: "JavaScript",
          icon: JavascriptPlainIcon as unknown as IconType,
          level: "Intermediate",
        },
      ],
    },
    {
      id: 2,
      title: "Core Contributor",
      company: "Tublian",
      startDate: new Date("2025-08-01"),
      endDate: new Date("2025-08-01"),
      description: [
        "Owned and extended internal LLM infrastructure, optimizing prompt execution pipelines and token consumption to reduce inference overhead and API costs significantly.",
        "Shipped multiple AI provider integrations and engineered secure, enterprise-grade conversational AI agents integrating Python, SQL data pipelines, LocalLLMs, and the Groq API.",
        "Diagnosed and resolved over 15 critical system bugs to stabilize core platform architecture, maintaining high system stability and achieving a top 5% global contributor rank in 2025.",
        "Integrated third-party LLM APIs to automate content generation workflows for internal tools",
      ],
      companyUrl: "https://www.tublian.com/",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_zKrj1zFCWXtctXEGNS5WZfoNpMGNAcZlANSi-aqzI0gbbGX6RhGAeY&s=10",
      linkedin: "https://www.linkedin.com/company/Tublian",
      techStack: [
        {
          title: "Python",
          icon: FaPython,
          level: "Advanced",
        },
        {
          title: "FastAPI",
          icon: SiFastapi,
          level: "Intermediate",
        },
        {
          title: "Streamlit",
          icon: SiStreamlit,
          level: "Intermediate",
        },
        {
          title: "Groq",
          icon: SiGrocy,
          level: "Intermediate",
        },
        {
          title: "LangChain",
          icon: SiLangchain,
          level: "Intermediate",
        },
        {
          title: "OpenAI",
          icon: SiOpenai,
          level: "Intermediate",
        },
      ],
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
  { text: string; border: string; bg: string; fill: string }
> = {
  Frontend: {
    text: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/5",
    fill: "fill-cyan-400",
  },
  Backend: {
    text: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
    fill: "fill-emerald-400",
  },
  Languages: {
    text: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
    fill: "fill-amber-400",
  },
  Database: {
    text: "text-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/5",
    fill: "fill-violet-400",
  },
  "DevOps & Cloud": {
    text: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/5",
    fill: "fill-sky-400",
  },
  Monitoring: {
    text: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
    fill: "fill-orange-400",
  },
  Infrastructure: {
    text: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/5",
    fill: "fill-rose-400",
  },
  Frameworks: {
    text: "text-fuchsia-400",
    border: "border-fuchsia-400/30",
    bg: "bg-fuchsia-400/5",
    fill: "fill-fuchsia-400",
  },
  Testing: {
    text: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/5",
    fill: "fill-green-400",
  },
};

export const tech: readonly TTechStack[] = [
  {
    title: "Frontend",
    icon: FaDesktop,
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
        level: "Beginner",
        color: "#4FC08D",
      },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    techStack: [
      {
        title: "Node JS",
        icon: NodejsOriginalIcon,
        level: "Advanced",
        color: "#339933",
      },
      {
        title: "Bun",
        icon: BunOriginalIcon,
        level: "Intermediate",
        color: "#000000",
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
        title: "Deno",
        icon: DenojsOriginalIcon,
        level: "Intermediate",
        color: "#000000",
      },
    ],
  },
  {
    title: "Languages",
    icon: SiLanguagetool,
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
    icon: FaDatabase,
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
    icon: FaCloud,
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
    icon: FaBuilding,
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
    icon: FaAsymmetrik,
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
        title: "Jenkins",
        icon: JenkinsOriginalIcon,
        level: "Intermediate",
        color: "#D24939",
      },
    ],
  },
  {
    title: "Frameworks",
    icon: FaTools,
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
