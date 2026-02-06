import type { IconType } from "react-icons/lib";

export interface DataMenuProps {
  title: string;
  id: string;
  content: React.ReactNode;
}

export interface NavlinksProps {
  href: string;
  title: string;
}

export interface IconProps {
  url: string;
  icon: string;
}

export interface Tab {
  active: boolean;
  selectTab: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export interface DataProps {
  title: string;
  description: string;
}

export interface AchievementProps {
  metric: string;
  value: string;
  postfix: string;
  prefix?: string;
}

export interface SocialLinksProps {
  name: string;
  url: string;
  icon: IconType | string;
}

export * from "./resume";
