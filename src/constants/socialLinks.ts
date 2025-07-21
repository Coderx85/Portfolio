import { SocialLinksProps } from '../types'
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaReddit } from 'react-icons/fa'

export const SocialLink: SocialLinksProps[] = [
  { name: "Email", icon: FaEnvelope, url: "mailto:work.priyanshu085@gmail.com" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/coderx85/" },
  { name: "Twitter", icon: FaTwitter, url: "https://twitter.com/Priyanshux085" },
  { name: "Github", icon: FaGithub, url: "https://github.com/coderx85" },
  { name: "Reddit", icon: FaReddit, url: "https://www.reddit.com/user/coderx85" },
];
