import React from 'react'
import DonatedAddUserComp from './donatedcomp/DonatedAddUserComp'
const DonatedAddUser = () => {
  return (
   <>
       <div className="text-white fw-bold fs-2 ps-4 py-2" style={{background:"#1976d6"}}>Add User</div>
    <DonatedAddUserComp/>
   </>
  )
}

export default DonatedAddUser