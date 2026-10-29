import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TProject } from "@/types/resume";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Eye, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { getIconByName } from "@/utils/iconMapping";

interface ProjectDetailsProps {
  project: TProject;
  isOpen: boolean;
  closeModal: () => void;
}

/** Accept only well-formed http(s) URLs; bare strings like "fiverplus" never render as links. */
const sanitizeUrl = (url: string): string | null => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:"
      ? parsed.toString()
      : null;
  } catch {
    return null;
  }
};

const linkButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition-colors duration-300 hover:border-secondary/40 hover:bg-secondary/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a8385] [&_svg]:h-4 [&_svg]:w-4";

const ProjectDetails = ({
  project,
  isOpen,
  closeModal,
}: ProjectDetailsProps) => {
  const { title, description, challengesFaced, techStack, previewUrl, gitUrl } =
    project;

  const gitHref = sanitizeUrl(gitUrl);
  const previewHref = sanitizeUrl(previewUrl);
  const projectImageAlt = `${title} project screenshot`;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Dimmed, teal-tinted overlay — provides the panel's depth instead of a drop shadow */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-left">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="my-2 max-h-[90vh] w-full max-w-3xl transform overflow-y-auto rounded-2xl border border-white/10 bg-[rgba(15,23,42,0.85)] p-6 backdrop-blur-xl transition-all md:my-8 md:max-w-4xl">
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close details"
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/70 transition-colors duration-300 hover:border-secondary/40 hover:bg-secondary/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a8385]"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col gap-6">
                  {/* Title */}
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                      Project
                    </p>
                    <Dialog.Title
                      as="h2"
                      className="mt-1 text-3xl font-bold text-white md:text-4xl"
                    >
                      {title}
                    </Dialog.Title>
                  </div>

                  {/* Screenshot — only when the project actually has an image */}
                  {project.imgUrl ? (
                    <div className="relative h-64 overflow-hidden rounded-lg border border-white/10 md:h-80">
                      <Image
                        src={project.imgUrl}
                        alt={projectImageAlt}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  {/* Description */}
                  {description ? (
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                        Description
                      </p>
                      <p className="mt-2 text-white/80">{description}</p>
                    </div>
                  ) : null}

                  {/* Technologies */}
                  {Object.keys(techStack).length > 0 ? (
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                        Technologies
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {Object.entries(techStack).map(([name, iconName]) => {
                          const Icon = getIconByName(iconName);
                          return (
                            <div
                              key={name}
                              className="flex items-center gap-2 rounded-full border border-white/10 bg-secondary/10 px-3 py-1 text-xs text-white/80"
                            >
                              {Icon && <Icon className="text-white/70" />}
                              <span>{name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  {/* Challenges */}
                  {challengesFaced.length > 0 ? (
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                        Challenges
                      </p>
                      <Accordion type="single" collapsible className="mt-2">
                        {challengesFaced.map((challenge, index) => (
                          <AccordionItem key={index} value={"c-" + index}>
                            <AccordionTrigger className="text-sm">
                              {`${index + 1}. ${challenge.title}`}
                            </AccordionTrigger>
                            <AccordionContent className="text-white/80">
                              {challenge.solution}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ) : null}

                  {/* Links */}
                  {gitHref || previewHref ? (
                    <div className="flex flex-wrap gap-3">
                      {gitHref ? (
                        <a
                          href={gitHref}
                          target="_blank"
                          rel="noreferrer"
                          className={linkButtonClass}
                        >
                          <FaGithub />
                          Source Code
                        </a>
                      ) : null}
                      {previewHref ? (
                        <a
                          href={previewHref}
                          target="_blank"
                          rel="noreferrer"
                          className={linkButtonClass}
                        >
                          <Eye />
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectDetails;
