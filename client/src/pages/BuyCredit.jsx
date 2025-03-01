import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import { motion } from "motion/react"

const BuyCredit = () => {

   const {user} = useContext(AppContext)

  return (
    <motion.div className='min-h-[80vh] text-center mb-10 pt-14'
      initial={{opacity: 0.2, y: 100}}
      transition={{duration: 0.8}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
    >
       <button className='border border-gray-400 px-10 py-2 bg-zinc-100 rounded-full mb-6'>Our Plans</button>
       <h1 className='text-[35px] text-center font-medium mb-6 sm:mb-10'>Choose the plan</h1>

       <div className='flex flex-wrap justify-center text-gray5 gap-6 text-left'>
         {plans.map((item, index)=>(
           <div key={index} className='bg-white px-8 py-12 shadow-md border border-zinc-200 hover:scale-105 rounded-[10px] transition-all duration-500'>
              <img src={assets.logo_icon} alt=""/>
              <p className='mt-3 mb-1 font-medium'>{item.id}</p>
              <p className='text-[15px]'>{item.desc}</p>
              <p className='mt-6 text-[14px]'>
                <span className='text-[34px] font-medium'>${item.price} </span> / {item.credits} credits
              </p>
              <button className='w-full bg-primary text-white rounded-md py-2.5 mt-8 min-w-52 cursor-pointer'>{user ? 'Purchase' : 'Get started'}</button>
           </div>
         ))}
       </div>
    </motion.div>
  )
}

export default BuyCredit