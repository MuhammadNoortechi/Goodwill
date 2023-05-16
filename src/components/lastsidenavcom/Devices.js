import React from 'react'
import DevicesTable from '../devicescom/DevicesTable'
const Devices = () => {
  return (
    <>
    <div className="text-white fw-bold fs-2 ps-4 py-2" style={{background:"#1976d6"}}>Devices</div>
    <DevicesTable/>
    </>
  )
}

export default Devices