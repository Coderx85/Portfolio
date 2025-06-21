import { IconType } from "react-icons/lib";
import { 
  SiAppwrite, 
  SiClerk, 
  SiMongodb, 
  SiNextdotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiVercel 
} from "react-icons/si";
import { BsCloudDrizzle, BsFileImage } from "react-icons/bs";
import { FiCloudDrizzle } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";

// Icon mapping object
export const iconMap: Record<string, IconType> = {
  // React Icons - Si (Simple Icons)
  SiAppwrite: SiAppwrite,
  SiClerk: SiClerk,
  SiMongodb: SiMongodb,
  SiNextdotjs: SiNextdotjs,
  SiPostgresql: SiPostgresql,
  SiPrisma: SiPrisma,
  SiReact: SiReact,
  SiTailwindcss: SiTailwindcss,
  SiTypescript: SiTypescript,
  SiVercel: SiVercel,
  
  // Bootstrap Icons
  BsCloudDrizzle: BsCloudDrizzle,
  BsFileImage: BsFileImage,
  
  // Feather Icons
  FiCloudDrizzle: FiCloudDrizzle,
  
  // Font Awesome Icons
  FaShieldAlt: FaShieldAlt,
};

// Helper function to get icon component by name
export const getIconByName = (iconName: string): IconType | null => {
  return iconMap[iconName] || null;
};
