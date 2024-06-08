"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import AchievementsSection from './(about)/AchievementSection';
import { motion } from 'framer-motion';
import { SocialLinksProps } from '../types';

const socialLinks: SocialLinksProps[] = [
    // Connection Based
    {
        name: "Email",
        url: "mailto:abpriyanshu007@gmail.com",
        icon: "Email",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu085/",
        icon: "Linkedin",
    },
    {
        name: "Twitter",
        url: "https://twitter.com/Priyanshux085",
        icon: "Twitter",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/priyanshux085/",
        icon: "Instagram",
    },
    // Achievement Based
    {
        name: "Github",
        url: "https://gitub.com/Priyanshu085",
        icon: "Github",
    },
    {
        name: "CodeChef",
        url: "https://www.codechef.com/users/priyanshux85",
        icon: "CodeChef",
    },
    {
        name: "Leetcode",
        url: "https://leetcode.com/Priyanshu085/",
        icon: "Leetcode",
    },
    {
        name: "Google",
        url: "https://g.dev/priyanshu085",
        icon: "Google",
    }

  ]

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
      <section>
        <div className='mt-12 xs:mx-auto'>
            <div className='flex md:flex-row flex-col-reverse sm:px-5 xs:justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <div className='flex justify-start items-start sm:text-left font-extrabold'>
                        {/* <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl text-extrabold'> */}
                        <div className='inline-flex float-left flex-col justify-center items-center mx-2'>
                            <div className='w-5 h-5 rounded-full bg-[#166466]'/>
                            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#166466] '/>
                        </div>
                        <div className='float-right flex-row '>
                            <h2 className="text-white mb-4 text-2xl sm:text-2=3xl lg:text-6xl font-extrabold">
                            Hello, Priyanshu here
                                <br/>
                                <span className="primary bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-600 ">
                                I&apos;m a {" "}
                                </span>  
                                <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Web Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'M L Engineer',
                                    1000,
                                    'Coding Enthusiast',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                // style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                                />
                            </h2>
                            <p className='text-[#9d9d9d] text-start text-base sm:text-md mb-6 lg:text-xl'> 
                                Adaptable Engineering student skilled in Python, MERN stack, and front-end technologies. 
                                Expanding expertise in Generative AI, seeking to innovate in tech solutions.
                            </p>
                            <div>
                            {/* <button className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-[#f1f1f1]">Hover me !
                                <div className='background'></div>
                            </button>        */}
                                {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-black hover:bg-slate-200'>Hire Me</button> */}
                                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent text-white border border-white mt-3 hover:bg-[#166466]' onClick={downloadResume}>
                                    Checkout My CV
                                </button>
                            </div>

                        </div>
                    </div>

                </motion.div>

                {/* Image Scetion */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className='col-span-5 justify-center self-center'>
                        <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative'>
                            <Image 
                                // src = "/images/hero-image.png"
                                src= "/images/hero.png"
                                alt = 'Hero_Image'  
                                className = 'absolute justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[500px] rounded-full'
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        {/* Achieve,emt Section */}
        <AchievementsSection />


        {/* Social Links Section */}
            {/* <div className='mt-14 grid grid-cols-3 text-white flex-col border-2 gap-4 
                md:grid-cols-4 md:text-left shadow-2xl shadow-gray-200
            '>
                {socialLinks.map((socialLink, index) => (
                    <SocialLink key={index} url={socialLink.url} icon={socialLink.icon} />
                ))}

            </div> */}
      </section>
  )
}

export default HeroSection;
