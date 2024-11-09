import Link from 'next/link'
import React from 'react'
import { 
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaReddit
 } from 'react-icons/fa'

const SocialLink = [
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:work.priyanshu085@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/coderx85/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/Priyanshux085",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    url: "https://github.com/coderx85",
  },
  {
    name: "Reddit",
    icon: <FaReddit />,
    url: "https://www.reddit.com/user/coderx85",
  }
]

const Social = () => {
  return (
    <div className='flex gap-6'>
      {SocialLink.map((link, index) => (
        <Link 
          key={index} 
          className='flex items-center z-1 gap-2 rounded-full justify-center w-12 h-12 border-accent text-base border-2
            hover:bg-accent hover:text-primary group hover:transition-all duration-500'
          href={link.url}
        >
          <span className='text-2xl group-hover:scale-150'>
            {link.icon}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Social