"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import SocialLink from './SocialLink';

const HeroSection = () => {

    const downloadResume = () => {
        const resumeUrl = 'https://drive.google.com/file/d/1z5roD52FEh0OJrl5HMivcbI8KEE2u2hj/view?usp=sharing';
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
    const emailUrl = 'mailto:abpriyanshu007@gmail.com';

    const leetcode = "Leetcode";
    const linkedin = "LinkedIn"
    const github = "GitHub";
    const gitlab = "GitLab";
    const google = "Google";
    const email = "Email";

    return (
      <section>
        <div className='mt-12 xs:mx-auto'>
            <div className='flex md:flex-row flex-col-reverse sm:px-5 xs:justify-center'>
                <div className='flex justify-start items-start sm:text-left font-extrabold'>
                    {/* <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl text-extrabold'> */}
                    <div className='inline-flex float-left flex-col justify-center items-center mx-2'>
                        <div className='w-5 h-5 rounded-full bg-[#ff0000]'/>
                        <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#ff0000] '/>
                    </div>
                    <div className='float-right flex-row '>
                        <h2 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hello, Priyanshu here
                            <br/>
                            <span className="text-[#ff0000] bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-600 ">
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
                        <p className='text-[#ADB7BE] text-start text-base sm:text-lg mb-6 lg:text-xl'> 
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

                    </div>

                </div>

                {/* Image Scetion */}
                <div className='col-span-5 justify-center self-center'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] sm:w-[500px] sm:h-[500px] relative'>
                        <Image 
                            src = "/images/hero-image.png"
                            alt = 'Hero Image'
                            className = 'absolute justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-[500px] '
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
                
        {/* Social Links Section */}
            <div className='w-full mt-4 grid grid-cols-5  border-white rounded-lg text-white flex-col border-2
                            md:grid-cols-2 md:text-left
            '>
                <SocialLink url={leetcodeUrl} icon={leetcode} />
                <SocialLink url={linkedinUrl} icon={linkedin} />
                <SocialLink url={githubUrl} icon={github} />
                <SocialLink url={googleDevUrl} icon={google}/>
                <SocialLink url={gitlabUrl} icon={gitlab}/>
                <SocialLink url={emailUrl} icon={email} />
            </div>
      </section>
  )
}

export default HeroSection;
