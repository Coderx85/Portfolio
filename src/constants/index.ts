import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaReddit } from 'react-icons/fa'
import { NavlinksProps, SocialLinksProps } from '../types'

export const navLinks: NavlinksProps[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: 'Work',
      href: '/work'
    },
    {
      title: 'Service',
      href: '/service'
    },
    {
      title: 'Contact',
      href: '/contact'
    },
  ]
  
export const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description: "Create responsive and user-friendly interfaces, ensuring optimal performance and user experience.",
  },
  {
    num: "02",
    title: "Backend Development and Database Management",
    description: "Develop robust backend systems to support your web applications and services.",
  },
  {
    num: "03",
    title: "DevOps Implementation",
    description: "I can help you rank your website on the first page of Google.",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description: "Lead UI design initiatives to enhance platform usability and user satisfaction.",
  }
]

export const SocialLink: SocialLinksProps[] = [
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:work.priyanshu085@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/coderx85/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/Priyanshux085",
  },
  {
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/coderx85",
  },
  {
    name: "Reddit",
    icon: FaReddit,
    url: "https://www.reddit.com/user/coderx85",
  }
]

export * from './project'

export * from './resume'