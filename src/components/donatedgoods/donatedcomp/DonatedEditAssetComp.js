import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DonatedShowModal from "./DonatedShowModal";
const DonatedEditAssetComp = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal =()=>setShowModal(false)

  return (
    <>
        
      <div className="bg-search-assets-comp ">
        <div
          className="heading-asset-component text-center fs-1 pt-5 fw-bold"
          style={{ color: "#0d6efd" }}
        >
          Edit Assets
        </div>
     
        <div className="container container-search-assets-comp ">
          {/* /// */}
          <div className="dropdown d-flex justify-center">
            <a className="btn missin fs-5   py-3 " href="#">
              Tag ID
            </a>
          </div>
         
          {/* button start */}
          <div
            className="d-flex justify-center "
            style={{ marginTop: "15rem" }}
          >
            <button className="btn btn-primary rounded-0 py-0 fs-5  px-4 btn-search-asset "onClick={()=>setShowModal(true)}>
              Edit
            </button>
         
            
          </div>
          {showModal && <DonatedShowModal closeModal={closeModal}/>}
        
        </div>
       
      </div>
   
    </>
  );
};

export default DonatedEditAssetComp;
