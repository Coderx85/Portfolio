"use client"
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { aboutData, experienceData } from '@/constants'
import { motion } from 'framer-motion'
import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiAppwrite, SiCplusplus, SiDocker, SiExpress, SiGit, SiMongodb, SiNextdotjs, SiPhp, SiSqlite, SiStreamlit, SiTensorflow } from 'react-icons/si'

const educationData = {
  title: 'education',
  description: 'I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).',
  items: [
    {
      title: 'B-Tech Computer Science',
      duration: '2021-25',
    },
    {
      title: 'Intermediate',
      duration: '2019-21',
    }
  ]
}

const skillsData = {
  title: 'skills',
  description: 'I am proficient in Python, MERN stack, and front-end technologies.',
  items: [
    {
      title: 'Next.js',
      icon: <SiNextdotjs />,
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
      title: 'Git',
      icon: <SiGit />,
      level: 'Intermediate'
    },
    {
      title: 'MongoDB',
      icon: <SiMongodb />,
      level: 'Intermediate'
    },
    {
      title: 'Express.js',
      icon: <SiExpress />,
      level: 'Intermediate'
    },
    {
      title: 'React',
      icon: <FaReact />,
      level: 'Intermediate'
    },
    {
      title: 'Node.js',
      icon: <FaNodeJs />,
      level: 'Intermediate'
    },
    {
      title: 'Sql',
      icon: <SiSqlite />,
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
    {
      title: 'JavaScript',
      icon: <FaJs />,
      level: 'Intermediate'
    },
    {
      title: 'php',
      icon: <SiPhp />,
      level: 'Intermediate'
    },
    {
      title: 'Docker',
      icon: <SiDocker />,
      level: 'Intermediate'        
    },
    {
      title: 'Appwrite',
      icon: <SiAppwrite />,
      level: 'Intermediate'
    },
    {
      title: 'Streamlit',
      icon: <SiStreamlit />,
      level: 'Intermediate'
    },
  ]  
}

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition:{ delay: 2.4, duration: 0.5, ease: 'easeIn'} 
      }}
      className='flex min-h-[80vh] justify-center py-12 xl:py-0 gap-[60px]'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue="experience"
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList 
            className='flex flex-col w-full max-w-[380px] gap-5 mx-auto xl:mx-0'
          >
            <TabsTrigger value='about' >About Me</TabsTrigger>
            <TabsTrigger value='experience' >Experience</TabsTrigger>
            <TabsTrigger value='education' >Education</TabsTrigger>
            <TabsTrigger value='skills' >Skills</TabsTrigger>      
          </TabsList>

          <div className="w-full min-h-[70vh]">
            <TabsContent 
              value='about' 
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='font-bold text-4xl capitalize'>
                  {aboutData.title}
                </h3> 
                <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                  {aboutData.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 max-w-[850px] gap-y-4 bg-primary gap-14 mx-auto xl:mx-0 border-accent border-4'>
                  {aboutData.info.map((item, index) => {
                    return (
                      <li 
                        key={index}
                        className='items-center flex justify-start gap-6 px-4 py-2'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-lg'>{item.fieldValue}</span>
                      </li>
                    )})}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-bold text-4xl capitalize'>
                  {experienceData.title}
                </h3>
                <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                  {experienceData.description}
                </p>
                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experienceData.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className='bg-primary items-center py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h4 className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left'>{item.title}</h4>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                          {/* <p>{item.description}</p> */}
                        </li>
                      )})}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-bold text-4xl capitalize'>
                  {educationData.title}
                </h3>
                <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                  {educationData.description}
                </p>
                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {educationData.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className='bg-primary items-center py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h4 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h4>
                        </li>
                      )})}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-bold text-4xl capitalize'>
                    {skillsData.title}
                  </h3>
                  <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                    {skillsData.description}
                  </p>
                </div>
                <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-[30px]'>
                  {skillsData.items.map((item, index) => {
                    return (
                      <li 
                        key={index}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-primary rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {item.icon}                                
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )})}
                </ul>
              </div>  
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumePage