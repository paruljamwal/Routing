import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import pigg from '../assets/pigg.png'
const Products = () => {
    const [product,setProduct]=useState([]);
    const getData=async()=>{
     let res=await fetch(`http://localhost:8080/products`)
      let d=await res.json()
      setProduct(d)
    }

    useEffect(()=>{
       getData()
    },[])
    
    const navigate=useNavigate()

    const gotocart=(id)=>{
        if(id){
         alert("shopping shoping 😍");
         navigate(`/cart/${id}`)
        }
        else{
            alert("Please select any product 🤔 ");
        }
        
    }
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr",marginTop:"10px"}}>
        {product.map((e)=>(
            <div >
                <div key={e.id}>
                    <Link to={`product/${e.id}`}>
                    <img style={{height:"300px", cursor:"pointer"}} src={e.image} />
                    </Link>
               </div>
               <div>

               <h4>{e.name}</h4> 
                <p>Price:{e.price}</p>
                <button onClick={()=>gotocart(e.id)} style={{width:"220px",height:"40px",backgroundColor:"lightsalmon",cursor:"pointer",border:"none",marginBottom:"15px"}}>
                    <img style={{width:"40px"}} src={pigg} alt="" />
                    </button>
               </div>
            
            </div>
        ))}
    </div>
  )
}

export default Products