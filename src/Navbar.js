import React from "react";
import good from "./assets/good.JPG";
import smart from "./assets/smart.JPG";
import {useState} from "react"
import { NavLink } from "react-router-dom";
import check from "./assets/check.png"
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"
import NavPage from "./components/NavPage";
const Navbar = () => {
const [loggedin,setLoggedIn]=useState(true)
const toggleRoute =()=>{
  setLoggedIn(!loggedin)
}
  return (
    <>
<div className="container-fluid mx-auto flex flex-wrap  flex-col md:flex-row items-center  bg-white navbar-hhh" style={{borderBottom:"2px solid black",}}>
     <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
       <img src={good} />
     </a>
     <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <img src={check} alt="" className="img-icon-check pb-2"/>
       {/* <NavLink to="/" className="mr-5 fs-5 fw-bold pb-2 ">New Goods</NavLink> */}
       <NavLink  to="/" className="mr-5 fs-5 fw-bold pb-2 ">
       <button onClick={toggleRoute} >New Goods</button>
       </NavLink>
    
       <img src={check} alt="" className="img-icon-check pb-2"/>
       {/* <NavLink to="/donated" className=" fs-5 fw-bold pb-2" >Donated Goods</NavLink> */}
       <NavLink to="/donatedgood" className=" fs-5 fw-bold pb-2">
       <button onClick={toggleRoute}>Donated Goods</button>
       </NavLink>
    
     </div>
     <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
       <img src={smart} />
     </a>
  </div>
 
    </>
  );
};

export default Navbar;
