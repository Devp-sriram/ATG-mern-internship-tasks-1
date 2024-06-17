import React, { useState } from "react";
import Existing from './Existing'
import NewUser from './NewUser'

function OverlayComponent({onClose}) {

  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn((prevShowSignIn) =>!prevShowSignIn);
  };
 
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
              <h3>Already have an Acocunt? <a onClick={(e) => { e.preventDefault(); handleSignInClick(); }} className="text-customBlue" href=""> Sign In</a></h3>

            </div>

        
            <div className="flex">  
            {/*left*/}
             {showSignIn? ( <Existing /> ) : (<NewUser />)}

  
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