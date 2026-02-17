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

export interface IExperience extends DataProps {
  items: {
    id: number;
    title: string;
    company: string;
    startDate: Date;
    endDate: Date;
    description: string[];
    techStack?: SkillProps["items"][number]["techStack"];
    companyUrl?: string;
    linkedin?: string;
    isCurrent?: boolean;
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

export type TTechStackLevel = "Advanced" | "Intermediate" | "Beginner";

export interface DevIconProps extends React.SVGProps<SVGElement> {
  size?: string | number;
}

export type TTech = {
  title: string;
  icon: React.FC<DevIconProps>;
  level: TTechStackLevel;
  color: string;
};

export type TCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps & Cloud"
  | "Monitoring"
  | "Infrastructure"
  | "Frameworks";

export type TTechStack = {
  title: TCategory;
  icon: IconType;
  techStack: readonly TTech[];
};

export type TProject = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  gitUrl: string;
  previewUrl: string;
  techStack: Record<string, string>;
  challengesFaced: { title: string; solution: string }[];
  lessonsLearned: string[];
};

export type PdfComponentsType = {
  PDFViewer: React.ComponentType<{
    width: string;
    height: string;
    showToolbar: boolean;
    style: React.CSSProperties;
    children: React.ReactNode;
  }>;
  PDFDownloadLink: React.ComponentType<{
    document: React.ReactElement;
    fileName: string;
    children: (props: { loading: boolean }) => React.ReactNode;
  }>;
  ResumePDF: React.ComponentType;
} | null;
