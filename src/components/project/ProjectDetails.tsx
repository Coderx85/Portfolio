import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ProjectProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  FaTools,
  FaExclamationCircle,
  FaGithub,
  FaXing,
} from "react-icons/fa";
import { LucideView, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
interface ProjectDetailsProps {
  project: ProjectProps;
  isOpen: boolean;
  closeModal: () => void;
}

const ProjectDetails = ({
  project,
  isOpen,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-10"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/5 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto backdrop-blur-md">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative bg-black border-2 rounded-xl md:m-0 m-5 md:w-[1200px] max-h-[90vh] h-[90vh] md:h-fit overflow-y-auto transform p-6 text-left shadow-2xl transition-all flex flex-col gap-5"
                >
                  <X className="absolute top-2 right-2 text-white rounded-full hover:text-black p-4 hover:cursor-pointer" onClick={closeModal} />

                  <div className="grid lg:grid-cols-2 flex-col">
                    <div className="flex-1 flex flex-col gap-3 mr-5 py-5 md:h-fit h-[800px] ">
                      {/* Section 01 */}
                      <div className="flex-1 flex flex-col gap-2 w-1/2">
                        <h2 className="font-extrabold text-7xl capitalize">
                          {project.title}
                        </h2>
                      </div>
                      <div className="relative md:w-[500px] md:h-72 h-32 w-[250px] bg-transparent bg-no-repeat bg-cover rounded-lg">
                        <Image
                          src={project.imgUrl || "/images/no-preview.png"}
                          alt="project-image"
                          fill
                          priority
                          className="object-contain md:w-fit md:h-fit h-10 w-[150px] sm:w-fit hover:cursor-pointer rounded-lg"
                        />
                      </div>

                      {/* Tech Stack */}
                      <div className="hidden md:block mt-3">
                        <p className="text-xl font-bold">
                          <FaTools className="inline-block text-white mr-2" /> Technologies Used:
                        </p>
                        <div className="flex justify-stretch flex-wrap gap-2 text-white">
                          {Object.entries(project.techStack).map(([name, Icon]) => 
                            <div key={name} className="flex items-center animate-pulse bg-primary/25 max-w-max p-2 gap-2 rounded-xs">
                              <Icon />
                              <span>{name}</span>
                            </div>
                            )}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex grid-cols-3 gap-8 mt-5 ">
                        <Link
                          href={
                            !project.gitUrl
                              ? `https://github.com/Priyanshux085/${project.title}`
                              : project.gitUrl
                          }
                          className="w-fit text-right text-white border-2 primary-bd hover:bg-[#166466] rounded-lg hover:transition-all hover:duration-300 hover:font-semibold
                          hover:ease-in-out hover:transform hover:scale-105 hover:text-black"
                          target="_blank"
                        >
                          <div className="flex gap-2 object-center my-2 px-4">
                            <FaGithub
                              className="content-center items-center"
                              height={20}
                              width={20}
                            />
                            <p className="md:block hidden">GitHub Link</p>
                          </div>
                        </Link>
                        {project.previewUrl ? (
                          <Link
                            href={project.previewUrl}
                            className="w-fit border-2 text-white primary-bd rounded-lg 
                                hover:bg-[#166466] hover:transition-all hover:duration-300 hover:font-semibold 
                                  hover:ease-in-out hover:transform hover:scale-105 hover:text-black"
                            target="_blank"
                          >
                            <div className="flex gap-2 py-2 px-4">
                              <LucideView
                                className="items-center"
                                height={20}
                                width={20}
                              />
                              <p className="md:block hidden">Preview Link</p>
                            </div>
                          </Link>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="primary-bd mt-5 md:mt-0 p-5 py-5 w-full h-full text-white font-semibold">
                        {/* Project Description */}
                        <div>
                          <h2 className="text-2xl underline primary mb-2">
                            Description:
                          </h2>
                          <p className="text-accent">{project.description}</p>
                        </div>

                        {/* Challenges Encountered */}
                        <div className='hidden md:block mt-3'>
                          <p className='text-xl'>
                            <FaExclamationCircle className='inline-block mr-2' />
                            <span className='font-bold'>Challenges Encountered:</span>
                          </p>  
                          <Accordion type='single' collapsible>
                          {project.challengesFaced.map((challenge, index) => (
                            <AccordionItem key={index} value={"c-"+index}>
                              <AccordionTrigger className="text-lg">
                                {index+1+"."+challenge.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                {challenge.solution}
                              </AccordionContent>
                              </AccordionItem>
                          ))}
                          </Accordion>
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

                        <div></div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectDetails;
