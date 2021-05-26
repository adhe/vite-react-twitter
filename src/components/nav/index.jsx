import React from 'react'
import { NavItem } from './NavItem'
import { ReactComponent as IconHome } from '../../assets/icons/icn-home.svg'
import { ReactComponent as IconSearch } from '../../assets/icons/icn-search.svg'
import { ReactComponent as IconTwitter } from '../../assets/icons/icn-twitter.svg'
import { ReactComponent as IconMessage } from '../../assets/icons/icn-message.svg'
import { ReactComponent as IconNotification } from '../../assets/icons/icn-notification.svg'

export const Nav = () => (
  <nav className="
    flex flex-col border-t border-gray-200
    md:(border-t-0 border-r)
  ">
    <div className="
      grid grid-cols-4 py-1
      md:(grid-cols-1 gap-y-2 px-5)
    ">
      <NavItem to="/#" icon={<IconTwitter />} isMobile={false} />
      <NavItem to="/" label="Home" icon={<IconHome />} />
      <NavItem to="/notifications" label="Notifications" icon={<IconNotification />} />
      <NavItem to="/search" label="Search" icon={<IconSearch />} />
      <NavItem to="/messages" label="Messages" icon={<IconMessage />} />
    </div>
    <div className="hidden md:flex flex-1 items-end justify-center py-3">
      <div className="w-10 h-10 bg-red-300 rounded-full"></div>
    </div>
  </nav>
);