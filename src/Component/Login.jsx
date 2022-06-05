import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import happy from '../assets/happy.gif'
import './Style.css'
const Login = () => {
  const {login} = useContext(AuthContext)
  const [loginUser,setLoginUser]=useState({})
  const handelChange=(e)=>{
    const {name,value}=e.target;
    setLoginUser({
      ...loginUser,
      [name]:value
    })

  }

  const handelSubmit=(e)=>{
    e.preventDefault()
    login()
  }
  return (
    <div className='loginbox'>
      <div>< img className='happy' src={happy} alt="" /></div>
     <div>
     <form onSubmit={handelSubmit}><br /><br /><br />
        <input className='inpu' placeholder='Enter Your name' onChange={handelChange} name='username' type='text' ></input> <br /><br />
        <input className='inpu' name='email' onChange={handelChange} type='email' placeholder='Pleae Enter Your email' ></input><br /><br /><br />
        <input className='inpu' name='password' onChange={handelChange} type="password" placeholder='Please Enter Your Password..'></input><br /><br /><br />
        <button className='loginbtn' type='submit'>Login</button>
      </form>
     </div>
    </div>
  )
}

export default Login