import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./components/SidebarData";
import SideSec from "./components/SideSec";
import "./components/Sidebar.scss"
const Sidebar = () => {
  const activeLink =
    "hover: mt-7 pl-7 w-full h-14 flex justify-start items-center text-primary text-2xl space-x-1 font-bold  ";
  const normalLink =
    "hover: pl-7 mt-7 w-full h-14 flex justify-start items-center text-dark text-2xl space-x-1 font-bold";
  return (
    <React.Fragment>
      <section>
        <div className="" >
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="img-icon-check">{item.icon}</span>
                  <span className="mini">{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
        <SideSec/>
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
