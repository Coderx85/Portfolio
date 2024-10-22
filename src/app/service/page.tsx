"use client"
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { services } from '@/constants'

const ServicePage = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 0.4, delay: 1, ease: 'easeIn'} 
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className='flex flex-col gap-6 group justify-center flex-1:'
              >
                <div className='w-full justify-between items-center flex'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link 
                    href={service.title}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center text-black hover:-rotate-45 hover:scale-110'
                  >
                    <BsArrowDownRight className='text-black fill-black text-3xl'/>
                  </Link>
                </div>
                <h2
                  className='text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ease-in-out'
                >{service.title}</h2>
                <p>{service.description}</p>
                <div className='border-b border-white/80 w-full'></div>
              </div>
          )})}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePage