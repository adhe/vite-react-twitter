import React from 'react'
import { ReactComponent as IconSparkles } from '../assets/icons/icn-sparkles.svg'
import { ReactComponent as IconSearch } from '../assets/icons/icn-search.svg'

export const AppLayout = ({ children }) => (
  <div className="md:container mx-auto">
    <div className="min-h-screen flex flex-col md:flex-row md:flex-row-reverse">
      {children}
    </div>
  </div>
);

export const AppLayoutDefault = (props) => {
  const { children, label } = props

  return (
    <div className="md:flex md:min-h-screen">
      <div className="w-full md:w-xl border-r border-gray-200">

        <div className="flex items-center px-4 py-3 border-b border-gray-200">
          <div className="font-extrabold text-xl flex-1">{label && label}</div>
          <div className="w-6 h-6 text-light-blue-500">
            <IconSparkles />
          </div>
        </div>

        {children}
      </div>
      <div className="hidden lg:block flex-1 xl:pr-12 pl-6">
        <div className="py-3">
          <div className="group relative bg-gray-200 rounded-full hover:ring hover:ring-light-blue-500 hover:bg-white hover:ring-opacity-75 transition duration-200">
            <div className="absolute inset-y-0 right-0 mx-3 flex items-center">
              <IconSearch className="w-5 h-5 text-gray-600 group-hover:text-light-blue-500 transition duration-200" />
            </div>
            <div className="py-3 px-5 text-gray-400 tracking-wide font-light text-sm">
              Search Twister
            </div>
          </div>
        </div>
        This would be the suggested section
      </div>
    </div>
  )
}