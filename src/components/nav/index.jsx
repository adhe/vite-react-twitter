import React from 'react'
import { NavItem } from './NavItem'
import { ReactComponent as IconHome } from '../../assets/icons/icn-home.svg'
import { ReactComponent as IconUser } from '../../assets/icons/icn-user.svg'
import { ReactComponent as IconWrite } from '../../assets/icons/icn-write.svg'
import { ReactComponent as IconSearch } from '../../assets/icons/icn-search.svg'
import { ReactComponent as IconTwitter } from '../../assets/icons/icn-twitter.svg'
import { ReactComponent as IconMessage } from '../../assets/icons/icn-message.svg'
import { ReactComponent as IconChevron } from '../../assets/icons/icn-chevron.svg'
import { ReactComponent as IconNotification } from '../../assets/icons/icn-notification.svg'

export const Nav = () => (
  <nav className="
    relative flex flex-col border-t border-gray-200
    md:(border-t-0 border-r pr-5)
    xl:(pr-8 pl-3)
  ">
    <div className="
      grid grid-cols-4 py-1
      md:(grid-cols-1 gap-y-2)
    ">
      <NavItem to="/#" icon={<IconTwitter className="text-light-blue-500" />} mode="desktop" />
      <NavItem to="/" label="Home" icon={<IconHome />} />
      <NavItem to="/search" label="Search" icon={<IconSearch />} mode="mobile" />
      <NavItem to="/notifications" label="Notifications" icon={<IconNotification />} />
      <NavItem to="/messages" label="Messages" icon={<IconMessage />} />
      <NavItem to="/profile" label="Profile" icon={<IconUser />} mode="desktop" />

      {/* Tweet button goes here */}
      <div className="absolute -top-20 right-5 md:static xl:w-56 md:mt-5 flex justify-center">
        <button className="flex items-center justify-center xl:w-full bg-light-blue-500 hover:bg-light-blue-600 transition-colors duration-300 text-white p-4 md:p-3 rounded-full shadow-lg shadow-light-blue-700">
          <div className="w-8 h-8 md:(w-6 h-6) xl:hidden">
            <IconWrite />
          </div>
          <span className="hidden xl:block font-bold">Tweet</span>
        </button>
      </div>

    </div>

    <div className="hidden md:flex flex-1 items-end py-6">
      <div className="flex items-center hover:bg-light-blue-200 hover:bg-opacity-30 w-full p-2 rounded-full cursor-pointer transition-colors duration-300">
        <div className="flex-none mr-3 md:mr-0 w-10 h-10 bg-red-300 rounded-full"></div>
        <div className="leading-none flex-1 hidden xl:block">
          <p className="font-semibold">Adhe</p>
          <span className="text-gray-500 text-sm">@adhecakson</span>
        </div>
        <div className="w-5 h-5 transform rotate-180 mx-1 text-gray-400 hidden xl:block">
          <IconChevron />
        </div>
      </div>
    </div>
  </nav>
);