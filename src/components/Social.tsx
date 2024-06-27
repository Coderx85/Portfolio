import Link from 'next/link'
import React from 'react'
import { 
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
 } from 'react-icons/fa'

const SocialLink = [
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:abpriyanshu007@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/priyanshu085/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/Priyanshux085",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    url: "https://gitub.com/Priyanshu085",
  }
]

const Social = () => {
  return (
    <div className='flex gap-6'>
      {SocialLink.map((link, index) => (
        <Link 
          key={index} 
          className='
            flex items-center gap-2 rounded-full justify-center w-9 h-9 border-accent text-base border-2
            hover:bg-accent hover:text-primary hover:transition-all duration-500'
          href={link.url}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social