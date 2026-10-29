import type { IconType } from "react-icons/lib";
import {
  SiAppwrite,
  SiArgo,
  SiBetterauth,
  SiCloudinary,
  SiCplusplus,
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
  SiServerless,
  SiSqlite,
  SiStreamlit,
  SiTelegram,
  SiTypescript,
  SiVitest,
  SiWhatsapp,
  SiGithubactions,
  SiGooglegemini,
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
  PlaywrightOriginalIcon,
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
    "Full-stack and DevOps engineer with a B-Tech in Computer Science (2021–25). I work across the whole stack — React and Next.js frontends, Node.js and Fastify backends, and the Docker/Kubernetes/cloud infrastructure they run on. As a Forward Deployed Engineer at Adleia Labs, I took an AI-driven healthcare SaaS from zero to production in 10 weeks (40+ shipped features), building a multimodal LangGraph + Gemini Vision pipeline served over WhatsApp and Telegram. At Websmiths I built a multi-tenant SaaS backend for 100+ enterprise organizations and 5k+ users, backed by a Kafka notification microservice handling 450 req/sec, and cut production MTTR by 24%; as a Frontend Developer Intern at JarGoan my redesigns improved usability by 20.6% and cut the initial bundle size by 18%.",
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
  // NOTE: `description` has no consumer in the codebase — ExperienceSection
  // and ResumePDF render only per-item bullet descriptions, and every Heading
  // call passes its own literal. The former "web developer at XYZ company"
  // placeholder was fabricated copy, so it's replaced with a factual
  // one-liner consistent with the entries below until the field sees use.
  description:
    "Full-stack and DevOps engineering experience across two developer internships and a current Forward Deployed Engineer role.",
  items: [
    {
      id: 4,
      title: "Forward Deployed Engineer",
      company: "Adleia Labs",
      imgUrl: "https://adleia.com/adleia-logo.jpg",
      linkedin: "https://www.linkedin.com/company/adleia-labs/",
      startDate: new Date("2026-07-01"),
      // Current role: the renderers substitute "Present" (ResumePDF.tsx /
      // ExperienceSection.tsx) and use new Date() for the duration whenever
      // isCurrent is true, so endDate is never read. The type requires a
      // Date, so it's set equal to the start date — there is no real end
      // date yet and nothing was fabricated.
      endDate: new Date("2026-07-01"),
      companyUrl: "https://adleia.com/",
      description: [
        "Architected an AI-driven healthcare SaaS in Node.js, Fastify, and PostgreSQL, taking it from zero to production in 10 weeks with 40+ shipped features.",
        "Engineered a multimodal LangGraph and Gemini Vision pipeline converting food photos and health-report PDFs into nutrition insights, served via WhatsApp and Telegram chatbots.",
        "Re-architected a legacy backend into a hexagonal, feature-based design with InversifyJS, enabling a 4-tier test strategy from Vitest unit to Playwright end-to-end tests.",
        "Executed 5 live production migrations — including React to Next.js, Better Auth, database schema, and S3 storage — gated by GitHub Actions CI/CD.",
      ],
      isCurrent: true,
      techStack: [
        {
          title: "Node.js",
          icon: NodejsOriginalIcon as unknown as IconType,
          level: "Advanced",
        },
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
          title: "PostgreSQL",
          icon: SiPostgresql,
          level: "Advanced",
        },
        {
          title: "LangGraph",
          icon: SiLanggraph,
          level: "Advanced",
        },
        {
          title: "Gemini Vision",
          icon: SiGooglegemini,
          level: "Intermediate",
        },
        {
          title: "Better-auth",
          icon: SiBetterauth,
          level: "Advanced",
        },
        {
          title: "Vitest",
          icon: SiVitest,
          level: "Advanced",
        },
        {
          title: "Playwright",
          icon: PlaywrightOriginalIcon as unknown as IconType,
          level: "Intermediate",
        },
        {
          title: "AWS S3",
          icon: AmazonwebservicesOriginalWordmarkIcon as unknown as IconType,
          level: "Intermediate",
        },
        {
          title: "GitHub Actions",
          icon: SiGithubactions,
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
      ],
    },
    {
      id: 0,
      title: "Software Developer Engineer - I (Intern)",
      company: "Websmiths",
      imgUrl: "https://websmiths.io/images/logo/logo-dark.png",
      startDate: new Date("2025-09-01"),
      endDate: new Date("2025-12-01"),
      companyUrl: "https://www.websmiths.io/",
      description: [
        "Architected a secure, multi-tenant SaaS backend in Node.js and Fastify, implementing robust tenant isolation and a Role- and Attribute-Based Access Control system to onboard over 100+ enterprise organizations and 5k+ users securely.",
        "Engineered a high-throughput, event-driven notification microservice via Apache Kafka, reliably processing 1k+ concurrent activities at 450 req/sec with zero performance degradation.",
        "Migrated legacy backend structure to a modular monolith architecture, improving testability by 3×, reducing cross-module dependencies by 60%, and accelerating feature development.",
        "Stood up a comprehensive AWS observability and telemetry pipeline integrating Grafana, Loki, and Vector to centralize structured logging, successfully reducing production debugging latency and MTTR by 24%.",
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
      title: "Core Open Source Contributor",
      company: "Tublian",
      startDate: new Date("2024-08-01"),
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
          title: "HTML",
          icon: FaHtml5,
          level: "Advanced",
        },
        {
          title: "CSS",
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
          level: "Intermediate",
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
          // Docker level unified to "Advanced": both experience entries and
          // the tech showcase record it as Advanced (it's used heavily in
          // production work at Websmiths/Adleia), so skillsData's earlier
          // "Intermediate" was the contradiction.
          title: "Docker",
          icon: SiDocker,
          level: "Advanced",
        },
        {
          // Kubernetes level unified to "Intermediate": the skills showcase
          // said "Beginner", but the experience entries record hands-on
          // production usage (Kubernetes + Pulumi + Argo CD automation at
          // Adleia), which makes "Beginner" an undersell. "Intermediate" is
          // the honest middle — production usage, but not the "Advanced"
          // depth Docker is marked at — so both sources now agree.
          title: "Kubernetes",
          icon: SiKubernetes,
          level: "Intermediate",
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
          title: "FastAPI",
          icon: SiFastapi,
          level: "Intermediate",
        },
        {
          title: "PHP",
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

// ─── Night Lab glass treatment for tech category cards ───
// One shared glass panel for every category (border-white/10, dark glass
// background = rgba(15, 23, 42, 0.4) via slate-900/40). Per-category hues
// were removed: signal color is reserved; brand icons on tiles keep their
// own recognition colors. Headings render white, icons white/70.
export const categoryGlass = {
  bg: "bg-slate-900/40",
  border: "border border-white/10",
} as const;

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
        title: "Tailwind",
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
      // Brand colors on the near-black canvas must stay legible. Bun/Deno
      // ship a pure-black brand icon (#000000) and Helm a near-black slate
      // (#263238) — all invisible here — so they use lighter
      // brand-appropriate substitutes (Bun's cream #FBF0DF, Deno's pale
      // green #70FFB7, a lightened Helm blue) that clear a 4.5:1 minimum.
      {
        title: "Bun",
        icon: BunOriginalIcon,
        level: "Intermediate",
        color: "#FBF0DF",
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
        color: "#70FFB7",
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
        level: "Advanced",
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
        level: "Intermediate",
        color: "#4B9CC4",
      },
    ],
  },
];
