import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ProjectProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  FaTools,
  FaTags,
  FaClock,
  FaExclamationCircle,
  FaGithub,
} from "react-icons/fa";
import { Crosshair, LucideView, PanelBottomClose } from "lucide-react";
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
            <div className="fixed inset-0 bg-black/75 bg-opacity-25" />
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
                  className="relative bg-gray-900 border-2 md:m-0 m-5 md:w-[1200px] max-h-[90vh] h-[90vh] md:h-fit overflow-y-auto transform rounded-2xl 
              p-6 text-left shadow-2xl transition-all flex flex-col gap-5"
                >
                  <button
                    type="button"
                    className="absolute top-0 right-0 z-20 w-fit p-2 bg-white hover:primary-bg rounded-full"
                    onClick={closeModal}
                  >
                    <PanelBottomClose
                      width={20}
                      height={20}
                      className="bg-black"
                    />
                  </button>

                  <div className="flex lg:flex-row flex-col">
                    <div className="flex-1 flex flex-col gap-3 mr-5 py-5 md:h-fit h-[800px] ">
                      {/* Section 01 */}
                      <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-semibold text-4xl capitalize">
                          {project.title}
                        </h2>
                      </div>
                      <div className="relative self-center md:w-[500px] md:h-72 h-32 w-[250px] place-self-center bg-transparent bg-no-repeat bg-cover bg-center rounded-lg">
                        <Image
                          src={project.imgUrl || "/images/no-preview.png"}
                          alt="project-image"
                          fill
                          priority
                          className="object-contain md:w-fit md:h-fit h-10 w-[150px] self-center sm:w-fit hover:cursor-pointer rounded-lg"
                        />
                      </div>
                      {/* Tech Stack */}
                      <div className="mt-3">
                          <div className="my-2">
                            <p className="text-xl">
                              <FaTools className="inline-block text-white mr-2" />
                              <span className="font-bold">
                                Technologies Used:
                              </span>
                              <br />
                            </p>
                            <span className="mt-5 ml-7">
                              {project.techStack.map((tech, index) => (
                                <span
                                  key={index}
                                  className="inline-block text-accent bg-zinc-950 px-2 py-1 my-2 rounded-full mr-5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </span>
                          </div>
                        </div>
                      <div className="flex grid-cols-3  gap-8 mt-5 ">
                        <Link
                          href={
                            !project.gitUrl
                              ? `https://github.com/Priyanshux085/${project.title}`
                              : project.gitUrl
                          }
                          className="w-fit text-right text-white border-2 primary-bd
                          hover:bg-[#166466] rounded-full hover:transition-all hover:duration-300 hover:font-semibold
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
                            className="w-fit border-2 text-white primary-bd rounded-full 
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
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="primary-bd border-2 mt-5 md:mt-0 p-5 rounded-lg  py-5 w-full h-full text-white font-semibold">
                        {/* Project Description */}
                        <div>
                          <h2 className="text-2xl underline primary mb-2">
                            Description:
                          </h2>
                          <p className="text-accent">{project.description}</p>
                        </div>

                        {/* Challenges Encountered */}
                        <div className='mt-3'>
                          <div>
                            <p className='text-xl'>
                              <FaExclamationCircle className='inline-block mr-2' />
                              <span className='font-bold'>Challenges Encountered:</span>
                            </p>  
                            <span>
                              <Accordion type='single' collapsible>
                              {project.challengesFaced.map((challenge, index) => (
                                <AccordionItem key={index} value={"c-"+index}>
                                  <AccordionTrigger>
                                    {"Challenge "+index+":"}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    {challenge}
                                  </AccordionContent>
                                  </AccordionItem>
                              ))}
                              </Accordion>
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
