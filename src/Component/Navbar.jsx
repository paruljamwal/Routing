import React, { useContext } from "react";
import './Style.css'
import { Link, useNavigate } from "react-router-dom";
import home from "../assets/home.gif";
import info from "../assets/information.png";
import greek from "../assets/greek.gif";
import price from "../assets/price.png";
import rec from "../assets/recycling.png";
import troly from "../assets/trolley.png";
import { AuthContext } from "../Context/AuthContext";
import Login from "./Login";
import Logout from "./Logout";
import { Countcreate } from "../Context/Counter";
import { ThemeCreate } from "../Context/ThemeContext";
import light from '../assets/sleep.png'
import dark from '../assets/theme.png'
const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const {counter,count}=useContext(Countcreate)
  const {theme,handelTheme}=useContext(ThemeCreate)
  
  const handleAuth = () => {
    if (isAuth) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "lightblue",
        position: "static",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10%",
          fontWeight: "bolder",
          cursor: "pointer",
          paddingTop: "20px",
          Decoration: "none",
        }}
      >
        <Link to="/user">
          <img
            src={greek}
            style={{ width: "40px", borderRadius: "15px", marginLeft: "15px" }}
          ></img>
        </Link> 
        <div style={{ marginLeft: "25%", display: "flex", gap: "30%" }}>
          <Link to="/">
            <img
              src={home}
              style={{ width: "40px", borderRadius: "15px", marginLeft: "5px" }}
            ></img>
          </Link>
          <Link to="/products">
            <img
              src={rec}
              style={{ width: "40px", borderRadius: "15px", marginLeft: "5px" }}
            />
          </Link>
          <Link to="/about">
            <img
              src={info}
              style={{ width: "40px", borderRadius: "15px", marginLeft: "5px" }}
            />
          </Link>
        </div>
          
        <Link to="/cart">
       <span style={{color:"green",position:"absolute",top:"9px"}}> {count}</span><img
            src={troly}
            style={{ width: "40px", borderRadius: "15px", marginLeft: "5px" }}
          />
        </Link>
         <button className="theme" onClick={()=>handelTheme()} >{theme==="dark"? <img className="mode" src={light}></img> : <img className="mode" src={dark}></img>}</button>
        <button className='login' onClick={handleAuth}>{isAuth ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
