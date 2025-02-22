import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center my-20 py-12'
        initial={{opacity: 0.2, y: 100}}
        transition={{duration: 0.8}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
    >
        <h1 className='text-2xl sm:text-4xl text-primary font-semibold mb-2'>Customer testimonials</h1>
        <p className='text-4 text-gray3 mb-8'>What Our Users Are Saying</p>

        <div className='flex flex-wrap gap-6'>
            {testimonialsData.map((testimonial, index)=>(
                <div key={index} className='bg-white/20 p-12 shadow-md border border-zinc-200 hover:scale-[1.02] rounded-[8px] cursor-pointer w-80 m-auto transition-all duration-300'>
                    <div className='flex flex-col items-center'>
                        <img src={testimonial.image} alt="" className='w-14 rounded-full' />
                        <h2 className='text-[18px] text-headline font-semibold mt-3'>{testimonial.name}</h2>
                        <p className='text-[13px] text-headline2'>{testimonial.role}</p>
                        <div className='flex my-4 gap-1'>
                            {Array(testimonial.stars).fill().map((item, index)=>(
                                <img key={index} src={assets.rating_star} alt="" />
                            ))}
                        </div>
                        <p className='text-[16px] text-gray3 text-center'>{testimonial.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials