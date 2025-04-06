import { NavlinksProps, ProjectProps } from '../types'

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

export * from './project'

export * from './resume'