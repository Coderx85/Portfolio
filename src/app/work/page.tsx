"use client"
import ProjectSection from '@/components/project/ProjectSection'
import { motion } from 'framer-motion'
import React from 'react'

const WorkPage = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition:{ delay: 2.4, duration: 0.5, ease: 'easeIn'} 
      }}
      className='container mx-auto'
    >
      <ProjectSection />
    </motion.section>
  )
}

export default WorkPage