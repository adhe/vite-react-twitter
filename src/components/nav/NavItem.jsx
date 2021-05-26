import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = (props) => {
  const { to, label, icon, isMobile = true } = props
  return (
    <div className={`
      ${!isMobile ? "hidden md:flex" : "flex"}
      justify-center xl:justify-start
    `}>
      <NavLink to={to} className="no-underline">
        <div className="flex items-center hover:bg-blue-300 hover:bg-opacity-20 rounded-full transition duration-300 no-underline text-gray-800 hover:text-blue-600">
          <div className="
            p-1 w-10 h-10
            md:(p-2 w-12 h-12)
          ">
            {icon}
          </div>
          <div className="
            hidden pl-2 pr-5
            xl:(block text-xl font-bold)
          ">{label}</div>
        </div>
      </NavLink>
    </div>
  )
};


