import React from 'react'

export const AppLayout = ({ children }) => (
  <div className="bg-gray-200">
    <div className="min-h-screen flex flex-col md:flex-row md:flex-row-reverse">
      {children}
    </div>
  </div>
);