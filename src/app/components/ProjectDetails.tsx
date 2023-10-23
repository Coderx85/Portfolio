import React, { Fragment } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { ProjectCardProp } from '../../../types';
import Image from 'next/image';
import Link from 'next/link';

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
              <Dialog.Panel className='relative bg-slate-800 border-2 md:m-0 m-5 border-white w-[1200px] max-h-[90vh] overflow-y-auto transform rounded-2xl 
              p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-0 right-0 z-20 w-fit p-2 bg-white hover:bg-gray-700 rounded-full'
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

                <div className="flex md:flex-row flex-col">
                    <div className='flex-1 flex flex-col gap-3 mr-5 w-fit py-5 md:h-fit h-[800px] '>
                      <div className="flex-1 flex flex-col gap-2">
                        <h2 className='font-semibold text-white text-4xl capitalize'>
                          {project.title}
                        </h2>
                      </div>
                      <div className='relative self-center md:w-[500px] md:h-96 h-48 w-[350px] place-self-center bg-slate-700 bg-no-repeat bg-cover bg-center rounded-lg'>
                        <Image src={project.imgUrl} alt='project image' fill priority className='object-contain self-center sm:w-fit hover:cursor-pointer rounded-lg' />
                      </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex text-right md:justify-end justify-start gap-5 mr-5'>

                    <Link href={!project.gitUrl?`https://github.com/Priyanshu085/${project.title}`:project.gitUrl} 
                      className='w-fit text-right text-white border-2 border-white rounded-lg hover:bg-gray-700'
                      target='_blank'
                    >
                      <div className='flex gap-2 py-2 px-4 '>
                        <Image src="/social/github.svg" alt={'GitHub Logo'} height={20} width={20}/>
                        GitHub
                      </div>
                    </Link>
                     {project.previewUrl?(
                        <Link href={project.previewUrl} 
                          className='w-fit border-2 text-white border-white rounded-lg hover:bg-gray-700'
                          target='_blank'
                        >
                            <div className='flex gap-2 py-2 px-4'>
                              <Image src="/social/github.svg" alt={'GitHub Logo'} height={20} width={20}/>
                              Preview Link
                            </div>
                          </Link>
                        ) : (
                          <div></div>
                        )}                    
                    </div>
                      <div className='border-white border-2 mt-5 md:mt-0 p-5 rounded-lg min-w-[300px] w-full h-full text-white font-semibold'>
                        <h2 className='text-2xl underline text-white mb-2'>Description:</h2>
                        <p className='text-gray-400'>
                        {project.description} 
                        </p>
                        <p>
                        </p>
                      </div>
                    <div>
                    </div>
                  </div>


                <div>

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