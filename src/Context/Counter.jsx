import { createContext,  useState } from "react";


export const Countcreate=createContext()

export const CountProvider=({children})=>{
 
const [count,setCount]=useState(0)
const [bag,setBag]=useState([])
const arr=[]
const counter=(details)=>{
    if(details>=0){

        setCount(details)
    }
}

const addToBag=(item)=>{
  arr.push(item)
  setBag(arr)
}
 return (

     <Countcreate.Provider value={{counter,count,setCount,bag,addToBag}} >{children}</Countcreate.Provider>
 )

}