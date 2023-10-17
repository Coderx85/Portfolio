import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconProps } from '../../../types';

const SocialLink = ({ url, icon }: IconProps) => {
  
  const imgurl = icon.toLowerCase();
  console.log(imgurl);

  return (
    <div className=' hover:bg-gray-700 cursor-pointer' >
      <Link className="my-5 flex text-center flex-row items-center flex-nowrap text-xl" href={url} target="_blank" rel="noopener noreferrer">
      <Image 
        className="cursor-pointer m-5" 
        src={`/social/${imgurl}.svg`} 
        alt='logo' 
        width={35} 
        height={35}
      />
        <p className='hidden md:block'>
        {icon}
        </p>
      </Link>
    </div>
  );
};

export default SocialLink;