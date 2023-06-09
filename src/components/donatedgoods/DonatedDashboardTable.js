import React from "react";
import { TableData } from "../tabledata/TableData";
const DonatedDashboardTable = () => {
  return (
    <>
      <div className="row gx-0 mt-2 gap-3">
        <div className="col-lg table-cont ms-2">
          <div className="text-center py-4  text-capitalize table-card-heading fs-5">
            Inventory by category
          </div>

          <table
            className="table w-100"
            // style={{ borderBottom: "2px solid black" }}
          >
            <thead>
              <tr>
                <th className="ps-5 border-0">Category</th>
                <th className="border-0">Product</th>
                <th className="border-0">Total Quantity</th>
              </tr>
            </thead>
            <tbody className="body">
              {TableData.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="ps-5"></td>
                    <td>{val.product}</td>
                    <td>{val.total}</td>
                  </tr>
                );
              })}
            </tbody>
            <div className="position"></div>
          </table>
        </div>
        {/* second-table start */}
        <div className="col-lg table-cont me-2">
          <div className="d-flex align-items-center justify-center">
            <div className="text-center py-4  text-capitalize table-card-heading fs-5">
              Inventory by Assets
            </div>
            <div
              className="facility   py-1 px-4 rounded shadow ms-5"
              style={{ background: "#dddddd", color: "#1976d6" ,border:"1px solid #000"}}
            >
              <i
                className="fa-sharp fa-solid fa-caret-down me-2"
                style={{ color: " #1976d6" }}
              ></i>
              Facility
            </div>
          </div>
          <table
            className="table w-100"
            // style={{ borderBottom: "2px solid black" }}
          >
            <thead>
              <tr>
                <th className="ps-5 border-0">Category</th>
                <th className="border-0">Product</th>
                <th className="border-0">Total Quantity</th>
              </tr>
            </thead>
            <tbody className="body">
              {TableData.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="ps-5"></td>
                    <td>{val.product}</td>
                    <td>{val.total}</td>
                  </tr>
                );
              })}
            </tbody>
            <div className="position"></div>
          </table>
        </div>
      </div>
      {/* second row start */}
      <div className="row gx-0 ms-1 mt-2 gap-3">
        <div className="col-lg table-cont ms-1">
          <div className="d-flex align-items-center justify-center">
            <div className="text-center py-4  text-capitalize table-card-heading fs-5">
              Store Asstes type by location
            </div>
            <div
              className="facility   py-1 px-4 rounded shadow ms-5"
              style={{ background: "#dddddd", color: "#1976d6" ,border:"1px solid #000"}}
            >
              <i
                className="fa-sharp fa-solid fa-caret-down me-2"
                style={{ color: " #1976d6" }}
              ></i>
              Facility
            </div>
          </div>
          <table
            className="table w-100"
            // style={{ borderBottom: "2px solid black" }}
          >
            <thead>
              <tr>
                <th className="ps-5 border-0">Category</th>
                <th className="border-0">Product</th>
                <th className="border-0">Total Quantity</th>
              </tr>
            </thead>
            <tbody className="body">
              {TableData.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="ps-5"></td>
                    <td>{val.product}</td>
                    <td>{val.total}</td>
                  </tr>
                );
              })}
            </tbody>
            <div className="position"></div>
          </table>
        </div>
        {/* second-table start */}
        <div className="col-lg table-cont me-2">
          <div className="d-flex align-items-center justify-center">
            <div className="text-center py-4  text-capitalize table-card-heading fs-5">
              Status by facility
            </div>
            <div
              className="facility   py-1 px-4 rounded shadow ms-5"
              style={{ background: "#dddddd", color: "#1976d6" ,border:"1px solid #000"}}
            >
              <i
                className="fa-sharp fa-solid fa-caret-down me-2"
                style={{ color: " #1976d6" }}
              ></i>
              Facility
            </div>
          </div>

          <table
            className="table w-100"
            // style={{ borderBottom: "2px solid black" }}
          >
            <thead>
              <tr>
                <th className="ps-5 border-0">Category</th>
                <th className="border-0">Product</th>
                <th className="border-0">Total Quantity</th>
              </tr>
            </thead>
            <tbody className="body">
              {TableData.map((val, index) => {
                return (
                  <tr key={index}>
                    <td className="ps-5"></td>
                    <td>{val.product}</td>
                    <td>{val.total}</td>
                  </tr>
                );
              })}
            </tbody>
            <div className="position"></div>
          </table>
        </div>
      </div>
    </>
  );
};

export default DonatedDashboardTable;
