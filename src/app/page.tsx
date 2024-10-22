"use client"
import React from 'react'
import AchievementsSection from '@/components/animation/AchievementSection';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/Social';
import ProfilePicPage from '@/components/ProfilePic';
import Link from 'next/link';
import { FlipWords } from '@/components/animation/Flipword';
import { motion } from 'framer-motion';

const HeroSection = () => {

    return (
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1,
            transition:{ delay: 2.4, duration: 0.5, ease: 'easeIn'} 
        }}
        className='h-full'>
        <div className='container mx-auto h-full'>
            <div className='flex xl:flex-row flex-col items-center sm:px-5 justify-between'>
                {/* Text Section */}
                <div className='text-center xl:text-left order-2 xl:order-none'>
                    <span className='text-lg my-4 xl:text-left'>
                        Software Developer | Web Developer     
                    </span>
                    <h1 className='text-white text-4xl mb-4 sm:text-5xl lg:text-4xl text-extrabold'>
                        {"I'm "}
                        <FlipWords
                            words={['Priyanshu', '@Coderx85']}
                            duration={2000}
                            className='text-accent text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal'
                        />
                    </h1>
                    <p className='max-w-[500px] pt-2 my-4 text-white/80'> 
                        A passionate web developer skilled in front-end and back-end technologies. With experience in React, Node.js, and DevOps tools, I've led UI design projects, enhanced user engagement, and streamlined workflows. I love contributing to open-source projects and continuously learning to drive innovative web solutions.
                    </p>
                    <div className='flex flex-col xl:flex-row gap-8 items-center'>
                        <Link 
                            href="/Resume.pdf" 
                            download="Resume/Priyanshu.pdf" 
                            locale={false} 
                            rel="noopener noreferrer" 
                            target="_blank" 
                            aria-label="Downlod Resume" 
                        > 
                            <Button
                                variant='outline' 
                                size='lg'
                                className='uppercase items-center gap-2 text-white border-accent rounded-full hover:bg-accent transition-all duration-300 ease-in-out ' 
                            >
                                Checkout My CV <FiDownload className='text-xl text-accent'/>
                            </Button>
                        </Link>
                        <Link href="/contact/#contact"> 
                            <Button
                                variant='outline' 
                                size='lg'
                                className='uppercase items-center gap-2 text-white bg-accent border-accent rounded-full hover:bg-transparent transition-all duration-300 ease-in-out ' 
                            >
                                Hire Me 
                            </Button>
                        </Link>
                    </div>
                    <div className='xl:mb-0 my-8'>
                        <Social />
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
      </motion.section>
  )
}

export default HeroSection;