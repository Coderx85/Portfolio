import { IconType } from "react-icons/lib";

export interface DataMenuProps{
  title: string, 
  id: string,
  content: React.ReactNode
}

export interface NavlinksProps {
  href: string,
  title: string
}

export interface TechStackItemProps {
  [key: string]: IconType;
}

interface ChallengesProps {
  title: string;
  solution: string;
}

export interface ProjectProps{
  id: number,
  title: string,
  description: string,
  imgUrl: string,
  gitUrl: string,
  previewUrl: string,
  techStack: TechStackItemProps,
  challengesFaced: ChallengesProps[],
  lessonsLearned: string[],
}

export interface IconProps {
  url: string;
  icon: string; 
}

export interface Tab {
    active: boolean,
    selectTab: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

export interface AchievementProps {
  metric: string,
  value: string,
  postfix: string,
  prefix?: string
}

export interface ProjectTagProps {
  tag: string,
  name: string
}

export interface SocialLinksProps {
  name: string,
  url: string,
  icon: React.ReactNode | string
}

export interface ExpProps{
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  location?: string;
  projects?: ExpProjectProps[];
}

export interface ExpProjectProps{
  name: string;
  description: string;
  link: string;
}

export interface SkillProps{
  title: string;
  description: string;
  items: {
    section: string;
    techStack: SkillItemProps[];
  }[]
}

export interface SkillItemProps{
  title: string;
  icon: IconType;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}