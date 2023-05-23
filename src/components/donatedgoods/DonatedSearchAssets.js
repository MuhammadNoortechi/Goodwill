import React from 'react'
import DonatedSearchAssetsComp from './donatedcomp/DonatedSearchAssetsComp'
const DonatedSearchAssets = () => {
  return (
   <>
      <div className="text-white fw-bold fs-2 ps-4 py-2" style={{background:"#1976d6" }}>Search Assets</div>
   <DonatedSearchAssetsComp/>
   </>
  )
}

export default DonatedSearchAssets