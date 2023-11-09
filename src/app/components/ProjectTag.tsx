import React from 'react'
interface Tab{
  onClick: (selectTab: string) => void;
  tag: string;
  name: string;
  isSelected: boolean,
}

const ProjectTag = ({onClick, tag, isSelected, name}: Tab) => {
  const activeButton = isSelected 
  ? "bg-white border-2 text-black font-bold" 
  : "text-white border-2 bg-gray-900";

  return (
    <button 
      className= {`${activeButton} rounded-xl border-2 px-5 py-3 text-xl cursor-pointer`} 
      onClick={() => onClick(tag)}>
      {name}
    </button>          
  )
}

export default ProjectTag