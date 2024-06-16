import React from "react";

function OverlayComponent({onClose}) {


 
  return (
    <div className="relative">
    
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50 flex md:items-center items-end justify-center ">
          <div className="bg-white rounded-lg shadow-lg p-5 w-full md:w-5/6 lg:w-3/4 xl:w-1/2 ">

            
            <div className="w-full p-5 border-b-2 border-gray-400 flex justify-between">
                <p className="text-green-700 block text-sm bg-green-100">Let's learn ,share & inspire each others with our passion of computer Enginnering, Sign up now</p>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md">
                <img src="/cross.png" alt="" />
              </button>
            </div>
            <div className="flex justify-between items-center my-4">
              <h2 className="text-xl font-bold">Create Account</h2>
              <h3>Already have an Acocunt? <a className="text-customBlue" href=""> Sign In</a></h3>

            </div>

        
            <div className="flex">  
            {/*left*/}

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
          
          {/*right*/}
            <div className="w-1/2 hidden md:block">
              <img src="/signin.png" alt="" />
              <p className="text-[12px]">by signing up, you are accepting our terms and conditions ,privacy policy</p>
            </div>


            </div>
          </div>
        </div>
    </div>
  );
}

export default OverlayComponent;