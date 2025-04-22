import { IconType } from "react-icons/lib";
import { DataProps } from ".";
type LEVEL = "Beginner" | "Intermediate" | "Advanced"; 

export interface EduProps extends DataProps {
  items: {
    title: string;
    duration: string;
    institute: string;
  }[];
}

export interface AbtData extends DataProps {
  info: {
    fieldName: string;
    fieldValue: string;
  }[];
}

export interface ExpProps extends DataProps {
  items: {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
    linkedin?: string;
  }[];
}

export interface SkillProps extends DataProps {
  items: {
    section: string;
    techStack: {
      title: string;
      icon: IconType;
      level: LEVEL;
    }[];
  }[];
}