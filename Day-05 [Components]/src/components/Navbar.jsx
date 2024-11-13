import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] bg-black text-white flex items-center justify-between px-10 '>
    <h1 className='text-3xl text-yellow-300'>Sheryains</h1>
    <ul className='text-xl flex justify-center items-center gap-5 list-none'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
    </ul>
    </div>
  )
}

export default Navbar