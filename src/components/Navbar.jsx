import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';

function Menu() {
  return (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>

      <li>
        <NavLink to={'/statistics'}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </li>
    </>
  );
}

function Navbar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className='navbar bg-base-100 w-10/12 mx-auto pt-5'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
            <Menu />
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>Gadgets-heaven</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <Menu />
        </ul>
      </div>
      <div className='navbar-end gap-5'>
        <a className='btn rounded-full text-2xl'>
          <MdOutlineShoppingCart />
        </a>
        <a className='btn rounded-full text-2xl'>
          <FaRegHeart />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
