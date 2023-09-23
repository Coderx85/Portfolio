"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left font-extrabold'>
                {/* <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl text-extrabold'> */}
                <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold">
                Hello, Priyanshu here
                    <br/>
                    <span className="text-[#ff0000] bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">
                    I&apos;m a {" "}
                    </span>  
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Web Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'M. L. Engineer',
                        1000,
                        'Prompt Engineer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'> 
                Adaptable Engineering student skilled in Python, MERN stack, and front-end technologies. 
                Expanding expertise in Generative AI, seeking to innovate in tech solutions.
                </p>
                <div>
                {/* <button className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-[#f1f1f1]">Hover me !
                    <div className='background'></div>
                </button>        */}
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-black hover:bg-slate-200'>Hire Me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent text-white border border-white mt-3 hover:bg-slate-800'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 self-place-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                        src = "/images/hero-image.png"
                        alt = 'Hero Image'
                        className = 'absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
      </section>
  )
}

export default HeroSection;