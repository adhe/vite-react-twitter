import React from 'react'

function App() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="
          bg-white rounded-md p-4 shadow-lg
          lg:(bg-gray-800 rounded-full py-8 px-12 shadow-xl)
        ">
          <h2 className="
            text-2xl font-semibold text-center mb-1 text-red-400
            lg:(text-4xl font-extrabold text-left mb-3 text-green-300)
          ">Hello Vite, React, and Windi!</h2>
          <p className="
            text-gray-500 text-sm italic font-light
            lg:(text-gray-400 text-2xl underline not-italic)
          ">Testing-testing ahh 😎</p>
        </div>
      </div>
    </div>
  )
}

export default App
