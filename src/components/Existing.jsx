import React from 'react'

function Existing() {
  return (
    <>
    <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-col relative my-1.5">
                <input
                  type="email"
                  placeholder="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="password"
                  placeholder="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                 <img
                  className="absolute bottom-12 right-2"
                  src="/eye.png" alt="" />
              </div>
              <div className="my-10 w-full ">
              <button className="w-full my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2 focus:outline-none focus:shadow-outline">
                Signin
              </button>
              <button className='w-full my-2 mx-auto'><img className="mx-auto" src="/fb.png" alt="" /></button>
              <button className='w-full my-2 mx-auto' ><img className="mx-auto" src="/google.png" alt="" /></button>
              </div>
            </div>
    </>
  )
}

export default Existing