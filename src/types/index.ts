export interface DataMenuProps{
  title: string, 
  id: string,
  content: React.ReactNode
}

export interface NavlinksProps {
  href: string,
  title: string
}

export interface ProjectProps{
  id: number,
  title: string,
  description: string,
  imgUrl: string,
  tag: string[],
  gitUrl: string,
  previewUrl: string,
  techStack: string[], // List of technologies used in the project
  challengesFaced: string[], // Challenges you faced during the project
  lessonsLearned: string[], // Key lessons learned from the project
  contributionType: "Solo" | "Team"; // Whether you worked on the project solo or in a team
  duration: string; // Time taken to complete the project
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