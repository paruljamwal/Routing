import React from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/home.gif'
import info from "../assets/information.png"
import greek from '../assets/greek.gif'
import price from '../assets/price.png'
import rec from '../assets/recycling.png'
import troly from '../assets/trolley.png'
const Navbar = () => {
  return (
    <div style={{height:"70px", backgroundColor:"lightblue",position:'static',cursor:"pointer"}}>
        <div style={{display:"flex",gap:"10%",fontWeight:"bolder",cursor:"pointer",paddingTop:"20px", Decoration:"none"}}>
        <Link to="/user">
         <img src={greek} style={{width:"40px" , borderRadius:"15px" , marginLeft:"15px"}}></img>

        </Link>
         <div style={{marginLeft:"25%", display:"flex", gap:"30%"}}>

         <Link to="/">
         <img src={home} style={{width:"40px" , borderRadius:"15px" , marginLeft:"5px"}}></img>
         </Link>
        <Link to="/products">
        <img src={rec} style={{width:"40px" , borderRadius:"15px" , marginLeft:"5px"}} />
        </Link>
        <Link to="/About">
        <img src={info} style={{width:"40px" , borderRadius:"15px" , marginLeft:"5px"}} />
        </Link>
         </div>
        
        <Link to="/cart">
          <img src={troly} style={{width:"40px" , borderRadius:"15px" , marginLeft:"5px"}} />
        </Link>
         
        </div>
    </div>
  )
}

export default Navbar