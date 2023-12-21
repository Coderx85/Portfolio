import React, { Fragment } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { ProjectCardProp } from '../../../types';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaTags, FaClock, FaExclamationCircle, FaLightbulb } from 'react-icons/fa';

interface ProjectDetailsProps{
  project: ProjectCardProp;
  isOpen: boolean;
  closeModal: () => void;
}

const ProjectDetails = ({project, isOpen ,closeModal}: ProjectDetailsProps) => {

  return (
  <>
   <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-10'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto backdrop-blur-md'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative bg-black border-2 md:m-0 m-5 md:w-[1200px] max-h-[90vh] h-[90vh] md:h-fit overflow-y-auto transform rounded-2xl 
              p-6 text-left shadow-2xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-0 right-0 z-20 w-fit p-2 bg-white hover:primary-bg rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className="flex lg:flex-row flex-col">
                    <div className='flex-1 flex flex-col gap-3 mr-5 py-5 md:h-fit h-[800px] '>
                      <div className="flex-1 flex flex-col gap-2">
                        <h2 className='font-semibold primary text-4xl capitalize'>
                          {project.title}
                        </h2>
                      </div>
                      <div className='relative self-center md:w-[500px] md:h-96 h-32 w-[250px] place-self-center bg-slate-700 bg-no-repeat bg-cover bg-center rounded-lg'>
                        <Image src={project.imgUrl} alt='project-image' fill priority className='object-contain md:w-fit md:h-fit h-20 w-[150px] self-center sm:w-fit hover:cursor-pointer rounded-lg' />
                      </div>
                      <div className='flex grid-cols-3  gap-8 mt-5 '>
                    <Link href={!project.gitUrl?`https://github.com/Priyanshu085/${project.title}`:project.gitUrl} 
                      className='w-fit text-right text-white border-2 border-red-900 rounded-lg
                      hover:bg-[#166466]  hover:transition-all hover:duration-300 hover:font-semibold
                      hover:ease-in-out hover:transform hover:scale-105 hover:text-black'
                      target='_blank'
                    >
                      <div className='flex gap-2 py-2 px-4'>
                        <Image src="/social/github.svg" alt={'GitHub Logo'} height={20} width={20}/>
                        <p className='md:block hidden'>
                          GitHub Link                        
                        </p>
                      </div>
                    </Link>
                     {project.previewUrl?(
                        <Link href={project.previewUrl} 
                          className='w-fit border-2 text-white border-red-950 rounded-lg 
                            hover:bg-[#166466] hover:transition-all hover:duration-300 hover:font-semibold 
                              hover:ease-in-out hover:transform hover:scale-105 hover:text-black'
                          target='_blank'
                        >
                            <div className='flex gap-2 py-2 px-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path d="M19.5 6h-15v9h15V6z" />
                              <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z" clipRule="evenodd" />
                            </svg>
                            <p className='md:block hidden'>
                              Preview Link
                            </p>
                            </div>
                          </Link>
                        ) : (
                          <div></div>
                        )}                    
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>                    
                      <div className='primary-bd border-2 mt-5 md:mt-0 p-5 rounded-lg  py-5 w-full h-full text-white font-semibold'>
                        {/* Project Description */}
                        <div>
                          <h2 className='text-2xl underline primary mb-2'>Description:</h2>
                          <p className='text-gray-400'>
                            {project.description} 
                          </p>
                        </div>
                      
                        {/* Project Type */}
                        <div className='mt-3'>
                          <p className='text-xl mt-3'>
                            <FaTags className='inline-block mr-2' />
                            Project Type: 
                          <span className='text-xl font-semibold primary'> {project.contributionType}</span>
                          </p>
                        </div>

                        {/* Duration */}
                        <div className='mt-5'>
                          <p className='text-xl mt-3'>
                            <FaClock className='inline-block mr-2' />
                            Duration: 
                            <span className='text-xl font-bold primary'> {project.duration}</span>
                          </p>
                        </div>
                        
                        {/* Tech Stack */}
                        <div className='mt-3'>
                        <div className='my-2'>
                          <p className='text-xl'>
                            <FaTools className='inline-block text-white mr-2' />
                            <span className='text-white font-bold'>Technologies Used:</span><br/>
                          </p>
                          <span className='mt-5 ml-7'>
                            {project.techStack.map((tech, index) => (
                              <span key={index} className='inline-block bg-gray-200 primary px-2 py-1 my-2 rounded-full mr-5'>
                                {tech}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>

                      {/* Challenges Encountered */}
                        <div className='mt-3'>
                          <div>
                            <p className='text-xl'>
                              <FaExclamationCircle className='inline-block mr-2' />
                              <span className='text-white font-bold'>Challenges Encountered:</span>
                            </p>  
                            <span>
                              {project.challengesFaced.map((challenge, index) => (
                                <ul key={index}>
                                  <li  className='inline-block primary-bg text-red-950 p-2 my-1 rounded-lg ml-5 mr-2'>
                                    {challenge}
                                  </li>
                                </ul>
                              ))}
                            </span>
                          </div>
                        </div>

                        {/* Lessons Learned */}
                        {/* <div>
                          <p className='text-xl mt-3'>
                            <FaLightbulb className='inline-block text-gray-500 mr-2' />
                            What I Learned
                          </p>

                          <p className='my-2'>
                            {project.lessonsLearned.map((lesson, index) => (
                              <span key={index} className='text-gray-500'>{lesson} | </span>
                            ))}
                          </p>
                        </div> */}


                      <div>
                    </div>
                  </div>
                <div>

                </div>
                </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
  )
}

export default ProjectDetails