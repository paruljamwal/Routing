import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const {id} = useParams()

    const [product,setProduct]=useState({})

    const getData=()=>{
        if(id){
            fetch(`http://localhost:8080/products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProduct(d))
        }
    }

 useEffect(()=>{
     setProduct()
 },[id])
  return (
    <div>Cart
        <div>
        
        <div>
            <p>{product.name}</p>
            <img src={product.image}></img>
            <p>{product.price}</p>
            </div>
   
</div>
    </div>
  )
}

export default Cart