import React from 'react'
import { NavLink } from 'react-router-dom'
const ButtonS = (props) => {
  return (
           <NavLink>
            <button className="btn-search-export rounded-0 py-0 fs-5 mt-3 px-4">{props.name}</button>
            </NavLink>
  )
}

export default ButtonS