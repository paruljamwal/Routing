import { createContext,  useState } from "react";


export const Countcreate=createContext()

export const CountProvider=({children})=>{
 
const [count,setCount]=useState(0)

const counter=(details)=>{
    if(details>=0){

        setCount(details)
    }
}

 return (

     <Countcreate.Provider value={{counter,count,setCount}} >{children}</Countcreate.Provider>
 )

}