import React from 'react'

function Header({ onToggle }) {
  return (
    <>
    <div className='hidden lg:flex h-6 items-center justify-between p-4  m-5'>
        <img className="w-32" src="./assets/whole.png" alt="" />
        <input className="w-1/2 m-5 p-2 rounded-2xl" type="text" placeholder='search anything anout ATG'/>
        <p className='mr-10 text-xl '>Create account<a onClick={(e) => { e.preventDefault(); onToggle(); }} className="text-blue-700 "href=""> It's free</a></p>
    </div>
    </>
  )
}

export default Header