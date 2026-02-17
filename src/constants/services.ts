import { IconType } from "react-icons/lib";
import {
  SiApifox,
  SiCodefactor,
  SiFramer,
  SiLangchain,
  SiLinux,
  SiTailwindcss,
} from "react-icons/si";
import { FaDatabase, FaGears, FaPaypal, FaShield } from "react-icons/fa6";

type TServices = {
  icon: IconType;
  title: string;
  description: string;
  color: string;
};

export const services: TServices[] = [
  {
    title: "Entreprise Model",
    icon: FaGears,
    description:
      "Build scalable and maintainable enterprise-grade applications with clean architecture and best practices.",
    color: "#4ade80", // sage green
  },
  {
    title: "Payment gateway",
    icon: FaPaypal,
    description:
      "Integrate payment gateways to enable secure and seamless transactions.",
    color: "#a78bfa", // soft violet
  },
  {
    title: "Authentication ",
    icon: FaShield,
    description:
      "Integrate authentication services to secure your application.",
    color: "#fbbf24", // warm amber
  },
  {
    title: "API Integration",
    icon: SiApifox,
    description:
      "Offers API integration services to help businesses and individuals achieve their goals.",
    color: "#fb7185", // dusty rose
  },
  {
    title: "DevOps Implementation",
    icon: SiLinux,
    description:
      "I can help you rank your website on the first page of Google.",
    color: "#2dd4bf", // teal
  },
  {
    title: "UI/UX Design",
    icon: SiTailwindcss,
    description:
      "Lead UI design initiatives to enhance platform usability and user satisfaction.",
    color: "#38bdf8", // sky blue
  },
  {
    title: "Framework-development",
    icon: SiFramer,
    description:
      "Leverage modern frameworks like Next.js, Node.js, Fastify. to build scalable and maintainable applications.",
    color: "#e879f9", // orchid
  },
  {
    title: "Code Reviewer",
    icon: SiCodefactor,
    description:
      "Detailed code using best code writing pratices, security guidelines, industry standards and also using the AI tools.",
    color: "#818cf8", // slate indigo
  },
  {
    title: "Database Migration",
    icon: FaDatabase,
    description:
      "Expertly handle data migration across various database systems while maintaining data integrity and minimizing downtime.",
    color: "#f0abfc", // soft magenta
  },
  {
    title: "LLM Integration",
    icon: SiLangchain,
    description:
      "Integrate LLMs to enhance your application with AI capabilities.",
    color: "#67e8f9", // cool cyan
  },
];
