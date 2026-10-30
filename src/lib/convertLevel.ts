import { TTechStackLevel } from "@/types";

export const convertLevelIntoNumber = (lvl: TTechStackLevel) => {
  switch (lvl) {
    case "New.":
      return 35;
    case "Mid.":
      return 55;
    case "Adv.":
      return 85;
    default:
      return 0;
  }
};
