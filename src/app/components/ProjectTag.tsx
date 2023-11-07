import React from 'react'
interface Tab{
  onClick: (selectTab: string) => void;
  tag: string;
  isSelected: boolean,
}

const ProjectTag = ({onClick, tag, isSelected}: Tab) => {
  const activeButton = isSelected 
  ? "text-white bg-gray-900" 
  : "text-[#ADB7BE] border-slate-600";

  return (
    <button 
      className= {`${activeButton} rounded-xl border-2 px-5 py-3 text-xl cursor-pointer`} 
      onClick={() => onClick(tag)}>
      {tag}
    </button>          
  )
}

export default ProjectTag