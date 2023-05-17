import React from "react";
import { NavLink } from "react-router-dom";
import "./DevicesTable.scss";
const DevicesTable = () => {
  return (
    <div className="bg-device-table-comp">
      <h1
        className="text-center mt-5 fs-2 user-permission-heading fw-bold"
        style={{ color: "#0d6efd" }}
      >
        {" "}
        New Devices
      </h1>
      <div className="container container-search-assets-comp d-flex justify-center">
        <div className="row w-75">
          <div className="col">
            <div className="row ">
              <div className="col-4 name-column py-2  text-capitalize">
                name
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                UR55-SJKL
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                Serial Number
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                623461903768
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                MAC Adress
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                24-E4ffo093:D
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                Model
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                UR55
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                Frimware Version
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                55.2.09
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                Uptime
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                06:49:15
              </div>
            </div>
          </div>
          {/* /// */}
          <div className="col ms-5">
            <div className="row ">
              <div className="col-4 name-column py-2  text-capitalize">
                Date Registered
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                2022-03-15
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                Last Connected
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                2023-3-18
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                Add User
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                Demo
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 name-column py-2  text-capitalize">
                Group
              </div>
              <div className="col-8 name-second-col py-2  text-capitalize">
                Tag
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* button start */}
      <div className="d-flex justify-center mt-5">
        <NavLink>
          <button className="btn btn-primary rounded-0 py-0 fs-5  px-4 btn-search-asset ">
            Create
          </button>
        </NavLink>
      </div>
      <div className="fs-2 text-center mt-3" style={{ color: "#0d6efd" }}>
        Edit Devices
      </div>
    </div>
  );
};

export default DevicesTable;
