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

interface ChallengesProps {
  title: string;
  solution: string;
}

export interface TechStackItemProps {
  [key: string]: string;
}