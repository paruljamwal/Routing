import React, {  useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pigg from "../assets/pigg.png";
import { Countcreate } from "../Context/Counter";
import del from '../assets/trash-bin.png'
import './Style.css'
const Products = () => {
  const [product, setProduct] = useState([]);
  
  const [page,setPage]=useState(1)

   const [limit,setLimit]=useState(3)

   const [add,setAdd]=useState([])

const handelpage=(p)=>{
  setPage(page+p)
}

  const getData = async () => {
    let res = await fetch(`http://localhost:8080/products/?_page=${page}&_limit=${limit}`);
    let d = await res.json();
    setProduct(d);
  };

  useEffect(() => {
    getData();
  }, [page]);

   
  const navigate = useNavigate();
  const {counter,count}=useContext(Countcreate)
  const bag=[]
  const gotocart = (id) => {
    bag.push(id)
    setAdd(bag)
    counter(count+1)
    navigate(`/cart/${id}`)
  };
console.log(add+"Add")
  const handelremove=()=>{
   
      counter(count-1)
    
  }


  
  //price filter------------------->

  const handleprice=(e)=>{
    if(e.target.value==="low"){
       const data=[...product].sort((a,b)=>{
         return a.price-b.price;
       });
       setProduct(data)
    }
    if(e.target.value==="high"){
      const data=[...product].sort((a,b)=>{
        return b.price-a.price;
      })
      setProduct(data)
    }

  }

  // color filter--------------------->

  const handlecolor=(e)=>{
    if(e.target.value==='pink'){
      const data=product.filter((col)=>{
       if(col.color==="pink"){
         return col
       }
      })
      setProduct(data)
    }
   else if(e.target.value==='white'){
      const data=product.filter((col)=>{
       if(col.color==="white"){
         return col
       }
      })
      setProduct(data)
    }
   else if(e.target.value==='yellow'){
      const data=product.filter((col)=>{
       if(col.color==="yellow"){
         return col
       }
      })
      setProduct(data)
    }
    else if(e.target.value==='red'){
      const data=product.filter((col)=>{
       if(col.color==="red"){
         return col
       }
      })
      setProduct(data)
    }
    else if(e.target.value==='mehandi'){
      const data=product.filter((col)=>{
       if(col.color==="mehandi"){
         return col
       }
      })
      setProduct(data)
    }

    else if(e.target.value==='skyblue'){
      const data=product.filter((col)=>{
       if(col.color==="skyblue"){
         return col
       }
      })
      setProduct(data)
    }
  }
  return (
    
    <>
    <div>
      <select onChange={handleprice} >
        <option>---Price---</option>
        <option value='low' >Low</option>
        <option value='high' >High</option>
      </select>

      <select onChange={handlecolor}>
        <option>----Color----</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="skyblue">Skyblue</option>
        <option value="white">White</option>
        <option value="mehandi">Mehandi</option>
      </select>

      <div>
        <button disabled={page==1} onClick={()=>handelpage(-1)}>prev</button>
        <button onClick={()=>handelpage(+1)} > next</button>
      </div>
      
      </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginTop: "10px",
      }}
    >

      {product.map((e) => (
        <div>
          <div key={e.id} className="mainbox">
            <Link to={`/products/${e.id}`}>
              <img
                style={{ height: "300px", cursor: "pointer" }}
                src={e.image}
              />
            </Link>
          </div>
          <div>
            <h4>{e.name}</h4>
            <p>Price:{e.price}</p>
            <button
              onClick={ ()=>gotocart(e.id)}
               className='cartbtn'
            > Add to Cart
            </button>
            <button className="trashbtn" disabled={count<=0}>
              
               <img  onClick={handelremove} className="trash" src={del} alt="" />
              </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Products;
