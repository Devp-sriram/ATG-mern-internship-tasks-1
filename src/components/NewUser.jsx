import React from 'react'

function NewUser() {
  return (
    <>
    <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-row">
                <input
                  placeholder="firstName"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="text"
                  placeholder="lastName"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col relative">
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
               
                <input
                  type="password"
                  placeholder="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                 <img
                  className="absolute bottom-12 right-2"
                  src="/eye.png" alt="" />
              </div>
              <div className="my-2 w-full ">
              <button className="w-full my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2 focus:outline-none focus:shadow-outline">
                Create Account
              </button>
              <button className='w-full my-2 mx-auto'><img className="mx-auto" src="/fb.png" alt="" /></button>
              <button className='w-full my-2 mx-auto' ><img className="mx-auto" src="/google.png" alt="" /></button>
              </div>
            </div>

            
    </>
  )
}

export default NewUser