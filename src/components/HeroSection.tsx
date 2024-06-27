"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import AchievementsSection from './(about)/AchievementSection';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from './Social';
import ProfilePicPage from './ProfilePic';

const HeroSection = () => {

    const downloadResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1_FgY1nV4EsYytOe0-YRZsQVTdfmU3bZZ/view?usp=sharing';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Priyanshhu\'s Resume.pdf'; // Set the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
      <section className='h-full'>
        <div className='container mx-auto h-full'>
            <div className='flex xl:flex-row flex-col items-center sm:px-5 justify-between'>
                {/* Text Section */}
                <div className='text-center xl:text-left order-2 xl:order-none'>
                    <span className='text-3xl xl:text-left'>Software Developer</span>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl text-extrabold'>
                        Hello, I'm <br/>
                        <span className='text-accent'>Priyanshu</span>
                    </h1>
                    <p className='max-w-[500px] mb-9 text-white/80'> 
                        Adaptable Engineering student skilled in Python, MERN stack, and front-end technologies. 
                        Expanding expertise in Generative AI, seeking to innovate in tech solutions.
                    </p>
                    <div className='flex flex-col xl:flex-row gap-8 items-center'>
                        <Button
                            variant='outline' 
                            size='lg'
                            className='uppercase items-center gap-2 text-white border-accent rounded-full hover:bg-[#166466]' 
                            onClick={downloadResume}
                        >
                            Checkout My CV <FiDownload className='text-xl'/>
                        </Button>
                        <div className='xl:mb-0 mb-8'>
                            <Social />
                        </div>
                    </div>
                </div>  
                {/* Image Scetion */}
                <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                    <ProfilePicPage />
                </div>
            </div>
        </div>
        {/* Achievememt Section */}
        <AchievementsSection />
      </section>
  )
}

export default HeroSection;
