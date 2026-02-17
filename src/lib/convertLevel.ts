import { TTechStackLevel } from "@/types";

export const convertLevelIntoNumber = (lvl: TTechStackLevel) => {
  switch (lvl) {
    case "Beginner":
      return 35;
    case "Intermediate":
      return 55;
    case "Advanced":
      return 85;
    default:
      return 0;
  }
};
