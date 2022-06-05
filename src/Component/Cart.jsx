import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import price from '../assets/price.png'

import '../Style.css'
const Cart = () => {

    const {id} = useParams()

    const [product,setProduct]=useState({})

    const [quantity,setQuantity]=useState(1)

    const [prices,setPrice]=useState(product.price)

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

 const checkout=()=>{
     navigate("/")
 }

 const handelremove=(id)=>{
     product.filter((e)=>e.id===id)
     setProduct("")
//      product.filter((e)=>
//      {
//             e.id !==id
        
//      })
   
     }
     console.log(prices)

    const handelquantity=(p,product)=>{
        setQuantity(quantity+p)
        if(p===+1){
         setPrice(product*2)
        }
        else{
            setPrice(prices-product)
        }
    }

  return (
    <div className='maincartbox'>

        <div>
            <h1>Shopping Cart</h1>
            <p>You have  <span>{quantity}</span> items in your cart</p>
            <div className='cartitems'>
                <div className='container'>
                    <div className='cartinfo'>
                        <div className='productimage'>
                            <img className='productimage' src={product.image} alt="" />
                        </div>
                        <div className='carttitle'>
                            <h4>{product.name}</h4>
                            <p style={{color: `${product.color}`}} >{product.color}</p>
                        </div>
                        <div className='quantity'>
                            <button disabled={quantity<=0} onClick={()=>handelquantity(-1,product.price)} >-</button> 
                            <input className='quabox' type="text" placeholder={quantity} />
                            <button onClick={()=>handelquantity(+1,product.price)} >+</button> 
                        </div>
                        <div className='cartprice'>
                            <h3>{prices}</h3>
                        </div>
                        <div className='remove' onClick={()=>handelremove(product.id)} ><button>remove</button></div>
                    </div>
                </div>
                <div className='cartTotal'>
                    <h4>Cart Total : <span>Rs. {prices}</span></h4>
                    <button onClick={checkout} className='checkout' >Checkout</button>
               
                </div>
            </div>

        </div>
        
            {/* <div>
                <div className='details'>
                    <div>
                <p>ProductName: {product.name}</p>
                <img className='pic' src={product.image}></img>
                <p>Price: {product.price}</p>
                <button  className='payment'>Payment</button>
                    </div>
                    <div className='detailbox' >
                       <select>
                         <option value="">1</option>
                       </select>
                    </div>
                </div>
                </div> */}
       
    </div>
  )
}

export default Cart