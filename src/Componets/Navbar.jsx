import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-100 text-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link> </li>
        <li><Link to="review">Review</Link></li>
        <li><Link to="aboutus">About us</Link></li>
      </ul>
    </div>
    
    <a href='/' className="hover:btn-neutrallex cursor-pointer flex  gap-2"><img className='w-12 h-12' src="https://static.vecteezy.com/system/resources/previews/045/954/869/non_2x/hotel-icon-3d-design-png.png" alt="" /><p className='text-black font-bold font-serif content-center text-2xl'>Dazzling Dice</p></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base-100">
    <li><Link to="/">Home</Link></li>
        <li><Link to="booking">Booking</Link> </li>
        <li><Link to="review">Review</Link></li>
        <li><Link to="aboutus">About us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="login"><p className="btn btn-primary">Login</p></Link>
  </div>
</div>
  )
}

export default Navbar