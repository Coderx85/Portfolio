import { LinkedinOriginalIcon, TwitterOriginalIcon } from "@devicon/react";
import { ISocialLinks } from "../types";
import { FaEnvelope, FaGithub, FaReddit } from "react-icons/fa";

export const SocialLink: ISocialLinks[] = [
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:work.priyanshu085@gmail.com",
    username: "work.priyanshu085@gmail.com",
    color: "#008CBA",
  },
  {
    name: "LinkedIn",
    icon: LinkedinOriginalIcon,
    url: "https://www.linkedin.com/in/coderx85/",
    username: "coderx85",
    color: "#0A66C2",
  },
  {
    name: "Twitter",
    icon: TwitterOriginalIcon,
    url: "https://twitter.com/Priyanshux085",
    username: "Priyanshux085",
    color: "#1DA1F2",
  },
  {
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/coderx85",
    username: "coderx85",
    color: "#171717",
  },
  {
    name: "Reddit",
    icon: FaReddit,
    url: "https://www.reddit.com/user/coderx85",
    username: "coderx85",
    color: "#FF4500",
  },
];
