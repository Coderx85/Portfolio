"use client"
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I can build a website for you using the latest technologies and frameworks.",
  },
  {
    num: "02",
    title: "Mobile Development",
    description: "I can build a mobile app for you using the latest technologies and frameworks.",
  },
  {
    num: "03",
    title: "SEO",
    description: "I can help you rank your website on the first page of Google.",
  },
  {
    num: "04",
    title: "Social Media Marketing",
    description: "I can help you grow your business on social media.",
  }
]

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
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  <Link href={service.title}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>
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