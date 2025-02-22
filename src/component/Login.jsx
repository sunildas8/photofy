import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Appcontext'
import { motion } from "motion/react"

const Login = () => {

   const [state, setState] = useState('Login')
   const {setShowLogin} = useContext(AppContext)

   useEffect(()=>{
        document.body.style.overflow = 'hidden';
        
        return () =>{
            document.body.style.overflow = 'unset';
        }
   },[])

  return (
    <div className='fixed bg-black/30 backdrop-blur-sm top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10'>
        <motion.form className='relative bg-white rounded-[15px] p-10 text-slate-500'
         initial={{opacity: 0.2, y: 50}}
         transition={{duration: 0.3}}
         whileInView={{opacity: 1, y: 0}}
         viewport={{once: true}}
        >

           <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer'/>

            <h1 className='text-[28px] text-center mb-1 text-neutral-700 font-medium'>{state}</h1>
            <p className='text-[14px] mb-10 text-center'>Welcome back! Please sign in to continue</p>

            {state !== 'Login' && <div className='border border-zinc-300 flex items-center gap-2 px-6 py-2 rounded-full mt-5'>
                <img src="../../public/user_icon.svg" alt="" />
                <input type="text" placeholder='Full name' required className='text-[14px] outline-none'/>
            </div>}
            <div className='border border-zinc-300 flex items-center gap-2 px-6 py-2 rounded-full mt-5'>
                <img src={assets.email_icon} alt="" />
                <input type="email" placeholder='Email id' required className='text-[14px] outline-none'/>
            </div>
            <div className='border border-zinc-300 flex items-center gap-2 px-6 py-2 rounded-full mt-5'>
                <img src={assets.lock_icon} alt=""/>
                <input type="password" placeholder='Password' required className='text-[14px] outline-none'/>
            </div>

            <p className='text-[14px] text-green my-4 hover:underline cursor-pointer'>Forgot password?</p>

            <button className='bg-gradient-to-r from-btn-gradiant2 to-btn-gradiant1 text-sm w-full text-zinc-600 py-2 rounded-full cursor-pointer'>{state === 'Login' ? 'Login' : 'Create a account'}</button>

            {state === 'Login' 
             ? 
            <p className='text-[14px] text-center mt-5'>Don’t have an account?
                <span className='text-green ml-1 hover:underline cursor-pointer' onClick={()=>setState('Sing Up')}>Sing Up</span>
           </p>
            :
            <p className='text-[14px] text-center mt-5'>Already have an account?
                <span className='text-green ml-1 hover:underline cursor-pointer' onClick={()=>setState('Login')}>Login</span>
           </p>}
        </motion.form>
    </div>
  )
}

export default Login