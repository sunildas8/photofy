import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} alt="" className='w-30 sm:w-36 lg:w-42 pr-6' />
        <p className='flex-1 border-l border-gray-400 pl-8 text-[16px] text-gray3 max-sm:hidden'>All right reserved. Copyright @imagify</p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer