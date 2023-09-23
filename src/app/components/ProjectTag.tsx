import React from 'react'
interface Tab{
  // onClick: React.MouseEventHandler<HTMLButtonElement>,
  onClick: (selectTab: string) => void;
  tag: string;
  isSelected: boolean,
}

const ProjectTag = ({onClick, tag, isSelected}: Tab) => {
  const activeButton = isSelected 
    ? "text-white bg-purple-500" 
    : "text-[#ADB7BE] border-slate-600";

  return (
    <button 
      className= {`${activeButton} rounded-full border-2 border-purple-500 px-5 py-3 text-xl cursor-pointer`} 
      onClick={() => onClick(tag)}>
      {tag}
    </button>          
  )
}

export default ProjectTag