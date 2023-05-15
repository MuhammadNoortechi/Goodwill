import React from 'react'
// import "../newassetcomp/NewAssetsComp.scss"
import { NavLink } from 'react-router-dom'
const NewAssetsComp = () => {
  return (
   <>
    <div className="bg-search-assets-comp">
      <div className="container container-search-assets-comp">
        <div className="row">
          <div className="col">
            <div class="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 px-4"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Tag Code
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
                Asset Type
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
                Asset Category
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

          {/* second column */}
          <div className="col d-flex justify-center">
            <div className="dropdown">
              <a
                className="btn missin fs-5 dropdown-toggle misson py-3 px-3"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Tag color
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
                Qunatity/Waight
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
           Location
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
                className="btn missin fs-5 dropdown-toggle misson py-3 px-4"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
        </div>
        {/* button start */}
        <div className="d-flex justify-center">
            <NavLink>
            <button className="btn btn-primary rounded-0 py-0 fs-5  px-4 btn-search-asset ">Create</button>
            </NavLink>
        </div>
           
      </div>
    </div>
   </>
  )
}

export default NewAssetsComp