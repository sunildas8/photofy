import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'

const Navbar = () => {

  const { user, setShowLogin } = useContext(AppContext);
    const nativgate = useNavigate()


  return (
    <div className='flex items-center justify-between py-4'>
        <Link to='/'>
           <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'/>
        </Link>

        <div>
            {user 
            ? 
             <div className='flex items-center gap-2 sm:gap-3'>
              <button onClick={()=>nativgate('/buy')} className='flex items-center gap-2 bg-gradient-to-r from-btn-gradiant1 to-btn-gradiant2 px-4 py-1.5 sm:px-6 sm:py-3 rounded-full hover:scale-105 duration-700 translate-all cursor-pointer'>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p className='text-xs sm:text-sm font-regular text-gray-600'>Credits left : 4</p>
              </button>
              <p className='text-gray-600 max-sm:hidden pl-4'>Hi! Sunil</p>
              <div className='relative group'>
                <img className='w-10 drop-shadow' src={assets.profile_icon} alt="" />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                    <ul className='list-none m-0 p-0 bg-white text-sm rounded-lg shadow-md'>
                      <li className='px-3 py-2 rounded-t-lg hover:bg-gray-200 duration-200 cursor-pointer pr-10'>Profile</li>
                      <li className='px-3 py-2 rounded-b-lg hover:bg-gray-200 duration-200 cursor-pointer pr-10'>Logout</li>
                    </ul>
                </div>
              </div>
             </div> 
            : 
             <div className='flex items-center gap-2 sm:gap-5'> 
                <p onClick={()=>nativgate('/buy')} className='text-primary cursor-pointer'>Pricing</p>
                <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer'>Login</button>
             </div>
            }
        </div>
    </div>
  )
}

export default Navbar