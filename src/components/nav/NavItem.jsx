import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = (props) => {
  const { to, children } = props
  return (
    <div className="flex justify-center">
      <NavLink to={to}>
        <div className="
          p-1 w-10 h-10 hover:bg-green-400 rounded-full text-gray-700 transition duration-300
          md:(p-2 w-12 h-12)
        ">
          {children}
        </div>
      </NavLink>
    </div>
  )
};


