import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center my-24 p-6 md:px-28'
      initial={{opacity: 0.2, y: 100}}
      transition={{duration: 0.8}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
    >
        <h1 className='text-3xl sm:text-4xl text-primary font-semibold mb-2'>Create AI Images</h1>
        <p className='text-4 text-gray3 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:flex-row md:gap-14 items-center justify-center w-[79%]'>
            <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt="" />
            <div>
                <h2 className='text-[28px] text-headline max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-gray3 mb-4'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className='text-gray3'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description