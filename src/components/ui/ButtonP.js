import React from 'react'
import { NavLink } from 'react-router-dom'
const ButtonP = props => {
  return (
 
    <NavLink>
    <button className="btn btn-primary rounded-0 py-0 fs-5  px-4 btn-search-asset ">{props.label}</button>
    </NavLink>

  )
}

export default ButtonP