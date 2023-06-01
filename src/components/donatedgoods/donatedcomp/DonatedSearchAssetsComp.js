import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonP from "../../ui/ButtonP"
import ButtonS from "../../ui/ButtonS"
const DonatedSearchAssetsComp = () => {
  return (
    <>
  <div className="bg-search-assets-comp ">
      <div className="container container-search-assets-comp ">
        <div className="row ">
          <div className="col-md-4 d-flex justify-center">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle  py-3 "
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
          {/* second col-md-4umn */}
          <div className="col-md-4 d-flex justify-center ">
            <div className="dropdown ">
              <a
                className="btn missin fs-5 dropdown-toggle  py-3"
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

          {/* second col-md-4umn */}
          <div className="col-md-4 d-flex justify-center ">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle  py-3"
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
          <div className="col-md-4 d-flex justify-center">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle  py-3 "
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
          {/* second col-md-4umn */}
          <div className="col-md-4 d-flex justify-center ">
            <div className="dropdown ">
              <a
                className="btn missin fs-5 dropdown-toggle  py-3 px-4"
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

          {/* second col-md-4umn */}
          <div className="col-md-4 d-flex justify-center ">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle  py-3 px-4"
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
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Third only one dropdown start */}
        <div className=" d-flex justify-end mt-5  " >
          <div className="dropdown">
            <a
              className="btn missin fs-5 dropdown-toggle  py-3 px-4 "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{color:"#aaaaaa"}}
            >
           Sector
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
            
            <ButtonP label={"Search"}/>
        </div>
            {/* button start */}
            <div className="d-flex justify-center">
            <ButtonS name={"Export"}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default DonatedSearchAssetsComp