import React from "react";
import { NavLink } from "react-router-dom";
import ButtonP from "../../ui/ButtonP";
const DonatedAddUserComp = () => {
  return (
    <div className="bg-add-user-comp">
      <h1
        className="text-center mt-5 fs-1 user-permission-heading fw-bold"
        style={{ color: "#0d6efd" }}
      >
        {" "}
        New User{" "}
      </h1>
      <div className="container container-search-assets-comp">
        <div className="row">
          <div className="col">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 px-4"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Name
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Fixed Assets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Asset Type
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
          <div className="col d-flex justify-center">
            <div className="dropdown ">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User Name
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
          <div className="col d-flex justify-center">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Password
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
          <div className="col">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Email
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
          <div className="col d-flex justify-center">
            <div className="dropdown ">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 px-4"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Role
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
          <div className="col d-flex justify-center"></div>
        </div>
      </div>
      <h1
        className="text-center py-5 fs-2 user-permission-heading"
        style={{ color: "#0d6efd" }}
      >
        Access Level{" "}
      </h1>
      <div className="col d-flex justify-center">
        <div className="dropdown ">
          <a
            className="btn missin fs-5 dropdown-toggle misson py-3 px-4"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
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

      {/* button start */}
      <div className="d-flex justify-center mt-5">
        <ButtonP label={"Add new"} />
      </div>
    </div>
  );
};

export default DonatedAddUserComp;
