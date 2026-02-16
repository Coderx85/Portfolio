import { IconType } from "react-icons/lib";
import {
  SiApifox,
  SiCodefactor,
  SiFramer,
  SiLinux,
  SiNodedotjs,
  SiPaytm,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { GrPaypal, GrServices } from "react-icons/gr";

type TServices = {
  icon: IconType;
  title: string;
  description: string;
};

export const services: TServices[] = [
  {
    title: "Entreprise Model",
    icon: GrServices,
    description:
      "Build scalable and maintainable enterprise-grade applications with clean architecture and best practices.",
  },
  {
    title: "Payment Gateway Integration",
    icon: GrPaypal,
    description:
      "Integrate payment gateways to enable secure and seamless transactions.",
  },
  {
    title: "",
    icon: SiReact,
    description: "",
  },
  {
    title: "",
    icon: SiReact,
    description: "",
  },
  {
    title: "Build and Deploy Web Applications",
    icon: SiReact,
    description:
      "Create responsive and user-friendly interfaces, ensuring optimal performance and user experience.",
  },
  {
    title: "Full Stack Web Development",
    icon: SiReact,
    description:
      "Create responsive and user-friendly interfaces, ensuring optimal performance and user experience.",
  },
  {
    title: "Backend Development",
    icon: SiNodedotjs,
    description:
      "Develop robust backend systems to support your web applications and services.",
  },
  {
    title: "API Integration",
    icon: SiApifox,
    description:
      "Offers API integration services to help businesses and individuals achieve their goals.",
  },
  {
    title: "DevOps Implementation",
    icon: SiLinux,
    description:
      "I can help you rank your website on the first page of Google.",
  },
  {
    title: "UI/UX Design",
    icon: SiTailwindcss,
    description:
      "Lead UI design initiatives to enhance platform usability and user satisfaction.",
  },
  {
    title: "Framework-oriented Development",
    icon: SiFramer,
    description:
      "Leverage modern frameworks to build scalable and maintainable applications.",
  },
  {
    title: "Code Reviewer",
    icon: SiCodefactor,
    description: "",
  },
];
