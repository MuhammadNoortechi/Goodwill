import React from "react";

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
              <tr>
                <td className="ps-5"></td>

                <td>All Products</td>
                <td>3,097</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>5,097</td>
              </tr>

              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>

              <tr>
                <td className="ps-5 border-bottom-clr"></td>
                <td className=" border-bottom-clr">All Products</td>
                <td className=" border-bottom-clr">6,997</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td></td>
                <td></td>
              </tr>
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
              style={{ background: "#dddddd", color: "#1976d6" }}
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
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>3,097</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>5,097</td>
              </tr>

              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>

              <tr>
                <td className="ps-5 border-bottom-clr"></td>
                <td className=" border-bottom-clr">All Products</td>
                <td className=" border-bottom-clr">6,997</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td></td>
                <td></td>
              </tr>
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
              style={{ background: "#dddddd", color: "#1976d6" }}
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
            <tbody class="body">
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>3,097</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>5,097</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>{" "}
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>{" "}
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5 border-bottom-clr"></td>
                <td className=" border-bottom-clr">All Products</td>
                <td className=" border-bottom-clr">6,997</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td></td>
                <td></td>
              </tr>
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
              style={{ background: "#dddddd", color: "#1976d6" }}
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
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>3,097</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>5,097</td>
              </tr>

              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td>All Products</td>
                <td>7,597</td>
              </tr>
              <tr>
                <td className="ps-5 border-bottom-clr"></td>
                <td className=" border-bottom-clr">All Products</td>
                <td className=" border-bottom-clr">6,997</td>
              </tr>
              <tr>
                <td className="ps-5"></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <div className="position"></div>
          </table>
        </div>
      </div>
    </>
  );
};

export default DonatedDashboardTable;
