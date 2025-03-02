import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext()

const AppContextProvider = ({ children })=>{
    const [user,setUser] = useState(null)
    const [showLogin,setShowLogin] = useState(false)
    const [token,  setToken] = useState(localStorage.getItem('token'))
    
    const [credit,  setCredit] = useState(false)

    const backendurl = import.meta.env.VITE_BACKEND_URL

    const loadCreditstData = async () =>{

      try {
        const {data} = await axios.get(backendurl + '/api/user/credits', {headers: {token}})

        if (data.success) {
          setCredit(data.credit)
          setUser(data.user)
        }
      } catch (error) {
        console.log(error.message)
        toast.error(data.message)
      }
    }

    const logout = ()=>{
      localStorage.removeItem(token)
      setToken('')
      setUser(null)
    }

    useEffect(()=>{
      if (token) {
        loadCreditstData()
      }
    },[token])
    
    return (
        <AppContext.Provider value={{ user, setUser, showLogin, setShowLogin, backendurl, token,  setToken, credit,  setCredit, loadCreditstData, logout }}>
          {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider