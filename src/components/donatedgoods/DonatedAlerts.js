import React from 'react'
import DonatedAlertsComp from './donatedcomp/DonatedAlertsComp'
const DonatedAlerts = () => {
  return (
    <>
    <div className="text-white fw-bold fs-2 ps-4 py-2" style={{background:"#1976d6"}}>Alerts</div>
    <DonatedAlertsComp/>
    </>

  )
}

export default DonatedAlerts