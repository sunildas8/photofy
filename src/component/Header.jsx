import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20 '>
        <div className='flex justify-center items-center gap-2 text-center text-gray2 bg-white py-2 px-6 rounded-full border border-neutral-400'>
            <p className='text-[15px]'>Best text to image generator</p>
            <img src={assets.star_icon} alt="" />
        </div>

        <h1 className='text-[80px] max-w-[300px] leading-[80px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='bg-gradient-to-r from-gradiant1 to-gradiant2 text-transparent bg-clip-text'>image</span>, in seconds.</h1>

        <p className='text-[16px] text-gray mt-4 w-[500px] text-center'>Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</p>

        <button className='flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-3 rounded-full'>Generate Images
          <img className='h-7' src={assets.star_group} alt="" />
        </button>

        <div className='flex flex-wrap gap-3 justify-center mt-16'>
            {Array(6).fill('').map((item, index)=>(
              <img className='max-sm:w-10 rounded hover:scale-105 transition-all duration-300 cursor-pointer' 
              src={index % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2} 
              alt="" key={index} width={70} />
            ))}
        </div>

        <p className='text-[15px] text-gray text-center mt-3'>Generated images from imagify</p>
    </div>
  )
}

export default Header