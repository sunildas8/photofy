import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-2 py-6 md:py-16'>See the magic. Try now</h1>
        <button className='flex items-center gap-2 text-white bg-black m-auto px-12 py-3 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer'>Generate Images
            <img src={assets.star_group} alt="" className='h-6'/>
        </button>
    </div>
  )
}

export default GenerateBtn