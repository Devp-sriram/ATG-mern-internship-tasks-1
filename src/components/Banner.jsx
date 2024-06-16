import React from 'react'

function Banner() {
  return (
        <div className='relative w-full h-[400px] bg-[url(/softwareengineer.jpg)] bg-cover bg-center bg-no-repeat'>
          <div className='flex justify-between items-start p-5 lg:hidden xl:hidden 2xl:hidden '>
            <button>
              <img className="w-16" src="/left-arrow.png" alt="" />
            </button>
            <button className='border-2 border-white text-white rounded p-4 '>Join group</button>
          </div>
          <div className='absolute ml-28  mt-48'>
            <h1 className='text-white text-4xl'>Computer Engineering</h1>
            <p className='text-white text-sm'> 123445 Computer enginners followas this group</p>
          </div>
        </div> 
  )
}

export default Banner