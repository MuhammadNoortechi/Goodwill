import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Searchasets from "./Searchasets";
import Report from "./Report";

import Devices from "./lastsidenavcom/Devices";
import AddAssets from "./lastsidenavcom/AddAssets";
import Alerts from "./lastsidenavcom/Alerts";
import EditAssets from "./lastsidenavcom/EditAsstes";
import Addusers from "./lastsidenavcom/Addusers";
import DonatedDashboard from "./donatedgoods/DonatedDashboard";
import { useState } from "react";

const NavPage = () => {
  const[newGood,setNewGood]=useState(true)
  const handleToggle =()=>{
    setNewGood(!newGood)
  }
  return (
    <>
    <section>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/search" element={newGood?<Searchasets />:<DonatedDashboard replace to={"/search"}/>}></Route> */}
        <Route path="/search" element={<Searchasets/>}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/assets" element={<AddAssets />}></Route>
        <Route path="/edit" element={<EditAssets />}></Route>
        <Route path="/add" element={<Addusers />}></Route>
        <Route path="/device" element={<Devices />}></Route>
        <Route path="/alert" element={<Alerts />}></Route>
    
      </Routes>
    
    </section>
      {/* <button onClick={handleToggle}>toggle</button> */}
      </>
  );
};

export default NavPage;
