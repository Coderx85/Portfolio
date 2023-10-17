export interface DataMenu{
  title: string, 
  id: string,
  content: React.ReactNode
}

export interface Links {
  title: string,
  path: string,
}

export interface NavlinksProps {
  href: string,
  title: string
}

export interface Card{
  title: string,
  imgUrl: string,
  description: string,
  gitUrl: string,
  previewUrl: string,
}

export interface Project{
  id: number,
  title: string,
  description: string,
  image: string,
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