import React from "react";
import good from "./assets/good.JPG";
import smart from "./assets/smart.JPG";
import check from "./assets/check.png";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = ({ toggle }) => {


  return (
    <>
      <div
        className="container-fluid mx-auto flex flex-wrap  flex-col md:flex-row items-center  bg-white "
        style={{ borderBottom: "2px solid black" }}
      >
        <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
          <img src={good} />
        </a>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <img src={check} alt="" className="img-icon-check pb-2" />

          <button onClick={toggle} className="fs-5 fw-bold pb-2">
            New Goods
          </button>

          <img src={check} alt="" className="img-icon-check pb-2 ms-2" />

          <button onClick={toggle} className="fs-5 fw-bold pb-2 ">
            Donated Goods
          </button>
        </div>
        <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
          <img src={smart} />
        </a>
      </div>
    </>
  );
};

export default Navbar;
