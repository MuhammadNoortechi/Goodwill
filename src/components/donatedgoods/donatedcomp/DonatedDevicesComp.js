import React from 'react'
import { NavLink } from 'react-router-dom'
const DonatedDevicesComp = () => {
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
      <div className=" w-50">
       
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
       
          <div className="d-flex justify-center " style={{marginTop:"15rem"}}>
        <NavLink>
          <button className="btn btn-primary rounded-0 py-0 fs-5  px-4 btn-search-asset ">
            Create
          </button>
        </NavLink>
      </div>
   
      
  
</div>
</div>
</div>




  )
}

export default DonatedDevicesComp