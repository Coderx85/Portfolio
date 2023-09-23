"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

interface DataMenu{
    title: string, 
    id: string,
    content: React.ReactNode
}

const Data_Item: DataMenu[] = [
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
            <Image src="/images/about-image.png" width={500} height={500} alt='About-image' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Hic eveniet quibusdam provident veniam nihil. 
                    Expedita nobis optio soluta quae deleniti quis libero consequuntur nam, minima minus unde iure, 
                    pariatur quaerat dicta voluptates consectetur, perspiciatis quo magnam? 
                    Expedita atque eveniet, est dolores et explicabo quisquam quam iure suscipit corrupti natus culpa ea similique neque id alias? 
                    Temporibus rerum repellat sint mollitia?
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
                    {/* <span>Education</span> */}
                    {/* <span>Experience</span> */}
                </div>
                <div className='mt-8'>{Data_Item.find((e) => e.id == tab)?.content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection