"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import SocialLink from './SocialLink';

const HeroSection = () => {

    const downloadResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1nQRXXpt6eaZVFVgNpnMuv1kq9JAcxeo9/view?usp=drivesdk'; // Replace with the actual path
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Priyanshhu\'s Resume.pdf'; // Set the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    const leetcodeUrl = 'https://leetcode.com/Priyanshu085/';
    const linkedinUrl = 'https://www.linkedin.com/in/priyanshu085/';
    const githubUrl = 'https://github.com/Priyanshu085';
    const googleDevUrl = 'https://g.dev/priyanshu085';
    const gitlabUrl = 'https://gitlab.com/Priyanshu085';

    const leetcode = "Leetcode";
    const linkedin = "LinkedIn"
    const github = "GitHub";
    const gitlab = "GitLab";
    const google = "Google";

    return (
      <section>
        <div className=' mt-16 flex md:flex-row flex-col-reverse '>
            <div className='col-span-7 place-self-center text-center sm:text-left font-extrabold sm:flex-row-reverse'>
                {/* <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl text-extrabold'> */}
                <h2 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold">
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
                        'M L Engineer',
                        1000,
                        'Prompt Engineer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h2>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'> 
                Adaptable Engineering student skilled in Python, MERN stack, and front-end technologies. 
                Expanding expertise in Generative AI, seeking to innovate in tech solutions.
                </p>
                <div>
                {/* <button className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-[#f1f1f1]">Hover me !
                    <div className='background'></div>
                </button>        */}
                    {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-black hover:bg-slate-200'>Hire Me</button> */}
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent text-white border border-white mt-3 hover:bg-slate-700' onClick={downloadResume}>
                        Checkout My CV
                    </button>
                </div>
                {/* Social Links Section */}


            </div>
            <div className='col-span-5 mt-4 pl-8 lg:mt-0'>
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
            <div className='w-full mt-4 grid grid-cols-5  border-white rounded-lg text-white flex-col border-2
                            md:grid-cols-2 md:text-left
            '>
                <SocialLink url={leetcodeUrl} icon={leetcode} />
                <SocialLink url={linkedinUrl} icon={linkedin} />
                <SocialLink url={githubUrl} icon={github} />
                <SocialLink url={googleDevUrl} icon={google}/>
                <SocialLink url={gitlabUrl} icon={gitlab}/>
                {/* <SocialLink url={unstopurl} icon={unstop} /> */}
            </div>
      </section>
  )
}

export default HeroSection;
