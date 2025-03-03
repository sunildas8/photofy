import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/Appcontext'

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) =>{
      e.preventDefault()
      setLoading(true)
      
      if (input) {
        const image = await generateImage(input)

        if (image) {
          setIsImageLoaded(input)
          setImage(image)
        }
      }
      setLoading(false)
  }

  return (
    <motion.form onSubmit={onSubmitHandler} className='flex flex-col justify-center items-center min-h-[90vh]'
      initial={{opacity: 0.2, y: 100}}
      transition={{duration: 0.8}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
    > 
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded'/>
          <span className={`absolute bottom-0 left-0 ${loading ? 'bg-green h-1 w-full transition-all duration-[10s]' : 'w-0'}`}/>
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading.....</p>
     </div>

      {!isImageLoaded && 
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent placeholder-color outline-none ml-8 max-sm:w-20'/>
          <button type='submit' className='bg-zinc-900 px-10 py-3 sm:px-16 rounded-full text-white cursor-pointer'>Generate</button>
        </div>
      }
    
      {isImageLoaded && 
        <div className='flex flex-wrap justify-center gap-2 text-white text-sm p-0.5 mt-10 rounded-full'>
          <p onClick={((e)=>{e.preventDefault(), setIsImageLoaded(false)})} className='bg-transparent text-black border border-zinc-900 px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full'>Download</a>
        </div>
      }

    </motion.form>
  )
}

export default Result