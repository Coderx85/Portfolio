import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ProjectProps } from "../types";
import Image from "next/image";
import Link from "next/link";
import { FaTools, FaExclamationCircle, FaGithub } from "react-icons/fa";
import { LucideView, SidebarClose, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { config } from "@/lib/config";

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
  const { username } = config;
  const { title, description, challengesFaced, techStack, previewUrl, gitUrl } =
    project;
  const projectImage = `https://opengraph.githubassets.com/1/${username}/${project.title}`;
  const projectImageAlt = `${title} project image`;
  // const silde = [{
  //   title: project.title,
  //   button: "View Project",
  //   src: projectImage,
  // },{
  //   title: project.title,
  //   button: "View Project",
  //   src: projectImage,
  // },{
  //   title: project.title,
  //   button: "View Project",
  //   src: projectImage,
  // }]
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
                <Dialog.Panel className="relative bg-gradient-to-br my-2 from-slate-800 via-slate-900 to-slate-800 border-2 rounded-xl md:m-0 m-5 md:w-[1200px] max-h-[90vh] h-[90vh] md:h-fit overflow-y-auto transform p-6 text-left shadow-2xl transition-all flex flex-col gap-5">
                  <X
                    className="absolute z-16 p-1.5 w-10 h-10 top-0 right-0 bg-white/25 hover:bg-black text-xl font-extrabold text-white hover:text-black hover:cursor-pointer"
                    onClick={closeModal}
                    stroke={"white"}
                    size={24}
                  />

                  <div className="grid lg:grid-cols-2 flex-col">
                    <div className="flex-1 flex flex-col gap-3 mr-5 py-5 md:h-fit h-[800px] ">
                      {/* Section 01 */}
                      <div className="flex-1 flex flex-col gap-2 w-1/2">
                        <h2 className="font-extrabold text-7xl capitalize">
                          {title}
                        </h2>
                      </div>
                      <div className="relative border-4 border-accent h-72 bg-transparent bg-no-repeat bg-cover rounded-lg overflow-hidden">
                        <Image src={projectImage} alt={projectImageAlt} fill />
                      </div>

                      {/* Tech Stack */}
                      <div className="hidden md:block mt-3">
                        <p className="text-xl font-bold">
                          <FaTools className="inline-block text-white mr-2" />{" "}
                          Technologies Used:
                        </p>
                        <div className="flex justify-stretch flex-wrap gap-2 text-white">
                          {Object.entries(techStack).map(
                            ([name, Icon]) => (
                              <div
                                key={name}
                                className="flex items-center animate-pulse bg-primary/25 max-w-max p-2 gap-2 rounded-xs"
                              >
                                <Icon />
                                <span>{name}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex grid-cols-3 gap-8 mt-5 ">
                        <Link
                          href={
                            !gitUrl
                              ? `https://github.com/${username}/${title}`
                              : gitUrl
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
                        {previewUrl ? (
                          <Link
                            href={previewUrl}
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
                          <p className="text-accent">{description}</p>
                        </div>

                        {/* Challenges Encountered */}
                        <div className="hidden md:block mt-3">
                          <p className="text-xl">
                            <FaExclamationCircle className="inline-block mr-2" />
                            <span className="font-bold">
                              Challenges Encountered:
                            </span>
                          </p>
                          <Accordion type="single" collapsible>
                            {challengesFaced.map((challenge, index) => (
                              <AccordionItem key={index} value={"c-" + index}>
                                <AccordionTrigger className="text-lg">
                                  {index + 1 + "." + challenge.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  {challenge.solution}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>

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
