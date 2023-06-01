import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../newgooddashboard/Dashboard";
import Searchasets from "../newgoodsearchassets/Searchasets";
import Report from "../report/Report";

import Devices from "../lastsidenavcom/Devices";
import AddAssets from "../lastsidenavcom/AddAssets";
import Alerts from "../lastsidenavcom/Alerts";
import EditAssets from "../lastsidenavcom/EditAsstes";
import Addusers from "../lastsidenavcom/Addusers";
import DonatedDashboard from "../donatedgoods/DonatedDashboard";

import { useState } from "react";

import Navbar from "../navbar/Navbar";
import DonatedSearchAssets from "../donatedgoods/DonatedSearchAssets";
import DonatedAddAssets from "../donatedgoods/DonatedAddAssets";
import DonatedEditAsstes from "../donatedgoods/DonatedEditAssets";
import DonatedAddUser from "../donatedgoods/DonatedAddUser";
import DonatedDevices from "../donatedgoods/DonatedDevices";
import DonatedAlerts from "../donatedgoods/DonatedAlerts";
import Sidebar from "../sidebar/Sidebar";
const HomePage = () => {
  const [newGood, setNewGood] = useState(true);
  const handleToggle = () => {
    setNewGood(!newGood);
  };

  return (
    <>
      <Navbar toggle={handleToggle} />

      <section>
        <div className="grid grid-cols-12">
          <div
            className="col-span-3  h-screen  md:col-span-2"
            style={{
              background: "#e3e7f0",
            }}
          >
            <Sidebar />
          </div>

          <div className="col-span-9  h-screen   md:col-span-10">
            <Routes>
              <Route
                path="/"
                element={
                  newGood ? (
                    <Dashboard />
                  ) : (
                    <DonatedDashboard replace to={"/"} />
                  )
                }
              ></Route>
              <Route
                path="/search"
                element={
                  newGood ? (
                    <Searchasets />
                  ) : (
                    <DonatedSearchAssets replace to={"/search"} />
                  )
                }
              ></Route>

              <Route path="/report" element={<Report />}></Route>
              <Route
                path="/assets"
                element={
                  newGood ? (
                    <AddAssets />
                  ) : (
                    <DonatedAddAssets replace to={"/assets"} />
                  )
                }
              ></Route>
              <Route
                path="/edit"
                element={
                  newGood ? (
                    <EditAssets />
                  ) : (
                    <DonatedEditAsstes replace to={"/edit"} />
                  )
                }
              ></Route>
              <Route
                path="/add"
                element={
                  newGood ? (
                    <Addusers />
                  ) : (
                    <DonatedAddUser replace to={"/add"} />
                  )
                }
              ></Route>
              <Route
                path="/device"
                element={
                  newGood ? (
                    <Devices />
                  ) : (
                    <DonatedDevices replace to={"/device"} />
                  )
                }
              ></Route>
              <Route
                path="/alert"
                element={
                  newGood ? (
                    <Alerts />
                  ) : (
                    <DonatedAlerts replace to={"/device"} />
                  )
                }
              ></Route>
              <Route
                path="/donateddashboard"
                element={<DonatedDashboard />}
              ></Route>
            </Routes>
          </div>
        </div>
      </section>

      {/* <button onClick={handleToggle}>toggle</button> */}
    </>
  );
};

export default HomePage;
