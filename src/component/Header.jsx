import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
   
  const onClickHandler = ()=> {
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    
    <motion.div className='flex flex-col justify-center items-center my-20'
      initial={{opacity: 0.2, y: 100}}
      transition={{duration: 0.8}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
    >
        <motion.div className='flex justify-center items-center gap-2 text-center text-gray2 bg-white py-2 px-6 rounded-full border border-neutral-400'
         initial={{opacity: 0, y: -20}}
         animate={{opacity: 1, y: 0}}
         transition={{delay: 0.2, duration: 0.8}}
        >
            <p className='text-[15px]'>Best text to image generator</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>

        <motion.h1 className='text-6xl max-w-[300px] leading-[80px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='bg-gradient-to-r from-gradiant1 to-gradiant2 text-transparent bg-clip-text'
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 0.4, duration: 2}}
        >image</span>, in seconds.</motion.h1>

        <motion.p className='text-[16px] text-gray mt-4 max-w-[500px] text-center'
         initial={{opacity: 0, y: 20}}
         animate={{opacity: 1, y: 0}}
         transition={{delay: 0.6, duration: 0.8}}
        >Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</motion.p>

        <motion.button onClick={onClickHandler} className='flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-3 rounded-full cursor-pointer'
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ default: {duration: 0.5}, opacity: {delay: 0.8 , duration: 1}}}
        >Generate Images
          <img src={assets.star_group} alt="" className='h-7'/>
        </motion.button>

        <motion.div className='flex flex-wrap gap-3 justify-center mt-16'
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 1, duration: 1}}
        >
            {Array(6).fill('').map((item, index)=>(
              <motion.img className='max-sm:w-10 rounded hover:scale-105 transition-all duration-300 cursor-pointer'
              whileHover={{scale: 1.05, duration: 0.1}} 
              src={index % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2} 
              alt="" key={index} width={70} />
            ))}
        </motion.div>

        <motion.p className='text-[15px] text-gray text-center mt-3'
         initial={{opacity: 0}}
         animate={{opacity: 1, y: 0}}
         transition={{delay: 1.2, duration: 0.8}}
        >Generated images from imagify</motion.p>
    </motion.div>
  )
}

export default Header