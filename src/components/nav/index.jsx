import React from 'react'
import { NavItem } from './NavItem'
import { ReactComponent as IconHome } from '../../assets/icons/icn-home.svg'
import { ReactComponent as IconSearch } from '../../assets/icons/icn-search.svg'
import { ReactComponent as IconMessage } from '../../assets/icons/icn-message.svg'
import { ReactComponent as IconNotification } from '../../assets/icons/icn-notification.svg'

export const Nav = () => (
  <nav className="bg-red-300 flex flex-col">
    <div className="
      grid grid-cols-4 py-1 border-t border-gray-300
      md:(grid-cols-1 gap-y-2 px-5)
    ">
      <NavItem to="/">
        <IconHome />
      </NavItem>

      <NavItem to="/notifications">
        <IconNotification />
      </NavItem>

      <NavItem to="/search">
        <IconSearch />
      </NavItem>

      <NavItem to="/messages">
        <IconMessage />
      </NavItem>
    </div>
    <div className="hidden md:block bg-blue-300 flex-1">User</div>
  </nav>
);