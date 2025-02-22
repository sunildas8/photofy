import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

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
    <motion.div className='pb-16 text-center'
      initial={{opacity: 0.2, y: 100}}
      transition={{duration: 0.8}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
    >
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-2 py-6 md:py-16'>See the magic. Try now</h1>
        <button onClick={onClickHandler} className='flex items-center gap-2 text-white bg-black m-auto px-12 py-3 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer'>Generate Images
            <img src={assets.star_group} alt="" className='h-6'/>
        </button>
    </motion.div>
  )
}

export default GenerateBtn