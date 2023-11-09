export interface DataMenuProps{
  title: string, 
  id: string,
  content: React.ReactNode
}

export interface LinksProps {
  title: string,
  path: string,
}

export interface NavlinksProps {
  href: string,
  title: string
}

export interface ProjectCardProp{
  title: string,
  imgUrl: string,
  description: string,
  gitUrl: string,
  previewUrl: string,
}

export interface ProjectProps{
  id: number,
  title: string,
  description: string,
  imgUrl: string,
  tag: string[],
  gitUrl: string,
  previewUrl: string,
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