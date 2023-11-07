"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { DataMenuProps } from '../../../types'

const Data_Item: DataMenuProps[] = [
    {
        title: "skills",
        id: "skills",
        content: (
                <ul className='list-disc pl-2'>
                    <li>TypesScript</li>
                    <li>Next JS</li>
                </ul>
        ),
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>B-Tech Computer Science</li>
                <li>Intermediate</li>
            </ul>
        ),
    },
    {
        title: "experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Comapass Ambassador @IIT_Delhi_Rendezous</li>
                <li>Hackathon Team Leader @Hack_BVP5.0</li>
            </ul>
        ),  
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Generative AI [GoogleSkill Boost]</li>
                <li>DevOps Fundamentals [Udemy]</li>
            </ul>
        ),
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition (() => {
            setTab(id);
        });
    }; 

    return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <Image src="/images/about-image.png" id='about' width={500} height={500} alt='About-image' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p>
                Hey there! I'm Priyanshu, a 3rd year engineering student with a focus on Data Science. Proficient in Python, MERN stack, and front-end technologies, I've embarked on a journey to create impactful tech solutions.  From a Book Recommendation System to a Quora clone, I've delved into full-stack web development, blending creativity with code. Currently, I'm diving into Generative AI and Prompt Engineering, aiming to fuse these technologies into innovative projects.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab == "skills"} 
                    >{" "}
                        Skills{" "}
                    </TabButton>
                    
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab == "education"} 
                    >{" "}
                        Education{" "}
                    </TabButton>
                    
                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab == "experience"} 
                    >{" "}
                        Experience{" "}
                    </TabButton>

                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab == "certifications"} 
                    >{" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{Data_Item.find((e) => e.id == tab)?.content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection