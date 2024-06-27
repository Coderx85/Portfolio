"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const ProfilePicPage = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          transition: { duration: 0.4, delay: 2, ease: 'easeInOut'}
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            transition: { duration: 0.4, delay: 2.5, ease: 'easeInOut' }
           }}
          className='w-[298px] h-[298px] xl:w-[408px] xl:h-[408px] absolute rounded-full mix-blend-lighten'
        >
          <Image 
            src="/images/hero.png"
            alt='Hero_Image'
            fill
            priority
            quality={100}
            className='object-contain rounded-full'
          />
        </motion.div>

        <motion.svg
          className='w-[300px] h-[300px] xl:w-[410px] xl:h-[410px]'
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" cy="253" 
            r="250" stroke="#166466" 
            strokeWidth="4"
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{ 
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }} 
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default ProfilePicPage