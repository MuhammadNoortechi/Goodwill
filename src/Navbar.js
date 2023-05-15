import React from "react";
import good from "./assets/good.JPG";
import smart from "./assets/smart.JPG";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
  return (
    <>
<div className="container-fluid mx-auto flex flex-wrap  flex-col md:flex-row items-center " style={{borderBottom:"2px solid black"}}>
     <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
       <img src={good} />
     </a>
     <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <NavLink to="/" className="mr-5 fs-5 fw-bold link-navbar">Good News</NavLink>
       <NavLink to="/search" className="mr-5 fs-5 fw-bold link-navbar">Donated Goods</NavLink>
    
     </div>
     <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
       <img src={smart} />
     </a>
  </div>
    </>
  );
};

export default Navbar;
