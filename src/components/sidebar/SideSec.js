import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarLastData } from "./SidebarLastData";
import "./SideSec.scss";
const SideSec = () => {
  const activeLink =
    "hover: mt-7 pl-7 w-full  flex justify-start items-center text-primary  space-x-1   fs-5  pt-1 fw-bold";
  const normalLink =
    "hover: pl-7 mt-8 w-full  flex justify-start items-center text-dark  space-x-1  fs-5  pt-1 fw-bold";
  return (
    <React.Fragment>
      <section
        className="sidesec"
        style={{
          marginTop: "10rem",
          borderTop: "1px black solid",
          background: "#e3e7f0",
          height: "100%",
        }}
      >
        <div className="heading-lastdata fw-bold fs-4 ps-4 pt-3">
          System Admin
        </div>
        <div className="text-white">
          {SidebarLastData.map((data, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={data.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="img-icon-check">{data.icon}</span>
                  <span className="mini">{data.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default SideSec;
