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
              <Dialog.Panel className='relative bg-gray-800 w-[1200px] max-h-[90vh] overflow-y-auto transform rounded-2xl 
              p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-0 right-0 z-10 w-fit p-2 bg-white hover:bg-primary rounded-full'
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

                <div className="flex md:flex-row">
                    <div className='flex-1 flex flex-col gap-3 mr-5 w-fit h-fit'>
                      <div className="flex-1 flex flex-col gap-2">
                        <h2 className='font-semibold text-white text-xl capitalize'>
                          {project.title}
                        </h2>
                      </div>
                      <div className='relative w-[700px] h-80 bg-gray-500 bg-no-repeat bg-cover bg-center rounded-3xl'>
                        <Image src={project.imgUrl} alt='car model' fill priority className='object-contain rounded-2xl' />
                      </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex text-right justify-end gap-5'>

                    <Link href={!project.gitUrl?`https://github.com/Priyanshu085/${project.title}`:project.gitUrl} 
                      className='w-fit text-right border-2 border-white rounded-lg hover:bg-gray-700'
                      target='_blank'
                    >
                      <div className='flex gap-2 p-2'>
                        <Image src="/social/github.svg" alt={'GitHub Logo'} height={20} width={20}/>
                        GitHub
                      </div>
                    </Link>
                     {project.previewUrl?(
                        <Link href={project.previewUrl} 
                          className='w-fit border-2 border-white rounded-lg hover:bg-gray-700'
                          target='_blank'
                        >
                            <div className='flex gap-2 p-2'>
                              <Image src="/social/github.svg" alt={'GitHub Logo'} height={20} width={20}/>
                              Preview Link
                            </div>
                          </Link>
                        ) : (
                          <div></div>
                        )}                    
                    </div>
                      <div className='border-white border-2 p-5 rounded-lg min-w-[400px] w-full h-full text-white font-semibold'>
                        <p>
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