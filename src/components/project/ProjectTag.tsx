import React from 'react'
interface Tab{
  onClick: (selectTab: string) => void;
  tag: string;
  name: string;
  isSelected: boolean,
}

const ProjectTag = ({onClick, tag, isSelected, name}: Tab) => {
  const activeButton = isSelected 
  ? "bg-accent border-2 border-gray-500 font-bold text-white scale-105" 
  : "text-gray-500 border-2 border-gray-500";

  return (
    <button 
      className= 
      {`${activeButton} rounded-xl border-2 px-5 py-3 text-md  cursor-pointer  
      hover:bg-accent hover:text-white transform hover:scale-105 transition duration-300 ease-in-out
      `} 
      onClick={() => onClick(tag)}>
      {name}
    </button>          
  )
}

export default ProjectTag