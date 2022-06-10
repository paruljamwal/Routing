import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Product from "./Component/Product";
import About from "./Component/About";
import Cart from "./Component/Cart";
import User from "./Component/User";
import Login from "./Component/Login";
import Logout from "./Component/Logout";
import { useContext } from "react";
import { ThemeCreate } from "./Context/ThemeContext";

function App() {
  const {theme}=useContext(ThemeCreate)
  return (
    <div className='App'  id={
      theme==="dark" ? "light" : "dark"

    } >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        {/* <Route path="/cart" element={<Cart />}></Route> */}
        <Route path="/cart/:id" element={<Cart/>} ></Route>
       
      </Routes>
    </div>
  );
}

export default App;
