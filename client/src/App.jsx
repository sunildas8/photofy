import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Login from './component/Login'
import { AppContext } from './context/Appcontext'
import { ToastContainer } from 'react-toastify';


const App = () => {
  
  const { showLogin } = useContext(AppContext);
  
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='top-right'/>
      <Navbar/>
        {showLogin && <Login/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy' element={<BuyCredit/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App