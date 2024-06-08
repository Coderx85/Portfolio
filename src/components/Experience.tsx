import { Exp_Data } from '@/constants';
import { motion } from 'framer-motion';
import React from 'react';

const ExpSection = () => {
  const experiences = Exp_Data; 

  return (
    <section id="experience" className="py-8 px-4 bg-slate-700 border-[#166466] border-2 my-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">Experience</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#A7BBC7]"></div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index === 0 ? 'text-gray-700' : 'text-[#166466]'}`}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                {index === 0 ? (
                  <div className="w-6 h-6 rounded-full bg-[#166466]"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border-4 border-[#001F3F]"></div>
                )}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '500%' }}
                  transition={{ duration: 1 }}
                  className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${index === 0 ? 'bg-[#166466] left-full' : index % 2 === 0 ? 'left-full' : 'right-full'} h-1 bg-white`}
                ></motion.div>
              </div>
              <div className={`mt-8 md:mt-2 ml-12 p-6 border w-full md:w-1/3 rounded-lg shadow-lg bg-[#001F3F] ${index === 0 ? 'bg-[#001F3F] ml-auto mr-0' : index % 2 === 0 ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`}>
                <h3 className={`text-2xl font-semibold mb-2`}>{exp.title}</h3>
                <p className="text-xl mb-2">{exp.company}</p>
                <p className="text-gray-500 mb-4">{exp.duration}</p>
                <p>{exp.description}</p>
                <div className="project-highlights mt-4 hidden md:block">
                  {exp.projects && exp.projects.map((project, index) => (
                    <div key={index} className="project-highlight mb-2">
                      <h4 className="text-xl font-semibold">{project.name}</h4>
                      <p>{project.description}</p>
                      <a href={project.link} target="_blank" className="text-[#166466] hover:underline">View Project</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpSection;
