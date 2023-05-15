import React from "react";
import "../searchAssetsCom/SearchAssetsTable.scss";
import { NavLink } from "react-router-dom";
const SearchAssetsTable = () => {
  return (
    <div className="bg-search-assets-comp ">
      <div className="container container-search-assets-comp ">
        <div className="row ">
          <div className="col table-col-para">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fixed Assets
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* second column */}
          <div className="col d-flex justify-center table-col-para">
            <div className="dropdown ">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Assets Type
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* second column */}
          <div className="col d-flex justify-center table-col-para">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tag Color
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Second row start with row */}
        <div className="row mt-5">
          <div className="col table-col-para">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status Asset
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* second column */}
          <div className="col d-flex justify-center table-col-para">
            <div className="dropdown ">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 px-4"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* second column */}
          <div className="col d-flex justify-center table-col-para">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 px-4"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Facility
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Third only one dropdown start */}
        <div className=" d-flex justify-end mt-5  table-col-para" style={{marginRight:"2.13rem"}}>
          <div class="dropdown">
            <a
              class="btn missin fs-5 dropdown-toggle misson py-3 px-4 "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Search
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* button start */}
        <div className="d-flex justify-center">
            <NavLink>
            <button className="btn btn-primary rounded-0 py-0 fs-5  px-4 btn-search-asset ">Search</button>
            </NavLink>
        </div>
            {/* button start */}
            <div className="d-flex justify-center">
            <NavLink>
            <button className="btn-search-export rounded-0 py-0 fs-5 mt-3 px-2">Export</button>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SearchAssetsTable;
