import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconProps } from '../types';

const SocialLink = ({ url, icon }: IconProps) => {
  
  const imgurl = icon.toLowerCase();

  return (
    <div 
      className=' hover:bg-[#3f4949]  cursor-pointer rounded-xl flex flex-col justify-center items-center p-5  transition-all duration-500 ease-in-out 
      hover:scale-105 hover:shadow-gray-200 hover:cursor-pointer text-shadow-md' 
      id='contact'
    >
      <Link className="my-5 flex text-center flex-row items-center flex-nowrap text-shadow-md text-xl" href={url} target="_blank" rel="noopener noreferrer">
      <Image 
        className="cursor-pointer m-5" 
        src={`/social/${imgurl}.svg`} 
        alt='logo' 
        width={35} 
        height={35}
      />
        <p className='hidden md:block text-[#166466] font-bold shadow-slate-200 '>
        {icon}
        </p>
      </Link>
    </div>
  );
};

export default SocialLink;