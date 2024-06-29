"use client"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stairs from './Stairs'

const StairTransition = () => {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathname}>
          <div className="fixed top-0 left-0 h-screen w-screen pointer-events-none z-40 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition