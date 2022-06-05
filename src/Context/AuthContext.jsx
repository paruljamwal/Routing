import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{

const [isAuth,setAuth]=useState(false)

const navigate=useNavigate()

const login=()=>{
    setAuth(true)
    navigate("/products")
}


const logout=()=>{
    setAuth(false)
    navigate("/")
}


const AuthToggle=()=>{
    if(isAuth){
        setAuth(false)
    }
    else{
        setAuth(true)
    }
}
    return(
        <AuthContext.Provider value={{isAuth,AuthToggle,login,logout}} >{children}</AuthContext.Provider>
    )
}