import React from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact />, description: 'Proficient in building dynamic web applications using React.' },
  { name: 'Node.js', icon: <FaNodeJs />, description: 'Experienced in building scalable backend services with Node.js.' },
  { name: 'Python', icon: <FaPython />, description: 'Skilled in data analysis and machine learning with Python.' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-8 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card p-4 border rounded-lg text-center">
            <div className="text-6xl mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;