import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' navbar'>
      <h1>LOGO</h1>
      <div className="menu flex justify-center items-center gap-4">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/product'>Product</NavLink>
      </div>
    </div>
  )
}

export default Header