import React from "react";
import "./TableCards.scss";
import { TableData } from "../tabledata/TableData";
const TableCards = () => {
  return (
    <>
    <div className="row gx-0 mt-2 gap-3">
        <div className="col-lg table-cont ms-2">
          <div className="text-center py-4  text-capitalize table-card-heading fs-5">
            Warehouse Overview:Product Quantities By Category
          </div>

          <table className="table w-100">
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
          <div className="text-center py-4  text-capitalize table-card-heading fs-5">
            Warehouse Overview:Product Quantities By Category{" "}
          </div>
          <table className="table w-100">
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
          <div className="text-center py-4  text-capitalize table-card-heading fs-5">
            Warehouse Overview:Product Quantities By Category{" "}
          </div>
          <table className="table w-100">
            <thead>
              <tr>
                <th className="ps-5 border-0">Category</th>
                <th className="border-0">Product</th>
                <th className="border-0">Total Quantity</th>
              </tr>
            </thead>
            <tbody class="body">
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
          <div className="text-center py-4  text-capitalize table-card-heading fs-5">
            Warehouse Overview:Product Quantities By Category{" "}
          </div>
          <table className="table w-100">
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

export default TableCards;
