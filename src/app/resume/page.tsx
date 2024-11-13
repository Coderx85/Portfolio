"use client"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { aboutData, educationData, experienceData } from '@/constants'
import { motion } from 'framer-motion'
import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiAppwrite, SiCplusplus, SiDocker, SiExpress, SiGit, SiGithub, SiGithubactions, SiGithubpages, SiMongodb, SiNextdotjs, SiPhp, SiSqlite, SiStreamlit, SiTypescript, SiVercel, SiVite } from 'react-icons/si'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const skillsData = {
  title: 'skills',
  description: 'I am proficient in Python, MERN stack, and front-end technologies.',
  items: [
    {
      section: 'Languages',
      techStack: [
        {
          title: 'TypeScript',
          icon: <SiTypescript />,
          level: 'Advanced'
        },
        {
          title: 'Python',
          icon: <FaPython />,
          level: 'Advanced'
        },
        {
          title: 'C++',
          icon: <SiCplusplus />,
          level: 'Intermediate'
        },
        {
          title: 'JavaScript',
          icon: <FaJs />,
          level: 'Intermediate'
        },
      ]
    },
    {
      section: 'Frontend Dev',
      techStack: [
        {
          title: 'Next.js',
          icon: <SiNextdotjs />,
          level: 'Advanced'
        },
        {
          title: 'Vite.js',
          icon: <SiVite />,
          level: 'Advanced'
        },
        {
          title: 'React.js',
          icon: <FaReact />,
          level: 'Intermediate'
        },
        {
          title: 'Html',
          icon: <FaHtml5 />,
          level: 'Advanced'
        },
        {
          title: 'Css',
          icon: <FaCss3 />,
          level: 'Advanced'
        },
      ]
    },
    {
      section: 'DevOps & VCS',
      techStack: [
        {
          title: 'Docker',
          icon: <SiDocker />,
          level: 'Intermediate'
        },
        {
          title: 'Git',
          icon: <SiGit />,
          level: 'Intermediate'
        },
        {
          title: 'Vercel',
          icon: <SiGithubactions />,
        },
        {
          title: 'Github',
          icon: <SiGithub />,
        }
      ]
    },
    {
      section: 'Backend Dev',
      techStack: [
        {
          title: 'Node.js',
          icon: <FaNodeJs />,
          level: 'Intermediate'
        },
        {
          title: 'Express.js',
          icon: <SiExpress />,
          level: 'Intermediate'
        },
        {
          title: 'Php',
          icon: <SiPhp />,
          level: 'Intermediate'
        },
      ]
    },
    {
      section: 'Database',
      techStack: [
        {
          title: 'MongoDB',
          icon: <SiMongodb />,
          level: 'Intermediate'
        },
        {
          title: 'Sql',
          icon: <SiSqlite />,
          level: 'Intermediate'
        },
        {
          title: 'Appwrite',
          icon: <SiAppwrite />,
          level: 'Intermediate'
        },
      ]
    },
    {
      section: 'Deployment',
      techStack: [
        {
          title: 'Streamlit',
          icon: <SiStreamlit />,
          level: 'Intermediate'
        },
        {
          title: 'Github Pages',
          icon: <SiGithubpages />,
          level: 'Intermediate'
        },
        {
          title: 'Vercel',
          Icon: <SiVercel />,
          level: 'Intermediate'
        },
      ]
    },
  ]
}

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: 'easeIn' }
      }}
      className='flex min-h-[80vh] justify-center py-12 xl:py-0 gap-[60px]'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue="experience"
          className='flex flex-col md:flex-row gap-[60px]'
        >
          <TabsList
            className='flex flex-col capitalize md:flex-nowrap w-full max-w-[380px] gap-5 mx-auto xl:mx-0'
          >
            <TabsTrigger value='about'>{aboutData.title}</TabsTrigger>
            <TabsTrigger value='experience'>{experienceData.title}</TabsTrigger>
            <TabsTrigger value='education'>{educationData.title}</TabsTrigger>
            <TabsTrigger value='skills'>{skillsData.title}</TabsTrigger>
          </TabsList>

          <div className="w-full min-h-[70vh]">
            {/* About Section */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                  {aboutData.title}
                </h3>
                <p className='max-w-[680px] break-all text-white/60 mx-auto xl:mx-0'>
                  {aboutData.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 max-w-[850px] gap-y-4 gap-14 mx-auto xl:mx-0'>
                  {/* About Section items */}
                  {aboutData.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='items-center flex justify-start gap-6 px-4 py-2'
                      >
                        <span className='text-accent/90 font-bold'>{item.fieldName}</span>
                        <span className='text-lg'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Experience Section */}
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                  {experienceData.title}
                </h3>
                {/* <p className='max-w-[680px] break-all text-white/60 mx-auto xl:mx-0'>
                  {experienceData.description}
                </p> */}
                <ScrollArea className='h-[480px]'>
                  {/* Experience items */}
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experienceData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-slate-900 items-center py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h4 className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left'>{item.title}</h4>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent-'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                          {/* <p>{item.description}</p> */}
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Section */}
            <TabsContent value="education">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                  {educationData.title}
                </h3>
                <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                  {educationData.description}
                </p>
                <ScrollArea className='h-[480px]'>
                  {/* Education items */}
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {educationData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-slate-900 items-center py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h4 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h4>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent value="skills">
              <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='font-bold text-outline space-x-1 tracking-[5px] text-transparent text-4xl uppercase border-white border-b-2 pb-2'>
                    {skillsData.title}
                  </h3>
                  {/* <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                    {skillsData.description}
                  </p> */}
                </div>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-[30px]'>
                  {skillsData.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                      >
                        <Card className='bg-slate-900'>
                          <CardHeader>
                            <CardTitle className='mx-auto text-accent text-left'>{item.section}</CardTitle>
                          </CardHeader>
                          <CardContent
                            className='mx-auto w-full'
                          >
                            <ul className={`grid ${(item.techStack.length % 2) ? 'grid-cols-3' : 'grid-cols-2'} gap-2 md:gap-[30px]`}>
                              {item.techStack.map((tech, index) => {
                                return (
                                  <li
                                    key={index}
                                    className={` items-center justify-between gap-2 mx-auto ${item.techStack.length === 5 && index > 2 ? 'col-span-1' : ''}`}
                                  >
                                    <TooltipProvider delayDuration={150}>
                                      <Tooltip>
                                        <TooltipTrigger className='w-full h-[50px] rounded-xl-row mx-auto flex justify-center items-center group'>
                                          <div className='text-4xl group-hover:text-accent transition-all duration-300'>
                                            {tech.icon}
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{tech.title}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </li>
                                )
                              })}
                            </ul>
                          </CardContent>
                        </Card>
                      </li>
                    )
                  })}
                </ul>
                {/* 
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-accent rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {item.icon}                                
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      */}
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumePage