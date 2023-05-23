import React from 'react'
import DonatedDevicesComp from './donatedcomp/DonatedDevicesComp'
const DonatedDevices = () => {
  return (
   <>
   <div className="text-white fw-bold fs-2 ps-4 py-2" style={{background:"#1976d6"}}>Devices</div>
   <DonatedDevicesComp/>
   </>
  )
}

export default DonatedDevices