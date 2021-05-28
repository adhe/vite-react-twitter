import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavItem = (props) => {

  // responsive - both screen sixe (mobile & desktop) shown
  // mobile - mobile only
  // desktop - desktop only

  const { to, label, icon, mode = "responsive" } = props
  return (
    <div className={`
      ${mode === "desktop" ? "hidden md:flex"
        : mode === "mobile" ? "flex md:hidden"
          : "flex"
      }
      justify-center xl:justify-start
    `}>
      <NavLink
        exact
        to={to}
        className="no-underline flex items-center hover:bg-light-blue-200 hover:bg-opacity-30 rounded-full transition duration-300 no-underline text-gray-800 hover:text-light-blue-500"
        activeClassName="text-light-blue-500"
      >
        <div className="
          p-1 w-10 h-10
          md:(p-2 w-12 h-12)
        ">
          {icon}
        </div>
        {label && <div className="
          hidden pl-2 pr-5
          xl:(block text-xl font-bold)
          ">{label}</div>}
      </NavLink>
    </div>
  )
};


