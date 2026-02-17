import { DevIconProps } from "./resume";

export interface DataMenuProps {
  title: string;
  id: string;
  content: React.ReactNode;
}

export interface INavlinks {
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

type TSocialLinksName = "Email" | "LinkedIn" | "Twitter" | "Github" | "Reddit";

export interface ISocialLinks {
  name: TSocialLinksName;
  url: string;
  icon: React.FC<DevIconProps>;
  username: string;
  color: string;
}

export * from "./resume";
