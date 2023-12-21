import React from 'react'
interface Tab{
  onClick: (selectTab: string) => void;
  tag: string;
  name: string;
  isSelected: boolean,
}

const ProjectTag = ({onClick, tag, isSelected, name}: Tab) => {
  const activeButton = isSelected 
  ? "primary-bg border-2 border-white font-bold text-black scale-105" 
  : "text-gray-500 border-2 ";

  return (
    <button 
      className= 
      {`${activeButton} rounded-xl border-2 px-5 py-3 text-xl cursor-pointer  
      hover:bg-[#166466] hover:text-black transform hover:scale-105 transition duration-300 ease-in-out
      `} 
      onClick={() => onClick(tag)}>
      {name}
    </button>          
  )
}

export default ProjectTag