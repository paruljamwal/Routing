import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import price from '../assets/price.png'
import '../Style.css'
const Product = () => {

    const {id} = useParams()

    const [product,setProduct]=useState({})

    const navigate=useNavigate()

    const getData=()=>{
        if(id){
            fetch(`http://localhost:8080/products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProduct(d))
        }
    }
// console.log(id)
 useEffect(()=>{
     getData()
 },[id])
  const addToCart=(id)=>{
   navigate(`/cart/${id}`)
  }

  return (
    <div>
        
            <div>
                <div className='details'>
                    <div>
                <p>ProductName: {product.name}</p>
                <img className='pic' src={product.image}></img>
                <p>Price: {product.price}</p>
                <button onClick={()=>addToCart(product.id)} className='cart'>Cart</button>
                    </div>
                    <div className='cartdetail'>
                    <h2>Name:{product.name}</h2>
                    <p style={{color:"gray"}} >{product.details}</p>
                    <h3>Price:{product.price}</h3>
                    </div>
                </div>
                </div>
       
    </div>
  )
}

export default Product