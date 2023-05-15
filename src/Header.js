import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./components/NavPage";
const Header = () => {
  return (
    <>
      <section>
        <div>
          <Navbar />  
        </div>
      </section>

      <section >
        <div className="grid grid-cols-12">
          <div
            className="col-span-3  h-screen  md:col-span-2"
            style={{ borderRight: "2px solid black", background: "#e3e7f0", }}
          >
            <Sidebar />
          </div>

          <div className="col-span-9  h-screen   md:col-span-10">
            <NavPage />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
